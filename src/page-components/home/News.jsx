import Image from "next/image";
import newsImg1 from "@/app/images/home/News-The-Future-of-Logistics.png";
import newsImg2 from "@/app/images/home/News-BNG-Welcomes-100-New-Members-in-Record-Time.png";
import newsImg3 from "@/app/images/home/News-Global-Freight-Trends.png";
import newsImg4 from "@/app/images/home/news4.jpg";

const newsData = [
  {
    id: 1,
    src: newsImg1,
    alt: "News Item 1",
    title: "The Future of Logistics: Embracing Digital Transformation",
    description:
      "Discover how advanced technologies like AI, IoT, and blockchain are reshaping logistics and supply chain management for a smarter future.",
    link: "#",
  },
  {
    id: 2,
    src: newsImg2,
    alt: "News Item 2",
    title: "BNG Welcomes 100 New Members in Record Time!",
    description:
      "Our network continues to grow rapidly, with over 100 new freight forwarders and logisticians joining this month. Explore the opportunities.",
    link: "#",
    top: "md:top-8", // Adjusted for responsive top positioning
  },
  {
    id: 3,
    src: newsImg3,
    alt: "News Item 3",
    title: "Global Freight Trends: Challenges and Opportunities in 2024",
    description:
      "Get insights into shifting global trade patterns, rising fuel costs, and how businesses can stay resilient in a dynamic market.",
    link: "#",
  },
  {
    id: 4,
    src: newsImg4,
    alt: "News Item 3",
    title: "BNG Expands Strategic Partnerships to Strengthen Global Trade Lanes",
    description:
      "BNG strengthens global trade by expanding strategic partnerships, enhancing route access, and creating new growth opportunities for network members worldwide.",
    link: "#",
    top: "md:top-8", // Adjusted for responsive top positioning
  },
];

const News = () => {
  return (
    <section className="py-14 md:py-20 bg-primaryBg relative">
      <div
        className="absolute top-0 left-8 w-[200px] h-[200px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #6853DB 10%, #6853DB 90%)",
          filter: "blur(100.8px)",
        }}
      ></div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#27293B] text-center mb-8 sm:mb-12 relative z-10">
            Latest <span className="text-primary">News</span>
          </h2>
          <h2
            className="absolute text-center top-[-30px] sm:top-[-40px] left-1/2 transform -translate-x-1/2 text-6xl sm:text-7xl md:text-8xl font-bold text-[#27293B] opacity-[3%] leading-none z-0"
            aria-hidden="true"
          >
            Latest News
          </h2>
        </div>
        
        {/* Grid with responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          {newsData.map(({ id, src, alt, title, description, link, top }) => (
            <div
              key={id}
              className={`relative rounded-lg overflow-hidden shadow-lg bg-white shadow-slate-200 transition-transform transform hover:scale-105 mx-auto w-full max-w-[350px] ${top || ""}`}
            >
              <div className="relative h-48 sm:h-56">
                <Image
                  src={src}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl text-[#27293B] font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 text-base sm:text-[18px]">{description}</p>
                <a href={link} className="text-indigo-500 hover:underline text-sm sm:text-base">
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;