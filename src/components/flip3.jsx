import React, { useState } from 'react'
import Watchlist from '../assets/Watchlist.png'
import bees from '../assets/BioBehavioral2.png'
import logo from '../assets/nobglogo.svg'
import vtest1 from '../assets/mobileCarousel1.png'
import vtest2 from '../assets/mobileCarousel5.png'
import mobiletest1 from '../assets/mobiletest1.png'
import blankbgmobile from '../assets/blankbgmobile.png'
import mobiletest2 from '../assets/mobiletest2.png'

import { 
    FaYoutube, 
    FaGithub,
    FaHome
  } from "react-icons/fa";

const Flip3 = () => {
    const [showPicture, setShowPicture] = useState(true)
    const toggleCard = () => {
        setShowPicture(!showPicture)
    }
    if(showPicture){
        return(
            <div 
                className='relative flex items-center text-center'
            >
                <img src={mobiletest2} alt='portfolio' className='flex items-center justify-center ' onClick={toggleCard} />
                {/* <div className='absolute text-red-400 z-[1] font-bold text-[70px] flex items-center justify-center inset-0'>
                    <div onClick={toggleCard} className='w-[300px] '>
                    Click Me
                </div>
                </div> */}
            </div>
        )
    } else {
          return (
            <div onClick={toggleCard} 
            className='text-white relative flex items-center h-full text-center'>
                <img src={blankbgmobile} alt='biobeeback' className='rounded-[30px]' />
            
            <div id='overlay' className=' absolute text-white z-[100] h-full flex flex-col justify-evenly py-8 items-center'>

                    <img src={logo} alt='' className=' min-w-[250px]' />
                    <div className=''>
                    <p className='font-bold mb-1 text-sm'>Bio Behavorial </p>
                    <p className='text-[18px] mb-0'>JavaScript, React, Tailwind</p>
                    <p className='text-[16px] mb-0'> January 2024</p>
                    </div>



            

                    <p className='text-[18px] px-10'><span className='font-bold'>Bio Behavorial </span> is a professional minimum viable product (MVP) I coded for a clinic based out of New York City. The project required logo redesign, data handling, screen responsiveness and deployment solutions.  </p>

                    <div id='Icons' className=' w-full flex justify-evenly pb-4 px-4'>
                        <FaYoutube 
                        size={35}
                        color='white' />
                        <FaHome 
                        className=''
                        size={35}
                        color='white' />
                        <FaGithub
                        className=''
                        size={35}
                        color='white' />
                    </div>


            </div>
            </div>
  )
    }
}


export default Flip3