'use client'
import Image from "next/image";
import React, { useState } from "react";
import FORALOGO from "../../../public/LOGO_MEMBERS/1.png";
import FORCELOGO from "../../../public/LOGO_MEMBERS/2.png";
import JBKLINELOGO from "../../../public/LOGO_MEMBERS/3.png";
import OCEANSHIPPINGLOGO from "../../../public/LOGO_MEMBERS/4.jpeg";
import RADIUSLOGISTICSLOGO from "../../../public/LOGO_MEMBERS/5.png";
import SUPERLINKLOGO from "../../../public/LOGO_MEMBERS/6.png";
import logo7 from "../../../public/LOGO_MEMBERS/7.png";
import logo8 from "../../../public/LOGO_MEMBERS/8.png";
import logo9 from "../../../public/LOGO_MEMBERS/9.png";
import logo10 from "../../../public/LOGO_MEMBERS/10.png";
import logo11 from "../../../public/LOGO_MEMBERS/11.svg";
import logo12 from "../../../public/LOGO_MEMBERS/12.png";

function LatestMembers() {
  const logos = [FORALOGO, FORCELOGO, JBKLINELOGO, OCEANSHIPPINGLOGO, RADIUSLOGISTICSLOGO, SUPERLINKLOGO, logo7, logo8, logo9, logo10, logo11, logo12];
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section style={styles.section}>
      <div style={styles.headingContainer}>
        <h2 style={styles.heading}>Latest Members</h2>
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
                  width={150}
                  height={75}
                  style={{
                    ...styles.logo,
                    filter: hoveredIndex === index ? 'none' : 'grayscale(100%)',
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
    paddingTop: "4rem",
    width: "100%",
    margin: "0 auto",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginBottom: "3rem",
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
    top: "-30px",
    left: "30%",
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
    width: "calc(150px * 12)", // Double the width for 6 logos repeated twice
  },
  logoSlide: {
    flex: "0 0 auto",
    margin: "0 20px",
    cursor: "pointer",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "75px",
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
};