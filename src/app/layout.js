import { Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Cta from '@/components/Cta';
import ClientApolloProvider from './ClientApolloProvider';
import { GoogleTagManager } from '@next/third-parties/google';

// Configure Lato with desired weights, styles, and subset
const lato = Lato({
  weight: ['100', '300', '400', '700', '900'], // Fixed: string literals
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <head>
        {/* Only include necessary meta tags if needed; fonts are handled by next/font */}
      </head>
      <GoogleTagManager gtmId="GTM-5PGZMFJ6" />
      <body className="antialiased bg-[#E6EBF4] overflow-x-hidden">
        <Header />
        <ClientApolloProvider>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5PGZMFJ6"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {children}
        </ClientApolloProvider>
        <Cta />
        <Footer />
      </body>
    </html>
  );
}