import React from 'react';
import { ContactHero } from '@/page-components/Contact/ContactHero';
import { FAQ } from "@/components/Faq";

import { QuoteForm } from '@/page-components/Contact/QuoteForm';
import { SocialMedia } from '@/page-components/Contact/SocialMedia';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-primaryBg">
      <ContactHero />
      
      <div className="container mx-auto px-4 py-12 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <QuoteForm />
          <SocialMedia />
        </div>
        
        <FAQ />
      </div>
    </div>
  );
};

export default ContactPage;