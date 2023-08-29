import React from "react";

const SocialIcon = ({ text, icon, color }) => {
    const bgColorClass = color ? `bg-${color}` : "bg-gray-700";

  return (
    <li
      className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bgColorClass}`}
    >
      <a
        className="flex justify-between items-center w-full text-gray-300"
        href="/"
      >
        {text}
        {icon}
      </a>
    </li>
  );
};

export default SocialIcon;