import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Addjob = () => {

const navigate=useNavigate()
const [data,setData]=useState('')


let handleChange=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
}

let handleSubmit=(event)=>{
  event.preventDefault()
  setData(data)
  console.log(data);
  navigate('/hiring')
  
}
  return (
    <div className='addanc flex flex-wrap flex-col'>
        <div className='text-center pt-36 font-bold text-3xl '>
          New Job
         </div>
         <form className='pt-5' onSubmit={handleSubmit}>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input onChange={handleChange} name='Hiring name' type="text" placeholder='Hiring Name' className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>
          
          <div className='flex flex-row flex-wrap'>
   
            <textarea onChange={handleChange} name="Feedback" id="" cols="30" rows="10" placeholder='Feedback' className='placeholder:text-center placeholder:text-white border-2 rounded bg-transparent text-white'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
         </div>
         </form>
    </div>
  )
}
