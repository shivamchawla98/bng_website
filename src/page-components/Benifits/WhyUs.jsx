import Image from "next/image";
import grid1 from "../../../public/why_us/Marketing & PR.png";
import grid2 from "../../../public/why_us/support 247.png";
import grid3 from "../../../public/why_us/Annual Meetings.png";
import grid4 from "../../../public/why_us/Trade directory.png";
import grid5 from "../../../public/why_us/Advanced Tools.jpg";
import grid7 from "../../../public/why_us/Live Talk.png";
import grid8 from "../../../public/why_us/Industry Surveys.png";
import grid9 from "../../../public/why_us/Strict Selection Process.png";
import { Crown, Briefcase, ShieldCheck, BadgeCheck, Eye, Globe2, Headset, Handshake } from "lucide-react";

const solutionsData = [
  {
    id: 1,
    src: grid9,
    alt: "Built for the Top 1%",
    heading: "Built for the Top 1%",
    description1: "BNG is intentionally selective. Limited members per country ensure serious partnerships, not overcrowded competition.",
    heightClass: "h-56 lg:h-64 xl:h-auto",
    icon: <Crown size={46} />,
  },
  {
    id: 2,
    src: grid8,
    alt: "Real Business, Not Noise",
    heading: "Real Business, Not Noise",
    description1: "Our proprietary Business Xchange and Freight Xchange connect members through structured shipment queries and published trade-lane rates—focused on conversions, not mass lead sharing.",
    heightClass: "h-48 lg:h-56",
    icon: <Briefcase size={46} />,
  },
  {
    id: 3,
    src: grid1,
    alt: "Trust-First Network",
    heading: "Trust-First Network",
    description1: "Each Elite member benefits from USD 50,000 payment protection, creating confidence to trade and collaborate globally.",
    heightClass: "h-64 lg:h-72",
    icon: <ShieldCheck size={46} />,
  },
  {
    id: 4,
    src: grid3,
    alt: "Quality Over Quantity",
    heading: "Quality Over Quantity",
    description1: "Every member is vetted. No open access. No dilution. BNG grows with intent, protecting the value of every connection.",
    heightClass: "h-64 lg:h-72",
    icon: <BadgeCheck size={46} />,
  },
  {
    id: 5,
    src: grid5,
    alt: "Powerful Member Visibility",
    heading: "Powerful Member Visibility",
    description1: "Members get premium company profiles, prioritized directory placement, and visibility at global exhibitions—without extra cost.",
    heightClass: "h-80 lg:h-96",
    icon: <Eye size={46} />,
  },
  {
    id: 6,
    src: grid4,
    alt: "Country-Level Exclusivity",
    heading: "Country-Level Exclusivity",
    description1: "Limited representation per country ensures members aren't competing internally for the same business.",
    heightClass: "h-64 lg:h-72",
    icon: <Globe2 size={46} />,
  },
  {
    id: 7,
    src: grid2,
    alt: "Human Support That Delivers",
    heading: "Support That Delivers",
    description1: "Award-winning, 5-star member support with dedicated relationship managers—not automated ticket systems.",
    heightClass: "h-64 lg:h-72",
    icon: <Headset size={46} />,
  },
  {
    id: 8,
    src: grid7,
    alt: "Global Collaboration",
    heading: "Global Collaboration",
    description1: "BNG is designed to promote cooperation, long-term partnerships, and trust—eliminating destructive price wars common in large networks.",
    heightClass: "h-80 lg:h-96",
    icon: <Handshake size={46} />,
  },
];

const Solutions = () => {
  return (
    <section className="py-14 relative overflow-hidden">
      <div className="max-w-8xl lg:mx-24 mx-auto px-4 sm:px-6 lg:px-8 lg:my-8 relative z-10">
        <div className="relative">
          <h2 className="text-4xl lg:text-[55px] font-bold text-[#27293B] text-center mb-16 relative z-10">
            Why <span className="text-primary">Us?</span>
          </h2>
          <h2
            className="absolute text-center text-5xl top-[-30px] left-[26%] md:left-[40%] lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true"
          >
            Why Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsData.map(({ id, src, alt, heading, description1, icon, heightClass }) => (
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
                <div className="self-start p-2 rounded-full" />
                <div className="transform transition-all duration-300 translate-y-8 group-hover:translate-y-0">
                  <div className="flex items-center justify-start gap-2 mb-4">
                    {icon}
                    <h3 className="text-2xl font-bold">{heading}</h3>
                  </div>
                  <p className="text-base max-h-0 font-bold group-hover:max-h-40 overflow-hidden transition-all duration-300">
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
