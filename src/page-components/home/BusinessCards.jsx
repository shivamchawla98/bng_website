"use client";
import React from "react";
import { Ship, Plane, ArrowRight } from "lucide-react";
import getCountryCode from "../../../utils/getCountryCode";

const BusinessCards = ({ leads = [] }) => {
  if (!leads || leads.length === 0) return null;

  const formatTransportMethod = (method, containers) => {
    if (!method) return "SEA FREIGHT";
    
    // Determine if it's SEA or AIR based on method type and containers
    let freightType = "";
    
    if (method === "ULD") {
      freightType = "AIR FREIGHT";
    } else if (method === "FCL" || method === "BULK" || (containers && containers.length > 0)) {
      freightType = "SEA FREIGHT";
    } else if (method === "LCL" || method === "STANDARD") {
      // LCL can be both - check if containers exist
      freightType = (containers && containers.length > 0) ? "SEA FREIGHT" : "AIR FREIGHT";
    } else {
      freightType = "SEA FREIGHT";
    }

    // Format the complete title
    if (method === "STANDARD") {
      return freightType;
    }
    return `${freightType} - ${method}`;
  };

  const formatCargoCategory = (category) => {
    if (!category) return null;
    
    // Convert enum values like REEFER_CARGO to "Reefer Cargo"
    return category
      .split('_')
      .map(word => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
  };

  const getContainerSize = (containers) => {
    if (!containers || containers.length === 0) return null;
    const containerType = containers[0]?.containerType;
    if (!containerType) return null;
    
    // Extract the size from container type like "20' Standard", "40' High Cube"
    // Match the pattern of numbers followed by apostrophe
    const sizeMatch = containerType.match(/(\d+)'/);
    if (sizeMatch) {
      return `${sizeMatch[1]}'`;
    }
    
    return null;
  };

  return leads.map((card) => {
    const method = formatTransportMethod(card.transportationMethod, card.containers);
    const originCountry = card.loadingPort?.country;
    const destCountry = card.destinationPort?.country;
    const originCode = getCountryCode(originCountry);
    const destCode = getCountryCode(destCountry);
    const cargoCategory = formatCargoCategory(card.category);
    const containerSize = getContainerSize(card.containers);
    const viewUrl = `https://app.bnglogisticsnetwork.com/business/opportunities#${card.uniqueId}`;

    return (
      <div key={card.id} className="bg-white rounded-lg shadow-md p-3 border border-gray-200 mb-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            {method.includes("SEA") ? <Ship className="text-blue-600" size={20} /> : <Plane className="text-blue-600" size={20} />}
            <div className="font-bold text-lg text-gray-800">{method}</div>
          </div>
          <div className="flex items-center gap-1">
            {containerSize && (
              <div className="bg-gray-100 px-2 py-0.5 rounded-full text-[10px] font-medium text-gray-700">
                {containerSize}
              </div>
            )}
            {cargoCategory && (
              <div className="bg-gray-100 px-2 py-0.5 rounded-full text-[10px] font-medium text-gray-700">
                {cargoCategory}
              </div>
            )}
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
