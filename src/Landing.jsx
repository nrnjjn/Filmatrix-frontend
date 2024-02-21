import React from 'react'
import img from './landing.jpg'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className='landing'>
      
      <div className='pt-[25%] pe-[13%]   text-[30px] text-end'>
        <p className='text-red-800 text-[40px]'>The cinema has no boundary; it is a ribbon of dream.</p>
        <p className=' text-black'> ~Orson Welles</p>
      </div>
    </div>
  )
}

export default Landing