'use client'
import { FaGlobe, FaHistory, FaQuestionCircle, FaList, FaExchangeAlt, FaShip, FaTruck, FaBoxOpen, FaFileContract } from 'react-icons/fa';
import { MdOutlineDeliveryDining, MdPayment } from 'react-icons/md';

export default function IncotermsPage() {
  const incoterms = [
    { code: "EXW", name: "Ex Works", description: "Seller makes goods available at their premises" },
    { code: "FCA", name: "Free Carrier", description: "Seller delivers goods to carrier or specified location" },
    { code: "CPT", name: "Carriage Paid To", description: "Seller pays carriage to named destination, risk transfers earlier" },
    { code: "CIP", name: "Carriage and Insurance Paid To", description: "Like CPT but seller must also insure goods" },
    { code: "DAP", name: "Delivered at Place", description: "Seller delivers goods to named place, ready for unloading" },
    { code: "DPU", name: "Delivered at Place Unloaded", description: "Seller delivers and unloads goods at named place" },
    { code: "DDP", name: "Delivered Duty Paid", description: "Seller bears all costs and risks including import duties" },
    { code: "FAS", name: "Free Alongside Ship", description: "Seller places goods alongside vessel at port" },
    { code: "FOB", name: "Free on Board", description: "Seller places goods on board the vessel" },
    { code: "CFR", name: "Cost and Freight", description: "Seller pays costs and freight to named port" },
    { code: "CIF", name: "Cost, Insurance & Freight", description: "Like CFR but seller must also insure goods" },
  ];

  // Chart data from the Excel file
  const incotermsChartData = [
    {
      term: "EXW",
      name: "EX-WORKS",
      description: "GOODS PLACED AT BUYER'S DISPOSAL",
      loadingTransport: "BUYER",
      exportTaxes: "BUYER",
      unloadingExport: "BUYER",
      loadingFeesExport: "BUYER",
      mainCarriage: "BUYER",
      unloadingFeesImport: "BUYER",
      loadingImport: "BUYER",
      transportDelivery: "BUYER",
      importFormalities: "BUYER",
      unloadingDestination: "BUYER",
      insurance: "NEGOTIABLE"
    },
    {
      term: "FCA",
      name: "FREE CARRIER",
      description: "GOODS PLACED AT BUYER'S DISPOSAL",
      loadingTransport: "SELLER",
      exportTaxes: "SELLER",
      unloadingExport: "BUYER",
      loadingFeesExport: "BUYER",
      mainCarriage: "BUYER",
      unloadingFeesImport: "BUYER",
      loadingImport: "BUYER",
      transportDelivery: "BUYER",
      importFormalities: "BUYER",
      unloadingDestination: "BUYER",
      insurance: "NEGOTIABLE"
    },
    {
      term: "FAS",
      name: "FREE ALONGSIDE SHIP",
      description: "GOODS ARRIVED ALONGSIDE SHIP",
      loadingTransport: "SELLER",
      exportTaxes: "SELLER",
      unloadingExport: "SELLER",
      loadingFeesExport: "BUYER",
      mainCarriage: "BUYER",
      unloadingFeesImport: "BUYER",
      loadingImport: "BUYER",
      transportDelivery: "BUYER",
      importFormalities: "BUYER",
      unloadingDestination: "BUYER",
      insurance: "NEGOTIABLE"
    },
    {
      term: "FOB",
      name: "FREE ON BOARD",
      description: "GOODS LODED ON SHIP",
      loadingTransport: "SELLER",
      exportTaxes: "SELLER",
      unloadingExport: "SELLER",
      loadingFeesExport: "SELLER",
      mainCarriage: "BUYER",
      unloadingFeesImport: "BUYER",
      loadingImport: "BUYER",
      transportDelivery: "BUYER",
      importFormalities: "BUYER",
      unloadingDestination: "BUYER",
      insurance: "NEGOTIABLE"
    },
    {
      term: "CFR",
      name: "COST AND FREIGHT",
      description: "GOODS LODED ON SHIP",
      loadingTransport: "SELLER",
      exportTaxes: "SELLER",
      unloadingExport: "SELLER",
      loadingFeesExport: "SELLER",
      mainCarriage: "SELLER",
      unloadingFeesImport: "BUYER",
      loadingImport: "BUYER",
      transportDelivery: "BUYER",
      importFormalities: "BUYER",
      unloadingDestination: "BUYER",
      insurance: "NEGOTIABLE"
    },
    {
      term: "CIF",
      name: "COST, FREIGHT, INSURANCE",
      description: "GOODS LODED ON SHIP",
      loadingTransport: "SELLER",
      exportTaxes: "SELLER",
      unloadingExport: "SELLER",
      loadingFeesExport: "SELLER",
      mainCarriage: "SELLER",
      unloadingFeesImport: "BUYER",
      loadingImport: "BUYER",
      transportDelivery: "BUYER",
      importFormalities: "BUYER",
      unloadingDestination: "BUYER",
      insurance: "SELLER CLAUSES. (C)"
    },
    {
      term: "CPT",
      name: "CARRIAGE PAID TO",
      description: "GOODS TAKEN IN CHARGE BY CARRIER",
      loadingTransport: "SELLER",
      exportTaxes: "SELLER",
      unloadingExport: "SELLER",
      loadingFeesExport: "SELLER",
      mainCarriage: "SELLER",
      unloadingFeesImport: "NEGOTIABLE",
      loadingImport: "BUYER",
      transportDelivery: "BUYER",
      importFormalities: "BUYER",
      unloadingDestination: "BUYER",
      insurance: "NEGOTIABLE"
    },
    {
      term: "CIP",
      name: "CARRIAGE AND INSURANCE PAID",
      description: "GOODS TAKEN IN CHARGE BY CARRIER",
      loadingTransport: "SELLER",
      exportTaxes: "SELLER",
      unloadingExport: "SELLER",
      loadingFeesExport: "SELLER",
      mainCarriage: "SELLER",
      unloadingFeesImport: "SELLER",
      loadingImport: "SELLER",
      transportDelivery: "BUYER",
      importFormalities: "BUYER",
      unloadingDestination: "BUYER",
      insurance: "SELLER CLAUSES. (A)"
    },
    {
      term: "DAP",
      name: "DELIVERED AT PLACE",
      description: "GOODS ARRIVED AT NAMED DESTINATION",
      loadingTransport: "SELLER",
      exportTaxes: "SELLER",
      unloadingExport: "SELLER",
      loadingFeesExport: "SELLER",
      mainCarriage: "SELLER",
      unloadingFeesImport: "SELLER",
      loadingImport: "SELLER",
      transportDelivery: "SELLER",
      importFormalities: "BUYER",
      unloadingDestination: "BUYER",
      insurance: "NEGOTIABLE"
    },
    {
      term: "DPU",
      name: "DELIVERED AT PLACE UNLOADED",
      description: "GOODS UNLOADED AT NAMED DESTINATION",
      loadingTransport: "SELLER",
      exportTaxes: "SELLER",
      unloadingExport: "SELLER",
      loadingFeesExport: "SELLER",
      mainCarriage: "SELLER",
      unloadingFeesImport: "SELLER",
      loadingImport: "SELLER",
      transportDelivery: "SELLER",
      importFormalities: "BUYER",
      unloadingDestination: "SELLER",
      insurance: "NEGOTIABLE"
    },
    {
      term: "DDP",
      name: "DELIVERY DUTY PAID",
      description: "GOODS ARRIVED AT NAMED DESTINATION",
      loadingTransport: "SELLER",
      exportTaxes: "SELLER",
      unloadingExport: "SELLER",
      loadingFeesExport: "SELLER",
      mainCarriage: "SELLER",
      unloadingFeesImport: "SELLER",
      loadingImport: "SELLER",
      transportDelivery: "SELLER",
      importFormalities: "SELLER",
      unloadingDestination: "BUYER",
      insurance: "NEGOTIABLE"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar Navigation - Updated with sober styling */}
      <aside className="w-full md:w-[256px] pb-6 bg-white p-4 md:fixed md:top-14  md:h-screen z-10 border-r border-gray-200">
  {/* Fixed Header */}
  <div className="mb-6 pt-4">
    <h1 className="text-lg font-bold flex items-center pl-4 text-gray-800">
      <FaGlobe className="mr-2 text-indigo-600" /> INCOTERMS 2020
    </h1>
    <p className="text-gray-500 text-sm pl-4">International Commercial Terms</p>
  </div>
  
  {/* Scrollable Navigation */}
  <nav className="h-[calc(100vh-150px)] overflow-y-auto">
    <ul className="space-y-1 pr-2">
      <li>
        <a 
          href="#introduction" 
          className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-600"
          onClick={(e) => {
            document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
            e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
          }}
        >
          <FaGlobe className="mr-2" /> Introduction
        </a>
      </li>
      <li>
        <a 
          href="#history" 
          className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-600"
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
          href="#why" 
          className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-600"
          onClick={(e) => {
            document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
            e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
          }}
        >
          <FaQuestionCircle className="mr-2" /> Why Use Incoterms?
        </a>
      </li>
      <li>
        <a 
          href="#points" 
          className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-600"
          onClick={(e) => {
            document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
            e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
          }}
        >
          <FaList className="mr-2" /> Key Points
        </a>
      </li>
      <li>
        <a 
          href="#changes" 
          className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-600"
          onClick={(e) => {
            document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
            e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
          }}
        >
          <FaExchangeAlt className="mr-2" /> 2010 to 2020 Changes
        </a>
      </li>
      <li>
        <a 
          href="#chart" 
          className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-600"
          onClick={(e) => {
            document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
            e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
          }}
        >
          <FaFileContract className="mr-2" /> Incoterms Chart
        </a>
      </li>
      
      <li className="mt-6 pt-4 border-t border-gray-200">
        <span className="block text-xs uppercase text-gray-500 mb-2 px-3">Incoterms Details</span>
        <ul className="space-y-1">
          {incoterms.map((term) => (
            <li key={term.code}>
              <a 
                href={`#${term.code.toLowerCase()}`} 
                className="flex items-center px-3 py-1.5 text-sm rounded hover:bg-gray-100 transition text-gray-700 hover:text-indigo-600"
                onClick={(e) => {
                  document.querySelectorAll('aside a').forEach(el => el.classList.remove('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white'));
                  e.currentTarget.classList.add('bg-gradient-to-tr', 'from-[#6853DB]', 'to-[#6853DB]', 'text-white');
                }}
              >
                {term.code} - {term.name}
              </a>
            </li>
          ))}
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
              <FaGlobe className="mr-2" /> Introduction to INCOTERMS
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-gray-600">
                INCOTERMS (International Commercial Terms) are a set of standardized trade terms published by the International Chamber of Commerce (ICC) that define the responsibilities of buyers and sellers in international trade.
              </p>
              <p>
                These rules have evolved into an essential component of the everyday language of commercial trade. They provide rules and direction to importers, exporters, lawyers, transporters, insurers, and students of international trade and have been incorporated into global contracts for the sale of goods.
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold text-indigo-600">Key Benefits:</h3>
                <ul className="list-disc text-gray-500 pl-5 mt-2 space-y-1">
                  <li>Controlled Operation Costs</li>
                  <li>Efficient Logistics Management</li>
                  <li>Enhanced Flexibility</li>
                  <li>Increased Global Reach</li>
                  <li>Optimized Working Resources</li>
                  <li>Peace of Mind in Transactions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="mb-12 text-gray-600 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaHistory className="mr-2" /> History of INCOTERMS
            </h2>
            <div className="prose max-w-none">
              <p>
                The International Chamber of Commerce came up with the idea in 1921 and put it into action in 1936. Since then, it has been updated nine times to keep up with how international business has changed.
              </p>
              <p>
                In 1923, the ICC committee developed the initial six rules, namely FOB, FAS FOT, FOR, CIF, and C&F, which served as a precursor to the Incoterm Rules. In 1936, the International Chamber of Commerce (ICC) released the initial version of Incoterms, which are abbreviations for "International Commercial Terms."
              </p>
              <p>
                The ICC updated Incoterms once more on January 1, 2000, to reflect the most recent developments in international trade. They should now be included in contracts that go into effect in January 2000 or later with the reference "Incoterms 2000."
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">1921</h3>
                  <p>Initial concept developed by ICC</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">1936</h3>
                  <p>First official version published</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">2020</h3>
                  <p>Current version with 11 terms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Use Incoterms Section */}
        <section id="why" className="mb-12 text-gray-600 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaQuestionCircle className="mr-2" /> Why Use Incoterms?
            </h2>
            <div className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <FaFileContract className="mr-2" /> To Fix
                  </h3>
                  <p>The international set of rules for commonly used terms in international trade</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <MdOutlineDeliveryDining className="mr-2" /> To Define
                  </h3>
                  <p>The obligations of each party involved in an international trade transaction</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <FaExchangeAlt className="mr-2" /> To Determine
                  </h3>
                  <p>The delivery/distribution and transfer of risks between seller and buyer</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <FaShip className="mr-2" /> Outsourcing Supply Chain
                  </h3>
                  <p>Clarify responsibilities in complex global supply chains</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section id="points" className="mb-12 text-gray-600 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaList className="mr-2" /> Key Points Fixed by Incoterms
            </h2>
            <div className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <FaExchangeAlt className="mr-2" /> Risk Transfer
                  </h3>
                  <p>Determine the point at which the risk of loss or damage to the goods shifts from the seller to the buyer.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <FaTruck className="mr-2" /> Contract of Carriage
                  </h3>
                  <p>Specify which party is responsible for arranging and paying for transportation.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <MdPayment className="mr-2" /> Allocation of Costs
                  </h3>
                  <p>Allocate costs associated with transportation, insurance, and other expenses.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <FaBoxOpen className="mr-2" /> Packaging & Handling
                  </h3>
                  <p>Clarify responsibilities for packaging, handling, and loading/unloading.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                    <FaFileContract className="mr-2" /> Export/Import Formalities
                  </h3>
                  <p>Define who handles customs clearance, duties, taxes, and documentation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Changes Section */}
        <section id="changes" className="mb-12 text-gray-600 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaExchangeAlt className="mr-2" /> Changes from 2010 to 2020
            </h2>
            <div className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">DAT to DPU</h3>
                  <p>The term DAT (Delivered at Terminal) was replaced with DPU (Delivered at Place Unloaded) to clarify that unloading can occur anywhere, not just at terminals.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">Insurance Requirements</h3>
                  <p>For CIP terms, the minimum insurance coverage was increased from Institute Cargo Clauses (C) to (A), providing "all risks" coverage unless otherwise agreed.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">Own Transport Option</h3>
                  <p>Parties can now specify if they're using their own means of transport in FCA terms.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">Security Requirements</h3>
                  <p>Clearer allocation of responsibilities for security-related requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Incoterms Chart Section */}
        <section id="chart" className="mb-12 text-gray-600 scroll-mt-20">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
              <FaFileContract className="mr-2" /> Incoterms Chart
            </h2>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Summary Chart</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Code</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Term</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Risk Transfer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Transport Paid By</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Insurance</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {incoterms.map((term) => (
                      <tr key={term.code} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-indigo-600">
                          <a href={`#${term.code.toLowerCase()}`} className="hover:underline">{term.code}</a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{term.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {term.code === 'EXW' ? 'At seller\'s premises' : 
                          term.code === 'FCA' ? 'At carrier' : 
                          ['FAS', 'FOB', 'CFR', 'CIF'].includes(term.code) ? 'On board vessel' : 
                          'At destination'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {['EXW', 'FCA', 'FAS', 'FOB'].includes(term.code) ? 'Buyer' : 'Seller'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {term.code === 'CIP' || term.code === 'CIF' ? 'Seller' : 'Buyer'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Detailed Responsibilities</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Term</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Loading & Transport</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Export Clearance</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Main Carriage</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Unloading at Import</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Import Formalities</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Insurance</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {incotermsChartData.map((term) => (
                      <tr key={term.term} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap font-medium text-indigo-600">
                          {term.term}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {term.loadingTransport}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {term.exportTaxes}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {term.mainCarriage}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {term.unloadingFeesImport}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {term.importFormalities}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {term.insurance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Incoterm Sections */}
        {incoterms.map((term) => {
          const termData = incotermsChartData.find(t => t.term === term.code);
          return (
            <section key={term.code} id={term.code.toLowerCase()} className="mb-12 text-gray-600 scroll-mt-20">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                  {term.code} - {term.name}
                </h2>
                <div className="prose max-w-none">
                  <p className="font-semibold">{term.description}</p>
                  
                  {termData && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded border border-blue-200">
                        <h3 className="font-bold text-indigo-600">Seller Responsibilities</h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Packaging and marking goods</li>
                          {['EXW', 'FCA', 'FAS', 'FOB'].includes(term.code) ? null : <li>Contract and pay for carriage</li>}
                          {['CIP', 'CIF'].includes(term.code) ? <li>Obtain insurance ({termData.insurance})</li> : null}
                          <li>Export clearance and documentation</li>
                          {term.code === 'DDP' ? <li>Import clearance and duties</li> : null}
                          {term.code === 'DPU' ? <li>Unload goods at destination</li> : null}
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded border border-blue-200">
                        <h3 className="font-bold text-indigo-600">Buyer Responsibilities</h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          {['EXW', 'FCA', 'FAS', 'FOB'].includes(term.code) ? <li>Contract and pay for carriage</li> : null}
                          {!['CIP', 'CIF'].includes(term.code) ? <li>Obtain insurance (if desired)</li> : null}
                          <li>Import clearance and documentation</li>
                          {term.code !== 'DDP' ? <li>Pay import duties and taxes</li> : null}
                          <li>Take delivery at agreed point</li>
                          {term.code !== 'DPU' ? <li>Unload goods (unless EXW/FCA at seller's premises)</li> : null}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                    <h3 className="font-bold text-yellow-800">Important Notes:</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      {term.code === 'EXW' && (
                        <li>Seller has minimal obligations - only makes goods available at their premises</li>
                      )}
                      {term.code === 'FCA' && (
                        <li>Delivery point changes based on location (seller's premises vs other location)</li>
                      )}
                      {term.code === 'DPU' && (
                        <li>Only Incoterm that requires seller to unload goods at destination</li>
                      )}
                      {['FAS', 'FOB', 'CFR', 'CIF'].includes(term.code) && (
                        <li>Only suitable for sea or inland waterway transport</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Conclusion Section */}
        <section className="mb-12 text-gray-600">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Conclusion</h2>
            <div className="prose max-w-none">
              <p>
                The use of Incoterms in international trade is both widespread and essential for defining the responsibilities of sellers and buyers. However, disputes often arise due to misunderstandings or improper use of these terms. To avoid such conflicts, it is crucial for the contracting parties to ensure that the chosen Incoterm aligns with their expectations and logistical needs.
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">Before choosing an Incoterm, consider:</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Mode of Transport:</strong> Sea, air, road, rail, or multimodal?</li>
                    <li><strong>Risk Allocation:</strong> When should risk transfer occur?</li>
                    <li><strong>Cost Control:</strong> Which costs should each party bear?</li>
                    <li><strong>Customs Expertise:</strong> Who can better handle export/import formalities?</li>
                    <li><strong>Insurance Needs:</strong> Is insurance required and who should arrange it?</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-bold text-indigo-600">Best Practices:</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Always specify "Incoterms® 2020" in contracts</li>
                    <li>Clearly define the named place/port</li>
                    <li>Ensure both parties understand their obligations</li>
                    <li>Consider getting legal advice for complex transactions</li>
                    <li>Review insurance coverage requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}