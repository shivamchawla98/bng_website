"use client";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import office from "../../../public/herosectionicon/offices.png";
import cities from "../../../public/herosectionicon/cities.png";
import member from "../../../public/herosectionicon/member.png";
import country from "../../../public/herosectionicon/contries.png";

const PUBLIC_SEARCH_COMPANIES = gql`
  query PublicSearchCompanies(
    $certifications: [String!]
    $city: String
    $country: String
    $name: String
    $query: String
    $services: [String!]
    $state: String
  ) {
    publicSearchCompanies(
      certifications: $certifications
      city: $city
      country: $country
      name: $name
      query: $query
      services: $services
      state: $state
    ) {
      id
      companyName
      legalName
      logo
      locations {
        country
        city
      }
    }
  }
`;

const mockData = {
  publicSearchCompanies: [
    {
      id: "1",
      companyName: "Tech Corp",
      legalName: "Tech Corporation Inc.",
      logo: "/logos/tech-corp.png",
      locations: [
        { country: "USA", city: "New York" },
        { country: "USA", city: "San Francisco" },
      ],
    },
    {
      id: "2",
      companyName: "Global Solutions",
      legalName: "Global Solutions Ltd.",
      logo: "/logos/global-solutions.png",
      locations: [
        { country: "UK", city: "London" },
        { country: "Canada", city: "Toronto" },
        { country: "Canada", city: "Vancouver" },
      ],
    },
    {
      id: "3",
      companyName: "Innovate LLC",
      legalName: "Innovate Limited Liability Company",
      logo: "/logos/innovate-llc.png",
      locations: [{ country: "India", city: "Bangalore" }],
    },
  ],
};

export default function StatsSection() {
  // Section uses py-16 lg:py-24 for consistency
  const { data, loading, error } = useQuery(PUBLIC_SEARCH_COMPANIES, {
    variables: {
      certifications: null,
      city: null,
      country: null,
      name: null,
      query: null,
      services: null,
      state: null,
    },
  });

  if (error && process.env.NODE_ENV !== "development") {
    console.error("Error loading statistics:", error.message);
  }

  const fallbackStats = [
    { id: 1, name: "Members", stat: "100+", icon: member },
    { id: 2, name: "Countries", stat: "50+", icon: country },
    { id: 3, name: "Cities", stat: "200+", icon: cities },
    { id: 4, name: "Offices", stat: "300+", icon: office },
  ];

  const effectiveData =
    process.env.NODE_ENV === "development" ? mockData : data;

  let stats = [
    { id: 1, name: "Members", stat: "0", icon: member },
    { id: 2, name: "Countries", stat: "0", icon: country },
    { id: 3, name: "Cities", stat: "0", icon: cities },
    { id: 4, name: "Offices", stat: "0", icon: office },
  ];

  if (
    effectiveData &&
    effectiveData.publicSearchCompanies &&
    effectiveData.publicSearchCompanies.length > 0
  ) {
    const companies = effectiveData.publicSearchCompanies;

    const totalMembers = companies.length;

    const countriesSet = new Set();
    companies.forEach((company) => {
      company.locations.forEach((location) => {
        countriesSet.add(location.country);
      });
    });
    const totalCountries = countriesSet.size;

    const citiesSet = new Set();
    companies.forEach((company) => {
      company.locations.forEach((location) => {
        citiesSet.add(location.city);
      });
    });
    const totalCities = citiesSet.size;

    const totalOffices = companies.reduce(
      (sum, company) => sum + company.locations.length,
      0,
    );

    stats = [
      { id: 1, name: "Members", stat: `${totalMembers}+`, icon: member },
      { id: 2, name: "Countries", stat: `${totalCountries}+`, icon: country },
      { id: 3, name: "Cities", stat: `${totalCities}+`, icon: cities },
      { id: 4, name: "Offices", stat: `${totalOffices}+`, icon: office },
    ];
  } else if (!loading) {
    stats = fallbackStats;
  }

  const SkeletonLoader = () => (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white px-6 py-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="h-14 w-14 bg-gray-200 rounded-xl" />
                </div>
                <div className="flex-1">
                  <div className="h-8 w-16 bg-gray-200 rounded mb-2" />
                  <div className="h-5 w-20 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  if (loading && process.env.NODE_ENV !== "development") {
    return <SkeletonLoader />;
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl bg-white px-6 py-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors duration-300">
                    <img
                      src={item.icon.src}
                      alt={item.name}
                      className="h-10 w-10 md:h-12 md:w-12"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {item.stat}
                  </p>
                  <p className="text-sm md:text-base font-medium text-gray-600">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
