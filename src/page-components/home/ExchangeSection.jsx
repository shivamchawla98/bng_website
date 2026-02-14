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

  const businessLeads = (businessData?.apiBusinessLeads || []).slice(0, 3);
  const freightLeads = (freightData?.apiFreightLeads || []).slice(0, 3);

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
<div className="mb-6 h-[300px] md:h-[400px]">
              <VerticalCarousel>
    <BusinessCards />
  </VerticalCarousel>
              
            </div>

            <div className="space-y-4">
              {businessLoading ? (
                <div className="flex justify-center py-12">
                  <div className="w-8 h-8 border-4 border-t-indigo-500 border-gray-200 rounded-full animate-spin"></div>
                </div>
              ) : (
                businessLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center gap-2 text-indigo-600">
                          {getTransportIcon(lead.transportationMethod)}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <img
                            src={`https://flagcdn.com/w20/${getCountryCode(
                              lead.loadingPort?.country,
                            )}.png`}
                            alt="origin"
                            className="w-5 h-5 rounded-sm"
                          />
                          <span>{lead.loadingPort?.country || "N/A"}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                          <span>{lead.destinationPort?.country || "N/A"}</span>
                          <img
                            src={`https://flagcdn.com/w20/${getCountryCode(
                              lead.destinationPort?.country,
                            )}.png`}
                            alt="destination"
                            className="w-5 h-5 rounded-sm"
                          />
                        </div>
                        <span className="text-sm text-gray-600">
                          {lead.commodity || "General Cargo"}
                        </span>
                      </div>
                      <a
                        href={`https://app.bnglogisticsnetwork.com/business/opportunities#${lead.uniqueId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
                      >
                        View
                      </a>
                    </div>
                  </div>
                ))
              )}
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
          </div>

          {/* Freight Exchange Column */}
          <div className="bg-white rounded-2xl shadow-xl p-6 h-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Ship className="h-6 w-6 text-primary" />
              Freight Xchange
            </h3>

            {/* Active Opportunities Cards */}
            <div className="mb-6 h-[300px] md:h-[400px]">
  <VerticalCarousel>
    <FreightCards />
  </VerticalCarousel>
</div>
            <div className="space-y-4">
              {freightLoading ? (
                <div className="flex justify-center py-12">
                  <div className="w-8 h-8 border-4 border-t-indigo-500 border-gray-200 rounded-full animate-spin"></div>
                </div>
              ) : (
                freightLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center gap-2 text-indigo-600">
                          {getTransportIcon(lead.transportationMethod)}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <img
                            src={`https://flagcdn.com/w20/${getCountryCode(
                              lead.loadingPort?.country,
                            )}.png`}
                            alt="origin"
                            className="w-5 h-5 rounded-sm"
                          />
                          <span>{lead.loadingPort?.country || "N/A"}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                          <span>{lead.destinationPort?.country || "N/A"}</span>
                          <img
                            src={`https://flagcdn.com/w20/${getCountryCode(
                              lead.destinationPort?.country,
                            )}.png`}
                            alt="destination"
                            className="w-5 h-5 rounded-sm"
                          />
                        </div>
                        {lead.freightRate && (
                          <span className="text-sm font-semibold text-green-600">
                            {lead.freightRateCurrency} {lead.freightRate}
                          </span>
                        )}
                      </div>
                      <a
                        href={`https://app.bnglogisticsnetwork.com/freight/opportunities#${lead.uniqueId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
                      >
                        View
                      </a>
                    </div>
                  </div>
                ))
              )}
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
      </div>
    </section>
  );
};

export default ExchangeSection;
