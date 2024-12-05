import React from 'react';

const MapComponent = ({ address }) => {
  return (
    <div className="w-full h-96 bg-gray-200">
      {/* Map Placeholder */}
      <iframe
        title="map"
        className="w-full h-full"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBBSMdTJBK6ZY1GB1MNFhcT67x5F8h-N5I&q=${encodeURIComponent(address)}`}
        allowFullScreen
      />
    </div>
  );
};

export default MapComponent;
