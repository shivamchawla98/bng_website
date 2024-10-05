import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ConferenceHeroSection } from '@/page-components/Conferance/ConferanceHaeroSection';
import { FeatureCard } from '@/page-components/Conferance/FeatureCard';
import { FAQ } from '@/page-components/Conferance/FAQ';
import { ConferenceCard } from '@/page-components/Conferance/ConferanceCard';
import Sponsorship from '@/page-components/Conferance/Sponshership';
// Hero Section Component


// Conference Card Component

// FAQ Component

// Main Page Component
const ConferencePage = () => (
  <div className="min-h-screen bg-gray-50">
  <ConferenceHeroSection />
    
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
    


    <Sponsorship />
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-black text-center">Upcoming Conferences</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ConferenceCard 
          date="11 Aug 2024" 
          description="Join us for an incredible learning experience"
        />
        <ConferenceCard 
          date="15 Aug 2024" 
          description="Expert speakers and networking opportunities"
        />
        <ConferenceCard 
          date="20 Aug 2024" 
          description="Innovative solutions and industry insights"
        />
      </div>
    </section>
    
    
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
       <FAQ />
      </div>
    </section>
  </div>
);

export default ConferencePage;