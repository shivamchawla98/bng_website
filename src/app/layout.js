import { Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Cta from '@/components/Cta';
import ClientApolloProvider from './ClientApolloProvider';
import { GoogleTagManager } from '@next/third-parties/google';

// Configure Lato with desired weights, styles, and subset
const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  // Check if we're in staging environment
  const isStaging = process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging';

  return (
    <html lang="en" className={lato.className}>
      <head>
        {/* ADD THE NO-INDEX, NO-FOLLOW HERE */}
        {isStaging && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BNG Logistics Network',
              url: 'https://bnglogisticsnetwork.com',
              logo: 'https://bnglogisticsnetwork.com/logo.png',
              image: {
                '@type': 'ImageObject',
                url: 'https://bnglogisticsnetwork.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'BNG Logistics Network - Global Freight Forwarding and Logistics Solutions',
                type: 'image/png',
              },
              sameAs: [
                'https://www.facebook.com/bnglogisticsnetwork/',
                'https://www.linkedin.com/company/bnglogisticsnetwork/',
                'https://twitter.com/bnglogistics',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1 123 456 7890',
                contactType: 'customer service',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://bnglogisticsnetwork.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://bnglogisticsnetwork.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@id': 'https://bnglogisticsnetwork.com',
                    name: 'Home',
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BNG Logistics Network',
              url: 'https://bnglogisticsnetwork.com',
              logo: 'https://bnglogisticsnetwork.com/logo.png',
              sameAs: [
                'https://www.facebook.com/bnglogisticsnetwork/',
                'https://www.linkedin.com/company/bnglogisticsnetwork/',
                'https://twitter.com/bnglogistics',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1 123 456 7890',
                contactType: 'customer service',
              },
              images: [
                {
                  url: 'https://bnglogisticsnetwork.com/og-image.png',
                  width: 1200,
                  height: 630,
                  alt: 'BNG Logistics Network - Global Freight Forwarding and Logistics Solutions',
                  type: 'image/png',
                },
              ],
              twitter: {
                card: 'summary_large_image',
                title: 'BNG Logistics Network | Global Freight Forwarding Solutions',
                description: 'Join the world\'s most trusted freight forwarding network. Connect with verified partners across 90+ countries.',
                images: ['https://bnglogisticsnetwork.com/og-image.png'],
              },
            }),
          }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-5PGZMFJ6" />
      <ClientApolloProvider>
        <body className="antialiased bg-[#E6EBF4] overflow-x-hidden">
          <Header />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5PGZMFJ6"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {children}
          <Cta />
          <Footer />
        </body>
      </ClientApolloProvider>
    </html>
  );
}
