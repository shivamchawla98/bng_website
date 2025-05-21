import React from "react";
import { CheckCircle2 } from "lucide-react";
import Contactbg from "@/app/images/benifits/Benefits-Page-Banner-1.jpg"

const BecomeHeroSection = () => {
  return (

<>


    <div className="relative h-[400px] bg-primary flex items-center justify-start pl-10" style={{ backgroundImage: `url(${Contactbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className="flex flex-col">
        <h2 className="text-[52px] font-bold text-white relative z-10">
        Membership <span className="font-light"> Built for Growth</span>
        </h2>
        <h2 className="text-[52px] font-bold text-white relative z-10">
        <span className="font-light">Explore Our </span>Subscription  <span className="font-light"> Options</span> 

  
        </h2>
      </div>
    </div>


</>



  );
};

export default BecomeHeroSection;
