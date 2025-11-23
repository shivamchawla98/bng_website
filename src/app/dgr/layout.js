import { WebPageSchema } from '@/components/StructuredData';

export const metadata = {
  title: 'DGR Logistics Network – Dangerous Goods Freight Community',
  description: 'Join an international network specializing in dangerous goods logistics. Connect with certified DGR freight forwarders and secure transport partners.',
  keywords: 'DGR logistics, dangerous goods, hazardous materials transport, IATA DGR, air cargo safety',
  openGraph: {
    title: 'DGR Logistics Network – Dangerous Goods Freight Community',
    description: 'Join an international network specializing in dangerous goods logistics. Connect with certified DGR freight forwarders and secure transport partners worldwide.',
    url: 'https://bnglogisticsnetwork.com/dgr',
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
    title: 'DGR Logistics Network – Dangerous Goods Freight Community',
    description: 'Join an international network specializing in dangerous goods logistics. Connect with certified DGR freight forwarders and secure transport partners worldwide.',
    images: ['https://bnglogisticsnetwork.com/BNG%20Logo.png'],
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/dgr',
  },
};

export default function DGRLayout({ children }) {
  return (
    <>
      <WebPageSchema 
        name="DGR Logistics Network – Dangerous Goods Freight Community"
        url="https://bnglogisticsnetwork.com/dgr"
        description="Join an international network specializing in dangerous goods logistics. Connect with certified DGR freight forwarders and secure transport partners worldwide."
        image="https://bnglogisticsnetwork.com/BNG%20Logo.png"
      />
      {children}
    </>
  );
}
