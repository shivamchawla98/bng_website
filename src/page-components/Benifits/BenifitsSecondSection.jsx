import React from "react";
import Image from "next/image";
import about1 from "@/app/images/abou1.png"; // Replace with actual image paths
import about2 from "@/app/images/about2.png";

function BenifitsSecondSection() {
  return (
    <div className="bg-primaryBg py-10 relative">
      <div
        className="absolute bottom-0 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",

          zIndex: 1,
          filter: "blur(110px)",
       // Alternative fallback
        }}></div>

      {/* Right-middle Patch */}
      <div
        className="absolute top-10 right-12 transform translate-x-1/2 -translate-y-1/2 md:w-[160px] h-[20%] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 100%, #D186EB 100.86%, #D186EB 100%)",
          zIndex: 1,
          filter: "blur(50px)",
        }}></div>

      <div className="container bg-primaryBg mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* left side */}
        <div className="flex md:flex-row flex-col justify-between w-full ">
          <div className=" mb-6 flex-col ">
            <Image
              src={about1}
              alt="About Image 1"
              className="rounded-sm md:w-[500px] md:h-[500px] object-cover "
            />
            <p className="text-gray-600 text-[20px] mt-4 md:max-w-[500px]">
              Every buyer, seller, and logistics professional undergoes a
              rigorous approval process, ensuring a trusted business community.
              Join the largest network of industry professionals today!
            </p>{" "}
          </div>
          <div className="flex justify-start place-content-start  flex-col md:max-w-[700px] py-6">
            <h3 className="text-[#27293B]">About BNG --</h3>
            <h1 className="text-primary text-[55px] font-bold">
              Small investment big benefits
            </h1>
            <h2 className="font-bold text-gray-600">
              With BNG, Access Over 10 Million Buyers, Sellers, and Freight
              Forwarders—Discover New Business Opportunities in Just a Few
              Clicks.
            </h2>

            <Image
              src={about2}
              alt="About Image 1"
              className="rounded-sm  object-cover md:h-[450px] w-full mt-6 "
            />
            <button className="bg-primary mt-8 w-max rounded-full text-white px-6 py-3  hover:bg-gradient-to-tr from-[#6853DB] to-[#6853DB] flex items-center">
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
