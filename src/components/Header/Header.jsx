"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import LOGO from "../../../public/BNG Logo 1.png";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [bgStyle, setBgStyle] = useState({
    opacity: 1,
    background: "linear-gradient(to top right, var(--primaryBg), var(--secondryBg))",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const isActive = (href) => pathname === href;
  const isDropdownActive = (href) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 100;
      const minOpacity = 1;
      const newOpacity = Math.max(minOpacity, 1 - scrollPosition / maxScroll);

      const newBackground =
        scrollPosition > 0
          ? "linear-gradient(to bottom right, #d2ccf0,  #ffffff)"
          : "linear-gradient(to top right, var(--primaryBg), var(--secondryBg))";

      setBgStyle({
        opacity: newOpacity,
        background: newBackground,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="text-[#27293b] p-4 w-full sticky top-0 z-50">
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={bgStyle}
      ></div>
      <div className="container mx-auto flex justify-between items-center text-[#27293B] relative">
        <Link href="/" className="w-52 lg:w-80 ">
          <Image
            src={LOGO}
            alt="logo"
            width={200}
            height={190}
            className="w-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/benefit" className={`font-medium hover:text-primary text-[18px] ${isActive("/benefit") ? "text-primary font-bold" : ""}`}>
            Benefits
          </a>
          <a href="/about-us" className={`font-medium hover:text-primary text-[18px] ${isActive("/about-us") ? "text-primary font-bold" : ""}`}>
            About us
          </a>
          <a href="/pricing" className={`font-medium hover:text-primary text-[18px] ${isActive("/pricing") ? "text-primary font-bold" : ""}`}>
            Pricing
          </a>
          <a href="/contact" className={`font-medium hover:text-primary text-[18px] ${isActive("/contact") ? "text-primary font-bold" : ""}`}>
            Contact Us
          </a>

          {/* Specialties Dropdown */}
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button
              className={`font-medium hover:text-primary text-[18px] focus:outline-none flex items-center gap-1 ${
                isDropdownActive("/business-xchange") || isDropdownActive("/freight-xchange") ? "text-primary font-bold" : ""
              }`}
              onClick={toggleDropdown}
            >
              Business Tools
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 z-50">
                <Link href="/business-xchange" className={`block hover:text-primary text-[18px] font-medium ${isDropdownActive("/business-xchange") ? "text-primary font-bold" : "text-gray-700"}`}>
                  Business Xchange
                </Link>
                <Link href="/freight-xchange" className={`block hover:text-primary text-[18px] font-medium ${isDropdownActive("/freight-xchange") ? "text-primary font-bold" : "text-gray-700"}`}>
                  Freight Xchange
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex  items-center">
          <a
            href="https://app.bnglogisticsnetwork.com/"
            className="text-primary cursor-pointer rounded-lg font-bold px-6 py-3 flex items-center hover:text-primary text-[18px]"
          >
            Login
          </a>
          <div className="hidden md:flex space-x-4">
            <Link
              href="https://app.bnglogisticsnetwork.com/register"
              className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-[#5216ab] hover:from-transparent transition-all duration-300 bg-primary transform hover:translate-x-2"
            >
              Become a Member
            </Link>
          </div> 
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#27293B]" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} className="text-gray-600" /> : <Menu size={24} className="text-gray-600" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "flex" : "hidden"} md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 flex-col w-full`}>
        <div className="flex flex-col p-4 space-y-4">
          <a href="/" onClick={closeMenu} className={`hover:text-primary text-[18px] py-2 ${isActive("/") ? "text-primary font-bold" : "text-[#27293B]"}`}>
            Home
          </a>
          <a href="/benefit" onClick={closeMenu} className={`hover:text-primary text-[18px] py-2 ${isActive("/benefit") ? "text-primary font-bold" : "text-gray-700"}`}>
            Benefits
          </a>
          <a href="/about-us" onClick={closeMenu} className={`hover:text-primary text-[18px] py-2 ${isActive("/about-us") ? "text-primary font-bold" : "text-gray-700"}`}>
            About us
          </a>
          <a href="/pricing" onClick={closeMenu} className={`hover:text-primary text-[18px] py-2 ${isActive("/pricing") ? "text-primary font-bold" : "text-gray-700"}`}>
            Pricing
          </a>
          <a href="/contact" onClick={closeMenu} className={`hover:text-primary text-[18px] py-2 ${isActive("/contact") ? "text-primary font-bold" : "text-gray-700"}`}>
            Contact Us
          </a>

          {/* Specialties Dropdown for Mobile */}
          <div>
            <button
              className={`hover:text-primary text-[18px] py-2 flex items-center gap-1 ${
                isDropdownActive("/business-xchange") || isDropdownActive("/freight-xchange") ? "text-primary font-bold" : "text-[#27293B]"
              }`}
              onClick={toggleDropdown}
            >
              Business Tools
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="pl-4 space-y-2">
                <Link href="/business-xchange" onClick={closeMenu} className={`hover:text-primary text-[18px] py-1 block ${isDropdownActive("/business-xchange") ? "text-primary font-bold" : "text-gray-700"}`}>
                  Business Xchange
                </Link>
                <Link href="/freight-xchange" onClick={closeMenu} className={`hover:text-primary text-[18px] py-1 block ${isDropdownActive("/freight-xchange") ? "text-primary font-bold" : "text-gray-700"}`}>
                  Freight Xchange
                </Link>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center space-y-3 pt-4 border-t">
          <Link
            href="https://app.bnglogisticsnetwork.com/"
            className="text-primary cursor-pointer rounded-lg  font-bold px-6 py-3 flex items-center hover:text-primary text-[18px]"
          >
            Login
          </Link>
            <Link
              href="https://app.bnglogisticsnetwork.com/register"
              onClick={closeMenu}
              className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-primary hover:from-transparent transition-all duration-300 bg-primary transform hover:translate-x-2"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
