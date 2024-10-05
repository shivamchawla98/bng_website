import Image from "next/image";
import grid1 from "@/app/images/grid1.png";
import grid2 from "@/app/images/grid2.png";
import grid3 from "@/app/images/grid3.png";
import grid4 from "@/app/images/grid4.png";
import grid5 from "@/app/images/grid5.png";
import grid6 from "@/app/images/grid6.png";

const solutionsData = [
  {
    id: 1,
    src: grid1,
    alt: "Solution 1",
    heading: "Ocean Freight",
    description1: "Lorem ipsum is dummy text of the industry.",
    description2: "We provide the best logistics services globally.",
    heightClass: "h-56 lg:h-64 xl:h-auto"
  },
  {
    id: 2,
    src: grid2,
    alt: "Solution 2",
    heading: "Air Freight",
    description1: "Lorem ipsum is dummy text of the industry.",
    description2: "Fast and secure air transport services.",
    heightClass: "h-48 lg:h-56"
  },
  {
    id: 3,
    src: grid3,
    alt: "Solution 3",
    heading: "Land Transport",
    description1: "Lorem ipsum is dummy text of the industry.",
    description2: "Efficient land transportation solutions.",
    heightClass: "h-64 lg:h-72"
  },
  {
    id: 4,
    src: grid4,
    alt: "Solution 4",
    heading: "Rail Freight",
    description1: "Lorem ipsum is dummy text of the industry.",
    description2: "Cost-effective and reliable rail transport.",
    heightClass: "h-64 lg:h-72"
  },
  {
    id: 5,
    src: grid5,
    alt: "Solution 5",
    heading: "Warehouse Solutions",
    description1: "Lorem ipsum is dummy text of the industry.",
    description2: "Secure storage facilities and management.",
    heightClass: "h-80 lg:h-96"
  },
  {
    id: 6,
    src: grid6,
    alt: "Solution 6",
    heading: "Custom Solutions",
    description1: "Lorem ipsum is dummy text of the industry.",
    description2: "Tailored logistics solutions for your needs.",
    heightClass: "h-48 lg:h-56"
  }
];

const Solutions = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-black mb-8">Our Solutions</h2>

        {/* Grid with 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map(({ id, src, alt, heading, description1, description2, heightClass }) => (
            <div
              key={id}
              className={`grid ${heading === "Warehouse Solutions" ? "relative bottom-12  " : ""}`} // Apply relative and bottom margin only to Warehouse Solutions
            >
              <div className={`relative ${heightClass}`}>
                <Image
                  src={src}
                  className="rounded-lg w-full h-full object-cover"
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{heading}</h3>
                    <p className="text-sm">{description1}</p>
                    <p className="text-sm">{description2}</p>
                  </div>
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
