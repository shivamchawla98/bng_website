'use client';
import Link from 'next/link';
import React from 'react';
import { ModalMembershipForm } from '@/page-components/home/ModalForm';
import { useState } from 'react';

const ExistingMemberRibbon = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full bg-indigo-100 py-4 px-4 md:px-8">
       <ModalMembershipForm 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0 w-4/5">
          <h3 className="text-indigo-800 font-semibold text-lg mb-1">Exclusive Membership Opportunity – Limited Time Only!</h3>
          <p className="text-indigo-600 text-sm">We are currently accepting invite-only members for the next 30 days! Secure your 1-year free membership trial by filling out the application form to receive your exclusive invitation code.</p>
        </div>
        <button

onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 w-52 text-white font-medium py-2 px-6 rounded-md transition duration-300"
        
        >
          Get Invitation Code
        </button>
      </div>
    </div>
  );
};

export default ExistingMemberRibbon;