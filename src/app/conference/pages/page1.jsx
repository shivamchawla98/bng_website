'use client'
// pages/bng-logistics-conference.js
import Head from 'next/head'
import { useState } from 'react'

export default function BNGLogisticsConference() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
    interests: [],
    dietaryRequirements: '',
    accommodation: false
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Handle form submission logic here
  }

  const conferenceHighlights = [
    {
      icon: "🚢",
      title: "Maritime Logistics Excellence",
      description: "Explore advanced port operations, container optimization, and maritime technology innovations transforming global shipping."
    },
    {
      icon: "🤖",
      title: "AI-Powered Supply Chain",
      description: "Discover how artificial intelligence and machine learning are revolutionizing demand forecasting, route optimization, and warehouse automation."
    },
    {
      icon: "🌱",
      title: "Sustainable Logistics",
      description: "Learn about green logistics practices, carbon footprint reduction, and sustainable supply chain management strategies."
    },
    {
      icon: "📊",
      title: "Data Analytics & Insights",
      description: "Master the power of big data, predictive analytics, and real-time monitoring for enhanced logistics decision-making."
    },
    {
      icon: "🔗",
      title: "Blockchain Integration",
      description: "Understand how blockchain technology is creating transparency, security, and efficiency in global logistics networks."
    },
    {
      icon: "⚡",
      title: "Last-Mile Innovation",
      description: "Explore cutting-edge last-mile delivery solutions including drones, autonomous vehicles, and micro-fulfillment centers."
    }
  ]

  const speakers = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Supply Chain Officer",
      company: "Global Maritime Solutions",
      topic: "The Future of Container Shipping",
      image: "speaker1"
    },
    {
      name: "Michael Rodriguez",
      position: "VP of Logistics Innovation",
      company: "TechLogistics Corp",
      topic: "AI in Warehouse Management",
      image: "speaker2"
    },
    {
      name: "Emma Thompson",
      position: "Sustainability Director",
      company: "Green Supply Chain Alliance",
      topic: "Carbon-Neutral Logistics",
      image: "speaker3"
    },
    {
      name: "Dr. James Liu",
      position: "Blockchain Technology Lead",
      company: "LogiChain Solutions",
      topic: "Blockchain in Supply Chain",
      image: "speaker4"
    }
  ]

  const schedule = [
    {
      day: "Day 1 - March 15, 2025",
      theme: "Digital Transformation in Logistics",
      sessions: [
        { time: "09:00 - 10:30", title: "Opening Keynote: The Digital Supply Chain Revolution", speaker: "Dr. Sarah Chen" },
        { time: "11:00 - 12:30", title: "AI and Machine Learning Applications", speaker: "Michael Rodriguez" },
        { time: "14:00 - 15:30", title: "IoT and Real-Time Tracking Solutions", speaker: "Panel Discussion" },
        { time: "16:00 - 17:30", title: "Workshop: Implementing Digital Twins", speaker: "Hands-on Session" }
      ]
    },
  ]

  return (
    <>
      <Head>
        <title>BNG Logistic Network Conference 2025 - Singapore</title>
        <meta name="description" content="Join BNG Logistic Network's premier conference in Singapore. Connect with logistics leaders, explore innovations, and shape the future of supply chain management." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white bg-opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300 bg-opacity-20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-8">
                <span className="text-indigo-200 font-medium">March 15-17, 2025 • Singapore</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block">BNG Logistic Network</span>
                <span className="block text-yellow-300">Excellence Summit 2025</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join Asia-Pacific's most influential logistics professionals for three days of innovation, 
                networking, and strategic insights that will transform your supply chain operations.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-indigo-200">Industry Leaders</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-indigo-200">Expert Sessions</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-indigo-200">Countries</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">72hrs</div>
                  <div className="text-indigo-200">Pure Innovation</div>
                </div>
              </div>
              
              <a href="#registration" className="inline-block bg-yellow-400 text-indigo-900 px-12 py-4 rounded-lg text-xl font-bold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Register Now - FREE
              </a>
            </div>
          </div>
        </section>

        {/* Conference Highlights */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Conference Highlights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore cutting-edge topics and innovations that are reshaping the logistics industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conferenceHighlights.map((highlight, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-indigo-100">
                  <div className="text-5xl mb-6">{highlight.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Speakers */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Featured Speakers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn from industry visionaries and thought leaders driving logistics innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakers.map((speaker, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{speaker.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{speaker.name}</h3>
                  <p className="text-indigo-600 font-medium text-center mb-1">{speaker.position}</p>
                  <p className="text-gray-600 text-center mb-4">{speaker.company}</p>
                  <div className="bg-indigo-50 rounded-lg p-3 text-center">
                    <p className="text-sm text-indigo-700 font-medium">{speaker.topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conference Schedule */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Conference Schedule
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive program designed to maximize learning and networking opportunities
              </p>
            </div>
            
            <div className="space-y-12">
              {schedule.map((day, dayIndex) => (
                <div key={dayIndex} className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-2">{day.day}</h3>
                    <p className="text-xl text-indigo-100">{day.theme}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {day.sessions.map((session, sessionIndex) => (
                      <div key={sessionIndex} className="bg-white bg-opacity-20 rounded-lg p-6">
                        <div className="text-yellow-300 font-bold mb-2">{session.time}</div>
                        <h4 className="text-lg font-bold mb-2">{session.title}</h4>
                        <p className="text-indigo-100">{session.speaker}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Event Details & Venue
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 p-3 rounded-lg mr-4">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Conference Dates</h3>
                      <p className="text-gray-600">March 15-17, 2025 (3 Full Days)</p>
                      <p className="text-gray-600">Registration opens at 8:00 AM daily</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-500 p-3 rounded-lg mr-4">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Venue Location</h3>
                      <p className="text-gray-600">Marina Bay Sands Convention Centre</p>
                      <p className="text-gray-600">10 Bayfront Avenue, Singapore 018956</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-500 p-3 rounded-lg mr-4">
                      <span className="text-white text-xl">💼</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">What's Included</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• All conference sessions and workshops</li>
                        <li>• Welcome reception and networking dinner</li>
                        <li>• Daily breakfast, lunch, and coffee breaks</li>
                        <li>• Conference materials and digital resources</li>
                        <li>• Access to exclusive networking areas</li>
                        <li>• Certificate of attendance</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-500 p-3 rounded-lg mr-4">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Target Audience</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Supply Chain Directors and Managers</li>
                        <li>• Logistics Operations Leaders</li>
                        <li>• Technology and Innovation Officers</li>
                        <li>• Procurement and Sourcing Professionals</li>
                        <li>• Transportation and Distribution Experts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Attend?</h3>
                
                <div className="space-y-6">
                  <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                    <div className="flex items-center mb-4">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">100% FREE</span>
                    </div>
                    <h4 className="text-xl font-bold text-green-900 mb-4">Complimentary Summit</h4>
                    <p className="text-green-700">
                      BNG Logistic Network is proud to offer this world-class conference at no cost to logistics professionals.
                    </p>
                  </div>
                  
                  <div className="border border-indigo-200 rounded-lg p-6 bg-indigo-50">
                    <h4 className="text-xl font-bold text-indigo-900 mb-4">Premium Value</h4>
                    <ul className="text-indigo-700 space-y-2">
                      <li>• Network with 500+ industry leaders</li>
                      <li>• Learn from 20+ expert speakers</li>
                      <li>• Access to exclusive workshops</li>
                      <li>• Complete conference materials</li>
                      <li>• All meals and refreshments included</li>
                    </ul>
                  </div>
                  
                  <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                    <h4 className="text-xl font-bold text-purple-900 mb-4">Limited Seats</h4>
                    <p className="text-purple-700">
                      Due to venue capacity, only 500 attendees will be accepted. Register early to secure your spot!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="registration" className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Register for BNG Logistic Network Summit
              </h2>
            </div>
            
            {!isSubmitted ? (
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="+65 1234 5678"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Information</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          name="position"
                          required
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Your job title"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience in Logistics *
                      </label>
                      <select
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      >
                        <option value="">Select your experience level</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="11-15">11-15 years</option>
                        <option value="15+">15+ years</option>
                      </select>
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Interest</h3>
                    <p className="text-gray-600 mb-4">Select all topics that interest you (optional):</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Freight Forwarding',
                        'Supply Chain Management',
                        'Logistics Technology',
                        'Warehouse Management',
                        'Transportation Management',
                        'E-commerce Logistics', 
                        'Maritime Logistics',
                      ].map((interest) => (
                        <label key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="ml-3 text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Dietary Requirements (Optional)
                        </label>
                        <textarea
                          name="dietaryRequirements"
                          value={formData.dietaryRequirements}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Please specify any dietary restrictions or allergies"
                        />
                      </div>
                      
                
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="border-t border-gray-200 pt-8">
                    <div className="flex items-start mb-6">
                      <input
                        type="checkbox"
                        required
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                      />
                      <label className="ml-3 text-sm text-gray-700">
                        I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms and Conditions</a> and 
                        <a href="#" className="text-indigo-600 hover:text-indigo-500 ml-1">Privacy Policy</a>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-indigo-500 text-white py-4 px-8 rounded-lg text-xl font-bold hover:bg-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Complete FREE Registration
                    </button>
                    
                    <p className="text-center text-gray-600 mt-4">
                      You will receive a confirmation email with event details and location information
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 shadow-2xl text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">✓</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h3>
                <p className="text-xl text-gray-600 mb-6">
                  Thank you for registering for the BNG Logistic Network Excellence Summit 2025.
                </p>
                <p className="text-gray-600 mb-8">
                  You will receive a confirmation email with event details, schedule, and venue information within the next 24 hours.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-semibold">
                    🎉 Your seat is confirmed! We look forward to seeing you at the summit.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
                >
                  Register Another Attendee
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
