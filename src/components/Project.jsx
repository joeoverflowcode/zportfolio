import React, { useState } from 'react'
import styles from '../styles'
import Accordion from 'react-bootstrap/Accordion'
import { FaGithub } from "react-icons/fa6";
import logocard from '../assets/logocard.svg'


const LinkItem = ({ url, icon: Icon, }) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="mr-2 border-2 border-black rounded-full p-2">
        <Icon style={{fontSize:'34px', color:'black'}}/>
      </a>
    )
  }
  
  const Links = ({ links }) => {
    console.log("Received links:", links)

    return (
      <div className='flex items-center justify-center'>
        {links.map((link, index) => {
            console.log("processing link:", link)
        return (
          <LinkItem key={index} url={link.url} icon={link.icon} />
        )
        })}
      </div>
    )
  }

  const Project = ({ image, tech, description, title, details, links, date, color }) => {

    const [showPicture, setShowPicture] = useState(true)

    const toggleCard = () => {
      setShowPicture(!showPicture)
    }

    if(showPicture){
      return(
          <div className={`pt-6 flex flex-col justify-between max-w-[360px] h-[520px] md:mr-10 sm:mr-5 mr-0 m-4 text-[#000029] border-yellow-300 border-8 rounded-[20px] ${color}`}>
            <div className='flex justify-between items-center px-3'>
          <p className={`font-bold text-[22px]`}>{title}</p>
         <p className='text-[18px]'>{date}</p>
            </div>
        
        <div className='px-4 flex flex-col items-center'>
            <img 
            src={image} 
            alt={title} 
            className={`max-w-[310px] max-h-[210px] border-4 border-yellow-300 cursor-pointer bg-[#000029]`} />
                <p className='border-2 border-yellow-300 m-1 px-2 bg-yellow-200 text-[#000029] text-[16px]'>{tech}</p>
        </div>
            
        <div className='px-4 mt-3'>
            <h2 className=' border-b border-black flex justify-center'>{description}</h2>
            <Links 
                links={links} />
        </div>

<div className='flex justify-center p-4 text-[20px] font-bold cursor-pointer' onClick={toggleCard}>
  Click on me to flip the card!
</div>
          {/* <Accordion className='m-4' flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Details</Accordion.Header>
              <Accordion.Body>
                <p>{details}</p>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
          
    </div>


      )
    } else {

      
      return (
        <div className={`m-4 flex flex-col justify-between w-[360px] h-[520px] md:mr-10 sm:mr-5 text-white bg-[#000029] border-yellow-300 border-8 rounded-[20px] text-center p-4`} onClick={toggleCard}>

        <img id='cardlogo' src={logocard} alt='logo' className=' bg-[#000029]' />

              <div className=' bg-[#000029]'>
                <p className='bg-[#000029]'>{details}</p>
              </div>

    </div>
)
              }
}

export default Project