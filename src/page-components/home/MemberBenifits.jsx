'use client';

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import centeredImage from "@/app/images/memberBenifits.svg";
import handShake from "@/app/images/handSHake.svg";
import Vector1 from "@/app/images/Patch1.svg";
import MembersAreaVector from "@/app/images/home/MembersArea.svg";
import GlobalReachVector from "@/app/images/home/GlobalReach.svg";
import BusinessXchangeVector from "@/app/images/home/BusinessXchange.svg";
import TrustedPartnersVector from "@/app/images/home/TrustedPartners.svg";
import PaymentProtectionVector from "@/app/images/home/PaymentProtection.svg";
import PaymentMonitoringVector from "@/app/images/home/PaymentMonitoring.webp";
import ClaimCenterVector from "@/app/images/home/ClaimCenter.svg";
import FreightXchangeVector from "@/app/images/home/FreightXchange.png";
import ship from "@/app/images/home/ship.png";

function MemberBenefits() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPercent = (window.scrollY - rect.top - window.pageYOffset) / rect.height;
        const scrollValue = Math.max(0, Math.min(1, scrollPercent)) * rect.height;
        setScrollY(scrollValue);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    {
      title: "Members Area",
      description:
        "Membership is granted exclusively to companies with solid reputations, verified through a three-year track record and two business references.",
      image: MembersAreaVector,
    },
    {
      title: "Business Xchange",
      description:
        "Showcase your freight rates and services to the global trade community via BNG Logistics & B2B Portals, boosting your visibility and increasing business opportunities.",
      image: BusinessXchangeVector,
    },
    {
      title: "Trusted Partners",
      description:
        "The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment",
      image: TrustedPartnersVector,
    },
    {
      title: "Payment Monitoring",
      description:
        "A fully digital claims process allows members to file and resolve disputes seamlessly, ensuring prompt and fair resolutions for all conflicts.",
      image: PaymentMonitoringVector,
    },
  ];

  const benefitsTwo = [
    {
      title: "Global Reach",
      description:
        "An intuitive, user-friendly member portal designed to streamline networking, providing a centralized space for all your business connections and collaboration needs.",
      image: GlobalReachVector,
    },
    {
      title: "Freight Xchange",
      description:
        "Access the Business Center, a dedicated area for finding active business leads and sharing opportunities directly with clients in your network.",
      image: FreightXchangeVector,
    },
    {
      title: "Payment Protection",
      description:
        "Connect with reliable partners worldwide and access a growing community that meets all your logistics and supply chain requirements.",
      image: PaymentProtectionVector,
    },
    {
      title: "Claim Center",
      description:
        "A state-of-the-art system that automatically tracks receivables and payables, keeping all transactions organized and up-to-date.",
      image: ClaimCenterVector,
    },
  ];
  const mobileBenefits = [
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
      title: "Trusted Partners",
      description:
        "Membership is granted exclusively to companies with solid reputations, verified through a three-year track record and two business references.",
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
  ];

  return (
    <div className="relative  w-[100%] overflow-x-hidden bg-primaryBg">
      {/* Top-left Patch */}
      <div
        className="absolute top-16 right-0 w-[200px] h-[200px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #4D7DB5 10%, #D186EB 90%)",
          zIndex: 1,
          filter: "blur(60.8px)",
        }}></div>
      <div
        className="absolute bottom-[10%] left-8 w-[200px] h-[200px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #D186EB 10%, #D186EB 90%)",
          zIndex: 1,
          filter: "blur(60.8px)",
        }}></div>
      <div ref={sectionRef} className="flex flex-col justify-center w-[100%] px-4 overflow-x-hidden py-14">
        {/* <h2 className="text-[55px] text-[#27293B] font-bold text-center mb-12">
          Member Benefits
        </h2> */}
        <div className="relative">
          <h2 className="text-[40px] font-bold  text-[#27293B] text-center mb-12 relative z-10">
            Member Benefits
          </h2>
          <h2
            className="absolute text-center top-[-30px] md:left-[30%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true">
            Member Benefits
          </h2>
        </div>
        <div className=" hidden h-max md:flex flex-row space-x-6 justify-center w-[100%] overflow-x-hidden align-middle">
          <div className="h-max flex flex-col justify-center overflow-x-hidden align-middle">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-4 justify-center align-middle">
                <div className="top-0 w-[400px] justify-center flex flex-col items-center align-middle">
                  <div className="w-44 h-44 bg-cstm-bg-rad-grad-memb-benfts rounded-full flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-3 group cursor-pointer">
                    <Image
                      src={benefit.image}
                      alt="Member Benefits"
                      height={50}
                      className="object-contain md:block hidden relative transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="text-white text-center mt-2 transition-all duration-300 group-hover:translate-y-1">
                      <div className="font-semibold text-[14px] group-hover:text-opacity-90">
                        {benefit.title}
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-center h-44">
                    <p className="text-gray-600 text-[18px] text-left">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative" style={{ minHeight: '800px' }}>
            {/* Dotted Line */}
            <div 
              className="border-[0.8px] border-dotted border-gray-600 absolute left-1/2 -translate-x-1/2"
              style={{ height: '100%', top: '0', bottom: '0' }}
            />
            
            {/* Ship Container */}
            <div 
              className="absolute"
              style={{
                left: 'calc(50% - 130px)',
                top: '-20px',
                transform: `translateY(${scrollY}px)`,
                transition: 'transform 0.1s ease-out',
                zIndex: 1000
              }}
            >
              <div className="w-[260px] h-[260px] relative">
                <Image
                  src={ship}
                  alt="Ship"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="h-max flex flex-col justify-center align-middle">
            {benefitsTwo?.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-4 justify-center align-middle">
                <div className="top-0 w-[400px] justify-center flex flex-col items-center align-middle">
                  <div class="flex items-center justify-center h-44">
                    <p className="text-gray-600 text-[18px] text-left">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="w-44 h-44 bg-cstm-bg-rad-grad-memb-benfts rounded-full flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-3 group cursor-pointer">
                    <Image
                      src={benefit.image}
                      alt="Member Benefits"
                      height={50}
                      className="object-contain md:block hidden relative transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="text-white text-center mt-2 transition-all duration-300 group-hover:translate-y-1">
                      <div className="font-semibold text-[14px] group-hover:text-opacity-90">
                        {benefit.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative md:hidden md:h-[600px] top-10 w-max mx-auto flex flex-col justify-center items-center">
          {mobileBenefits.map((benefit, index) => (
            <div key={index} className="w-[400px] flex flex-col items-center">
              <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center">
                <Image
                  src={handShake}
                  alt="Member Benefits"
                  className="object-contain md:block hidden relative"
                />
                <div className="text-white text-center mt-2">
                  <div className="font-semibold text-[14px]">
                    {benefit.title}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm text-left mt-4 text-[18px]">
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
