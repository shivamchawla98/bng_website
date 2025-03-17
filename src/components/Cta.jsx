import React from 'react'

function Cta() {
  return (
<div className="bg-gradient-to-tr  from-[#6853DB] to-[#6853DB] text-white py-16">
  <div className="container text-gray-200 mx-auto text-center">
    <h2 className="text-3xl text-gray-200 md:text-4xl font-bold">
      Request a <span className="text-white">Consultation</span>
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