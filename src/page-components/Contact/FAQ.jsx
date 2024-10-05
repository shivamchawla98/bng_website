export const FAQ = () => {
    const faqs = [
      {
        question: 'GET A QUOTE',
        answer: 'diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et. diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et.',
      },
      {
        question: 'CONTACT AN EXPERT',
        answer: 'Expert contact information and details go here...',
      },
      {
        question: 'TRACK & TRACE',
        answer: 'Tracking information and instructions go here...',
      },
    ];
  
    return (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-black mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
            >
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50">
                {faq.question}
              </summary>
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    );
  };
  