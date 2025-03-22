'use client'
import React from 'react';
import { useEffect } from 'react';

const InviteModal = ({ isOpen, onClose }) => {
  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  // If modal is not open, don't render anything
  if (!isOpen) return null;
  
  // Prevent click propagation from modal content to backdrop
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full transform transition-all"
        onClick={handleContentClick}
      >
        {/* Modal header */}
        <div className="bg-gradient-to-tr  from-[#6853DB] to-[#6853DB] rounded-t-lg p-4 text-white">
          <h3 className="text-xl font-medium">Membership Notice</h3>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-indigo-200 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal body */}
        <div className="p-6">
          <div className="mb-6 text-center">
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 bg-gradient-to-tr  from-[#6853DB] to-[#6853DB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Invite Only Membership</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Currently we are accepting invite only membership
            </p>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Please fill the invitation form above
            </p>
          </div>
          
          <div className="mt-6">
            <button
              onClick={onClose}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-tr  from-[#6853DB] to-[#6853DB] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              I understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteModal;