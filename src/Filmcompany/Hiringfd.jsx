import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Hiringfd = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit= async (event)=>{
    event.preventDefault()
    setData(data)
    console.log(data);
    navigate('/filmcompany')
    let response=await axios.post('http://localhost:4000/filmcompany/hiringfeedback',data)
       console.log(response);
  }

  return (
    <div className='addanc flex flex-wrap flex-col'>
         <div className='text-center pt-36 font-bold text-3xl text-white/70'>
          Hiring Feedback
         </div>
         <form onSubmit={handleSubmit} className='pt-3'>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input onChange={handleChange} name='hiringName' type="text" placeholder='Hiring Name' className='w-[237px] bg-transparent text-white placeholder:text-white/70 border-2 rounded placeholder:text-center' />
          </div>
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input onChange={handleChange} name='filmName' type="text" placeholder='Film Name' className='w-[237px] bg-transparent text-white placeholder:text-white/70 border-2 rounded placeholder:text-center' />
          </div>
          <div className='flex flex-row flex-wrap'>
   
            <textarea onChange={handleChange}  name="feedback" id="" cols="30" rows="10" placeholder='Feedback' className='bg-transparent text-white placeholder:text-white/70 border-2 rounded placeholder:text-center'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
         </div>
         </form>
    </div>
  )
}
