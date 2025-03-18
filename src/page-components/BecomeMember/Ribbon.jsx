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
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-indigo-800 font-semibold text-lg mb-1">Already a BNG member?</h3>
          <p className="text-indigo-600 text-sm">Access your exclusive benefits and global freight services by logging into your account.</p>
        </div>
        <button

onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
        
        >
          Member Login
        </button>
      </div>
    </div>
  );
};

export default ExistingMemberRibbon;