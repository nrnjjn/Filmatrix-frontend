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
          <div className='flex  flex-row pb-3 flex-wrap justify-center'>
            
            <input onChange={handleChange} name='Film name' type="text" placeholder='Film Name' className='w-[80%] bg-transparent  placeholder:text-white border-2 rounded placeholder:text-[20px] border-white text-white h-9' />
          </div>
          <div className='flex flex-row pb-3 flex-wrap justify-center'>

          <input onChange={handleChange} name='Liscence' class="block w-[80%]  text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>
          </div>
          <div className='flex flex-row flex-wrap justify-center'>
   
            <textarea onChange={handleChange} name="description" id="" cols="30" rows="10" placeholder='Description' className='bg-transparent placeholder:text-white placeholder:text-[25px]  border-2 rounded border-white text-white'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-28 mt-3'>Submit</button>
         </div>
         </form>
    </div>
  )
}
