import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Cta from "@/components/Cta";

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
      <body className="antialiased bg-[#E6EBF4] overflow-x-hidden">
        <Header />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
