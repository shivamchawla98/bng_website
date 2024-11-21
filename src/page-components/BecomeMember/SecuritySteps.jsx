import React from 'react';

const SecuritySteps = () => {
  const steps = [
    {
      number: '01',
      title: 'Strict Selection',
      description: 'Top to bottom examination of every application by specialists. In the event that an organization is live with us implies it has gone through with severe determination process'
    },
    {
      number: '02',
      title: 'Reference Checks',
      description: 'We connect with confided in contacts for bits of knowledge on your organization before go live with your profile.'
    },
    {
      number: '03',
      title: 'Financial Checks',
      description: "A strong trust scan of each members profile to ensure it's risk free and good fit. Each approved members profile audited with D-U-N-S as well."
    },
    {
      number: '04',
      title: 'Approval & Conclusion',
      description: 'A final report for decision making of your application approval to onboard you to the new year of business networking.'
    }
  ];

  return (
    <div className="w-full  mx-auto px-12 py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-2 text-primary">Multilayer Validation Steps</h2>

        <p className="text-gray-600 tracking-widest text-sm">
          WE FOLLOW STRONG DUE DILIGENCE PROCESS
        </p>
      </div>

      {/* Steps Grid with Connecting Lines */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Connecting Lines (visible only on lg screens) */}
        <div className="absolute hidden lg:block w-full h-0.5 bg-primary top-12 left-0 z-0" />
        
        {steps.map((step, index) => (
          <div key={step.number} className="relative flex flex-col items-center text-center">
            {/* Circle with Number */}
            <div className="w-24 h-24 rounded-full bg-primary border-4 border-primary flex items-center justify-center mb-6 relative z-10">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-lg font-bold text-blue-700">
                  {step.number}
                </span>
              </div>
            </div>
            
            {/* Step Title */}
            <div className="bg-primary w-full py-4 px-2  rounded-t-lg border-t-4 border-primary">
              <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
            </div>
            
            {/* Description Box */}
            <div className="bg-white shadow-lg min-h-[200px] rounded-b-lg p-4 w-full border border-primary">
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Connector Arrow (except for last item) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-12 transform translate-x-1/2 z-20">
                <div className="w-8 h-8 bg-primary rotate-45 transform" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySteps;