import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return <div name="home" className="w-full h-screen bg-[#0a192f]">
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1>Katarzyna Zielińska</h1>
        <h2>Software engineer</h2>
        <div>
            <button>View work <HiArrowNarrowRight></HiArrowNarrowRight></button>
        </div>
    </div>
  </div>;
};

export default Home;
