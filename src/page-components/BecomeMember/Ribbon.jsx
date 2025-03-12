'use client';
import React from 'react';

const ExistingMemberRibbon = () => {
  return (
    <div className="w-full bg-indigo-100 py-4 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-indigo-800 font-semibold text-lg mb-1">Already a BNG member?</h3>
          <p className="text-indigo-600 text-sm">Access your exclusive benefits and global freight services by logging into your account.</p>
        </div>
        <button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
          onClick={() => console.log('Member login clicked')}
        >
          Member Login
        </button>
      </div>
    </div>
  );
};

export default ExistingMemberRibbon;