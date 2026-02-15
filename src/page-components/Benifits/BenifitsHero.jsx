import Contactbg from "@/app/images/benifits/Benefits_Banner.jpg";

export const BenifitsHero = () => {
  return (
    <div
      className="relative h-[300px] md:h-[400px] bg-primary flex items-center justify-start pl-4 sm:pl-6 md:pl-10"
      style={{
        backgroundImage: `url(${Contactbg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col">
        <h3
          className="text-2xl sm:text-2xl md:text-5xl font-light mb-4 text-white relative z-10"
        >
          Why the Top 1% Choose BNG
        </h3>
        <h2
          className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white relative z-10"
        >
          
          Membership <span className="font-light">That</span> Delivers More
        </h2>
      </div>
    </div>
  );
};