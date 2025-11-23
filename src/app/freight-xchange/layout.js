import { WebPageSchema } from '@/components/StructuredData';

export const metadata = {
  title: 'Freight X-Change – Connect with Global Freight Partners',
  description: 'Access real-time freight inquiries and connect with reliable logistics companies worldwide through the Freight X-Change platform.',
  keywords: 'freight exchange, global freight partners, real-time freight, logistics marketplace',
  openGraph: {
    title: 'Freight X-Change – Connect with Global Freight Partners',
    description: 'Access real-time freight inquiries and connect with reliable logistics companies worldwide through the BNG Freight X-Change platform.',
    url: 'https://bnglogisticsnetwork.com/freight-xchange',
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
    title: 'Freight X-Change – Connect with Global Freight Partners',
    description: 'Access real-time freight inquiries and connect with reliable logistics companies worldwide through the BNG Freight X-Change platform.',
    images: ['https://bnglogisticsnetwork.com/BNG%20Logo.png'],
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/freight-xchange',
  },
};

export default function FreightXchangeLayout({ children }) {
  return (
    <>
      <WebPageSchema 
        name="Freight X-Change – Connect with Global Freight Partners"
        url="https://bnglogisticsnetwork.com/freight-xchange"
        description="Access real-time freight inquiries and connect with reliable logistics companies worldwide through the BNG Freight X-Change platform."
        image="https://bnglogisticsnetwork.com/BNG%20Logo.png"
      />
      {children}
    </>
  );
}
