import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../../assets/Kattziel.png";
import SocialIcon from "./SocialIcon";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "150px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      <ul
        className={
          !nav
            ? `hidden`
            : `absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center`
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <SocialIcon
            text={"Linkedin"}
            color="blue-600"
            icon={<FaFacebook size={30} />}
          />
          <SocialIcon
            text={"Github"}
            // color="gray-600"
            icon={<FaGithub size={30} />}
          />
          <SocialIcon
            text={"Email"}
            color="cyan-500"
            icon={<HiOutlineMail size={30} />}
          />
          <SocialIcon
            text={"Resume"}
            // color="pink-700"
            icon={<BsFillPersonLinesFill size={30} />}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;