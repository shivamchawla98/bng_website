import Image from "next/image";
import React from "react";
import Logo1 from "@/app/images/logos/logo1.png";
function OurPartners() {
  return (
    <div className=" bg-secondryBg  mx-auto max-w-screen-xl flex flex-col justify-center items-center text-center  lg:px-6">
      <div className="relative">
          <h2 className="text-[40px] font-bold  text-[#27293B] text-center mb-12 relative z-10">
            Our Partners
          </h2>
          <h2
            className="absolute text-center top-[-30px] md:left-[30%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true">
            Our Partners
          </h2>
        </div>
      <div className="flex items-center justify-center w-full md:space-x-10 flex-wrap">
        {[...Array(6)].map((_, index) => (
          <Image key={index} src={Logo1} width={150} />
        ))}
      </div>
    </div>
  );
}

export default OurPartners;
