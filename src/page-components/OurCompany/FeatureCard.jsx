"use client";

import conferance1 from "@/app/images/Appearance.svg";
import Image from "next/image";

export const FeatureCard = ({ title, description, onClick }) => (
  <button
    className="flex flex-col items-center p-6 text-center cursor-pointer"
    onClick={() => {
      console.log(`Clicked on ${title}`);
      onClick && onClick(); // Check if onClick exists and call it
    }}>
    <Image src={conferance1} width={70} />
    <h3 className="text-xl text-[#27293B] font-semibold mt-2">{title}</h3>
    <p className="text-gray-600 m-0">{description}</p>
  </button>
);
