import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Addannouncement = () => {
let id=localStorage.getItem('id')
  const navigate=useNavigate()
  const [data,setData]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    let formData = new FormData();
        formData.append('Filmname', data.Filmname);
        formData.append('Director', data.Director);
        formData.append('description', data.description);
        formData.append('Image', data.Image);
        formData.append('companyId', id);
    setData(data)
    console.log(data);
    navigate('/filmcompany/vanc')
    let response=await axios.post(`http://localhost:4000/filmcompany/addanc`,formData,{
      headers: {
        'Content-Type': 'multipart/form-data'  // Set the content type for FormData
      }})
       console.log(response);
  }

  return (
    <div className='addanc flex flex-wrap flex-col'>
         <div className='text-center pt-20 font-bold text-3xl pb-8 text-white '>
          New Announcement
         </div>
         <form onSubmit={handleSubmit}>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap justify-center'>
            
            <input onChange={handleChange} name='Filmname' type="text" placeholder='Film Name' className='w-[80%] bg-transparent  placeholder:text-white border-2 rounded placeholder:text-[20px] border-white text-white h-9 placeholder:text-center' />
          </div>
          <div className='flex  flex-row  flex-wrap pb-3 justify-center'>
            
            <input onChange={handleChange} name='Director' type="text" placeholder='Director' className='w-[80%] bg-transparent  placeholder:text-white border-2 rounded placeholder:text-[20px] border-white text-white h-9 placeholder:text-center' />
          </div>
          
          <div className='flex flex-row flex-wrap justify-center pb-3'>
   
            <textarea onChange={handleChange} name="description" id="" cols="30" rows="10" placeholder='Description' className='w-[80%] bg-transparent placeholder:text-white placeholder:text-[25px]  border-2 rounded border-white text-white placeholder:text-center'></textarea>
          </div>
          <div className='flex flex-row pb-3 flex-wrap justify-around'>
          <label htmlFor="" className='text-white text-lg'>Image: </label>
          <input onChange={handlefile} name='Image'  class="block w-[50%]  text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-32 mt-1'>Submit</button>
         </div>
         </form>
    </div>
  )
}
