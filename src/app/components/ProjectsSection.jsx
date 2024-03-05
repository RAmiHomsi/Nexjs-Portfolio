"use client";
import React, { useState } from "react";
import ProjectTag from "./ProjectTag";
import ProjectsCard from "./ProjectsCard";

const projectsData = [
  {
    id: 1,
    title: "MERN Airbnb Clone",
    image: "/images/projects/1.png",
    href: "https://rami-airbnb-clone.vercel.app/",
    githref: "https://github.com/RAmiHomsi/airbnb-clone",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Nextjs Pizza Restaurant",
    image: "/images/projects/2.png",
    href: "https://nextjs14-food-ordering-app.vercel.app/",
    githref: "https://github.com/RAmiHomsi/Nextjs14-food-ordering-app",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "E-commerce Application",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "React Firebase Template",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
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
      <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
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
