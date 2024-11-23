import React from "react";

const ContactUsMap = () => {
  const locations = [
    {
      name: "Melbourne, AUS",
      address: "100 Flinders Street, Melbourne VIC 3000 AU",
      coordinates: "-37.817209,144.964873",
    },
    {
      name: "London, UK",
      address: "100 Oxford Street, London W1D 1LL UK",
      coordinates: "51.5145,-0.1494",
    },
    {
      name: "San Francisco, USA",
      address: "100 Market Street, San Francisco, CA 94105 USA",
      coordinates: "37.793611,-122.396111",
    },
  ];
  const key = "6LfYv4cqAAAAAOwVM_YCGHfZDEGPcsX5CH1jqSin";
  const renderMap = () => {
    const coordinates = locations.map((loc) => loc.coordinates).join("|");
    return `https://www.google.com/maps/embed/v1/place?key=${key}&q=${coordinates}`;
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-[55px] font-bold">We'd love to hear from you</h1>
        <p className="text-[18px] text-gray-600">
          We have offices and teams all around the world.
        </p>
      </div>

      {/* Map */}
      <div className="relative">
        <iframe
          src={renderMap()}
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          className="border-0"></iframe>
      </div>

      {/* Contact Details */}
      <div className="bg-purple-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {locations.map((location, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold">{location.name}</h3>
              <p>{location.address}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto py-10 text-center">
        <p>Support: support@bnlogisticsnetwork.com</p>
        <p>Sales: sales@bnlogisticsnetwork.com</p>
        <p>Phone: (+91)-72-4077-4077</p>
      </div>
    </div>
  );
};

export default ContactUsMap;
