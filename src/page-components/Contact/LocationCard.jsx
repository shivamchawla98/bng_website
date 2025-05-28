import { FaMobile, FaMailBulk } from "react-icons/fa";
import MapComponent from "./MapComponent";
import { Mail } from "lucide-react";
import indiaImg from "../../../public/contact_us/india.jpg";
import canadaImg from "../../../public/contact_us/Canada.jpg";
import usImg from "../../../public/contact_us/US.jpg";

const people = [
  {
    name: "Canada Office",
    role: "Headquarters",
    imageUrl: canadaImg.src,
    location: "12 Linden Dr, Cambridge, ON N3H 5L5, Canada",
    bio: "12 Linden Dr, Cambridge N3H5L5, Canada",
  },
  {
    name: "USA Office",
    role: "Branch Office",
    location: "1151 Walker Rd, Dover, DE 19904, USA",
    imageUrl: usImg.src,
    bio: "1151 Walker Rd Ste 100 Dover Kent 19904, USA",
  },
  {
    name: "India Office",
    role: "Branch Office",
    location: "Rasoolpur Nawada, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309",
    imageUrl: indiaImg.src,
    bio: "321, Tower C, Noida One IT Park, Sector 62 Noida 201309, (U.P.) India",
  },
];

export default function LocationCard() {
  return (
    <div className="py-24 md:py-20 lg:px-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <ul role="list" className="divide-y divide-gray-200 w-full">
          {people.map((person) => (
            <div 
              key={person.name}
              className="flex my-16   flex-wrap-reverse lg:flex-nowrap justify-center items-center shadow-xl shadow-slate-500 rounded-lg "
            >
              <div className="w-full p-4 lg:p-0 lg:w-2/3 xl:col-span-3">
                <MapComponent address={person.location} />
              </div>

              <li
                className="flex w-full lg:w-1/3 flex-col p-4 lg:p-0   sm:gap-10 sm:flex-row sm:py-6"
              >
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="aspect-[4/5] w-full lg:h-96 lg:w-64 flex-none object-cover rounded-md lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-tl-none lg:rouuneded-bl-none"
                />
                <div className="max-w-xl mt-6 sm:mt-10 pr-2 flex-auto">
                  <h3 className="text-2xl sm:text-3xl xl:text-4xl font-semibold tracking-tight text-primary">
                    {person.name}
                  </h3>
                  <p className="text-base sm:text-lg xl:text-xl text-gray-600 mt-2">
                    {person.role}
                  </p>
                  <p className="mt-4 text-base sm:text-lg xl:text-2xl text-gray-600">
                    {person.bio}
                  </p>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}