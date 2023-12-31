import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl py-2 text-pink-700">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Katarzyna Zielińska
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Software engineer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          specializing in building responsive web applications as well as mobile
          apps.
          <br />I am able to work in Polish 🇵🇱, English 🇬🇧🇺🇸 and German 🇩🇪.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View work
            </Link>
            <HiArrowNarrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
