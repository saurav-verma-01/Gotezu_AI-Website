import React from 'react'

export default function NewHero() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#AF5DD4] to-[#5239C3] text-white p-6 md:p-12">
 
  <h1 className="text-3xl md:text-5xl font-bold text-center uppercase">
    AI-<span className="text-[#FFD700]">Driven</span> Training for Teams
  </h1>


  <div className="mt-6 flex justify-center">
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search Trainers"
        className="w-full px-4 py-3 rounded-full text-black placeholder-gray-600 focus:outline-none"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-yellow-300 p-2 rounded-full">
        🔍
      </button>
    </div>
  </div>

 
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
  
    <div className="md:order-1 lg:order-1">
      <p className="bg-white/20 p-4 rounded-lg">
        Gotezu offers a cutting-edge platform for corporate training, connecting you with top trainers and tailored programs.
      </p>
      <p className="bg-white/20 p-4 rounded-lg mt-4">
        Unlock Team Potential with expert-led, tailored training solutions for measurable success.
      </p>
    </div>

  
    <div className="flex justify-center md:order-2 lg:order-2">
      <div className="relative">
        <img
          src="/phone1.png"
          className="w-32 md:w-40 lg:w-48 absolute top-0 left-6"
        />
        <img src="/phone2.png" className="w-40 md:w-48 lg:w-56 relative z-10" />
      </div>
    </div>

    
    <div className="md:order-3 lg:order-3 flex flex-col items-center">
      <button className="bg-yellow-300 text-black px-6 py-3 font-bold rounded-full flex items-center">
        BOOK NOW <span className="ml-2">➤</span>
      </button>
    </div>
  </div>

 
  <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
    <div>
      <h3 className="text-xl font-bold">20k+</h3>
      <p className="text-sm">VR Content Library</p>
    </div>
    <div>
      <h3 className="text-xl font-bold">100k+</h3>
      <p className="text-sm">Positive Reviews</p>
    </div>
    <div>
      <h3 className="text-xl font-bold">500k+</h3>
      <p className="text-sm">Active Users</p>
    </div>
  </div>


  <div className="mt-8 flex justify-center gap-4">
    <img src="/icon1.png" className="w-12" />
    <img src="/icon2.png" className="w-12" />
    <img src="/icon3.png" className="w-12" />
    <img src="/icon4.png" className="w-12" />
  </div>
</div>

  )
}
