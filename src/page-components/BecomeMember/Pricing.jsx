import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from 'lucide-react'
import { Home, Rocket, Globe } from 'lucide-react'

const tiers = [
  { 
    name: 'Basic', 
    id: 'tier-basic', 
    href: '#', 
    priceMonthly: '$199', 
    mostPopular: false,
    icon: Home
  },
  { 
    name: 'Premium', 
    id: 'tier-premium', 
    href: '#', 
    priceMonthly: '$499', 
    mostPopular: true,
    icon: Rocket
  },
  { 
    name: 'ELITE', 
    id: 'tier-elite', 
    href: '#', 
    priceMonthly: '$1999', 
    mostPopular: false,
    icon: Globe
  },
]

const sections = [
  {
    name: 'Basic Features',
    features: [
      { name: 'UNLIMITED SEARCHES FOR FELLOW MEMBERS', tiers: { Basic: true, Premium: true, ELITE: true } },
      { name: 'REALTIME CHAT', tiers: { Basic: true, Premium: true, ELITE: true } },
      { name: 'DEDICATED MEMBERSHIP PROFILE', tiers: { Basic: true, Premium: true, ELITE: true } },
      { name: 'CERTIFICATE OF MEMBERSHIP', tiers: { Basic: true, Premium: true, ELITE: true } },
      { name: 'MEMBERSHIP BADGE', tiers: { Basic: true, Premium: true, ELITE: true } },
    ],
  },
  {
    name: 'Team & Management',
    features: [
      { name: 'TEAM MEMBERS / USERS (Same Country / Same Company)', tiers: { Basic: '2 USERS', Premium: '6 USERS', ELITE: 'UNLIMITED' } },
      { name: 'BRANCH OFFICES (Same Country / Same Company)', tiers: { Basic: 'H1Q + 1 BRANCH', Premium: 'H1Q + 2 BRANCH', ELITE: 'UNLIMITED' } },
    ],
  },
  {
    name: 'Business Tools',
    features: [
      { name: 'BUSINESS XCHANGE (Enquiries)', tiers: { Basic: '1 ENQUIRY', Premium: '2 ENQUIRIES', ELITE: 'UNLIMITED' } },
      { name: 'FREIGHT VIEWER (Promotional Posts)', tiers: { Basic: '1 POST', Premium: '5 POSTS', ELITE: 'UNLIMITED' } },
      { name: 'PR AND MARKETING', tiers: { Basic: '1 POST PER MONTH', Premium: '4 POSTS PER MONTH', ELITE: '16 POSTS PER MONTH' } },
      { name: 'BE ON TOP SEARCH RESULTS', tiers: { Basic: false, Premium: false, ELITE: true } },
    ],
  },
  {
    name: 'Premium Features',
    features: [
      { name: 'PAYMENT PROTECTION FRAMEWORK', tiers: { Basic: false, Premium: false, ELITE: true } },
      { name: 'REALTIME TRACKING OF CARGO / SHIPMENTS', tiers: { Basic: false, Premium: false, ELITE: true } },
      { name: 'PARTNERSHIP MANAGEMENT', tiers: { Basic: false, Premium: false, ELITE: true } },
    ],
  },
  {
    name: 'Preferences and Discounts',
    features: [
      { name: 'DISCOUNT ON CONFERENCE FEES', tiers: { Basic: false, Premium: false, ELITE: true } },
      { name: 'DISCOUNT ON SPONSERSHIP PACKAGES', tiers: { Basic: false, Premium: false, ELITE: true } },
      { name: 'VIRTUAL CONFERENCE ACCESS - FREE', tiers: { Basic: true, Premium: true, ELITE: true } },
      { name: 'SPECIAL DISCOUNT ON CARGO INSURANCES', tiers: { Basic: true, Premium: true, ELITE: true } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-indigo-600">Pricing</h2>
          <p className="mt-2 text-2xl font-semibold  text-gray-900 sm:text-[55px]">
            Get started with Global Freight
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
          No credit card required. Get Started.
        </p>

        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <section
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200' : '',
                  'p-8',
                )}
              >
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 id={tier.id} className="text-sm font-semibold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-2 flex items-baseline gap-x-1 text-gray-900">
                  <span className="text-4xl font-semibold">{tier.priceMonthly}</span>
                  <span className="text-sm font-semibold">/month</span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                      : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                    'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                  )}
                >
                  Buy plan
                </a>
                <ul role="list" className="mt-10 space-y-4 text-sm text-gray-900">
                  {sections.map((section) => (
                    <li key={section.name}>
                      <h4 className="font-semibold text-gray-900 mb-2">{section.name}</h4>
                      <ul role="list" className="space-y-4">
                        {section.features.map((feature) =>
                          feature.tiers[tier.name] ? (
                            <li key={feature.name} className="flex gap-x-3">
                              <CheckIcon className="h-5 w-5 flex-none text-indigo-600" />
                              <span>
                                {feature.name}{' '}
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
            );
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
                    const Icon = tier.icon;
                    return (
                      <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                        <div className="mb-4">
                          <Icon className="h-8 w-8 text-indigo-600" />
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{tier.name}</div>
                      </th>
                    );
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
                        <span className="text-sm font-semibold">/month</span>
                      </div>
                      <a
                        href={tier.href}
                        className={classNames(
                          tier.mostPopular
                            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                            : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                          'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                        )}
                      >
                        Buy plan
                      </a>
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
                          'pb-4 text-sm font-semibold text-gray-900',
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th scope="row" className="py-4 text-sm font-normal text-gray-900">
                          {feature.name}
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