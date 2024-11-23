"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Partner from "@/app/images/partners.jpg";
import Vector from "@/app/images/Vector5.svg";
import LOGO from "@/app/images/logos/logo.jpeg";
const testimonials = [
  {
    name: "Chanchal",
    email: "chanchal@gmail.com",
    text: "We have been in Parimity for a few years and have developed strong relations. They have been doing great things in the freight forwarding networking industry. Keep up with the good work!",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Bonnie Green",
    email: "bonnie@gmail.com",
    text: "Parimity has transformed the freight forwarding industry with their innovative solutions. We've seen a major difference in our operations.",
    image: "/api/placeholder/40/40",
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    text: "Amazing experience with the Parimity platform, it has made our job much easier and more efficient!",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    text: "The Parimity network has been a game-changer for us. Highly recommend!",
    image: "/api/placeholder/40/40",
  },
];
const partnerLogos = [
 LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,
 LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,LOGO,
  // Add more logo URLs as needed
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
    pauseOnHover: true,
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
          <div className="w-full lg:w-1/2 relative h-[400px] flex flex-col items-start justify-center mt-[10rem]">
          <div className="flex flex-wrap gap-4 mt-4">
              {partnerLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-contain  shadow-md"
                />
              ))}
            </div>
        

            <div className="relative w-full max-w-[800px]">
              <h2 className="text-[40px] font-bold text-gray-900 mb-16 text-left mt-10 relative z-10">
                Our Partners
              </h2>
              <h2
                className="absolute text-left top-2 left-0 text-[80px] w-full font-bold text-[#27293B] opacity-[3%] leading-none z-2"
                aria-hidden="true">
                Our Partners
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
                      <p className="text-gray-600 text-[18px]">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-[18px]">
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
