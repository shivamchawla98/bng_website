"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LOGO from '@/app/images/logos/logo.jpeg'
import Image from "next/image";

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#27293B] text-white p-4 w-full shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center text-[#27293B]">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image src={LOGO} alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white font-medium hover:text-purple-300">
            Home
          </Link>
          <Link href="/benifits" className="text-white font-medium hover:text-purple-300">
            Benefits
          </Link>
          <Link href="/our-company" className="text-white font-medium hover:text-purple-300">
            About us
          </Link>
          <Link href="/conferance" className="text-white font-medium hover:text-purple-300">
            Conference
          </Link>
          <Link href="/contact" className="text-white font-medium hover:text-purple-300">
            Contact Us
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => router.push("/become-a-member")}
            className="bg-primary rounded-full text-white px-6 py-3 hover:bg-gradient-to-tr from-purple-700 to-purple-600 flex items-center">
            Become a Member
          </button>
          {/* <button className="bg-white text-[#27293B] px-6 py-3 flex items-center border border-gray-200 rounded-full">
            Talk to Sales
          </button> */}
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
        className={`${isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 flex-col w-full`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link href="/" className="text-[#27293B] hover:text-purple-300 py-2">
            Home
          </Link>
          <Link
            href="/benefits"
            className="text-gray-700 hover:text-purple-300 py-2">
            Benefits
          </Link>
          <Link
            href="/our-company"
            className="text-gray-700 hover:text-purple-300 py-2">
            About us
          </Link>
          <Link
            href="/conferance"
            className="text-gray-700 hover:text-purple-300 py-2">
            Conference
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-purple-300 py-2">
            Contact Us
          </Link>
          <div className="flex flex-col space-y-3 pt-4 border-t">
            <button className="bg-primary rounded-full text-white px-6 py-3 hover:bg-gradient-to-tr from-purple-700 to-purple-600 flex items-center justify-center">
              Become a Member
            </button>
            {/* <button className="bg-white text-[#27293B] px-6 py-3 flex items-center justify-center border border-gray-200 rounded-full">
              Talk to Sales
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
