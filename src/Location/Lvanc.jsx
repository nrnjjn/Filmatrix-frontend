import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const Lvanc = () => {
  const [data,setdata]=useState([''])

  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get('https://filmatrix.onrender.com/hiringteam/viewanc')
      console.log(response.data);
      if(response.data){
          setdata(response.data)
        }
    }
    
    fetchdata()
  },[])
  return (
    <div className='hviewanc'>
        <div className='flex flex-wrap justify-evenly pt-56'>
        {data.map((item)=>(
        <Link to={`/location/lancd/${item._id}`}><div className='w-60 h-60 bg-slate-950/50 rounded'>
            <img src={ `https://filmatrix.onrender.com/uploads/${item.Image}` } alt=""  className='w-[208px] h-[142px] m-auto pt-3'/>
            <p className='text-white text-center pt-5 text-[20px]'>{item.Filmname}</p>
        </div></Link>))}  
        </div>
    </div>
  )
}
