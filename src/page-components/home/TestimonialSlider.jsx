"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Partner from "@/app/images/partners.jpg";
import Vector from "@/app/images/Vector5.svg";
import LOGO1 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-01.png";
import LOGO2 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-02.png";
import LOGO3 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-03.png";
import LOGO4 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-04.png";
import LOGO5 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-05.png";
import LOGO6 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-06.png";
import LOGO7 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-07.png";
import LOGO8 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-08.png";
import LOGO9 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-09.png";
import LOGO10 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-10.png";
import LOGO11 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-11.png";
import LOGO12 from "../../../public/MEMBER'S ACCREDIATIONS/MEMBERS ACCREDIATIONS-12.png";
import rekha from "../../../public/testimonials/REKHA.png";
import gurbeer from "../../../public/testimonials/Gurbeer.png";
import sudarshan from "../../../public/testimonials/sudershan sharma.png";
import Sabrina from "../../../public/testimonials/SABRINA.png";

console.log("rekha : ",rekha);

const testimonials = [
  {
    name: "Ms. Rekha",
    email: "FORCE LOGISTIC PVT LTD",
    text: "Since joining BNG, we've gained access to reliable partners in regions we previously struggled to penetrate. It’s been a game-changer!",
    imageUrl: rekha,
  },
  {
    name: "Gurbeer Singh Sethi",
    email: "RADIUS LOGISTICS PRIVATE LIMITED",
    text: "The connections we’ve made through BNG have directly resulted in new business opportunities and stronger customer service across our operations.",
    imageUrl: gurbeer,
  },
  {
    name: "Sudershan Sharma",
    email: "UNIQUE LOGISTICS INDIA PVT LTD.",
    text: "BNG has been instrumental in helping us expand internationally. The network’s support and collaboration are simply outstanding.",
    imageUrl: sudarshan,
  },
  // {
  //   name: "JASON KLINE",
  //   email: "J.B.KLINE & CO. PTY. LTD",
  //   text: "What sets BNG apart is the genuine community feel. Everyone is eager to help and share valuable insights.",
  //   image: "/api/placeholder/40/40",
  // },
  // {
  //   name: "Axel Damian Alvarez",
  //   email: "OCEAN SHIPPING",
  //   text: "Partnering through BNG has streamlined our processes and introduced us to trustworthy agents we now work with regularly.",
  //   image: "/api/placeholder/40/40",
  // },
  {
    name: "Sabrina",
    email: "SUPER LINK LOGISTICS LIMITED",
    text: "The events and tools BNG provides are unmatched—our team feels more connected and equipped to handle global challenges.",
    imageUrl: Sabrina,
  },
];

const partnerLogos = [
  LOGO1, LOGO2, LOGO3, LOGO4, LOGO5, LOGO6, LOGO7, LOGO8,
   LOGO9, LOGO10, LOGO11, LOGO12
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section
      className="relative bg-secondryBg bg-gradient-to-b from-purple-50 to-white"
      style={{
        backgroundImage: `url(${Vector.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover", // You can set 'auto' if you don't want it to cover fully
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}>
      <div
        className="absolute bottom-16 left-8 w-[200px] h-[200px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #D186EB 10%, #D186EB 90%)",

          filter: "blur(100.8px)",
        }}></div>
      {/* Curved Background */}
      {/* <div className="absolute inset-0 h-[20%] bg-purple-50">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white" style={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%'
        }}></div>
      </div> */}

      {/* Content Container */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full flex  items-center justify-center">
        {/* Title */}

        {/* Flex Container for Image and Slider */}
        <div className="flex flex-col lg:flex-row  items-center justify-center w-full gap-8 translate-y-[20px] md:translate-x-[150px]">
          {/* Image Section */}
          <div className="w-full  lg:w-1/2 relative h-[400px] flex flex-col items-start justify-center mt-[8rem]">
            <div className="grid grid-cols-4 gap-4 md:gap-4 m-2 md:mx-0 md:mt-12">
              {partnerLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  
                  className=" w-[110px] h-[110px]"
                />
              ))}
            </div>


            <div className="relative w-full max-w-[800px]">
              <h2 className="text-[40px] font-bold text-gray-900 text-center  md:text-left my-4 relative z-10">
                Members Accreditation
              </h2>
              <p className="text-sm text-justify text-gray-500">
              Our partners are selected for their strong local presence and established expertise in cargo operations, ensuring reliability. They undergo thorough screenings for service quality, compliance, and financial stability, which guarantees that we collaborate with only the best in the industry.
              </p>
              <h2
                className="absolute text-left top-2 left-0 text-[80px] w-full font-bold text-[#27293B] opacity-[3%] leading-none z-2"
                aria-hidden="true">
                Members Accreditation
              </h2>
            </div>
          </div>

          {/* Slider Section */}
          <div className=" lg:w-1/2 max-h-[500px] ">
            <div className="relative ]">
              <h2 className="text-[40px] font-bold text-gray-900 mb-16 text-left mt-10 relative z-10">
                Testimonials
              </h2>
              <h2
                className="absolute hidden md:block max-w-[3vw] text-left top-[-30px] left-0 text-[80px] md:w-full font-bold text-[#27293B] opacity-[3%] leading-none z-2"
                aria-hidden="true">
                Testimonials
              </h2>
            </div>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white shadow-lg rounded-xl p-6 max-w-[300px]">
                    <div className="space-y-6">
                      <p className="text-gray-500 text-sm">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          width={20}
                          height={20}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {testimonial.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .slick-list {
          margin: 0 auto;
          height: 400px !important;
          overflow: hidden;
        }
        .slick-track {
          display: flex !important;
          flex-direction: column !important;
        }
        .slick-slide {
          transition: all 0.3s ease;
          height: auto !important;
        }
        .slick-slide > div {
          height: 100%;
          padding: 10px 0;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;
