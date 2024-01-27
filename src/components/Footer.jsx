import React from 'react'
import fb from '../assets/images/icon-facebook.svg'
import tw from '../assets/images/icon-twitter.svg'
import pin from '../assets/images/icon-pinterest.svg'
import insta from '../assets/images/icon-instagram.svg'


const Footer = () => {
  return (
    <div className=' bg-slate-900 md:py-20 py-10'>
      <ul className='md:mx-32 text-center md:text-left text-white font-semibold grid grid-cols-1 md:grid-cols-6'>
        <li className='md:col-span-2'>
          <h1 className="font-bold text-3xl mb-8">Shortly</h1>
        </li>
        <li className='flex flex-col text-slate-500 mb-8'>
          <h3 className='text-white mb-3'>Features</h3>
          <p>Link Shortener</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </li>
        <li className='flex flex-col text-slate-500 mb-8'>
          <h3 className='text-white mb-3'>Resources</h3>
          <p>Blog</p>
          <p>Devlopers</p>
          <p>Support</p>
        </li>
        <li className='flex flex-col text-slate-500 mb-8'>
          <h3 className='text-white mb-3'>Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </li>
        <li className='flex gap-2 justify-center'>
          <img src={fb} alt="" className='w-5 h-5 cursor-pointer' />
          <img src={tw} alt="" className='w-5 h-5 cursor-pointer' />
          <img src={pin} alt="" className='w-5 h-5 cursor-pointer' />
          <img src={insta} alt="" className='w-5 h-5 cursor-pointer' />
        </li>

      </ul>
    </div>
  )
}

export default Footer