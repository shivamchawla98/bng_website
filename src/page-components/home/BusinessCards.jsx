"use client";
import React from "react";
import { Ship, Plane, ArrowRight } from "lucide-react";
import getCountryCode from "../../../utils/getCountryCode";

const BusinessCards = ({ leads = [] }) => {
  if (!leads || leads.length === 0) return null;

  return leads.map((card) => {
    const method = card.transportationMethod || "SEA Freight";
    const originCountry = card.loadingPort?.country;
    const destCountry = card.destinationPort?.country;
    const originCode = getCountryCode(originCountry);
    const destCode = getCountryCode(destCountry);
    const commodity = card.commodity || "General Cargo";
    const viewUrl = `https://app.bnglogisticsnetwork.com/business/opportunities#${card.uniqueId}`;

    return (
      <div key={card.id} className="bg-white rounded-lg shadow-md p-3 border border-gray-200 mb-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            {method.includes("SEA") ? <Ship className="text-blue-600" size={20} /> : <Plane className="text-blue-600" size={20} />}
            <div className="font-bold text-lg text-gray-800">{method}</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-gray-100 px-2 py-0.5 rounded-full text-[10px] font-medium text-gray-700">
              {commodity}
            </div>
            <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors">
              View
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={`https://flagcdn.com/w40/${originCode}.png`}
              alt={originCountry}
              className="w-8 h-6 rounded-sm object-cover"
            />
            <div className="font-bold text-gray-800">{originCountry}</div>
          </div>
          <div className="text-gray-400 text-xl">→</div>
          <div className="flex items-center gap-2">
            <img
              src={`https://flagcdn.com/w40/${destCode}.png`}
              alt={destCountry}
              className="w-8 h-6 rounded-sm object-cover"
            />
            <div className="font-bold text-gray-800">{destCountry}</div>
          </div>
        </div>
      </div>
    );
  });
};

export default BusinessCards;
