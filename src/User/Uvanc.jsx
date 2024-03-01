import React from 'react'
import img from '../Images/171.avif'
import img2 from '../Images/thug.jpg'
import { Link } from 'react-router-dom'

export const Uvanc = () => {
  return (
    <div className='hpw'>
         <div className='flex flex-wrap justify-evenly pt-56'>
        <Link to='/user/uvancd'><div className='w-60 h-60 bg-slate-950/50 rounded'>
            <img src={ img } alt=""  className='w-52 m-auto pt-3'/>
            <p className='text-white text-center pt-4 text-[20px]'>Thalaivar 171</p>
        </div></Link>
        <Link to='/user/uvancd'><div className='w-60 h-60 bg-slate-950/50 rounded'>
            <img src={ img2 } alt="" className='w-52 h-44 m-auto pt-3'/>
            <p className='text-white text-center pt-3 text-[20px]'>Thug Life</p>
        </div></Link>
        </div>
    </div>
  )
}
