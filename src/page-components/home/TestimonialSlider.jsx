"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Partner from "@/app/images/partners.jpg";
import Vector from "@/app/images/Vector5.svg";
import LOGO1 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-01.png";
import LOGO2 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-02.png";
import LOGO3 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-03.png";
import LOGO4 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-04.png";
import LOGO5 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-05.png";
import LOGO6 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-06.png";
import LOGO7 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-07.png";
import LOGO8 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-08.png";
import LOGO9 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-09.png";
import LOGO10 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-10.png";
import LOGO11 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-11.png";
import LOGO12 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-12.png";
import rekha from "../../../public/testimonials/REKHA.jpeg";
import gurbeer from "../../../public/testimonials/Gurbeer.png";
import sudarshan from "../../../public/testimonials/sudershan sharma.png";
import Sabrina from "../../../public/testimonials/SABRINA.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const testimonials = [
  {
    name: "Rekha",
    email: "Force Logistics Pvt. Ltd.",
    text: "Since joining BNG, we've gained access to reliable partners in regions we previously struggled to penetrate. It’s been a game-changer!",
    imageUrl: rekha,
  },
  {
    name: "Gurbeer Singh Sethi",
    email: "Radius Logistics Pvt. Ltd.",
    text: "The connections we’ve made through BNG have directly resulted in new business opportunities and stronger customer service across our operations.",
    imageUrl: gurbeer,
  },
  {
    name: "Sudershan Sharma",
    email: "Unique Logistics India Pvt. Ltd.",
    text: "BNG has been instrumental in helping us expand internationally. The network’s support and collaboration are simply outstanding.",
    imageUrl: sudarshan,
  },
  {
    name: "Sabrina",
    email: "Super Link Logistics Ltd.",
    text: "The events and tools BNG provides are unmatched—our team feels more connected and equipped to handle global challenges.",
    imageUrl: Sabrina,
  },
];

const partnerLogos = [
  LOGO5, LOGO6, LOGO7, LOGO8, LOGO1, LOGO2, LOGO3, LOGO4,
  LOGO9, LOGO10, LOGO11, LOGO12
];

const TestimonialSlider = () => {
  return (
    <section
      className="relative -top-40 bg-secondryBg bg-gradient-to-b from-purple-50 to-white"
      style={{
        backgroundImage: `url(${Vector.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}>
      <div
        className="absolute bottom-16 left-8 w-[200px] h-[200px] rounded-full"
        style={{
          background:
            "linear-gradient(-145deg, #6853DB 16%, #6853DB 40.86%, #97b6f6 30%)",
          zIndex: 1,
          filter: "blur(110px)",
        }}></div>
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 translate-y-[20px] md:translate-x-[150px]">
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex flex-col items-start justify-center mt-[10rem]">
            <div className="grid grid-cols-4 gap-4 md:gap-12 m-2 md:mx-0 md:my-12">
              {partnerLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-[135px] h-[135px]"
                />
              ))}
            </div>
            <div className="relative w-full max-w-[800px]">
              <h2 className="text-[55px] font-bold text-gray-900 text-center md:text-left my-4 relative z-10">
                Accredited <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-base text-justify text-gray-500">
                Our partners are selected for their strong local presence and established expertise in cargo operations, ensuring reliability. They undergo thorough screenings for service quality, compliance, and financial stability, which guarantees that we collaborate with only the best in the industry.
              </p>
              <h2
                className="absolute text-left -top-10 -left-[120px] text-[80px] w-full font-bold text-[#27293B] opacity-[3%] leading-none z-2"
                aria-hidden="true">
                Accredited Excellence
              </h2>
            </div>
          </div>
          <div className="lg:w-1/2 h-auto">
            <div className="relative">
              <h2 className="text-[55px] font-bold text-primary mb-20 text-left mt-10 relative z-10">
                Testimonials
              </h2>
              <h2
                className="absolute hidden md:block max-w-[3vw] text-left top-[-43px] -left-[60px] text-[80px] md:w-full font-bold text-[#27293B] opacity-[3%] leading-none z-2"
                aria-hidden="true">
                Testimonials
              </h2>
            </div>
            <Swiper
              modules={[Autoplay, EffectFade]}
              direction="vertical"
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={1000}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
               <div className="p-8 absolute -left-4 mt-11">
  <div className="bg-gradient-to-br from-white to-purple-100 shadow-lg rounded-xl pb-10 pt-10 pl-8 pr-8 max-w-[430px] lg:max-w-[590px]">
    <div className="space-y-6">
      <p className="text-gray-500 text-[26px]">
        <strong>“ </strong> {testimonial.text} <strong>„</strong>
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.imageUrl}
          alt={testimonial.name}
          width={25}
          height={25}
          className="w-20 mt-20 h-20 rounded-full"
        />
        <div className="mt-20">
          <h4 className="font-semibold capitalize text-2xl text-gray-700">
            {testimonial.name}
          </h4>
          <p className="text-primary capitalize text-2xl">
            {testimonial.email}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div>
          <div className="absolute bg-gradient-to-r from-[#eef6ff] to-[#eef6ff] -bottom-40 right-0 w-full h-[200px] -z-10"></div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper {
          height: 400px !important;
          width: 100%;
        }
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: opacity 0.5s ease, transform 0.5s ease;
          opacity: 0;
        }
        .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;