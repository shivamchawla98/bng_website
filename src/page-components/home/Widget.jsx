import { ArrowDown, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import office from '../../../public/herosectionicon/offices.png';
import cities from '../../../public/herosectionicon/cities.png';
import member from '../../../public/herosectionicon/member.png';
import country from '../../../public/herosectionicon/contries.png';

const stats = [
  { id: 1, name: 'Members', stat: '100+', icon: member, change: '122', changeType: 'increase' },
  { id: 2, name: 'Countries', stat: '30+', icon: country, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Cities', stat: '200+', icon: cities, change: '3.2%', changeType: 'increase' },
  { id: 4, name: 'Offices', stat: '200+', icon: office, change: '3.2%', changeType: 'increase' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Widget() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:mt-5">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-3 py-3 sm:px-4 sm:py-4 shadow"
          >
            <dt>
              <div className="absolute rounded-md ml-3 sm:ml-4 p-1">
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  width={48}
                  height={48}
                  sizes="(max-width: 640px) 10vw, 12vw"
                />
              </div>
            </dt>
            <dd className="ml-16 sm:ml-20 flex items-baseline">
              <p className="text-xl sm:text-2xl font-semibold text-primary">{item.stat}</p>
              {/* Uncomment if needed and adjust for responsiveness */}
              {/* <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-xs sm:text-sm font-semibold',
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUp aria-hidden="true" className="size-4 sm:size-5 shrink-0 self-center text-green-500" />
                ) : (
                  <ArrowDown aria-hidden="true" className="size-4 sm:size-5 shrink-0 self-center text-red-500" />
                )}
                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p> */}
            </dd>
            <p className="ml-16 sm:ml-20 truncate text-base sm:text-lg font-medium text-gray-500">{item.name}</p>
            {/* Uncomment if needed and adjust for responsiveness */}
            {/* <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-3 py-3 sm:px-4 sm:py-4">
              <div className="text-xs sm:text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  View all<span className="sr-only"> {item.name} stats</span>
                </a>
              </div>
            </div> */}
          </div>
        ))}
      </dl>
    </div>
  );
}