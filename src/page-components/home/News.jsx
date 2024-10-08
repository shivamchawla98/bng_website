import Image from "next/image";
import newsImg1 from "@/app/images/News.png";
import newsImg2 from "@/app/images/News.png";
import newsImg3 from "@/app/images/News.png";

const newsData = [
  {
    id: 1,
    src: newsImg1,
    alt: "News Item 1",
    description:
      "Discover the latest trends in logistics and supply chain management.",
    link: "#",
  },
  {
    id: 2,
    src: newsImg2,
    alt: "News Item 2",
    description:
      "How technology is transforming the freight industry for the better.",
    link: "#",
    top: "2rem", // This will push the second card down by 20px
  },
  {
    id: 3,
    src: newsImg3,
    alt: "News Item 3",
    description:
      "Insights from industry experts on future logistics challenges.",
    link: "#",
    top: "4rem", // This will push the third card down by 30px
  },
];

const News = () => {
  return (
    <section className="py-12 md:min-h-[600px] bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-black mb-8">
          Latest News
        </h2>

        {/* Grid with 3 columns for news cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map(({ id, src, alt, description, link, top }) => (
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
                <p className="text-gray-700 mb-4">{description}</p>
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
