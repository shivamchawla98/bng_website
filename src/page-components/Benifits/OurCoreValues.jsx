import React, { useRef } from "react";
import { FeatureCard } from "../OurCompany/FeatureCard";
import MembersAreaImage from "../../../public/members_benefit/Member Area.png";
import GlobalReachImage from "../../../public/members_benefit/Global Reach.png";
import BusinessXchangeImage from "../../../public/members_benefit/Business Xchange.png";
import FreightXchangeImage from "../../../public/members_benefit/Freight Xchange.png";
import TrustedPartnersImage from "../../../public/members_benefit/Trusted Partners.png";
import PaymentProtectionImage from "../../../public/members_benefit/Payment Protection.png";
import PaymentMonitoringImage from "../../../public/members_benefit/Payment Monitoring.png";
import ClaimCenterImage from "../../../public/members_benefit/Claim Center.png";
import AcknowledgmentInsigniasImage from "../../../public/members_benefit/Acknowledgment Insignias.png";
import Image from "next/image";

import MembersAreaVector from "@/app/images/home/MembersArea.svg";
import GlobalReachVector from "@/app/images/home/GlobalReach.svg";
import BusinessXchangeVector from "@/app/images/home/BusinessXchange.svg";
import TrustedPartnersVector from "@/app/images/home/TrustedPartners.svg";
import PaymentProtectionVector from "@/app/images/home/PaymentProtection.svg";
import PaymentMonitoringVector from "@/app/images/home/PaymentMonitoring.webp";
import ClaimCenterVector from "@/app/images/home/ClaimCenter.svg";
import FreightXchangeVector from "@/app/images/home/FreightXchange.png";

function OurCoreValues() {
  // Refs for scrolling
  const membersAreaRef = useRef(null);
  const globalReachRef = useRef(null);
  const businessXchangeRef = useRef(null);
  const trustedPartnersRef = useRef(null);
  const paymentProtectionRef = useRef(null);
  const paymentMonitoringRef = useRef(null);
  const freightXchangeRef = useRef(null);
  const claimCenterRef = useRef(null);
  const acknowledgmentInsigniasRef = useRef(null);

  // Scroll handler
  const handleScrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Paragraph content for each section
  const membersAreaContent = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      BNG’s Member Area is a powerful, user-friendly platform for logistics professionals. It offers real-time dashboards to track progress, monitor key data, and enhance productivity. With features designed for transparency and efficiency, members can make faster decisions, streamline communication, and optimize networking. This centralized space provides everything you need to boost your business presence, increase sales, and save valuable time—all in one seamless and secure environment.
    </p>
  );
  const membersAreaContentTwo = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      The Member Area provides multiple benefits, including time savings,
      enhanced productivity, and real-time monitoring for fast decision-making.
      Members can track progress, measure performance, and communicate more
      effectively, all in one convenient place. Designed with transparency and
      accountability in mind, the platform ensures at-a-glance visibility into
      vital metrics and up-to-date progress evaluations. This automated,
      efficient system allows members to stay informed and make impactful
      decisions without extensive resources, all while optimizing their
      networking capabilities for better business outcomes.
    </p>
  );

  const globalReachContent = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      Expand your business globally with BNG’s trusted network. Our Global Reach initiative connects you with reliable, vetted partners while boosting visibility and creating lasting, profitable opportunities. Since our launch, we’ve welcomed hundreds of members from the freight and logistics industry, with more joining daily. With a rigorous approval process and a growing community, BNG ensures meaningful connections and business opportunities in an increasingly competitive global market.
    </p>
  );
  const globalReachContentTwo = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      Since our inception, BNG has received enthusiastic support from the
      freight, logistics, and trade industries worldwide. Within just 18 days,
      we welcomed over 300 new members, with a projected total of 800 by the end
      of 2024. Each membership undergoes a rigorous vetting process, including
      quality assessments and reference checks by regional partners, ensuring
      that every new member meets our high standards. With BNG, members are
      assured of connecting with credible partners, making each interaction
      meaningful and reliable within a community committed to industry
      excellence.
    </p>
  );
  const businessXchangeContent = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      BNG’s Business Centre is a digital hub where members can find business leads, post inquiries, and participate in live bids with no geographic limitations. This innovative tool connects you with exporters, importers, and manufacturers worldwide, enabling seamless collaboration and revenue growth. Members can efficiently promote services, submit quotations, and increase visibility, driving more meaningful and profitable connections within a dynamic, global marketplace.
    </p>
  );
  const businessXchangeContentTwo = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      This unique feature enables members to engage in a live bidding process
      without geographic limitations, providing opportunities to increase
      visibility, post requests, and send quotations directly to relevant
      clients. The Business Centre fosters increased revenue and profitability,
      offering members a versatile space where they can efficiently promote
      services, drive meaningful connections, and grow their business. By
      merging technology with practical industry solutions, BNG ensures members
      can access and act upon valuable leads instantly, supporting their
      business goals in a competitive, dynamic market.
    </p>
  );
  const freightXchangeContent = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      Showcase your freight rates and services to the global trade community with BNG’s Freight Market. This feature enhances visibility and helps attract clients by prioritizing competitive rates. Members can stand out in the logistics network by promoting their best offers, increasing exposure, and securing more business opportunities. Freight Market empowers you to boost sales and establish a strong market presence in today’s highly competitive logistics environment.
    </p>
  );
  const freightXchangeContentTwo = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      This feature is designed to help members attract new business by
      increasing their exposure within the global logistics network. The
      platform prioritizes competitive rates, enabling members to gain an edge
      by presenting their best offers to potential clients worldwide. The more
      competitive the rates, the higher the chances of securing new business.
      With Freight Market, BNG offers a valuable tool for amplifying visibility,
      expanding market reach, and fostering growth, helping members thrive in
      today’s globalized economy.
    </p>
  );
  const trustedPartnersContent = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      BNG ensures every member meets rigorous standards of trustworthiness through a thorough vetting process. Legal, trade, and financial checks ensure only credible businesses join our community. Members must demonstrate a solid reputation with proven trade references and a three-year operational history. This process guarantees reliability and professionalism, creating a network built on mutual trust. Joining BNG means collaborating with credible partners committed to maintaining the highest standards in the logistics industry.
    </p>
  );
  const trustedPartnersContentTwo = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      To join BNG, applicants must have a proven record of credibility,
      demonstrated by a three-year business history and two trade references.
      The admission process involves multiple steps to confirm trustworthiness:
      submitting an application, undergoing a trust scan by our legal team,
      verifying references, and final approval. This structured approach ensures
      that BNG members work with reputable, vetted partners, creating a network
      where connections are built on mutual trust and quality. Joining BNG means
      joining a community of professionals dedicated to maintaining high
      standards and delivering dependable services.
    </p>
  );

  const paymentProtectionContent = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      BNG’s Payment Protection Framework (PPF) safeguards members with coverage of up to $50,000 for elite memberships. This system ensures smooth, secure transactions and reduces financial risks. Members benefit from automated tools, such as overdue invoice monitoring and resolution centers, that enhance transparency and financial confidence. The PPF provides a trusted safety net, ensuring you can conduct business confidently and focus on building stronger partnerships without payment concerns.
    </p>
  );
  const paymentProtectionContentTwo = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      Our advanced, digital framework allows members to operate in a secure
      environment, equipped to mitigate financial uncertainties. Each member’s
      dedicated dashboard contains the full terms and conditions of the PPF,
      ensuring transparency and providing easy access to guidelines. This
      feature is designed to help members maintain smooth business transactions,
      knowing they have reliable financial support if issues arise. BNG’s
      payment protection framework reflects our commitment to supporting
      members’ financial well-being, allowing them to conduct business without
      unnecessary risk.
    </p>
  );

  const paymentMonitoringContent = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      Simplify your financial operations with BNG’s automated payment monitoring tools. Members can track receivables and payables, set reminders, and manage invoices effortlessly. This real-time framework eliminates manual follow-ups, ensuring transactions stay organized and on schedule. By offering transparency and efficiency, BNG’s payment monitoring system helps you stay in control of your finances, allowing you to focus on growing your business while ensuring payment accuracy and stability.
    </p>
  );
  const paymentMonitoringContentTwo = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      This comprehensive framework reduces the need for manual follow-ups,
      helping members save time and stay organized with their financial
      operations. The system’s automated reminders and real-time updates ensure
      that payments are always accurately tracked and recorded, providing peace
      of mind to members and helping them avoid potential financial
      discrepancies. BNG’s payment monitoring solution exemplifies our
      dedication to optimizing members’ experience, enabling smooth financial
      processes that support stable, efficient business operations.
    </p>
  );

  const claimCenterContent = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      BNG’s Claim Center provides a fully digital system to file and track claims, resolving conflicts quickly and transparently. This tool ensures efficient resolution of disputes, helping members maintain smooth operations. By offering real-time updates and a user-friendly interface, the Claim Center ensures 100% satisfaction in conflict management. BNG is dedicated to fostering a trusted, fair environment where disputes are resolved professionally, allowing members to focus on business growth without interruptions.
    </p>
  );

  const claimCenterContentTwo = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      Our Claim Center is designed for efficiency, guaranteeing members an
      expedited process for addressing disputes. By filing claims digitally,
      members can ensure that each case is addressed accurately, and the network
      is committed to achieving 100% satisfaction with each resolution. The
      Claim Center embodies BNG’s dedication to maintaining a trusted, fair
      environment where all issues are handled professionally and transparently.
      This resource empowers members to address concerns promptly, keeping
      business operations steady and fostering a secure community where disputes
      are resolved effectively.
    </p>
  );
  
  const acknowledgmentInsigniasContent = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
      BNG’s acknowledgment insignias elevate your profile, showcasing your credibility, payment reliability, and activity level. These badges highlight your professionalism and build trust among fellow members. By offering a clear visual of key performance metrics, insignias make it easy for others to identify you as a dependable partner. This recognition strengthens your reputation, fosters meaningful connections, and opens the door to new business opportunities, ensuring you stand out within the global logistics network.
    </p>
  );

  const acknowledgmentInsigniasContentTwo = (
    <p className="text-gray-600 text-[18px] leading-relaxed text-center lg:text-start">
    </p>
  );
  return (
    <section className="py-14 w-full mx-auto px-4 bg-primaryBg text-center flex flex-col justify-center align-middle relative">
      <div
        className="absolute bottom-0 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",

          zIndex: 1,
          filter: "blur(110px)",
          // Alternative fallback
        }}></div>

      <div
        className="absolute top-[50%] left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",

          zIndex: 1,
          filter: "blur(110px)",
          // Alternative fallback
        }}></div>
      {/* Right-middle Patch */}
      <div
        className="absolute top-[4%] right-[80px] transform translate-x-1/2 -translate-y-1/2 md:w-[160px] h-[5%] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 100%, #D186EB 100.86%, #D186EB 100%)",
          zIndex: 1,
          filter: "blur(50px)",
        }}></div>
      <h2 className="text-[55px] font-bold text-[#27293B]">Member Benefits</h2>
      <div className="flex w-full justify-center">
        <p className="text-center w-[80%] text-gray-900">
          Gain access to a secure, digitalized platform with global connections,
          exclusive data resources, 24/7 support, and advanced tools.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <FeatureCard
          title="Members Area"
          description="An intuitive, user-friendly member portal designed to streamline networking, providing a centralized space for all your business connections and collaboration needs."
          onClick={() => handleScrollToSection(membersAreaRef)}
          logo={MembersAreaVector}
        />
        <FeatureCard
          title="Global Reach"
          description="Connect with reliable partners worldwide and access a growing community that meets all your logistics and supply chain requirements."
          onClick={() => handleScrollToSection(globalReachRef)}
          logo={GlobalReachVector}
        />
        <FeatureCard
          title="Business Xchange"
          description="Access the Business Center, a dedicated area for finding active business leads and sharing opportunities directly with clients in your network."
          onClick={() => handleScrollToSection(businessXchangeRef)}
          logo={BusinessXchangeVector}
        />
        <FeatureCard
          title="Freight Xchange"
          description="Showcase your freight rates and services to the global trade community via BNG Logistics & B2B Portals, boosting your visibility and increasing business opportunities."
          onClick={() => handleScrollToSection(freightXchangeRef)}
          logo={FreightXchangeVector}
        />
        <FeatureCard
          title="Trusted Partners"
          description="Membership is granted exclusively to companies with solid reputations, verified through a three-year track record and two business references."
          onClick={() => handleScrollToSection(trustedPartnersRef)}
          logo={TrustedPartnersVector}
        />
        <FeatureCard
          title="Payment Protection"
          description="The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment.."
          onClick={() => handleScrollToSection(paymentProtectionRef)}
          logo={PaymentProtectionVector}
        />
        <FeatureCard
          title="Payment Monitoring"
          description="A state-of-the-art system that automatically tracks receivables and payables, keeping all transactions organized and up-to-date.."
          onClick={() => handleScrollToSection(paymentMonitoringRef)}
          logo={PaymentMonitoringVector}
        />
        <FeatureCard
          title="Claim Center"
          description="A fully digital claims process allows members to file and resolve disputes seamlessly, ensuring prompt and fair resolutions for all conflicts."
          onClick={() => handleScrollToSection(claimCenterRef)}
          logo={ClaimCenterVector}
        />
        <FeatureCard
          title="Acknowledgment Insignias"
          description="BNG’s acknowledgment insignias elevate your profile, showcasing your credibility, payment reliability, and activity level. These badges highlight your professionalism and build trust."
          onClick={() => handleScrollToSection(acknowledgmentInsigniasRef)}
          logo={ClaimCenterVector}
        />
      </div>
      {/* Detailed Sections */}
      {[
        {
          ref: membersAreaRef,
          content: membersAreaContent,
          contentTwo: membersAreaContentTwo,
          img: MembersAreaImage,
        },
        {
          ref: globalReachRef,
          content: globalReachContent,
          contentTwo: globalReachContentTwo,
          img: GlobalReachImage,
        },
        {
          ref: businessXchangeRef,
          content: businessXchangeContent,
          contentTwo: businessXchangeContentTwo,
          img: BusinessXchangeImage,
        },
        {
          ref: freightXchangeRef,
          content: freightXchangeContent,
          contentTwo: freightXchangeContentTwo,
          img: FreightXchangeImage,
        },
        {
          ref: trustedPartnersRef,
          content: trustedPartnersContent,
          contentTwo: trustedPartnersContentTwo,
          img: TrustedPartnersImage,
        },
        {
          ref: paymentProtectionRef,
          content: paymentProtectionContent,
          contentTwo: paymentProtectionContentTwo,
          img: PaymentProtectionImage,
        },
        {
          ref: paymentMonitoringRef,
          content: paymentMonitoringContent,
          contentTwo: paymentMonitoringContentTwo,
          img: PaymentMonitoringImage,
        },
        {
          ref: claimCenterRef,
          content: claimCenterContent,
          contentTwo: claimCenterContentTwo,
          img: ClaimCenterImage,
        },
        {
          ref: acknowledgmentInsigniasRef,
          content: acknowledgmentInsigniasContent,
          contentTwo: acknowledgmentInsigniasContentTwo,
          img: AcknowledgmentInsigniasImage,
        },
      ].map(({ ref, content, contentTwo, img }, index) => (
        <section className="bg-primaryBg py-12" key={index}>
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            {/* First Row */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-12">
              <div
                className={`relative flex justify-center items-center ${index % 2 !== 0 ? "lg:order-2" : ""
                  }`}>
                <div
                  className={`hidden lg:block absolute  ${index % 2 === 0 ? "left-16 top-12" : "right-16  bottom-10"
                    }  h-[350px] w-[400px] border-[#6853DB] border-2 rounded-md`}></div>
                <Image
                  className="rounded-xl object-cover z-10"
                  src={img}
                  height={350}
                  alt={`About Us Image ${index + 1}`}
                />
              </div>
              <div
                className="flex flex-col justify-center items-center lg:items-start gap-8"
                ref={ref}>
                <h2 className="text-3xl font-bold text-[#27293B]">{`  ${[
                    "Members Area",
                    "Global Reach",
                    "Business Xchange",
                    "Freight Xchange",
                    "Trusted Partners",
                    "Payment Protection",
                    "Payment Monitoring",
                    "Claim Center",
                    "Acknowledgment Insignias",
                  ][index]
                  }`}</h2>
                <p className="text-[#27293B] text-[18px]">{content}</p>
              </div>
            </div>

            {/* Second Row */}
            {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-12">
              <div
                className={`relative flex justify-center items-center ${
                  index % 2 === 0 ? "lg:order-2" : ""
                }`}>
                <div
                  className={`hidden lg:block absolute ${
                    index % 2 === 0 ? "right-16" : "left-16"
                  } bottom-12 h-[350px] w-[400px] border-primary border-2 rounded-md`}></div>
                <Image
                  className="rounded-xl object-cover z-10"
                  src={index % 2 === 0 ? about2 : about1}
                  height={350}
                  alt={`About Us Image ${index + 2}`}
                />
              </div>
              <div className="flex flex-col justify-center items-center lg:items-start gap-8">
                <p className="text-[#27293B]">{contentTwo}</p>
              </div>
            </div> */}
          </div>
        </section>
      ))}
    </section>
  );
}

export default OurCoreValues;
