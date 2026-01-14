import Head from "next/head"; // Import Head from next/head
import HeroSlider from "@/page-components/home/HeroSlider";
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
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
// import ExperimentalMap from "@/page-components/home/ExperimentalMap";

export const metadata = {
  title: 'BNG Logistics Network – Global Freight Forwarder & Logistics Community',
  description: 'Join a trusted global logistics network connecting freight forwarders and supply-chain professionals. Collaborate, grow, and access secure digital tools worldwide.',
  keywords: 'global logistics network, freight forwarder community, logistics partnerships, international logistics network, supply chain collaboration, freight platform',
  openGraph: {
    title: 'BNG Logistics Network – Global Freight Forwarder & Logistics Community',
    description: 'Join a trusted global logistics network connecting freight forwarders and supply-chain professionals. Build verified partnerships, enhance communication, and grow your business worldwide.',
    url: 'https://bnglogisticsnetwork.com/',
    siteName: 'BNG Logistics Network',
    type: 'website',
    images: [
      {
        url: 'https://bnglogisticsnetwork.com/BNG%20Logo.png',
        width: 1200,
        height: 630,
        alt: 'BNG Logistics Network Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BNG Logistics Network – Global Freight Forwarder & Logistics Community',
    description: 'Join a trusted global logistics network connecting freight forwarders and supply-chain professionals. Build verified partnerships, enhance communication, and grow your business worldwide.',
    images: ['https://bnglogisticsnetwork.com/BNG%20Logo.png'],
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/',
  },
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <div className="w-screen">
        <HeroSlider />
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