import React from "react";
import Image from "next/image";
import twitter from "@/app/images/twitter.svg";
import fb from "@/app/images/fb.svg";
import utube from "@/app/images/utube.svg";
import linkedin from "@/app/images/linkedin.svg";
import bgImage from '../../../public/footer/footer_bg.png';

// Main Footer component
const Footer = () => {
  return (
    <>
      {/* Footer container with background image */}
      <footer
        className="text-gray-900 relative"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Main content container with max width */}
        <div className="mx-auto w-full h-[500px] flex items-center max-w-screen-xl p-4 py-6 lg:py-3">
          <div className="md:flex md:justify-between md:items-center gap-8 w-full">
            {/* Left section: Social links and newsletter subscription */}
            <div className="md:w-2/4">
              <div>
                <h3 className="text-3xl text-wrap font-bold max-w-[250px]">
                  Subscribe to our Newsletters
                </h3>
                <p className="text-lg my-3 font-semibold text-gray-600">
                  Subscribe to stay updated!
                </p>
                <SocialLinks />
                {/* Newsletter input and submit button */}
                <div className="mt-6 border-b-[0.9px] flex flex-col items-center w-max ">
                  <input
                    type="email"
                    className="w-72 p-3 mb-6 bg-white border-[1px] border-[#46349a]"
                    placeholder="Enter your email"
                  />
                  <button className="p-3 w-72 ml-2 bg-[#46349a] text-white ">
                    Subscribe!
                  </button>
                </div>
              </div>
            </div>
            {/* Right section: Footer navigation links */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 md:w-3/4">
              <FooterSection
                title="Tools"
                links={[
                  { href: "/freight-xchange", label: "Freight Xchange" },
                  { href: "/business-xchange", label: "Business Xchange" },
                ]}
              />
              <FooterSection
                title="Resources"
                links={[
                  { href: "/incoterms", label: "Incoterms" },
                  { href: "/dgr", label: "DGR Classes" },
                  { href: "/uld", label: "Aircraft ULDs" },
                  { href: "#", label: "Shipping Containers" },
                ]}
              />
              <FooterSection
                title="Social"
                links={[]}
              />
            </div>
          </div>
        </div>
      </footer>
      {/* New section for copyright and navigation links with white background */}
      <div className="w-full bg-white text-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm sm:text-center text-gray-900">
              2025 <a href="https://google.com/" className="hover:underline">BNG</a>{" "}
              Logistics Network. © All Rights Reserved. 2025
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
      </div>
    </>
  );
};

// FooterSection component for rendering link sections
const FooterSection = ({ title, links }) => (
  <div className="w-full">
    <h2 className="mb-6 text-base font-semibold text-gray-900 uppercase pb-1 border-b-[2px]">
      {title}
    </h2>
    <ul className="text-gray-800 font-medium">
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <a href={link.href} className="hover:underline">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// SocialLinks component for rendering social media icons
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
          width={30}
          height={50}
          className="transition-transform duration-300 ease-in-out"
        />
        <span className="sr-only">{social.name}</span>
      </a>
    ))}
  </div>
);

// Social media links data
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
    name: "YouTube",
    href: "https://www.youtube.com/@networkbng",
    image: utube,
  },
];

export default Footer;