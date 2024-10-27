import BecomeHeroSection from "@/page-components/BecomeMember/BecomeHeroSection";
import { FAQ } from "@/page-components/BecomeMember/Faq";
import PricingTable from "@/page-components/BecomeMember/Pricing";
import MemberBenefits from "@/page-components/home/MemberBenifits";
export default function BecomeAMember() {
  return (
    <div>
      <BecomeHeroSection />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <PricingTable />
        </div>
      </section>
      <MemberBenefits />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FAQ />
        </div>
      </section>
    
    </div>
  );
}
