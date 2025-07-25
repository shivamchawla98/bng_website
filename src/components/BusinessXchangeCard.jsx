import React from 'react';
import { FlagIcon } from 'react-flag-kit';
import { FaShip } from 'react-icons/fa';

function BusinessXchangeCard({ data, isCurrent }) {
  const { originCountry, originPort, destinationCountry, destinationPort, type, packaging, commodity } = data;

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
    <div className={`bg-white shadow-md rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-600 `}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full">
        <div className="flex items-center">
          <FlagIcon code={countryCodes[originCountry]} size={24} className="mr-2 sm:mr-2" />
          <div>
            <p className="text-base sm:text-lg font-bold">{originCountry}</p>
            <p className="text-sm sm:text-base">{originPort}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaShip className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mx-2" />
        </div>
        <div className="flex items-center">
          <FlagIcon code={countryCodes[destinationCountry]} size={24} className="mr-2 sm:mr-2" />
          <div>
            <p className="text-base sm:text-lg font-bold">{destinationCountry}</p>
            <p className="text-sm sm:text-base">{destinationPort}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-left mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto">
        <p className="text-sm sm:text-base">Type: {type}</p>
        <p className="text-sm sm:text-base">Packaging: {packaging}</p>
        <p className="text-sm sm:text-base">Commodity: {commodity}</p>
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
    </div>
  );
}

export default BusinessXchangeCard;