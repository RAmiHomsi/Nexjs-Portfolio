import React from "react";

const ContactForm = () => {
  return (
    <form className="text-center">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
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
      <button className="mx-auto px-6 mb-10 py-3 text-sm font-bold text-white uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
