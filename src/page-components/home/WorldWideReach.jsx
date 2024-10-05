import React from "react";
import Map from "@/app/images/Map.png";
import Image from "next/image";
import backgroundImage from "@/app/images/OBJECTS.png";
function WorldWideReach() {
  return (
    <section
      className="md:px-[112px] items-center   w-full bg-gray-50 flex flex-col gap-10 py-14"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "300px 100px",
      }}
    >
      <h2 className="text-black font-bold text-[44px]">Worldwide Reach</h2>
      <div className="relative">
        <Image src={Map} objectFit="contain" width={1000} height={500} />
        <div className="absolute bottom-8 left-0">
          <div className="relative flex flex-row justify-end items-center px-10 md:w-[600px] border  bg-white  rounded-lg">
            <div className=" w-max absolute left-0 px-4 py-2 rounded-lg  bg-black">
              Find a member
            </div>
            <input
              type="text"
              placeholder="Search for a specific member or country"
              className="md:w-[80%] px-4 py-2 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorldWideReach;
