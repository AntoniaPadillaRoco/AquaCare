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
    <footer className="bg-back p-8 xl:p-20">

        
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="xl:w-1/6 text-center -mt-4 ">
        <img
          src="AquaCare-logo.png"
          className="text-2xl font-bold relative p-1 bg-back"
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
      <div className="mt-8">
        <h3 className="text-lg font-bold text-black text-center md:text-left">
          Company
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-secondary mt-4 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-secondary mt-4 hover:text-white transition-color"
          >
            Press
          </a>
          <a
            href="#"
            className="text-secondary mt-4 hover:text-white transition-color"
          >
            Investors
          </a>
          <a
            href="#"
            className="text-secondary mt-4 hover:text-white transition-color"
          >
            Events
          </a>
          <a
            href="#"
            className="text-secondary mt-4 hover:text-white transition-color"
          >
            Terms of use
          </a>
          <a
            href="#"
            className="text-secondary mt-4 hover:text-white transition-color"
          >
            Privacy policy
          </a>
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-prim text-white rounded-xl"
          >
            Contact Us
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © AquaCare 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
