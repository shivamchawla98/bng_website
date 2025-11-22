import React from 'react'
import Benefits from './Benefits'
import { WebPageSchema } from '@/components/StructuredData'

export const metadata = {
  title: 'Member Benefits – BNG Global Logistics Network',
  description: 'Discover the powerful member benefits of BNG: secure partnerships, digital tools, global exposure, verified logistics companies, and 24/7 support.',
  openGraph: {
    title: 'Member Benefits – BNG Global Logistics Network',
    description: 'Discover the exclusive benefits of joining BNG: global logistics partnerships, verified members, digital tools, secure communication, and 24/7 worldwide support.',
    url: 'https://bnglogisticsnetwork.com/benefit',
    siteName: 'BNG Logistics Network',
    type: 'website',
    images: [
      {
        url: 'https://bnglogisticsnetwork.com/BNG%20Logo.png',
        width: 1200,
        height: 630,
        alt: 'BNG Logistics Network Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Member Benefits – BNG Global Logistics Network',
    description: 'Discover the exclusive benefits of joining BNG: global logistics partnerships, verified members, digital tools, secure communication, and 24/7 worldwide support.',
    images: ['https://bnglogisticsnetwork.com/BNG%20Logo.png'],
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/benefit',
  },
};
const page = () => {
  return (
    <>
      <WebPageSchema 
        name="Member Benefits – BNG Logistics Network"
        url="https://bnglogisticsnetwork.com/benefit"
        description="Discover the exclusive benefits of joining BNG: global logistics partnerships, verified members, digital tools, secure communication, and 24/7 worldwide support."
        image="https://bnglogisticsnetwork.com/BNG%20Logo.png"
      />
      <Benefits />
    </>
  )
}

export default page