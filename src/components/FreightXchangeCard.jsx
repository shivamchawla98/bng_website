import React from 'react';
import { FlagIcon } from 'react-flag-kit';
import { FaShip, FaAnchor } from 'react-icons/fa';

function FreightXchangeCard({ data, isCurrent }) {
  const { originCountry, originPort, destinationCountry, destinationPort, type, packaging, commodity, containerSize, duration, status } = data;

  const countryCodes = {
    India: 'IN',
    France: 'FR',
    USA: 'US',
    Germany: 'DE',
    China: 'CN',
    Australia: 'AU',
    Brazil: 'BR',
    UK: 'GB',
    Japan: 'JP',
    Canada: 'CA',
    UAE: 'AE',
    // Add more mappings as needed
  };

  return (
    <div className={`bg-white shadow-md rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-600 relative ${!isCurrent ? 'filter blur-sm' : ''}`}>
      <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full">
        <div className="flex items-center">
          <FlagIcon code={countryCodes[originCountry]} size={24} className="mr-2" />
          <div>
            <p className="text-base sm:text-lg font-bold">{originCountry}</p>
            <p className="text-sm sm:text-base">{originPort}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaShip className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mx-2" />
        </div>
        <div className="flex items-center">
          <FlagIcon code={countryCodes[destinationCountry]} size={24} className="mr-2" />
          <div>
            <p className="text-base sm:text-lg font-bold">{destinationCountry}</p>
            <p className="text-sm sm:text-base">{destinationPort}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaAnchor className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mr-2" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-3 sm:mt-0 sm:ml-4">
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm">{containerSize}</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm">{duration}</span>
        <span className={`px-2 py-1 rounded-full text-xs sm:text-sm ${status === 'active' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>{status}</span>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto">
        <button className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-4 sm:px-6 py-2 sm:py-3 cursor-pointer flex items-center hover:bg-primary hover:from-transparent transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-base">
          Explore
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-4 w-full sm:w-24">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div className={`bg-blue-500 h-2 rounded-full ${status === 'active' ? 'w-3/4' : 'w-1/2'}`}></div>
        </div>
      </div>
    </div>
  );
}

export default FreightXchangeCard;