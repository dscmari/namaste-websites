import { FormData } from "../components/Contact";

export async function sendEmail(data: FormData) {
  try {
    console.log("sendEmail is called");
    const apiEndpoint = "/api/email"; //delete namaste-webistes in path for deployment other than gh-pages

    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return result.message; // Success message
    } else {
      throw new Error(result.error || "Something went wrong");
    }
  } catch (error: unknown) {
    // Type-check the error to access the message safely
    if (error instanceof Error) {
      // Handle known error types
      throw new Error(error.message || "Failed to send email");
    } else {
      // Handle unexpected error types
      throw new Error("An unexpected error occurred");
    }
  }
}
