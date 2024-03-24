import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

export const Uvanc = () => {

  const [data,setdata]=useState([''])

  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get('http://localhost:4000/hiringteam/viewanc')
      console.log(response.data);
      if(response.data){
          setdata(response.data)
        }
    }
    
    fetchdata()
  },[])
  return (
    <div className='hpw'>
         <div className='flex flex-wrap justify-evenly pt-56'>
         {data.map((item)=>(
        <Link to={`/user/uvancd/${item._id}`}><div className='w-60 h-60 bg-slate-950/50 rounded'>
            <img src={ `http://localhost:4000/uploads/${item.Image}` } alt=""  className='w-52 m-auto pt-3'/>
            <p className='text-white text-center pt-4 text-[20px]'>{item.Filmname}</p>
        </div></Link>))}  
        </div>
    </div>
  )
}
