import React from "react";
import { CheckCircle2 } from "lucide-react";
import Contactbg from "@/app/images/becomeBg2.jpg";
const BecomeHeroSection = () => {
  return (
    <div
      className="relative h-[600px] bg-gradient-to-br from-purple-700 to-purple-900 flex items-center px-8 md:px-16"
      style={{
        backgroundImage: `url(${Contactbg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Left Content */}
      <div className="flex justify-center items-center w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-900 mix-blend-lighten" />
        <div className="flex  max-w-xl">
          <div>
            <h1 className="text-[55px] md:max-w-[480px] leading-normal font-extrabold text-white mb-4">
              Elevate Your Logistics Game
            </h1>
            <p className="text-gray-200 mb-6 text-lg md:max-w-[500px]">
              Access a trusted network, advanced tools, and global opportunities
              with a single membership.
            </p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="  bg-white rounded-xl p-8 shadow-lg w-max hidden md:block">
          <div className="flex ">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#27293B]">
                Logistics Network
                <br />
                Membership
              </h2>
              <p className="text-gray-600 mb-4 max-w-[280px]">
                Become part of our community of freight forwarders to start
                exchanging business
              </p>

              <div className="mb-6">
                <span className="text-[58px] font-extrabold text-[#000]">
                  $999
                </span>
                <span className="text-gray-600">/year</span>
              </div>
              <button className="bg-primary rounded-full text-white px-6 py-3 hover:bg-gradient-to-tr from-[#6853DB] to-[#6853DB] flex items-center">
                Become a Member
              </button>
            </div>

            <div>
              <ul className="space-y-3 mb-6">
                {[
                  "Unlimited partnerships",
                  "Store review operation",
                  "Unlimited access to business hub",
                  "Unlimited report views",
                  "Unlimited branch offices",
                  "Premium user support",
                  "Budget onboarding",
                  "Payment Protection *additional Cost",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeHeroSection;
