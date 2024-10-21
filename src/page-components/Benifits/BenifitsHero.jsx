import Contactbg from "@/app/images/aboutUsBanner.png"
export const BenifitsHero = () => {
  return (
    <div className="relative h-[400px] bg-primary flex items-center justify-start pl-10" style={{ backgroundImage: `url(${Contactbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-white relative z-10">
          Benifits
        </h1>
        <h2 className="text-[52px] font-bold text-white relative z-10">
          The Benefits of Working with Reflect
        </h2>
      </div>
    </div>
  );
};