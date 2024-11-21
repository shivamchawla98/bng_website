import React, { useRef } from "react";
import { FeatureCard } from "../OurCompany/FeatureCard";
import about1 from "@/app/images/abou1.png";
import about2 from "@/app/images/about2.png";
import Image from "next/image";

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
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
      In today’s digital age, access to accurate data is vital for boosting
      business presence, sales, and revenue. BNG's Member Area is a
      user-friendly, centralized platform designed for logistics professionals
      seeking a streamlined networking experience. Crafted by a team of skilled
      engineers, this space offers an intuitive graphical interface where
      members can monitor key data relevant to their objectives through an array
      of visual dashboards. The Member Area provides multiple benefits,
      including time savings, enhanced productivity, and real-time monitoring
      for fast decision-making. Members can track progress, measure performance,
      and communicate more effectively, all in one convenient place. Designed
      with transparency and accountability in mind, the platform ensures
      at-a-glance visibility into vital metrics and up-to-date progress
      evaluations. This automated, efficient system allows members to stay
      informed and make impactful decisions without extensive resources, all
      while optimizing their networking capabilities for better business
      outcomes.
    </p>
  );
  const membersAreaContentTwo = (
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
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
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
      At BNG, we prioritize creating a safe, reliable environment for members to
      establish strong global connections. Our Global Reach initiative is
      designed to increase members’ visibility, allowing them to market their
      services effectively and attract new business. Through ongoing efforts, we
      build a community of qualified, reliable partners, ensuring lasting and
      profitable partnerships across the globe.Since our inception, BNG has
      received enthusiastic support from the freight, logistics, and trade
      industries worldwide. Within just 18 days, we welcomed over 300 new
      members, with a projected total of 800 by the end of 2024. Each membership
      undergoes a rigorous vetting process, including quality assessments and
      reference checks by regional partners, ensuring that every new member
      meets our high standards. With BNG, members are assured of connecting with
      credible partners, making each interaction meaningful and reliable within
      a community committed to industry excellence.
    </p>
  );
  const globalReachContentTwo = (
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
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
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
      BNG’s Business Centre combines advanced technology and industry expertise
      to create a digital marketplace where members can find business leads,
      participate in active bids, and submit proposals directly to clients
      around the world. Designed to maximize business potential, the Business
      Centre allows members to interact with a global network, including
      exporters, importers, and manufacturers, in real time.This unique feature
      enables members to engage in a live bidding process without geographic
      limitations, providing opportunities to increase visibility, post
      requests, and send quotations directly to relevant clients. The Business
      Centre fosters increased revenue and profitability, offering members a
      versatile space where they can efficiently promote services, drive
      meaningful connections, and grow their business. By merging technology
      with practical industry solutions, BNG ensures members can access and act
      upon valuable leads instantly, supporting their business goals in a
      competitive, dynamic market.
    </p>
  );
  const businessXchangeContentTwo = (
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
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
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
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
  const freightXchangeContentTwo = (
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
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
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
      BNG upholds a rigorous vetting process to ensure that all members are
      reliable and trustworthy, fostering a community where credibility is
      paramount. Our team of legal and trade experts reviews each application,
      examining business profiles, establishment credentials, debt history, and
      market reputation. Only those who meet our high standards are granted
      membership. To join BNG, applicants must have a proven record of
      credibility, demonstrated by a three-year business history and two trade
      references. The admission process involves multiple steps to confirm
      trustworthiness: submitting an application, undergoing a trust scan by our
      legal team, verifying references, and final approval. This structured
      approach ensures that BNG members work with reputable, vetted partners,
      creating a network where connections are built on mutual trust and
      quality. Joining BNG means joining a community of professionals dedicated
      to maintaining high standards and delivering dependable services.
    </p>
  );
  const trustedPartnersContentTwo = (
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
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
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
      Payment security is crucial for business, and BNG’s Payment Protection
      Framework (PPF) empowers members to control financial risk with
      confidence. The PPF offers coverage up to $50,000 for elite members,
      providing a safeguard in the event of payment disputes or delays.Our
      advanced, digital framework allows members to operate in a secure
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
  const paymentProtectionContentTwo = (
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
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
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
      BNG’s advanced payment monitoring system simplifies tracking and managing
      invoices, making it easier to monitor receivables and payables
      efficiently. By simply submitting data, members activate an automated
      tracking process that handles payment reminders, invoice updates, and
      other payment-related tasks. This comprehensive framework reduces the need
      for manual follow-ups, helping members save time and stay organized with
      their financial operations. The system’s automated reminders and real-time
      updates ensure that payments are always accurately tracked and recorded,
      providing peace of mind to members and helping them avoid potential
      financial discrepancies. BNG’s payment monitoring solution exemplifies our
      dedication to optimizing members’ experience, enabling smooth financial
      processes that support stable, efficient business operations.
    </p>
  );
  const paymentMonitoringContentTwo = (
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
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
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
      In situations of disagreement, misunderstanding, or conflict, prompt
      reporting is essential to ensure smooth resolution. BNG’s Claim Center
      provides a fully digital interface where members can file claims and track
      their status in real time, helping to resolve conflicts swiftly and with
      full transparency. Our Claim Center is designed for efficiency,
      guaranteeing members an expedited process for addressing disputes. By
      filing claims digitally, members can ensure that each case is addressed
      accurately, and the network is committed to achieving 100% satisfaction
      with each resolution. The Claim Center embodies BNG’s dedication to
      maintaining a trusted, fair environment where all issues are handled
      professionally and transparently. This resource empowers members to
      address concerns promptly, keeping business operations steady and
      fostering a secure community where disputes are resolved effectively.
    </p>
  );

  const claimCenterContentTwo = (
    <p className="text-gray-600 text-base leading-relaxed text-center lg:text-start">
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
  return (
    <section className="py-16 w-full mx-auto px-4 bg-primaryBg text-center flex flex-col justify-center align-middle relative">
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
        />
        <FeatureCard
          title="Global Reach"
          description="Connect with reliable partners worldwide and access a growing community that meets all your logistics and supply chain requirements."
          onClick={() => handleScrollToSection(globalReachRef)}
        />
        <FeatureCard
          title="Business Xchange"
          description="Access the Business Center, a dedicated area for finding active business leads and sharing opportunities directly with clients in your network."
          onClick={() => handleScrollToSection(businessXchangeRef)}
        />
        <FeatureCard
          title="Freight Xchange"
          description="Showcase your freight rates and services to the global trade community via BNG Logistics & B2B Portals, boosting your visibility and increasing business opportunities."
          onClick={() => handleScrollToSection(freightXchangeRef)}
        />
        <FeatureCard
          title="Trusted Partners"
          description="Membership is granted exclusively to companies with solid reputations, verified through a three-year track record and two business references."
          onClick={() => handleScrollToSection(trustedPartnersRef)}
        />
        <FeatureCard
          title="Payment Protection"
          description="The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment.."
          onClick={() => handleScrollToSection(paymentProtectionRef)}
        />
        <FeatureCard
          title="Payment Monitoring"
          description="A state-of-the-art system that automatically tracks receivables and payables, keeping all transactions organized and up-to-date.."
          onClick={() => handleScrollToSection(paymentMonitoringRef)}
        />
        <FeatureCard
          title="Claim Center"
          description="A fully digital claims process allows members to file and resolve disputes seamlessly, ensuring prompt and fair resolutions for all conflicts."
          onClick={() => handleScrollToSection(claimCenterRef)}
        />
      </div>
      {/* Detailed Sections */}
      {[
        {
          ref: membersAreaRef,
          content: membersAreaContent,
          contentTwo: membersAreaContentTwo,
        },
        {
          ref: globalReachRef,
          content: globalReachContent,
          contentTwo: globalReachContentTwo,
        },
        {
          ref: businessXchangeRef,
          content: businessXchangeContent,
          contentTwo: businessXchangeContentTwo,
        },
        {
          ref: freightXchangeRef,
          content: freightXchangeContent,
          contentTwo: freightXchangeContentTwo,
        },
        {
          ref: trustedPartnersRef,
          content: trustedPartnersContent,
          contentTwo: trustedPartnersContentTwo,
        },
        {
          ref: paymentProtectionRef,
          content: paymentProtectionContent,
          contentTwo: paymentProtectionContentTwo,
        },
        {
          ref: paymentMonitoringRef,
          content: paymentMonitoringContent,
          contentTwo: paymentMonitoringContentTwo,
        },
        {
          ref: claimCenterRef,
          content: claimCenterContent,
          contentTwo: claimCenterContentTwo,
        },
      ].map(({ ref, content, contentTwo }, index) => (
        <section className="py-12 bg-primaryBg" key={index}>
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            {/* First Row */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-12">
              <div
                className={`relative flex justify-center items-center ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}>
                <div
                  className={`hidden lg:block absolute ${
                    index % 2 === 0 ? "left-16" : "right-16"
                  } bottom-12 h-[350px] w-[400px] border-primary border-2 rounded-md`}></div>
                <Image
                  className="rounded-xl object-cover z-10"
                  src={index % 2 === 0 ? about1 : about2}
                  height={350}
                  alt={`About Us Image ${index + 1}`}
                />
              </div>
              <div
                className="flex flex-col justify-center items-center lg:items-start gap-8"
                ref={ref}>
                <h2 className="text-3xl font-bold text-[#27293B]">{`  ${
                  [
                    "Members Area",
                    "Global Reach",
                    "Business Xchange",
                    "Freight Xchange",
                    "Trusted Partners",
                    "Payment Protection",
                    "Payment Monitoring",
                    "Claim Center",
                  ][index]
                }`}</h2>
                <p className="text-[#27293B]">{content}</p>
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
