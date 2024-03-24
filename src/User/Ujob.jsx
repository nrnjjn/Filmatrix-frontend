import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Ujob = () => {
  const [data,setdata]=useState([''])

  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get('http://localhost:4000/seekers/viewjob')
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
        <div className='w-60 h-60 bg-slate-950/50 text-white rounded pt-2'>
            <div className='flex flex-wrap justify-between'>
            <p className='pl-5'>Job:</p>
            <p className='pe-5'>{item.Job}</p>
            </div>
            <div className='flex flex-wrap justify-between'>
            <p className='pl-5'>Film Name:</p>
            <p className='pe-5'>{item.filmName}</p>
            </div>
            <div className='flex flex-wrap justify-between'>
            <p className='pl-5'>Vacancy:</p>
            <p className='pe-28'>{item.Vacancy}</p>
            </div>
            <div className='flex flex-wrap justify-between'>
            <p className='pl-5'>Details:</p>
            <p className='w-36'>{item.Description}</p>
            </div>
            <div className='flex flex-wrap justify-center'>
            <Link to='/user/ujobreqst'><button className='text-green-400'>Apply</button></Link> 
            </div>
        </div>
            ))}
        </div>
    </div>
  )
}
