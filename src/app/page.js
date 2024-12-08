import HeroSection from "@/page-components/home/HeroSection";
import Image from "next/image";
import AboutUs from "@/page-components/home/AboutUs";
import MemberBenefits from "@/page-components/home/MemberBenifits";
import TestimonialSlider from "@/page-components/home/TestimonialSlider";
import WorldWideReach from "@/page-components/home/WorldWideReach";
import Solutions from "@/page-components/home/Solutions";
import News from "@/page-components/home/News";
import Conference from "@/page-components/home/Conferance";
import LatestMembers from "@/page-components/OurCompany/LatestMembers";
import SecuritySteps from "@/page-components/BecomeMember/SecuritySteps";

export default function Home() {
return(
  <div className=" w-screen">
  <HeroSection />
  <AboutUs />
  <MemberBenefits />
  <TestimonialSlider />
  <section className="bg-secondryBg py-12 md:px-[112px]">
    <LatestMembers />
  </section>
  <WorldWideReach />
  <Solutions />
  <SecuritySteps />
  <Conference />
  <News />
  </div>

  
)
}
