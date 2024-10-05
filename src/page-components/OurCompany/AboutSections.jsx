// components/AboutSection.js

import Image from "next/image";
import about1 from "@/app/images/about1.jpg";
import about2 from "@/app/images/about2.jpg";
const AboutSection = () => {
  return (
    <section className="py-24 relative bg-white">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last gap-6">
            <div className="flex   md:min-w-[600px] justify-center items-start ">
              <Image
                className="rounded-xl object-cover"
                src={about1}
                height={500}
                alt="About Us Image 1"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex-col flex justify-center lg:items-start items-center gap-10">
            <div className="flex-col flex justify-center items-start gap-8">
              <div className="flex-col flex w-full justify-start lg:items-start items-center gap-3">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Empowering Each Other to Succeed
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Every project we've undertaken has been a collaborative
                  effort, where every person involved has left their mark.
                  Together, we've not only constructed buildings but also built
                  enduring connections that define our success story.
                </p>
              </div>
              <div className="flex w-full lg:justify-start justify-center items-center sm:gap-10 gap-5">
                <StatCard title="33+" subtitle="Years of Experience" />
                <StatCard title="125+" subtitle="Successful Projects" />
                <StatCard title="52+" subtitle="Happy Clients" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ title, subtitle }) => {
  return (
    <div className="flex-col flex justify-start items-start">
      <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
        {title}
      </h3>
      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
        {subtitle}
      </h6>
    </div>
  );
};

export default AboutSection;
