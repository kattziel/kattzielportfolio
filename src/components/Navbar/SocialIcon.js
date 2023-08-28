import React from "react";

const SocialIcon = ({ text, icon, color }) => {
  return (
    <li
    //   className={`w-[160px] h-[60px] flex justify-between items-center ml-[100px] hover:ml-[-10px] duration-300 ${
    //     color ? `bg-${color}` : "bg-[#123456]"
    //   }`}
      className={`w-[160px] h-[60px] flex justify-between items-center ml-[100px] hover:ml-[-10px] duration-300 ${
        color ? `bg-[${color}]` : "bg-[#551256]"
      }`}
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

{
  /* <FaFacebook size={30} /> */
}
{
  /* bg-blue-600 */
}
