import Image from "next/image";
import grid1 from "../../../public/why_us/Marketing & PR.png";
import grid2 from "../../../public/why_us/support 247.png";
import grid3 from "../../../public/why_us/Annual Meetings.png";
import grid4 from "../../../public/why_us/Trade directory.png";
import grid5 from "../../../public/why_us/Advanced Tools.png";
import grid6 from "../../../public/why_us/Real-Time Chat.png";
import grid7 from "../../../public/why_us/Live Talk.png"; 
import grid8 from "../../../public/why_us/Industry Surveys.png"; 
import grid9 from "../../../public/why_us/Strict Selection Process.png";

import logo1 from "@/app/images/logos/why-us/PR.png";
import logo2 from "@/app/images/logos/why-us/24-7.png";
import logo3 from "@/app/images/logos/why-us/Meetings.png";
import logo4 from "@/app/images/logos/why-us/Trade-Directory.png";
import logo5 from "@/app/images/logos/why-us/Advanced-Tool.png";
import logo6 from "@/app/images/logos/why-us/real-time-chat.png";
import logo7 from "@/app/images/logos/why-us/Live-talk.png";
import logo8 from "@/app/images/logos/why-us/survey.png";
import logo9 from "@/app/images/logos/why-us/survey.png";
import shield from "../../../public/why_us/shield.png";

import Background from "@/app/images/home/WhyUs-Background.webp"; // Using the ship image from your structure


const solutionsData = [
  {
    id: 1,
    src: grid1,
    alt: "Solution 1",
    heading: "Marketing & PR",
    description1:
      "Expand your business visibility not only within the network but also on a global B2B portal—all included at no extra cost..",

    heightClass: "h-56 lg:h-64 xl:h-auto",
    logo: logo1,
  },
  {
    id: 2,
    src: grid2,
    alt: "Solution 2",
    heading: "24/7 Support",
    description1:
      "Our dedicated support team is available 24/7, 365 days a year. Reach out anytime—by call, message, or email—wherever you are in the world.",

    heightClass: "h-48 lg:h-56",
    logo: logo2,
  },
  {
    id: 3,
    src: grid3,
    alt: "Solution 3",
    heading: "Annual Meetings",
    description1:
      "Attend our grand symposium to meet partners and clients in person, fostering strong connections and increasing your visibility within the industry.",
    description2: "Efficient land transportation solutions.",
    heightClass: "h-64 lg:h-72",
    logo: logo3,
  },
  {
    id: 4,
    src: grid4,
    alt: "Solution 4",
    heading: "Trade Directory",
    description1:
      "Access a fully digital directory of global exporters, importers, and logistics professionals, connecting you instantly with key players worldwide.",
    description2: "Cost-effective and reliable rail transport.",
    heightClass: "h-64 lg:h-72",
    logo: logo4,
  },
  {
    id: 5,
    src: grid5,
    alt: "Solution 5",
    heading: "Advanced Tools",
    description1:
      "Our technology-centered platform provides essential tools in one place, maximizing the benefits of your membership.",
    description2: "Secure storage facilities and management.",
    heightClass: "h-80 lg:h-96",
    logo: logo5,
  },
  {
    id: 6,
    src: grid6,
    alt: "Solution 6",
    heading: "Real-Time Chat",
    description1:
      "Enjoy seamless, real-time chat functionality that enables fast, synchronized communication, enhancing networking efficiency.",
    description2: "Tailored logistics solutions for your needs.",
    heightClass: "h-48 lg:h-56",
    logo: logo6,
  },
  {
    id: 7,
    src: grid7,
    alt: "Solution 4",
    heading: "Live Talk",
    description1:
      "Engage in virtual meetings on a platform that connects you to thousands of industry professionals worldwide, 24/7. Network, collaborate, and grow your business with ease.",

    heightClass: "h-64 lg:h-72",
    logo: logo7,
  },
  {
    id: 8,
    src: grid8,
    alt: "Solution 5",
    heading: "Industry Surveys",
    description1:
      "Receive valuable insights from network surveys that keep you informed about market trends and industry benchmarks, helping you stay competitive and informed.",
    description2: "Secure storage facilities and management.",
    heightClass: "h-80 lg:h-96",
    logo: logo8,
  },
  {
    id: 9,
    src: grid9,
    alt: "Solution 5",
    heading: "Strict Selection Process",
    description1:
      "BNG ensures that only reliable and trustworthy companies join the network through a rigorous selection process.",
    description2: "Secure storage facilities and management.",
    heightClass: "h-80 lg:h-96",
    logo: shield,
  },
];

const Solutions = () => {
  return (
    <section className="py-14 relative overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={Background}
          alt="Ship background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div> */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
        <h2  className="text-[55px] font-bold  text-[#27293B] text-center mb-8 relative z-10">
            Why <span className="text-primary">Us?</span> 
          </h2>
          <h2
            className="absolute text-center top-[-30px] md:left-[35%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true">
            Why Us?
          </h2>
          <div className="flex w-[100%] justify-center ">
          <p className=" text-sm text-gray-500 tracking-widest text-center mb-10 w-[80%] ">
            With BNG, receive comprehensive marketing support, 24/7 assistance,
            and participate in live industry events. Access a global trade
            directory, advanced tools, and real-time communication features to
            drive meaningful connections and business growth.
          </p>
        </div>
        </div>

        {/* Grid with 3 columns */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map(({ id, src, alt, heading, description1, logo }) => (
            <div
              key={id}
              className="relative aspect-square overflow-hidden group rounded-lg shadow-lg cursor-pointer"
            >
              <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <Image
                  src={logo}
                  alt="Logo"
                  width={60}
                  height={60}
                  className="self-start bg-white p-2 rounded-full"
                />
                <div className="transform transition-all duration-300 translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold mb-2">
                    {heading}
                  </h3>
                  <p className="text-sm max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300">
                    {description1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
