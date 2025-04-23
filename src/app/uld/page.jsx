
'use client'
import { FaPlane, FaBoxOpen, FaClipboardCheck, FaTags, FaShapes, FaPallet } from 'react-icons/fa';
import { MdImportantDevices, MdSafetyDivider } from 'react-icons/md';
import { GiCargoCrate } from 'react-icons/gi';

export default function ULDPage() {
  const commonContainers = [
    { code: "AKE (LD3)", description: "Half-width container for wide-body aircraft", aircraft: "Boeing 747, Airbus A330" },
    { code: "AMJ (LD7)", description: "Full-width container for large cargo volumes", aircraft: "Boeing 777, Airbus A350" },
    { code: "DPE/DPN", description: "Small containers for loose baggage or special cargo", aircraft: "Various narrow-body aircraft" },
    { code: "RKN", description: "Temperature-controlled for pharmaceuticals", aircraft: "Wide-body freighters" },
    { code: "Envirotainer", description: "Active temperature control containers", aircraft: "Specialized cargo aircraft" },
  ];

  const commonPallets = [
    { code: "PAG", description: "Standard wide-body aircraft pallet (10-ft)", aircraft: "Boeing 747, 777" },
    { code: "PMC", description: "Most common pallet for freight", aircraft: "Most wide-body aircraft" },
    { code: "PLA", description: "Large pallet for oversized cargo", aircraft: "Freighter aircraft" },
    { code: "P1P/P6P", description: "For high-density loads", aircraft: "Boeing 747, MD-11" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Navigation Sidebar */}
      <aside className="w-full md:w-[256px] pb-6 bg-white p-4 md:fixed md:top-14 md:h-screen z-10 border-r border-gray-200">
        {/* Fixed Header */}
        <div className="mb-6 pt-4">
          <h1 className="text-lg font-bold flex items-center pl-4 text-gray-800">
            <FaPlane className="mr-2 text-indigo-600" /> AIRLINE ULDS
          </h1>
          <p className="text-gray-500 text-sm pl-4">Unit Load Devices</p>
        </div>
        
        {/* Scrollable Navigation */}
        <nav className="h-[calc(100vh-150px)] overflow-y-auto">
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
                <FaPlane className="mr-2" /> Introduction
              </a>
            </li>
            <li>
              <a 
                href="#importance" 
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                onClick={(e) => {
                  document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                  e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                }}
              >
                <MdImportantDevices className="mr-2" /> ULD Containers & Importance
              </a>
            </li>
            <li>
              <a 
                href="#regulations" 
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                onClick={(e) => {
                  document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                  e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                }}
              >
                <FaClipboardCheck className="mr-2" /> ULD Regulations
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
                <FaShapes className="mr-2" /> ULD Classification
              </a>
            </li>
            <li>
              <a 
                href="#identification" 
                className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                onClick={(e) => {
                  document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                  e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                }}
              >
                <FaTags className="mr-2" /> Identification of ULDs
              </a>
            </li>
            <li className="mt-6 pt-4 border-t border-gray-200">
              <span className="block text-xs uppercase text-gray-500 mb-2 px-3">Common ULD Types</span>
              <ul className="space-y-1">
                <li>
                  <a 
                    href="#containers" 
                    className="flex items-center px-3 py-1.5 text-sm rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                    onClick={(e) => {
                      document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                      e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                    }}
                  >
                    <FaBoxOpen className="mr-2" /> Common ULD Containers
                  </a>
                </li>
                <li>
                  <a 
                    href="#pallets" 
                    className="flex items-center px-3 py-1.5 text-sm rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-300"
                    onClick={(e) => {
                      document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                      e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                    }}
                  >
                    <FaPallet className="mr-2" /> Common ULD Pallets
                  </a>
                </li>
              </ul>
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
              <FaPlane className="mr-2" /> Introduction to Unit Load Devices (ULDs)
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Unit Load Devices (ULDs) are specialized containers or pallets used to load luggage, freight, and mail on wide-body aircraft and specific narrow-body aircraft. These containers help consolidate cargo into a single unit, making handling more efficient and securing the goods during air transport.
              </p>
              <p className="text-gray-600">
                ULDs play a critical role in the air cargo and logistics industry. By organizing cargo into standard-sized units, they ensure efficient use of aircraft space, facilitate faster loading and unloading, and enhance cargo safety.
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <FaBoxOpen className="mr-2" /> ULD Containers
                  </h3>
                  <p className="text-gray-600">Enclosed units typically made of aluminium or composite materials, used to carry loose items. Also known as "pods" or "cans".</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <FaPallet className="mr-2" /> ULD Pallets
                  </h3>
                  <p className="text-gray-600">Flat bases that cargo is stacked on and then secured with a net or a contour-fitting cover.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold text-indigo-600">Key Benefits of ULDs:</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Efficient cargo handling</li>
                  <li>Improved safety for cargo and personnel</li>
                  <li>Reduced ground time for aircraft</li>
                  <li>Maximized space utilization in aircraft holds</li>
                  <li>Standardization across global air transport</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section id="importance" className="mb-12 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <MdImportantDevices className="mr-2" /> ULD Containers & Their Importance
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Unit Load Devices (ULDs) are standardized containers and pallets used to load luggage, freight, and mail onto aircraft. They are crucial in air cargo handling and aviation logistics, improving efficiency, safety, and organization during air transport.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Types of ULD Containers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Container ULDs</h4>
                    <p className="text-gray-600">Enclosed boxes used to protect and secure cargo. Typically made of lightweight materials such as aluminium and Lexan (a polycarbonate).</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>AKE (LD3)</strong> - Half-width container used widely in wide-body aircraft</li>
                      <li><strong>AMJ (LD7)</strong> - Full-width container for large cargo volumes</li>
                      <li><strong>DPE/DPN</strong> - Smaller containers for loose baggage</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Specialized Containers</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>RKN</strong> - Temperature-controlled for pharmaceuticals and perishables</li>
                      <li><strong>Envirotainer/Active Containers</strong> - Equipped with active cooling or heating</li>
                      <li><strong>HMA</strong> - For heavy and dense cargo</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Importance of ULD Containers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2 flex items-center">
                      <FaPlane className="mr-2" /> Efficiency
                    </h4>
                    <p className="text-gray-600">Faster and more organized loading/unloading processes, minimizing aircraft ground time.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2 flex items-center">
                      <MdSafetyDivider className="mr-2" /> Safety
                    </h4>
                    <p className="text-gray-600">Protect cargo from damage during transit and handling, and help prevent loss or theft.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2 flex items-center">
                      <GiCargoCrate className="mr-2" /> Space Utilization
                    </h4>
                    <p className="text-gray-600">Designed to maximize the use of aircraft cargo hold space, enhancing payload capacity.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Standardization</h4>
                    <p className="text-gray-600">Simplifies logistics across different aircraft and airlines, ensuring interoperability.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Special Handling</h4>
                    <p className="text-gray-600">Allow for transport of temperature-sensitive, dangerous, or high-value goods.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulations Section */}
        <section id="regulations" className="mb-12 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaClipboardCheck className="mr-2" /> ULD Regulations
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                ULD regulations are a set of standards and guidelines that govern the design, use, maintenance, and handling of Unit Load Devices (ULDs) to ensure safety, efficiency, and compliance in air transportation.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Key Regulatory Authorities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">IATA</h4>
                    <p className="text-gray-600">International Air Transport Association - Primary body for ULD standards in commercial aviation.</p>
                    <p className="mt-2 text-sm text-gray-600"><strong>IATA ULD Regulations Manual</strong> is the industry reference.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">ICAO</h4>
                    <p className="text-gray-600">International Civil Aviation Organization - Global regulations focusing on safety and airworthiness.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">FAA/EASA</h4>
                    <p className="text-gray-600">Federal Aviation Administration (US) and European Union Aviation Safety Agency provide airworthiness standards.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Key Areas Covered by ULD Regulations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Structural Standards</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Design and structural strength criteria</li>
                      <li>Fire-resistant, lightweight materials</li>
                      <li>Aircraft compatibility</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Restraint and Securing</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Cargo must be secured inside ULDs</li>
                      <li>ULDs must be restrained to aircraft</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Maintenance and Repair</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Regular inspections required</li>
                      <li>Certified technicians only</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Identification and Labeling</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Unique identification numbers</li>
                      <li>Owner/operator and load capacity labels</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Handling Procedures</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Strict protocols for loading/unloading</li>
                      <li>Safety procedures for tarmac operations</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Training</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Personnel must be trained</li>
                      <li>Periodic refreshers required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Classification Section */}
        <section id="classification" className="mb-12 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaShapes className="mr-2" /> ULD Classification
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                ULD (Unit Load Device) containers are classified based on several key criteria, including type, size, shape, function, and aircraft compatibility. Understanding this classification helps ensure proper container selection for different types of cargo and aircraft.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Classification Categories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">By Type</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>Containers:</strong> Fully enclosed units with walls, floors, and doors</li>
                      <li><strong>Pallets:</strong> Flat platforms with nets/straps</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">By Shape & Compatibility</h4>
                    <p className="text-gray-600">Designed to match aircraft cargo holds (especially wide-body)</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">By Usage</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>General Cargo:</strong> AKE, AMA, PMC</li>
                      <li><strong>Special Cargo:</strong> RKN, Envirotainers</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">By Material</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>Aluminium:</strong> Most common, lightweight</li>
                      <li><strong>Composite:</strong> Fiberglass/polycarbonate</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">By Temperature Control</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Passive (insulated)</li>
                      <li>Active (powered cooling/heating)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Identification Section */}
        <section id="identification" className="mb-12 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaTags className="mr-2" /> Identification of ULDs
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Every ULD used in air cargo operations has a unique identification code that provides information about its type, size, ownership, and serial number. This standard format ensures easy tracking, proper handling, and compatibility with specific aircraft.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">ULD Identification Code Format</h3>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-indigo-600">3-Letter Prefix</h4>
                      <p className="text-gray-600">Type, size, and base dimensions</p>
                      <p className="mt-2 text-gray-600"><strong>Examples:</strong> AKE, PMC, AMJ</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-600">5-Digit Serial</h4>
                      <p className="text-gray-600">Unique number for the ULD</p>
                      <p className="mt-2 text-gray-600"><strong>Example:</strong> 12345</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-600">2-Letter Owner</h4>
                      <p className="text-gray-600">Airline's IATA designator</p>
                      <p className="mt-2 text-gray-600"><strong>Examples:</strong> AA, BA, CX</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded border border-blue-200">
                    <p className="text-center font-mono text-xl font-bold">AKE 12345 BA</p>
                    <p className="text-center text-sm mt-1 text-gray-600">(Example ULD Identification Code)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Additional Identification Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Barcode Labels</h4>
                    <p className="text-gray-600">For automated scanning and tracking</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Color Coding & Logos</h4>
                    <p className="text-gray-600">Quick visual identification</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Placards & Labels</h4>
                    <p className="text-gray-600">Special handling instructions</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Why ULD Identification is Important</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                    <div className="text-2xl mb-1">📦</div>
                    <p className="text-sm text-gray-600">Efficient cargo management</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                    <div className="text-2xl mb-1">✈️</div>
                    <p className="text-sm text-gray-600">Correct aircraft loading</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                    <div className="text-2xl mb-1">🧾</div>
                    <p className="text-sm text-gray-600">Inventory control</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                    <div className="text-2xl mb-1">🔐</div>
                    <p className="text-sm text-gray-600">Increased security</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                    <div className="text-2xl mb-1">🔧</div>
                    <p className="text-sm text-gray-600">Maintenance records</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Containers Section */}
        <section id="containers" className="mb-12 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaBoxOpen className="mr-2" /> Type of Common ULD Containers
            </h2>
            <div className="prose max-w-none">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Code</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Compatible Aircraft</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {commonContainers.map((container) => (
                      <tr key={container.code} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-indigo-600">
                          {container.code}
                        </td>
                        <td className="px-6 py-4 text-gray-600">{container.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{container.aircraft}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2">Standard Containers</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li><strong>AKE (LD3):</strong> Most common half-width container</li>
                    <li><strong>AMJ (LD7):</strong> Full-width container with higher capacity</li>
                    <li><strong>DPE/DPN:</strong> Smaller containers for narrow-body aircraft</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2">Specialized Containers</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li><strong>RKN:</strong> Passive temperature control</li>
                    <li><strong>Envirotainer:</strong> Active temperature control</li>
                    <li><strong>HMA:</strong> For heavy machinery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Pallets Section */}
        <section id="pallets" className="mb-12 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaPallet className="mr-2" /> Type of Common ULD Pallets
            </h2>
            <div className="prose max-w-none">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Code</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Compatible Aircraft</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {commonPallets.map((pallet) => (
                      <tr key={pallet.code} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-indigo-600">
                          {pallet.code}
                        </td>
                        <td className="px-6 py-4 text-gray-600">{pallet.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{pallet.aircraft}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Pallet Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Standard Pallets</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>PAG:</strong> 10-ft standard pallet</li>
                      <li><strong>PMC:</strong> Most common freight pallet</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-indigo-600 mb-2">Specialized Pallets</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li><strong>PLA:</strong> For oversized cargo</li>
                      <li><strong>P1P/P6P:</strong> High-density load pallets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}