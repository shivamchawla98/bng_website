import React from "react";
import { CommonHeroSection } from "@/components/CommonHeroSection/CommonHeroSection";
import { FAQ } from "@/page-components/OurCompany/FAQ";
import TeamSection from "@/page-components/OurCompany/OurTeam";
import OurPartners from "@/page-components/OurCompany/OurPartners";
import { QuoteForm } from "@/page-components/OurCompany/QuoteForm";
function page() {
  return (
    <div className="">
      <CommonHeroSection
        title="Our Company"
        subtitle="Explore the latest innovations and network!"
      />
      <section className="bg-gray-50 py-12">
        <FAQ />
      </section>
      <section className="bg-white py-12">
        <TeamSection />
      </section>
      <section className="bg-gray-50 py-12 md:px-[112px]">
        <OurPartners />
      </section>
      <section className="bg-white py-12 md:px-[112px]">
        <QuoteForm />
      </section>
    </div>
  );
}

export default page;
