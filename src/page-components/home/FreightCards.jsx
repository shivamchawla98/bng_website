"use client";
import React from "react";
import { Ship, Plane, ArrowRight } from "lucide-react";
import getCountryCode from "../../../utils/getCountryCode";

const FreightCards = ({ leads = [] }) => {
  if (!leads || leads.length === 0) return null;

  const formatTransportMethod = (method) => {
    if (!method) return "Sea Freight";
    
    // Parse the method which comes like "SEA_FCL", "SEA_LCL", "AIR_FREIGHT"
    const parts = method.split('_');
    
    if (parts[0] === "SEA") {
      if (parts[1] === "FCL") return "SEA Freight-FCL";
      if (parts[1] === "LCL") return "SEA Freight-LCL";
      return "Sea Freight";
    } else if (parts[0] === "AIR") {
      return "AIR Freight";
    }
    return method;
  };

  const formatContainerType = (containerType) => {
    if (!containerType) return null;
    
    // Map enum keys to display values
    const containerMap = {
      'STANDARD_20FT': "20' Standard",
      'STANDARD_40FT': "40' Standard",
      'HIGH_CUBE_40FT': "40' High Cube",
      'HIGH_CUBE_45FT': "45' High Cube",
      'REFRIGERATED_20FT': "20' Refrigerated",
      'REFRIGERATED_40FT': "40' Refrigerated",
      'OPEN_TOP_20FT': "20' Open Top",
      'OPEN_TOP_40FT': "40' Open Top",
      'FLAT_RACK_20FT': "20' Flatrack",
      'FLAT_RACK_40FT': "40' Flatrack",
      'FLAT_RACK_COLLAPSIBLE_20FT': "20' Flatrack Collapsible",
      'FLAT_RACK_COLLAPSIBLE_40FT': "40' Flatrack Collapsible",
      'BULK_20FT': "20' Bulk",
      'TANK_20FT': "20' Tank",
      'PLATFORM_20FT': "20' Platform",
      'HIGH_CUBE_48FT': "48' High Cube",
      'HIGH_CUBE_53FT': "53' High Cube"
    };
    
    return containerMap[containerType] || containerType;
  };

  const formatCargoType = (cargoType) => {
    if (!cargoType) return null;
    
    // Convert GENERAL_CARGO to "General Cargo"
    return cargoType
      .split('_')
      .map(word => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
  };

  return leads.map((card) => {
    const method = formatTransportMethod(card.transportationMethod);
    const originCountry = card.loadingPort?.country;
    const destCountry = card.destinationPort?.country;
    const originCode = getCountryCode(originCountry);
    const destCode = getCountryCode(destCountry);
    const cost = card.freightRate ? `$${card.freightRate}` : null;
    const containerSize = formatContainerType(card.containerType);
    const cargoType = formatCargoType(card.cargoType);
    const viewUrl = `https://app.bnglogisticsnetwork.com/freight/opportunities#${card.uniqueId}`;

    return (
      <div key={card.id} className="bg-[#EFF6FF] rounded-lg shadow-md p-3 border border-gray-200 mb-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            {method.includes("SEA") ? <Ship className="text-blue-600" size={20} /> : <Plane className="text-blue-600" size={20} />}
            <div className="font-bold text-lg text-gray-800">{method}</div>
            {cost && <div className="font-semibold text-blue-600 text-[17px]">{cost}</div>}
          </div>
          <div className="flex items-center gap-1">
            {containerSize && (
              <div className="bg-gray-100 px-2.5 py-1 rounded-full text-[12px] font-medium text-gray-700">
                {containerSize}
              </div>
            )}
            {cargoType && (
              <div className="bg-gray-100 px-2.5 py-1 rounded-full text-[12px] font-medium text-gray-700">
                {cargoType}
              </div>
            )}
            <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-2.5 py-1 rounded-full text-[12px] font-medium transition-colors">
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

export default FreightCards;
