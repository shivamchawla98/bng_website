import React from "react";
import Image from "next/image";
// You can replace these images with actual icons/images
import icon1 from "@/app/images/icon1.svg";
import icon2 from "@/app/images/icon1.svg";
import icon3 from "@/app/images/icon1.svg";
import icon4 from "@/app/images/icon1.svg";
import icon5 from "@/app/images/icon1.svg";
import icon6 from "@/app/images/icon1.svg";
import benifitBackground from "@/app/images/benef_uper.jpg";

function MemberBenefits() {
  return (
    <div
      className="relative bg-white py-20"
      style={{
        backgroundImage: `url(${benifitBackground.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover", // You can set 'auto' if you don't want it to cover fully
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}>
      {/* Curved background */}
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-blue-900 transform -skew-y-3 origin-top" />

      {/* Content Section */}
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[60px] font-bold text-gray-900 mb-4">
          Member Benefits
        </h2>
        <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
          The key point of membership is to grow your business. By keeping
          business within the group, X2 Logistics Networks can operate as a
          unified global identity with working partnerships and the ability to
          develop new business.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Benefit Item */}
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              Trusted and Professional Freight Forwarding Partners
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              Financial Protection
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              Limited Membership Per Market
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              Free PR/Marketing Opportunities and Services{" "}
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              Professional Assistance with Business Development
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              Participate in the Annual X2 Conference
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              Strategic Partnerships
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              24/7 Customer Service Support{" "}
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              Professional Assistance with Business Development
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              Participate in the Annual X2 Conference
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              Strategic Partnerships
            </h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center rounded-full bg-white w-[120px] h-[120px]">
              <Image src={icon1} alt="Icon 1" className=" w-16 h-16" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 md:max-w-[200px]">
              24/7 Customer Service Support{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberBenefits;
