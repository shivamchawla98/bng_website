



import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ConferenceHeroSection } from "@/page-components/Conferance/ConferanceHaeroSection";
import { FeatureCard } from "@/page-components/Conferance/FeatureCard";
import { FAQ } from "@/components/Faq";


import { ConferenceCard } from "@/page-components/Conferance/ConferanceCard";
import Sponsorship from "@/page-components/Conferance/Sponshership";
import ConferanceSecondSection from "@/page-components/Conferance/ConferanceSecondSection";
import ConferanceThirdSection from "@/page-components/Conferance/ConferanceThirdSection";
// Hero Section Component
const conferences = [
  {
    date: "11 Aug 2024",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    date: "12 Aug 2024",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    date: "13 Aug 2024",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  // Add more conference data as needed
];

// Conference Card Component

// FAQ Component

// Main Page Component
const ConferencePage = () => (
  <div className="min-h-screen bg-gray-50">
    <ConferenceHeroSection />

    <ConferanceSecondSection />

    {/* Features Section */}
    <section className="py-16 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    <ConferanceThirdSection />

    <section className="py-24 bg-white container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-[#27293B] text-center">
        Upcoming Conferences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {conferences.map((conf, index) => (
          <ConferenceCard
            key={index}
            date={conf.date}
            description={conf.description}
            index={index} // Pass the index to alternate the styles
          />
        ))}
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FAQ />
      </div>
    </section>
  </div>
);

export default ConferencePage;
