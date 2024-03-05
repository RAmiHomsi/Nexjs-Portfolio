import React from "react";
import ContactForm from "../components/ContactForm";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center bg-[#121212]">
      <div
        style={{ backgroundImage: "url(/images/wp2757951.webp)" }}
        className="h-[60%] w-[80%] md:w-[60%] mx-auto relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-0 right-0 p-8 md:w-[40%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
