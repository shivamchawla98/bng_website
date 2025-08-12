import React from 'react';
import Head from 'next/head'; // Import Head from next/head
import FreightXchangeCard from '@/components/FreightXchangeCard';
import { FreightXchangeHero } from '@/page-components/FreightXchange/FreightXchangeHero';
import Image from 'next/image';
import newFreightImage from '@/app/images/home/Logistic1.png';

const freightXchangeData = [
  {
    originCountry: 'China',
    originPort: 'SHA/Shanghai',
    destinationCountry: 'Ukraine',
    destinationPort: 'ODS/Odesa',
    type: 'CIF',
    packaging: '3 x Container - 5.0kg',
    commodity: 'Electronics',
    containerSize: "20'ST",
    duration: '15 days',
    status: 'active',
  },
  {
    originCountry: 'Germany',
    originPort: 'HAM/Hamburg',
    destinationCountry: 'USA',
    destinationPort: 'NYC/New York',
    type: 'FOB',
    packaging: '4 x Pallet - 3.0kg',
    commodity: 'Automotive Parts',
    containerSize: "40'HC",
    duration: '30 days',
    status: 'expired',
  },
  {
    originCountry: 'Brazil',
    originPort: 'RIO/Rio de Janeiro',
    destinationCountry: 'UK',
    destinationPort: 'LHR/London',
    type: 'EXW',
    packaging: '6 x Box - 7.0kg',
    commodity: 'Coffee Beans',
    containerSize: "20'ST",
    duration: '20 days',
    status: 'active',
  },
  {
    originCountry: 'Japan',
    originPort: 'TYO/Tokyo',
    destinationCountry: 'Australia',
    destinationPort: 'SYD/Sydney',
    type: 'DAP',
    packaging: '2 x Barrel - 4.0kg',
    commodity: 'Machinery',
    containerSize: "40'HC",
    duration: '25 days',
    status: 'expired',
  }
];

export const metadata = {
  title: 'Freight Xchange | Share & Find Cargo Opportunities',
  description: 'Post and discover freight opportunities with verified logistics members on BNG’s Freight Xchange. Secure, efficient, and transparent cargo solutions.',
  // robots: 'noindex, nofollow', // Moved from <Head>
};

export default function FreightXchangePage() {
  return (
    <>
      {/* Add meta title and description */}
   

      <FreightXchangeHero />
      <div className="flex flex-col md:flex-row p-8">
        <div className="flex-1 p-6 bg-white shadow-lg rounded-lg mr-4">
          <h1 className="text-3xl font-bold mb-6 text-[#27293B]">Freight Xchange</h1>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {freightXchangeData.map((data, index) => (
              <FreightXchangeCard key={index} data={data} />
            ))}
          </div>
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
          </ul>
          <Image src={newFreightImage} alt="Freight Xchange" className="w-full flex justify-center items-center h-auto rounded-lg mt-12" />
          {/* <button className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-primary hover:from-transparent transition-all duration-300">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button> */}
        </div>
      </div>
    </>
  );
}