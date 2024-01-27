import React, { useState } from 'react'
import logo from '../assets/images/logo.svg';
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";



const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      
        <header className="flex items-center mx-5 py-8 md:mx-32 justify-between">
          <div className='flex items-center'>
            <img src={logo} alt="log image" />
            <nav className='hidden md:block'>
              <ul className='flex ml-6 gap-5 font-semibold text-slate-400 '>
                <li className='hover:text-black'>
                  <a href="#">Features</a>
                </li>
                <li className='hover:text-black'>
                  <a href="#">Pricing</a>
                </li>
                <li className='hover:text-black'>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </nav>

          </div>
          <button className='md:hidden block' onClick={() => setOpen(!open)}>
            {open ? <MdClose className='text-3xl' /> : <CiMenuBurger className='text-3xl' />
            }

          </button>
          {open && (
              <div className="md:hidden absolute left-6 right-6 top-20 rounded-xl bg-slate-900 text-slate-100 text-center py-8 font-semibold">
                <nav>
                  <ul className="flex flex-col gap-5">
                    <li className='hover:text-cyan-400 '>
                      <button>Features</button>
                    </li>
                    <li className='hover:text-cyan-400 '>
                      <button>Pricing</button>
                    </li>
                    <li className='hover:text-cyan-400 '>
                      <button>Resources</button>
                    </li>
                  </ul>
                </nav>
                <hr className="bg-gray-600 border-0 h-px mt-5  mx-20" />
                <ul className="flex flex-col items-center justify-center">
                  <li className="my-5">
                    <button className='hover:text-cyan-400 font-semibold'>Login</button>
                  </li>
                  <li>
                    <button className='py-1 px-5 rounded-full text-white hover:bg-cyan-800 bg-cyan-400 font-semibold'>Signup</button>
                  </li>
                </ul>
              </div>
          )}

          <div className='md:block hidden'>
            <div className='flex gap-5'>
              <button className='hover:text-black text-slate-400 font-semibold'>Login</button>
              <button className='py-1 px-5 rounded-full text-white hover:bg-cyan-800 bg-cyan-400 font-semibold'>Signup</button>
            </div>
          </div>

        </header>

    

    </>
  )
}

export default Header