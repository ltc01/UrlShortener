import React from 'react'

import urlBg from '../assets/images/bg-shorten-desktop.svg'
import urlBgMob from '../assets/images/bg-shorten-mobile.svg'

const Shortener = () => {
    return (
        <>
            <div className='bg-slate-200 md:py-10'>
                <div className="rounded-xl relative overflow-hidden mx-56 bg-slate-800">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={urlBg} />
                        <img src={urlBgMob} alt="" />
                    </picture>
                    <div className="absolute top-0 m-14 w-[50rem] grid grid-cols-1 gap-4 md:grid-cols-4">
                        <input type="text" name="url" id="url"
                            placeholder='Enter url...'
                            className='bg-slate-100 py-2 pl-4 col-span-3 rounded-md' />
                        <button className='bg-cyan-400 text-white font-semibold py-2 rounded-md'>
                            Short
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Shortener