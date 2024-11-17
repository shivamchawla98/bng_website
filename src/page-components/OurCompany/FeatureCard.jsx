import conferance1 from "@/app/images/Appearance.svg";
import Image from "next/image";

export const FeatureCard = ({ title, description, onClick }) => (
  <div
    className="flex flex-col items-center p-6 text-center cursor-pointer"
 >
    <Image src={conferance1} width={70} />
    <h3 className="text-xl text-black font-semibold mt-2">{title}</h3>
    <p className="text-gray-600 m-0">{description}</p>
  </div>
);
