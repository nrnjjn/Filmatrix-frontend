import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Heditjob = () => {

const navigate=useNavigate()
const [data,setData]=useState('')


let handleChange=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
}

let handleSubmit=(event)=>{
  event.preventDefault()
  setData(data)
  console.log(data);
  navigate('/hiring/hviewjob')
  
}
  return (
    <div className='addanc flex flex-wrap flex-col'>
        <div className='text-center pt-36 font-bold text-3xl text-white '>
          Edit Job
         </div>
         <form className='pt-5' onSubmit={handleSubmit}>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input onChange={handleChange} name='Job' type="text" placeholder='Job' className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>
          
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input onChange={handleChange} name='Vacancy' type="number" placeholder='Vacancy' className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>

          <div className='flex flex-row flex-wrap'>
   
            <textarea onChange={handleChange} name="Description" id="" cols="30" rows="10" placeholder='Description' className='placeholder:text-center placeholder:text-white border-2 rounded bg-transparent text-white'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Update</button>
         </div>
         </form>
    </div>
  )
}
