'use client'
import { FaRadiation, FaFire, FaSkullCrossbones, FaFlask, FaExclamationTriangle, FaGasPump, FaBoxOpen, FaShieldAlt, FaGlobe, FaHistory, FaBuilding, FaTags, FaPlane, FaShip, FaTruck, FaTrain, FaWater } from 'react-icons/fa';
import { MdScience, MdLocalHospital, MdSecurity, MdWarning } from 'react-icons/md';
import Head from 'next/head';

export default function DGRPage() {
  const hazardClasses = [
    {
      class: "1",
      name: "Explosives",
      icon: <FaExclamationTriangle className="mr-2" />,
      divisions: [
        "1.1 - Mass explosion hazard",
        "1.2 - Projection hazard",
        "1.3 - Fire hazard with minor blast",
        "1.4 - No significant hazard",
        "1.5 - Very insensitive substances",
        "1.6 - Extremely insensitive articles"
      ],
      examples: "Ammunition, fireworks, detonators"
    },
    {
      class: "2",
      name: "Gases",
      icon: <FaGasPump className="mr-2" />,
      divisions: [
        "2.1 - Flammable gases",
        "2.2 - Non-flammable, non-toxic gases",
        "2.3 - Toxic gases"
      ],
      examples: "Acetylene, hydrogen, oxygen, nitrogen, chlorine"
    },
    {
      class: "3",
      name: "Flammable Liquids",
      icon: <FaFire className="mr-2" />,
      divisions: ["No subdivisions"],
      examples: "Gasoline, alcohol, perfume, paint"
    },
    {
      class: "4",
      name: "Flammable Solids",
      icon: <FaFire className="mr-2" />,
      divisions: [
        "4.1 - Flammable solids",
        "4.2 - Spontaneously combustible",
        "4.3 - Dangerous when wet"
      ],
      examples: "Matches, sodium, potassium, calcium carbide"
    },
    {
      class: "5",
      name: "Oxidizing Substances & Organic Peroxides",
      icon: <MdScience className="mr-2" />,
      divisions: [
        "5.1 - Oxidizing substances",
        "5.2 - Organic peroxides"
      ],
      examples: "Ammonium nitrate, hydrogen peroxide, pool chemicals"
    },
    {
      class: "6",
      name: "Toxic & Infectious Substances",
      icon: <FaSkullCrossbones className="mr-2" />,
      divisions: [
        "6.1 - Toxic substances",
        "6.2 - Infectious substances"
      ],
      examples: "Pesticides, mercury, medical waste, viruses"
    },
    {
      class: "7",
      name: "Radioactive Material",
      icon: <FaRadiation className="mr-2" />,
      divisions: ["No subdivisions"],
      examples: "Uranium, plutonium, medical isotopes"
    },
    {
      class: "8",
      name: "Corrosive Substances",
      icon: <FaFlask className="mr-2" />,
      divisions: ["No subdivisions"],
      examples: "Acids, batteries, formaldehyde, paints"
    },
    {
      class: "9",
      name: "Miscellaneous Dangerous Goods",
      icon: <FaBoxOpen className="mr-2" />,
      divisions: ["No subdivisions"],
      examples: "Dry ice, lithium batteries, asbestos, first aid kits"
    }
  ];

  const permittedInCabin = [
    "Toiletry articles (perfume, nail polish, remover - limited quantities)",
    "Small lithium/lithium-ion batteries (in devices)",
    "Alcoholic beverages (<70% alcohol content)",
    "Dry ice (limited quantities)",
    "Required emergency equipment (oxygen, fire extinguishers, CO2 cylinders for life vests)"
  ];

  const segregationTable = [
    { class: "1", name: "Explosives", "1": "X", "2": "X", "3": "X", "4": "X", "5": "X", "6": "X", "7": "X", "8": "X", "9": "X" },
    { class: "2", name: "Gases", "1": "X", "2": "✔️", "3": "X", "4": "X", "5": "X", "6": "X", "7": "✔️", "8": "X", "9": "✔️" },
    { class: "3", name: "Flammable Liquids", "1": "X", "2": "X", "3": "✔️", "4": "X", "5": "X", "6": "✔️", "7": "✔️", "8": "✔️", "9": "✔️" },
    { class: "4", name: "Flammable Solids", "1": "X", "2": "X", "3": "X", "4": "✔️", "5": "X", "6": "✔️", "7": "✔️", "8": "X", "9": "✔️" },
    { class: "5", name: "Oxidizers", "1": "X", "2": "X", "3": "X", "4": "X", "5": "✔️", "6": "X", "7": "✔️", "8": "X", "9": "✔️" },
    { class: "6", name: "Toxic/Infectious", "1": "X", "2": "X", "3": "✔️", "4": "✔️", "5": "X", "6": "✔️", "7": "✔️", "8": "✔️", "9": "✔️" },
    { class: "7", name: "Radioactive", "1": "X", "2": "✔️", "3": "✔️", "4": "✔️", "5": "✔️", "6": "✔️", "7": "✔️", "8": "✔️", "9": "✔️" },
    { class: "8", name: "Corrosives", "1": "X", "2": "X", "3": "✔️", "4": "X", "5": "X", "6": "✔️", "7": "✔️", "8": "✔️", "9": "✔️" },
    { class: "9", name: "Miscellaneous", "1": "X", "2": "✔️", "3": "✔️", "4": "✔️", "5": "✔️", "6": "✔️", "7": "✔️", "8": "✔️", "9": "✔️" },
  ];

  return (
<>
    <Head>
    <title>DGR Guidelines for Logistics | BNG Network</title>
    <meta
      name="description"
      content="Access essential DGR resources for safe, compliant transportation of dangerous goods. Stay updated with global logistics regulations via BNG."
    />
  </Head>

    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-[256px] pb-6 bg-white p-4 md:fixed md:top-24  md:h-screen z-10 border-r border-gray-200">
        {/* Fixed Header */}
        <div className="mb-6 pt-4">
          <h1 className="text-lg font-bold flex items-center pl-4 text-gray-800">
            <FaShieldAlt className="mr-2 text-indigo-600" /> DGR CLASSES
          </h1>
          <p className="text-gray-500 text-sm pl-4">Dangerous Goods Regulations</p>
        </div>
        
        {/* Scrollable Navigation */}
        <nav className="h-[calc(100vh-250px)] overflow-y-auto">
          <ul className="space-y-1 pr-2">
            <li>
              <a 
                href="#introduction" 
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                onClick={(e) => {
                  document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                  e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                }}
              >
                <FaShieldAlt className="mr-2" /> Introduction
              </a>
            </li>
            <li>
              <a 
                href="#history" 
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                onClick={(e) => {
                  document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                  e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                }}
              >
                <FaHistory className="mr-2" /> History
              </a>
            </li>
            <li>
              <a 
                href="#organizations" 
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                onClick={(e) => {
                  document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                  e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                }}
              >
                <FaBuilding className="mr-2" /> Key Organizations
              </a>
            </li>
            <li>
              <a 
                href="#classification" 
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                onClick={(e) => {
                  document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                  e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                }}
              >
                <FaTags className="mr-2" /> Classification
              </a>
            </li>
            
            <li className="mt-6 pt-4 border-t border-gray-200">
              <span className="block text-xs uppercase text-gray-500 mb-2 px-3">Hazard Classes</span>
              <ul className="space-y-1">
                {hazardClasses.map((hazard) => (
                  <li key={hazard.class}>
                    <a 
                      href={`#class-${hazard.class}`} 
                      className="flex items-center px-3 py-1.5 text-sm rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                      onClick={(e) => {
                        document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                        e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                      }}
                    >
                      {hazard.icon} Class {hazard.class} - {hazard.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="mt-4">
              <a 
                href="#cabin" 
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                onClick={(e) => {
                  document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                  e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                }}
              >
                <FaPlane className="mr-2" /> Accepted in Cabin
              </a>
            </li>
            <li>
              <a 
                href="#segregation" 
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                onClick={(e) => {
                  document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                  e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                }}
              >
                <MdWarning className="mr-2" /> Segregation Table
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64 bg-gray-50">
        {/* Introduction Section */}
        <section id="introduction" className="mb-12 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaShieldAlt className="mr-2" /> Introduction to Dangerous Goods Regulations (DGR)
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p>
                Dangerous Goods Regulations (DGR) are rules and standards designed to ensure the safe handling, packaging, transport, and storage of hazardous materials. These rules are crucial for protecting people, property, and the environment from risks associated with the transportation of dangerous goods by air, sea, road, rail, and inland waterways.
              </p>
              <p>
                The regulations are used globally by industries, shippers, freight forwarders, airlines, and other transport operators to maintain international safety and consistency.
              </p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold text-indigo-600">Regulations Cover:</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500">
                  <li>Classification and labelling</li>
                  <li>Packaging and marking</li>
                  <li>Documentation</li>
                  <li>Training of personnel</li>
                  <li>Emergency response procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="mb-12 text-gray-600 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaHistory className="mr-2" /> History of Dangerous Goods Regulations
            </h2>
            <div className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">Early Days (Pre-1900s to 1940s)</h3>
                  <p>No global standards. Local rules led to accidents like the 1917 Halifax Explosion.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">Post-War (1950s)</h3>
                  <p>UN formed Committee of Experts, created the "Orange Book" model regulations.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">Modal Regulations (1960s-1980s)</h3>
                  <p>ICAO (air), IMDG (sea), ADR (road), RID (rail), ADN (inland waterways).</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">Modern Day (1990s-Present)</h3>
                  <p>Regular updates, mandatory training, special provisions for lithium batteries.</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Key Historical Events</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600">1917 Halifax Explosion</h4>
                    <p>One of the earliest known shipping disasters involving explosives, highlighting the need for regulation.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600">1953 UN Committee Formation</h4>
                    <p>United Nations recognized the need for standardized international rules for dangerous goods transport.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600">1960s-1980s Modal Regulations</h4>
                    <p>Development of transport-specific regulations based on UN model: ICAO (air), IMDG (sea), ADR (road), RID (rail), ADN (inland waterways).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organizations Section */}
        <section id="organizations" className="mb-12 text-gray-600 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaBuilding className="mr-2" /> Key Organizations Involved
            </h2>
            <div className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">UN</h3>
                  <p>Sets the global standard through the UN Recommendations on the Transport of Dangerous Goods (Orange Book).</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">IATA</h3>
                  <p>Develops and maintains the IATA Dangerous Goods Regulations (DGR) for air transport.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">ICAO</h3>
                  <p>International Civil Aviation Organization - Technical Instructions form basis for IATA DGR.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">IMO</h3>
                  <p>International Maritime Organization - Maintains the IMDG Code for sea transport.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">DOT/OSHA</h3>
                  <p>US Department of Transportation and Occupational Safety and Health Administration regulate US transport and workplace safety.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">ADR/RID/ADN</h3>
                  <p>European agreements for road (ADR), rail (RID), and inland waterways (ADN) transport.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Classification Section */}
        <section id="classification" className="mb-12 text-gray-600 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaTags className="mr-2" /> Dangerous Goods Classification
            </h2>
            <div className="prose max-w-none">
              <p>
                The main document of reference used by operators is the International Air Transport Association (IATA) Dangerous Goods Regulations (DGR) guide. The IATA DGR provides operators with information regarding the marking, packaging, labeling and the documents required for dangerous shipments, based on international and national air regulations.
              </p>
              <p>
                Dangerous goods are classified into hazard classes. Each hazard class is divided into several sections and specific labels are applied to each one of these classes and/or sections. A system of diamond-shaped placards and labels are used to identify dangerous goods. Different colors and symbols, such as a flame for flammables or skull and crossbones for poisons, identify the dangers associated with the product.
              </p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold text-indigo-600">Classification System</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500">
                  {/* < triggered onClick={(e) => {
                    document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                    e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                  }}> */}
                    <li>9 main hazard classes</li>
                  <li>Some classes have divisions (e.g., Class 1 has 6 divisions)</li>
                  <li>Numbering order doesn't imply degree of danger</li>
                  <li>Each class has specific labeling and packaging requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hazard Classes Sections */}
        {hazardClasses.map((hazard) => (
          <section key={hazard.class} id={`class-${hazard.class}`} className="mb-12 text-gray-600 scroll-mt-20">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                <span className="inline-flex items-center">
                  {hazard.icon} Class {hazard.class} - {hazard.name}
                </span>
              </h2>
              <div className="prose max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-600 mb-2">Divisions</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {hazard.divisions.map((division, index) => (
                        <li key={index}>{division}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-600 mb-2">Examples</h3>
                    <p>{hazard.examples}</p>
                  </div>
                </div>
                
                {hazard.class === "1" && (
                  <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                    <h3 className="font-bold text-indigo-600">Explosives Details</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                      <li><strong>1.1:</strong> Mass explosion hazard (entire load instantaneously)</li>
                      <li><strong>1.2:</strong> Projection hazard but not mass explosion</li>
                      <li><strong>1.3:</strong> Fire hazard with minor blast/projection</li>
                      <li><strong>1.4:</strong> No significant hazard (effects confined to package)</li> 
                      <li><strong>1.5:</strong> Very insensitive substances with mass explosion hazard</li>
                      <li><strong>1.6:</strong> Extremely insensitive articles (negligible probability of accidental initiation)</li>
                    </ul>
                  </div>
                )}
                
                {hazard.class === "2" && (
                  <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                    <h3 className="font-bold text-indigo-600">Gases Details</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                      <li><strong>2.1:</strong> Flammable gases (ignite on contact with ignition source)</li>
                      <li><strong>2.2:</strong> Non-flammable, non-toxic gases</li>
                      <li><strong>2.3:</strong> Toxic gases (cause death/serious injury if inhaled)</li>
                      <li>Includes gases under pressure or in cryogenic form</li>
                    </ul>
                  </div>
                )}
                
                {hazard.class === "3" && (
                  <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                    <h3 className="font-bold text-indigo-600">Flammable Liquids Definition</h3>
                    <p>Liquids or mixtures of liquids that give off a flammable vapour at temperatures of not more than 60°C (140°F) closed-cup test or not more than 65.6°C (150°F) open-cup test (flash point). Includes liquid desensitized explosives.</p>
                  </div>
                )}
                
                {hazard.class === "4" && (
                  <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                    <h3 className="font-bold text-indigo-600">Flammable Solids Details</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                      <li><strong>4.1:</strong> Readily combustible solids, self-reactive substances, solid desensitized explosives</li>
                      <li><strong>4.2:</strong> Substances liable to spontaneous heating (pyrophoric, self-heating)</li>
                      <li><strong>4.3:</strong> Substances which emit flammable gases when wet (dangerous when wet)</li>
                    </ul>
                  </div>
                )}
                
                {hazard.class === "5" && (
                  <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                    <h3 className="font-bold text-indigo-600">Oxidizers & Organic Peroxides</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                      <li><strong>5.1:</strong> Oxidizing substances (not necessarily combustible but may cause/contribute to combustion of other material by yielding oxygen)</li>
                      <li><strong>5.2:</strong> Organic peroxides (thermally unstable, may undergo self-accelerating decomposition, sensitive to impact/friction)</li>
                    </ul>
                  </div>
                )}
                
                {hazard.class === "6" && (
                  <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                    <h3 className="font-bold text-indigo-600">Toxic & Infectious Substances</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                      <li><strong>6.1:</strong> Toxic substances (cause death/injury if swallowed, inhaled or absorbed through skin)</li>
                      <li><strong>6.2:</strong> Infectious substances (contain pathogens like bacteria, viruses, medical waste)</li>
                      <li className="font-bold text-indigo-600">In case of damage or leakage, immediately notify public health authority</li>
                    </ul>
                  </div>
                )}
                
                {hazard.class === "7" && (
                  <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                    <h3 className="font-bold text-indigo-600">Radioactive Material Definition</h3>
                    <p>Any material containing radionuclides where both the activity concentration and the total activity in the consignment exceed specified values. Excludes:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500">
                      <li>Material implanted/incorporated in persons/animals for diagnosis/treatment</li>
                      <li>Consumer products with regulatory approval</li>
                      <li>Natural material/ores containing naturally occurring radionuclides</li>
                    </ul>
                  </div>
                )}
                
                {hazard.class === "8" && (
                  <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                    <h3 className="font-bold text-indigo-600">Corrosive Substances</h3>
                    <p>Substances which by chemical action can cause severe damage when in contact with living tissue or, in case of leakage, will materially damage or destroy other goods or the means of transport.</p>
                    <p className="mt-2"><strong>No subdivisions</strong> - all corrosives fall under this single class.</p>
                  </div>
                )}
                
                {hazard.class === "9" && (
                  <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                    <h3 className="font-bold text-indigo-600">Miscellaneous Dangerous Goods</h3>
                    <p>Any substance which presents a danger during air transport not covered by other classes, including:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500">
                      <li>Aviation regulated substances causing discomfort to crew</li>
                      <li>Magnetized material (affecting compasses)</li>
                      <li>Dry ice (suffocation/cold burn risk)</li>
                      <li>Lithium batteries</li>
                      <li>Asbestos</li>
                      <li>First aid kits</li>
                      <li>Internal combustion engines</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Accepted in Cabin Section */}
        <section id="cabin" className="mb-12 text-gray-600 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaPlane className="mr-2" /> Dangerous Goods Accepted in the Cabin
            </h2>
            <div className="prose max-w-none">
              <p>
                Passengers and cabin crewmembers are permitted to carry a limited amount of classified dangerous goods for personal use in their carry-on baggage. The types of items that are authorized onboard the aircraft may vary in each country, depending on the local aviation authority and security regulations.
              </p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold text-indigo-600">Permitted Items</h3>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                  {permittedInCabin.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-indigo-700">Note: Quantities and specific items may vary by country and airline policy.</p>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold text-indigo-600">Required Emergency Equipment</h3>
                <p>Other classified dangerous goods that are permitted in the cabin include required emergency equipment, in accordance with airworthiness regulations:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500">
                  <li>Oxygen</li>
                  <li>Fire extinguishers</li>
                  <li>CO2 gas cylinders to inflate the life vests</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Segregation Table Section */}
        <section id="segregation" className="mb-12 text-gray-600 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <MdWarning className="mr-2" /> Segregation Table For Hazardous Goods
            </h2>
            <div className="prose max-w-none">
              <p>
                The Hazmat Segregation Table helps determine which classes of dangerous goods can be stored or transported together safely. This is essential for compliance and safety, especially in warehousing and multimodal transport (e.g., ship, truck, air).
              </p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold text-indigo-600 mb-3">Legend</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">✔️</span>
                    <span>Generally compatible (can be stored/transported together)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl mr-2">X</span>
                    <span>Segregation required (incompatible, must be separated)</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-indigo-700">Notes may apply based on quantity, packaging, or mode of transport (e.g., IMDG, IATA, DOT).</p>
              </div>
              
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Class</th>
                      {segregationTable.map((row) => (
                        <th key={row.class} className="px-4 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">{row.class}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {segregationTable.map((row) => (
                      <tr key={row.class} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap font-medium text-indigo-600">
                          {row.class} - {row.name}
                        </td>
                        {segregationTable.map((col) => (
                          <td key={col.class} className="px-4 py-4 whitespace-nowrap text-center">
                            {row[col.class]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold text-indigo-600">Key Segregation Rules</h3>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                  <li><strong>Class 1 (Explosives):</strong> Must be segregated from all other classes</li>
                  <li><strong>Class 5.1 (Oxidizers):</strong> Must be segregated from flammable materials (Classes 2.1, 3, 4)</li>
                  <li><strong>Class 6.1 (Toxic):</strong> Generally compatible with most classes except explosives and oxidizers</li>
                  <li><strong>Class 7 (Radioactive):</strong> Compatible with most classes except explosives</li>
                  <li><strong>Class 8 (Corrosives):</strong> Must be segregated from flammable gases (Class 2.1) and oxidizers (Class 5.1)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

</>
  );
}