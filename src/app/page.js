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
import WorldMap from "@/page-components/home/WorldMap";
import Widget from "@/page-components/home/Widget";
import SplitScreenCTA from "@/page-components/Benifits/SplitScreenCTA";
// import ExperimentalMap from "@/page-components/home/ExperimentalMap";

export default function Home() {
return(
  
  <div className="  w-screen ">
  <HeroSection />
  <Widget />
  <AboutUs />
  <MemberBenefits />
  <TestimonialSlider />

 
  <section className="bg-secondryBg pb-28 md:px-[80px] ">
    <LatestMembers />
  </section>
  {/* <WorldWideReach /> */}
  {/* <ExperimentalMap /> */}
  <WorldMap />
  <Solutions />
  <SecuritySteps />
  <Conference />
  <News />
  <SplitScreenCTA />
  </div>
)
}
