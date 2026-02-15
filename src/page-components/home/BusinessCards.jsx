"use client";
import React from "react";
import { Ship, Plane, ArrowRight } from "lucide-react";
import getCountryCode from "../../../utils/getCountryCode";

const BusinessCards = ({ leads = [] }) => {
  if (!leads || leads.length === 0) return null;

  const formatTransportMethod = (method, containers) => {
    if (!method) return "SEA Freight";
    
    // Determine if it's SEA or AIR based on method type and containers
    let freightType = "";
    
    if (method === "ULD") {
      freightType = "AIR Freight";
    } else if (method === "FCL" || method === "BULK" || (containers && containers.length > 0)) {
      freightType = "SEA Freight";
    } else if (method === "LCL" || method === "STANDARD") {
      // LCL can be both - check if containers exist
      freightType = (containers && containers.length > 0) ? "SEA Freight" : "AIR Freight";
    } else {
      freightType = "SEA Freight";
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

  const getContainerInfo = (containers) => {
    if (!containers || containers.length === 0) return null;
    const container = containers[0];
    if (!container?.containerType) return null;
    
    // Return full container type with quantity like "40' High Cube x 1"
    const quantity = container.containerQuantity || 1;
    const formattedType = formatContainerType(container.containerType);
    return `${formattedType} x ${quantity}`;
  };

  return leads.map((card) => {
    const method = formatTransportMethod(card.transportationMethod, card.containers);
    const originCountry = card.loadingPort?.country;
    const destCountry = card.destinationPort?.country;
    const originCode = getCountryCode(originCountry);
    const destCode = getCountryCode(destCountry);
    const cargoCategory = formatCargoCategory(card.category);
    const containerInfo = getContainerInfo(card.containers);
    const viewUrl = `https://app.bnglogisticsnetwork.com/business/opportunities#${card.uniqueId}`;

    return (
      <div key={card.id} className="bg-[#EFF6FF] rounded-lg shadow-md p-3 border border-gray-200 mb-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            {method.includes("SEA") ? <Ship className="text-blue-600" size={20} /> : <Plane className="text-blue-600" size={20} />}
            <div className="font-bold text-lg text-gray-800">{method}</div>
          </div>
          <div className="flex items-center gap-1">
            {containerInfo && (
              <div className="bg-gray-100 px-2.5 py-1 rounded-full text-[12px] font-medium text-gray-700">
                {containerInfo}
              </div>
            )}
            {cargoCategory && (
              <div className="bg-gray-100 px-2.5 py-1 rounded-full text-[12px] font-medium text-gray-700">
                {cargoCategory}
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

export default BusinessCards;
