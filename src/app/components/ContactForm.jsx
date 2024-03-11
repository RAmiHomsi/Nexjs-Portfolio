"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

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

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <div>
      {emailSubmitted ? (
        <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
      ) : (
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
      )}
    </div>
  );
};

export default ContactForm;
