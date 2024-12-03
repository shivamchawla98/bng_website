import React from 'react'

function Cta() {
  return (
<div className="bg-[#072a47] text-white py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold">
      Request a <span className="text-[#1BB6FF]">Demo/Consultation</span>
    </h2>
    <p className="mt-4 text-lg md:text-xl">
      See How BNG Can Work for You
    </p>
    <button
      className="mt-8 px-6 py-3 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-[#072a47] transition-all duration-300">
      Request a Demo
    </button>
  </div>
</div>

  )
}

export default Cta