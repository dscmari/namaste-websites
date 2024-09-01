import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { z } from "zod";
import { rateLimit } from '../../utils/rateLimit';
import { headers } from "next/headers";

// Define a validation schema for the form data
const emailSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "Bitte einen Namen eintragen"),
  number: z.string().optional(), // This is optional
  message: z.string().min(1, "Bitte beschreibe kurz dein Anliegen"),
});

export async function POST(request: NextRequest) {
  try {
    const ip = headers().get("x-forwarded-for") ?? "unknown";
    const limit = rateLimit(ip);
    if(limit) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }
    // Parse and validate request body
    const body = await request.json();
    const { email, number, name, message } = emailSchema.parse(body);

    const transport = nodemailer.createTransport({
      host: "smtps.udag.de",
      port: 587, // You can also use 465 if you prefer SSL/TLS
      secure: false, // true for port 465, false for other ports (587 with STARTTLS)
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: `Message from ${name} (${email})`,
      text: `${email}\n${name}\n${number}\n${message}`,
    };

    await transport.sendMail(mailOptions);
    console.log("Email sent successfully");

    return NextResponse.json({ message: "Deine Kontaktanfrage wurde erfolgreich versendet." });
  } catch (err) {
    // Log the error for debugging purposes
    console.error("Error:", err);

    // Return a generic error message to the client
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
