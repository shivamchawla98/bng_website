import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Cta from "@/components/Cta";
import ClientApolloProvider from "./ClientApolloProvider";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: "BNG Logistics Network",
  description: "Connect and collaborate with forwarders daily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
        <GoogleTagManager gtmId="GTM-5PGZMFJ6" />
      <body className="antialiased bg-[#E6EBF4] overflow-x-hidden">
        <Header />
        <ClientApolloProvider>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=YourIdGoesHere"
height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {children}

        </ClientApolloProvider>
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
