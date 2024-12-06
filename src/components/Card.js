import React from 'react';

function Card({ data }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={data.logo} alt={data.company} className="w-12 h-12 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{data.company}</h3>
          <p className="text-gray-500">From: {data.from}</p>
          <p className="text-gray-500">To: {data.to}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xl font-bold">{data.price}</p>
        <p className={`text-sm ${data.change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{data.change}</p>
        <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Book now</button>
      </div>
    </div>
  );
}

export default Card;
