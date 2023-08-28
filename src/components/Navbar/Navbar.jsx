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
      {/* <ul className="hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-column justify-center items-center"> */}
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
            icon={<FaFacebook size={30} color={"#1E88E5"} />}
          />
          <SocialIcon
            text={"Github"}
            icon={<FaGithub size={30} color={"#333333"} />}
          />
          <SocialIcon
            text={"Email"}
            icon={<HiOutlineMail size={30} color={"#6fc2b0"} />}
          />
          <SocialIcon
            text={"Resume"}
            icon={<BsFillPersonLinesFill size={30} color={"#565f65"} />}
          />

          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[100px] hover:ml-[-10px] duration-300 bg-[#565f65]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
