import React, { useState } from 'react'
import test1 from '../assets/test2.png'
import bees from '../assets/BioBehavioral2.png'
import logo from '../assets/logo.svg'
import vtest1 from '../assets/mobileCarousel1.png'

import { 
    FaYoutube, 
    FaGithub,
    FaHome
  } from "react-icons/fa";

const Flip = () => {
    const [showPicture, setShowPicture] = useState(true)
    const toggleCard = () => {
        setShowPicture(!showPicture)
    }
    if(showPicture){
        return(
            <div 
                className='relative flex items-center text-center'
            >
                <img src={bees} alt='biobee' className='rounded-[30px]' />
                <div className='absolute text-white/10 z-[1] font-bold text-[70px] flex items-center justify-center inset-0'>
                    <div onClick={toggleCard} className='w-[300px] '>
                    Click Me
                </div>
                </div>
            </div>
        )
    } else {
          return (
            <div onClick={toggleCard} 
            className='text-white relative flex items-center w-full h-full text-center'>
                <img src={bees} alt='biobeeback' className='rounded-[30px]' />

            <div id='overlay' className='bg-black/90 absolute text-white z-[100] font-bold w-full h-full rounded-[30px] flex'>

                <div id='left-side' className='flex flex-col  w-1/2 justify-center h-full text-left pl-20'>  

                    <h1 className='text-[24px] font-bold'>Bio Behavorial</h1>
                    <h2 className='text-[18px]'>January 2024</h2>
                    <p>Front End - JavaScript, React, Tailwinds</p>

                    <div id='Icons' className='flex'>
                        <FaYoutube 
                        size={30}
                        color='white' />
                        <FaHome 
                        className='ml-3'
                        size={30}
                        color='white' />
                        <FaGithub
                        className='ml-3'
                        size={30}
                        color='white' />
                    </div>

                </div>
            
                <div id='right-side' className='flex flex-col w-1/2 justify-center pr-20'>
                    <p>Bio Behavorial is a professional minimum viable product (MVP) I coded for a clinic based out of New York City. The project required logo redesign, data handling, screen responsiveness and deployment solutions.  </p>
                </div>
            </div>
            </div>
  )
    }
}


export default Flip