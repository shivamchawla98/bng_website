import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mt-6 md:mb-0 ">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-primary text-2xl font-semibold whitespace-nowrap">
                BNG
              </span>
            </a>
            <div className='mt-10'>
            <p className="text-gray-600">Nodia One, Sector 62, Noida, Uttar Pradesh 201307</p>
            <p className="text-gray-600">+91 99999 99999</p>
            <p className="text-gray-600">sales@xyzzzzz.ru</p>
            </div>
           
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-primary">
            <FooterSection title="About Us" links={[
              { href: "#", label: "Our Story" },
              { href: "#", label: "Team" }
            ]} />
            <FooterSection title="Help Center" links={[
              { href: "#", label: "FAQs" },
              { href: "#", label: "Support" }
            ]} />
            <FooterSection title="Conference" links={[
              { href: "#", label: "Upcoming Events" },
              { href: "#", label: "Past Events" }
            ]} />
            <FooterSection title="Contact Us" links={[
              { href: "#", label: "Get in Touch" },
              { href: "#", label: "Feedback" }
            ]} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-primary">
            © 2024 <a href="https://google.com/" className="hover:underline">BNG™</a>. All Rights Reserved.
          </span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};





const FooterSection = ({ title, links }) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{title}</h2>
    <ul className="text-black 00 font-medium">
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <a href={link.href} className="hover:underline">{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => (
  <div className="flex mt-4 sm:justify-center sm:mt-0">
    {socialMediaLinks.map((social, index) => (
      <a key={index} href={social.href} className="text-gray-500 hover:text-gray-900 dark:hover: ms-5">
        <svg className={social.svgClasses} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={social.viewBox}>
          <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
        </svg>
        <span className="sr-only">{social.name}</span>
      </a>
    ))}
  </div>
);

const socialMediaLinks = [
  {
    name: 'Facebook page',
    href: '#',
    svgClasses: 'w-4 h-4',
    viewBox: '0 0 8 19',
    path: 'M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
  },
  {
    name: 'Discord community',
    href: '#',
    svgClasses: 'w-4 h-4',
    viewBox: '0 0 21 16',
    path: 'M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z'
  },
  {
    name: 'Twitter page',
    href: '#',
    svgClasses: 'w-4 h-4',
    viewBox: '0 0 20 17',
    path: 'M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z'
  },
]

export default Footer