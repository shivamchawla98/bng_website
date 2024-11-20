import React from "react";
import Image from "next/image";
import centeredImage from "@/app/images/memberBenifits.svg";
import handShake from "@/app/images/handSHake.svg";
import Vector1 from "@/app/images/Patch1.svg";
import MembersAreaVector from '@/app/images/home/MembersArea.svg'
import GlobalReachVector from '@/app/images/home/GlobalReach.svg'
import BusinessXchangeVector from '@/app/images/home/BusinessXchange.svg'
import TrustedPartnersVector from '@/app/images/home/TrustedPartners.svg'
import PaymentProtectionVector from '@/app/images/home/PaymentProtection.svg'
import PaymentMonitoringVector from '@/app/images/home/PaymentMonitoring.webp'
import ClaimCenterVector from '@/app/images/home/ClaimCenter.svg'
import FreightXchangeVector from '@/app/images/home/FreightXchange.svg'

function MemberBenefits() {
  const benefits = [
    {
      title: "Members Area",
      description:
        "An intuitive, user-friendly member portal designed to streamline networking, providing a centralized space for all your business connections and collaboration needs.",
      image: MembersAreaVector,
    },
    {
      title: "Global Reach",
      description:
        "Connect with reliable partners worldwide and access a growing community that meets all your logistics and supply chain requirements.",
      image: GlobalReachVector,
    },
    {
      title: "Business Xchange",
      description:
        "Access the Business Center, a dedicated area for finding active business leads and sharing opportunities directly with clients in your network.",
      image: BusinessXchangeVector,
    },
    {
      title: "Trusted Partners",
      description:
        "Membership is granted exclusively to companies with solid reputations, verified through a three-year track record and two business references.",
      image: TrustedPartnersVector,
    },
  ];

  const benefitsTwo = [
    {
      title: "Payment Protection",
      description:
        "The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment",
      image: PaymentProtectionVector,
    },
    {
      title: "Payment Monitoring",
      description:
        "A state-of-the-art system that automatically tracks receivables and payables, keeping all transactions organized and up-to-date.",
      image: PaymentMonitoringVector,
    },
    {
      title: "Claim Center",
      description:
        "A fully digital claims process allows members to file and resolve disputes seamlessly, ensuring prompt and fair resolutions for all conflicts.",
      image: ClaimCenterVector,
    },
    {
      title: "Freight Xchange",
      description:
        "Showcase your freight rates and services to the global trade community via BNG Logistics & B2B Portals, boosting your visibility and increasing business opportunities.",
      image: FreightXchangeVector,
    },
  ];
  const mobileBenefits = [
    {
      title: "Trusted Partners",
      description:
        "Membership is granted exclusively to companies with solid reputations, verified through a three-year track record and two business references.",
      image: TrustedPartnersVector,
    },
    {
      title: "Payment Protection",
      description:
        "The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment.",
      image: PaymentProtectionVector,
    },
    {
      title: "Payment Monitoring",
      description:
        "A state-of-the-art system that automatically tracks receivables and payables, keeping all transactions organized and up-to-date.",
      image: PaymentMonitoringVector,
    },
    {
      title: "Claim Center",
      description:
        "A fully digital claims process allows members to file and resolve disputes seamlessly, ensuring prompt and fair resolutions for all conflicts.",
      image: ClaimCenterVector,
    },
    {
      title: "Members Area",
      description:
        "An intuitive, user-friendly member portal designed to streamline networking, providing a centralized space for all your business connections and collaboration needs.",
      image: MembersAreaVector,
    },
    {
      title: "Global Reach",
      description:
        "Connect with reliable partners worldwide and access a growing community that meets all your logistics and supply chain requirements.",
      image: GlobalReachVector,
    },
    {
      title: "Business Xchange",
      description:
        "Access the Business Center, a dedicated area for finding active business leads and sharing opportunities directly with clients in your network.",
      image: BusinessXchangeVector,
    },
    {
      title: "Freight Xchange",
      description:
        "Showcase your freight rates and services to the global trade community via BNG Logistics & B2B Portals, boosting your visibility and increasing business opportunities.",
      image: FreightXchangeVector,
    },
  ];

  return (
    <div className="relative py-24 w-[100%] overflow-x-hidden">
      <div className="flex flex-col justify-center w-[100%] px-4 overflow-x-hidden">
        <h2 className="text-4xl text-black font-bold text-center mb-12">
          Member Benefits
        </h2>
        <div className=" hidden h-max md:flex flex-row space-x-6 justify-center w-[100%] overflow-x-hidden align-middle">
          <div className="h-max flex flex-col justify-center overflow-x-hidden align-middle">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-4 justify-center align-middle">
                <div className="top-0 w-[300px] justify-center flex flex-col items-center">
                  <div className="w-40 h-40 bg-primary rounded-full flex flex-col items-center justify-center">
                    <Image
                      src={benefit.image}
                      alt="Member Benefits"
                      height={50}
                      className="object-contain md:block hidden relative"
                    />
                    <div className="text-white text-center mt-2">
                      <div className="font-semibold text-[14px]">
                        {benefit.title}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm text-left mt-4">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-[0.8px] border-gray-600"></div>
          <div className="h-max flex flex-col justify-center align-middle">
            {benefitsTwo?.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-4 justify-center align-middle">
                <div className="top-0 w-[300px] justify-center flex flex-col items-center">
                  <p className="text-gray-600 text-sm text-left mt-4">
                    {benefit.description}
                  </p>
                  <div className="w-40 h-40 mt-4 bg-primary rounded-full flex flex-col items-center justify-center relative right-10">
                    <Image
                      src={benefit.image}
                      alt="Member Benefits"
                      height={50}
                      className="object-contain md:block hidden relative"
                    />
                    <div className="text-white text-center mt-2">
                      <div className="font-semibold text-[14px]">
                        {benefit.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative md:hidden md:h-[600px] top-10 w-max mx-auto flex flex-col justify-center items-center">
          {mobileBenefits.map((benefit, index) => (
            <div key={index} className="w-[300px] flex flex-col items-center">
              <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center">
                <Image
                  src={handShake}
                  alt="Member Benefits"
                  className="object-contain md:block hidden relative"
                />
                <div className="text-white text-center mt-2">
                  <div className="font-semibold text-[14px]">
                    {benefit.title}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm text-left mt-4">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberBenefits;
