"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-12 my-4"
      style={{ backgroundImage: "url(/images/2641268.gif)" }}
    >
      <div className=" col-span-7 place-self-center place-items-center grid lg:place-items-start px-4">
        <h1 className="text-white mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700">
            Hello, I am RAmi{" "}
          </span>
          <br></br>
          <TypeAnimation
            sequence={["Full Stack Software Engineer", 1000]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
          Make anything possible with Web Development
        </p>
        <div>
          <Link
            href="/contact-me"
            className="px-6 inline-block py-3 w-full rounded-full mr-4 bg-gradient-to-r from-slate-400 to-slate-700 text-center"
          >
            Hire Me
          </Link>
        </div>
      </div>

      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative border border-sky-900">
          <Image
            src="/images/hero_image.png"
            alt="hero image"
            width={400}
            height={400}
            className="transform translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
