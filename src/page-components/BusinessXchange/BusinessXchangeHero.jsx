import Contactbg from "@/app/images/benifits/BusinessXchange_Header.jpg"
export const BusinessXchangeHero = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] bg-primary flex items-center justify-start pl-10" style={{ backgroundImage: `url(${Contactbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col">
      <h3 className="text-3xl sm:text-3xl md:text-5xl font-light mb-4 text-white relative z-10">
      Unlock New Partnerships -
      
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white relative z-10">
        Exchange <span className="font-light">Real </span>Business.
        
        </h2>
      </div>
    </div>
  );
};