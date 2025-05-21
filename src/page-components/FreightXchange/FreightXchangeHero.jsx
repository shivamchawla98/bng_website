import Contactbg from "@/app/images/benifits/Freight-Xchange_Header.jpg"
export const FreightXchangeHero = () => {
  return (
    <div className="relative h-[400px] bg-primary flex items-center justify-start pl-10" style={{ backgroundImage: `url(${Contactbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col">
      <h3 className="text-5xl  font-light mb-4  text-white relative z-10">
      Where <span className="font-bold">Freight</span> Finds Its Way - 
        </h3>
        <h2 className="text-[52px]  text-white relative z-10">
        Instantly. <span className="font-bold">Globally.</span>
        </h2>
      </div>
    </div>
  );
};