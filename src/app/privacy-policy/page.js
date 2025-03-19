import React from 'react';

const Page = () => {
  return (
    <div className='m-8 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md'>
      {/* Main Heading */}
      <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-4'>
        Privacy Policy
      </h2>

      {/* About Section */}
      <section className='mb-8'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          ABOUT
        </h3>
        <p className='text-base text-gray-700 leading-relaxed'>
          This <strong>Privacy Policy</strong> describes the terms of commitment of the website{' '}
          <a href='http://www.bnglogisticsnetwork.com' className='text-blue-600 hover:underline font-medium'>
            http://www.bnglogisticsnetwork.com
          </a>{' '}
          to your privacy. The policy statement is applicable for all information gathering and broadcasting practices followed by <strong>BNG Info Media And Technologies LLP</strong>, for the people visiting{' '}
          <a href='http://www.bnglogisticsnetwork.com' className='text-blue-600 hover:underline font-medium'>
            http://www.bnglogisticsnetwork.com
          </a>{' '}
          by using the site, you consent to collect and broadcast of information in terms of the policy below. By visiting the website{' '}
          <a href='http://www.bnglogisticsnetwork.com' className='text-blue-600 hover:underline font-medium'>
            http://www.bnglogisticsnetwork.com
          </a>{' '}
          you announce that you have accepted the terms of the privacy policy.
        </p>
      </section>

      {/* Commitment Section */}
      <section className='mb-8'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          OUR COMMITMENT TO YOUR PRIVACY
        </h3>
        <p className='text-base text-gray-700 leading-relaxed'>
          <strong>BNG LOGISTICS NETWORK</strong> is dedicated to protecting your personal information and will make every reasonable effort to handle collected information appropriately. All information collected will be handled with care in accordance with <strong>BNG LOGISTICS NETWORK</strong> standards for integrity and objectivity and respect for your privacy. <strong>BNG LOGISTICS NETWORK</strong> endeavours to comply with all laws and regulations that apply to the gathering and use of personal information, including US privacy laws and the EU General Data Protection Regulation.
        </p>
        <p className='text-base text-gray-700 leading-relaxed mt-4'>
          This privacy policy describes the information we collect, the purposes for which it is used, and your choices regarding its use. As used in this privacy policy, “we” and “us” includes <strong>BNG LOGISTICS NETWORK</strong> and our staff, employees, officers, directors, volunteer editors and reviewers, and vendors and independent contractors under contract with us. “{' '}
          <a href='http://www.bnglogisticsnetwork.com' className='text-blue-600 hover:underline font-medium'>
            http://www.bnglogisticsnetwork.com
          </a>{' '}
          ” includes the following: the web pages and content on the <strong>BNG LOGISTICS NETWORK</strong> Website{' '}
          <a href='http://www.bnglogisticsnetwork.com' className='text-blue-600 hover:underline font-medium'>
            http://www.bnglogisticsnetwork.com
          </a>{' '}
          , journal sites, and <strong>BNG LOGISTICS NETWORK</strong> or third-party tools, software, submission systems, web forms, registration system, and any other means through which we interact with you.
        </p>
      </section>

      {/* Data Usage Section */}
      <section className='mb-8'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          HOW WE USE YOUR DATA
        </h3>
        <p className='text-base text-gray-700 leading-relaxed'>
          <strong>BNG LOGISTICS NETWORK</strong> is committed to protecting your privacy seriously and will use your personal information to administer your account and to provide the product and service you request from <strong>BNG LOGISTICS NETWORK</strong>. All the services include but are not limited to providing you with B2B, B2C, with national or international Freight Forwarders, Logistics Companies, Supply Chain Service Providers, Exporters, Importers, Sellers, Buyers, Manufacturers, traders, and or intermediaries.
        </p>
        <p className='text-base text-gray-700 leading-relaxed mt-4'>
          <strong>BNG LOGISTICS NETWORK</strong> may contact you with promotional offers and deals, products, and services via various suitable communication channels such as Email, SMS, Telephone or Fax, WhatsApp or Short Message Services, and or via our automated call systems.
        </p>
      </section>

      {/* Key Points Section */}
      <section className='mb-8'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          KEY POINTS
        </h3>
        <ul className='list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg'>
          <li>We collect and use your data to provide you with requested services.</li>
          <li>Your data is handled with care and in compliance with privacy laws.</li>
          <li>We may contact you with promotional offers via email, SMS, or other channels.</li>
          <li>By using our site, you agree to our privacy policy terms.</li>
        </ul>
      </section>

      {/* Contact Information */}
      <section>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          CONTACT US
        </h3>
        <p className='text-base text-gray-700 leading-relaxed'>
          If you have any questions or concerns about our Privacy Policy, please contact us at:
        </p>
        <ul className='list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg'>
          <li>
            Email:{' '}
            <a href='mailto:INFO@BNGLOGISTICSNETWORK.COM' className='text-blue-600 hover:underline font-medium'>
              INFO@BNGLOGISTICSNETWORK.COM
            </a>
          </li>
          <li>
            Email:{' '}
            <a href='mailto:MEMBERSHIPS@BNGLOGISTICSNETWORK.COM' className='text-blue-600 hover:underline font-medium'>
              MEMBERSHIPS@BNGLOGISTICSNETWORK.COM
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Page;