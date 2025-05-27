"use client"

import React from 'react'
import Head from 'next/head' // Import Head from next/head
import { BenifitsHero } from '@/page-components/Benifits/BenifitsHero'
import BenifitsSecondSection from '@/page-components/Benifits/BenifitsSecondSection'
import BenifitsThirdSection from '@/page-components/Benifits/BenifitsThirdSection'
import MemberBenefits from '@/page-components/Benifits/MemberBenifits'
import StatsCounter from '@/page-components/Benifits/StatsCounter'
import SplitScreenCTA from '@/page-components/Benifits/SplitScreenCTA'
import OurCoreValues from '@/page-components/Benifits/OurCoreValues'
import WhyUs from '@/page-components/Benifits/WhyUs'
import SecuritySteps from '@/page-components/BecomeMember/SecuritySteps'
import Widget from '@/page-components/Benifits/Widget'
/**
 * The benefits page.
 *
 * This page shows the benefits of joining BNG. It consists of a hero section,
 * a second section explaining the benefits, a stats counter, a section explaining
 * our core values, a section explaining why you should join BNG, and a split
 * screen CTA.
 *
 * @return {React.ReactElement} The benefits page.
 */


function Benefits() {
  return (
    <>
 

      <div className='bg-primaryBg'>
        <BenifitsHero />
        {/* <BenifitsSecondSection /> */}
        <OurCoreValues />
        <Widget />
        {/* <StatsCounter/> */}
        <WhyUs />
        {/* <BenifitsThirdSection />
        <MemberBenefits/> */}
        <SplitScreenCTA/>
      </div>
    </>
  )
}

export default Benefits