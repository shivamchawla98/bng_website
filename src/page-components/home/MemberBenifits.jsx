import React from "react";
import Image from "next/image";
import centeredImage from "@/app/images/memberBenifits.svg";

const BenefitItem = ({ title, description, position }) => (
  <div className={`absolute ${position} w-1/3 flex flex-col items-center`}>
    <div className="w-32 h-32 bg-purple-600 rounded-full flex flex-col items-center justify-center mb-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 15L3 9M3 9L9 3M3 9H15C18.3137 9 21 11.6863 21 15C21 18.3137 18.3137 21 15 21H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="text-white text-center mt-2">
        <div className="font-semibold text-[14px]">{title}</div>
      </div>
    </div>
    <p className={`text-gray-600 text-sm text-center ${position.includes('bottom') ? 'mt-4' : 'mb-4'}`}>
      {description}
    </p>
  </div>
);

function MemberBenefits() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Member Benefits
        </h2>

        <div className="relative h-[600px] ">
            <div className="absolute bg-red-400 right-0 max-w-[200px]">
            <BenefitItem
            title="Financial Protection"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            position=" left-0 top-0"
          /> 
            </div>
     
          <BenefitItem
            title="Financial Protection"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            position="left-0 bottom-0"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={centeredImage}
              alt="Member Benefits"
              width={185}
              height={400}
              className="object-contain"
            />
          </div>
          <BenefitItem
            title="Financial Protection"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            position="right-0 top-0"
          />
          <BenefitItem
            title="Financial Protection"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            position="right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
}

export default MemberBenefits;