import React from 'react';
import styles from '../styles';
import Project from './Project';
import { ProjectData } from '../constants';
import { useState } from 'react'
import ProjectCard from './ProjectCard';


const Projects = () => {
  return (
  <section id='projects' className={`${styles.paddingX} background1 shapedividers_com-3752 `}>
    <div className={`py-40 md:flex justify-center px-10`} >

        <div className={`max-w-[700px]`}>
          <div className={`${styles.flexCenter} flex flex-col text-center text-primary bg-white rounded-[25px] drop-shadow-xl justify-evenly p-4 `}>

            <h1 className={`${styles.heading}`}>Projects</h1>
              <p className={`${styles.paragraph} text-[#000029a2]`}> Project box lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p> 
          </div>
        </div>
      </div>

<div className='flex flex-wrap'>
  {ProjectData.map((project) => (

  <div key={project.id} className='m-3'>
    <ProjectCard

    front={project.image}
    date={project.date}
    tech={project.tech}
    details={project.details}
    type={project.type}
    stack={project.stack}
    name={project.title}
    links={project.links}
    />
    </div>
  ))}

</div>




      {/* <div className={`flex flex-wrap sm:justify-start justify-center pb-40`}>
        {ProjectData.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            date={project.date}
            tech={project.tech}
            description={project.description}
            title={project.title}
            details={project.details}
            links={project.links}
            color={project.color}
          />
        ))}
      </div> */}

      {/* <div className="custom-shape-divider-bottom-1707681356">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div> */}

  </section>
)
  }

export default Projects;
