import React from 'react'
import img from '../Images/Athirappilly.jpg'
import img2 from '../Images/gulmurg.jpg'
import { Link } from 'react-router-dom'

export const Fcviewloc = () => {
  return (
    <div className='fcvloc'>
        <div className='flex flex-wrap justify-evenly pt-56'>
        <Link to='/filmcompany/locdt'>
          <div className='w-60 h-60 bg-slate-950/30 rounded'>
            <img src={ img } alt=""  className='w-52 m-auto pt-3'/>
            <p className='text-white text-center pt-3 text-[20px]'>Athirappilly</p>
        </div>
        </Link>
        <Link to='/filmcompany/locdt'>
          <div className='w-60 h-60 bg-slate-950/30 rounded'>
            <img src={ img2 } alt="" className='w-52 h-44 m-auto pt-3'/>
            <p className='text-white text-center pt-3 text-[20px]'>Gulmarg</p>
        </div>
        </Link>
        </div>
    </div>
  )
}
