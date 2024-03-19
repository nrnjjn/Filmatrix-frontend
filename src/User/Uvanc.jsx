import React, { useEffect, useState } from 'react'
import img from '../Images/171.avif'
import img2 from '../Images/thug.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Uvanc = () => {

  let id=localStorage.getItem('id')
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)

  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get
    }
  })
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
