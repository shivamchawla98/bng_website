import React from "react";
import Head from "next/head"; // Import Head from next/head
import { CommonHeroSection } from "@/components/CommonHeroSection/CommonHeroSection";
import TeamSection from "@/page-components/OurCompany/OurTeam";
import LatestMembers from "@/page-components/OurCompany/LatestMembers";
import { QuoteForm } from "@/page-components/OurCompany/QuoteForm";
import { FeatureCard } from "@/page-components/OurCompany/FeatureCard";
import AboutSection from "@/page-components/OurCompany/AboutSections";
import { AboutUsHero } from "@/page-components/OurCompany/AboutUsHero";
import { FAQ } from "@/components/Faq";
import TestimonialSlider from "@/page-components/home/TestimonialSlider";
import faqBackgroundImage from '../../../public/contact_us/FAQ_Image.jpg';
import SplitScreenCTA from "@/page-components/Benifits/SplitScreenCTA";


export const metadata = {
  title: 'About BNG Logistics Network | Global Logistics Community',
  description: 'Learn about BNG Logistics Network — a secure, digital platform uniting vetted logistics experts and freight forwarders worldwide for better business.',
  // robots: 'noindex, nofollow', // Moved from <Head>
};

function page() {
  return (
    <>
      {/* Add meta title and description */}


      <div className="bg-primaryBg py-0">
        <AboutUsHero />
        <AboutSection />
        {/* <section className="bg-white py-12">
          <TeamSection />
        </section> */}
        <TestimonialSlider />
        <section className="bg-secondryBg py-12 md:px-[112px]">
          <LatestMembers />
        </section>
        <section 
          style={{ backgroundImage: `url(${faqBackgroundImage.src})` }}
          className="bg-primaryBg py-16"
          id="faq"
        >
          {/* <div
            className="absolute bottom-0 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",
              zIndex: 1,
              filter: "blur(110px)",
            }}
          ></div> */}

          <FAQ />
        </section>
        <SplitScreenCTA />
        {/* <section className="b px-4 md:px-[112px]">
          <QuoteForm />
        </section> */}
      </div>
    </>
  );
}

export default page;