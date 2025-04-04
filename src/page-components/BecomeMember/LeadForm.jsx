'use client';
import React, { useState } from 'react';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    companyEmail: '',
    mobileNumber: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
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
    
    // Here you would typically add your Google Sheets integration
    // For example using fetch to post to your API endpoint that handles the Google Sheets update
    try {
      // Updated to use the new API endpoint
      const response = await fetch(`/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          // Convert tier-basic to Basic, tier-premium to Premium, etc.
          membershipTier: formData.membershipTier.replace('tier-', '')
        })
      });
  
      const result = await response.json();
      
      if (response.ok) {
        console.log("Success:", result);
        
        setSubmitted(true);
      } else {
        setError(result.error || 'An error occurred while submitting the form');
        console.error("Error:", result.error);
      }
    } catch (error) {
      setError('Network error: Could not connect to the server');
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  
  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto my-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-green-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">Thank you for your interest in BNG membership. Our team will review your application and contact you shortly.</p>
         
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto my-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6 text-center">Become a BNG Member</h2>
        <p className="text-gray-600 mb-8 text-center">Fill out the form below to apply for BNG membership and unlock exclusive global freight benefits.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 text-gray-600 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your first name"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">Company Name *</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your company name"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="companyEmail" className="block text-gray-700 font-medium mb-2">Company Email *</label>
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your work email address"
            />
          </div>
          
          <div className="mb-8">
            <label htmlFor="mobileNumber" className="block text-gray-700 font-medium mb-2">Mobile Number *</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your mobile number"
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 w-full md:w-auto"
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
          </div>
          
          <p className="text-gray-500 text-xs mt-4 text-center">
            By submitting this form, you agree to BNG's terms and privacy policy.
            Your information will be used to process your membership application.
          </p>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;