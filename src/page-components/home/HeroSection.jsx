"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import bg from "@/app/images/home/Ellipse2.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for staggered info cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for smooth overshoot
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Animation variants for paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.2, // Slight delay after title
      },
    },
  };

  // Animation for button container
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } },
  };

  return (
    <div className="min-h-[70vh] relative overflow-hidden">
      {/* Animated Gradient Background Patches */}
      <motion.div
        className="absolute top-0 left-0 w-[200px] md:w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 16%, #4D7DB5 46.86%, #D186EB 67%)",
          zIndex: 1,
          filter: "blur(100px)",
          WebkitFilter: "blur(100px)",
          backdropFilter: "blur(100px)",
        }}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-[200px] md:w-[250px] h-[400px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 16%, #4D7DB5 46.86%, #D186EB 67%)",
          zIndex: 1,
          filter: "blur(120px)",
        }}
        initial={{ scale: 0.9, opacity: 0.6 }}
        animate={{ scale: 1.3, opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <div className="container py-12 mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
        <motion.div
          className="lg:w-1/2 mb-12 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-[40px] md:text-[60px] font-bold mb-6 text-[#27293B] leading-tight"
            variants={titleVariants}
          >
            Connect and
            <span className="text-primary"> collaborate</span> with
            <span className="text-primary"> forwarders </span>
            daily
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-8 text-base md:text-lg max-w-xl"
            variants={paragraphVariants}
          >
            Experience the next generation of forwarder networks. Tired of
            investing in multiple networks with minimal returns?{" "}
            <span className="text-xl font-semibold">
              Discover a fresh approach to partnership here!
            </span>
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
            variants={buttonVariants}
          >
            <Link
              href="https://app.bnglogisticsnetwork.com/register"
              className="group bg-[#46349a] text-[16px] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-primary transition-all duration-300 transform hover:scale-105"
            >
              Become a Member
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>

        <div className="lg:w-1/2 relative">
          <motion.div
            style={{
              transform: `translateX(${Math.min(scrollY * 0.3, 120)}px)`,
              transition: "transform 0.4s ease-out",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={bg}
              alt="Background Image"
              priority={true}
              className="w-full max-w-[600px]"
            />
          </motion.div>

          {/* Info Cards with Staggered Animations */}
          {[
            {
              text: "215+ Ports and Airports",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7m-18 0V6a3 3 0 013-3h12a3 3 0 013 3v1M3 7l9-4 9 4"
                  />
                </svg>
              ),
              position: "bottom-10 left-0",
              rotate: Math.min(scrollY * 0.05, 5),
            },
            {
              text: "85% Active Members",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
              position: "bottom-10 right-0",
              rotate: Math.min(scrollY * -0.05, -5),
            },
            {
              text: "20+ Years of Experience",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              position: "top-10 left-0",
              rotate: Math.min(scrollY * -0.04, -4),
            },
            {
              text: "150+ Countries",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              position: "top-10 right-0",
              rotate: Math.min(scrollY * 0.04, 4),
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`absolute ${card.position} bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 z-20`}
              style={{
                transform: `translateY(${Math.min(scrollY * 0.12, 22)}px) rotate(${card.rotate}deg) scale(${1 + Math.min(scrollY * 0.001, 0.1)})`,
                opacity: Math.max(1 - scrollY * 0.002, 0.7),
                transition: "all 0.4s ease-out",
              }}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="flex items-center space-x-2">
                <div className="bg-purple-100 p-1 rounded-full">{card.icon}</div>
                <span className="font-medium text-sm text-[#27293B]">
                  {card.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;