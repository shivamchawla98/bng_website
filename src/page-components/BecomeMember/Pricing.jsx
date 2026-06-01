'use client'
import { Fragment, useState, useEffect } from 'react'
import { CheckIcon, MinusIcon, InfoIcon, ChevronDownIcon, ChevronUpIcon, GiftIcon } from 'lucide-react'
import { TrophyIcon, StarsIcon, Crown } from 'lucide-react'
import InviteModal from '../Contact/modal'
import iota from '../../../public/members_benefit/iota.png'
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ModalMembershipForm } from '@/page-components/home/ModalForm';
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Tooltip Component
function Tooltip({ content }) {
  return (
    <div className="relative group">
      <BsFillInfoCircleFill className="h-4 w-4 text-primary cursor-pointer" />
      {/* <Image src={iota} sizes='3' className="h-3 w-2  text-gray-500 cursor-pointer" /> */}
      <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block w-44 lg:w-64 p-2 text-xs lg:text-sm text-white bg-gray-800 rounded-md shadow-lg z-10">
        {content}
      </div>
    </div>
  )
}

export default function Pricing() {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDurations, setSelectedDurations] = useState({
    'tier-Free': 1,
    'tier-Standard': 1,
    'tier-Premium': 1,
    'tier-Elite': 1,
  })
  const [openDropdowns, setOpenDropdowns] = useState({
    'tier-Free': false,
    'tier-Standard': false,
    'tier-Premium': false,
    'tier-Elite': false,
  })
  // State for currency selection (USD or INR)
  const [currency, setCurrency] = useState('USD');
  // State for exchange rate
  const [exchangeRate, setExchangeRate] = useState(83);
  const [isLoading, setIsLoading] = useState(false);
  // State for collapsible sections in mobile view
  const [openSections, setOpenSections] = useState({});

  // Fetch exchange rate from API
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        if (data && data.rates && data.rates.INR) {
          setExchangeRate(data.rates.INR);
        }
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        setExchangeRate(83);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Define tiers - All three plans
  const tiers = [
    {
      name: 'Standard',
      id: 'tier-Standard',
      href: '#',
      priceYearly: '$199',
      priceValue: 199,
      originalPriceValue: 499,
      mostPopular: false,
      icon: TrophyIcon,
    },
    {
      name: 'Premium',
      id: 'tier-Premium',
      href: '#',
      priceYearly: '$699',
      priceValue: 699,
      originalPriceValue: 999,
      mostPopular: false,
      icon: StarsIcon,
    },
    {
      name: 'Elite',
      id: 'tier-Elite',
      href: '#',
      priceYearly: '$1250',
      priceValue: 1250,
      originalPriceValue: 1550,
      mostPopular: true,
      limitedTimeOffer: true,
      icon: Crown,
    },
  ]

  // Define sections - order and contents match the official pricing sheet
  const sections = [
    {
      name: 'BNG Conference',
      features: [
        { name: 'Delegate Pass', tiers: { Trial: false, Standard: false, Premium: false, Elite: '1 Delegate Pass free (Limited Time Offer)' } },
      ],
    },
    {
      name: 'Basic Features',
      features: [
        { name: 'Unlimited Searches For Fellow Members', tiers: { Trial: true, Standard: true, Premium: true, Elite: true } },
        { name: 'Dedicated Membership Profile', tiers: { Trial: true, Standard: true, Premium: true, Elite: true } },
        { name: 'Realtime Chat', tiers: { Trial: false, Standard: false, Premium: true, Elite: true } },
        { name: 'Certificate Of Membership', tiers: { Trial: false, Standard: false, Premium: true, Elite: true } },
        { name: 'Membership Badge', tiers: { Trial: false, Standard: false, Premium: true, Elite: true } },
      ],
    },
    {
      name: 'Team Management & Offices',
      features: [
        { name: 'Team Members / Users (Same Country / Within Company)', tiers: { Trial: 'Unlimited', Standard: '1 User', Premium: '2 Users', Elite: 'Unlimited' } },
        {
          name: 'Branch Offices (Same Country / Within Company)',
          tiers: {
            Trial: false,
            Standard: false,
            Premium: false,
            Elite: '1 HQ + 9 Branches (within same country) after that $499 every new branch',
          },
        },
        {
          name: 'Branch offices (Outside Country / Within Company)',
          tiers: {
            Trial: false,
            Standard: false,
            Premium: false,
            Elite: '$699 Per Branch (every branch will be protected with $50k)',
          },
        },
      ],
    },
    {
      name: 'Business Tools',
      features: [
        {
          name: 'Business Xchange (Monthly Post/Bid)',
          tiers: { Trial: 'Unlimited', Standard: '1', Premium: '5 Enquiries', Elite: 'Unlimited' },
          tooltip: 'A robust system with freight enquiries from global trade community / post your enquiry / quote for enquires',
        },
        {
          name: 'Freight Xchange (Monthly Post Of Your Promotional Freight Rates)',
          tiers: { Trial: 'Unlimited', Standard: '1', Premium: '5 Posts', Elite: 'Unlimited' },
          tooltip: 'A robust system gives you opportunity to grow your visibility by posting your freight rates',
        },
        { name: 'Network Xchange', tiers: { Trial: false, Standard: false, Premium: true, Elite: true } },
        {
          name: 'PR And Marketing',
          tiers: { Trial: false, Standard: false, Premium: '1 Posts Per Month', Elite: '10 Posts Per Month' },
          tooltip: 'Create your visibility to global trade & exim market',
        },
        { name: 'Be On Top Search Results', tiers: { Trial: false, Standard: false, Premium: false, Elite: true } },
      ],
    },
    {
      name: 'Payment Protection Framework',
      features: [
        {
          name: 'Payment Protection Framework (Overdue Invoice Rankings - Strict Background Check - Payment Resolution Center - Global Warning List)',
          tiers: {
            Trial: false,
            Standard: false,
            Premium: 'Up To $5,000 Payment Protection',
            Elite: 'Up To $50,000 Payment Protection',
          },
        },
      ],
    },
    {
      name: 'Preferences And Discounts',
      features: [
        { name: 'Discount On Conference Fees', tiers: { Trial: false, Standard: false, Premium: false, Elite: '5% Life Time' } },
        { name: 'Discount On Sponsorship Packages', tiers: { Trial: false, Standard: false, Premium: false, Elite: '15% Life Time' } },
        { name: 'Virtual Conference Access - Free', tiers: { Trial: true, Standard: true, Premium: true, Elite: true } },
        { name: 'Special Discount On Cargo Insurances', tiers: { Trial: true, Standard: true, Premium: true, Elite: true } },
      ],
    },
  ];

  const durations = [
    { years: 1, label: '1 Year' },
    { years: 2, label: '2 Year' },
    { years: 3, label: '3 Years' },
  ]

  // Function to format price text with correct currency symbol
  const formatPriceText = (amount) => {
    if (currency === 'USD') {
      return `$${amount.toLocaleString()}`;
    } else {
      const inrAmount = Math.round(amount * exchangeRate);
      return `₹${inrAmount.toLocaleString()}`;
    }
  }

  // Function to get dynamic branch office text
  const getBranchText = (baseText, branchCost) => {
    const baseParts = baseText.split('$');
    if (baseParts.length < 2) return baseText;
    
    const formattedCost = currency === 'USD' ? `$${branchCost}` : `₹${Math.round(branchCost * exchangeRate).toLocaleString()}`;
    return `${baseParts[0]}${formattedCost} branch)`;
  }

  // Function to get payment protection text
  const getProtectionText = (amount) => {
    return `Up to ${formatPriceText(amount)} Payment Protection`;
  }

  // Calculate price based on selected duration for a tier
  const getPrice = (tier) => {


    const years = selectedDurations[tier.id] || 1;
    const basePrice = tier.priceValue * years;

    if (currency === 'USD') {
      return `$${basePrice.toLocaleString()}`;
    } else {
      const inrPrice = Math.round(basePrice * exchangeRate);
      return `₹${inrPrice.toLocaleString()}`;
    }
  }

  // Calculate the original (pre-discount) price for strikethrough display
  const getOriginalPrice = (tier) => {
    if (!tier.originalPriceValue) return null;
    const years = selectedDurations[tier.id] || 1;
    const basePrice = tier.originalPriceValue * years;

    if (currency === 'USD') {
      return `$${basePrice.toLocaleString()}`;
    } else {
      const inrPrice = Math.round(basePrice * exchangeRate);
      return `₹${inrPrice.toLocaleString()}`;
    }
  }

  // Handle duration selection for a specific tier
  const handleDurationChange = (tierId, years) => {
    setSelectedDurations((prev) => ({ ...prev, [tierId]: years }))
    setOpenDropdowns((prev) => ({ ...prev, [tierId]: false }))
  }

  // Toggle dropdown for a specific tier
  const toggleDropdown = (tierId) => {
    setOpenDropdowns((prev) => ({ ...prev, [tierId]: !prev[tierId] }))
  }

  // Toggle section collapse for mobile view
  const toggleSection = (sectionName) => {
    setOpenSections((prev) => ({ ...prev, [sectionName]: !prev[sectionName] }));
  };

  return (
    <div className="">
      <ModalMembershipForm 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        {/* Currency Toggle */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[40px] sm:text-[55px] font-bold text-gray-700 relative z-10">
            Join the Global <span className='text-primary'>Freight Network Today</span> 
          </p>
        </div>
        <p className="mx-auto mt-2 max-w-2xl text-center text-base font-medium text-gray-600 sm:text-lg">
          Choose the perfect membership plan to connect, collaborate, and grow with top logistics professionals worldwide.
        </p>
        <div className="flex justify-center lg:justify-end my-4">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium rounded-l-md ${currency === 'USD' 
                ? 'bg-gradient-to-tr from-[#6853DB] to-[#6853DB] text-white' 
                : 'text-[#6853DB] ring-1 ring-inset ring-[#6853DB]/20 hover:ring-[#6853DB]/30'}`}
            >
              USD
            </button>
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              className={`px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium rounded-r-md ${currency === 'INR' 
                ? 'bg-gradient-to-tr from-[#6853DB] to-[#6853DB] text-white' 
                : 'text-[#6853DB] ring-1 ring-inset ring-[#6853DB]/20 hover:ring-[#6853DB]/30'}`}
            >
              INR {isLoading && '...'}
            </button>
          </div>
        </div>
        {/* Mobile View (xs to lg) */}
        <div className="mt-12 sm:mt-16 lg:hidden">
          <div className="relative overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="flex space-x-4 px-4 pb-4 min-w-[300px]">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="snap-start w-[280px] sm:w-[320px] flex-shrink-0 bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-gray-200 overflow-hidden"
                >
                  {tier.limitedTimeOffer && (
                    <div className="-mx-6 -mt-6 mb-4 bg-gradient-to-r from-[#6853DB] to-[#8b7bf0] px-4 py-2 text-center text-xs font-bold uppercase tracking-wide text-white">
                      🔥 Limited Time Offer
                    </div>
                  )}
                  {/* Sticky Tier Header */}
                  <div className="sticky top-0 bg-white z-10 pb-4 border-b border-gray-100">
                    <div className="flex justify-center items-center mb-4">
                      <tier.icon className="h-10 w-10 text-indigo-600" />
                      <h3 className="ml-3 text-2xl font-bold text-gray-900">{tier.name}</h3>
                    </div>
                    <div className="flex flex-col items-center text-gray-900">
                      {getOriginalPrice(tier) && (
                        <span className="text-xl sm:text-2xl font-medium text-gray-400 line-through">
                          {getOriginalPrice(tier)}
                        </span>
                      )}
                      <span className="text-3xl sm:text-4xl font-semibold">{getPrice(tier)}</span>
                    </div>
                    {/* Duration Dropdown - Hidden for Free tier */}
                    {tier.id !== 'tier-Free' ? (
                      <div className="mt-4 relative">
                        <button
                          onClick={() => toggleDropdown(tier.id)}
                          className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-[#6853DB] to-[#6853DB] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-gradient-to-tr hover:from-[#5844B4] hover:to-[#5844B4] focus:outline-none focus:ring-2 focus:ring-[#6853DB] focus:ring-offset-2 w-full"
                        >
                          {durations.find((d) => d.years === selectedDurations[tier.id]).label}
                          <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </button>
                        {openDropdowns[tier.id] && (
                          <div className="absolute z-20 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                              {durations.map((duration) => (
                                <button
                                  key={duration.years}
                                  onClick={() => handleDurationChange(tier.id, duration.years)}
                                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#6853DB]/10 hover:text-[#6853DB] text-left"
                                >
                                  {duration.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mt-4 relative">
                      <button
                        onClick={() => toggleDropdown(tier.id)}
                        className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-[#6853DB] to-[#6853DB] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-gradient-to-tr hover:from-[#5844B4] hover:to-[#5844B4] focus:outline-none focus:ring-2 focus:ring-[#6853DB] focus:ring-offset-2 w-full"
                      >
                        30 Days
                     
                      </button>
                   
                    </div>
                    )}
                    <button
                      onClick={openModal}
                      className={classNames(
                        tier.id === 'tier-Free' 
                          ? 'bg-gradient-to-tr from-[#6853DB] to-[#6853DB] hover:from-[#5844B4] hover:to-[#5844B4] text-white' 
                          : 'bg-gradient-to-tr from-[#6853DB] to-[#6853DB] hover:from-[#5844B4] hover:to-[#5844B4] text-white',
                        'mt-4 block rounded-md hover:scale-105 px-4 py-3 text-center text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full transition-transform duration-200'
                      )}
                    >
                      {tier.id === 'tier-Free' ? 'Start Free Trial' : 'Buy Now'}
                    </button>
                  </div>
                  {/* Features */}
                  <div className="mt-6 space-y-4">
                    {sections.map((section) => (
                      <div key={section.name}>
                        <button
                          onClick={() => toggleSection(section.name)}
                          className="w-full flex justify-between items-center text-left font-semibold text-gray-900 mb-2"
                        >
                          {section.name}
                          {openSections[section.name] ? (
                            <ChevronUpIcon className="h-5 w-5 text-[#6853DB]" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-[#6853DB]" />
                          )}
                        </button>
                        {openSections[section.name] && (
                          <ul role="list" className="space-y-3">
                            {section.features.map((feature) => (
                              <li key={feature.name} className="flex gap-x-3 items-center">
                                {feature.tiers[tier.name] ? (
                                  <>
                                    <CheckIcon className="h-5 w-5 flex-none text-[#6853DB]" />
                                    <p className="flex flex-wrap items-center gap-x-2 text-sm text-gray-900">
                                      {feature.name}
                                      <div className='flex items-center gap-x-1'>
                                        {feature.tooltip && <Tooltip content={feature.tooltip} />}
                                        {typeof feature.tiers[tier.name] === 'string' ? (
                                          <p className="text-sm text-gray-500">
                                            {feature.name.includes('BRANCH OFFICES') && feature.tiers[tier.name].includes('After that $') ? 
                                              getBranchText(feature.tiers[tier.name], 499) : 
                                              feature.name.includes('PAYMENT PROTECTION') && feature.tiers[tier.name].includes('Up to $') ?
                                              (tier.name === 'Premium' ? getProtectionText(20000) : getProtectionText(50000)) :
                                              feature.tiers[tier.name]
                                            }
                                          </p>
                                        ) : null}
                                      </div>
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <MinusIcon className="h-5 w-5 flex-none text-gray-400" />
                                    <p className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500">
                                      {feature.name}
                                      <span className="text-sm text-gray-400">
                                        Not Available
                                      </span>
                                    </p>
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View (lg+) */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  style={{ marginLeft: `${tiers.findIndex((tier) => tier.mostPopular) * 25}%` }}
                  aria-hidden="true"
                  className="flex w-1/4 px-4"
                >
                  <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="flex justify-center w-full items-center mb-4">
                        <tier.icon className={`h-10  w-10 text-[#6853DB]`} />
                        <div className="ml-3 text-3xl font-semibold text-gray-900">{tier.name}</div>
                      </div>
                      {tier.limitedTimeOffer && (
                        <div className="mb-3 flex justify-center">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#6853DB] to-[#8b7bf0] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm animate-pulse">
                            🔥 Limited Time Offer
                          </span>
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex flex-col justify-center items-center text-gray-900">
                        {getOriginalPrice(tier) && (
                          <span className="text-2xl font-medium text-gray-400 line-through">
                            {getOriginalPrice(tier)}
                          </span>
                        )}
                        <span className="text-4xl font-semibold">{getPrice(tier)}</span>
                      </div>
                      {/* Duration Dropdown - Hidden for Free tier */}
                      {tier.id !== 'tier-Free' ? (
                        <div className="mt-4 relative inline-block text-left w-full">
                          <button
                            onClick={() => toggleDropdown(tier.id)}
                            className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-[#6853DB] to-[#6853DB] px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gradient-to-tr hover:from-[#5844B4] hover:to-[#5844B4] focus:outline-none focus:ring-2 focus:ring-[#6853DB] focus:ring-offset-2 w-full"
                          >
                            {durations.find((d) => d.years === selectedDurations[tier.id]).label}
                            <ChevronDownIcon className="ml-2 h-4 w-4" />
                          </button>
                          {openDropdowns[tier.id] && (
                            <div className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="py-1">
                                {durations.map((duration) => (
                                  <button
                                    key={duration.years}
                                    onClick={() => handleDurationChange(tier.id, duration.years)}
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#6853DB]/10 hover:text-[#6853DB] text-left"
                                  >
                                    {duration.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="mt-4 relative inline-block text-left w-full">
                        <button
                          onClick={() => toggleDropdown(tier.id)}
                          className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-[#6853DB] to-[#6853DB] px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gradient-to-tr hover:from-[#5844B4] hover:to-[#5844B4] focus:outline-none focus:ring-2 focus:ring-[#6853DB] focus:ring-offset-2 w-full"
                        >
                          30 Days
       
                        </button>
                    
                      </div>
                      )}
                      <button
                        onClick={openModal}
                        className={classNames(
                          tier.id === 'tier-Free' 
                            ? 'bg-gradient-to-tr from-[#6853DB] to-[#6853DB] text-white hover:bg-gradient-to-tr hover:from-[#5844B4] hover:to-[#5844B4]' 
                            : tier.mostPopular
                              ? 'bg-gradient-to-tr from-[#6853DB] to-[#6853DB] text-white hover:bg-gradient-to-tr hover:from-[#5844B4] hover:to-[#5844B4]'
                              : 'text-[#6853DB] ring-1 ring-inset ring-[#6853DB]/20 hover:ring-[#6853DB]/30',
                          'mt-6 block rounded-md hover:scale-105 px-4 py-3 text-center text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full transition-transform duration-200'
                        )}
                      >
                        {tier.id === 'tier-Free' ? 'Start Free Trial' : 'Buy Now'}
                      </button>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 font-semibold text-lg text-primary'
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th scope="row" className="py-4 text-sm font-normal text-gray-900">
                          <div className="flex items-center gap-x-2">
                            {feature.name}
                            {feature.tooltip && <Tooltip content={feature.tooltip} />}
                          </div>
                          <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <div className="text-center text-sm text-gray-500">
                                {feature.name.includes('BRANCH OFFICES') && feature.tiers[tier.name].includes('After that $') ? 
                                  getBranchText(feature.tiers[tier.name], 499) : 
                                  feature.name.includes('PAYMENT PROTECTION') && feature.tiers[tier.name].includes('Up to $') ?
                                  (tier.name === 'Premium' ? getProtectionText(20000) : getProtectionText(50000)) :
                                  feature.tiers[tier.name]
                                }
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon className={`mx-auto h-5 w-5 ${tier.id === 'tier-Free' ? 'text-[#6853DB]' : 'text-[#6853DB]'}`} />
                                ) : (
                                  <MinusIcon className="mx-auto h-5 w-5 text-gray-400" />
                                )}
                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}