import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


export const Ujobdescription = () => {

    let id=localStorage.getItem('id')
    const navigate=useNavigate()
    const [data,setData]=useState('')

  let {id2}=useParams()

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
      try{
      let formData = new FormData();
        formData.append('Description',data.Description);
        formData.append('Cv',data.Cv);
        formData.append('sId',id);
        formData.append('jobId',id2);
      setData(data)
      console.log(data);
      console.log(formData);
      // navigate('/filmcompany/vanc')
      let response=await axios.post('http://localhost:4000/seekers/postjobreq',formData,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
      })
     
      console.log(response); 
    }
    catch(e){
      toast("Already applied")
    }   
  }
  return (
    <div className='hreqdesc'><div className='pt-32  pl-[40%] '>
      <ToastContainer/>
      <form onSubmit={handleSubmit}>
        <p className='text-white pl-16 text-xl' >Description</p>
        <textarea onChange={handleChange} name="Description" id="" cols="30" rows="10" className='bg-transparent border-2 rounded text-white'></textarea>
        <div className='flex  flex-row pb-3 flex-wrap gap-5 mt-3'>
          <label class=" text-center block h-10 mb-2  font-medium text-gray-900 dark:text-white " for="file_input">Cv</label>
          <input onChange={handlefile} name='Cv' class="block w-[20%] h-10 text-sm text-gray-900  border-white rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-white border-2" placeholder='New' id="file_input" type="file" />
          </div>
        <button type='submit' className=' pl-24 text-yellow-200'>Submit</button>
    
    </form>
        </div>
        </div>
  )
}
