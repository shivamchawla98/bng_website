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
    <div className="bg-white">
   <AboutUsHero />
      <AboutSection />
      <section className="py-16  w-full mx-auto px-4 bg-gray-50">
        <h2 className="text-[48px] text-center font-bold text-black">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <FeatureCard
            title="Appearance"
            description="Professional development focused on presentation skills"
          />
          <FeatureCard
            title="Confidence"
            description="Build your professional confidence through expert guidance"
          />
          <FeatureCard
            title="Curiosity"
            description="Explore new ideas and innovations in your field"
          />
             <FeatureCard
            title="Appearance"
            description="Professional development focused on presentation skills"
          />
          <FeatureCard
            title="Confidence"
            description="Build your professional confidence through expert guidance"
          />
          <FeatureCard
            title="Curiosity"
            description="Explore new ideas and innovations in your field"
          />
        </div>
      </section>
      {/* <section className="bg-white py-12">
        <TeamSection />
      </section> */}
      <section className="bg-gray-50 py-12 md:px-[112px]">
        <OurPartners />
      </section>
      <section className="bg-white py-12 px-4">
        <FAQ />
      </section>
     
      <section className="b py-12 px-4 md:px-[112px]">
        <QuoteForm />
      </section>
    </div>
  );
}

export default page;
