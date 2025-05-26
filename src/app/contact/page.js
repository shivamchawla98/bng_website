import React from 'react';
import Head from 'next/head'; // Import Head from next/head
import { ContactHero } from '@/page-components/Contact/ContactHero';
import { FAQ } from "@/components/Faq";
import { QuoteForm } from '@/page-components/Contact/QuoteForm';
import { SocialMedia } from '@/page-components/Contact/SocialMedia';
import ContactUsMap from '@/page-components/Contact/ContactUsMap';
import MapComponent from '@/page-components/Contact/MapComponent';
import ContactCards from '@/page-components/Contact/ContactCards';
import BusinessLocations from '@/page-components/Contact/BusinessLocations';
import Form from '@/page-components/Contact/Form';
import LocationCard from '@/page-components/Contact/LocationCard';
import faqBackgroundImage from '../../../public/contact_us/FAQ_Image.jpg';


export const metadata = {
  title: 'Contact Us | BNG Logistics Network',
  description: 'Get in touch with BNG Logistics Network for membership inquiries, partnerships, or support. We’re here to help logistics professionals worldwide.',
  // robots: 'noindex, nofollow', // Moved from <Head>
};

const ContactPage = () => {
  return (
    <>
      {/* Add meta title and description */}
      <Head>
        {/* <title>Contact Us | BNG Logistics Network</title>
        <meta
          name="description"
          content="Get in touch with BNG Logistics Network for membership inquiries, partnerships, or support. We’re here to help logistics professionals worldwide."
        /> */}
      </Head>

      <div className="min-h-screen bg-white">
        <ContactHero />
        <div className="container mx-auto px-4 pt-12 -mb-4 relative z-10">
          <div className="grid md:grid-cols-1 gap-8 mb-16">
            <Form />
            {/* <QuoteForm /> */}
            {/* <ContactUsMap /> */} 
            {/* <SocialMedia /> */}
          </div>
        </div>

        <section className="min-h-80 bg-gray-50 ">
          <div className="mx-auto">
            <LocationCard />
            {/* <MapComponent address="Rasoolpur Nawada, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309" /> */}
          </div>
        </section>

        <section className="py-16 relative">
          {/* <div
            className="absolute bottom-0 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #D186EB 16%, #D186EB 46.86%, #D186EB 67%)",
            }}
          ></div> */}
          <ContactCards />
        </section>

        {/* <section className="py-16 bg-secondryBg relative">
          <BusinessLocations />
        </section> */}

        <section
          style={{ backgroundImage: `url(${faqBackgroundImage.src})` }}
          className="bg-primaryBg py-16"
        >
          <FAQ />
        </section>
      </div>
    </>
  );
};

export default ContactPage;