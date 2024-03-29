import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Locdetail = () => {
  const [data,setdata]=useState([''])
  // let id=localStorage.getItem('id')
let {id}=useParams()
console.log(id);
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/filmcompany/viewlocd/${id}`)
      console.log(response.data);
      if(response.data){
          setdata(response.data)
        }
    }
    fetchdata()
  },[])
  
  return (
    <div className='fcvloc pt-40'>
        <div className='bg-slate-950/50 w-[800px] h-[370px] m-auto flex gap-2 rounded'>

            <img src={ `http://localhost:4000/uploads/${data.Image}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Place:</p>
            <p>{data.locationName}</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Details:</p>
            <p className='text-left'>{data.Description}</p>
            </div>
            </div>
        </div>
    </div>
  )
}
