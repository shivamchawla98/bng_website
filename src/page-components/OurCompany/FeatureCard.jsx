"use client";

import Image from "next/image";

export const FeatureCard = ({ title, description, onClick, logo }) => (
  <button
    className="flex flex-col items-center p-6 text-center hover:transform: scaleY(1.25) duration-300"
    onClick={() => {
      onClick && onClick();
    }}
  >
    <div className="w-[100px] md:w-[150px]">
      <Image
        className="transition-transform transform hover:scale-110 duration-300"
        src={logo}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} // required for responsive layout
        alt="Feature logo"
      />
    </div>
    <h3 className="text-xl font-semibold mt-2 cursor-text text-primary">{title}</h3>
    <p className="text-gray-600 mx-4 cursor-text text-[18px]">{description}</p>
  </button>
);
