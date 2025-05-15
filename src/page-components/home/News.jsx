import Image from "next/image";
import newsImg1 from "@/app/images/home/News-The-Future-of-Logistics.png";
import newsImg2 from "@/app/images/home/News-BNG-Welcomes-100-New-Members-in-Record-Time.png";
import newsImg3 from "@/app/images/home/News-Global-Freight-Trends.png";

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
    top: "2rem", // This will push the second card down by 20px
  },
  {
    id: 3,
    src: newsImg3,
    alt: "News Item 3",
    title: "Global Freight Trends: Challenges and Opportunities in 2024",
    description:
      "Get insights into shifting global trade patterns, rising fuel costs, and how businesses can stay resilient in a dynamic market.",
    link: "#",
    top: "4rem", // This will push the third card down by 30px
  },
];

const News = () => {
  return (
    <section className="py-14 md:min-h-[600px] h-[800px] bg-primaryBg relative">
      <div
        className="absolute top-0 left-8 w-[200px] h-[200px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #6853DB 10%, #6853DB 90%)",

          filter: "blur(100.8px)",
        }}></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="relative">
          <h2 className="text-[60px] font-bold  text-[#27293B] text-center mb-12 relative z-10">
            Latest <span className="text-[#46349a]">News</span> 
          </h2>
          <h2
            className="absolute text-center top-[-60px] md:top-[-30px] md:left-[32%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true">
            Latest News
          </h2>
        </div>
        {/* Grid with 3 columns for news cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {newsData.map(({ id, src, alt, title, description, link, top }) => (
            <div
              key={id}
              className={`relative rounded-lg overflow-hidden shadow-lg bg-white shadow-slate-200 transition-transform transform hover:scale-105 px-2 max-w-[350px] py-4`}
              style={{ top: top || "0px" }} // Apply the top offset dynamically
            >
              <div className="relative">
                <Image
                  src={src}
                  alt={alt}
                  layout="contain"
                  objectFit="contain"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[#27293B] font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 text-[18px]">{description}</p>
                <a href={link} className="text-blue-500 hover:underline">
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
