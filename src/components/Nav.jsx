import React, {useState} from 'react'
import { 
  AiOutlineMenu, 
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineClose
} from 'react-icons/ai'

import{BsPerson,
  BsBarChartLine,
} from 'react-icons/bs'

import {GrProjects,
} from 'react-icons/gr'

import { navLinks } from '../constants'
import logo from '../assets/logo.svg'
import styles from '../styles'

  function Nav({iconColor}) {

    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
        console.log('state changed')
    }

    const handleCloseNav = () => {
        setNav(false)
    }

    const outlineMenuColor = `${iconColor} absolute top-8 right-8 z-[100] sm:hidden text-white border border-white p-1 cursor-pointer rounded-lg border-2 `


  return (
    <div className='bg-[#000029]'>

        <div className=' flex justify-end'>

        <AiOutlineMenu 
                size={45}
                className={outlineMenuColor}
                onClick={handleNav} />

        </div>

        { nav ? (
            <div 
            className='sm:hidden fixed w-screen h-screen bg-black/20 backdrop-filter backdrop-blur-lg bg-opacity-15 flex flex-col justify-center items-center z-20'
            onClick={handleCloseNav}>

                {/* <a href='/' className={`${styles.navButton}`}>
                    <AiOutlineHome
                    size={20}/>
                    <span className='pl-4'>Home</span>
                </a> */}
                
                <a href='#about' 
                className={`${styles.navButton}`}>
                    <BsPerson
                    size={20}/>
                    <span className='pl-4'>About</span>
                </a>


                <a href='#skills' 
                className={`${styles.navButton}`}>
                    <BsBarChartLine
                    size={20}/>
                    <span className='pl-4'>Skills</span>
                </a>

                <a href='#projects' className={`${styles.navButton}`}>
                    <GrProjects
                    size={20}/>
                    <span className='pl-4'>Projects</span>
                </a>

                <a href='#contact' className={`${styles.navButton}`}>
                    <AiOutlineMail
                    size={20}/>
                    <span className='pl-4'>Contact</span>
                </a>

                <div className={``}>
                <AiOutlineClose 
                size={55}
                className='flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 text-gray-600 mt-10  cursor-pointer hover:scale-110 ease-in duration-200 p-3'
                />
                </div>
            </div>
            ) 
            : (
                ''
            )
        }

<div className='sm:block hidden bg-[#000029]'>

    <div className='flex justify-between sticky top-0 z-50 px-16'>

               <a href="#" className="cursor-pointer hover:opacity-80 z-[100]">
                <img src={logo} alt='logo' className="w-[160px] " />
              </a>

             

              <ul className="list-none sm:flex hidden justify-end items-center flex-1">
    {navLinks.map((nav, index)=> (
        <li
            key={nav.id}
            className={`hover:text-dimWhite font-montserrat relative cursor-pointer text-[15px] sm:text-[17px] ${index === navLinks.length -1 ? 'mr-4' : 'mr-8'} mr-10`}
        >
            <a href={`#${nav.id}`} className='tracking-wide text-white hover:text-dimWhite'>
                {nav.title}
                <span className="absolute -bottom-3 left-0 w-full h-0 bg-white transition-all ease-out "></span>
            </a>
        </li>
    ))}

<a href='#contact' className='ml-6 text-[15px] button1 no-underline'>
    <span>Contact</span>
</a>
</ul>
</div>

</div>




    </div>
  )
}


export default Nav