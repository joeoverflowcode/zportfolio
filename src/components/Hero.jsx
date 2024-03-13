import React from 'react'
import Hero1920 from '../assets/2hero1980.png'
import mobileHero from '../assets/mobileHero.png'
import styles from '../styles'
import ContactButton from './ContactButton.jsx'
import logo from '../assets/logo.svg'

const Hero = () => (
    <section className={``}>
               <div className={`flex ease-in duration-100 hover:text-dimWhite font-poppins text-white sm:hidden block `}>
                {/* <div className='font-bold text-[34px]'>
                  Joe Aguado
                  </div>   
                  <div className='text-[20px]'>JS | React Developer</div> */}

                  <div className={`top-0 left-4 relative py-3`}>
                    <a href='#' alt='home' className='hover:opacity-80 '>
                    <img src={logo} alt='logo' className={`w-[140px] object-contain`} />
                    </a>
                  </div>
              </div>
              
                <div className='relative'>
                    <img src={Hero1920} alt='hero1920' className='hidden sm:block '/>
                    <img src={mobileHero} alt='mobileHero' className='sm:hidden block w-full' />
                {/* <div className={` ${styles.flexCenter} absolute z-[10] top-20 right-40 `}> */}
                    {/* <ContactButton /> */}

                    {/* <article class="p-1.5 mx-auto my-4 max-w-sm rounded-full bg-gradient-to-r from-blue-950 via-slate-800 to-primary ">
  <div class="bg-primary p-5 rounded-full hover:bg-white hover:text-primary text-white">
      <a class="" href="https://coding-space.vercel.app " target="_blank" title="codingspace"><h4 class="text-xl font-bold flex flex-col items-center text-center">Contact <span className='text-xl'>Joe ↗</span> </h4>
  </a></div>
</article> */}
                {/* </div> */}
                </div>


    </section>
)

export default Hero