'use client'
import { Fragment } from 'react'
import { CheckIcon, MinusIcon, InfoIcon } from 'lucide-react'
import { Home, Rocket, Crown, StarsIcon, Star } from 'lucide-react'
import InviteModal from '../Contact/modal'
import { useState } from 'react'
// import standardIcon from '../../../public/standard.webp'

const tiers = [
  { 
    name: 'Standard', 
    id: 'tier-standard', 
    href: '#', 
    priceMonthly: '$199', 
    mostPopular: false,
    icon: Star
  },
  { 
    name: 'Premium', 
    id: 'tier-premium', 
    href: '#', 
    priceMonthly: '$699', 
    mostPopular: true,
    icon: StarsIcon
  },
  { 
    name: 'ELITE', 
    id: 'tier-elite', 
    href: '#', 
    priceMonthly: '$1999', 
    mostPopular: false,
    icon: Crown
  },
]

const sections = [
  {
    name: 'Standard Features',
    features: [
      { name: 'UNLIMITED SEARCHES FOR FELLOW MEMBERS', tiers: { Standard: true, Premium: true, ELITE: true } },
      { name: 'REALTIME CHAT', tiers: { Standard: true, Premium: true, ELITE: true } },
      { name: 'DEDICATED MEMBERSHIP PROFILE', tiers: { Standard: true, Premium: true, ELITE: true } },
      { name: 'CERTIFICATE OF MEMBERSHIP', tiers: { Standard: true, Premium: true, ELITE: true } },
      { name: 'MEMBERSHIP BADGE', tiers: { Standard: true, Premium: true, ELITE: true } },
    ],
  },
  {
    name: 'Team Management & Offices',
    features: [
      { name: 'TEAM MEMBERS / USERS (Same Country / Same Company)', tiers: { Standard: '1 USERS', Premium: '6 USERS', ELITE: 'UNLIMITED' } },
      { name: 'BRANCH OFFICES (Same Country / Same Company)', tiers: { Standard: '', Premium: '1HQ + 2 BRANCH (After that $499 branch)', ELITE: '1HQ + 4 BRANCH (After that $499 branch)' } },
    ],
  },
  {
    name: 'Business Tools',
    features: [
      { 
        name: 'BUSINESS XCHANGE (Monthly Post/Bid)', 
        tiers: { Standard: '2 ENQUIRY', Premium: '10 ENQUIRIES', ELITE: 'UNLIMITED' },
        tooltip: 'A ROBUST SYSTEM WITH FREIGHT ENQUIRIES FROM GLOBAL TRADE COMMUNITY / POST YOUR ENQUIRY / QUOTE FOR ENQUIRES'
      },
      { 
        name: 'FREIGHT XCHANGE (Monthly post of your promotional freight rates)', 
        tiers: { Standard: '5 POST', Premium: '10 POSTS', ELITE: 'UNLIMITED' },
        tooltip: 'A ROBUST SYSTEM GIVES YOU OPPORTUNITY TO GROW YOUR VISIBILITY BY POSTING YOUR FREIGHT RATES'
      },
      { 
        name: 'PR AND MARKETING', 
        tiers: { Standard: '', Premium: '4 POSTS PER MONTH', ELITE: '16 POSTS PER MONTH' },
        tooltip: 'CREATE YOUR VISIBILITY TO GLOBAL TRADE & EXIM MARKET'
      },
      { name: 'BE ON TOP SEARCH RESULTS', tiers: { Standard: false, Premium: false, ELITE: true } },
    ],
  },
  {
    name: 'Premium Features',
    features: [
      { name: 'PAYMENT PROTECTION FRAMEWORK', tiers: { Standard: false, Premium: "Up to $10000 Payment Protection", ELITE: "Up to $50000 Payment Protection" } },
      { name: 'REALTIME TRACKING OF CARGO / SHIPMENTS', tiers: { Standard: false, Premium: false, ELITE: true } },
      { name: 'PARTNERSHIP MANAGEMENT', tiers: { Standard: false, Premium: false, ELITE: true } },
    ],
  },
  {
    name: 'Preferences and Discounts',
    features: [
      { name: 'DISCOUNT ON CONFERENCE FEES', tiers: { Standard: false, Premium: false, ELITE: "5% life time" } },
      { name: 'DISCOUNT ON SPONSERSHIP PACKAGES', tiers: { Standard: false, Premium: false, ELITE: "15% life time" } },
      { name: 'VIRTUAL CONFERENCE ACCESS - FREE', tiers: { Standard: true, Premium: true, ELITE: true } },
      { name: 'SPECIAL DISCOUNT ON CARGO INSURANCES', tiers: { Standard: true, Premium: true, ELITE: true } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Tooltip Component
function Tooltip({ content }) {
  return (
    <div className="relative group">
      <InfoIcon className="h-4 w-4 text-gray-500 cursor-pointer" />
      <div className="absolute left-6 bottom-full mb-2 hidden group-hover:block w-64 p-2 text-sm text-white bg-gray-800 rounded-md shadow-lg z-10">
        {content}
      </div>
    </div>
  )
}

export default function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="">
      <InviteModal
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[40px] font-bold text-gray-700 relative z-10">
            Join the Global Freight Network Today
          </p>
        </div>
        <p className="mx-auto mt-2 max-w-2xl text-center text-base font-medium text-gray-600 sm:text-lg">
          Choose the perfect membership plan to connect, collaborate, and grow with top logistics professionals worldwide.
        </p>

        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <section
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200' : '',
                  'p-8',
                )}
              >
                <div className="mb-4">
                {typeof tier.icon === 'string' || tier.id === 'tier-standard' ? (
  <img src={tier.icon} alt={tier.name} className="h-8 w-8 text-indigo-600" />
) : (
  <tier.icon className="h-8 w-8 text-indigo-600" />
)}
                </div>
                <h3 id={tier.id} className="text-sm font-semibold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-2 flex items-baseline gap-x-1 text-gray-900">
                  <span className="text-4xl font-semibold">{tier.priceMonthly}</span>
                  <span className="text-sm font-semibold">/month</span>
                </p>
                <button
                  onClick={openModal}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-gradient-to-tr  from-[#6853DB] to-[#6853DB] text-white hover:bg-indigo-500'
                      : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                    'mt-8 bg-gradient-to-tr  from-[#6853DB] to-[#6853DB] block rounded-md px-3 py-2 text-center text-sm  font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                  )}
                >
                  Buy Now
                </button>
                <ul role="list" className="mt-10 space-y-4 text-sm text-gray-900">
                  {sections.map((section) => (
                    <li key={section.name}>
                      <h4 className="font-semibold text-gray-900 mb-2">{section.name}</h4>
                      <ul role="list" className="space-y-4">
                        {section.features.map((feature) =>
                          feature.tiers[tier.name] ? (
                            <li key={feature.name} className="flex gap-x-3 items-center">
                              <CheckIcon className="h-5 w-5 flex-none text-indigo-600" />
                              <span className="flex items-center gap-x-2">
                                {feature.name}
                                {feature.tooltip && <Tooltip content={feature.tooltip} />}
                                {typeof feature.tiers[tier.name] === 'string' ? (
                                  <span className="text-sm text-gray-500">({feature.tiers[tier.name]})</span>
                                ) : null}
                              </span>
                            </li>
                          ) : null,
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  style={{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%` }}
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
                  {tiers.map((tier) => {
                    const Icon = tier.icon
                    return (
                      <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                        <div className="mb-4">
                          <Icon className="h-8 w-8 text-indigo-600" />
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{tier.name}</div>
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-gray-900">
                        <span className="text-4xl font-semibold">{tier.priceMonthly}</span>
                        <span className="text-sm font-semibold">/Year</span>
                      </div>
                      <button
                        onClick={openModal}
                        className={classNames(
                          tier.mostPopular
                            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                            : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                          'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                        )}
                      >
                        Buy plan
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
                          'pb-4 font-semibold text-lg text-gray-900',
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
                              <div className="text-center text-sm text-gray-500">{feature.tiers[tier.name]}</div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" />
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