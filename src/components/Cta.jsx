'use client';
import React from 'react'
import { ModalMembershipForm } from '@/page-components/home/ModalForm';
import { useState } from 'react';
import ConferenceImage from '../../public/request_01.jpg';

function Cta() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
<div 
  className="text-white py-16 relative"
  style={{
    backgroundImage: `url(${ConferenceImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}
>
      {/* Tint Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(104, 83, 219, 0.80)',
          zIndex: 1,
        }}
      >
      </div>
  
  <ModalMembershipForm 
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
  />
  <div className="container text-gray-200 mx-auto text-center relative z-10">
    <h2 className="text-3xl md:text-[60px] text-center text-gray-200 font-bold">
      Request a <span className="text-[#ffe401]">Consultation</span>
    </h2>
    <p className="mt-8 text-lg md:text-3xl">
      See How BNG Can Work for You  
    </p>
  
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-white/10 text-white mx-auto mt-6 border-[3px] px-8 py-4 flex items-center  border-white/60 rounded-lg hover:bg-white/60 transition-all duration-300 group transform hover:translate-x-2">
      Request a Demo
    </button>
  </div>
</div>
  )
}

export default Cta