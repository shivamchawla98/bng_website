import React from "react";
import TeamClient from "@/page-components/Team/TeamClient";

export const metadata = {
  title: "Our Team – BNG Logistics Network",
  description:
    "Meet the team behind BNG Logistics Network — the people connecting freight forwarders and logistics partners across the globe.",
  openGraph: {
    title: "Our Team – BNG Logistics Network",
    description:
      "Meet the team behind BNG Logistics Network — the people connecting freight forwarders and logistics partners across the globe.",
    url: "https://bnglogisticsnetwork.com/team",
    siteName: "BNG Logistics Network",
    type: "website",
    images: [
      {
        url: "https://bnglogisticsnetwork.com/BNG%20Logo.png",
        width: 1200,
        height: 630,
        alt: "BNG Logistics Network Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team – BNG Logistics Network",
    description:
      "Meet the team behind BNG Logistics Network — the people connecting freight forwarders and logistics partners across the globe.",
  },
  alternates: {
    canonical: "https://bnglogisticsnetwork.com/team",
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
