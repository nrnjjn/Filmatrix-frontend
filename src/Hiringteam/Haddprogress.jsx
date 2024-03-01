import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Haddprogress = () => {

const navigate=useNavigate()
const [data,setData]=useState('')

let handleChange=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
}

let handleSubmit=(event)=>{
  event.preventDefault()
  setData(data)
  console.log(data);
  navigate('/hiring/hviewp')
  
}
  return (
    <div className='hviewjob'>
        <div className='text-center pt-36 font-bold text-3xl pb-10'>
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
