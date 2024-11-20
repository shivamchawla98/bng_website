import React from "react";
import Image from "next/image";

export const CommonHeroSection = ({ title, subtitle, bgColor, textColor }) => {
  return (
    <section
      style={{  color: textColor }}
      className="relative h-[400px] bg-primaryBg flex items-center justify-start pl-10">
      <div className="flex flex-col">
        <h1 className="text-[55px] font-bold text-white relative z-10">
          {title}
        </h1>
        <h2 className="text-[52px] font-bold text-white relative z-10">
          {subtitle}
        </h2>
      </div>
    </section>
  );
};

// Default props for fallback
