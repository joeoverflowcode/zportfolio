import React from 'react'
import { aboutImages } from '../constants'

const Grid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
    {aboutImages.map((image) => (
      <div key={image.id} className="">
        {/* You can use image URL here */}
        <img src={image.img} alt={`Image ${image.id}`} className="w-full h-full object-cover rounded-[20px]" />
      </div>
    ))}
  </div>

)

export default Grid