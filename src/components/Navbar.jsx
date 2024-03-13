import React from 'react'
import { useState } from 'react'

import {close, menu,} from '../assets'
import logo from '../assets/logo.svg'
import {navLinks} from '../constants'


const Navbar = () => {

    const [toggle, settoggle] = useState(false)

  return (
    <nav className='w-full flex py-6 px-4 bg-[#000029] '>

      <div className=''>
          <img src={logo} className='w-[160px] hover:opacity-80' alt='logo'/>
      </div>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
            <li 
            key={nav.id}
            className={`font-poppins cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-2 text-white font-bold' : 'mr-8'} mr-10 `}
            >
<a href={`#${nav.id}`}>
    {nav.title}
</a>
            </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <div className='border-2 border-white p-1 rounded-lg'>
        <img src={toggle ? close : menu } 
        alt='menu'
        className='w-[30px] h-[30px] object-contain'
        onClick={() => settoggle((prev) => !prev)}
        />
        </div>

<div className={`${toggle ? 'flex' : 'hidden'}  bg-white sticky rounded-xl `}>

<ul className='list-none flex flex-col justify-end items-center flex-1 text-white'>
        {navLinks.map((nav, index) => (
            <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0 text-white text-[18px] font-semibold tracking-wider' : 'mb-5'} mr-10 `}
            >
<a href={`#${nav.id}`}>
    {nav.title}
</a>
            </li>
        ))}
      </ul>
</div>

      </div>

    </nav>
  )
}

export default Navbar