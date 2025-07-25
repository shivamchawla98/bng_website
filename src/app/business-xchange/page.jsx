'use client';

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { FaShip, FaPlane, FaBox, FaBoxes, FaPallet, FaCube, ArrowRightIcon, FaLuggageCart, GiCargoCrate, TfiPackage } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import { FlagIcon } from 'react-flag-kit';
import { motion } from 'framer-motion';
import getCountryCode from '../../../utils/getCountryCode';

// GraphQL Query for apiBusinessLeads
const GET_BUSINESS_LEADS = gql`
  query GetBusinessLeads($filters: BusinessLeadFilterInput) {
    apiBusinessLeads(filters: $filters) {
      id
      uniqueId
      commodity
      createdAt
      loadingPort {
        country
        name
        city
        countryCode
        unlocode
      }
      destinationPort {
        country
        name
        city
        countryCode
        unlocode
      }
      freightTerms
      packages {
        packagingType
        quantity
        lengthCm
        widthCm
        heightCm
      }
      shipmentWeight
      shipmentVolume
      transportationMethod
      company {
        companyName
        logo
      }
    }
  }
`;





const BusinessXchangeCard = ({ data }) => {
  const { loadingPort, destinationPort, freightTerms, packages, commodity, shipmentWeight, shipmentVolume, transportationMethod, company, uniqueId, createdAt } = data;

  // Determine container type and icon based on transportationMethod and shipmentVolume

  const getTransportDetails = (method) => {
    switch (method) {
      case 'LCL':
        return {
          label: 'SEA Freight (LCL)',
          icons: <TfiPackage className="h-6 w-6 text-white" />,
        };
      case 'FCL':
        return {
          label: 'SEA Freight (FCL)',
          icons: <GiCargoCrate className="h-6 w-6 text-white" />,
        };
      case 'STANDARD':
        return {
          label: 'Standard Shipping',
          icons: <FaLuggageCart className="h-6 w-6 text-white" />,
        };
      case 'ULD':
        return {
          label: 'Air Freight (ULD)',
          icons: <FaPlane className="h-6 w-6 text-white" />,
        };
      case 'BULK':
        return {
          label: 'Bulk Shipping',
          icons: <FaShip className="h-6 w-6 text-white" />,
        };
      default:
        return {
          label: 'Unknown Method',
          icons: <TfiPackage className="h-6 w-6 text-white" />,
        };
    }
  };
 

  const transportDetails = getTransportDetails(transportationMethod, shipmentVolume);
console.log("countrycode :: ",getCountryCode(destinationPort.country));

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl my-4 border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-6 bg-gradient-to-r from-indigo-500/80 to-indigo-400 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {transportDetails.icon}
            <div>
              <h4 className="text-lg font-bold">{transportDetails.label}</h4>
              <p className="text-sm text-white/80">ID: {uniqueId || 'N/A'}</p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">Open</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 mt-4">
        <img
              src={`https://flagcdn.com/w40/${getCountryCode(loadingPort.country)}.png`}
              alt={ 'Flag'}
              className={`w-8 h-8 rounded-full `}
              onLoad={() => setIsLoadingPortFlag(false)}
            />
          <span className="text-lg font-medium">{`${loadingPort.name || 'N/A'} - ${loadingPort.unlocode || 'N/A'}`}</span>
          {transportDetails.icon}
          <ArrowRight className="h-5 w-5 text-white" />
          <span className="text-lg font-medium">{`${destinationPort.name || 'N/A'} - ${destinationPort.unlocode || 'N/A'}`}</span>
          <img
              src={`https://flagcdn.com/w40/${getCountryCode(destinationPort.country)}.png`}
              alt={ 'Flag'}
              className={`w-8 h-8 rounded-full `}
              onLoad={() => setIsLoadingPortFlag(false)}
            />
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base text-gray-600">
          <div>
            <p><span className="font-semibold text-indigo-500">Commodity:</span> {commodity || 'N/A'}</p>
            <p><span className="font-semibold text-indigo-500">Weight:</span> {shipmentWeight || 0} kg</p>
          </div>
          <div>
            <p><span className="font-semibold text-indigo-500">Volume:</span> {shipmentVolume || 0} CBM</p>
            <p><span className="font-semibold text-indigo-500">Freight Terms:</span> {freightTerms || 'N/A'}</p>
          </div>
          <div>
            {packages?.length > 0 && packages.map((pkg, index) => (
              <div key={index} className="flex items-center gap-1 py-1">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium">
                  {pkg.packagingType}
                </span>
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                  {pkg.quantity}x
                </span>
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-mono">
                  {pkg.lengthCm}×{pkg.widthCm}×{pkg.heightCm}
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
                  {(pkg.lengthCm * pkg.widthCm * pkg.heightCm).toLocaleString()}cm³
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-base text-gray-600">
            Posted: <span className="font-normal text-indigo-500">{new Date(createdAt).toLocaleDateString() || 'N/A'}</span>
          </span>
          <div className="space-x-3">
            <motion.button
              className="px-5 py-2 text-base bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// BusinessXchangeHero Component
const BusinessXchangeHero = () => {
  return (
    <div
      className="relative h-[300px] md:h-[400px] bg-primary flex items-center justify-start pl-10"
      style={{
        backgroundImage: `url(/images/benifits/BusinessXchange_Header.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col">
        <h3 className="text-3xl sm:text-3xl md:text-5xl font-light mb-4 text-white relative z-10">
          Business Xchange
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white relative z-10">
          Exchange <span className="font-light">Real </span>Business.
        </h2>
      </div>
    </div>
  );
};

// Main Page Component
export default function BusinessXchangePage() {
  const { loading, error, data } = useQuery(GET_BUSINESS_LEADS, {
    variables: {
      filters: {
        statuses: ['OPEN'],
      },
    },
  });

  // Use mock data if API fails
  const leads = error ? mockData.apiBusinessLeads : data?.apiBusinessLeads || [];

  return (
    <>

      <BusinessXchangeHero />
      <div className="flex flex-col min-h-screen p-4 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex-1 p-4 sm:p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#27293B]">
              Business Xchange
            </h1>
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
              {loading && (<div className="flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-t-indigo-500 border-gray-200 rounded-full animate-spin"></div>
    </div>)}
              {error && <p>Error: {error.message}. Displaying mock data.</p>}
              {leads.slice(0, 3).map((lead) => (
  <BusinessXchangeCard key={lead.id} data={lead} />
))}
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4 sm:p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#27293B]">
              About Business Xchange
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Discover our comprehensive business exchange services designed to streamline your operations and enhance global connectivity.
            </p>
            <ul className="list-disc list-inside mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base">
              <li>Efficient logistics solutions</li>
              <li>Global reach and local expertise</li>
              <li>Customizable service packages</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}