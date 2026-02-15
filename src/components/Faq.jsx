'use client'
import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "What makes BNG different from other freight networks?",
      answer:
        "BNG operates on strict country exclusivity, verified membership, and structured business exchange. We focus on quality over quantity, real opportunities over mass lead sharing, and long-term partnerships over internal competition.",
    },
    {
      question: "How does country exclusivity work?",
      answer:
        "BNG limits membership to a maximum of five Elite members per country, with further state-level limits in major markets. This protects member value and reduces internal competition.",
    },
    {
      question: "What is Freight Xchange and Business Xchange?",
      answer:
        "Freight Xchange allows members to promote rates globally, while Business Xchange provides access to 100% verified shipment enquiries from trusted freight forwarders.",
    },
    {
      question: "Is there payment protection for members?",
      answer:
        "Yes. Eligible Elite members benefit from payment protection coverage of up to USD 50,000, reducing risk and strengthening trust in international transactions.",
    },
    {
      question: "How can I become a BNG member?",
      answer:
        "Membership is selective. Companies must meet our qualification criteria and align with BNG’s standards of professionalism, credibility, and growth-focused collaboration.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto mt-4 mb-12 relative bg-cover bg-center bg-no-repeat">
      {/* FAQ Content */}
      <div className="relative z-10 p-6">
        <h2 className="text-4xl mb-10 sm:text-4xl md:text-[55px] font-bold text-[#27293B] text-center md:mt-6">
          Frequently Asked <span className="text-primary">Questions</span> 
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white text-[#27293B] rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-6 py-4 text-left cursor-pointer hover:bg-gray-50 font-semibold flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-content-${index}`}
                  className="px-6 py-4 bg-gray-50"
                >
                  <p className="text-gray-600 whitespace-pre-line text-[16px]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};