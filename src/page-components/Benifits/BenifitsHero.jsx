import Contactbg from "@/app/images/benifits/Benefits_Banner.jpg"
export const BenifitsHero = () => {
  return (
    <div className="relative h-[400px] bg-primary flex items-center justify-start pl-10" style={{ backgroundImage: `url(${Contactbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col">
        <h3 className="text-5xl  font-light mb-4  text-white relative z-10">
          Benefits
        </h3>
        <h2 className="text-[52px] font-bold text-white relative z-10">
          Build <span className="font-light">Your</span>  Global Network!
        </h2>
      </div>
    </div>
  );
};