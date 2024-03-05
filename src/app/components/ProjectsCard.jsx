import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectsCard = ({ imgUrl, title, href, githref }) => {
  return (
    <div>
      <div
        className="group rounded-t-xl h-52 md:h-72 bg-center bg-no-repeat relative overflow-hidden"
        src={imgUrl}
        alt={title}
        width={300}
        height={200}
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="w-full h-full justify-center items-center hover:backdrop-brightness-50 group-hover:flex hidden">
          {href && (
            <Link
              href={href}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Link>
          )}
          {githref && (
            <Link
              href={githref}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Link>
          )}
        </div>
      </div>
      <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
        <h5 className="font-lg font-semibold">{title}</h5>
      </div>
    </div>
  );
};

export default ProjectsCard;
