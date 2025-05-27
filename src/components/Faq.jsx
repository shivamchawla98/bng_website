'use client'
import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "Who can become a BNG Logistics Network member?",
      answer:
        "BNG membership is open to qualified independent freight forwarders, customs brokers, and logistics/supply chain providers who meet our requirements. For standard membership, applicants need:\n" +
        "- A valid company registration certificate\n" +
        "- Tax registration certificate\n" +
        "- Company website\n" +
        "- Minimum of 3 industry references (or 1 BNG member reference)\n" +
        "- IATA, FIATA, AEO, CUSTOMS accreditation (any one)\n" +
        "Optional: Trade-related or other network membership certificates.\n" +
        "If you don't have 3 references, 1 reference from a current BNG member is sufficient.",
    },
    {
      question: "What if I'm new and lack trade references?",
      answer:
        "No problem! You can still join BNG. If you know a current member, their reference will suffice. Alternatively, we suggest cooperating with one of our existing members, mentioning them in your application. Our membership team will review and approve your application upon verification.",
    },
    {
      question: "How does BNG ensure member credibility?",
      answer:
        "BNG follows a strict vetting process supported by D-U-N-S Credit Scores, FDRS systems, and other global verification mechanisms. Applications are reviewed by legal, finance, and trade experts to ensure only reliable and trustworthy companies join the network.",
    },
    {
      question: "What is the Business Lead Center, and how does it work?",
      answer:
        "The Business Lead Center is a digital tool where members can post freight and logistics inquiries and receive quotes from fellow members. Members can use this feature directly within their dashboard, streamlining collaboration and response times.",
    },
    {
      question: "What is Freight Xchange?",
      answer:
        "Freight Viewer is a tool for promoting freight rates to the global community. Members can upload rates to increase visibility and sales within the network and affiliated BNG platforms. A valid membership is required to access this feature.",
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