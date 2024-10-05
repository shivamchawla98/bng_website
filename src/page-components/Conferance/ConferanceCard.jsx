import { ChevronRight } from "lucide-react";
import Image from "next/image";
import conferance1 from "@/app/images/conferacegrid1.png"
export const ConferenceCard = ({ date, description }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image 
        src={conferance1}
        alt="Conference" 
        className="w-full"
      />
      <div className="p-6">
        <p className="font-semibold mb-2 text-gray-400">{date}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-blue-600 hover:text-blue-800 flex items-center">
          Read more <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );