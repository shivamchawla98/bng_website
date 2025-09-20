"use client";

import React, { useState, useMemo } from 'react';
import { useQuery, gql } from "@apollo/client";
import { motion, AnimatePresence } from "framer-motion";
import FreightCard from './components/Card'
import { FreightXchangeHero } from '@/page-components/FreightXchange/FreightXchangeHero';
import Image from 'next/image';
import newFreightImage from '@/app/images/home/Logistic1.png';

// Define the GraphQL query directly in the file
const GET_FREIGHT_LEADS = gql`
  query GetFreightLeads($filters: FreightLeadFilterInput) {
    apiFreightLeads(filters: $filters) {
      id
      uniqueId
      interests {
        company {
          id
        }
      }
      cargoType
      company {
        companyName
        id
        logo
        locations {
          country
          state
        }
      }
      carrierName
      containerType
      loadingPort {
        name
        city
        country
        countryCode
        unlocode
        iataCode
      }
      destinationPort {
        name
        city
        country
        countryCode
        unlocode
        iataCode
      }
      freightRate
      freightRateBasis
      freightRateCurrency
      routing
      transitTime
      creator {
        id
        imageurl
        firstName
        email
        phone
      }
      transitTimeUnit
      validityDate
      transportationMethod
      status
      remarks
      weightBreakpoint
      createdAt
    }
  }
`;

const metadata = {
  title: 'Freight Xchange | Share & Find Cargo Opportunities',
  description: `Post and discover freight opportunities with verified logistics members on BNG's Freight Xchange. Secure, efficient, and transparent cargo solutions.`,
};

export default function FreightXchangePage() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Execute GET_FREIGHT_LEADS query
  const { loading, error, data } = useQuery(GET_FREIGHT_LEADS, {
    variables: {},
  });

  // Extract freight leads from query response and limit to 15
  // FIX: Changed from data?.freightLeads to data?.apiFreightLeads
  const freightLeads = data?.apiFreightLeads || [];
  
  const limitedFreightLeads = useMemo(() => {
    return freightLeads
      .sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
      })
      .slice(0, 15);
  }, [freightLeads]);

  const handleCardClick = (id) => {
    const opportunity = limitedFreightLeads.find(lead => lead.id === id);
    if (opportunity) {
      setSelectedOpportunity(opportunity);
      // Add your view details logic here
      console.log('View details for:', opportunity);
    }
  };

  const handleExploreClick = (id) => {
    const opportunity = limitedFreightLeads.find(lead => lead.id === id);
    if (opportunity) {
      setSelectedOpportunity(opportunity);
      // Add your explore logic here
      console.log('Explore opportunity:', opportunity);
    }
  };

  return (
    <>
      <FreightXchangeHero />
      
      {/* Error Messages */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            Error fetching freight leads: {error.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row p-8">
        <div className="flex-1 p-6 bg-white shadow-lg rounded-lg mr-4">
          <h1 className="text-3xl font-bold mb-6 text-[#27293B]">Freight Xchange</h1>
          
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6853DB]"></div>
                <p className="text-gray-600 text-lg">Loading freight opportunities...</p>
              </div>
            </motion.div>
          ) : limitedFreightLeads.length === 0 ? (
            <motion.div
              key="no-opportunities"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="text-6xl">🚢</div>
                <p className="text-gray-600 text-lg">
                  No freight opportunities available at the moment.
                </p>
                <p className="text-gray-500 text-sm">
                  Check back later for new opportunities.
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{limitedFreightLeads.length}</span> of{' '}
                  <span className="font-semibold">{freightLeads.length}</span> freight opportunities
                </p>
                {freightLeads.length > 15 && (
                  <p className="text-sm text-gray-500">
                    Limited to first 15 results
                  </p>
                )}
              </div>
              
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {limitedFreightLeads.map((freightData, index) => (
                  <motion.div
                    key={freightData.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <FreightCard
                      freightData={freightData}
                      onCardClick={handleCardClick}
                      onExploreClick={handleExploreClick}
                      companyId=""
                      setIsOpen={setIsModalOpen}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
        
        <div className="w-full md:w-1/3 p-6 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] shadow-lg rounded-lg">
          <h2 className="text-[40px] font-bold mb-4 text-[#27293B]">About Freight Xchange</h2>
          <p className="text-gray-700 mb-6">
            Our Freight Xchange services are designed to optimize cargo movement and enhance global trade efficiency.
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Real-time tracking and updates</li>
            <li>Comprehensive logistics management</li>
            <li>Expert customs brokerage</li>
            <li>Global network of verified partners</li>
            <li>Competitive freight rates</li>
            <li>Secure transaction processing</li>
          </ul>
          
          {!loading && limitedFreightLeads.length > 0 && (
            <div className="bg-white bg-opacity-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-[#27293B] mb-2">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-center">
                  <div className="font-bold text-lg text-[#6853DB]">
                    {limitedFreightLeads.filter(lead => lead.status === 'ACTIVE').length}
                  </div>
                  <div className="text-gray-600">Active</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-orange-600">
                    {limitedFreightLeads.filter(lead => lead.transportationMethod === 'AIR_FREIGHT').length}
                  </div>
                  <div className="text-gray-600">Air Freight</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-blue-600">
                    {limitedFreightLeads.filter(lead => lead.transportationMethod.includes('SEA')).length}
                  </div>
                  <div className="text-gray-600">Sea Freight</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-green-600">
                    {new Set(limitedFreightLeads.map(lead => lead.company.id)).size}
                  </div>
                  <div className="text-gray-600">Companies</div>
                </div>
              </div>
            </div>
          )}
          
          <Image 
            src={newFreightImage} 
            alt="Freight Xchange" 
            className="w-full flex justify-center items-center h-auto rounded-lg mt-12" 
          />
        </div>
      </div>
    </>
  );
}
