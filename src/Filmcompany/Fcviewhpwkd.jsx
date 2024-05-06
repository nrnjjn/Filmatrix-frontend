import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Fcviewhpwkd = () => {
const [data,setdata]=useState('')
let {id}=useParams()

useEffect(()=>{
  let fetchdata=async()=>{
     let response=await axios.get(`http://localhost:4000/filmcompany/viewpwkd/${id}`)
     console.log(response.data);
     setdata(response.data)
  }
  fetchdata()
},[])
  return (
    <div className='hpw pt-40'>
    <div className='bg-slate-950/50 w-[800px] h-[410px] m-auto flex flex-wrap gap-2 '>
        <img src={ `http://localhost:4000/uploads/${data.Image}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>
        <div className='flex flex-wrap flex-col'>
        <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
        <p className='font-bold'>Film:</p>
        <p>{data.Filmname}</p>
        </div>
        <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
        <p className='font-bold'>Genre:</p>
        <p>{data.Genre}</p>
        </div>
        <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
        <p className='font-bold'>Director:</p>
        <p>{data.Director}</p>
        </div>
        <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
        <p className='font-bold'>Producer:</p>
        <p>{data.Producer}</p>
        </div>
        <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
        <p className='font-bold'>Production house:</p>
        <p>{data.Productionhouse}</p>
        </div>
        <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
        <p className='font-bold'>Details:</p>
        <p className='text-left'>{data.Description}</p>
        </div>
        <div className='flex flex-wrap text-white pt-3 text-center gap-4'>
          <p className='font-bold'>From Date:</p>
          <p>                    { new Date(data.Fromdate).toLocaleDateString()}</p>
          
        </div>
        <div className='flex flex-wrap text-white pt-3 text-center gap-12'>
          <p className='font-bold'>To Date:</p>
  
          <p>                    { new Date(data.Todate).toLocaleDateString()}
          </p>
          
        </div>
        
        </div>
    </div>  
</div>
  )
}

export default Fcviewhpwkd