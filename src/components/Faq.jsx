export const FAQ = () => {
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
        "If you don’t have 3 references, 1 reference from a current BNG member is sufficient.",
    },
    {
      question: "What if I’m new and lack trade references?",
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

  return (
    <div className="max-w-3xl mx-auto bg-primaryBg">
      <h2 className="text-[55px] font-bold text-center text-[#27293B] mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="bg-white text-[#27293B] rounded-lg shadow-lg overflow-hidden">
            <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50">
              {faq.question}
            </summary>
            <div className="px-6 py-4 bg-gray-50">
              <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};
