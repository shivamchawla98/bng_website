"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-50 text-white p-4 w-full shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center text-black">
        {/* Logo */}
        <h2 className="font-bold text-xl">BNG</h2>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-purple-300">Home</Link>
          <Link href="/benifits" className="hover:text-purple-300">Benefits</Link>
          <Link href="/our-company" className="hover:text-purple-300">About us</Link>
          <Link href="/conferance" className="hover:text-purple-300">Conference</Link>
          <Link href="/contact" className="hover:text-purple-300">Contact Us</Link>

          {/* Dropdown Menu */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-purple-300 flex items-center">
              Specialities
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Items */}
            {isDropdownOpen && (
              <div
                className="absolute left-0 pt-2 w-48 bg-white shadow-lg round-md z-50"
              // style={{ top: "100%" }}
              // onMouseEnter={() => setIsDropdownOpen(true)}
              // onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link href="/freight-xchange" className="block px-4 py-2 hover:text-purple-300">Freight Xchange</Link>
                <Link href="/business-xchange" className="block px-4 py-2 hover:text-purple-300">Business Xchange</Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button onClick={() => router.push("/become-a-member")} className="bg-primary rounded-full text-white px-6 py-3 hover:bg-gradient-to-tr from-purple-700 to-purple-600 flex items-center">
            Become a Member
          </button>
          <button className="bg-white text-black px-6 py-3 flex items-center border border-gray-200 rounded-full">
            Talk to Sales
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 flex-col w-full`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link href="/" className="text-black hover:text-purple-300 py-2">Home</Link>
          <Link href="/benefits" className="text-black hover:text-purple-300 py-2">Benefits</Link>
          <Link href="/our-company" className="text-black hover:text-purple-300 py-2">About us</Link>
          <Link href="/conferance" className="text-black hover:text-purple-300 py-2">Conference</Link>
          <Link href="/contact" className="text-black hover:text-purple-300 py-2">Contact Us</Link>

          {/* Dropdown Menu for Mobile */}
          <div className="relative group">
            <button className="text-black hover:text-purple-50 flex items-center">
              Specialities
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 pt-2 w-48 bg-white shadow-lg rounded-md z-50 text-black">
                <Link href="/freight-xchange" className="text-black block px-4 py-2 hover:text-purple-300">Freight Xchange</Link>
                <Link href="/business-xchange" className="text-black block px-4 py-2 hover:text-purple-300">Business Xchange</Link>
              </div>
            )}

            <div className="flex flex-col space-y-3 pt-4 border-t">
              <button className="bg-primary rounded-full text-white px-6 py-3 hover:bg-gradient-to-tr from-purple-700 to-purple-600 flex items-center justify-center">
                Become a Member
              </button>
              <button className="bg-white text-black px-6 py-3 flex items-center justify-center border border-gray-200 rounded-full">
                Talk to Sales
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;
