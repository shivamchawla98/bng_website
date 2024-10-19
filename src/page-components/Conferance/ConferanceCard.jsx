import { ChevronRight } from "lucide-react";
import Image from "next/image";
import conferance1 from "@/app/images/conferacegrid1.png";

// Modified ConferenceCard Component
export const ConferenceCard = ({ date, description, index, totalCards }) => {
  // Conditional styling for alternating cards and positioning
  const isEven = index % 2 === 0;

  // Move second card down by 20px, third card by 30px, and apply gray background to last card
  const cardPosition = index === 1 
    ? "translate-y-5" // Moves down by 20px
    : index === 2 
    ? "translate-y-12" // Moves down by 30px
    : "";

 
  return (
    <div className={`rounded-lg shadow-md overflow-hidden text-black ${cardPosition}`}>
      <Image 
        src={conferance1}
        alt="Conference" 
        className="w-full"
      />
      <div className="p-6">
        <p className={`font-semibold mb-2 text-black}`}>{date}</p>
        <p className={`mb-4 text-gray-100}`}>{description}</p>
        <button className="text-blue-600 hover:text-blue-800 flex items-center">
          Read more <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};