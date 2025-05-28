import Image from "next/image";
import about1 from "../../../public/about/about_01.jpg";
import about2 from "../../../public/about/About_02.jpg";
import OurVisionImage from "../../../public/about/Vision_.jpg";
import OurMissionImage from "../../../public/about/mission_.jpg";
import { FeatureCard } from "./FeatureCard";
import GlobalReachVector from "../../../public/about/Global-Collaboration.png";
import IntigirityTrustVector from "../../../public/about/Integrity-&-Trust.png";
import InnovationVector from "../../../public/about/Innovation-&-Technology.png";
import CustomerCentericVector from "../../../public/about/Customer-Centric-Support.png";
import TransparencyAccountabilityVector from "../../../public/about/Transparency-&-Accountability.png";
import GrowthOppurtinityVector from "../../../public/about/Growth-&-Opportunity.png";

const AboutSection = () => {
  return (
    <>
      <section className="lg:pt-24 bg-primaryBg relative overflow-x-hidden">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 sm:gap-12 pt-16 pb-14">
            <div className="relative flex justify-center items-center">
              <div className="hidden lg:block absolute left-8 sm:left-12 lg:left-16 bottom-12 h-[300px] sm:h-[350px] w-[90%] sm:w-[400px] rounded-md"></div>
              <Image
                className="rounded-xl transform transition-transform duration-500 hover:scale-105 sm:hover:scale-110 shadow-2xl shadow-slate-700 object-cover z-10 w-full max-w-[90%] sm:max-w-[400px]"
                src={about1}
                height={350}
                alt="About Us Image 1"
              />
            </div>
            <div className="flex flex-col justify-start items-center lg:items-start gap-6 sm:gap-8">
              <h2 className="text-gray-900 text-3xl sm:text-4xl font-medium leading-normal text-center lg:text-start">
                Building{" "}
                <span className="font-medium text-primary">
                  Global Connections{" "}
                </span>{" "}
                in Logistics
              </h2>
              <p className="text-gray-600 text-base sm:text-[18px] leading-relaxed text-center lg:text-start px-2 sm:px-0">
                BNG Logistics Network is a global platform built to unite
                logistics professionals, freight forwarders, and industry
                leaders in an environment optimized for growth and
                collaboration. Our network is designed around core values of
                trust, transparency, and advanced technology, rigorously vetting
                each member to ensure reliable, high-quality partnerships. By
                offering a fully digitalized, secure platform, BNG empowers
                members to streamline operations, enhance communication, and
                access vital tools for data-driven decision-making in a dynamic
                industry.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 sm:gap-12 mb-12 py-10">
            <div className="relative flex justify-center items-center lg:order-2">
              <div className="hidden lg:block absolute right-8 sm:right-12 lg:right-16 bottom-12 h-[300px] sm:h-[350px] w-[90%] sm:w-[400px] rounded-md"></div>
              <Image
                className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 sm:hover:scale-110 shadow-slate-700 object-cover z-10 w-full max-w-[90%] sm:max-w-[400px]"
                src={about2}
                height={350}
                alt="About Us Image 2"
              />
            </div>
            <div className="flex flex-col justify-start items-center lg:items-start gap-6 sm:gap-8">
              <p className="text-gray-600 text-base sm:text-[18px] leading-relaxed text-center lg:text-start px-2 sm:px-0">
                Members of BNG benefit from around-the-clock customer support,
                an extensive trade directory, and free promotional services that
                increase their visibility in the global market. Through
                real-time chat, virtual meetings, and a unique payment
                protection framework, BNG provides the resources needed to build
                meaningful, profitable connections. Our commitment to innovation
                and customer-centric support allows BNG members to expand their
                networks and pursue new business opportunities with confidence
                across international borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-16 w-full max-w-[100vw] mx-auto px-4 bg-primaryBg items-center mb-12 overflow-x-hidden">
        <div className="relative">
          <h2
          id="values"
          className="text-4xl sm:text-5xl font-bold text-[#27293B] text-center mb-10 sm:mb-12 relative z-10">
            Core <span className="text-primary">Values</span>
          </h2>
          <h2

            className="absolute top-[-34px] md:top-[-36px] left-0 lg:-left-[1%] text-center w-full text-5xl  md:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
            aria-hidden="true"
          >
            Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
          <FeatureCard
            title="Global Collaboration"
            description="Connecting logistics professionals worldwide to foster strong, reliable partnerships that drive growth and mutual success across borders."
            logo={GlobalReachVector}
          />
          <FeatureCard
            title="Integrity & Trust"
            description="Upholding rigorous standards in member vetting, ensuring trustworthy relationships and a secure, credible network for dependable business interactions."
            logo={IntigirityTrustVector}
          />
          <FeatureCard
            title="Innovation & Technology"
            description="Leveraging advanced tools and technology to streamline operations, enhance communication, and provide valuable insights for informed decision-making."
            logo={InnovationVector}
          />
          <FeatureCard
            title="Customer-Centric Support"
            description="Providing 24/7 customer support and regional assistance, dedicated to ensuring seamless service and immediate help whenever needed."
            logo={CustomerCentericVector}
          />
          <FeatureCard
            title="Transparency & Accountability"
            description="Offering real-time monitoring, performance tracking, and payment protection for clear, accountable, and secure business operations."
            logo={TransparencyAccountabilityVector}
          />
          <FeatureCard
            title="Growth & Opportunity"
            description="Empowering members with resources like marketing support, a trade directory, and live networking opportunities to fuel continuous growth and success."
            logo={GrowthOppurtinityVector}
          />
        </div>
      </section>

      <section className=" py-10  lg:py-24 bg-primaryBg relative mb-2 overflow-x-hidden">
        <div className="w-full max-w-7xl px-4 mx-auto md:px-5 lg:px-5 mb-12">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 sm:gap-12 py-16">
            <div className="relative flex justify-center items-center">
              <div className="hidden lg:block absolute left-8 sm:left-12 lg:left-16 bottom-12 h-[300px] sm:h-[350px] w-[90%] sm:w-[400px] rounded-md"></div>
              <Image
                className="transform transition-transform duration-500 hover:scale-105 sm:hover:scale-110 rounded-xl shadow-2xl shadow-slate-700 object-cover z-10 w-full max-w-[90%] sm:max-w-[400px]"
                src={OurVisionImage}
                height={350}
                alt="Why Us Image"
              />
            </div>
            <div
            id="vision"
            className="flex flex-col justify-center items-center lg:items-start gap-6 sm:gap-8">
              <div className="relative">
                <h2
                
                className="text-4xl md:text-5xl font-bold mb-3 text-gray-700 relative z-10 text-center lg:text-start">
                  Our <span className="text-[#5216ab]">Vision</span>
                </h2>
                <h2
                  className="absolute -top-[15px] sm:-top-[20px] md:-top-[30px] left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 text-[50px] sm:text-[60px] md:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
                  aria-hidden="true"
                >
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 text-base sm:text-[18px] leading-relaxed text-center lg:text-start px-2 sm:px-0">
                Our vision at BNG Logistics Network is to be the premier global
                platform where logistics professionals seamlessly connect,
                collaborate, and innovate to drive industry excellence. We
                aspire to create a trusted network that transcends borders,
                fostering reliable partnerships and setting new standards for
                transparency, efficiency, and technological advancement. By
                empowering our members with essential tools, real-time
                resources, and robust support, we envision a world where
                logistics thrives through unified, data-driven, and sustainable
                growth on an international scale.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 sm:gap-12 py-16">
            <div className="relative flex justify-center items-center lg:order-2">
              <div className="hidden lg:block absolute right-8 sm:right-12 lg:right-16 bottom-12 h-[300px] sm:h-[350px] w-[90%] sm:w-[400px] rounded-md"></div>
              <Image
                className="rounded-xl transform transition-transform duration-500 hover:scale-105 sm:hover:scale-110 shadow-2xl shadow-slate-700 object-cover z-10 w-full max-w-[90%] sm:max-w-[400px]"
                src={OurMissionImage}
                height={350}
                alt="Vision Image"
              />
            </div>
            <div
            id="mission"
            className="flex flex-col justify-center items-center lg:items-start gap-6 sm:gap-8">
              <div className="relative">
                <h2
                
                className="text-4xl md:text-5xl pt-5 lg:pt-0 font-bold mb-3 text-gray-700 relative z-10 text-center lg:text-start">
                  Our <span className="text-primary">Mission</span>
                </h2>
                <h2
                  className="absolute top-[-15px] sm:top-[-20px] left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 text-5xl lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2 min-w-[max-content]"
                  aria-hidden="true"
                >
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 text-base sm:text-[18px] leading-relaxed text-center lg:text-start px-2 sm:px-0">
                Our mission is to provide logistics professionals worldwide with
                a secure, digitalized environment that enhances connectivity,
                maximizes business potential, and fosters enduring partnerships.
                We are committed to upholding high standards of integrity,
                rigorous member vetting, and cutting-edge technology, ensuring
                that each interaction within the BNG network brings real value.
                Through dedicated customer support, innovation-driven tools, and
                proactive engagement, we aim to support our members in achieving
                consistent success and expanding their global reach
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;