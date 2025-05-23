import { ArrowDown, ArrowUp } from 'lucide-react'
import office from '../../../public/herosectionicon/offices.png';
import cities from '../../../public/herosectionicon/cities.png';
import member from '../../../public/herosectionicon/member.png';
import country from '../../../public/herosectionicon/contries.png';


const stats = [
  { id: 1, name: 'Members', stat: '100+', icon: member, change: '122', changeType: 'increase' },
  { id: 2, name: 'Countries', stat: '30+', icon: country , change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Cities', stat: '200+', icon: cities , change: '3.2%', changeType: 'increase' },
  { id: 4, name: 'Offices', stat: '200+', icon: office , change: '3.2%', changeType: 'increase' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Widget() {
  return (
    <div className='max-w-7xl hidden lg:block relative mx-auto '>

      <dl className="mt-5 absolute opacity-75  -left-28 -top-[100px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden  rounded-lg bg-white px-4 py-4 shadow sm:px-4 "
          >
            <dt>
              <div className="absolute rounded-md ml-4  p-1">
                <img src={item.icon.src} alt="" className="h-12 w-12 text-white" />
    
              </div>
             
            </dt>
            <dd className="  ml-24 flex items-baseline  ">
              <p className="text-2xl font-semibold text-primary">{item.stat}</p>
              {/* <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold',
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUp aria-hidden="true" className="size-5 shrink-0 self-center text-green-500" />
                ) : (
                  <ArrowDown aria-hidden="true" className="size-5 shrink-0 self-center text-red-500" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p> */}
              {/* <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div> */}
            </dd>
               <p className="ml-24 truncate text-lg font-medium text-gray-500">{item.name}</p>
          </div>
        ))}
      </dl>
    </div>
  )
}
