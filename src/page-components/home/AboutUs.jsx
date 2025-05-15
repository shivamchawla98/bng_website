
"use client"
import React from "react";
import Image from "next/image";
import rightImg from "../../../public/ourStory.png";
import { useRouter } from "next/navigation";
function AboutUs() {
  const router = useRouter()
  return (
    <div className=" bg-secondryBg px-4 md:px-[112px]  flex flex-col md:flex-row items-center justify-center gap-16 ">
      <div className="md:w-[500px] relative">
        <Image
          src={rightImg}
          alt="Export Import Containers"
          layout="responsive"
          width={600}
          height={300}
          className="rounded-lg w-100"
        />
      </div>
      <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0 md:ml-10 mt-10 md:mt-0 py-14 ">
        <div className="relative">
          <h2 className="text-[40px] font-bold mb-4 text-gray-700 relative z-10">
            Our Story
          </h2>
          <h2
            className="absolute top-[-20px] left-0 text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true">
            Our Story
          </h2>
        </div>
        <p className="text-sm text-gray-500 tracking-widest mb-4 text-justify">
          Built by a team with over 20 years of expertise in logistics and supply chain management. BNG Group has emerged as a resilient leader in both robust network solutions and B2B relationship-building
          Following nearly three years of in-depth market research and analysis, we launched a network with unique features that empower members to forge strong global partnerships.
        </p>
        <p className="text-sm text-gray-500 tracking-widest text-justify mb-6 ">
          Join us and gain exclusive access to one of the industry’s largest Exporters/Importers Data Banks—sourced and maintained by BNG Group—designed to support successful, data-driven connections across the globe.
        </p>
        <button onClick={() => router.push("/our-company")} className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-primary hover:from-transparent transition-all duraton-300 bg-primary transform hover:translate-x-2" >
          Know more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
