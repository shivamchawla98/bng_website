'use client';
import { useQuery, gql } from '@apollo/client';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import office from '../../../public/herosectionicon/offices.png';
import cities from '../../../public/herosectionicon/cities.png';
import member from '../../../public/herosectionicon/member.png';
import country from '../../../public/herosectionicon/contries.png';

// Define the GraphQL query
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Widget() {
  // Execute the GraphQL query
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

  // Process the data to calculate stats
  let stats = [
    { id: 1, name: 'Members', stat: '0', icon: member, change: '0', changeType: 'increase' },
    { id: 2, name: 'Countries', stat: '0', icon: country, change: '0', changeType: 'increase' },
    { id: 3, name: 'Cities', stat: '0', icon: cities, change: '0', changeType: 'increase' },
    { id: 4, name: 'Offices', stat: '0', icon: office, change: '0', changeType: 'increase' },
  ];

  if (data && data.publicSearchCompanies) {
    const companies = data.publicSearchCompanies;

    // Calculate total members (number of companies)
    const totalMembers = companies.length;

    // Calculate unique countries
    const countriesSet = new Set();
    companies.forEach((company) => {
      company.locations.forEach((location) => {
        countriesSet.add(location.country);
      });
    });
    const totalCountries = countriesSet.size;

    // Calculate unique cities
    const citiesSet = new Set();
    companies.forEach((company) => {
      company.locations.forEach((location) => {
        citiesSet.add(location.city);
      });
    });
    const totalCities = citiesSet.size;

    // Calculate total offices (sum of all locations)
    const totalOffices = companies.reduce((sum, company) => sum + company.locations.length, 0);

    // Update stats with calculated values
    stats = [
      { id: 1, name: 'Members', stat: `${totalMembers}+`, icon: member, change: '0', changeType: 'increase' },
      { id: 2, name: 'Countries', stat: `${totalCountries}+`, icon: country, change: '0', changeType: 'increase' },
      { id: 3, name: 'Cities', stat: `${totalCities}+`, icon: cities, change: '0', changeType: 'increase' },
      { id: 4, name: 'Offices', stat: `${totalOffices}+`, icon: office, change: '0', changeType: 'increase' },
    ];
  }

  // Handle loading state
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-gray-500">Loading statistics...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-red-600">Error loading statistics: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:mt-5">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-3 py-3 sm:px-4 sm:py-4 shadow"
          >
            <dt>
              <div className="absolute rounded-md ml-3 sm:ml-4 p-1">
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  width={48}
                  height={48}
                  sizes="(max-width: 640px) 10vw, 12vw"
                />
              </div>
            </dt>
            <dd className="ml-16 sm:ml-20 flex items-baseline">
              <p className="text-xl sm:text-2xl font-semibold text-primary">{item.stat}</p>
            </dd>
            <p className="ml-16 sm:ml-20 truncate text-base sm:text-lg font-medium text-gray-500">{item.name}</p>
          </div>
        ))}
      </dl>
    </div>
  );
}