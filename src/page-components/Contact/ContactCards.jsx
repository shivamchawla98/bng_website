
import { FaWhatsapp, FaPhone } from "react-icons/fa"
import { IoMail } from "react-icons/io5";


export default function ContactCard() {
  return (
    <div className="bg-white py-8 sm:pb-16">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
      
           
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-3 lg:gap-8">
              <div className="rounded-2xl bg-gradient-to-r from-white to-gray-100 shadow-lg transition-transform transform hover:scale-105 duration-300 p-10">
                <div className="flex justify-start items-center gap-x-4">
<FaWhatsapp className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">WhatsApp</h3>
                </div>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">whatsapp</dt>
                    {/* <dd>
                      <a href="mailto:membership@bnglogisticsnetwork.com" className="font-semibold text-base text-indigo-600">
                        membership@bnglogisticsnetwork.com
                      </a>
                    </dd> */}
                  </div>
                  <div className="mt-1 text-lg">
                    <dt className="sr-only">Phone number</dt>
                    <a target="_blank" href="https://wa.me/+917240774077">+91 72 4077 4077</a>
                  </div>
                </dl>
              </div>
         
              <div className="rounded-2xl bg-gradient-to-r from-white to-gray-100 transition-transform transform hover:scale-105 duration-300 shadow-lg p-10">
                <div className="flex justify-start items-center gap-x-4">
<FaPhone className="h-7 w-7 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">Phone</h3>
                </div>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">phone</dt>
                    {/* <dd>
                      <a href="mailto:membership@bnglogisticsnetwork.com" className="font-semibold text-base text-indigo-600">
                        membership@bnglogisticsnetwork.com
                      </a>
                    </dd> */}
                  </div>
                  <div className="mt-1 text-lg">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+91 72 4077 4077</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-white to-gray-100 shadow-lg transition-transform transform hover:scale-105 duration-300 p-10">
                <div className="flex justify-start items-center gap-x-4">
<IoMail className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">Email</h3>
                </div>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">email</dt>
                    {/* <dd>
                      <a href="mailto:membership@bnglogisticsnetwork.com">
                        membership@bnglogisticsnetwork.com
                      </a>
                    </dd> */}
                  </div>
                  <div className="mt-1 text-lg">
                    <dt className="sr-only">Phone number</dt>
                    <dd><a href="mailto:membership@bnglogisticsnetwork.com">membership@bnglogisticsnetwork.com</a></dd>
                  </div>
                </dl>
              </div>
            </div>
     
    
        </div>
      </div>
    </div>
  )
}
