"use client";
import Image from "next/image";
import React, { useState } from "react";
import FORALOGO from "../../../public/LOGO_MEMBERS/1.png";
import FORCELOGO from "../../../public/LOGO_MEMBERS/2.png";
import JBKLINELOGO from "../../../public/LOGO_MEMBERS/3.png";
import OCEANSHIPPINGLOGO from "../../../public/LOGO_MEMBERS/4.png";
import RADIUSLOGISTICSLOGO from "../../../public/LOGO_MEMBERS/5.png";
import SUPERLINKLOGO from "../../../public/LOGO_MEMBERS/6.png";
import logo1 from "../../../public/LOGO_MEMBERS/1.png";
import logo2 from "../../../public/LOGO_MEMBERS/2.png";
import logo3 from "../../../public/LOGO_MEMBERS/3.png";
import logo5 from "../../../public/LOGO_MEMBERS/5.png";
import logo6 from "../../../public/LOGO_MEMBERS/6.png";
import logo8 from "../../../public/LOGO_MEMBERS/8.png";
import logo9 from "../../../public/LOGO_MEMBERS/9.png";
import logo10 from "../../../public/LOGO_MEMBERS/10.png";
import logo11 from "../../../public/LOGO_MEMBERS/11.webp";
import logo12 from "../../../public/LOGO_MEMBERS/12.png";
import logo13 from "../../../public/LOGO_MEMBERS/13.png";
import logo14 from "../../../public/LOGO_MEMBERS/14.png";
import logo15 from "../../../public/LOGO_MEMBERS/15.png";
import logo16 from "../../../public/LOGO_MEMBERS/16.png";
import logo17 from "../../../public/LOGO_MEMBERS/17.png";
import logo18 from "../../../public/LOGO_MEMBERS/18.png";
import logo19 from "../../../public/LOGO_MEMBERS/19.png";
import logo20 from "../../../public/LOGO_MEMBERS/20.png";
import logo21 from "../../../public/LOGO_MEMBERS/21.png";
import logo24 from "../../../public/LOGO_MEMBERS/24.png";
import logo25 from "../../../public/LOGO_MEMBERS/25.png";
import logo26 from "../../../public/LOGO_MEMBERS/26.png";

import logo28 from "../../../public/LOGO_MEMBERS/27.png";
import logo29 from "../../../public/LOGO_MEMBERS/29.png";
import logo30 from "../../../public/LOGO_MEMBERS/30.png";

import logo31 from "../../../public/LOGO_MEMBERS/31.png";
import logo32 from "../../../public/LOGO_MEMBERS/32.png";
import logo33 from "../../../public/LOGO_MEMBERS/33.png";
import logo34 from "../../../public/LOGO_MEMBERS/34.png";

import logo35 from "../../../public/LOGO_MEMBERS/35.png";
import logo36 from "../../../public/LOGO_MEMBERS/36.png";
import logo37 from "../../../public/LOGO_MEMBERS/37.png";

function LatestMembers() {
  const logos = [
    logo31, logo32, logo33, logo34, logo35, logo36, logo37,
    logo1, logo2, logo3, logo5, logo6, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo24,
    logo25, logo26, logo28, logo29, logo30
  ];
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleTouch = () => {
    setIsPaused(!isPaused); // Toggle pause on tap
  };

  return (
    <section className="w-full mx-auto py-8 sm:py-10 lg:py-14" style={styles.section}>
      <div style={styles.headingContainer}>
        <h2 className="text-4xl lg:text-[55px] font-bold text-[#27293B] text-center mb-8 sm:mb-12 lg:mb-20 relative z-10">
          Latest <span className="text-primary">Members</span>
        </h2>
        <h2
          className="absolute top-[-34px] lg:top-[-60px] left-0 lg:left-[0%] text-center w-full text-[40px]  lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
          aria-hidden="true"
        >
          Latest Members
        </h2>
      </div>
      <div style={styles.logoSlider}>
        <div
          style={{
            ...styles.logoSlideTrack,
            animationPlayState: isHovering || isPaused ? "paused" : "running",
            animationDuration: "40s", // Slower for mobile readability
          }}
          onTouchStart={handleTouch}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              style={{
                ...styles.logoSlide,
                animation: `fadeIn 0.5s ease-out ${(index % logos.length) * 0.1}s both`,
              }}
              onMouseEnter={() => {
                setIsHovering(true);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                setHoveredIndex(null);
              }}
              onTouchStart={handleTouch}
            >
              <div
                style={styles.logoContainer}
                className="w-[150px] sm:w-[180px] lg:w-[250px] h-[80px] sm:h-[100px] lg:h-[120px] flex justify-center items-center   transform transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={logo}
                  alt={`Member logo ${index % logos.length + 1}`}
                  width={100}
                  height={100}
                  className="max-w-[120px] sm:max-w-[140px] lg:max-w-[180px]"
                  style={{
                    ...styles.logo,
                    // filter: hoveredIndex === index ? "none" : "grayscale(100%)",
                    transition: "filter 0.3s ease, transform 0.3s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inject the keyframes for animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default LatestMembers;

// Inline Styles
const styles = {
  section: {
    width: "100%",
    margin: "0 auto",
    marginBottom: "1rem",
  },
  headingContainer: {
    position: "relative",
  },
  logoSlider: {
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  logoSlideTrack: {
    display: "flex",
    animation: "scroll 40s linear infinite",
    width: "max-content", // Dynamic width based on content
  },
  logoSlide: {
    flex: "0 0 auto",
    cursor: "pointer",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
};