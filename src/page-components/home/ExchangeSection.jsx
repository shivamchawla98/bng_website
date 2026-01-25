'use client';

import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { ArrowRight, Plane, Ship, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import getCountryCode from '../../../utils/getCountryCode';

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
  const [activeTab, setActiveTab] = useState('business');

  const { data: businessData, loading: businessLoading } = useQuery(GET_BUSINESS_LEADS, {
    variables: {
      filters: {
        statuses: ['OPEN'],
      },
    },
  });

  const { data: freightData, loading: freightLoading } = useQuery(GET_FREIGHT_LEADS, {
    variables: {},
  });

  const businessLeads = (businessData?.apiBusinessLeads || []).slice(0, 3);
  const freightLeads = (freightData?.apiFreightLeads || []).slice(0, 3);

  const getTransportIcon = (method) => {
    if (method?.includes('AIR')) return <Plane className="h-5 w-5" />;
    if (method?.includes('SEA')) return <Ship className="h-5 w-5" />;
    return <Package className="h-5 w-5" />;
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Global <span className="text-primary">Exchange</span> Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time freight rates and business opportunities from our verified network
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveTab('business')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'business'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Business Exchange
            </button>
            <button
              onClick={() => setActiveTab('freight')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'freight'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Freight Exchange
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
          {activeTab === 'business' ? (
            <div className="space-y-4">
              {businessLoading ? (
                <div className="flex justify-center py-12">
                  <div className="w-8 h-8 border-4 border-t-indigo-500 border-gray-200 rounded-full animate-spin"></div>
                </div>
              ) : businessLeads.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No business opportunities available
                </div>
              ) : (
                businessLeads.map((lead) => (
                  <motion.div
                    key={lead.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center gap-2 text-indigo-600">
                          {getTransportIcon(lead.transportationMethod)}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <img
                            src={`https://flagcdn.com/w20/${getCountryCode(lead.loadingPort?.country)}.png`}
                            alt="origin"
                            className="w-5 h-5 rounded-sm"
                          />
                          <span>{lead.loadingPort?.unlocode || 'N/A'}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                          <span>{lead.destinationPort?.unlocode || 'N/A'}</span>
                          <img
                            src={`https://flagcdn.com/w20/${getCountryCode(lead.destinationPort?.country)}.png`}
                            alt="destination"
                            className="w-5 h-5 rounded-sm"
                          />
                        </div>
                        <span className="text-sm text-gray-600">
                          {lead.commodity || 'General Cargo'}
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
                  </motion.div>
                ))
              )}
              <div className="text-center mt-6">
                <a
                  href="/business-xchange"
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  View All Business Opportunities
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {freightLoading ? (
                <div className="flex justify-center py-12">
                  <div className="w-8 h-8 border-4 border-t-indigo-500 border-gray-200 rounded-full animate-spin"></div>
                </div>
              ) : freightLeads.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No freight rates available
                </div>
              ) : (
                freightLeads.map((lead) => (
                  <motion.div
                    key={lead.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center gap-2 text-indigo-600">
                          {getTransportIcon(lead.transportationMethod)}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <img
                            src={`https://flagcdn.com/w20/${getCountryCode(lead.loadingPort?.country)}.png`}
                            alt="origin"
                            className="w-5 h-5 rounded-sm"
                          />
                          <span>{lead.loadingPort?.unlocode || 'N/A'}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                          <span>{lead.destinationPort?.unlocode || 'N/A'}</span>
                          <img
                            src={`https://flagcdn.com/w20/${getCountryCode(lead.destinationPort?.country)}.png`}
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
                  </motion.div>
                ))
              )}
              <div className="text-center mt-6">
                <a
                  href="/freight-xchange"
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  View All Freight Rates
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExchangeSection;
