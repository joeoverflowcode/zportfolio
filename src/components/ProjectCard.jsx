import React, { useState } from 'react'
import styles from '../styles'
import cardback from '../assets/cardback.png'
import logo from '../assets/nobglogo.svg'


const IconLink =({ url, icon: Icon}) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className=''>
            <Icon style={{fontSize:'35px', color:'white'}} 
            />
        </a>
    )
}

const IconList = ({links}) => {
    console.log("received links:", links)
    return (
        <div className='w-full flex justify-evenly'>
            {links.map((link, index) => {
                console.log("processing link:", link)
                return (
                    <IconLink key={index} url={link.url} icon={link.icon} 
                    />
                )
            })}
        </div>
    )
}

const ProjectCard = ({front, name, date, tech, details, links, type, stack }) => {
    const [showPicture, setShowPicture] = useState(true)
    const toggleCard = () => {
        setShowPicture(!showPicture)
    }
    if(showPicture){
        return(
            <div className='relative max-w-[410px]'>

                <img src={front} alt='frontcard' className='flex items-center justify-center rounded-[30px] object-cover w-full h-full'  />

                <div id='overlay' onClick={toggleCard} className='absolute text-white z-[1] h-full w-full flex flex-col inset-0'>

                    <div id='cardContent' className='h-1/4 flex p-8'>

                        <div className='w-1/2'>
                            <div id='name' className=''>
                                <p className='mb-0 font-thin'>Name: </p>
                                <p className=' xs:text-[22px]'>{name} </p>
                            </div>
                            <div className='stack'>
                                <p className=' mb-0 font-thin'> Stack: </p>
                                <p className=' xs:text-[22px]'> {stack}</p>
                            </div>

                        </div>

                        <div className='w-1/2 text-end'>
                            <div id='type' className=''>
                                <p className=' mb-0 font-thin'>Type: </p>
                                <p className=' xs:text-[22px]'>{type} </p>
                            </div>
                            <div className=''>
                                <p className=' mb-0 font-thin'> Completed:</p>
                                <p className='  xs:text-[22px]'> {date}</p>
                            </div>

                        </div>
                    </div>



                    <div id='blockBottom' className='h-3/4'>

                    <div id='details' className='h-full cursor-pointer pt-2 text-center'>

                            <p className='text-[24px] font-thin'>click for details</p>

                    </div>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div onClick={toggleCard} 
            className='text-white relative flex items-center h-full text-center max-w-[410px]'>
                <img src={cardback} alt={name} className='rounded-[30px]' />
            
            <div id='overlay' className=' absolute text-white z-[10] h-full flex flex-col justify-evenly items-center '>
                    
                    
                    
                        <img src={logo} alt='' className='w-[200px] sm:w-[300px]' />
                    





                        <p className='text-[20px] px-10 xs:px-20 font-thin'><span className='font-bold'>{name}</span>  {details}  </p>

                            <div className='text-center justify-center items-center'>
                                <p className=' mb-0 font-thin'>Technologies:</p>
                                <p className=' mb-0 xs:text-[22px]'>{tech}</p>
                            </div>

                        <div id='Icons' className='pb-10 w-full flex justify-evenly'>


                            <IconList 
                            links ={links}/>

                        </div>



            </div>
            </div>
  )
    }
}

export default ProjectCard