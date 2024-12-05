"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Partner from "@/app/images/partners.jpg";
import Vector from "@/app/images/Vector5.svg";
import LOGO1 from "@/app/images/logos/members-credited/AEO.png";
import LOGO2 from "@/app/images/logos/members-credited/CTPAT.png";
import LOGO3 from "@/app/images/logos/members-credited/FIATA.png";
import LOGO4 from "@/app/images/logos/members-credited/IATA-ANIMALS.png";
import LOGO5 from "@/app/images/logos/members-credited/IATA-CEIV-FRESH.png";
import LOGO6 from "@/app/images/logos/members-credited/IATA-CEIV-PHARMA.png";
import LOGO7 from "@/app/images/logos/members-credited/IATA-LITHIUM.png";
import LOGO8 from "@/app/images/logos/members-credited/IATA.png";
import LOGO9 from "@/app/images/logos/members-credited/ICC.png";
import LOGO10 from "@/app/images/logos/members-credited/ISO.png";
import LOGO11 from "@/app/images/logos/members-credited/NVOCC.png";
import LOGO12 from "@/app/images/logos/members-credited/duns.png";
const testimonials = [
  {
    name: "Ms. Rekha",
    email: "Manager Network  & Inside Sales",
    text: "Since joining BNG, we've gained access to reliable partners in regions we previously struggled to penetrate. It’s been a game-changer!",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Mr. Gurbeer Singh Sethi",
    email: "Director",
    text: "The connections we’ve made through BNG have directly resulted in new business opportunities and stronger customer service across our operations.",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Mr. Munish Kumar Bindlish",
    email: "Director",
    text: "BNG has been instrumental in helping us expand internationally. The network’s support and collaboration are simply outstanding.",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Mr. JASON KLINE",
    email: "Managing Director",
    text: "What sets BNG apart is the genuine community feel. Everyone is eager to help and share valuable insights.",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Mr. Axel Damian Alvarez",
    email: "General Manager",
    text: "Partnering through BNG has streamlined our processes and introduced us to trustworthy agents we now work with regularly.",
    image: "/api/placeholder/40/40",
  },
  {
    name: "Ms. Sabrina",
    email: "CEO",
    text: "The events and tools BNG provides are unmatched—our team feels more connected and equipped to handle global challenges.",
    image: "/api/placeholder/40/40",
  },
];
const partnerLogos = [
  LOGO1, LOGO2, LOGO3, LOGO4, LOGO5, LOGO6, LOGO7, LOGO8, LOGO9, LOGO10, LOGO11, LOGO12
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
            <div className="flex flex-wrap gap-8 m-12">
              {partnerLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={140}
                  height={80}
                  className="object-scale-down w-[120px] h-[80px]"
                />
              ))}
            </div>


            <div className="relative w-full max-w-[800px]">
              <h2 className="text-[40px] font-bold text-gray-900 mb-16 text-left mt-10 relative z-10">
                Members Accredited
              </h2>
              <h2
                className="absolute text-left top-2 left-0 text-[80px] w-full font-bold text-[#27293B] opacity-[3%] leading-none z-2"
                aria-hidden="true">
                Members Accredited
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
