"use client";

import React from 'react';
import icon1 from '@/app/images/icon1.svg';
import fb from '@/app/images/fb.svg';
import linkedin from '@/app/images/linkedin.svg';
import utube from '@/app/images/utube.svg';
import shield from '../../../public/multilayervalidation/Strict_Selection.svg';
import reference from '../../../public/multilayervalidation/Reference Checks.svg';
import finance from '../../../public/multilayervalidation/Financial Checks.svg';
import approval from '../../../public/multilayervalidation/Approval & Conclusion.svg';

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
    <div className="w-full  mx-auto px-12 py-12  bg-secondryBg">
      {/* Header */}
      <div className="relative text-center mb-16">
        <h2 className="text-[55px] font-bold  text-[#27293B] text-center mb-2 relative z-10">Multilayer <span className="text-primary">Validation </span></h2>
        <h2
            className="absolute text-center top-[-30px] md:left-[30%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true">
            Multilayer Validation
          </h2>
      
      </div>

      {/* Steps Grid with Intertwined Flow */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Intertwined Curvy Flow (visible only on lg screens) */}
        {/* <svg className="absolute hidden lg:block w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 C200,150 400,50 600,80 C800,110 1000,10 1200,80" stroke="#D186EB" strokeWidth="4" fill="none" opacity="0.3" />
        </svg> */}

        {steps.map((step, index) => (
          <div key={step.number} className="relative flex flex-col items-center text-center mx-4 transition-transform transform hover:scale-105 duration-300">
            {/* Icon for Step */}
            <div 
       style={{ backgroundImage: 'linear-gradient(150deg,  #5316aa , #7159fb)' }}
            className="w-32 h-32 flex items-center justify-center mb-6 relative z-10  rounded-full shadow-lg">
              <img src={step.icon.src} alt={step.title} className="w-20 h-20 opacity-80" />
            </div>
            
            {/* Transparent Step Title */}
            <div className="bg-white bg-opacity-30 w-full py-4 px-2 rounded-lg">
              <h4 className="text-xl font-semibold text-primary mb-2">{step.title}</h4>
            </div>
            
            {/* Description Card */}
            <div className="bg-gradient-to-r from-white to-gray-100 shadow-lg min-h-[200px] rounded-lg p-6 w-full transition-opacity duration-300 hover:opacity-90">
              <p className="text-gray-600 text-[18px] leading-relaxed">
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