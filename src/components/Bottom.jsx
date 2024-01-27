import React from 'react'

import boostBg from '../assets/images/bg-boost-desktop.svg'
import boostBgmob from '../assets/images/bg-boost-mobile.svg'

const Bottom = () => {
  return (
    <div className='relative'>
      <div className='bg-slate-900'>
        <picture>
          <source media="(min-width:768px )" srcSet={boostBg} />
          <img src={boostBgmob} alt="boost" className='w-full h-48' />
        </picture>
      </div>
      <div className='text-center absolute top-10 w-full'>
        <h1 className="md:text-5xl text-3xl font-bold mb-7 text-white">
          Boost your links today
        </h1>
        <button className='bg-purple-800 hover:bg-purple-400 text-white font-semibold px-10 py-2 rounded-full'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Bottom