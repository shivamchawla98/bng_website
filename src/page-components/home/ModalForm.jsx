'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Home, Rocket, Globe } from 'lucide-react';

const ModalMembershipForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    companyEmail: '',
    mobileNumber: '',
    membershipTier: 'tier-basic' // Default selection
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);
  
  // Focus trap for accessibility
  const firstFocusableElement = useRef(null);
  const lastFocusableElement = useRef(null);
  
  useEffect(() => {
    // Close modal with escape key
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    // Click outside to close
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target) && isOpen) {
        onClose();
      }
    };
    
    // Set focus to first input when modal opens
    if (isOpen && firstFocusableElement.current) {
      setTimeout(() => {
        firstFocusableElement.current.focus();
      }, 50);
    }
    
    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response =    await fetch("https://script.google.com/macros/s/AKfycbyqOQQK11PLo4CUPnBsx05QKEHP4l30dwLWnZ_Mstp-3Eg711RUDKT0Izw19xMNfEzCtQ/exec", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        mode: 'no-cors'
      });
  
      const result = await response.json();
      if (result.status === 'success') {
        setSubmitted(true);
      } else {
        console.error("Error:", result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  
  
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      companyEmail: '',
      mobileNumber: '',
      membershipTier: 'tier-basic'
    });
    setSubmitted(false);
  };
  
  // To handle tab key navigation for accessibility
  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstFocusableElement.current) {
        e.preventDefault();
        lastFocusableElement.current.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusableElement.current) {
        e.preventDefault();
        firstFocusableElement.current.focus();
      }
    }
  };
  
  const tiers = [
    {
      name: 'Basic',
      id: 'tier-basic',
      priceMonthly: '$199',
      mostPopular: false,
      icon: Home,
      color: 'bg-blue-500',
      description: 'Essential global shipping membership with basic features'
    },
    {
      name: 'Premium',
      id: 'tier-premium',
      priceMonthly: '$499',
      mostPopular: true,
      icon: Rocket,
      color: 'bg-purple-600',
      description: 'Enhanced benefits with more access and better business tools'
    },
    {
      name: 'ELITE',
      id: 'tier-elite',
      priceMonthly: '$1999',
      mostPopular: false,
      icon: Globe,
      color: 'bg-indigo-800',
      description: 'Unlimited access with premium features and maximum visibility'
    }
  ];
  
  const sections = [
    {
      name: 'Basic Features',
      features: [
        { name: 'UNLIMITED SEARCHES FOR FELLOW MEMBERS', tiers: { Basic: true, Premium: true, ELITE: true } },
        { name: 'REALTIME CHAT', tiers: { Basic: true, Premium: true, ELITE: true } },
        { name: 'DEDICATED MEMBERSHIP PROFILE', tiers: { Basic: true, Premium: true, ELITE: true } },
        { name: 'CERTIFICATE OF MEMBERSHIP', tiers: { Basic: true, Premium: true, ELITE: true } },
        { name: 'MEMBERSHIP BADGE', tiers: { Basic: true, Premium: true, ELITE: true } },
      ],
    },
    {
      name: 'Team & Management',
      features: [
        { name: 'TEAM MEMBERS / USERS (Same Country / Same Company)', tiers: { Basic: '2 USERS', Premium: '6 USERS', ELITE: 'UNLIMITED' } },
        { name: 'BRANCH OFFICES (Same Country / Same Company)', tiers: { Basic: 'H1Q + 1 BRANCH', Premium: 'H1Q + 2 BRANCH', ELITE: 'UNLIMITED' } },
      ],
    },
    {
      name: 'Business Tools',
      features: [
        { name: 'BUSINESS XCHANGE (Enquiries)', tiers: { Basic: '1 ENQUIRY', Premium: '2 ENQUIRIES', ELITE: 'UNLIMITED' } },
        { name: 'FREIGHT VIEWER (Promotional Posts)', tiers: { Basic: '1 POST', Premium: '5 POSTS', ELITE: 'UNLIMITED' } },
        { name: 'PR AND MARKETING', tiers: { Basic: '1 POST PER MONTH', Premium: '4 POSTS PER MONTH', ELITE: '16 POSTS PER MONTH' } },
        { name: 'BE ON TOP SEARCH RESULTS', tiers: { Basic: false, Premium: false, ELITE: true } },
      ],
    }
  ];
  
  // Function to get features for a specific tier
  const getKeyFeaturesForTier = (tierName) => {
    const features = [];
    sections.forEach(section => {
      section.features.forEach(feature => {
        const value = feature.tiers[tierName];
        if (value === true) {
          features.push(feature.name);
        } else if (value !== false && value !== undefined) {
          features.push(`${feature.name}: ${value}`);
        }
      });
    });
    return features.slice(0, 5); // Return only top 5 features for display
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={handleTabKey}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fadeIn"
      >
        <div className="sticky top-0 bg-white px-6 py-4 border-b flex justify-between items-center z-10">
          <h2 id="modal-title" className="text-2xl font-bold text-indigo-800">Become a BNG Member</h2>
          <button 
            onClick={onClose} 
            ref={lastFocusableElement}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="px-6 py-5">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
              <p className="text-gray-600 mb-2">Thank you for your interest in BNG membership.</p>
              <p className="text-gray-600 mb-6">
                You've selected the <span className="font-semibold">
                  {tiers.find(tier => tier.id === formData.membershipTier)?.name}
                </span> tier. Our team will review your application and contact you shortly.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                  onClick={() => resetForm()}
                >
                  Submit Another Application
                </button>
                <button 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6 text-center">Fill out the form below to apply for BNG membership and unlock exclusive global freight benefits.</p>
              
              <form onSubmit={handleSubmit}>
                {/* Membership Tier Selection */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-3">Select Membership Tier *</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tiers.map((tier) => {
                      // Get icon component for the tier
                      const IconComponent = tier.icon;
                      return (
                        <div key={tier.id} className="relative">
                          <input
                            type="radio"
                            id={tier.id}
                            name="membershipTier"
                            value={tier.id}
                            checked={formData.membershipTier === tier.id}
                            onChange={handleChange}
                            className="peer sr-only"
                            required
                          />
                          <label
                            htmlFor={tier.id}
                            className={`block h-full border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md peer-checked:border-indigo-500 peer-checked:ring-2 peer-checked:ring-indigo-500 peer-checked:ring-opacity-50 ${tier.mostPopular ? 'border-indigo-300 bg-indigo-50' : ''}`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className={`${tier.color} text-white font-semibold py-1 px-3 rounded-full text-sm inline-block`}>
                                {tier.name}
                              </div>
                              {tier.mostPopular && (
                                <span className="bg-yellow-400 text-yellow-800 text-xs px-2 py-1 rounded-full">Popular</span>
                              )}
                            </div>
                            <div className="flex items-center mb-2">
                              <IconComponent className="h-5 w-5 mr-2 text-indigo-600" />
                              <p className="font-bold text-gray-900">{tier.priceMonthly}</p>
                              <span className="text-gray-500 text-sm ml-1">/month</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{tier.description}</p>
                            <ul className="text-xs text-gray-500 space-y-1">
                              {getKeyFeaturesForTier(tier.name).map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <svg className="h-3.5 w-3.5 text-green-500 mr-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </label>
                          <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 transition-opacity">
                            <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1.5">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                      placeholder="Enter your first name"
                      ref={firstFocusableElement}
                      aria-required="true"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1.5">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                      placeholder="Enter your last name"
                      aria-required="true"
                    />
                  </div>
                </div>
                
                <div className="mb-5">
                  <label htmlFor="companyName" className="block text-gray-700 font-medium mb-1.5">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    placeholder="Enter your company name"
                    aria-required="true"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="companyEmail" className="block text-gray-700 font-medium mb-1.5">Company Email *</label>
                  <input
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    placeholder="Enter your work email address"
                    aria-required="true"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="mobileNumber" className="block text-gray-700 font-medium mb-1.5">Mobile Number *</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    placeholder="Enter your mobile number"
                    aria-required="true"
                  />
                </div>
                
                <div className="flex gap-3 mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-5 rounded-lg transition duration-300 flex-grow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={onClose}
                    className="border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium py-2.5 px-5 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
                
                <p className="text-gray-500 text-xs mt-4 text-center">
                  By submitting this form, you agree to BNG's terms and privacy policy.
                  Your information will be used to process your membership application.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { ModalMembershipForm };