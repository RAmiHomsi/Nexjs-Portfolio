"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Web",
    id: "web",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex items-center">
          <Image
            src="/node.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          NodeJs
        </li>
        <li className="flex items-center">
          <Image
            src="/express.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          ExpressJs
        </li>
        <li className="flex items-center">
          <Image
            src="/ts.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          TypeScript
        </li>
        <li className="flex items-center">
          <Image
            src="/nextjs.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          NextJs
        </li>
        <li className="flex items-center">
          <Image
            src="/react.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          ReactJs
        </li>
        <li className="flex items-center">
          <Image
            src="/tailwind.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Tailwind
        </li>
        <li className="flex items-center">
          <Image
            src="/mui.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Material UI
        </li>
        <li className="flex items-center">
          <Image
            src="/redux.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Redux
        </li>
        <li className="flex items-center">
          <Image
            src="/graghql.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          GraphQL
        </li>
        <li className="flex items-center">
          <Image
            src="/R.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Socket.IO
        </li>
        <li className="flex items-center">
          <Image
            src="/tqr.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          MongoDB
        </li>
        <li className="flex items-center">
          <Image
            src="/mysql.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          MySQL
        </li>
        <li className="flex items-center">
          <Image
            src="/jest-logo.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Jest
        </li>
        <li className="flex items-center">
          <Image
            src="/docker.webp"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Docker
        </li>
        <li className="flex items-center">
          <Image
            src="/git.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Git/GitHub
        </li>
        <li className="flex items-center">
          <Image
            src="/stripe.webp"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Stripe
        </li>
      </ul>
    ),
  },
  {
    title: "Mobile",
    id: "mobile",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex items-center">
          <Image
            src="/react.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          React Native
        </li>
        <li className="flex items-center">
          <Image
            src="/flutter-logo.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Flutter
        </li>
        <li className="flex items-center">
          <Image
            src="/firebase.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Firebase
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex items-center">
          <Image
            src="/cs.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />
          Computer Science at Lund University, Sweden
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex items-center">
          <Image
            src="/logo_aws.png"
            alt="Image"
            width={16}
            height={16}
            className="mr-2"
          />{" "}
          AWS Developer Associate (soon)
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("web");

  const handleTabChange = (id) => {
    setTab(id);
  };
  return (
    <section id="about" className="text-white">
      <div className="gap-8  py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/horse.png" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why choosing me
          </h2>
          <p className="text-white text-base md:text-lg">
            I am a passionate Full Stack Software Engineer with a unique blend
            of formal education and self-taught expertise. My journey in the
            world of web development began at Lund University, where I dived in
            the world of Computer Science, equipping myself with a strong
            foundation of theoretical knowledge. I have experience working with
            MERN Stack, NextJs, Socket.IO, TypeScript, Redux, GraphQL, HTML,
            CSS, Jest, Docker and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create interactive and
            responsive amazing applications.
          </p>
          <br></br>
          <p className="text-white text-base md:text-lg">
            Enter rami as name (if needed), email: rami@gmail.com and pass:
            1234567 to login as admin and explore the projects
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("web")}
              active={tab === "web"}
            >
              Web
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("mobile")}
              active={tab === "mobile"}
            >
              Mobile
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
