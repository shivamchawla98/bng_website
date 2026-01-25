"use client";
import React from "react";
import { Shield, TrendingUp, Award, Users, Eye, Globe, HeadphonesIcon, Handshake } from "lucide-react";

const whyBngPoints = [
  {
    id: 1,
    icon: Award,
    title: "Built for the Top 1%",
    description: "BNG is intentionally selective. Limited members per country ensure serious partnerships, not overcrowded competition."
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Real Business, Not Noise",
    description: "Our proprietary Business Xchange and Freight Xchange connect members through structured shipment queries and published trade-lane rates—focused on conversions, not mass lead sharing."
  },
  {
    id: 3,
    icon: Shield,
    title: "Trust-First Network",
    description: "Each Elite member benefits from USD 50,000 payment protection, creating confidence to trade and collaborate globally."
  },
  {
    id: 4,
    icon: Users,
    title: "Quality Over Quantity",
    description: "Every member is vetted. No open access. No dilution. BNG grows with intent, protecting the value of every connection."
  },
  {
    id: 5,
    icon: Eye,
    title: "Powerful Member Visibility",
    description: "Members get premium company profiles, prioritized directory placement, and visibility at global exhibitions—without extra cost."
  },
  {
    id: 6,
    icon: Globe,
    title: "Country-Level Exclusivity",
    description: "Limited representation per country ensures members aren't competing internally for the same business."
  },
  {
    id: 7,
    icon: HeadphonesIcon,
    title: "Human Support That Delivers",
    description: "Award-winning, 5-star member support with dedicated relationship managers—not automated ticket systems."
  },
  {
    id: 8,
    icon: Handshake,
    title: "Global Collaboration, Not Undercutting",
    description: "BNG is designed to promote cooperation, long-term partnerships, and trust—eliminating destructive price wars common in large networks."
  }
];

export default function TwigOfferSlider() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 relative z-10">
              Why <span className="text-primary">BNG</span>?
            </h2>
            <h2
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-7xl font-bold text-[#27293B] opacity-[3%] leading-none whitespace-nowrap"
              aria-hidden="true"
            >
              Why BNG
            </h2>
          </div>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyBngPoints.map((point) => {
            const IconComponent = point.icon;
            return (
              <div
                key={point.id}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {point.id}. {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}