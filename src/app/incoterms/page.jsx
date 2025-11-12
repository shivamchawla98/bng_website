import React from 'react'
import IncotermsPage from './Incoterms'

export const metadata = {
  title: 'Incoterms Guide | International Trade Terms | BNG Logistics Network',
  description: 'Complete guide to Incoterms for freight forwarders and logistics professionals. Understand international commercial terms, shipping responsibilities, and trade regulations.',
  openGraph: {
    title: 'Incoterms Guide | International Trade Terms | BNG Logistics Network',
    description: 'Complete guide to Incoterms for freight forwarders and logistics professionals. Understand international commercial terms, shipping responsibilities, and trade regulations.',
    url: 'https://bnglogisticsnetwork.com/incoterms',
    siteName: 'BNG Logistics Network',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/incoterms',
  },
};

const page = () => {
  return (
    <IncotermsPage />
  )
}

export default page