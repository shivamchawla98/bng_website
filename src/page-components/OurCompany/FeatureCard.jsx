"use client";

import Image from "next/image";

export const FeatureCard = ({ title, description, onClick, logo }) => (
  <button
    className="flex flex-col items-center p-6 text-center cursor-pointer hover:transform: scaleY(1.25) duration-300"
    onClick={() => {
     
      onClick && onClick(); // Check if onClick exists and call it
    }}>
    <Image src={logo} width={150} className="  rounded-lg" />
    <h3 className="text-xl  font-semibold mt-2 text-primary">{title}</h3>
    <p className="text-gray-600  m-0 text-[18px]">{description}</p>
  </button>
);
