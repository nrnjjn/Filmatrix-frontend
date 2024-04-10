import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
export const Hlcfeed = () => {

const navigate=useNavigate()
const [data,setData]=useState('')

let handleChange=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
}

let {id}=useParams()
console.log(id)

let handleSubmit=async (event)=>{
  event.preventDefault()
  setData(data)
  console.log(data);
  let response=await axios.put(`http://localhost:4000/hiringteam/locationfeedback/${id}`,data)
console.log(response);
  navigate('/hiring/hlcbookst')
  
}

  return (
    <div className='lcfeed flex flex-wrap flex-col'>
        <div className='text-center pt-36 font-bold text-3xl pb-10 text-white'>
          LOCATION FEEDBACK
         </div>
         <form onSubmit={handleSubmit}>
         <div className='m-auto w-fit '>  
          <div className='flex flex-row flex-wrap'>
   
            <textarea onChange={handleChange} name="Feedback" id="" cols="30" rows="10" placeholder='Feedback' className='bg-transparent border-2 rounded text-white placeholder:text-center placeholder:text-white'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
         </div>
         </form>
    </div>
  )
}
