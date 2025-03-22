import React from 'react';

const locations = [
  { subheading: 'India Office', heading: 'Main Office', caption: 'The heart of our operations', addresses: ['IT PARK  NOIDA 201309, INDIA '] },
  { subheading: 'USA office', heading: 'Regional Office', caption: 'Serving the local community', addresses: ['1151 Walker Rd Ste 100 Dover Kent 19904'] },
  { subheading: 'Canada Office', heading: 'Regional Office', caption: 'Serving the local community', addresses: ['12 Linden Dr, Cambridge N3H5L5'] }
];

const BusinessLocations = () => {
  return (
    <div className="bg-gradient-to-tr  from-[#6853DB] to-[#6853DB] text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* <h4 className="text-sm font-semibold text-gray-400">{location.subheading}</h4> */}
              <h2 className="text-2xl font-bold mb-2">{location.subheading}</h2>
              {/* <p className="text-gray-300 mb-4">{location.subheading}</p> */}
              <div className="grid grid-cols-1 gap-2">
                {location.addresses.map((address, idx) => (
                  <p key={idx} className="text-gray-200">{address}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessLocations;
