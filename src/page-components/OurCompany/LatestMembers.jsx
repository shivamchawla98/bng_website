'use client'
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
import logo27 from "../../../public/LOGO_MEMBERS/27.png";
import logo28 from "../../../public/LOGO_MEMBERS/28.png";
import logo29 from "../../../public/LOGO_MEMBERS/29.png";
import logo30 from "../../../public/LOGO_MEMBERS/30.png";

function LatestMembers() {
  const logos = [logo1, logo2, logo3,  logo5, logo6,  logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21,  logo24, logo25, logo26, logo27, logo28, logo29, logo30];
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="" style={styles.section}>
      <div style={styles.headingContainer}>
        <h2  className="text-[55px] font-bold   text-[#27293B] text-center mb-20 relative z-10">Latest <span className="text-primary">Members</span></h2>
        <h2 style={styles.headingBackground} aria-hidden="true">
          Latest Members
        </h2>
      </div>
      <div style={styles.logoSlider}>
        <div 
          style={{
            ...styles.logoSlideTrack,
            animationPlayState: isHovering ? 'paused' : 'running'
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              style={styles.logoSlide}
              onMouseEnter={() => {
                setIsHovering(true);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                setHoveredIndex(null);
              }}
            >
              <div style={styles.logoContainer}>
                <Image
                  src={logo}
                  alt={`Member logo ${index % logos.length + 1}`}
                  width={100}
                  height={100}
                  className="max-w-36 "
                  style={{
                    ...styles.logo,
                    // filter: hoveredIndex === index ? 'none' : 'grayscale(100%)',
                    transition: 'filter 0.3s ease'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inject the keyframes for the animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
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
    // paddingTop: "4rem",
    width: "100%",
    margin: "0 auto",
    // paddingLeft: "0rem",
    // paddingRight: "0rem",
    marginBottom: "1rem",
  },
  headingContainer: {
    position: "relative",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#27293B",
    textAlign: "center",
    marginBottom: "3rem",
    position: "relative",
    zIndex: 10,
  },
  headingBackground: {
    position: "absolute",
    textAlign: "center",
    top: "-40px",
    left: "32%",
    fontSize: "80px",
    fontWeight: "bold",
    color: "#27293B",
    opacity: "0.03",
    lineHeight: "1",
    zIndex: 2,
    minWidth: "max-content",
  },
  logoSlider: {
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  logoSlideTrack: {
    display: "flex",
    animation: "scroll 20s linear infinite",
    width: "calc(150px * 20)", // Double the width for 6 logos repeated twice
  },
  logoSlide: {
    flex: "0 0 auto",
    // margin: "0 0px",
    cursor: "pointer",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    height: "120px",
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
};