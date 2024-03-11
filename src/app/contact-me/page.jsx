import React from "react";
import ContactForm from "../components/ContactForm";
import { Button } from "../components/ui/moving-border";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center bg-[#00040D]">
      <Button borderRadius="1.75rem" className="bg-[#141316] border-slate-800">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full md:w-[80%] p-8">
            <ContactForm />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default Page;
