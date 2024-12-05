"use client";

import Image from "next/image";

export const FeatureCard = ({ title, description, onClick, logo }) => (
  <button
    className="flex flex-col items-center p-6 text-center cursor-pointer hover:transform: scaleY(1.25) duration-300"
    onClick={() => {
      console.log(`Clicked on ${title}`);
      onClick && onClick(); // Check if onClick exists and call it
    }}>
    <Image src={logo} width={70} className=" bg-cstm-bg-rad-grad-memb-benfts p-4 rounded-full" />
    <h3 className="text-xl text-[#27293B] font-semibold mt-2">{title}</h3>
    <p className="text-gray-600 m-0 text-[18px]">{description}</p>
  </button>
);
