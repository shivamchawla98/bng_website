"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LOGO from "@/app/images/logos/Logistic3.png";
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
          <Image src={LOGO} alt="logo" width={100} className="w-full"/>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="font-medium hover:text-[#6853DB] text-[18px]">
            Home
          </Link>
          <Link href="/benifits" className="font-medium hover:text-[#6853DB] text-[18px]">
            Benefits
          </Link>
          <Link
            href="/our-company"
            className="font-medium hover:text-[#6853DB] text-[18px]">
            About us
          </Link>
          <Link
            href="/conferance"
            className="font-medium hover:text-[#6853DB] text-[18px]">
            Conference
          </Link>
          <Link href="/contact" className="font-medium hover:text-[#6853DB] text-[18px]">
            Contact Us
          </Link>

          {/* Specialties Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}>
            <button
              className="font-medium hover:text-[#6853DB] text-[18px] focus:outline-none"
              onClick={toggleDropdown}>
              Specialties
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 z-50">
                <Link
                  href="/freight-xchange"
                  className="block text-gray-700 hover:text-[#6853DB] text-[18px]">
                  Freight Xchange
                </Link>
                <Link
                  href="/business-xchange"
                  className="block text-gray-700 hover:text-[#6853DB] text-[18px]">
                  Business Xchange
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="flex align-items-center">
          <button className="text-primary rounded-full font-bold px-6 py-3 cursor-pointer flex items-center hover:text-[#6853DB] text-[18px] ">
            Login
          </button>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => router.push("/become-a-member")}
              className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-full text-white px-6 py-3 cursor-pointer flex items-center hover:bg-primary hover:from-transparent hover:to-transparent">
              Become a Member
            </button>
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
          <Link href="/" className="text-[#27293B] hover:text-[#6853DB] text-[18px] py-2">
            Home
          </Link>
          <Link
            href="/benefits"
            className="text-gray-700 hover:text-[#6853DB] text-[18px] py-2">
            Benefits
          </Link>
          <Link
            href="/our-company"
            className="text-gray-700 hover:text-[#6853DB] text-[18px] py-2">
            About us
          </Link>
          <Link
            href="/conference"
            className="text-gray-700 hover:text-[#6853DB] text-[18px] py-2">
            Conference
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-[#6853DB] text-[18px] py-2">
            Contact Us
          </Link>

          {/* Specialties Dropdown for Mobile */}
          <div>
            <button
              className="text-[#27293B] hover:text-[#6853DB] text-[18px] py-2"
              onClick={toggleDropdown}>
              Specialties
            </button>
            {isDropdownOpen && (
              <div className="pl-4 space-y-2">
                <Link
                  href="/freight-xchange"
                  className="text-gray-700 hover:text-[#6853DB] text-[18px] py-1 block">
                  Freight Xchange
                </Link>
                <Link
                  href="/business-xchange"
                  className="text-gray-700 hover:text-[#6853DB] text-[18px] py-1 block">
                  Business Xchange
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-3 pt-4 border-t">
            <button className="bg-primary rounded-full text-white px-6 py-3 hover:bg-gradient-to-tr from-[#6853DB] to-[#6853DB] flex items-center justify-center hover:to-transparent transition ease-in-out delay-150 bg-primary hover:-translate-y-1 hover:scale-110">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
