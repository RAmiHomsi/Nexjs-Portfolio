"use client";
import React from "react";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      }),
    });

    if (response.ok) {
      toast.success("Email sent successfully! Thanks");
    } else {
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            required
            placeholder="Your topic"
            name="subject"
            className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            id="message"
            className="text-black placeholder-gray-400 bg-white text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>
        <button
          type="submit"
          className="mx-auto px-6 mb-10 py-3 text-sm font-bold text-white uppercase bg-sky-800 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
