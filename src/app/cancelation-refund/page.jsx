import React from 'react';
import { WebPageSchema } from '@/components/StructuredData';

export const metadata = {
  title: 'Cancellation & Refund Policy – BNG Logistics Network',
  description: 'Read BNG’s official cancellation and refund policy for memberships. Learn about eligibility, procedures, and guidelines for global logistics network users.',
  keywords: 'logistics refund policy, membership cancellation, BNG refund guidelines, global logistics platform policy, membership terms, cancellation rules',
  openGraph: {
    title: 'Cancellation & Refund Policy – BNG Logistics Network',
    description: 'Read BNG’s official cancellation and refund policy for memberships. Learn about eligibility, procedures, and guidelines for global logistics network users.',
    url: 'https://bnglogisticsnetwork.com/cancelation-refund',
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
    title: 'Cancellation & Refund Policy – BNG Logistics Network',
    description: 'Read BNG’s official cancellation and refund policy for memberships. Learn about eligibility, procedures, and guidelines for global logistics network users.',
    images: ['https://bnglogisticsnetwork.com/BNG%20Logo.png'],
  },
  alternates: {
    canonical: 'https://bnglogisticsnetwork.com/cancelation-refund',
  },
};

const page = () => {
  return (
    <>
      <WebPageSchema 
        name="Cancellation & Refund Policy – BNG Logistics Network"
        url="https://bnglogisticsnetwork.com/cancelation-refund"
        description="Official cancellation and refund policy for BNG Logistics Network memberships, including eligibility and refund procedures."
        image="https://bnglogisticsnetwork.com/BNG%20Logo.png"
      />
      <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 text-center">Cancellation and Refund Policy</h1>

      <div className="space-y-8">
        <section className="space-y-4">
          <p className="text-gray-800">
            At <span className="font-semibold">BNG Logistics Network</span>, we offer annual subscription-based digital
            services through three membership tiers: <span className="font-semibold">Standard</span>, <span className="font-semibold">Premium</span>, and
            <span className="font-semibold">Elite</span>. Our services are designed exclusively for freight forwarders
            and logistics professionals, delivered through our secure, members-only
            online platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Free Trial</h2>
          <p className="text-gray-800">
            We offer a <span className="font-semibold">30-day free trial</span> for users who wish to explore our
            platform before committing to a paid membership. After the trial ends,
            users may choose to subscribe to any of our paid membership plans.
            Subscription after the trial is entirely optional.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Cancellation Policy</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>All paid subscriptions are valid for a <span className="font-semibold">minimum period of one year</span> from the date of payment.</li>
            <li><span className="font-semibold">Early cancellation is not permitted.</span> Once a subscription is purchased, it remains active for the full term selected (1 year or multiple years, as chosen at registration).</li>
            <li>If a member chooses <span className="font-semibold">not to renew</span> the subscription at the end of the billing cycle, access to the platform and services will be terminated immediately after the expiry date.</li>
            <li>Users can simply avoid renewing their membership to opt out for the following term.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Refund Policy</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li><span className="font-semibold">No refunds</span> will be issued under any circumstances once payment has been processed.</li>
            <li>This includes, but is not limited to: change of mind, lack of usage, technical issues, or mistaken payments.</li>
            <li>There are <span className="font-semibold">no partial or pro-rata refunds</span> for unused time or services.</li>
            <li>As our platform is login-based with no physical setup or product delivery, <span className="font-semibold">no onboarding or setup fees apply</span>, and hence, no refund is applicable.</li>
          </ul>
        </section>

        <section className="space-y-4 pt-4 border-t">
          <h2 className="text-xl font-semibold">Disputes & Support</h2>
          <p className="text-gray-800">
            We are committed to supporting our users. For any questions or concerns
            regarding memberships, billing, or technical support, please reach out
            to our team at:
          </p>
          <p className="font-medium">📧 <span className="font-semibold text-gray-800">support@bnglogisticsnetwork.com</span></p>
        </section>
      </div>
    </div>
    </>
  );
};

export default page;