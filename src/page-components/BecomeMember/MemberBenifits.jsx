import React from "react";
import Image from "next/image";
import centeredImage from "@/app/images/memberBenifits.svg";
import handShake from "@/app/images/handSHake.svg";
import Vector1 from "@/app/images/Patch1.svg";

function MemberBenefits() {
  const benefits = [
    {
      title: "Members Area",
      description:
        "An intuitive, user-friendly member portal designed to streamline networking, providing a centralized space for all your business connections and collaboration needs.",
    },
    {
      title: "Global Reach",
      description:
        "Connect with reliable partners worldwide and access a growing community that meets all your logistics and supply chain requirements.",
    },
    {
      title: "Business Xchange",
      description:
        "Access the Business Center, a dedicated area for finding active business leads and sharing opportunities directly with clients in your network.",
    },
    {
      title: "Trusted Partners",
      description:
        "Membership is granted exclusively to companies with solid reputations, verified through a three-year track record and two business references.",
    },
  ];

  const benefitsTwo = [
    {
      title: "Payment Protection",
      description:
        "The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment",
    },
    {
      title: "Payment Monitoring",
      description:
        "A state-of-the-art system that automatically tracks receivables and payables, keeping all transactions organized and up-to-date.",
    },
    {
      title: "Claim Center",
      description:
        "A fully digital claims process allows members to file and resolve disputes seamlessly, ensuring prompt and fair resolutions for all conflicts.",
    },
    {
      title: "Freight Xchange",
      description:
        "Showcase your freight rates and services to the global trade community via BNG Logistics & B2B Portals, boosting your visibility and increasing business opportunities.",
    },
  ];
  const mobileBenefits = [
    {
      title: "Trusted Partners",
      description:
        "Membership is granted exclusively to companies with solid reputations, verified through a three-year track record and two business references.",
    },
    {
      title: "Payment Protection",
      description:
        "The Payment Protection Framework (PPF) and a specially designed digital interface help members mitigate risk and work with confidence in a secure environment.",
    },
    {
      title: "Payment Monitoring",
      description:
        "A state-of-the-art system that automatically tracks receivables and payables, keeping all transactions organized and up-to-date.",
    },
    {
      title: "Claim Center",
      description:
        "A fully digital claims process allows members to file and resolve disputes seamlessly, ensuring prompt and fair resolutions for all conflicts.",
    },
    {
      title: "Members Area",
      description:
        "An intuitive, user-friendly member portal designed to streamline networking, providing a centralized space for all your business connections and collaboration needs.",
    },
    {
      title: "Global Reach",
      description:
        "Connect with reliable partners worldwide and access a growing community that meets all your logistics and supply chain requirements.",
    },
    {
      title: "Business Xchange",
      description:
        "Access the Business Center, a dedicated area for finding active business leads and sharing opportunities directly with clients in your network.",
    },
    {
      title: "Freight Xchange",
      description:
        "Showcase your freight rates and services to the global trade community via BNG Logistics & B2B Portals, boosting your visibility and increasing business opportunities.",
    },
  ];

  return (
    <div className="relative py-24 w-[100%] overflow-x-hidden">
      <div className="flex flex-col justify-center w-[100%] px-4 overflow-x-hidden">
        <h2 className="text-4xl text-[#27293B] font-bold text-center mb-12">
          Member Benefits
        </h2>
        <div className=" hidden h-max md:flex flex-row space-x-6 justify-center w-[100%] overflow-x-hidden align-middle">
          <div className="h-max flex flex-col justify-center overflow-x-hidden align-middle">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-4 justify-center align-middle">
                <div className="top-0 w-[300px] justify-center flex flex-col items-center">
                  <div className="w-40 h-40 bg-cstm-bg-rad-grad-memb-benfts rounded-full flex flex-col items-center justify-center">
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
                  <p className="text-gray-600 text-left mt-4 text-[18px]">
                    {benefit.description}
                  </p>
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
              <p className="text-gray-600 text-[18px] text-left mt-4  text-[18px]">
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
