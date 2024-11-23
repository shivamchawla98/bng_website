"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Map from "@/app/images/Map.png";
import Image from "next/image";
import backgroundImage from "@/app/images/OBJECTS.png";
function WorldWideReach() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Country");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <section
      className="md:px-[112px] items-center   w-full bg-primaryBg flex flex-col gap-10 py-14"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="relative w-full f;ex justify-center ">
        <h2 className="text-[40px] font-bold text-gray-900 mb-16 text-center mt-10 relative z-10">
          Worldwide Reach
        </h2>
        <h2
          className="absolute  left-0 text-left top-[0px] md:left-[25%] text-[80px] md:w-full font-bold text-[#27293B] opacity-[3%] leading-none z-2"
          aria-hidden="true">
          Worldwide Reach
        </h2>
      </div>
      <div className="relative">
        <Image src={Map} objectFit="contain" width={1000} height={500} />
      </div>
      <form className="max-w-2xl mx-auto">
  <div className="flex md:w-[600px] shadow-md rounded-full overflow-hidden border border-gray-300">
    {/* Dropdown Button */}
    <button
      id="dropdown-button"
      onClick={toggleDropdown}
      className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:outline-none"
      type="button"
    >
      {selectedOption}
      <svg
        className="w-2.5 h-2.5 ms-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    {/* Dropdown Options */}
    {dropdownOpen && (
      <div className="absolute z-10 bg-primary divide-y divide-gray-100 rounded-lg shadow w-44 mt-12">
        <ul className="py-2 text-sm text-white" aria-labelledby="dropdown-button">
          <li>
            <button
              type="button"
              onClick={() => handleOptionSelect("Country")}
              className="inline-flex w-full px-4 py-2 bg-primary dark:hover:text-white"
            >
              Country
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleOptionSelect("Specific Member")}
              className="inline-flex w-full px-4 py-2 bg-primary"
            >
              Specific Member
            </button>
          </li>
        </ul>
      </div>
    )}

    {/* Search Input */}
    <div className="relative w-full">
      <input
        type="search"
        id="search-dropdown"
        className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-white border-none focus:ring-0 placeholder-gray-400"
        placeholder={`Search ${selectedOption}`}
        required
      />
      {/* Search Button */}
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center justify-center px-4 bg-primary text-white text-sm font-medium hover:bg-primary/90"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  </div>
</form>

    </section>
  );
}

export default WorldWideReach;
