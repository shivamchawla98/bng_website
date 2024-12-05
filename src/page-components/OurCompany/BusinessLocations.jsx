import React from 'react';

const locations = [
  { subheading: 'Headquarters', heading: 'Main Office', caption: 'The heart of our operations', addresses: ['123 Main St, City, Country', '456 Another St, City, Country'] },
  { subheading: 'Branch', heading: 'Regional Office', caption: 'Serving the local community', addresses: ['789 Side St, City, Country', '1011 Another Ave, City, Country'] }
];

const BusinessLocations = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h4 className="text-sm font-semibold text-gray-400">{location.subheading}</h4>
              <h2 className="text-2xl font-bold mb-2">{location.heading}</h2>
              <p className="text-gray-300 mb-4">{location.caption}</p>
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
