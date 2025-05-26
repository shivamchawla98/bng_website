import Head from "next/head"; // Import Head from next/head
import { FAQ } from "@/components/Faq";
import BecomeHeroSection from "@/page-components/BecomeMember/BecomeHeroSection";
import faqBackgroundImage from '../../../public/contact_us/FAQ_Image.jpg';
import PricingTable from "@/page-components/BecomeMember/Pricing";
// import SecuritySteps from "@/page-components/BecomeMember/SecuritySteps";
import WhyUs from "@/page-components/BecomeMember/WhyUs";
import MemberBenefits from "@/page-components/home/MemberBenifits";
import TestimonialSlider from "@/page-components/home/TestimonialSlider";
import ExistingMemberRibbon from "@/page-components/BecomeMember/Ribbon";
import MembershipForm from "@/page-components/BecomeMember/LeadForm";
import SplitScreenCTA from "@/page-components/Benifits/SplitScreenCTA";


export const metadata = {
  title: 'Membership Pricing | BNG Logistics Network',
  description: 'Explore flexible pricing plans for logistics professionals and freight forwarders. Join BNG Logistics Network to access premium business growth tools.',
  // robots: 'noindex, nofollow', // Moved from <Head>
};

export default function BecomeAMember() {
  return (
    <>
      {/* Add meta title and description */}
      <Head>
    
      </Head>

      <div>
        <BecomeHeroSection />
        {/* <ExistingMemberRibbon /> */}
        {/* <MembershipForm /> */}
        <section className="py-16 bg-white ">
          <div className="container mx-auto px-4 ">
            <PricingTable />
          </div>
        </section>

        {/* <WhyUs />
        <MemberBenefits />
        <TestimonialSlider /> */}
        {/* <SecuritySteps /> */}

        <section
          style={{ backgroundImage: `url(${faqBackgroundImage.src})` }}
          className="py-16 bg-primaryBg relative"
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
        <SplitScreenCTA/>
      </div>
    </>
  );
}