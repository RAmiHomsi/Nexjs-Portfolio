import React from "react";
import Link from "next/link";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-2 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.path}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent md:p-0 hover:text-white "
            aria-current="page"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
