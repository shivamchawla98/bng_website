import React from "react";
import { CommonHeroSection } from "@/components/CommonHeroSection/CommonHeroSection";
import { FAQ } from "@/page-components/OurCompany/FAQ";
import TeamSection from "@/page-components/OurCompany/OurTeam";
import OurPartners from "@/page-components/OurCompany/OurPartners";
import { QuoteForm } from "@/page-components/OurCompany/QuoteForm";
import { FeatureCard } from "@/page-components/OurCompany/FeatureCard";
import AboutSection from "@/page-components/OurCompany/AboutSections";
import { AboutUsHero } from "@/page-components/OurCompany/AboutUsHero";
function page() {
  return (
    <div className="">
   <AboutUsHero />
      <AboutSection />
   
      {/* <section className="bg-white py-12">
        <TeamSection />
      </section> */}
      <section className="bg-secondryBg py-12 md:px-[112px]">
        <OurPartners />
      </section>
      <section className="bg-primaryBg py-12 px-4 relative">
      <div
        className="absolute bottom-0 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",

          zIndex: 1,
          filter: "blur(110px)",
          // Alternative fallback
        }}></div>
        <FAQ />
      </section>
     
      <section className="b py-12 px-4 md:px-[112px]">
        <QuoteForm />
      </section>
    </div>
  );
}

export default page;
