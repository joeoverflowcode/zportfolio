import React from 'react'

const Skill = ({source, alt, title}) => (
<div className='flex flex-col text-center items-center z-[10] hover:drop-shadow-[10px_10px_35px_rgba(220,220,220,0.3)]'>
        <img src={source} alt={alt} title={title}/>
     <h2 className='text-2xl'>{title}</h2>   
</div>
        )


export default Skill