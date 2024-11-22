import React from "react";
import Image from "next/image";
import twitter from "@/app/images/twitter.svg";
import fb from "@/app/images/fb.svg";
import utube from "@/app/images/utube.svg";
import linkedin from "@/app/images/linkedin.svg";

const Footer = () => {
  return (
    <footer
      className=" text-gray-900 relative shadow-md"
      style={{
        background: "linear-gradient(180deg, #EFF6FF 100%,#E6EBF4  100%, #D186EB 100%)",
      }}>
      <div
        className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #4D7DB5 10%, #D186EB 90%)",
          zIndex: 1,
          filter: "blur(60.8px)",
        }}></div>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex  md:justify-between ] ">
          <div className="mt-6 md:mb-2 ">
            <SocialLinks />
            <div className="mt-10">
              <h3 className="text-2xl text-wrap font-bold max-w-[250px]">
                Subscribe to our newsletters now!
              </h3>
              <div className="mt-6 border-b-[0.9px] w-max">
                <input
                  type="email"
                  className="rounded p-2 bg-transparent border-white"
                  placeholder="Enter your email"
                />
                <button className="rounded p-2 ml-2 bg-transparent border-white">
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM0 9H22V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
            <FooterSection
              title="ABOUT US"
              links={[
                { href: "#", label: "BNG Media" },
                { href: "#", label: "BNG Shield" },
                { href: "#", label: "BNG Vendors" },
              ]}
            />
            <FooterSection
              title="SERVICES"
              links={[
                { href: "#", label: "Industry News" },
                { href: "#", label: "Network News" },
                { href: "#", label: "Photo Gallery" },
                { href: "#", label: "BNG TV" },
              ]}
            />
            <FooterSection
              title="News & Media"
              links={[
                { href: "#", label: "Industry News" },
                { href: "#", label: "Network News" },
                { href: "#", label: "Photo Gallery" },
                { href: "#", label: "BNG TV" },
              ]}
            />
            <FooterSection
              title="Extra"
              links={[
                { href: "#", label: "Pricing" },
                { href: "#", label: "Freight Xchange" },
                { href: "#", label: "Business Xchange" },
                { href: "#", label: "Exporters Directory" },
                { href: "#", label: "Importers Directory" },
                { href: "#", label: "B2B Market" },
              ]}
            />
            <FooterSection
              title="Recourses"
              links={[
                { href: "#", label: "Shipping Containers" },
                { href: "#", label: "Aircraft ULD’s" },
                { href: "#", label: "CBM Calculator" },
                { href: "#", label: "Cargo Tracking" },
                { href: "#", label: "Incoterms" },
                { href: "#", label: "DGR Classes" },
              ]}
            />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-900">
            © 2024{" "}
            <a href="https://google.com/" className="hover:underline">
              BNG™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, links }) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
      {title}
    </h2>
    <ul className="text-gray-600 font-medium">
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

const SocialLinks = () => (
  <div className="flex mt-4 sm:mt-0 gap-2">
    {socialMediaLinks.map((social, index) => (
      <a
        key={index}
        href={social.href}
        className="text-gray-600 hover:text-gray-900 dark:hover:ms-5">
        <Image src={social.image} alt={social.name} />
        <span className="sr-only">{social.name}</span>
      </a>
    ))}
  </div>
);

const socialMediaLinks = [
  {
    name: "Facebook page",
    href: "#/",
    image: fb,
  },
  {
    name: "Discord community",
    href: "#",
    image: linkedin,
  },
  {
    name: "Twitter page",
    href: "#",
    image: twitter,
  },
  {
    name: "YouTube",
    href: "#",
    image: utube,
  },
];

export default Footer;
