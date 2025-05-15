'use client';
import React from 'react'
import { ModalMembershipForm } from '@/page-components/home/ModalForm';
import { useState } from 'react';
import ConferenceImage from '@/app/images/request1.png';

function Cta() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
<div 
  className="text-white py-16"
  style={{
    backgroundImage: `url(${ConferenceImage.src})`,
    backgroundSize: 'fill',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}
>
  {/* Purple Gradient Tint Overlay for Readability */}
  <div className=""></div>
  
  <ModalMembershipForm 
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
  />
  <div className="container text-gray-200 mx-auto text-center relative z-10">
    <h2 className="text-3xl md:text-[60px] text-gray-200  font-bold">
      Request a <span className="text-[#ffe401]">Consultation</span>
    </h2>
    <p className="mt-8 text-lg md:text-3xl">
      See How BNG Can Work for You
    </p>
    <button
      onClick={() => setIsModalOpen(true)}
      className="mt-8 px-6 py-3 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-[#072a47] transition-all duration-300">
      Request a Demo
    </button>
  </div>
</div>
  )
}

export default Cta 