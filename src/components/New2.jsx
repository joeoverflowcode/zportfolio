import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import Movies from '../assets/Movies.png'
import Carousel from 'react-bootstrap/Carousel'
import BioBehavioral from '../assets/BioBehavioral2.png'
import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'
import { 
  FaYoutube, 
  FaGithub,
  FaHome
} from "react-icons/fa";

import Flip from './Flip'
import Flip2 from './Flip2'
import Flip3 from './flip3'
import Flip4 from './Flip4'

const New2 = () => {

  return (
<div className='mx-auto max-w-screen-xl flex justify-center py-20 '>

    <Carousel 
    data-bs-theme="dark" 
    // className='w-3/4 '
    >
      
      {/* <Carousel.Item className='flex'>
        <img src={test1} alt='' className='' />
        <Carousel.Caption className='flex '>

<div id='left-side' className='flex flex-col justify-end w-1/2'>  
        <div className='flex flex-col items-start'>

            <h1 className='text-[24px] font-bold'>Bio Behavorial</h1>
            <h2 className='text-[18px]'>January 2024</h2>
          <p>Front End - JavaScript, React, Tailwind</p>

          <div className='flex'>
            <FaYoutube 
              size={30}
              color='white' />
            <FaHome 
            className='ml-3'
              size={30}
              color='white' />
            <FaGithub
            className='ml-3'
              size={30}
              color='white' />

          </div>
              </div>

</div>
<div id='right-side' className='flex flex-col justify-end w-1/2'>
  <p>myFirst Watchlist is a stock market app that provides real-time financial data. Users are able to create an account to get quotes on the NASDAQ daily top traded stock and then add selected stock to a user watchlist.</p>
</div>

        </Carousel.Caption>
      </Carousel.Item> */}

      {/* <Carousel.Item className='flex'>
        <img src={test1} alt='' className='' />
        <Carousel.Caption className='flex '>

<div id='left-side' className='flex flex-col justify-end w-1/2'>  
        <div className='flex flex-col items-start'>

            <h1 className='text-[24px] font-bold'>Bio Behavorial</h1>
            <h2 className='text-[18px]'>January 2024</h2>
          <p>Front End - JavaScript, React, Tailwind</p>

          <div className='flex'>
            <FaYoutube 
              size={30}
              color='white' />
            <FaHome 
            className='ml-3'
              size={30}
              color='white' />
            <FaGithub
            className='ml-3'
              size={30}
              color='white' />

          </div>
              </div>

</div>
<div id='right-side' className='flex flex-col justify-end w-1/2'>
  <p>myFirst Watchlist is a stock market app that provides real-time financial data. Users are able to create an account to get quotes on the NASDAQ daily top traded stock and then add selected stock to a user watchlist.</p>
</div>

        </Carousel.Caption>
      </Carousel.Item> */}


      <Carousel.Item>
        <Flip />

      </Carousel.Item>

      <Carousel.Item>

        <Flip2 />
      </Carousel.Item>

      {/* <Carousel.Item>

<Flip3 />
</Carousel.Item>
<Carousel.Item>

<Flip4 />
</Carousel.Item> */}
{/* 
      <Carousel.Item>
      <img src={BioBehavioral} alt='slide 2' className=''/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}

{/* <Carousel.Item>
<img
          className="d-block w-100"
          src={BioBehavioral}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<img
          className="d-block w-100"
          src={Movies}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}


    </Carousel>


</div>
)
}

export default New2