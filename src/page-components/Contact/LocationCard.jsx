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
              className="grid grid-cols-1 shadow-xl shadow-slate-500 rounded-lg my-16 xl:grid-cols-5"
            >
              <div className="col-span-full xl:col-span-3">
                <MapComponent address={person.location} />
              </div>

              <li
                className="flex flex-col gap-6 p-4 sm:gap-10 sm:flex-row sm:p-6 xl:col-span-2"
              >
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="aspect-[4/5] h-96 w-64 sm:h-96 sm:w-64 flex-none object-cover rounded-md"
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