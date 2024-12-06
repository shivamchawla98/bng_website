import React from 'react';

const MapComponent = ({ address }) => {
  const apiKey = process.env.MAP_API_KEY;

  return (
    <div className="w-full h-96 bg-gray-200">
      <iframe
        title="map"
        className="w-full h-full"
        // width="600"
        height="600"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}`}
      ></iframe>
    </div>
  );
};

export default MapComponent;
