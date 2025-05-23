import Image from "next/image";
import about1 from "../../../public/about/about_01.jpg";
import about2 from "../../../public/about/About_02.jpg";
import OurVisionImage from "../../../public/about/vision.jpg";
import OurMissionImage from "../../../public/about/mission.jpg";
import { FeatureCard } from "./FeatureCard";

// import MembersAreaVector from "../../../public/about/MembersArea.svg";
import GlobalReachVector from "../../../public/about/Global-Collaboration.png";
import IntigirityTrustVector from "../../../public/about/Integrity-&-Trust.png";
import InnovationVector from "../../../public/about/Innovation-&-Technology.png";
import CustomerCentericVector from "../../../public/about/Customer-Centric-Support.png";
import TransparencyAccountabilityVector from "../../../public/about/Transparency-&-Accountability.png";
import GrowthOppurtinityVector from "../../../public/about/Growth-&-Opportunity.png";
// import FreightXchangeVector from "../../../public/about/FreightXchange.png";
const AboutSection = () => {
  return (
    <>
      <section className="pt-24 bg-primaryBg relative">
        {/* <div
          className="absolute bottom-0 right-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",

            zIndex: 1,
            filter: "blur(110px)",
            // Alternative fallback
          }}></div>
        <div
          className="absolute bottom-0 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",

            zIndex: 1,
            filter: "blur(110px)",
            // Alternative fallback
          }}></div> */}
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto  ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12  pt-16 pb-14 ">
            <div className="relative flex justify-center items-center">
              <div className="hidden lg:block absolute left-16 bottom-12 h-[350px] w-[400px]   rounded-md"></div>
              <Image
                className="rounded-xl transform transition-transform duration-500 hover:scale-110 shadow-2xl shadow-slate-700 object-cover z-10"
                src={about1}
                height={350}
                alt="About Us Image 1"
              />
            </div>
            <div className="flex flex-col justify-start items-center lg:items-start gap-8">
              <h2 className="text-gray-900 text-4xl font-medium leading-normal text-center lg:text-start">
                Building <span className="font-medium text-primary">Global Connections </span>  in Logistics
              </h2>
              <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
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
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-12 py-10">
            <div className="relative flex justify-center items-center lg:order-2">
              <div className="hidden lg:block absolute right-16 bottom-12 h-[350px] w-[400px]   rounded-md"></div>
              <Image
                className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-110 shadow-slate-700 object-cover z-10"
                src={about2}
                height={350}
                alt="About Us Image 2"
              />
            </div>
            <div className="flex flex-col justify-start items-center lg:items-start gap-8">
              <p className="text-gray-600  leading-relaxed text-center text-[18px] lg:text-start">
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

      <section className="pt-16 w-[100%] mx-auto px-4 bg-primaryBg items-center mb-12">
        <div className="relative">
          <h2 className="text-[55px] font-bold  text-[#27293B] text-center mb-12 relative z-10">
            Core <span className="text-primary">Values</span> 
          </h2>
          <h2
            className="absolute text-center top-[-30px] md:left-[37%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2 min-w-[max-content]"
            aria-hidden="true">
            Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
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
      <section className="py-24 bg-primaryBg relative mb-2">
        {/* <div
          className="absolute bottom-0 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",

            zIndex: 1,
            filter: "blur(110px)",
            // Alternative fallback
          }}></div>
        <div
          className="absolute top-0 right-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",

            zIndex: 1,
            filter: "blur(110px)",
            // Alternative fallback
          }}></div> */}
        <div className="w-full max-w-7xl px-4 mx-auto md:px-5 lg:px-5 mb-12">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 py-16">
            <div className="relative flex justify-center items-center">
              <div className="hidden lg:block absolute left-16 bottom-12 h-[350px] w-[400px]  rounded-md"></div>
              <Image
                className=" transform transition-transform duration-500 hover:scale-110 rounded-xl shadow-2xl shadow-slate-700 object-cover z-10"
                src={OurVisionImage}
                height={350}
                alt="Why Us Image"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-8">
              <div className="relative">
                <h2 className="text-gray-900 text-4xl font-medium leading-normal text-center lg:text-start">
                  Our <span className="text-primary">Vision</span> 
                </h2>
                <h2
                  className="absolute top-[-20px] left-0 text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2 min-w-[max-content]"
                  aria-hidden="true">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
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

          {/* Fourth section */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 py-16">
            <div className="relative flex justify-center items-center lg:order-2">
              <div className="hidden lg:block absolute right-16 bottom-12 h-[350px] w-[400px]  rounded-md"></div>
              <Image
                className="rounded-xl transform transition-transform duration-500 hover:scale-110 shadow-2xl shadow-slate-700 object-cover z-10"
                src={OurMissionImage}
                height={350}
                alt="Vision Image"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-8">
              <div className="relative">
                <h2 className="text-gray-900 text-4xl font-medium leading-normal text-center lg:text-start">
                  Our <span className="text-primary">Mission</span> 
                </h2>
                <h2
                  className="absolute top-[-20px] left-0 text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2 min-w-[max-content]"
                  aria-hidden="true">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
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
          {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-16">
            <div className="relative flex justify-center items-center">
              <div className="hidden lg:block absolute left-16 bottom-12 h-[350px] w-[400px] border-primary border-2 rounded-md"></div>
              <Image
                className="rounded-xl object-cover z-10"
                src={about1}
                height={350}
                alt="Why Us Image"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-8">
              <h2 className="text-gray-900 text-4xl font-extrabold leading-normal text-center lg:text-start">
                Our Mission
              </h2>
              <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
                We believe that the key to success lies in understanding our
                clients' unique needs. Our customer-first approach ensures that
                every interaction, from the initial consultation to project
                delivery, is seamless and efficient. We prioritize open
                communication, transparency, and collaboration, ensuring that
                each project exceeds expectations. By fostering strong
                relationships, we’ve created a loyal clientele who trusts us to
                handle their most challenging ventures. Your success is our
                priority, and we strive to be your partner in achieving
                greatness.
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AboutSection;
