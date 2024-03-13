import React from 'react'
import styles from '../styles'

import { GoArrowUpRight } from "react-icons/go";

const ContactButton = () => {
  return (
    <div id='outterRing' className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full border-dimWhite border-2 cursor-pointer tracking-wider hover:tracking-widest text-dimWhite text-[22px] font-montserrat hover:border-white hover:text-white`}>
        <div id='innerRing' className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-transparent`}>
                <div className={`${styles.flexStart} flex-row]`}>
                    <p className='leading-[23px]'>
                        <span className=' '>Contact</span>
                    </p>
                </div>
<div className={`${styles.flexStart} flex-row`}>

                    <p className='leading-[23px] mr-1'> 
                        <span className=''>Joe
                        </span>
                    </p>
                                      {/* <GoArrowUpRight
                                      size={26}
                                      style={{color:'white hover:text-gray-400'}}
                                      className='hover:text-gray-400'/> */}


</div>

        </div>

        </div>
  )
}

export default ContactButton