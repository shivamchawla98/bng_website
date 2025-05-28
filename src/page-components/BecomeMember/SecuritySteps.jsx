"use client";

import React from 'react';
import shield from '../../../public/multilayervalidation/Strict_Selection.png';
import reference from '../../../public/multilayervalidation/Reference-Checks.png';
import finance from '../../../public/multilayervalidation/Financial-Checks.png';
import approval from '../../../public/multilayervalidation/Approval-&-Conclusion.png';

const SecuritySteps = () => {
  const steps = [
    {
      number: '01',
      title: 'Strict Selection',
      description: 'Thorough examination of every application by specialists. Registered organization is live with us implies it has gone through with severe determination process',
      icon: shield
    },
    {
      number: '02',
      title: 'Reference Checks',
      description: 'We connect with confided in contacts for bits of knowledge on your organization before go live with your profile.',
      icon: reference
    },
    {
      number: '03',
      title: 'Financial Checks',
      description: "A strong trust scan of each members profile to ensure it's risk free and good fit. Each approved members profile audited with D-U-N-S as well.",
      icon: finance
    },
    {
      number: '04',
      title: 'Approval & Conclusion',
      description: 'A final report for decision making of your application approval to onboard you to the new year of business networking.',
      icon: approval
    }
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-12 lg:py-16 bg-secondryBg">
      {/* Header */}
      <div className="relative text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-4xl lg:text-[55px] font-bold text-[#27293B] mb-2 relative z-10">
          Multilayer <span className="text-primary">Validation</span>
        </h2>
        <h2
          className="absolute top-[-28px] sm:top-[-25px] lg:top-[-59px] left-0 w-full text-center text-[40px] lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
          aria-hidden="true"
        >
          Multilayer Validation
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
     

        {steps.map((step, index) => (
          <div
            key={step.number}
            className="relative flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 p-4"
          >
            {/* Icon for Step */}
            <div className="w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 flex items-center justify-center mb-4 sm:mb-6 relative z-10">
              <img src={step.icon.src} alt={step.title} className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 opacity-80" />
            </div>

            {/* Transparent Step Title */}
            <div className="bg-white bg-opacity-30 w-full py-3 sm:py-4 px-2 rounded-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2">{step.title}</h4>
            </div>

            {/* Description Card */}
            <div className="bg-gradient-to-r from-white h-40 to-gray-100 shadow-lg rounded-lg p-4 sm:p-6 w-full transition-opacity duration-300 hover:opacity-90">
              <p className="text-gray-600 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySteps;