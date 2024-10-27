"use client"

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
      className="md:px-[112px] items-center   w-full bg-gray-50 flex flex-col gap-10 py-14"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "300px 100px",
      }}
    >
      <h2 className="text-black font-bold text-[44px]">Worldwide Reach</h2>
      <div className="relative">
        <Image src={Map} objectFit="contain" width={1000} height={500} />
       
      </div>
      <form className="max-w-2xl  mx-auto">
        <div className="flex md:w-[600px] shadow-sm">
       
          <button
            id="dropdown-button"
            onClick={toggleDropdown}
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center   rounded-s-lg  focus:ring-4 focus:outline-none text-white bg-primary "
            type="button"
          >
            {selectedOption} 
            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
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
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder={`Search ${selectedOption}`}
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-primary rounded-e-lg border "
            >
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
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
