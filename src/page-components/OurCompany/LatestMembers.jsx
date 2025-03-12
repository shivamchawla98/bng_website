'use client'
import Image from "next/image";
import React from "react";
import FORALOGO from "@/app/images/logos/latest-members/FORA-LOGO.png";
import FORCELOGO from "@/app/images/logos/latest-members/force.png";
import JBKLINELOGO from "@/app/images/logos/latest-members/JBK-Line.png";
import OCEANSHIPPINGLOGO from "@/app/images/logos/latest-members/ocean-shipping.png";
import RADIUSLOGISTICSLOGO from "@/app/images/logos/latest-members/RADIUS-LOGISTICS.png";
import SUPERLINKLOGO from "@/app/images/logos/latest-members/superlink.png";

function LatestMembers() {
  const logos = [FORALOGO, FORCELOGO, JBKLINELOGO, OCEANSHIPPINGLOGO, RADIUSLOGISTICSLOGO, SUPERLINKLOGO];

  return (
    <section style={styles.section}>
      <div style={styles.headingContainer}>
        <h2 style={styles.heading}>Latest Members</h2>
        <h2 style={styles.headingBackground} aria-hidden="true">
          Latest Members
        </h2>
      </div>
      <div style={styles.logoSlider}>
        <div style={styles.logoSlideTrack}>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} style={styles.logoSlide}>
              <div style={styles.logoContainer}>
                <Image
                  src={logo}
                  alt={`Member logo ${index + 1}`}
                  width={150}
                  height={75}
                  style={styles.grayscaleLogo}
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
    width: "calc(150px * ${logos.length * 2})", // Double the width for seamless looping
  },
  logoSlide: {
    flex: "0 0 auto",
    margin: "0 20px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "75px",
  },
  grayscaleLogo: {
    filter: "grayscale(100%)",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
};