import Contactbg from "@/app/images/aboutUsBanner.png"
export const AboutUsHero = () => {
  return (
    <div className="relative h-[400px] bg-primary flex items-center justify-start pl-10" style={{ backgroundImage: `url(${Contactbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-white relative z-10">
          Contact Us
        </h1>
        <h2 className="text-[52px] font-bold text-white relative z-10">
          We'd love to hear from You.
        </h2>
      </div>
    </div>
  );
};