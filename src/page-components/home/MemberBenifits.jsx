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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const autoScrollRef = useRef(null);

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

  // Auto-scroll effect for mobile slider
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentSlide((prev) => (prev + 1) % mobileBenefits.length);
        }
      }, 3000); // Change slide every 3 seconds
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused]);

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
        "The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment.",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mobileBenefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mobileBenefits.length) % mobileBenefits.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true); // Pause auto-scroll on touch
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const deltaX = touchStartX.current - touchEndX.current;
      if (deltaX > 50) {
        nextSlide();
      } else if (deltaX < -50) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 1500); // Resume auto-scroll after 1.5 seconds
  };

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause auto-scroll on hover
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume auto-scroll when mouse leaves
  };

  return (
    <div
      className="relative w-full overflow-x-hidden"
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
        className="relative z-10 flex flex-col justify-center w-full px-4 sm:px-6 md:px-8 py-10 md:py-14"
      >
        {/* Top-right Patch */} 
        {/* <div
          className="absolute top-16 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #97b6f6 0%, #6853DB 45%, #5844B4 100%)",
            zIndex: 2,
            filter: "blur(110px)",
          }}
        ></div> */}

        <div className="relative text-center">
          <h2 className="text-4xl md:text-[55px] font-bold text-[#27293B] mb-8 md:mb-12">
            Member <span className="text-primary">Benefits</span>
          </h2>
          <h2
            className="absolute top-[-34px] md:top-[-36px] left-0 lg:-left-[1%] text-center w-full text-[40px]  md:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
            aria-hidden="true"
          >
            Member Benefits
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-row space-x-6 justify-center w-full overflow-x-hidden">
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

        {/* Mobile and Tablet View - Slider */}
        <div
          className="md:hidden flex flex-col items-center px-2 sm:px-4 relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-full max-w-[350px] sm:max-w-[500px] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mobileBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="min-w-full bg-white rounded-2xl p-4 sm:p-6 flex flex-col items-center"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 relative mb-4">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-contain transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {mobileBenefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-primary scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CSS for Slider Animations */}
        <style jsx>{`
          .min-w-full {
            animation: slideIn 0.5s ease-out;
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default MemberBenefits;