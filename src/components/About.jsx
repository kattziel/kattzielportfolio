import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Katarzyna Zielińska. Thank you for visiting my portfolio. Please take a
              look around.
            </p>
          </div>
          <div>
            <p className="my-2">
              I am a passionate and enthusiastic software engineer specializing
              in React and React Native. With a strong foundation in web and
              mobile development, I strive to create engaging and user-friendly
              applications that make a positive impact.
            </p>
            <p className="my-2">
              My journey into the world of software development began with my
              fascination for crafting digital experiences that are both
              functional and visually appealing. During numerous courses, I had
              the opportunity to dive deep into the React ecosystem, where I
              found my true passion. Working on various projects, I honed my
              skills in building interactive user interfaces and seamless user
              experiences.
            </p>
            <p className="my-2">
              If you are looking for an ambitious, hard-working, creative and
              communicative team member, feel free to contact me 📨 📥 We should
              give it a try 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
