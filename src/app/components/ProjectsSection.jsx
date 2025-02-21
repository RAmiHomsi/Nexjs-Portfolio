"use client";
import React, { useState } from "react";
import ProjectTag from "./ProjectTag";
import ProjectsCard from "./ProjectsCard";

const projectsData = [
  {
    id: 1,
    title: "MERN Airbnb Clone",
    description:
      "A fullstack booking app using with all the main functionality. You can create, delete, update and even book a place and see your booking. You can open a place and see gallery and information about it",
    image: "/images/projects/1.png",
    href: "https://rami-airbnb-clone.vercel.app/",
    githref: "https://github.com/RAmiHomsi/airbnb-clone",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Nextjs Pizza Restaurant",
    description:
      "Interactive menu showcasing a variety of pizza options. secure user authentication and authorization functionalities. users can choose their preferred extras on the pizza. seamless shopping cart",
    image: "/images/projects/2.png",
    href: "https://nextjs14-food-ordering-app.vercel.app/",
    githref: "https://github.com/RAmiHomsi/Nextjs14-food-ordering-app",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "MERN E-commerce",
    description:
      "A comprehensive product catalog with various categories and filters to enable users to browse and search for products easily and even save favorite orders. secure user authentication functionalities, allowing users to register, login, and manage their profiles securely. Implemented authorization mechanisms to control access to certain features based on user roles. fully functional shopping cart system with paypal payment. Developed an order management system to enable users to view their order history, track order status. simple admin dashboard with features for managing products, categories, users, orders, and inventory effectively.",
    image: "/images/projects/3.png",
    href: "https://rami-mern-store.onrender.com/",
    githref: "https://github.com/RAmiHomsi/mern-store",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Nextjs Blog App",
    image: "/images/projects/4.png",
    description:
      "Secure user authentication functionalities, allowing users to register, login, and manage their profiles securely. Users can create, view, edit, and delete blog posts seamlessly, providing a dynamic and interactive user experience. Designed the application with a responsive layout and dark/light mode",
    href: "https://next-js-13-full-stack-blog-app.vercel.app/",
    githref: "https://github.com/RAmiHomsi/Next.js-13-Full-Stack-Blog-App",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "MERN News",
    description:
      "A fullstack news app where users can create, read, edit, and delete their own post, providing a dynamic and interactive user experience with secure user authentication functionalities, allowing  to register, login, and manage their profiles securely.Designed the application with a responsive layout",
    image: "/images/projects/5.png",
    href: "https://rami-fullstack-news.vercel.app/",
    githref: "https://github.com/RAmiHomsi/fullstack-MERN-blog",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "AI SaaS Chat Bot using MERN + TypeScript",
    description:
      "This is an AI Chatbot application, inspired by ChatGPT, by using MERN Stack and OpenAI It's a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted. It's a completely secure application using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.",
    image: "/images/projects/6.png",
    href: "https://rami-saas-chatbot.vercel.app/",
    githref: "https://github.com/RAmiHomsi/MERN-Saas-AI-chatbot",
    tag: ["All", "Web"],
  },
  {
    id: 7,
    title: "Nextjs + TypeScript Cars Showcase",
    description:
      "Developed with Typescript and Next.js and leveraging its server-side rendering capabilities, Metadata Optimization and SEO, the Car Showcase website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience.",
    image: "/images/projects/7.png",
    href: "https://nextjs14-cars-showcase.vercel.app/",
    githref: "https://github.com/RAmiHomsi/Nextjs14-cars-showcase",
    tag: ["All", "Web"],
  },
  {
    id: 8,
    title: "Google Docs Clone using MERN + Socket.IO",
    description:
      "Basic Google Docs bar is implemented With React, Nodejs, Socket.io, and MongoDB Real-time synchronization: any client connected on a specific document can write in real time, everything is synchronized between clients Multi documents handling: you can connect several clients on the same document, or on different ones (new one created by default) Data is persisted: start again your clients on same URL and you'll get back data Possibility to print the documents",
    image: "/images/projects/8.png",
    href: "https://rami-socket-io-google-docs-clone.onrender.com",
    githref: "https://github.com/RAmiHomsi/MERN-socket.io-google-docs-clone",
    tag: ["All", "Web"],
  },
  {
    id: 9,
    title: "React Native Todo-list",
    description:
      "A simple application where the user can create, update and delete a specific todo",
    image: "/images/projects/10.jpg",
    githref: "https://github.com/RAmiHomsi/React-native-Todolist",
    tag: ["All", "Mobile"],
  },
  {
    id: 10,
    title: "React Native NFT Showcase",
    description:
      "A very basic NFTS marketplace contains three pages with search functionality built with React native and Expo",
    image: "/images/projects/9.png",
    githref: "https://github.com/RAmiHomsi/React-Native-NFT-app",
    tag: ["All", "Mobile"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  return (
    <>
      <h1
        id="projects"
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
      >
        Projects
        <p className="text-white text-base md:text-lg">
          Login as admin email: rami@gmail.com and pass: 1234567
        </p>
      </h1>

      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="mb-8 grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            href={project.href}
            githref={project.githref}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
