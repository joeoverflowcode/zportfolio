import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import Movies from '../assets/Movies.png'
import Carousel from 'react-bootstrap/Carousel'
import BioBehavioral from '../assets/BioBehavioral2.png'
import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'
import blankbgmobile from '../assets/blankbgmobile.png'
import Card1 from './Card1'
import Card2 from './Card2'
import ProjectCard from './ProjectCard'
import { ProjectData } from '../constants'

import { 
  FaYoutube, 
  FaGithub,
  FaHome
} from "react-icons/fa";

import Flip from './Flip'
import Flip2 from './Flip2'
import Flip3 from './flip3'
import Flip4 from './Flip4'
import styles from '../styles'
import New2 from './New2'
import CarouselItem from 'react-bootstrap/esm/CarouselItem'



const New = () => {

  return (

    <section id='projects' className={`${styles.paddingY} background1 shapedividers_com-3752 flex flex-col items-center`}>
    <div className={`pt-20 md:flex justify-center px-4`} >

        <div className={`max-w-[700px]`}>
          <div className={`${styles.flexCenter} flex flex-col text-center text-primary bg-white rounded-[25px] drop-shadow-xl justify-evenly p-4`}>

            <h1 className={`${styles.heading}`}>Projects</h1>
              <p className={`${styles.paragraph} text-[#000029a2]`}> Organized as two-sided 'cards' within a carousel, swipe left/right to see some of the projects I have worked on.   </p> 
              <p className={`${styles.paragraph} text-[#000029a2]`}>Click on each project card to read more details on the back.  </p> 
          </div>
        </div>
      </div>


{/* <div className='p-10 sm:hidden block'>
    <Carousel 
    // data-bs-theme="dark" 
    className='z-[100]'

    >
      

      <Carousel.Item>
        <Flip3 />
      </Carousel.Item>
      
      <Carousel.Item>
        <Card1 />
      </Carousel.Item>

      <Carousel.Item>
        <Card2 />
      </Carousel.Item>
    </Carousel>
</div> */}





{/* <div className='hidden sm:block'>
  <New2 />
</div> */}



<div className='p-6  '>
<Carousel className='' >
{ProjectData.map((project)=> (
  <Carousel.Item
  key={project.id}
  >
      {console.log(project.image)}
    <ProjectCard
        key={project.id}
        front={project.image}
        date={project.date}
        tech={project.tech}
        details={project.details}
        type={project.type}
        stack={project.stack}
        name={project.title}
        links={project.links}
    />
  </Carousel.Item>
))}


</Carousel >
</div>



{/* <div className='px-8'>
  {ProjectData.map((project) => (

  
    <ProjectCard
    key={project.id}
    front={project.image}
    date={project.date}
    tech={project.tech}
    details={project.details}
    name={project.title}
    links={project.links}
    />
  ))}

</div> */}


      <div className="custom-shape-divider-bottom-1707681356">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>

  </section>









)
}

export default New