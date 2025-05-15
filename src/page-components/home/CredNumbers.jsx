'use client';

import { motion } from 'framer-motion';
import { Users, Globe, MapPin, Building } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { icon: Users, value: 100, label: 'Members', color: '#8937ac', suffix: '+' },
  { icon: Globe, value: 50, label: 'Countries', color: '#6b21a8', suffix: '+' },
  { icon: MapPin, value: 200, label: 'Cities', color: '#9f4bc4', suffix: '+' },
  { icon: Building, value: 25, label: 'Offices', color: '#7e22ce', suffix: '+' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: 5 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const StatsWidget = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative py-16 overflow-hidden bg-[#eff6ff]" ref={ref}>
      {/* Background Illustration */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8937ac', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6b21a8', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M0,100 C300,50 600,150 900,100 C1200,50 1440,150 1440,300 V600 H0 Z"
          fill="url(#gradient)"
        />
        <circle cx="200" cy="400" r="50" fill="#9f4bc4" opacity="0.3" />
        <circle cx="1200" cy="200" r="80" fill="#7e22ce" opacity="0.3" />
      </svg>

  

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-[60px] font-bold text-center text-gray-900 mb-12"
        >
          Our <span className='text-[#46349a]'>Global</span> Impact
        </motion.h2>
        <h2
            className="absolute text-center top-[-30px] md:left-[30%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true">
           Our Global Impact
          </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="relative bg-white rounded-2xl shadow-xl p-6 text-center overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {/* Card Background Effect */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `radial-gradient(circle at center, ${stat.color} 0%, transparent 70%)`,
                }}
              />
              <div className="relative flex justify-center mb-4">
                <stat.icon
                  className="w-14 h-14 transform hover:rotate-12 transition-transform duration-300"
                  style={{ color: stat.color }}
                />
              </div>
              <h3 className="text-4xl font-bold" style={{ color: stat.color }}>
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    formattingFn={(value) => Math.floor(value).toLocaleString() + stat.suffix}
                  />
                ) : (
                  '0' + stat.suffix
                )}
              </h3>
              <p className="font-semibold text-gray-600 text-base group-hover:text-opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsWidget;