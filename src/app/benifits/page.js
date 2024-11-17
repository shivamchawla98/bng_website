"use client"

import React from 'react'
import { BenifitsHero } from '@/page-components/Benifits/BenifitsHero'
import BenifitsSecondSection from '@/page-components/Benifits/BenifitsSecondSection'
import BenifitsThirdSection from '@/page-components/Benifits/BenifitsThirdSection'
import MemberBenefits from '@/page-components/Benifits/MemberBenifits'
import StatsCounter from '@/page-components/Benifits/StatsCounter'
import SplitScreenCTA from '@/page-components/Benifits/SplitScreenCTA'
import OurCoreValues from '@/page-components/Benifits/OurCoreValues'
import WhyUs from '@/page-components/Benifits/WhyUs'
function page() {
  return (
    <div>
      <BenifitsHero />
      <BenifitsSecondSection />
      <StatsCounter/>
      <OurCoreValues />
      <WhyUs />
      <BenifitsThirdSection />

      <MemberBenefits/>
 
      <SplitScreenCTA/>
    </div>
  )
}

export default page
