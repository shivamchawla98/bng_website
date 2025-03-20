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
    <div className={`bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between text-gray-600 ${!isCurrent ? 'filter blur-sm' : ''}`}>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <FlagIcon code={countryCodes[originCountry]} size={32} className="mr-2" />
          <div>
            <p className="text-lg font-bold">{originCountry}</p>
            <p>{originPort}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaShip className="text-blue-500 w-6 h-6 mx-2" />
        </div>
        <div className="flex items-center">
          <FlagIcon code={countryCodes[destinationCountry]} size={32} className="mr-2" />
          <div>
            <p className="text-lg font-bold">{destinationCountry}</p>
            <p>{destinationPort}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-left ml-8">
        <p>Type: {type}</p>
        <p>Packaging: {packaging}</p>
        <p>Commodity: {commodity}</p>
      </div>
      <div className="ml-8">
        <button className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-primary hover:from-transparent transition-all duration-300">
          Explore
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BusinessXchangeCard;