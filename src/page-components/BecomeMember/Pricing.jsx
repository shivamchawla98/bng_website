import React from 'react';
import { Check, Home, Rocket, Globe } from 'lucide-react';

const PricingCard = ({ tier, features, price, icon: Icon, isPopular }) => (
  <div className="bg-white rounded-2xl p-8 shadow-xl relative flex flex-col h-full transform transition-transform hover:scale-105">
    <div className="w-16 h-16 mb-6 text-primary">
      <Icon size={48} />
    </div>
    
    <h3 className="text-xl font-bold mb-2 text-primary">{tier}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold text-gray-900">${price}</span>
      <span className="text-gray-500 ml-2">/month</span>
    </div>
    
    <div className="space-y-4 flex-grow">
      {features.basic.map((feature) => (
        <div key={feature} className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
          <span className="text-gray-600 text-sm">{feature}</span>
        </div>
      ))}

      <div className="flex items-start">
        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-600 text-sm">UNLIMITED TEAM MEMBER</p>
          <p className="text-gray-500 text-xs">(Same Country / Same Company)</p>
          <p className="text-gray-800 font-medium text-sm">{features.team}</p>
        </div>
      </div>

      <div className="flex items-start">
        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-600 text-sm">BUSINESS LEAD CENTER</p>
          <p className="text-gray-500 text-xs italic">
            (A ROBUST SYSTEM WITH FREIGHT ENQUIRIES)
          </p>
          <p className="text-gray-800 font-medium text-sm">{features.business}</p>
        </div>
      </div>

      <div className="flex items-start">
        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-600 text-sm">FREIGHT VIEWER</p>
          <p className="text-gray-500 text-xs italic">
            (GROW YOUR VISIBILITY)
          </p>
          <p className="text-gray-800 font-medium text-sm">{features.freight}</p>
        </div>
      </div>

      {features.additionalFeatures && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          {features.additionalFeatures.map((feature) => (
            <div key={feature} className="flex items-center mb-4">
              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>

    <button className={`mt-8 w-full py-3 px-4 rounded-xl font-medium transition-colors
      ${isPopular 
        ? 'bg-primary text-white hover:bg-black' 
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
      Contact Us
    </button>
  </div>
);

const PricingTable = () => {
  const tiers = [
    {
      tier: 'STANDARD',
      price: '199',
      icon: Home,
      features: {
        basic: [
          'UNLIMITED SEARCHES FOR FELLOW MEMBERS',
          'REAL TIME CHAT TOOL',
          'DEDICATED MEMBERSHIP PROFILE',
        ],
        team: '1 USERS PER COMPANY',
        business: '(POST 1 ENQUIRY MONTHLY) (BID FOR 1 ENQUIRY MONTHLY)',
        freight: '(POST 1 PROMOTIONAL)',
      },
    },
    {
      tier: 'PREMIUM',
      price: '499',
      icon: Rocket,
      isPopular: true,
      features: {
        basic: [
          'UNLIMITED SEARCHES FOR FELLOW MEMBERS',
          'REAL TIME CHAT TOOL',
          'DEDICATED MEMBERSHIP PROFILE',
        ],
        team: '5 USERS PER COMPANY',
        business: '(POST 5 ENQUIRY MONTHLY) (BID FOR 5 ENQUIRY MONTHLY)',
        freight: '(POST 5 PROMOTIONAL)',
      },
    },
    {
      tier: 'ELITE',
      price: '1999',
      icon: Globe,
      features: {
        basic: [
          'UNLIMITED SEARCHES FOR FELLOW MEMBERS',
          'REAL TIME CHAT TOOL',
          'DEDICATED MEMBERSHIP PROFILE',
        ],
        team: 'UNLIMITED',
        business: 'UNLIMITED',
        freight: 'UNLIMITED',
        additionalFeatures: [
          'BE ON TOP IN SEARCH RESULTS',
          'UNLIMITED BRANCH OFFICES (Same Country / Same Company)',
          'PAYMENT / FINANCIAL PROTECTION FRAMEWORK',
          'PR AND MARKETING',
          'LIMITED MEMBERSHIP PER CITY/COUNTRY',
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-purple-600 py-20 rounded-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Get started with Global Freight
          </h1>
          <p className="text-purple-100">
            No credit card required. Get Started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <PricingCard key={tier.tier} {...tier} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;