import React from 'react'
import IncotermsPage from './Incoterms'
import { ArticleSchema } from '@/components/StructuredData'

export const metadata = {
  title: 'Incoterms 2024 Explained – Global Trade & Logistics Guide',
  description: 'Understand Incoterms 2024 with clear definitions for global shipping, freight forwarding, and international trade. Improve compliance and avoid supply-chain risks.',
  keywords: 'incoterms 2024, international trade terms, global shipping rules, freight forwarding compliance',
  openGraph: {
    title: 'Incoterms 2024 Explained – Global Trade & Logistics Guide',
    description: 'Understand Incoterms 2024 with clear definitions for international shipping, freight forwarding, and global trade. Improve compliance and reduce logistics risks.',
    url: 'https://bnglogisticsnetwork.com/incoterms',
    siteName: 'BNG Logistics Network',
    type: 'article',
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
    title: 'Incoterms 2024 Explained – Global Trade & Logistics Guide',
    description: 'Understand Incoterms 2024 with clear definitions for international shipping, freight forwarding, and global trade. Improve compliance and reduce logistics risks.',
    images: ['https://bnglogisticsnetwork.com/BNG%20Logo.png'],
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/incoterms',
  },
};

const page = () => {
  return (
    <>
      <ArticleSchema 
        name="Incoterms 2024 Explained – Global Trade & Logistics Guide"
        url="https://bnglogisticsnetwork.com/incoterms"
        description="Understand Incoterms 2024 with clear definitions for international shipping, freight forwarding, and global trade. Improve compliance and reduce logistics risks."
        image="https://bnglogisticsnetwork.com/BNG%20Logo.png"
        articleSection="International Trade"
      />
      <IncotermsPage />
    </>
  )
}

export default page