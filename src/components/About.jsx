import React from 'react'
import styles from '../styles'
import '../index.css'
import Grid from './Grid'
import film from '../assets/film.png'
import Accordion from 'react-bootstrap/Accordion'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import monoSurf from '../assets/monosurfedit.png'

const About = () => {
  return (
    <section id="about" className={` ${styles.paddingY}
            shapedividers_com-3752
               background1`}>



          <div className={`md:px-10 drop-shadow-xl flex flex-col md:flex-row-reverse w-full h-full justify-evenly items-center`}>
              <div className={`px-4 md:px-10 py-10 md:py-40`}>
                <div className={`px-8 max-w-[600px] flex flex-col text-center items-center justify-center text-primary bg-white rounded-[25px] `}>
                      <h1 className={`${styles.heading}`}>About</h1>
                      <p className={`${styles.paragraph} text-[#000029a2]`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <p className={`${styles.paragraph} text-[#000029a2]`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>

              <div className='flex justify-center pb-8 md:pb-0'>
                <img src={monoSurf} alt='test' className=' border-3 border-gray-500 rounded-[25px]  max-w-[250px] md:max-h-[800px] translate -rotate-3 ' />
              </div>





      </div>
    

      <div className="custom-shape-divider-bottom-1707681356">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

    </section>
  )
}

export default About