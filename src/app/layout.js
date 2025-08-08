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
