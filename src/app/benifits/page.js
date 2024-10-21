"use client"

import React from 'react'
import { BenifitsHero } from '@/page-components/Benifits/BenifitsHero'
import BenifitsSecondSection from '@/page-components/Benifits/BenifitsSecondSection'
import BenifitsThirdSection from '@/page-components/Benifits/BenifitsThirdSection'
import MemberBenefits from '@/page-components/Benifits/MemberBenifits'
import StatsCounter from '@/page-components/Benifits/StatsCounter'
import SplitScreenCTA from '@/page-components/Benifits/SplitScreenCTA'
function page() {
  return (
    <div>
      <BenifitsHero />
      <BenifitsSecondSection />
      <BenifitsThirdSection />
      <StatsCounter/>
      <MemberBenefits/>
 
      <SplitScreenCTA/>
    </div>
  )
}

export default page
