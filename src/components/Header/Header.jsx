"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LOGO from "../../../public/BNG Logo 1.png";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="text-[#27293b] p-4 w-full bg-gradient-to-tr from-primaryBg to-secondryBg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center text-[#27293B]">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image src={LOGO} alt="logo" width={140} height={120} className="w-full"/>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          {/* <Link href="/" className="font-medium hover:text-primary text-[18px]">
            Home
          </Link> */}
          <Link href="/benifits" className="font-medium hover:text-primary text-[18px]">
            Benefits
          </Link>
          <Link
            href="/our-company"
            className="font-medium hover:text-primary text-[18px]">
            About us
          </Link>
          <Link
            href="/pricing"
            className="font-medium hover:text-primary text-[18px]">
            Pricing
          </Link>
          <Link href="/contact" className="font-medium hover:text-primary text-[18px]">
            Contact Us
          </Link>

          {/* Specialties Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}>
            <button
              className="font-medium hover:text-primary text-[18px] focus:outline-none flex items-center gap-1"
              onClick={toggleDropdown}>
              Business Tools 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 z-50">
                <Link
                  href="/freight-xchange"
                  className="block text-gray-700 hover:text-primary text-[18px]">
                  Freight Xchange
                </Link>
                <Link
                  href="/business-xchange"
                  className="block text-gray-700 hover:text-primary text-[18px]">
                  Business Xchange
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="flex align-items-center">
          <a href="https://app.bnglogisticsnetwork.com/" className="text-primary cursor-pointer rounded-lg font-bold px-6 py-3  flex items-center hover:text-primary text-[16px] ">
            Login
          </a>
          <div className="hidden md:flex space-x-4">
            <Link
              href="https://app.bnglogisticsnetwork.com/register"
              className="group bg-gradient-to-tr  from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-primary transition-all duration-300 transform hover:translate-x-2">
              Become a Member
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#27293B]"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          {isMenuOpen ? (
            <X size={24} className="text-gray-600" />
          ) : (
            <Menu size={24} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 flex-col w-full`}>
        <div className="flex flex-col p-4 space-y-4">
          <Link href="/" className="text-[#27293B] hover:text-primary text-[18px] py-2">
            Home
          </Link>
          <Link
            href="/benefits"
            className="text-gray-700 hover:text-primary text-[18px] py-2">
            Benefits
          </Link>
          <Link
            href="/our-company"
            className="text-gray-700 hover:text-primary text-[18px] py-2">
            About us
          </Link>
          <Link
            href="/pricing"
            className="text-gray-700 hover:text-primary text-[18px] py-2">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-primary text-[18px] py-2">
            Contact Us
          </Link>

          {/* Specialties Dropdown for Mobile */}
          <div>
            <button
              className="text-[#27293B] hover:text-primary text-[18px] py-2 flex items-center gap-1"
              onClick={toggleDropdown}>
              Business Tools 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="pl-4 space-y-2">
                <Link
                  href="/freight-xchange"
                  className="text-gray-700 hover:text-primary text-[18px] py-1 block">
                  Freight Xchange
                </Link>
                <Link
                  href="/business-xchange"
                  className="text-gray-700 hover:text-primary text-[18px] py-1 block">
                  Business Xchange
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-3 pt-4 border-t">
            <Link href="https://app.bnglogisticsnetwork.com/register" className="bg-primary rounded-lg text-white px-6 py-3 hover:bg-gradient-to-tr from-[#6853DB] to-[#6853DB] flex items-center justify-center hover:to-transparent transition-all duration-300 group hover:translate-x-2">
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
