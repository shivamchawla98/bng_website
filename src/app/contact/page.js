import React from 'react';
import { ContactHero } from '@/page-components/Contact/ContactHero';
import { FAQ } from "@/components/Faq";
import { QuoteForm } from '@/page-components/Contact/QuoteForm';
import { SocialMedia } from '@/page-components/Contact/SocialMedia';
import ContactUsMap from '@/page-components/Contact/ContactUsMap';
import MapComponent from '../../page-components/contact/MapComponent';
import ContactCards from '../../page-components/contact/ContactCards';
import BusinessLocations from '../../page-components/contact/BusinessLocations';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-primaryBg">
      <ContactHero />
      <div className="container mx-auto px-4 py-12 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <QuoteForm />
          {/* <ContactUsMap /> */}
          <SocialMedia />
        </div>

        <section className="py-16 bg-gray-50 ">
        <div className="container mx-auto px-4 ">
          <MapComponent address="1600 Amphitheatre Parkway, Mountain View, CA" />
          </div>
          </section>

        <section className="py-16 bg-primaryBg relative">
          {/* <div
            className="absolute bottom-0 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",
            }}
          ></div> */}
          <ContactCards />
          </section>

        <section className="py-16 bg-secondryBg relative">
          {/* <div
            className="absolute bottom-0 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",
            }}
          ></div> */}
          <BusinessLocations />
        </section>
        <FAQ />
      </div>
    </div>
  );
};

export default ContactPage;