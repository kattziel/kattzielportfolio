import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/Kattziel.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "150px" }} />
      </div>

      {/* menu */}
      <div className="hidden md:flex">
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* hamburger */}
      <div className="hidden">
        <FaBars />
      </div>
      {/* mobile menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
