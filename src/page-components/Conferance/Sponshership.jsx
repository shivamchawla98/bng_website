import React from 'react';
import { ArrowRight, Users, Trophy, Network, Building } from 'lucide-react';

const FeatureList = ({ items }) => (
  <ul className="space-y-4 mt-6">
    {items.map((item, index) => (
      <li key={index} className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-6 h-6 mt-1">
          <item.icon className="w-6 h-6 text-primary" />
        </div>
        <span className="text-gray-600">{item.text}</span>
      </li>
    ))}
  </ul>
);

function Sponsorship() {
  const attendeeFeatures = [
    {
      icon: Users,
      text: "Network with industry leaders and professionals from around the globe"
    },
    {
      icon: Trophy,
      text: "Access exclusive workshops and certification opportunities"
    },
    {
      icon: Network,
      text: "Participate in interactive sessions and hands-on learning experiences"
    }
  ];

  const sponsorFeatures = [
    {
      icon: Building,
      text: "Showcase your brand to a targeted, professional audience"
    },
    {
      icon: Users,
      text: "Direct access to industry decision-makers and potential clients"
    },
    {
      icon: Network,
      text: "Create lasting partnerships and business opportunities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Attendee Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Why you should Attend
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Transform your professional journey with unparalleled learning and networking opportunities.
              </p>
              <FeatureList items={attendeeFeatures} />
              {/* <button className="mt-8 group flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button> */}
            </div>

            {/* Sponsor Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4  text-primary  ">
                Why you should Sponsor
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Elevate your brand presence and connect with key industry stakeholders.
              </p>
              <FeatureList items={sponsorFeatures} />
              {/* <button className="mt-8 group flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-200">
                Become a Sponsor
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsorship;