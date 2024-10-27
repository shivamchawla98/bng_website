import Image from "next/image";
import about1 from "@/app/images/abou1.png";
import about2 from "@/app/images/about2.png";
import { FeatureCard } from "./FeatureCard";
const AboutSection = () => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-12">
            <div className="relative flex justify-center items-center">
              <div className="hidden lg:block absolute left-16 bottom-12 h-[350px] w-[400px] border-primary border-2 rounded-md"></div>
              <Image
                className="rounded-xl object-cover z-10"
                src={about1}
                height={350}
                alt="About Us Image 1"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-8">
              <h2 className="text-gray-900 text-4xl font-extrabold leading-normal text-center lg:text-start">
                About Company
              </h2>
              <p className="text-gray-500 text-base leading-relaxed text-center lg:text-start">
                At our company, innovation drives everything we do. We aim to
                blend tradition with technology, crafting solutions that are
                both cutting-edge and timeless. Our team is committed to
                delivering excellence in every project, big or small, ensuring
                client satisfaction is at the forefront of our mission. With a
                wealth of experience across various industries, we’ve built a
                reputation for quality, trust, and outstanding results. Join us
                on a journey to redefine what's possible in the world of
                business and construction{" "}
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-12">
            <div className="relative flex justify-center items-center lg:order-2">
              <div className="hidden lg:block absolute right-16 bottom-12 h-[350px] w-[400px] border-primary border-2 rounded-md"></div>
              <Image
                className="rounded-xl object-cover z-10"
                src={about2}
                height={350}
                alt="About Us Image 2"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-8">
              <p className="text-gray-500 text-base leading-relaxed text-center lg:text-start">
                We believe that the key to success lies in understanding our
                clients' unique needs. Our customer-first approach ensures that
                every interaction, from the initial consultation to project
                delivery, is seamless and efficient. We prioritize open
                communication, transparency, and collaboration, ensuring that
                each project exceeds expectations. By fostering strong
                relationships, we’ve created a loyal clientele who trusts us to
                handle their most challenging ventures. Your success is our
                priority, and we strive to be your partner in achieving
                greatness.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16  w-[100%] mx-auto px-4 bg-gray-50">
        <h2 className="text-[48px] text-center font-bold text-black">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <FeatureCard
            title="Appearanc"
            description="Professional development focused on presentation skills"
          />
          <FeatureCard
            title="Confidence"
            description="Build your professional confidence through expert guidance"
          />
          <FeatureCard
            title="Curiosity"
            description="Explore new ideas and innovations in your field"
          />
          <FeatureCard
            title="Appearance"
            description="Professional development focused on presentation skills"
          />
          <FeatureCard
            title="Confidence"
            description="Build your professional confidence through expert guidance"
          />
          <FeatureCard
            title="Curiosity"
            description="Explore new ideas and innovations in your field"
          />
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="w-full max-w-7xl px-4 mx-auto md:px-5 lg:px-5 ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-12">
            <div className="relative flex justify-center items-center">
              <div className="hidden lg:block absolute left-16 bottom-12 h-[350px] w-[400px] border-primary border-2 rounded-md"></div>
              <Image
                className="rounded-xl object-cover z-10"
                src={about1}
                height={350}
                alt="Why Us Image"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-8">
              <h2 className="text-gray-900 text-4xl font-extrabold leading-normal text-center lg:text-start">
                Why Us?
              </h2>
              <p className="text-gray-500 text-base leading-relaxed text-center lg:text-start">
                We believe that the key to success lies in understanding our
                clients' unique needs. Our customer-first approach ensures that
                every interaction, from the initial consultation to project
                delivery, is seamless and efficient. We prioritize open
                communication, transparency, and collaboration, ensuring that
                each project exceeds expectations. By fostering strong
                relationships, we’ve created a loyal clientele who trusts us to
                handle their most challenging ventures. Your success is our
                priority, and we strive to be your partner in achieving
                greatness.
              </p>
            </div>
          </div>

          {/* Fourth section */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            <div className="relative flex justify-center items-center lg:order-2">
              <div className="hidden lg:block absolute right-16 bottom-12 h-[350px] w-[400px] border-primary border-2 rounded-md"></div>
              <Image
                className="rounded-xl object-cover z-10"
                src={about2}
                height={350}
                alt="Vision Image"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-8">
              <h2 className="text-gray-900 text-4xl font-extrabold leading-normal text-center lg:text-start">
                Our Vision
              </h2>
              <p className="text-gray-500 text-base leading-relaxed text-center lg:text-start">
                Our vision is to be at the forefront of industry transformation,
                constantly innovating to bring sustainable, forward-thinking
                solutions to our clients. We aspire to create a future where our
                projects not only fulfill immediate goals but also contribute to
                long-term environmental and societal impact. By focusing on
                technology and sustainability, we aim to build a legacy that
                will inspire future generations. We envision a world where our
                work enhances communities and drives positive change globally.{" "}
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-16">
            <div className="relative flex justify-center items-center">
              <div className="hidden lg:block absolute left-16 bottom-12 h-[350px] w-[400px] border-primary border-2 rounded-md"></div>
              <Image
                className="rounded-xl object-cover z-10"
                src={about1}
                height={350}
                alt="Why Us Image"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-8">
              <h2 className="text-gray-900 text-4xl font-extrabold leading-normal text-center lg:text-start">
                Our Mission
              </h2>
              <p className="text-gray-500 text-base leading-relaxed text-center lg:text-start">
                We believe that the key to success lies in understanding our
                clients' unique needs. Our customer-first approach ensures that
                every interaction, from the initial consultation to project
                delivery, is seamless and efficient. We prioritize open
                communication, transparency, and collaboration, ensuring that
                each project exceeds expectations. By fostering strong
                relationships, we’ve created a loyal clientele who trusts us to
                handle their most challenging ventures. Your success is our
                priority, and we strive to be your partner in achieving
                greatness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
