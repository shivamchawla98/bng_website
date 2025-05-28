import Head from "next/head"; // Import Head from next/head
import HeroSection from "@/page-components/home/HeroSection";
import Image from "next/image";
import AboutUs from "@/page-components/home/AboutUs";
import MemberBenefits from "@/page-components/home/MemberBenifits";
import TestimonialSlider from "@/page-components/home/TestimonialSlider";
import WorldWideReach from "@/page-components/home/WorldWideReach";
import Solutions from "@/page-components/home/Solutions";
import News from "@/page-components/home/News";
import Conference from "@/page-components/home/Conferance";
import LatestMembers from "@/page-components/OurCompany/LatestMembers";
import SecuritySteps from "@/page-components/BecomeMember/SecuritySteps";
import WorldMap from "@/page-components/home/WorldMap";
import Widget from "@/page-components/home/Widget";
import SplitScreenCTA from "@/page-components/Benifits/SplitScreenCTA";
// import ExperimentalMap from "@/page-components/home/ExperimentalMap";

export const metadata = {
  title: 'Global Logistics Network | Freight Forwarders & Industry Leaders',
  description: 'Join BNG Logistics Network — a trusted global platform connecting logistics professionals and freight forwarders for growth, collaboration, and technology-driven solutions.',
  // robots: 'noindex, nofollow', // Moved from <Head>
};

export default function Home() {
  return (
    <>
      {/* Add meta title and description */}


      <div className="w-screen">
        <HeroSection />
        <div className="relative">

        <Widget />
        </div>
        <AboutUs />
        <MemberBenefits />
        <TestimonialSlider />
        <section className="bg-secondryBg pb-28 md:px-[80px]">
          <LatestMembers />
        </section>
        {/* <WorldWideReach /> */}
        {/* <ExperimentalMap /> */}
        <WorldMap />
        <Solutions />
        <SecuritySteps />
        <Conference />
        <News />
        <SplitScreenCTA />
      </div>
    </>
  );
}