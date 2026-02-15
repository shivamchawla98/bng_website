'use client';
import React from 'react';
import { ModalMembershipForm } from '@/page-components/home/ModalForm';
import { useState } from 'react';
import ConferenceImage from '../../public/request_01.jpg';
import { Mail } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

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
          backgroundColor: 'rgba(104, 83, 219, 0.90)',
          zIndex: 1,
        }}
      />

      <ModalMembershipForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Parent container with equal padding top and bottom */}
      <div className="container text-gray-200 mx-auto text-center relative z-10 pb-12">
        <h2 className="text-3xl md:text-[60px] text-center text-gray-200 font-bold">
          Talk to a <span className="text-[#ffe401]">Membership Specialist</span>
        </h2>
        <p className="mt-8 text-lg md:text-3xl">
          Secure Your <span className='font-bold'>Country Position</span> Before It’s Taken
        </p>

        <a
          href='https://calendly.com/membership-bngisticsnetwork'
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 text-white border-[3px] w-60 mx-auto mt-4 px-4 justify-center py-4 flex items-center border-white/60 hover:border-white rounded-lg hover:bg-[#5216ab] transition-all duration-300 group transform hover:translate-x-2"
        >
          Schedule a Meeting
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>

        {/* Mail and WhatsApp Container */}
        <div className="sm:absolute sm:left-0 sm:right-0 sm:bottom-0 flex justify-center mt-8 sm:mt-0">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Email Link */}
            <a
              href="mailto:membership@bnglogisticsnetwork.com"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <Mail size={24} />
              <span className='text-lg'>membership@bnglogisticsnetwork.com</span>
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/+917240774077"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <FaWhatsapp size={24} />
              <span className='text-lg'>+91 72 4077 4077</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
