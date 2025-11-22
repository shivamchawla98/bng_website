import React from 'react';
import { WebPageSchema } from '@/components/StructuredData';

export const metadata = {
  title: 'Shipping Exchange – Global Cargo & Logistics Marketplace',
  description: 'Connect with worldwide carriers, freight forwarders, and logistics partners through BNG’s Shipping Exchange. Share cargo inquiries and find reliable shipping solutions globally.',
  keywords: 'shipping exchange, global cargo marketplace, freight exchange, logistics partners worldwide',
  openGraph: {
    title: 'Shipping Exchange – Global Cargo & Logistics Marketplace',
    description: 'Connect with worldwide carriers and freight forwarders through BNG’s Shipping Exchange. Share cargo requirements and find reliable logistics partners globally.',
    url: 'https://bnglogisticsnetwork.com/shipping-exchange',
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
    title: 'Shipping Exchange – Global Cargo & Logistics Marketplace',
    description: 'Connect with worldwide carriers and freight forwarders through BNG’s Shipping Exchange. Share cargo requirements and find reliable logistics partners globally.',
    images: ['https://bnglogisticsnetwork.com/BNG%20Logo.png'],
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/shipping-exchange',
  },
};

const page = () => {
  return (
    <>
      <WebPageSchema 
        name="Shipping Exchange – Global Cargo & Logistics Marketplace"
        url="https://bnglogisticsnetwork.com/shipping-exchange"
        description="A global platform where carriers and freight forwarders exchange shipping requirements and find reliable logistics partners."
        image="https://bnglogisticsnetwork.com/BNG%20Logo.png"
      />
      <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 text-center">Shipping and Exchange Policy</h1>

      <div className="space-y-8">
        <section className="space-y-4">
          <p className="text-gray-800">
            BNG Logistics Network is a digital, service-based platform offering online tools and business services exclusively to freight forwarders and logistics professionals. We do not sell or ship any physical goods.
          </p>
          <p className="text-gray-800">
            All services provided by BNG, including access to Business Xchange (global freight leads) and Freight Xchange (freight rate sharing), are delivered electronically through our secure online platform upon successful registration or subscription.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Shipping Policy</h2>
          <p className="text-gray-800">
            As our services are fully digital, there is no physical shipping involved.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Exchange Policy</h2>
          <p className="text-gray-800">
            BNG does not offer exchanges, as there are no tangible products or returnable items involved. Once service access is granted, it is considered delivered and activated.
          </p>
        </section>

        <section className="space-y-4 pt-4 border-t">
          <p className="text-gray-800">
            For service-related assistance or support, please contact us at:
          </p>
          <p className="font-medium">📧 <span className="font-semibold text-gray-700">support@bnglogisticsnetwork.com</span></p>
        </section>
      </div>
    </div>
    </>
  );
};

export default page;