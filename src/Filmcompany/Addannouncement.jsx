import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Addannouncement = () => {

  const navigate=useNavigate()
  const [data,setData]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit=(event)=>{
    event.preventDefault()
    setData(data)
    console.log(data);
    navigate('/filmcompany/vanc')
    
  }

  return (
    <div className='addanc flex flex-wrap flex-col'>
         <div className='text-center pt-36 font-bold text-3xl pb-10 text-white '>
          New Announcement
         </div>
         <form onSubmit={handleSubmit}>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input onChange={handleChange} name='Film name' type="text" placeholder='Film Name' className='w-[237px] bg-transparent  placeholder:text-white border-2 rounded placeholder:text-[20px] border-black text-white' />
          </div>
          <div className='flex flex-row pb-3 flex-wrap'>

            <input onChange={handleChange} type="file" placeholder='Image' />
          </div>
          <div className='flex flex-row flex-wrap'>
   
            <textarea onChange={handleChange} name="description" id="" cols="30" rows="10" placeholder='Description' className='bg-transparent placeholder:text-white placeholder:text-[25px]  border-2 rounded border-black text-white'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
         </div>
         </form>
    </div>
  )
}
