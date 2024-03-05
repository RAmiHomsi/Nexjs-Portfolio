import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`border-2 rounded-full px-6 py-3 text-xl cursor-pointer ${
        isSelected
          ? "border-2 text-white border-sky-900"
          : "border text-[#ADB7BE] border-slate-600 hover:border-white"
      }`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
