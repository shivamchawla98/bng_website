import HeroSection from "@/page-components/home/HeroSection";
import Image from "next/image";
import AboutUs from "@/page-components/home/AboutUs";
import MemberBenefits from "@/page-components/home/MemberBenifits";
import TestimonialSlider from "@/page-components/home/TestimonialSlider";
import WorldWideReach from "@/page-components/home/WorldWideReach";
import Solutions from "@/page-components/home/Solutions";
import News from "@/page-components/home/News";
import Conference from "@/page-components/home/Conferance";
export default function Home() {
return(
  <div className=" bg-white w-screen">
  <HeroSection />
  <AboutUs />
  <MemberBenefits />
  <TestimonialSlider />
  <WorldWideReach />
  <Solutions />
  <News />
  <Conference />
  </div>

  
)
}
