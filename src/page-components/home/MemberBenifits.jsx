import React from "react";
import Image from "next/image";
import centeredImage from "@/app/images/memberBenifits.svg";
import handShake from "@/app/images/handSHake.svg";

function MemberBenefits() {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-black font-bold text-center mb-12">
          Member Benefits
        </h2>

        <div className="relative hidden  md:h-[600px] top-10   w-max mx-auto md:flex flex-col md:flex-row justify-center items-center">
          <Image
            src={centeredImage}
            alt="Member Benefits"
            width={185}
            height={400}
            className="object-contain md:block hidden relative"
          />

          <div
            className={`absolute right-[70%] top-0  w-[300px] flex flex-col items-center`}
          >
            <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center">
              <Image
                src={handShake}
                alt="Member Benefits"
                className="object-contain md:block hidden relative"
              />
              <div className="text-white text-center mt-2">
                <div className="font-semibold text-[14px] text-${textAlign}">
                  Financial Protection
                </div>
              </div>
            </div>
            <p className={`text-gray-600 text-sm text-left mt-4 }`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <div
            className={`absolute left-[80%] top-10  w-[300px] flex flex-col items-center`}
          >
            <p className={`text-gray-600 text-sm text-right mt-4 }`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>

            <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center">
              <Image
                src={handShake}
                alt="Member Benefits"
                className="object-contain md:block hidden relative"
              />
              <div className="text-white text-center mt-2">
                <div className="font-semibold text-[14px] text-${textAlign}">
                  Financial Protection
                </div>
              </div>
            </div>
          </div>

          <div
            className={`absolute right-[70%] bottom-10  w-[300px] flex flex-col items-center`}
          >
            <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center">
              <Image
                src={handShake}
                alt="Member Benefits"
                className="object-contain md:block hidden relative"
              />
              <div className="text-white text-center mt-2">
                <div className="font-semibold text-[14px] text-${textAlign}">
                  Financial Protection
                </div>
              </div>
            </div>
            <p className={`text-gray-600 text-sm text-left mt-4 }`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <div
            className={`absolute left-[80%] bottom-0  w-[300px] flex flex-col items-center`}
          >
            <p className={`text-gray-600 text-sm text-right mt-4 }`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>

            <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center">
              <Image
                src={handShake}
                alt="Member Benefits"
                className="object-contain md:block hidden relative"
              />
              <div className="text-white text-center mt-2">
                <div className="font-semibold text-[14px] text-${textAlign}">
                  Financial Protection
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:hidden  md:h-[600px] top-10   w-max mx-auto flex flex-col  justify-center items-center">
       

       
        <div
            className={` w-[300px] flex flex-col items-center`}
          >
            <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center">
              <Image
                src={handShake}
                alt="Member Benefits"
                className="object-contain md:block hidden relative"
              />
              <div className="text-white text-center mt-2">
                <div className="font-semibold text-[14px] text-${textAlign}">
                  Financial Protection
                </div>
              </div>
            </div>
            <p className={`text-gray-600 text-sm text-left mt-4 }`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <div
            className={` w-[300px] flex flex-col items-center`}
          >
            <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center">
              <Image
                src={handShake}
                alt="Member Benefits"
                className="object-contain md:block hidden relative"
              />
              <div className="text-white text-center mt-2">
                <div className="font-semibold text-[14px] text-${textAlign}">
                  Financial Protection
                </div>
              </div>
            </div>
            <p className={`text-gray-600 text-sm text-left mt-4 }`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <div
            className={` w-[300px] flex flex-col items-center`}
          >
            <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center">
              <Image
                src={handShake}
                alt="Member Benefits"
                className="object-contain md:block hidden relative"
              />
              <div className="text-white text-center mt-2">
                <div className="font-semibold text-[14px] text-${textAlign}">
                  Financial Protection
                </div>
              </div>
            </div>
            <p className={`text-gray-600 text-sm text-left mt-4 }`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <div
            className={` w-[300px] flex flex-col items-center`}
          >
            <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center">
              <Image
                src={handShake}
                alt="Member Benefits"
                className="object-contain md:block hidden relative"
              />
              <div className="text-white text-center mt-2">
                <div className="font-semibold text-[14px] text-${textAlign}">
                  Financial Protection
                </div>
              </div>
            </div>
            <p className={`text-gray-600 text-sm text-left mt-4 }`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberBenefits;
