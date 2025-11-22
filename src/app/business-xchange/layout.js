import { WebPageSchema } from '@/components/StructuredData';

export const metadata = {
  title: 'Business X-Change – Global Logistics Collaboration Hub',
  description: 'A dedicated platform for freight forwarders to exchange business leads, partnerships, and opportunities globally.',
  keywords: 'business exchange, logistics collaboration, freight partnerships, global logistics leads',
  openGraph: {
    title: 'Business X-Change – Global Logistics Collaboration Hub',
    description: 'A dedicated platform for freight forwarders to exchange business leads, form partnerships, and explore logistics opportunities worldwide.',
    url: 'https://bnglogisticsnetwork.com/business-xchange',
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
    title: 'Business X-Change – Global Logistics Collaboration Hub',
    description: 'A platform for freight forwarders to exchange business leads, form partnerships, and explore logistics opportunities worldwide.',
    images: ['https://bnglogisticsnetwork.com/BNG%20Logo.png'],
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/business-xchange',
  },
};

export default function BusinessXchangeLayout({ children }) {
  return (
    <>
      <WebPageSchema 
        name="Business X-Change – Global Logistics Collaboration Hub"
        url="https://bnglogisticsnetwork.com/business-xchange"
        description="A platform for freight forwarders to exchange business leads, form partnerships, and explore logistics opportunities worldwide."
        image="https://bnglogisticsnetwork.com/BNG%20Logo.png"
      />
      {children}
    </>
  );
}
