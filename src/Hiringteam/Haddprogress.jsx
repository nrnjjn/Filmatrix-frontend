import axios from 'axios'
import React, { useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'

export const Haddprogress = () => {
let id2=localStorage.getItem('id')
const navigate=useNavigate()
const [data,setData]=useState('')

let handleChange=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
  console.log(data);
}
let {id}=useParams()
console.log(id)

let handleSubmit=async (event)=>{
  event.preventDefault()
  setData(data)
  console.log(data);
  let response=await axios.put(`https://filmatrix.onrender.com/hiringteam/hiringprogress/${id}`,data)
  console.log(response);
    
  // navigate('/hiring/hviewp')
  
}
  return (
    <div className='hviewjob'>
        <div className='text-center pt-36 font-bold text-3xl pb-10 text-white'>
          Add Progress
         </div>
         <form onSubmit={handleSubmit}>
         <div className='m-auto w-fit '>
          <div className='flex flex-row flex-wrap'>
   
            <textarea onChange={handleChange} name="Progress" id="" cols="30" rows="10" placeholder='Progress' className=' placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
         </div>
         </form>
    </div>
  )
}
