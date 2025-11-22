import Script from 'next/script';

export const metadata = {
  title: 'Terms of Use – BNG Logistics Network',
  description: 'Read the official Terms of Use for BNG Logistics Network. Understand our policies, user guidelines, and platform compliance requirements.',
  keywords: 'terms of use, user guidelines, platform compliance, logistics network terms, membership terms',
  openGraph: {
    title: 'Terms of Use – BNG Logistics Network',
    description: 'Read the official Terms of Use for BNG Logistics Network. Understand our policies, user guidelines, and platform compliance requirements.',
    url: 'https://bnglogisticsnetwork.com/terms-of-use',
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
    title: 'Terms of Use – BNG Logistics Network',
    description: 'Read the official Terms of Use for BNG Logistics Network. Understand our policies, user guidelines, and platform compliance requirements.',
    images: ['https://bnglogisticsnetwork.com/BNG%20Logo.png'],
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/terms-of-use',
  },
};

function LegislationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Use – BNG Logistics Network",
    "url": "https://bnglogisticsnetwork.com/terms-of-use",
    "description": "The official Terms of Use for BNG Logistics Network covering user responsibilities, guidelines, and platform compliance.",
    "publisher": {
      "@type": "Organization",
      "name": "BNG Logistics Network",
      "url": "https://bnglogisticsnetwork.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bnglogisticsnetwork.com/BNG%20Logo.png"
      }
    }
  };

  return (
    <Script
      id="legislation-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function TermsOfUseLayout({ children }) {
  return (
    <>
      <LegislationSchema />
      {children}
    </>
  );
}
