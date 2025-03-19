import React from 'react';

const Page = () => {
  return (
    <div className='m-6 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md'>
      {/* Main Heading */}
      <h1 className='text-4xl text-gray-800 font-bold mb-8 border-b-2 border-gray-200 pb-4'>
        TERMS OF USE
      </h1>

      {/* Content Section */}
      <div className='space-y-8 text-gray-700'>
        {/* Introduction */}
        <section>
          <p className='text-base leading-relaxed'>
            The BNG LOGISTICS NETWORK website located at{' '}
            <a href='http://www.bnglogisticsnetwork.com' className='text-blue-600 hover:underline font-medium'>
              http://www.bnglogisticsnetwork.com
            </a>{' '}
            is a copyrighted work belonging to BNG INFO MEDIA AND TECHNOLOGIES LLP. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
          </p>
        </section>

        {/* Key Points */}
        <section>
          <h2 className='text-2xl text-gray-800 font-semibold mb-4'>
            Key Points to Remember
          </h2>
          <ul className='list-disc list-inside space-y-3 text-base leading-relaxed bg-gray-50 p-6 rounded-lg'>
            <li>By logging into the site, you agree to comply with these Terms.</li>
            <li>You must be at least 18 years of age to access the site.</li>
            <li>Disputes are resolved through arbitration (Section 10.2).</li>
            <li>Unauthorized use of the site is strictly prohibited.</li>
            <li>User Content is your responsibility, and you grant us a license to use it.</li>
          </ul>
        </section>

        {/* Access to the Site */}
        <section>
          <h2 className='text-2xl text-gray-800 font-semibold mb-4'>
            ACCESS TO THE SITE
          </h2>
          <p className='text-base leading-relaxed'>
            Subject to these Terms. Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, non-commercial use.
          </p>
          <h3 className='text-xl text-gray-800 font-semibold mt-6 mb-3'>
            Certain Restrictions
          </h3>
          <ul className='list-disc list-inside space-y-3 text-base leading-relaxed'>
            <li>You shall not sell, rent, lease, or commercially exploit the Site.</li>
            <li>You shall not reverse engineer or disassemble any part of the Site.</li>
            <li>You shall not build a similar or competitive website.</li>
            <li>All copyright notices must be retained on copies of the Site.</li>
          </ul>
        </section>

        {/* User Content */}
        <section>
          <h2 className='text-2xl text-gray-800 font-semibold mb-4'>
            USER CONTENT
          </h2>
          <p className='text-base leading-relaxed'>
            "User Content" means any and all information and content that a user submits to the Site. You are exclusively responsible for your User Content. You bear all risks associated with the use of your User Content.
          </p>
          <h3 className='text-xl text-gray-800 font-semibold mt-6 mb-3'>
            Acceptable Use Policy
          </h3>
          <ul className='list-disc list-inside space-y-3 text-base leading-relaxed bg-gray-50 p-6 rounded-lg'>
            <li>Do not upload content that violates third-party rights.</li>
            <li>Do not use the Site for unlawful or harmful purposes.</li>
            <li>Do not distribute spam or unauthorized advertising.</li>
            <li>Do not interfere with the Site's functionality or other users.</li>
          </ul>
        </section>

        {/* Third-Party Links & Ads */}
        <section>
          <h2 className='text-2xl text-gray-800 font-semibold mb-4'>
            THIRD-PARTY LINKS & ADS
          </h2>
          <p className='text-base leading-relaxed'>
            The Site may contain links to third-party websites and services. Company is not responsible for any Third-Party Links & Ads. You use them at your own risk.
          </p>
        </section>

        {/* Disclaimers */}
        <section>
          <h2 className='text-2xl text-gray-800 font-semibold mb-4'>
            DISCLAIMERS
          </h2>
          <p className='text-base leading-relaxed'>
            The site is provided on an "as-is" and "as available" basis. Company disclaims all warranties, including merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        {/* Limitation on Liability */}
        <section>
          <h2 className='text-2xl text-gray-800 font-semibold mb-4'>
            LIMITATION ON LIABILITY
          </h2>
          <p className='text-base leading-relaxed'>
            To the maximum extent permitted by law, Company shall not be liable for any indirect, consequential, or punitive damages arising from your use of the Site.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className='text-2xl text-gray-800 font-semibold mb-4'>
            CONTACT US
          </h2>
          <p className='text-base leading-relaxed'>
            For any questions or concerns, please contact us at:
          </p>
          <ul className='list-disc list-inside space-y-3 text-base leading-relaxed bg-gray-50 p-6 rounded-lg'>
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
    </div>
  );
};

export default Page;