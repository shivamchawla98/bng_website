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
