import React from "react";
import Image from "next/image";
import benifit3 from "@/app/images/benifit.webp";
function BenifitsThirdSection() {
  return (
    <div className="bg-primaryBg py-10 relative">
      <div className="container mx-auto flex flex-col  items-center justify-center">
        <h2 className="text-[#27293B] text-[55px] font-bold text-center">
          Why choose us?
        </h2>
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
        <div className="flex w-full justify-between align-middle mt-16">
          <Image src={benifit3} alt="benifit3" className="w-full h-full" />
          <div className="flex flex-col md:max-w-[700px]">
            <p className="text-gray-600  ">
              The key point of membership is to grow your business. By keeping
              business within the group, X2 Logistics Networks can operate as a
              unified global identity with working partnerships and the ability
              to develop new business. As a strong and cohesive group, X2 and
              its members can promote a brand that can better compete against
              MNC’s.
              <br />
              <br />
              We have developed a networking platform to enable independent
              global logistics companies to link with like-minded and capable
              partners around the world.
              <br />
              <br />
              To apply for membership, prospective member companies are required
              to submit strong commercial references, bank credit ratings, and
              demonstrate the ability to satisfy the requirements of the X2
              Logistics Networks management. To be enrolled companies must prove
              to have a positive reputation with other agents and carriers and
              that your company has professional leadership and integrity.
            </p>
          </div>
        </div>
        <button className="bg-primary mt-10 w-max rounded-full text-white px-6 py-3  hover:bg-gradient-to-tr from-purple-700 to-purple-600 flex items-center">
          Become a member
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
  );
}

export default BenifitsThirdSection;
