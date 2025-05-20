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
    bio: "12 Linden Dr, Cambridge N3H5L5, Canada",
  },
  {
    name: "USA Office",
    role: "",
    imageUrl: usImg.src,
    bio: "1151 Walker Rd Ste 100 Dover Kent 19904, USA",
  },
  {
    name: "India Office",
    role: "",
    imageUrl: indiaImg.src,
     bio: "321, Tower C, Noida One IT PARK, SECTOR 62 NOIDA 201309, UTTAR PRADESH, INDIA",
  },
  // More people...
];

export default function LocationCard() {
  return (
    <div className="bg-white  py-24 md:py-20 lg:px-40">
      <div className="mx-auto grid max-w-8xl ">
        <ul role="list" className="divide-y divide-gray-200 w-full">
          {people.map((person) => (
            <div className=" grid grid-cols-1  px-6 first:pt-0 last:pb-0  py-12  xl:grid-cols-5">
              <div className=" col-span-full xl:col-span-3">
                <MapComponent address="Rasoolpur Nawada, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309" />
              </div>

              <li
                key={person.name}
                className="flex  flex-col gap-10  first:pt-0 last:pb-0 sm:flex-row col-span-2"
              >
                <img
                  alt=""
                  src={person.imageUrl}
                  className="aspect-[4/5] h-96 w-64  flex-none rounded-tr-2xl rounded-br-2xl object-cover"
                />
                <div className="max-w-xl relative flex-auto">
                  <h3 className="text-4xl font-semibold tracking-tight text-primary">
                    {person.name}
                  </h3>
                  <p className="text-xl text-gray-600">{person.role}</p>
                  <p className="mt-6 text-2xl text-gray-600">{person.bio}</p>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
