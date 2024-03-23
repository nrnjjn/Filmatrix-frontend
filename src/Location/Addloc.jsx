import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Addloc = () => {

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
        formData.append('locationName', data.locationName);
        formData.append('Image', data.Image);
        formData.append('Description', data.Description);
        formData.append('userId', id);
    setData(data)
    console.log(data);
    console.log(formData);
    // navigate('/location/lviewlc')
    
    let response=await axios.post('http://localhost:4000/locationowner/addlocation',formData,{
      headers: {
        'Content-Type': 'multipart/form-data'  // Set the content type for FormData
      }})
       console.log(response);
    
  }
     
  return (
    <div className='lprof'>
        <div className='text-center pt-36 font-bold text-3xl text-white'>
          New Location
         </div>
         <form className='pt-5' onSubmit={handleSubmit}>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap justify-center'>
            
            <input onChange={handleChange} name='locationName' type="text" placeholder='Location Name' className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>
          
          <div className='flex  flex-row pb-3 flex-wrap justify-evenly'>
          <label class=" text-center block h-10 mb-2  font-medium text-gray-900 dark:text-white " for="file_input">Image</label>
          <input onChange={handlefile} name='Image' class="block w-[40%] h-10 text-sm text-gray-900  border-white rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-white border-2" placeholder='New' id="file_input" type="file" />
          </div>

          <div className='flex flex-row flex-wrap justify-center'>
   
            <textarea onChange={handleChange} name="Description" id="" cols="30" rows="8" placeholder='Description' className='placeholder:text-center placeholder:text-white border-2 rounded bg-transparent text-white'></textarea>
          </div>
          <div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-32 mt-5 '>Submit</button>
         </div>
         </div>
         </form>
    </div>
  )
}
