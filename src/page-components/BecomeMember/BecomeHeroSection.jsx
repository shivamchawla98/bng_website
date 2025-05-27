import React from "react";
import { CheckCircle2 } from "lucide-react";
import Contactbg from "@/app/images/benifits/Pricing_Header.jpg"

const BecomeHeroSection = () => {
  return (

<>


    <div className="relative h-[300px] lg:h-[400px] bg-primary flex items-center justify-start pl-10" style={{ backgroundImage: `url(${Contactbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className="flex flex-col">
      <h3 className="text-2xl  md:text-5xl font-light mb-4 text-white relative z-10">
      Subscription  <span className="font-light"> Options</span> 
  
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white relative z-10">
       
        Membership <span className="font-light"> Built for Growth</span>
  
        </h2>
      </div>
    </div>


</>



  );
};

export default BecomeHeroSection;
