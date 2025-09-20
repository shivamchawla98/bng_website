"use client";

import React, { useCallback } from "react";
import { FaRoute, FaCalendarAlt, FaShip } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";
import { GiCargoCrate } from "react-icons/gi";
import { GrCurrency } from "react-icons/gr";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMutation, useQuery } from "@apollo/client";

const FreightCard = ({
  freightData,
  onCardClick,
  onExploreClick,
  companyId,
  setIsOpen,
}) => {
  const isOwnCompany = freightData.company.id === companyId;
  const alreadyExplored = freightData.interests?.some((interest) => interest.company.id === companyId);
  const isExpired = freightData.status === "EXPIRED";
  const canExplore = !isOwnCompany && !isExpired;

  const handleViewDetailsClick = useCallback(() => {
    onCardClick(freightData.id);
  }, [freightData.id, onCardClick]);

  const handleExploreClick = useCallback(
    (e) => {
      onExploreClick(freightData.id);
      setIsOpen(true);
      e.stopPropagation();
    },
    [freightData.id, onExploreClick, setIsOpen]
  );

  const getTransportIcon = () => {
    switch (freightData.transportationMethod) {
      case "AIR_FREIGHT":
        return <MdAirplanemodeActive className="w-8 h-8" />;
      case "SEA_LCL":
        return <FaShip className="w-8 h-8" />;
      case "SEA_FCL":
        return <GiCargoCrate className="w-8 h-8" />;
      default:
        return <FaShip className="w-8 h-8" />;
    }
  };

  const getTransportGradient = () => {
    if (isExpired) {
      return "from-gray-500 to-gray-400";
    }
    switch (freightData.transportationMethod) {
      case "AIR_FREIGHT":
        return "bg-gradient-to-r from-indigo-500/80 to-indigo-400";
      case "SEA_LCL":
        return "bg-gradient-to-r from-indigo-500/80 to-indigo-400";
      case "SEA_FCL":
        return "bg-gradient-to-r from-indigo-500/80 to-indigo-400";
      default:
        return "from-gray-500 to-gray-400";
    }
  };

  const getTransportName = () => {
    switch (freightData.transportationMethod) {
      case "AIR_FREIGHT":
        return "Air Freight";
      case "SEA_LCL":
        return "Sea LCL";
      case "SEA_FCL":
        return "Sea FCL";
      default:
        return "Freight";
    }
  };

  const formatPortName = (port, isAir) => {
    if (isAir) {
      return `${port.name} (${port.iataCode || "N/A"})`;
    }
    return `${port.name} ${port.unlocode ? `(${port.unlocode})` : ""}`;
  };

  const isAir = freightData.transportationMethod === "AIR_FREIGHT";

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer ${isExpired ? "grayscale" : ""}`}
      onClick={handleViewDetailsClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`bg-gradient-to-r ${getTransportGradient()} px-6 py-4 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-05 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-xl backdrop-blur-sm">
              {getTransportIcon()}
            </div>
            <div>
              <h3 className="text-xl font-bold">{getTransportName()}</h3>
              <p className="text-white text-opacity-90 text-sm">
                Published: {new Date(freightData.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="text-right space-y-2">
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
              ID: #{freightData.uniqueId}
            </div>
            {freightData.interests && (
              <div className="bg-indigo-200 text-center bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                Explored By: {freightData?.interests?.length}
              </div>
            )}
            {isOwnCompany && (
              <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                Your Company Freight Leads
              </div>
            )}
            {isExpired && (
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Expired
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <img
                src={`https://flagsapi.com/${freightData.loadingPort.countryCode.toUpperCase()}/flat/64.png`}
                alt={`${freightData.loadingPort.country} flag`}
                className="w-12 h-12 rounded-full border-2 border-gray-200"
              />
              <div>
                <p className="font-semibold text-gray-800">{formatPortName(freightData.loadingPort, isAir)}</p>
                <p className="text-sm text-gray-500">
                  {freightData.loadingPort.city}, {freightData.loadingPort.country}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 mx-4">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-2.5 bg-green-400 rounded-full"></div>
              <div className="w-8 h-1 bg-gray-300"></div>
              <FaRoute className="text-gray-400" />
              <div className="w-8 h-1 bg-gray-300"></div>
              <div className="w-20 h-2.5 bg-red-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex-1 text-right">
            <div className="flex items-center justify-end space-x-2 mb-2">
              <div>
                <p className="font-semibold text-gray-800">{formatPortName(freightData.destinationPort, isAir)}</p>
                <p className="text-sm text-gray-500">
                  {freightData.destinationPort.city}, {freightData.destinationPort.country}
                </p>
              </div>
              <img
                src={`https://flagsapi.com/${freightData.destinationPort.countryCode.toUpperCase()}/flat/64.png`}
                alt={`${freightData.destinationPort.country} flag`}
                className="w-12 h-12 rounded-full border-2 border-gray-200"
              />
            </div>
          </div>
        </div>
        {freightData.routing && (
          <div className="text-center mt-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              <FaRoute className="mr-1" />
              Route: {freightData.routing}
            </span>
          </div>
        )}
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white flex-1 rounded-xl border pl-4 py-1.5">
            <div className="flex items-center space-x-2 mb-2">
              <GrCurrency className={`text-green-600 ${isExpired ? "text-opacity-50" : ""}`} />
              <span className={`text-sm font-medium text-green-800 ${isExpired ? "text-opacity-50" : ""}`}>Rate</span>
            </div>
            <div className="flex items-start space-y-1">
              <p className={`text-2xl font-bold text-green-700 ${isExpired ? "text-opacity-50" : ""}`}>
                {freightData.freightRateCurrency} ${freightData.freightRate}
              </p>
              <p className={`text-xs text-green-600 ${isExpired ? "text-opacity-50" : ""}`}>{freightData.freightRateBasis}</p>
            </div>
          </div>
          <div className="bg-white px-4 py-2 flex-1 rounded-xl border border-gray-100">
            <div className="flex items-center space-x-2 mb-2">
              <FaCalendarAlt className={`text-red-600 ${isExpired ? "text-opacity-50" : ""}`} />
              <span className={`text-sm font-medium text-red-800 ${isExpired ? "text-opacity-50" : ""}`}>Valid Until:</span>
            </div>
            <p className={`font-semibold text-red-700 text-sm ml-2 ${isExpired ? "text-opacity-50" : ""}`}>
              {new Date(freightData.validityDate).toLocaleDateString()}
            </p>
          </div>

      
    
          {!isOwnCompany && canExplore && !alreadyExplored && (
            <a
            href="https://app.bnglogisticsnetwork.com/freight-promotion"
            target="_blank"
              className={`flex justify-center items-center flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg bg-gradient-to-tr from-[#6853DB] to-[#6853DB] hover:from-indigo-700 hover:to-indigo-800 text-white`}
              onClick={handleExploreClick}
            >
              Explore Now <ArrowRight className="h-auto w-6 ml-4" />
            </a>
          )}
          {!isOwnCompany && !canExplore && (
            <div className="flex justify-center items-center flex-1 bg-gray-300 text-gray-600 px-4 py-2 rounded-lg font-medium">
              {isExpired ? "Expired" : "Not Available"}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FreightCard;
