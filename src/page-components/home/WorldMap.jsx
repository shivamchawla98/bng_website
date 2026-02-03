'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { ZoomIn, ZoomOut, Search, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [mapConfig, setMapConfig] = useState({
    scale: 100,
    center: [0, -10],
  });
  const [zoom, setZoom] = useState(100);
  const mapContainerRef = useRef(null);


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

  useEffect(() => {
    const updateMapConfig = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setMapConfig(prev => ({ ...prev, scale: zoom + 10 }));
      } else {
        setMapConfig(prev => ({ ...prev, scale: zoom }));
      }
    };

    updateMapConfig();
    window.addEventListener('resize', updateMapConfig);
    return () => window.removeEventListener('resize', updateMapConfig);
  }, [zoom]);

  useEffect(() => {
    const mapContainer = mapContainerRef.current;
    if (!mapContainer) return;

    let isDragging = false;

    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleMouseDown = (e) => {
      // Only prevent if clicking on SVG elements (not control buttons)
      if (e.target.closest('.zoom-controls, .pan-controls, .search-section')) {
        return; // Allow clicks on control buttons
      }
      isDragging = true;
      e.preventDefault();
      e.stopPropagation();
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
      // Allow mousemove for tooltips when not dragging
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const preventTouch = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Prevent scroll/wheel zoom completely
    mapContainer.addEventListener('wheel', preventScroll, { passive: false, capture: true });
    mapContainer.addEventListener('mousewheel', preventScroll, { passive: false, capture: true });
    mapContainer.addEventListener('DOMMouseScroll', preventScroll, { passive: false, capture: true });
    
    // Prevent drag interactions
    mapContainer.addEventListener('mousedown', handleMouseDown, { capture: true });
    mapContainer.addEventListener('mousemove', handleMouseMove, { capture: true });
    mapContainer.addEventListener('mouseup', handleMouseUp, { capture: true });
    mapContainer.addEventListener('mouseleave', handleMouseUp);
    
    // Prevent touch interactions completely
    mapContainer.addEventListener('touchstart', preventTouch, { passive: false, capture: true });
    mapContainer.addEventListener('touchmove', preventTouch, { passive: false, capture: true });
    mapContainer.addEventListener('touchend', preventTouch, { passive: false, capture: true });
    
    // Prevent native drag
    mapContainer.addEventListener('dragstart', preventScroll, { capture: true });
    mapContainer.addEventListener('drag', preventScroll, { capture: true });

    return () => {
      mapContainer.removeEventListener('wheel', preventScroll, true);
      mapContainer.removeEventListener('mousewheel', preventScroll, true);
      mapContainer.removeEventListener('DOMMouseScroll', preventScroll, true);
      mapContainer.removeEventListener('mousedown', handleMouseDown, true);
      mapContainer.removeEventListener('mousemove', handleMouseMove, true);
      mapContainer.removeEventListener('mouseup', handleMouseUp, true);
      mapContainer.removeEventListener('mouseleave', handleMouseUp);
      mapContainer.removeEventListener('touchstart', preventTouch, true);
      mapContainer.removeEventListener('touchmove', preventTouch, true);
      mapContainer.removeEventListener('touchend', preventTouch, true);
      mapContainer.removeEventListener('dragstart', preventScroll, true);
      mapContainer.removeEventListener('drag', preventScroll, true);
    };
  }, [isMounted]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 20, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 20, 60));
  };

  const handlePanUp = () => {
    setMapConfig(prev => ({ ...prev, center: [prev.center[0], prev.center[1] + 10] }));
  };

  const handlePanDown = () => {
    setMapConfig(prev => ({ ...prev, center: [prev.center[0], prev.center[1] - 10] }));
  };

  const handlePanLeft = () => {
    setMapConfig(prev => ({ ...prev, center: [prev.center[0] - 10, prev.center[1]] }));
  };

  const handlePanRight = () => {
    setMapConfig(prev => ({ ...prev, center: [prev.center[0] + 10, prev.center[1]] }));
  };

  const handleSearch = () => {
    // Placeholder for future slot availability search
    console.log('Search for available membership slots');
  };

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
          <h2  className="text-[55px] font-bold  text-[#27293B] text-center mb-12 relative z-10">Worldwide <span className="text-[#6853DB]">Reach</span> </h2>
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
    <section
          className="world-map-section py-16 lg:py-24"
        >

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center w-7xl mb-12 relative">
    <h2 className="text-4xl lg:text-[55px] font-bold text-gray-900 mb-4">
      Worldwide <span className="text-primary">Reach</span>
    </h2>
    <h2
      className="absolute top-[-34px] lg:top-[-60px] left-1/2 transform -translate-x-1/2 text-center text-[40px] lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0 whitespace-nowrap"
      aria-hidden="true"
    >
      Worldwide Reach
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      A global footprint of verified freight forwarders worldwide
    </p>
  </div>
</div>




      <div className="map-container " ref={mapContainerRef}
      >
        {/* Interaction Blocking Overlay */}
        <div className="map-overlay" />
        
        {/* Zoom Controls */}
        {/* <div className="zoom-controls">
          <button 
            onClick={handleZoomOut}
            className="zoom-btn"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button 
            onClick={handleZoomIn}
            className="zoom-btn"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
        </div> */}

        {/* Pan Controls */}
        {/* <div className="pan-controls">
          <button 
            onClick={handlePanUp}
            className="pan-btn pan-up"
            aria-label="Pan up"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <div className="pan-horizontal">
            <button 
              onClick={handlePanLeft}
              className="pan-btn pan-left"
              aria-label="Pan left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handlePanRight}
              className="pan-btn pan-right"
              aria-label="Pan right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <button 
            onClick={handlePanDown}
            className="pan-btn pan-down"
            aria-label="Pan down"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div> */}

        {/* Search Button */}
        {/* <div className="search-section">
          <button 
            onClick={handleSearch}
            className="search-btn"
          >
            <span className="search-label">FIND A MEMBER</span>
            <span className="search-prompt">Search for a specific member or country...</span>
          </button>
        </div> */}

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: mapConfig.scale,
            center: mapConfig.center,
          }}
          className="map"
          width={1200}
          height={700}
          onWheel={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onMouseDown={(e) => {
            if (!e.target.closest('.zoom-controls, .pan-controls, .search-section')) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onTouchMove={(e) => { e.preventDefault(); e.stopPropagation(); }}
          style={{ pointerEvents: 'auto' }}
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
          width: 100vw;
          margin: 0;
          padding: 96px 96px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f8fafc;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
          background-image: ${backgroundImage.src ? `url(${backgroundImage.src})` : 'none'};
          background-size: cover;
          background-repeat: no-repeat;
          min-height: 600px;
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
          width: 100vw;
          height: 700px;
          padding: 0;
          border: none;
          position: relative;
          transition: transform 0.3s ease;
          overflow: hidden;
          cursor: default;
          touch-action: none;
          -ms-touch-action: none;
          overscroll-behavior: none;
        }

        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          pointer-events: none;
        }

        .zoom-controls {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 100;
          pointer-events: auto;
        }

        .zoom-btn {
          width: 40px;
          height: 40px;
          background: #6853DB;
          border: none;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .zoom-btn:hover {
          background: #5844B4;
          transform: scale(1.05);
        }

        .pan-controls {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          z-index: 100;
          pointer-events: auto;
        }

        .pan-horizontal {
          display: flex;
          gap: 4px;
        }

        .pan-btn {
          width: 40px;
          height: 40px;
          background: #6853DB;
          border: none;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .pan-btn:hover {
          background: #5844B4;
          transform: scale(1.05);
        }

        .search-section {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          pointer-events: auto;
        }

        .search-btn {
          background: #6853DB;
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          cursor: pointer;
          color: white;
          transition: all 0.2s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 300px;
        }

        .search-btn:hover {
          background: #5844B4;
          transform: translateY(-2px);
          box-shadow: 0 6px 8px rgba(0,0,0,0.15);
        }

        .search-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .search-prompt {
          font-size: 11px;
          opacity: 0.9;
          margin-top: 2px;
        }

        .map {
          width: 100%;
          height: 100%;
          display: block;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .map svg {
          pointer-events: all;
          user-drag: none;
          -webkit-user-drag: none;
          -moz-user-drag: none;
          user-select: none;
          -webkit-user-select: none;
        }

        .map svg g {
          pointer-events: all;
        }

        .map svg path {
          pointer-events: all;
          cursor: default !important;
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
            padding: 40px 32px;
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