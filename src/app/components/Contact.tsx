"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import Link from "next/link";

export type FormData = {
  name: string;
  number: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<FormData>();
  const [feedback, setFeedback] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const message = await sendEmail(data);
      setFeedback(message); // Display success message
    } catch (error) {
      if (error instanceof Error) {
        setFeedback(error.message); // Display error message
      } else {
        setFeedback("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="p-4 max-w-3xl md:mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block md:text-xl">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border border-gray-300 py-3 px-6 text-gray-700 outline-none focus:border-cadedBlue focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block md:text-xl">
            Emailadresse
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 py-3 px-6 text-gray-700 outline-none focus:border-cadedBlue focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="number" className="mb-3 block md:text-xl">
            Telefonnummer (optional)
          </label>
          <input
            type="text"
            placeholder="Telefonnummer"
            className="w-full rounded-md border border-gray-300 py-3 px-6 text-gray-700 outline-none focus:border-cadedBlue focus:shadow-md"
            {...register("number", { required: false })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="mb-3 block md:text-xl">
            Nachricht
          </label>
          <textarea
            rows={4}
            placeholder="Ihre Nachricht"
            className="w-full rounded-md border border-gray-300 py-3 px-6 text-gray-700 outline-none focus:border-cadedBlue focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <div>
            <label className="">
              <input type="checkbox" className="form-checkbox" required />
              <span className="ml-2 text-sm text-gray-700">
                Ich habe die{" "}
                <Link href="/Datenschutz" className="text-blue-500 underline">
                  Datenschutzerklärung
                </Link>{" "}
                zur Kenntnis genommen.
              </span>
            </label>
          </div>
          <div className="text-center">
            <button className="hover:shadow-form rounded-md bg-namasteGreen py-3 px-8 m-6 font-semibold text-white outline-none">
              Senden
            </button>
          </div>
        </div>
      </form>
      {feedback && (
        <div className="mt-4 text-center text-xl">
          <p
            className={
                feedback.includes("Failed") || feedback.includes('limit') ? "text-red-500" : "text-green-500"
            }
          >
            {feedback}
          </p>
        </div>
      )}
    </div>
  );
}
