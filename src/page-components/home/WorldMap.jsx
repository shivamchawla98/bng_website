'use client';

import { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import backgroundImage from '@/app/images/OBJECTS.png';
import { gql } from '@apollo/client';
import 'react-tooltip/dist/react-tooltip.css';

// Dynamic imports for client-only rendering
const ComposableMap = dynamic(() => import('react-simple-maps').then((mod) => mod.ComposableMap), { ssr: false });
const Geographies = dynamic(() => import('react-simple-maps').then((mod) => mod.Geographies), { ssr: false });
const Geography = dynamic(() => import('react-simple-maps').then((mod) => mod.Geography), { ssr: false });
const Tooltip = dynamic(() => import('react-tooltip').then((mod) => mod.Tooltip), { ssr: false });

// GraphQL query
const SEARCH_COMPANIES_QUERY = gql`
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
      }
    }
  }
`;

// Mock data
const mockCompanies = [
  {
    id: '1',
    companyName: 'Tech Corp',
    legalName: 'Tech Corporation',
    logo: 'https://via.placeholder.com/50/FF5733/FFFFFF?text=TC',
    headquarters: { country: 'United States' },
    locations: [{ country: 'United States' }],
  },
  {
    id: '2',
    companyName: 'Innovate Ltd',
    legalName: 'Innovate Limited',
    logo: 'https://via.placeholder.com/50/33FF57/FFFFFF?text=IL',
    headquarters: { country: 'United Kingdom' },
    locations: [{ country: 'United Kingdom' }],
  },
  {
    id: '3',
    companyName: 'Global Solutions',
    legalName: 'Global Solutions Inc.',
    logo: 'https://via.placeholder.com/50/3357FF/FFFFFF?text=GS',
    headquarters: { country: 'United States' },
    locations: [{ country: 'United States' }],
  },
  {
    id: '4',
    companyName: 'Future Tech',
    legalName: 'Future Technologies',
    logo: 'https://via.placeholder.com/50/FF33A1/FFFFFF?text=FT',
    headquarters: { country: 'Germany' },
    locations: [{ country: 'Germany' }],
  },
  {
    id: '5',
    companyName: 'Asia Innovations',
    legalName: 'Asia Innovations Pte Ltd',
    logo: 'https://via.placeholder.com/50/33FFA1/FFFFFF?text=AI',
    headquarters: { country: 'Singapore' },
    locations: [{ country: 'Singapore' }],
  },
];

// Debounce utility
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [members, setMembers] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log('WorldMap component mounted');
  }, []);

  const { data, loading, error } = useQuery(SEARCH_COMPANIES_QUERY, {
    variables: {
      certifications: [],
      city: '',
      country: '',
      name: '',
      query: '',
      services: [],
      state: '',
    },
    skip: !isMounted,
  });

  useEffect(() => {
    if (!isMounted) return;

    console.log('Data:', data, 'Error:', error, 'Loading:', loading);
    let companies = [];

    if (!error && data && data.publicSearchCompanies) {
      companies = data.publicSearchCompanies || [];
      console.log('Using API data:', companies);
    } else {
      companies = mockCompanies;
      console.log('Using mock data:', companies);
    }

    const countryMap = new Map();

    companies.forEach((company) => {
      const country = company.headquarters?.country || company.locations?.[0]?.country || 'Unknown';
      if (!countryMap.has(country)) {
        countryMap.set(country, []);
      }
      countryMap.get(country).push({
        id: company.id,
        name: company.companyName || company.legalName || 'Unnamed Company',
        logo: company.logo || 'https://via.placeholder.com/50/CCCCCC/FFFFFF?text=NC',
        country,
      });
    });

    const membersData = Array.from(countryMap.entries()).map(([country, companies]) => ({
      country,
      companies,
    }));

    setMembers(membersData);
    console.log('Members data:', membersData);
  }, [data, error, isMounted]);

  const handleMouseEnter = useCallback(
    debounce((name, matchedCountry) => {
      if (matchedCountry) {
        setTooltipContent(matchedCountry);
        setHoveredCountry(matchedCountry);
      } else {
        setTooltipContent(null);
        setHoveredCountry(null);
      }
    }, 100),
    []
  );

  const getFillColor = (companyCount) => {
    if (companyCount >= 6) return '#6853DB';
    if (companyCount === 5) return '#7B66E3';
    if (companyCount > 0) return '#8E79EB';
    return '#B0BEC5';
  };

  if (!isMounted) {
    return (
      <section className="world-map-section">
        <div className="title-container">
          <h2 className="title-main">Worldwide Reach</h2>
          <h2 className="title-background" aria-hidden="true">
            Worldwide Reach
          </h2>
        </div>
        <div className="loading-text">Loading map...</div>
      </section>
    );
  }

  if (loading && !data) {
    return (
      <section className="world-map-section">
        <div className="title-container">
          <h2 className="title-main">Worldwide Reach</h2>
          <h2 className="title-background" aria-hidden="true">
            Worldwide Reach
          </h2>
        </div>
        <div className="loading-text">Loading...</div>
      </section>
    );
  }

  return (
    <section className="world-map-section">
      <div className="title-container">
        <h2 className="title-main">Worldwide Reach</h2>
        <h2 className="title-background" aria-hidden="true">
          Worldwide Reach
        </h2>
      </div>

      <div className="map-container">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 90,
            center: [0, 30],
          }}
          className="map"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const nameMap = {
                  'United States of America': 'United States',
                  'Russian Federation': 'Russian Federation',
                };
                const displayName = nameMap[geo.properties.name] || geo.properties.name;
                const matchedCountry = members.find(
                  (member) => member.country === displayName
                );
                const companyCount = matchedCountry ? matchedCountry.companies.length : 0;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => handleMouseEnter(displayName, matchedCountry)}
                    onMouseLeave={() => {
                      setTooltipContent(null);
                      setHoveredCountry(null);
                    }}
                    data-tooltip-id="country-tooltip"
                    style={{
                      default: {
                        fill: getFillColor(companyCount),
                        stroke: '#607D8B',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                      hover: {
                        fill: companyCount > 0 ? '#6853DB' : '#90A4AE',
                        stroke: '#455A64',
                        strokeWidth: 0.5,
                        outline: 'none',
                        cursor: 'pointer',
                      },
                      pressed: {
                        fill: companyCount > 0 ? '#7B66E3' : '#78909C',
                        stroke: '#37474F',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        <Tooltip
          id="country-tooltip"
          style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
          offset={10}
          place="top"
          float
        >
          {tooltipContent && (
            <div className="tooltip-content">
              {tooltipContent.country} ({tooltipContent.companies.length}{' '}
              {tooltipContent.companies.length === 1 ? 'Member' : 'Members'})
            </div>
          )}
        </Tooltip>
      </div>

      <style jsx>{`
        .world-map-section {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
          background-image: ${backgroundImage.src ? `url(${backgroundImage.src})` : 'none'};
          background-size: cover;
          background-repeat: no-repeat;
          min-height: 600px;
          max-height: 900px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .title-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          text-align: center;
   
        }

        .title-main {
          font-size: 40px;
          font-weight: bold;
          color: #27293b;
          margin: 0;
          position: relative;
          z-index: 10;
        }

        .title-background {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 80px;
          font-weight: bold;
          color: #27293b;
          opacity: 0.03;
          width: 100%;
          text-align: center;
          z-index: 2;
          pointer-events: none;
        }

        .map-container {
          width: 100%;
          max-width: 1200px;
          height: 690px;
          border-radius: 16px;
          padding: 0px;
        //   background: #ffffff;
          border: 1px solid transparent;
        //   border-image: linear-gradient(to right, #6853db, #7b66e3) 1;
          position: relative;
          top: -40px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;

        }

        .map {
          width: 100%;
          height: 100%;
          display: block;
        }

        .tooltip-content {
          // padding: 10px 12px;
          background: #ffffff;
          border-radius: 8px;
          font-size: 14px;
          color: #27293b;
        //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .loading-text {
          color: #27293b;
          font-size: 18px;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .world-map-section {
            padding: 32px 16px;
            min-height: 500px;
            max-height: 700px;
          }

          .map-container {
            height: 350px;
          }

          .title-main {
            font-size: 32px;
          }

          .:title-background {
            font-size: 64px;
          }
        }

        @media (max-width: 768px) {
          .world-map-section {
            padding: 24px 16px;
            min-height: 450px;
            max-height: 600px;
          }

          .map-container {
            height: 300px;
            padding: 16px;
          }

          .title-main {
            font-size: 28px;
          }

          .title-background {
            font-size: 56px;
          }
        }

        @media (max-width: 480px) {
          .world-map-section {
            padding: 16px 12px;
            min-height: 400px;
            max-height: 500px;
          }

          .map-container {
            height: 250px;
            padding: 12px;
          }

          .title-main {
            font-size: 24px;
          }

          .title-background {
            font-size: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default WorldMap;