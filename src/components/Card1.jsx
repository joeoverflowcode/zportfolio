import React, { useState } from 'react'
import cardCarousel from '../assets/cardCarousel.png'

import Watchlist from '../assets/Watchlist.png'
import bees from '../assets/BioBehavioral2.png'
import logo from '../assets/nobglogo.svg'
import vtest1 from '../assets/mobileCarousel1.png'
import vtest2 from '../assets/mobileCarousel5.png'
import mobiletest1 from '../assets/mobiletest1.png'
import blankbgmobile from '../assets/blankbgmobile.png'
import mobiletest2 from '../assets/mobiletest2.png'
import carouselcard2 from '../assets/carouselcard2.png'
import carousel1 from '../assets/5.png'
import cardback from '../assets/cardback.png'

import { 
    FaYoutube, 
    FaGithub,
    FaHome
  } from "react-icons/fa";


const Card1 = () => {
    const [showPicture, setShowPicture] = useState(true)
    const toggleCard = () => {
        setShowPicture(!showPicture)
    }
    if(showPicture){
        return(
            <div 
                className='relative flex items-center text-center'>

                <img src={carousel1} alt='portfolio' className='flex items-center justify-center rounded-[30px] object-cover w-full h-full'  />

                <div id='overlay' onClick={toggleCard} className='absolute text-white z-[1] h-full w-full flex flex-col inset-0'>

                    <div id='cardContent' className='h-1/4 pt-4 items-center flex flex-col justify-between'>

                        <div id='NameAndDate' className=' flex w-full justify-evenly'>
                            <div id='name' className=''>
                                <p className='font-bold mb-0'>Project Name: </p>
                                <p className=' mb-0'>Portfolio </p>
                            </div>
                            <div>
                                <p className='font-bold mb-0'>Date Completed:</p>
                                <p className=' mb-0'> March 2024</p>
                            </div>
                        </div>

                        <div id='TechandDetails' className='pt-2'>
                            <div id='Tech' className=''>
                                <p className='font-bold mb-0'>Primary Tech Used:</p>
                                <p className=''>JavaScript, React, Tailwind</p>
                            </div>
                            <div id='details' className=''>
                                <p className='font-thin'>click for details</p>
                            </div>
                        </div>

                    </div>

                    <div id='blockBottom' className='h-3/4'>

                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div onClick={toggleCard} 
            className='text-white relative flex items-center h-full text-center'>
                <img src={cardback} alt='biobeeback' className='rounded-[30px]' />
            
            <div id='overlay' className=' absolute text-white z-[10] h-full flex flex-col justify-evenly items-center '>

                    <img src={logo} alt='' className='w-[250px]' />


                    <p className='text-[17px] px-12 tracking-wide'><span className='font-bold'>Portfolio</span>  euismod nisi porta  aliquam. Morbi quis commodo odio aenean. Sed id semper risus in. Gravida dictum fusce ut placerat orci nulla. Nunc pulvinar sapien et ligula.  </p>

                    <div id='Icons' className='pb-4 w-full flex justify-evenly'>
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

export default Card1