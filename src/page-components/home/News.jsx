import Image from "next/image";
import newsImg1 from "@/app/images/News.png";
import newsImg2 from "@/app/images/News.png";
import newsImg3 from "@/app/images/News.png";

const newsData = [
  {
    id: 1,
    src: newsImg1,
    alt: "News Item 1",
    description: "Discover the latest trends in logistics and supply chain management.",
    link: "#"
  },
  {
    id: 2,
    src: newsImg2,
    alt: "News Item 2",
    description: "How technology is transforming the freight industry for the better.",
    link: "#"
  },
  {
    id: 3,
    src: newsImg3,
    alt: "News Item 3",
    description: "Insights from industry experts on future logistics challenges.",
    link: "#"
  }
];

const News = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-black mb-8">Latest News</h2>

        {/* Grid with 3 columns for news cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map(({ id, src, alt, description, link }) => (
            <div key={id} className="rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 p-4">
              <div className="relative ">
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
