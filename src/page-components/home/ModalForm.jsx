'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Star, StarsIcon, Crown } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import default styles for react-phone-input-2

const ModalMembershipForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    companyEmail: '',
    mobileNumber: '',
    membershipTier: 'tier-premium' // Default selection
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
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
  
  // Special handler for phone input
  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      mobileNumber: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch(`/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          membershipTier: formData.membershipTier.replace('tier-', '')
        })
      });
  
      const result = await response.json();
      
      console.log("Success:", result);
      setSubmitted(true);
    } catch (error) {
      setError('Network error: Could not connect to the server');
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
      membershipTier: 'tier-premium'
    });
    setSubmitted(false);
    setError(null);
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
      name: 'Standard',
      id: 'tier-standard',
      priceMonthly: '$199',
      mostPopular: false,
      icon: Star,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      borderColor: 'border-green-300',
      bgColor: 'bg-green-50',
      description: 'Essential global shipping membership with basic features'
    },
    {
      name: 'Premium',
      id: 'tier-premium',
      priceMonthly: '$699',
      mostPopular: false,
      icon: StarsIcon,
      color: 'bg-indigo-600',
      textColor: 'text-indigo-600',
      borderColor: 'border-indigo-300',
      bgColor: 'bg-indigo-50',
      description: 'Enhanced benefits with more access and better business tools'
    },
    {
      name: 'ELITE',
      id: 'tier-elite',
      priceMonthly: '$1999',
      mostPopular: false,
      icon: Crown,
      color: 'bg-red-800',
      textColor: 'text-red-800',
      borderColor: 'border-red-300',
      bgColor: 'bg-red-50',
      description: 'Unlimited access with premium features and maximum visibility'
    }
  ];
  
  const sections = [
    {
      name: 'Basic Features',
      features: [
        { name: 'UNLIMITED SEARCHES FOR FELLOW MEMBERS', tiers: { Standard: true, Premium: true, ELITE: true } },
        { name: 'REALTIME CHAT', tiers: { Standard: true, Premium: true, ELITE: true } },
        { name: 'DEDICATED MEMBERSHIP PROFILE', tiers: { Standard: true, Premium: true, ELITE: true } },
        { name: 'CERTIFICATE OF MEMBERSHIP', tiers: { Standard: true, Premium: true, ELITE: true } },
        { name: 'MEMBERSHIP BADGE', tiers: { Standard: true, Premium: true, ELITE: true } },
      ],
    },
    {
      name: 'Team & Management',
      features: [
        { name: 'TEAM MEMBERS / USERS (Same Country / Same Company)', tiers: { Standard: '2 USERS', Premium: '6 USERS', ELITE: 'UNLIMITED' } },
        { name: 'BRANCH OFFICES (Same Country / Same Company)', tiers: { Standard: 'H1Q + 1 BRANCH', Premium: 'H1Q + 2 BRANCH', ELITE: 'UNLIMITED' } },
      ],
    },
    {
      name: 'Business Tools',
      features: [
        { name: 'BUSINESS XCHANGE (Enquiries)', tiers: { Standard: '1 ENQUIRY', Premium: '2 ENQUIRIES', ELITE: 'UNLIMITED' } },
        { name: 'FREIGHT VIEWER (Promotional Posts)', tiers: { Standard: '1 POST', Premium: '5 POSTS', ELITE: 'UNLIMITED' } },
        { name: 'PR AND MARKETING', tiers: { Standard: '1 POST PER MONTH', Premium: '4 POSTS PER MONTH', ELITE: '16 POSTS PER MONTH' } },
        { name: 'BE ON TOP SEARCH RESULTS', tiers: { Standard: false, Premium: false, ELITE: true } },
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
    return features.slice(0, 5);
  };
  
  // Get color theme based on selected tier
  const getSelectedTierTheme = () => {
    const selectedTier = tiers.find(tier => tier.id === formData.membershipTier);
    if (!selectedTier) return { bg: 'bg-indigo-600', hover: 'hover:bg-indigo-700' };
    
    if (selectedTier.name === 'Standard') {
      return { bg: 'bg-green-600', hover: 'hover:bg-green-700' };
    } else if (selectedTier.name === 'Premium') {
      return { bg: 'bg-indigo-600', hover: 'hover:bg-indigo-700' };
    } else {
      return { bg: 'bg-red-800', hover: 'hover:bg-red-900' };
    }
  };
  
  if (!isOpen) return null;
  
  const selectedTheme = getSelectedTierTheme();
  
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
          <h2 id="modal-title" className="text-2xl font-bold text-gray-800">Become a BNG Member</h2>
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
              <div className={`${selectedTheme.bg} text-white rounded-full p-3 inline-block mb-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <p className="text-gray-600 mb-6">
                A confirmation email has been sent to your email address <span className="font-semibold">{formData.companyEmail}</span>.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button 
                  className={`${selectedTheme.bg} ${selectedTheme.hover} text-white font-medium py-2 px-6 rounded-md transition duration-300`}
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
              
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                  <strong className="font-bold">Error:</strong>
                  <span className="block sm:inline"> {error}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                {/* Membership Tier Selection */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-3">Select Membership Tier *</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tiers.map((tier) => {
                      const IconComponent = tier.icon;
                      const isSelected = formData.membershipTier === tier.id;
                      return (
                        <div key={tier.id} className="relative">
                          <input
                            type="radio"
                            id={tier.id}
                            name="membershipTier"
                            value={tier.id}
                            checked={isSelected}
                            onChange={handleChange}
                            className="peer sr-only"
                            required
                          />
                          <label
                            htmlFor={tier.id}
                            className={`block h-full border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md 
                            ${isSelected ? `border-${tier.color.split('-')[1]}-500 ring-2 ring-${tier.color.split('-')[1]}-500 ring-opacity-50` : ''}
                            ${tier.mostPopular ? `${tier.borderColor} ${tier.bgColor}` : 'border-gray-200'}`}
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
                              <IconComponent className={`h-5 w-5 mr-2 ${tier.textColor}`} />
                              <p className="font-bold text-gray-900">{tier.priceMonthly}</p>
                              <span className="text-gray-500 text-sm ml-1">/Year</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{tier.description}</p>
                            <ul className="text-xs text-gray-500 space-y-1">
                              {getKeyFeaturesForTier(tier.name).map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <svg className={`h-3.5 w-3.5 ${tier.textColor} mr-1.5 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </label>
                          <div className={`absolute top-2 right-2 opacity-0 peer-checked:opacity-100 transition-opacity ${tier.textColor}`}>
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <PhoneInput
                    country={'us'}
                    value={formData.mobileNumber}
                    onChange={handlePhoneChange}
                    inputProps={{
                      id: 'mobileNumber',
                      name: 'mobileNumber',
                      required: true,
                      'aria-required': 'true',
                    }}
                    containerClass="w-full"
                    inputClass="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-gray-900 placeholder-gray-400"
                    buttonClass="border border-gray-300 rounded-l-lg bg-white px-3 py-2.5"
                    dropdownClass="bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-y-auto"
                    searchClass="px-3 py-2 text-sm border-b border-gray-200 sticky top-0 bg-white"
                    enableSearch={true}
                    disableSearchIcon={false}
                    searchPlaceholder="Search country..."
                    autoFormat={true}
                    countryCodeEditable={false}
                    placeholder="Enter your mobile number"
                  />
                </div>
                
                <div className="flex gap-3 mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`${selectedTheme.bg} ${selectedTheme.hover} text-white font-bold py-2.5 px-5 rounded-lg transition duration-300 flex-grow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${selectedTheme.bg.split('-')[1]}-500 disabled:opacity-70`}
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