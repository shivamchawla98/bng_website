'use client';
import { useQuery, gql } from '@apollo/client';
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

// Mock data for local testing
const mockData = {
  publicSearchCompanies: [
    {
      id: '1',
      companyName: 'Tech Corp',
      legalName: 'Tech Corporation Inc.',
      logo: '/logos/tech-corp.png',
      locations: [
        { country: 'USA', city: 'New York' },
        { country: 'USA', city: 'San Francisco' },
      ],
    },
    {
      id: '2',
      companyName: 'Global Solutions',
      legalName: 'Global Solutions Ltd.',
      logo: '/logos/global-solutions.png',
      locations: [
        { country: 'UK', city: 'London' },
        { country: 'Canada', city: 'Toronto' },
        { country: 'Canada', city: 'Vancouver' },
      ],
    },
    {
      id: '3',
      companyName: 'Innovate LLC',
      legalName: 'Innovate Limited Liability Company',
      logo: '/logos/innovate-llc.png',
      locations: [{ country: 'India', city: 'Bangalore' }],
    },
  ],
};

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
    // skip: process.env.NODE_ENV === 'development',
  });

  // Log error to console if it exists
  if (error && process.env.NODE_ENV !== 'development') {
    console.error('Error loading statistics:', error.message);
  }

  // Define fallback stats
  const fallbackStats = [
    { id: 1, name: 'Members', stat: '100+', icon: member, change: '0', changeType: 'increase' },
    { id: 2, name: 'Countries', stat: '50+', icon: country, change: '0', changeType: 'increase' },
    { id: 3, name: 'Cities', stat: '200+', icon: cities, change: '0', changeType: 'increase' },
    { id: 4, name: 'Offices', stat: '300+', icon: office, change: '0', changeType: 'increase' },
  ];

  // Use mock data in development, actual data in production
  const effectiveData = process.env.NODE_ENV === 'development' ? mockData : data;

  // Process the data to calculate stats
  let stats = [
    { id: 1, name: 'Members', stat: '0', icon: member, change: '0', changeType: 'increase' },
    { id: 2, name: 'Countries', stat: '0', icon: country, change: '0', changeType: 'increase' },
    { id: 3, name: 'Cities', stat: '0', icon: cities, change: '0', changeType: 'increase' },
    { id: 4, name: 'Offices', stat: '0', icon: office, change: '0', changeType: 'increase' },
  ];

  if (effectiveData && effectiveData.publicSearchCompanies && effectiveData.publicSearchCompanies.length > 0) {
    const companies = effectiveData.publicSearchCompanies;

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
  } else if (!loading) {
    // Use fallback stats if no data or empty data and not loading
    stats = fallbackStats;
  }

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <dl className="mt-5 lg:absolute opacity-75 -left-28 -top-[100px] grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg bg-white px-3 py-3 sm:px-4 sm:py-4 shadow animate-pulse"
          >
            <dt>
              <div className="absolute rounded-md ml-4 p-1">
                <div className="h-8 w-8 lg:h-11 lg:w-11 bg-gray-200 rounded" />
              </div>
            </dt>
            <dd className="ml-16 sm:ml-24 flex items-baseline">
              <div className="h-6 w-16 bg-gray-200 rounded" />
            </dd>
            <p className="ml-16 sm:ml-24 truncate text-base sm:text-lg">
              <div className="h-5 w-20 bg-gray-200 rounded" />
            </p>
          </div>
        ))}
      </dl>
    </div>
  );

  // Handle loading state with skeleton loader
  if (loading && process.env.NODE_ENV !== 'development') {
    return <SkeletonLoader />;
  }

  return (
    <div className="max-w-7xl relative mx-auto px-4 sm:px-6">
      <dl className="mt-5 lg:absolute opacity-75 -left-28 -top-[100px] grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-3 py-3 sm:px-4 sm:py-4 shadow"
          >
            <dt>
              <div className="absolute rounded-md ml-4 p-1">
                <img
                  src={item.icon.src}
                  alt={item.name}
                  className="h-8 w-8 lg:h-11 lg:w-11"
                />
              </div>
            </dt>
            <dd className="ml-16 sm:ml-24 flex items-baseline">
              <p className="text-xl sm:text-2xl font-semibold text-primary">{item.stat}</p>
            </dd>
            <p className="ml-16 sm:ml-24 truncate text-base sm:text-lg font-medium text-gray-500">{item.name}</p>
          </div>
        ))}
      </dl>
    </div>
  );
}