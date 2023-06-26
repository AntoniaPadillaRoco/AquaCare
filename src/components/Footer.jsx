import React from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-ran p-8 xl:p-20">

        
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="xl:w-1/6 text-center -mt-4 ">
        <img
          src="AquaCare-logo.png"
          className="text-2xl font-bold relative p-1"
        />
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="#" className="block text-white p-4 bg-prim rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-prim rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-prim rounded-full">
            {" "}
            <RiTwitterLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-prim rounded-full">
            {" "}
            <RiGithubLine />{" "}
          </a>
        </nav>
      </div>
      
      <div className="mt-20">
        <p className="text-third text-center">
          © AquaCare 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
