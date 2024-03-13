import React from 'react'
import heroWave from '../assets/wavehero.png'
import heroLeft from '../assets/herowaveleft.png'
import Nav from './Nav'

const HeroWave = () => {
    return(
        <section className='w-screen h-screen'>
            <div className='flex'>

                <div className='w-2/5 flex justify-end'>
                    <div className='max-w-3/5 h-full'>
                        <img src={heroLeft} 
                        alt='herowave' 
                        className='object-cover max-w-full h-full'
                        />
                    </div>
                </div>

                <div className='w-3/5'>
                    <Nav />
                </div>

            </div>
        </section>
    )
}
export default HeroWave