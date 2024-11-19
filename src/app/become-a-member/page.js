import { FAQ } from "@/components/Faq";
import BecomeHeroSection from "@/page-components/BecomeMember/BecomeHeroSection";

import PricingTable from "@/page-components/BecomeMember/Pricing";
import SecuritySteps from "@/page-components/BecomeMember/SecuritySteps";
import WhyUs from "@/page-components/BecomeMember/WhyUs";
import MemberBenefits from "@/page-components/home/MemberBenifits";
import TestimonialSlider from "@/page-components/home/TestimonialSlider";
export default function BecomeAMember() {
  return (
    <div>
      <BecomeHeroSection />

      <WhyUs />

      <section className="py-16 bg-gray-50 ">
        <div className="container mx-auto px-4 ">
          <PricingTable />
        </div>
      </section>
      <MemberBenefits />
      <TestimonialSlider />
      <SecuritySteps />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
<FAQ />
        </div>
      </section>
    </div>
  );
}
