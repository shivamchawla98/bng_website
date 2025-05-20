"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import centeredImage from "@/app/images/memberBenifits.svg";
import handShake from "@/app/images/handSHake.svg";
import Vector1 from "@/app/images/Patch1.svg";
import MembersAreaVector from "../../../public/members_benefit/Member_Area.png";
import GlobalReachVector from "../../../public/members_benefit/Global-Reach.png";
import BusinessXchangeVector from "../../../public/members_benefit/Business-Xchange.png";
import TrustedPartnersVector from "../../../public/members_benefit/Trusted-Partners.png";
import PaymentProtectionVector from "../../../public/members_benefit/Payment-Protection.png";
import PaymentMonitoringVector from "../../../public/members_benefit/Payment-Monitoring.png";
import ClaimCenterVector from "../../../public/members_benefit/Claim_Center.png";
import FreightXchangeVector from "../../../public/members_benefit/Freight-Xchange.png";
import AcknowledgementVector from "../../../public/members_benefit/Acknowledgment-Insignias.png";
import ocean from "../../../public/members_benefit/ocean.webp";
import ship from "../../../public/ship.png";

function MemberBenefits() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPercent =
          (window.scrollY - rect.top - window.pageYOffset) / rect.height;
        const scrollValue =
          Math.max(0, Math.min(1, scrollPercent)) * rect.height;
        setScrollY(scrollValue);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    {
      title: "Global Reach",
      description:
        "Connect with reliable partners worldwide and access a growing community that meets all your logistics and supply chain requirements.",
      image: MembersAreaVector,
    },
    {
      title: "Freight Xchange",
      description:
        "Showcase your freight rates and services to the global trade community via B Versailles Logistics & B2B Portals, boosting your visibility and increasing business opportunities.",
      image: BusinessXchangeVector,
    },
    {
      title: "Payment Protection",
      description:
        "The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment",
      image: TrustedPartnersVector,
    },
    {
      title: "Claim Center",
      description:
        "A fully digital claims process allows members to file and resolve disputes seamlessly, ensuring prompt and fair resolutions for all conflicts.",
      image: PaymentMonitoringVector,
    },
    {
      description: "",
      image: AcknowledgementVector,
    },
  ];

  const benefitsTwo = [
    {
      title: "Member Area",
      description:
        "Showcase your freight rates and services to the global trade community via BNG Logistics & B2B Portals, boosting your visibility and increasing business opportunities.",
      image: GlobalReachVector,
    },
    {
      title: "Business Xchange",
      description:
        "Access the Business Center, a dedicated area for finding active business leads and sharing opportunities directly with clients in your network.",
      image: FreightXchangeVector,
    },
    {
      title: "Trusted Partners",
      description:
        "Showcase your freight rates and services to the global trade community via BNG Logistics & B2B Portals, boosting your visibility and increasing business opportunities.",
      image: PaymentProtectionVector,
    },
    {
      title: "Payment Monitoring",
      description:
        "A state-of-the-art system that automatically tracks receivables and payables, keeping all transactions organized and up-to-date.",
      image: ClaimCenterVector,
    },
    {
      title: "Acknowledgment Insignia",
      description:
        "Stand out with insignias displayed on your profile. Highlighting your credibility, payment status, and activity level, building trust and confidence among fellow members.",
    },
  ];

  const mobileBenefits = [
    {
      title: "Trusted Partners",
      description:
        "The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment",
      image: TrustedPartnersVector,
    },
    {
      title: "Payment Protection",
      description:
        "The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment.",
      image: PaymentProtectionVector,
    },
    {
      title: "Payment Monitoring",
      description:
        "A state-of-the-art system that automatically tracks receivables and payables, keeping all transactions organized and up-to-date.",
      image: PaymentMonitoringVector,
    },
    {
      title: "Claim Center",
      description:
        "A fully digital claims process allows members to file and resolve disputes seamlessly, ensuring prompt and fair resolutions for all conflicts.",
      image: ClaimCenterVector,
    },
    {
      title: "Members Area",
      description:
        "An intuitive, user-friendly member portal designed to streamline networking, providing a centralized space for all your business connections and collaboration needs.",
      image: MembersAreaVector,
    },
    {
      title: "Global Reach",
      description:
        "Connect with reliable partners worldwide and access a growing community that meets all your logistics and supply chain requirements.",
      image: GlobalReachVector,
    },
    {
      title: "Business Xchange",
      description:
        "Access the Business Center, a dedicated area for finding active business leads and sharing opportunities directly with clients in your network.",
      image: BusinessXchangeVector,
    },
    {
      title: "Freight Xchange",
      description:
        "Showcase your freight rates and services to the global trade community via BNG Logistics & B2B Portals, boosting your visibility and increasing business opportunities.",
      image: FreightXchangeVector,
    },
    {
      title: "Acknowledgment Insignias",
      description:
        "Stand out with insignias displayed on your profile. Highlighting your credibility, payment status, and activity level, building trust and confidence among fellow members.",
      image: AcknowledgementVector,
    },
  ];

  return (
    <div
      className="relative w-[100%] overflow-x-hidden"
      style={{
        backgroundImage: `url(${ocean.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-white"
        style={{ opacity: 0.88, zIndex: 1 }}
      />

      {/* Content Container */}
      <div
        ref={sectionRef}
        className="relative z-10 flex flex-col justify-center w-[100%] px-4 overflow-x-hidden py-14"
      >
        {/* Top-right Patch */}
        <div
          className="absolute top-16 right-0 w-[200px] h-[200px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #97b6f6 0%, #6853DB 45%, #5844B4 100%)",
            zIndex: 2,
            filter: "blur(110px)",
          }}
        ></div>

        <div className="relative">
          <h2 className="text-[55px] font-bold text-[#27293B] text-center mb-12">
            Member <span className="text-primary">Benefits</span>
          </h2>
          <h2
            className="absolute text-center -top-[36px] md:left-[32%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true"
          >
            Member Benefits
          </h2>
        </div>

        <div className="hidden h-max md:flex flex-row space-x-6 justify-center w-[100%] overflow-x-hidden align-middle">
          <div className="h-max flex flex-col justify-center overflow-x-hidden align-middle">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-4 justify-center mt-10 align-middle"
              >
                <div className="top-0 w-[460px] justify-center flex flex-col items-center align-middle">
                  <div
                    className="w-44 h-44 lg:w-52 lg:h-52 flex flex-col items-center justify-start transform transition-all duration-300 hover:scale-110 hover:rotate-3 group cursor-pointer"
                  >
                    <Image
                      src={benefit.image}
                      alt="Member Benefits"
                      height={480}
                      className="object-contain md:block hidden relative transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-col h-44 mr-12 mt-10 items-center justify-center">
                    <div className="text-gray-700 w-[450px] pl-6 text-start mt-2 transition-all duration-300 group-hover:translate-y-1">
                      <div className="text-3xl text-primary mb-2 text-start w-full font-semibold group-hover:text-opacity-90">
                        {benefit.title}
                      </div>
                    </div>
                    <p className="text-gray-500 pl-6 text-lg text-left">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative" style={{ minHeight: "800px" }}>
            {/* Dotted Line */}
            <div
              className="border-[3px] border-dashed border-sky-900 absolute left-1/2 -translate-x-1/2"
              style={{
                height: "100%",
                top: "0",
                bottom: "0",
                borderStyle: "dashed",
                borderImage:
                  "repeating-linear-gradient(to bottom , oklch(86.9% 0.022 252.894), oklch(70.4% 0.04 256.788) 16px, transparent 10px, transparent 20px) 1",
              }}
            />

            {/* Ship Container */}
            <div
              className="absolute"
              style={{
                left: "calc(50% - 192px)",
                top: "-20px",
                transform: `translateY(${scrollY}px)`,
                transition: "transform 0.1s ease-out",
                zIndex: 1000,
              }}
            >
              <div className="w-[380px] h-[350px] rotate-0 relative">
                <Image
                  src={ship}
                  alt="Ship"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
          
              </div>
            </div>
          </div>

          <div className="h-max flex flex-col justify-center align-middle">
            {benefitsTwo?.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-4 mt-10 justify-center align-middle"
              >
                <div className="top-0 w-[450px] justify-center flex flex-col items-center align-middle">
                  <div className="flex flex-col h-44 ml-12 items-center mb-10 justify-center">
                    <div className="text-gray-700 w-[450px] pl-6 text-start mt-2 transition-all duration-300 group-hover:translate-y-1">
                      <div className="text-3xl text-primary mb-2 text-start w-full font-semibold group-hover:text-opacity-90">
                        {benefit.title}
                      </div>
                    </div>
            
                    <p className="text-gray-500 pl-6 text-lg text-left">
                      {benefit.description}
                    </p>
                  </div>
                  {benefit.image && benefit.title && (
                    <div
                      className="w-44 h-44 mt-3 lg:w-52 lg:h-52 flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-3 group cursor-pointer"
                    >
                      <Image
                        src={benefit.image}
                        alt="Member Benefits"
                        height={480}
                        className="object-contain md:block hidden relative transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative md:hidden md:h-[600px] top-10 w-max mx-auto flex flex-col justify-center items-center">
          {mobileBenefits.map((benefit, index) => (
            <div key={index} className="w-[400px] flex flex-col items-center">
              <div
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, #8A6EFF 0%, #6853DB 50%, #5316aa 100%)",
                  boxShadow:
                    "0 10px 25px rgba(104, 83, 219, 0.3), inset 0 -5px 10px rgba(0, 0, 0, 0.1), inset 0 5px 10px rgba(255, 255, 255, 0.2)",
                }}
                className="w-32 h-32 rounded-full flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={handShake}
                  alt="Member Benefits"
                  className="object-contain md:block hidden relative"
                />
                <div className="text-white text-center mt-2">
                  <div className="font-semibold text-[16px]">
                    {benefit.title}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-left mt-4 text-[20px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberBenefits;