import React from 'react'
import img from '../Images/cameraman.jpg'
import img2 from '../Images/editor.jpg'
export const Userhome = () => {
  return (
    <div className='userhome'>
        <div className='flex flex-wrap justify-evenly pt-56'>
        <div className='w-60 h-60 bg-slate-950/80 rounded'>
            <img src={ img } alt=""  className='w-52 m-auto pt-3'/>
            <p className='text-white text-center pt-3 text-[20px]'>Cameraman</p>
        </div>
        <div className='w-60 h-60 bg-slate-950/80 rounded'>
            <img src={ img2 } alt="" className='w-52 h-44 m-auto pt-3'/>
            <p className='text-white text-center pt-3 text-[20px]'>Editor</p>
        </div>
        </div>
    </div>
  )
}
