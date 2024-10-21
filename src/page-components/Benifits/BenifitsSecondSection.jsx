import React from "react";
import Image from "next/image";
import about1 from "@/app/images/abou1.png"; // Replace with actual image paths
import about2 from "@/app/images/about2.png";

function BenifitsSecondSection() {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* left side */}
        <div className="flex md:flex-row flex-col justify-between w-full ">
          <div className=" mb-6 flex-col ">
            <Image
              src={about1}
              alt="About Image 1"
              className="rounded-sm md:w-[500px] md:h-[500px] object-cover "
            />
            <p className="text-gray-700 text-[20px] mt-4 md:max-w-[500px]">
              Founded in 2022,{" "}
              <span className="font-bold text-red-500">BNG</span> has emerged as
              a transformative force in international logistics networking. We
              emphasize professionalism, accountability, and innovation.{" "}
              <span className="font-bold text-red-500">BNG</span>{" "}
              membership is setting new industry benchmarks. Every member
              benefits from a robust financial protection program, ensuring
              secure transactions.
            </p>{" "}
          </div>
          <div className="flex  flex-col md:max-w-[700px] py-6">
            <h3 className="text-black">About BNG --</h3>
            <h1 className="text-primary text-4xl font-bold">
              Forging Connections, Empowering Operations, and Expanding your
              Global Reach{" "}
            </h1>
            <Image
              src={about2}
              alt="About Image 1"
              className="rounded-sm  object-cover md:h-[450px] w-full mt-6 "
            />
            <button className="bg-primary mt-8 w-max rounded-full text-white px-6 py-3  hover:bg-gradient-to-tr from-purple-700 to-purple-600 flex items-center">
              Find out more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenifitsSecondSection;
