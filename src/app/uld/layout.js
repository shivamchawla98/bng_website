import { ArticleSchema } from '@/components/StructuredData';

export const metadata = {
  title: 'ULD Logistics – Air Cargo Unit Load Device Solutions',
  description: 'Explore global ULD standards, air cargo handling guidelines, and logistics best practices. Ideal for freight forwarders and aviation cargo professionals.',
  keywords: 'ULD logistics, air cargo ULD, aviation freight, unit load device guide, air cargo containers',
  openGraph: {
    title: 'ULD Logistics – Air Cargo Unit Load Device Solutions',
    description: 'Explore global ULD standards, air cargo handling guidelines, and logistics best practices. Ideal for freight forwarders and aviation cargo professionals worldwide.',
    url: 'https://bnglogisticsnetwork.com/uld',
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
    title: 'ULD Logistics – Air Cargo Unit Load Device Solutions',
    description: 'Explore global ULD standards, air cargo handling guidelines, and logistics best practices. Ideal for freight forwarders and aviation cargo professionals worldwide.',
    images: ['https://bnglogisticsnetwork.com/BNG%20Logo.png'],
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/uld',
  },
};

export default function ULDLayout({ children }) {
  return (
    <>
      <ArticleSchema 
        name="ULD Logistics – Air Cargo Unit Load Device Solutions"
        url="https://bnglogisticsnetwork.com/uld"
        description="Explore global ULD standards, air cargo handling guidelines, and logistics best practices for freight forwarders and aviation cargo professionals."
        image="https://bnglogisticsnetwork.com/BNG%20Logo.png"
        articleSection="Air Cargo Logistics"
      />
      {children}
    </>
  );
}
