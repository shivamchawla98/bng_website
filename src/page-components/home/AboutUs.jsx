import React from "react";
import Image from "next/image";
import rightImg from "@/app/images/section2.png";

function AboutUs() {
  return (
    <div className=" px-4 md:px-[112px]  flex flex-col md:flex-row items-center justify-between ">
      <div className="md:w-[400px] relative">
        <Image
          src={rightImg}
          alt="Export Import Containers"
          layout="responsive"
          width={300}
          height={200}
          className="rounded-lg w-100"
        />
      </div>
      <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0 md:ml-10 mt-10 md:mt-0">
        <h2 className="text-4xl font-bold mb-4 text-black">About Us?</h2>
        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
        <p className="text-gray-600 mb-6">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley. Lorem Ipsum is simply
          dummy text of the printing
        </p>
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-purple-700 inline-flex items-center">
          know more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
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
