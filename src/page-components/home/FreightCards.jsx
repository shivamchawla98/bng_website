"use client";
import React from "react";
import Flag from "react-flagkit";
import { Ship, Plane, ArrowRight } from "lucide-react";

const activeOppData = [
  {
    id: 1,
    origin: { country: "US", name: "United States" },
    destination: { country: "CN", name: "China" },
    freightType: "SEA Freight-LCL",
    freightId: "SH-2026-101",
    containerType: "20\"",
    cargoType: "Electronics",
    status: "Ready to Load",
    cost: "$1,200",
  },
  {
    id: 2,
    origin: { country: "IN", name: "India" },
    destination: { country: "DE", name: "Germany" },
    freightType: "AIR Freight",
    freightId: "AIR-2026-102",
    containerType: "Air",
    cargoType: "Pharmaceuticals",
    status: "In Transit",
    cost: "$3,800",
  },
  {
    id: 3,
    origin: { country: "BR", name: "Brazil" },
    destination: { country: "JP", name: "Japan" },
    freightType: "SEA Freight-FCL",
    freightId: "SH-2026-103",
    containerType: "40\"",
    cargoType: "Automotive Parts",
    status: "Customs Clearance",
    cost: "$2,500",
  },
  {
    id: 4,
    origin: { country: "GB", name: "United Kingdom" },
    destination: { country: "AU", name: "Australia" },
    freightType: "AIR Freight",
    freightId: "AIR-2026-104",
    containerType: "Air",
    cargoType: "Perishables",
    status: "Delivered",
    cost: "$4,200",
  },
  {
    id: 5,
    origin: { country: "FR", name: "France" },
    destination: { country: "CA", name: "Canada" },
    freightType: "SEA Freight-LCL",
    freightId: "SH-2026-105",
    containerType: "20\"",
    cargoType: "Textiles",
    status: "Ready to Load",
    cost: "$1,800",
  },
  {
    id: 6,
    origin: { country: "ZA", name: "South Africa" },
    destination: { country: "IT", name: "Italy" },
    freightType: "SEA Freight-FCL",
    freightId: "SH-2026-106",
    containerType: "40\"",
    cargoType: "Machinery",
    status: "In Transit",
    cost: "$3,100",
  },
];

const FreightCards = () => {
  return activeOppData.map((card) => (
    <div
      key={card.id}
      className="bg-white rounded-lg shadow-md p-3 border border-gray-200 mb-4"
    >
      {/* Title, Cost, and Tags in Same Line */}
      <div className="flex justify-between items-center mb-6">
        {/* Title with Icon and Cost */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {card.freightType.includes("SEA") ? (
              <Ship className="text-blue-600" size={20} />
            ) : (
              <Plane className="text-blue-600" size={20} />
            )}
            <div className="font-bold text-lg text-gray-800">
              {card.freightType}
            </div>
          </div>
          <div className="font-medium text-gray-600 text-sm">
            {card.cost}
          </div>
        </div>

        {/* Container, Cargo, and View Button */}
        <div className="flex items-center gap-1">
          <div className="bg-gray-100 px-2 py-0.5 rounded-full text-[10px] font-medium text-gray-700">
            {card.containerType}
          </div>
          <div className="bg-gray-100 px-2 py-0.5 rounded-full text-[10px] font-medium text-gray-700">
            {card.cargoType}
          </div>
          <button className="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors">
            View
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Origin and Destination */}
      <div className="flex justify-between items-center">
        {/* Origin */}
        <div className="flex items-center gap-2">
          <Flag country={card.origin.country} className="w-8 h-8" />
          <div className="font-bold text-gray-800">
            {card.origin.name}
          </div>
        </div>

        {/* Arrow */}
        <div className="text-gray-400 text-xl">→</div>

        {/* Destination */}
        <div className="flex items-center gap-2">
          <Flag country={card.destination.country} className="w-8 h-8" />
          <div className="font-bold text-gray-800">
            {card.destination.name}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default FreightCards;
