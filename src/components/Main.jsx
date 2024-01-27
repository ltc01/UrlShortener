import React from 'react' 
import sideImg from '../assets/images/illustration-working.svg';


const Main = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 md:place-items-center ml-32 md:gap-10'>
      <article className='text-center md:text-start pr-40'>
        <h1 className='text-slate-800 mb-5 text-6xl font-bold '>
          More than just shorter links
        </h1>
        <p className='text-slate-400 text-lg mb-10'>
        Build your brand’s recognition and get detailed insights on how
              your links are performing.
        </p>
        <button className='bg-cyan-400 text-white font-semibold px-10 py-2 rounded-full'>
          Get Started
        </button>
      </article>
      <article>
      <img src={sideImg} alt="working women"/>
      </article>
    </div>
    </>
  )
}

export default Main