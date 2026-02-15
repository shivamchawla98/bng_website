"use client";

import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ArrowRight, Plane, Ship, Package } from "lucide-react";
import getCountryCode from "../../../utils/getCountryCode";
import BusinessCards from "./BusinessCards";
import FreightCards from "./FreightCards";
import VerticalCarousel from "./VerticalCarousel";


// GraphQL Queries
const GET_BUSINESS_LEADS = gql`
  query GetBusinessLeads($filters: BusinessLeadFilterInput) {
    apiBusinessLeads(filters: $filters) {
      id
      uniqueId
      commodity
      loadingPort {
        country
        name
        unlocode
      }
      destinationPort {
        country
        name
        unlocode
      }
      transportationMethod
      createdAt
    }
  }
`;

const GET_FREIGHT_LEADS = gql`
  query GetFreightLeads($filters: FreightLeadFilterInput) {
    apiFreightLeads(filters: $filters) {
      id
      uniqueId
      loadingPort {
        name
        country
        unlocode
      }
      destinationPort {
        name
        country
        unlocode
      }
      transportationMethod
      freightRate
      freightRateCurrency
      createdAt
    }
  }
`;

const ExchangeSection = () => {
  const { data: businessData, loading: businessLoading } = useQuery(
    GET_BUSINESS_LEADS,
    {
      variables: {
        filters: {
          statuses: ["OPEN"],
        },
      },
    },
  );

  const { data: freightData, loading: freightLoading } = useQuery(
    GET_FREIGHT_LEADS,
    {
      variables: {},
    },
  );

  const businessLeads = businessData?.apiBusinessLeads || [];
  const freightLeads = freightData?.apiFreightLeads || [];

  const getTransportIcon = (method) => {
    if (method?.includes("AIR")) return <Plane className="h-5 w-5" />;
    if (method?.includes("SEA")) return <Ship className="h-5 w-5" />;
    return <Package className="h-5 w-5" />;
  };

  return (
    <section className="bg-[#EFF6FF] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl lg:text-[55px] font-bold text-gray-900 mb-4">
            Active <span className="text-primary">Opportunities</span>
          </h2>
          <h2
            className="absolute top-[-34px] lg:top-[-60px] left-0 lg:left-[0%] text-center w-full text-[40px] lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
            aria-hidden="true"
          >
            Active Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore live rates and shipment requirements from top 1% forwarders globally
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Business Exchange Column */}
          <div className="bg-white rounded-2xl shadow-xl p-6 h-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Package className="h-6 w-6 text-primary" />
              Business Xchange
            </h3>

            {/* Active Opportunities Cards */}
            <div className="h-[300px] md:h-[400px]">
              {businessLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="w-10 h-10 border-4 border-t-indigo-600 border-gray-200 rounded-full animate-spin"></div>
                </div>
              ) : businessLeads.length > 0 ? (
                <VerticalCarousel>
                  <BusinessCards leads={businessLeads} />
                </VerticalCarousel>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No opportunities available
                </div>
              )}
            </div>

            <div className="text-center mt-6">
              <a
                href="/business-xchange"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
              >
                View More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Freight Exchange Column */}
          <div className="bg-white rounded-2xl shadow-xl p-6 h-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Ship className="h-6 w-6 text-primary" />
              Freight Xchange
            </h3>

            {/* Active Opportunities Cards */}
            <div className="h-[300px] md:h-[400px]">
              {freightLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="w-10 h-10 border-4 border-t-indigo-600 border-gray-200 rounded-full animate-spin"></div>
                </div>
              ) : freightLeads.length > 0 ? (
                <VerticalCarousel>
                  <FreightCards leads={freightLeads} />
                </VerticalCarousel>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No opportunities available
                </div>
              )}
            </div>

            <div className="text-center mt-6">
              <a
                href="/freight-xchange"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
              >
                View More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeSection;
