import React from 'react'

import boostBg from '../assets/images/bg-boost-desktop.svg'
import boostBgmob from '../assets/images/bg-boost-mobile.svg'

const Bottom = () => {
  return (
    <div className='relative'>
      <div className='bg-slate-900'>
        <picture>
          <source media="(min-width:768px )" srcset={boostBg} />
          <img src={boostBgmob} alt="" />
        </picture>
      </div>
      <div className='text-center absolute top-20 w-full'>
        <h1 className="text-5xl font-bold mb-7 text-white">
          Boost your links today
        </h1>
        <button className='bg-cyan-400 text-white font-semibold px-10 py-2 rounded-full'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Bottom