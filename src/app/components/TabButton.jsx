import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-white ${
          active ? "text-white border-gray-300 border-b" : "text-[#ADB7BE]"
        }`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
