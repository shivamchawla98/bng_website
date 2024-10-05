import Image from "next/image";
import React from "react";
import Logo1 from "@/app/images/logos/logo1.png";
function OurPartners() {
  return (
    <div className="  mx-auto max-w-screen-xl flex flex-col justify-center items-center text-center lg:py-16 lg:px-6">
             <h2 className="mb-4 text-[52px] tracking-tight font-extrabold text-black ">
            Our Partners
          </h2>
      <div className="flex items-center justify-center w-full md:space-x-10 flex-wrap">
 
        {[...Array(6)].map((_, index) => (
          <Image key={index} src={Logo1} width={150} />
        ))}
      </div>
      
    </div>
  );
}

export default OurPartners;
