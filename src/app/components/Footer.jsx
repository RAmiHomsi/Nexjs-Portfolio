import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] bg-[#080808] z-10 text-white">
      <div className="container p-12 flex justify-between">
        <div className="flex flex-row gap-4">
          <Link href="https://github.com/RAmiHomsi?tab=repositories">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/rami-homsi-99117b280">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
