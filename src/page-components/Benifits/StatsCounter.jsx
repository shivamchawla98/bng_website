import React, { useState, useEffect } from 'react';

const StatsCounter = () => {
  const [counts, setCounts] = useState({
    members: 0,
    countries: 0,
    cities: 0
  });

  const targetCounts = {
    members: 91,
    countries: 27,
    cities: 42
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds for the animation
    const steps = 60; // Number of steps in the animation
    const interval = duration / steps;

    const incrementValues = {
      members: targetCounts.members / steps,
      countries: targetCounts.countries / steps,
      cities: targetCounts.cities / steps
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounts(prevCounts => ({
          members: Math.min(Math.round(incrementValues.members * (currentStep + 1)), targetCounts.members),
          countries: Math.min(Math.round(incrementValues.countries * (currentStep + 1)), targetCounts.countries),
          cities: Math.min(Math.round(incrementValues.cities * (currentStep + 1)), targetCounts.cities)
        }));
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='bg-primaryBg py-12'>
    <div className="w-full bg-primary p-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Members Stats */}
        <div className="flex items-center justify-center space-x-4">
          <div className="p-3 bg-transparent rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold">{counts.members}</div>
            <div className="text-sm uppercase tracking-wide">Members</div>
          </div>
        </div>

        {/* Countries Stats */}
        <div className="flex items-center justify-center space-x-4">
          <div className="p-3 bg-transparent rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold">{counts.countries}</div>
            <div className="text-sm uppercase tracking-wide">Countries</div>
          </div>
        </div>

        {/* Cities Stats */}
        <div className="flex items-center justify-center space-x-4">
          <div className="p-3 bg-transparent rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2" />
            </svg>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold">{counts.cities}</div>
            <div className="text-sm uppercase tracking-wide">Cities</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StatsCounter;