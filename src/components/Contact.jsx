import React from 'react'
import styles from '../styles'

const Contact = () => (

<section id='contact' className={`${styles.marginY} text-dimWhite`}>


    <div className='sm:m-auto sm:max-w-[1040px] p-4 '>



<h1 className={`${styles.heading} text-dimWhite ${styles.flexCenter}`}>
              
                Contact
            </h1>
<form action='https://getform.io/f/ce200de9-c4ba-40ce-bf07-723f4335cf36' method='POST' encType='multipart/form-data' className='text-dimWhite'>
    <div className='grid sm:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'/>
        </div>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone'/>
        </div>
    </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message'/>
        </div>
 
        <button className="w-full p-4 bg-gradient-to-b from-blue-900 to-gray-800 shadow-md
                        text-white rounded-lg shadow-gray-800 cursor-pointer md:text-xl lg:text-xl hover:scale-105 ease-in duration-300
                        " type='Submit'>Send Message</button>
    </form>

    </div>    

    </section>
  )


export default Contact