import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import  { toast } from 'react-toastify';

export const Editcategory = () => {
    const [data,setData]=useState('')
    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
    
      let handlefile=(event)=>{
        console.log(event.target.files);
        setData({...data,[event.target.name]:event.target.files[0]})
        console.log(data);
      }
    
      let handleSubmit= async (event)=>{
        event.preventDefault()
        let formData = new FormData();
        formData.append('name', data.category);
        formData.append('Image',data.Image);
        setData(data)
        console.log(data);
        console.log(formData);
        let response=await axios.put(`http://localhost:4000/admin/viewcategory/`,formData,{
          headers: {
            'Content-Type': 'multipart/form-data'  // Set the content type for FormData
          }
        })
           console.log(response.data);
           setData('')
      }
  return (
    <div className='addanc'>
  <div className='text-center pt-36 font-bold text-3xl text-white/70'>
          category
         </div>
         <form onSubmit={handleSubmit} className='pt-3'>
         <div className='m-auto w-fit '>
     
          <div className='flex flex-row flex-wrap justify-center'>
   
            <input value={data.category} type='text' onChange={handleChange}  name="category" placeholder='Category' className='bg-transparent text-white placeholder:text-white/70 border-2 rounded placeholder:text-center w-56 h-8'></input>
          </div>
          <div className='flex flex-wrap justify-between w-[300px] text-center mt-4 py-3 '>      
            <label class="block h-10 mb-2  text-gray-900 dark:text-white" for="file_input">Work photo:</label>
            <input onChange={handlefile}  name='Image' class="block w-[40%] h-10 text-sm text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>
                </div>
          <button type='submit' className='text-white bg-black rounded p-2 ms-32 mt-3'>Submit</button>
         </div>
         </form>
    </div>
  )
}
