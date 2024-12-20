import React from 'react';

const locations = [
  { subheading: 'Headquarters', heading: 'Main Office', caption: 'The heart of our operations', addresses: ['C321, TOWER-C, 3RD FLOOR, SECTOR 62 NOIDA 201309'] },
  { subheading: 'US Address', heading: 'Regional Office', caption: 'Serving the local community', addresses: ['1151 Walker Rd Ste 100 Dover Kent 19904'] },
  { subheading: 'Canada Address', heading: 'Regional Office', caption: 'Serving the local community', addresses: ['12 Linden Dr, Cambridge N3H5L5'] }
];

const BusinessLocations = () => {
  return (
    <div className="bg-cstm-bg-rad-grad-memb-benfts text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* <h4 className="text-sm font-semibold text-gray-400">{location.subheading}</h4> */}
              <h2 className="text-2xl font-bold mb-2">{location.heading}</h2>
              <p className="text-gray-300 mb-4">{location.subheading}</p>
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
