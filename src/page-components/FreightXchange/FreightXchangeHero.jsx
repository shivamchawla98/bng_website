import Contactbg from "@/app/images/benifits/Benifits-Page-Banner-3.jpg"
export const FreightXchangeHero = () => {
  return (
    <div className="relative h-[400px] bg-primary flex items-center justify-start pl-10" style={{ backgroundImage: `url(${Contactbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-white relative z-10">
          Freight Xchange
        </h3>
        <h2 className="text-[52px] font-bold text-white relative z-10">
          Let’s Build Your Global Network!
        </h2>
      </div>
    </div>
  );
};