import React from 'react'
import Skill from './Skill'
import styles from '../styles'
import ContactButton from '../components/ContactButton'
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import Accordion from 'react-bootstrap/Accordion'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';


const Skills = () => (

    <section id="skills" className={` shapedividers_com-5487 relative py-10`}>


    <div className={`px-4 sm:px-10`}>

            <div className={`${styles.flexCenter} flex flex-col text-center rounded-[25px] drop-shadow-xl justify-evenl  min-w-[200px] text-white pb-10`}>
                <h1 className={`${styles.heading} text-white`}>Skills</h1>
                <p className={`${styles.paragraph} text-white`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            </div>
    
                <div className="flex-col grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 sm:px-10 md:px-20 text-dimWhite py-10">
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"alt="The logo icon for JavaScript" title="JavaScript"/>
    
                    {/* <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"alt="Python" title="Python"/> */}
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="The logo icon for react" title="React"/>
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
    
                    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="The logo icon for CSS3" title="CSS 3"/>
    
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="The logo icon for TailwindCSS" title="Tailwind"/>
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Java" title="Bootstrap"/>
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"alt="Icon for Redux" title="Redux"/>
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"alt="Git" title="Git"/>
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"alt="Java" title="PostgreSQL"/>
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="The logo icon for Sequelize" title="Sequelize"/>
    

    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="The logo icon for NodeJS" title="Node JS"/>  

                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"alt="Visual Studios" title="Visual Studios"/>
  
                </div>


      </div>
    
                </section>            
        

)

export default Skills