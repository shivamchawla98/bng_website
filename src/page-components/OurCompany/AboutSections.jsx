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
      <section className="lg:pt-24 w-full bg-primaryBg relative overflow-x-hidden">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 sm:gap-12 pt-16 pb-14">
            <div className="relative flex justify-center items-center">
              <div className="hidden lg:block absolute left-8 sm:left-12 lg:left-16 bottom-12 h-[350px] sm:h-[400px] w-[90%] sm:w-[450px] rounded-md"></div>
              <Image
                className="rounded-xl transform transition-transform duration-500 hover:scale-105 sm:hover:scale-110 shadow-2xl shadow-slate-700 object-cover z-10 w-full max-w-[400px] lg:max-w-[90%]"
                src={about1}
                height={450}
                alt="About Us Image 1"
              />
            </div>
            <div className="flex flex-col justify-start items-center lg:items-start gap-6 sm:gap-8">
              <h2 className="text-gray-900 text-3xl sm:text-4xl font-medium leading-normal text-center lg:text-start">
                
                <span className="font-medium text-primary">
                  {"The Power "}
                </span>{" "}
                Behind the Top 1%
              </h2>
              <p className="text-gray-600 text-base sm:text-[18px] leading-relaxed text-center lg:text-start px-2 sm:px-0">
                BNG Logistics Network is not an open community—it is a controlled, country-exclusive ecosystem built strictly for the top 1% of freight forwarders. With limited representation per country, verified membership, and value-protected collaboration, BNG eliminates dilution and internal competition. We replace volume-driven networking with structured, trust-based global partnerships designed to generate real business, measurable growth, and long-term strategic advantage.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 sm:gap-12 mb-12 py-10">
            <div className="relative flex justify-center items-center lg:order-2">
              <div className="hidden lg:block absolute right-8 sm:right-12 lg:right-16 bottom-12 h-[300px] sm:h-[350px] w-[90%] sm:w-[400px] rounded-md"></div>
              <Image
                className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 sm:hover:scale-110 shadow-slate-700 object-cover z-10 w-full  lg:max-w-[90%]"
                src={about2}
                height={350}
                alt="About Us Image 2"
              />
            </div>
            <div className="flex flex-col justify-start items-center lg:items-start gap-6 sm:gap-8">
              <h2 className="text-gray-900 text-3xl sm:text-4xl font-medium leading-normal text-center lg:text-start">
                
                <span className="font-medium text-primary">
                  {"The Technology "}
                </span>{" "}
                Behind BNG
              </h2>
              <p className="text-gray-600 text-base sm:text-[18px] leading-relaxed text-center lg:text-start px-2 sm:px-0">
                BNG operates on a proprietary digital infrastructure unlike traditional freight networks. Through AI-powered matchmaking, structured Business and Freight Xchange platforms, and intelligent data analysis, members receive targeted opportunities—not random connections. Our system identifies expansion intent, trade-lane relevance, and partnership compatibility using data science to maximise conversion potential. Technology at BNG is not decorative—it is engineered to deliver precision, efficiency, and measurable commercial value.
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
            title="Exclusivity with Purpose"
            description="We limit membership by country to protect value, reduce competition, and ensure meaningful partnerships—not overcrowded directories."
            logo={InnovationVector}
          />
          <FeatureCard
            title="Trust Above All"
            description="Strong global collaboration begins with credibility, verified members, and payment protection that safeguards business relationships."
            logo={IntigirityTrustVector}
          />
          <FeatureCard
            title="Quality Over Quantity"
            description="We prioritise serious, growth-driven forwarders—focused on long-term partnerships, not transactional connections."
            logo={TransparencyAccountabilityVector}
          />
          <FeatureCard
            title="Real Business Focus"
            description="BNG is built to generate genuine freight opportunities through structured exchange tools—not mass lead sharing."
            logo={GrowthOppurtinityVector}
          />
          <FeatureCard
            title="Global Collaboration"
            description="We connect forwarders across borders to create sustainable partnerships built on respect, transparency, and shared growth."
            logo={GlobalReachVector}
          />
          <FeatureCard
            title="Member-Centric Support"
            description="Our dedicated relationship approach ensures every member receives proactive, personalised support to maximise value."
            logo={CustomerCentericVector}
          />
        </div>
      </section>

      <section className=" py-10  lg:py-24 bg-primaryBg relative mb-2 overflow-x-hidden">
        <div className="w-full max-w-7xl px-4 mx-auto md:px-5 lg:px-5 mb-12">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 sm:gap-12 py-16">
            <div className="relative flex justify-center items-center">
              <div className="hidden lg:block absolute left-8 sm:left-12 lg:left-16 bottom-12 h-[300px] sm:h-[350px] w-[90%] sm:w-[400px] rounded-md"></div>
              <Image
                className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 sm:hover:scale-110 shadow-slate-700 object-cover z-10 w-full  lg:max-w-[90%]"
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
                  className="absolute -top-[15px] sm:-top-[20px] md:-top-[30px] left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 text-[60px] md:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
                  aria-hidden="true"
                >
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 text-base sm:text-[18px] leading-relaxed text-center lg:text-start px-2 sm:px-0">
                To redefine the global freight networking industry by building the most exclusive and performance-driven logistics community in the world. BNG aims to unite the top 1% of freight forwarders under a trust-first ecosystem where country exclusivity, structured business exchange, and protected partnerships eliminate dilution, price wars, and inefficiency—creating a powerful global platform built on credibility, strength, and measurable growth.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 sm:gap-12 py-16">
            <div className="relative flex justify-center items-center lg:order-2">
              <div className="hidden lg:block absolute right-8 sm:right-12 lg:right-16 bottom-12 h-[300px] sm:h-[350px] w-[90%] sm:w-[400px] rounded-md"></div>
              <Image
                className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 sm:hover:scale-110 shadow-slate-700 object-cover z-10 w-full  lg:max-w-[90%]"
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
                  className="absolute top-[-15px] sm:top-[-20px] left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 text-4xl lg:text-[65px] font-bold text-[#27293B] opacity-[3%] leading-none z-2 min-w-[max-content]"
                  aria-hidden="true"
                >
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 text-base sm:text-[18px] leading-relaxed text-center lg:text-start px-2 sm:px-0">
                Our mission is to create real commercial advantage for serious freight forwarders through limited membership, verified business exchange, intelligent matchmaking, and payment protection. BNG is committed to protecting member value, eliminating internal competition, and replacing volume-driven networking with structured, high-conversion collaboration—empowering forwarders to expand globally with confidence, authority, and long-term strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;