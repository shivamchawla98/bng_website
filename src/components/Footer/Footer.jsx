import React from "react";
import Image from "next/image";
import twitter from "../../../public/socialmediaicon/X.png";
import fb from "../../../public/socialmediaicon/fb.png";
import utube from "../../../public/socialmediaicon/Youtube.png";
import Insta from "../../../public/socialmediaicon/insta_01.png";
import linkedin from "../../../public/socialmediaicon/linkedin.png";
import backgroundImage from '../../../public/footer_bg.png';


const Footer = () => {
  return (
    <footer
      className="text-gray-900 relative shadow-md"
      style={{
        backgroundImage: backgroundImage.src, // Logistics-themed background (cargo ship)
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay with blur and semi-transparent background for readability */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(8px)", // Blur effect for the background image
          background: "rgba(239, 246, 255, 0.7)", // Semi-transparent overlay (matches your gradient theme)
          zIndex: 1,
        }}
      ></div>

      {/* Existing decorative blurred circle */}
      <div
        className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #4D7DB5 10%, #D186EB 90%)",
          zIndex: 2,
          filter: "blur(60.8px)",
        }}
      ></div>

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:pt-10 lg:pb-0 relative z-10">
        <div className="md:flex md:justify-between gap-8">
          <div className="mt-6 md:mb-2 md:w-1/4">
            <SocialLinks />
            <div className="mt-10">
              <h3 className="text-2xl text-wrap font-bold max-w-[250px]">
                <span className="text-3xl">Subscribe to our </span> newsletter now!
              </h3>
              <div className="mt-6 border-b-[0.9px] w-max bg-white rounded-full">
                <input
                  type="email"
                  className="rounded-lg p-2 bg-white border-primary"
                  placeholder="Enter your email"
                />
                <button className="p-2 py-[12px] ml-2 bg-gradient-to-tr from-[#6853DB] to-[#6853DB] border-white rounded-r-lg">
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM0 9H22V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mt-8 lg:ml-10 md:mt-0 md:w-3/4">
            <FooterSection
              title="ABOUT US"
              links={[
                { href: "#", label: "FAQ's" },
                { href: "#", label: "Our Values" },
                { href: "#", label: "Our Visions" },
                { href: "#", label: "Our Mission" },
                { href: "#", label: "What We Do" },
              ]}
            />
            <FooterSection
              title="SERVICES"
              links={[
                { href: "#", label: "BNG Vendors" },
                { href: "#", label: "BNG Cargo Shield" },
                { href: "#", label: "BNG Tech & Media" },
                { href: "#", label: "BNG B2B Marketplace" },
              ]}
            />
            <FooterSection
              title="Tools"
              links={[
                { href: "/freight-xchange", label: "Freight Xchange" },
                { href: "/business-xchange", label: "Business Xchange" },
                { href: "#", label: "Improters Directory" },
                { href: "#", label: "Exporters Directory" },
              ]}
            />
            <FooterSection
              title="Recourses"
              links={[
                { href: "/incoterms", label: "Incoterms" },
                { href: "/dgr", label: "DGR Classes" },
                { href: "/uld", label: "Aircraft ULDs" },
                { href: "#", label: "Shipping Containers" },
              ]}
            />
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto lg:my-2" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm sm:text-center text-gray-900">
            2025 <a href="https://google.com/" className="hover:underline">BNG</a> Logistics Network. © All Rights Reserved.
          </p>
          <nav className="flex justify-center items-center py-4 text-gray-900 text-sm">
            <a href="/privacy-policy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="/terms-of-use" className="hover:text-gray-900 transition-colors">
              Terms of Use
            </a>
            <span className="mx-2">|</span>
            <a href="/contact" className="hover:text-gray-900 transition-colors">
              Reach Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, links }) => (
  <div className="w-full">
    <h2 className="mb-6 pl-8 text-sm font-semibold text-gray-900 uppercase pb-1 border-b-[2px]">
      {title}
    </h2>
    <ul className="text-gray-600 pl-8 font-medium">
      {links.map((link, index) => (
        <li key={index} className="mb-3">
          <a href={link.href} className="hover:underline">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => (
  <div className="flex mt-4 sm:mt-0 gap-2">
    {socialMediaLinks.map((social) => (
      <a
        key={social.name}
        target="_blank"
        href={social.href}
        className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-110"
      >
        <Image
          src={social.image}
          alt={social.name}
          width={40}
          height={40}
          className="transition-transform duration-300 ease-in-out"
        />
        <span className="sr-only">{social.name}</span>
      </a>
    ))}
  </div>
);

const socialMediaLinks = [
  {
    name: "Facebook page",
    href: "https://www.facebook.com/NetworkBNG/",
    image: fb,
  },
  {
    name: "Linkedin page",
    href: "https://www.linkedin.com/company/networkbng/",
    image: linkedin,
  },
  {
    name: "X page",
    href: "https://x.com/NetworkBNG/",
    image: twitter,
  },
  {
    name: "Instagram page",
    href: "https://www.instagram.com/NetworkBNG/",
    image: Insta,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@networkbng",
    image: utube,
  },
];

export default Footer;