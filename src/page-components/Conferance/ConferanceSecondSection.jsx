

import React from "react";
import about1 from "@/app/images/abou1.png";
import Image from "next/image";
function ConferanceSecondSection() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        {/* First section */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-12">
          <div className="relative flex justify-center items-center">
            <div className="hidden lg:block absolute left-16 bottom-12 h-[350px] w-[400px] border-[#6853DB] border-2 rounded-md"></div>
            <Image
              className="rounded-xl object-cover z-10"
              src={about1}
              height={350}
              alt="About Us Image 1"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start gap-8">
            <h2 className="text-gray-900 text-4xl font-extrabold leading-normal text-center lg:text-start">
              What 's Special about the BNG Conference?
            </h2>
            <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley. Lorem
              Ipsum is simply dummy text of the printing Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley. Lorem Ipsum is simply dummy text of
              the printing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConferanceSecondSection;
