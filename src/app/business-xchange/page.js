import React from 'react'
import { BusinessXchangeHero } from '@/page-components/BusinessXchange/BusinessXchangeHero';
import BusinessXchangeCard from '@/components/BusinessXchangeCard';
import Image from 'next/image';
import businessImage from '@/app/images/home/Logistic2.png';

const businessXchangeData = [
  {
    originCountry: 'India',
    originPort: 'INHAL/Haldia',
    destinationCountry: 'United Arab Emirates',
    destinationPort: 'AEJEA/Jebel Ali',
    type: 'FOB Port > Port',
    packaging: '2 x Box 1.0kg',
    commodity: 'General Cargo',
    companyName: 'One',
    logoSrc: '/to/logo1.png',
    price: 'USD 1,720',
    priceChange: '-10%'
  },
  {
    originCountry: 'Brazil',
    originPort: 'BRSSZ/Santos',
    destinationCountry: 'India',
    destinationPort: 'INIXY/Kandla',
    type: 'FOB Port > Port',
    packaging: '2 x Box 1.0kg',
    commodity: 'Racing Cars',
    companyName: 'CMA CGM',
    logoSrc: 'path/to/logo2.png',
    price: 'USD 1,820',
    priceChange: '+12%'
  },
  {
    originCountry: 'India',
    originPort: 'MAA/Chennai Intl',
    destinationCountry: 'France',
    destinationPort: 'MRS/Provence',
    type: 'FCA Port > Port',
    packaging: '2 x Box - 1.0kg',
    commodity: 'Racing Cars',
    companyName: 'Three',
    logoSrc: '/to/logo3.png',
    price: 'USD 1,920',
    priceChange: '+5%'
  },
  {
    originCountry: 'USA',
    originPort: 'NYC/New York',
    destinationCountry: 'Germany',
    destinationPort: 'HAM/Hamburg',
    type: 'CIF',
    packaging: '3 x Pallet - 2.5kg',
    commodity: 'Electronics',
    companyName: 'Four',
    logoSrc: '/to/logo4.png',
    price: 'USD 2,020',
    priceChange: '-8%'
  },
  {
    originCountry: 'China',
    originPort: 'SHA/Shanghai',
    destinationCountry: 'Australia',
    destinationPort: 'SYD/Sydney',
    type: 'FOB',
    packaging: '5 x Crate - 4.0kg',
    commodity: 'Furniture',
    companyName: 'Five',
    logoSrc: '/to/logo5.png',
    price: 'USD 2,120',
    priceChange: '+3%'
  }
];

export default function BusinessXchangePage() {
  return (
    <>
      <BusinessXchangeHero />
      <div className="flex flex-col md:flex-row p-8">
        <div className="flex-1 p-6 bg-white shadow-lg rounded-lg mr-4">
          <h1 className="text-3xl font-bold mb-6 text-[#27293B]">Business Xchange</h1>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {businessXchangeData.map((data, index) => (
              <BusinessXchangeCard key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#27293B]">About Business Xchange</h2>
          <p className="text-gray-600 mb-6">
            Discover our comprehensive business exchange services designed to streamline your operations and enhance global connectivity.
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-600">
            <li>Efficient logistics solutions</li>
            <li>Global reach and local expertise</li>
            <li>Customizable service packages</li>
          </ul>
          <Image src={businessImage} alt="Business Xchange" className="w-full h-auto rounded-lg mb-6" />
          <button className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-primary hover:from-transparent transition-all duration-300">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}