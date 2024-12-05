import Image from "next/image";
import React from "react";
import FORALOGO from "@/app/images/logos/latest-members/FORA-LOGO.png";
import FORCELOGO from "@/app/images/logos/latest-members/force.png";
import JBKLINELOGO from "@/app/images/logos/latest-members/JBK-Line.png";
import OCEANSHIPPINGLOGO from "@/app/images/logos/latest-members/ocean-shipping.png";
import RADIUSLOGISTICSLOGO from "@/app/images/logos/latest-members/RADIUS-LOGISTICS.png";
import SUPERLINKLOGO from "@/app/images/logos/latest-members/superlink.png";

import "./our-company.css";
function LatestMembers() {
  const logos = [FORALOGO, FORCELOGO, JBKLINELOGO, OCEANSHIPPINGLOGO, RADIUSLOGISTICSLOGO, SUPERLINKLOGO];
  return (
    <section className="pt-16 w-[100%] mx-auto px-4 items-center mb-12">
      <div className="relative">
        <h2 className="text-[40px] font-bold  text-[#27293B] text-center mb-12 relative z-10">
          Latest Members
        </h2>
        <h2
          className="absolute text-center top-[-30px] md:left-[30%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2 min-w-[max-content]"
          aria-hidden="true">
          Latest Members
        </h2>
      </div>
      <div className="logo-slider">
        <div className="logo-slide-track">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="logo-slide">
              <Image src={logo} alt={`Member logo ${index + 1}`} width={150} height={75} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestMembers;
