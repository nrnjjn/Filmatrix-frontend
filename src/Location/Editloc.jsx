import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import  { toast } from 'react-toastify';

export const Editloc = () => {
  let id=localStorage.getItem('id')
  let {userId} = useParams()
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)

  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`https://filmatrix.onrender.com/locationowner/viewlocd/${userId}`)
        console.log(response.data);
        setUserData(response.data)
      }
      fetchdata()
    },[refresh])

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
    setrefresh(!refresh)

    const formData = new FormData();
        for (const key in data){
            if(data[key]){
                formData.append(key,data[key]);
            }
        }
        console.log(data);
    console.log(formData);
    let response= axios.put(`https://filmatrix.onrender.com/locationowner/editloc/${userId}`,formData,{
      headers:{
        'content-Type':'multiport/form-data'
      }
    })
    console.log(response);
    setData('')
    toast.success('Location updated')
    
  }

  return (
    <div className='lprof'>
        <div className='text-center pt-32 font-bold text-3xl text-white'>
          Edit Location
         </div>
         <form className='pt-3' onSubmit={handleSubmit}>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap justify-center'>
            
            <input onChange={handleChange} name='locationName' type="text" placeholder={userData.locationName} className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>
          <div className='flex flex-row flex-wrap justify-center'>
   
            <textarea onChange={handleChange} name="Description" id="" cols="30" rows="10" placeholder={userData.Description} className='placeholder:text-center placeholder:text-white border-2 mb-4 rounded bg-transparent text-white'></textarea>
          </div>
          <div className='flex  flex-row pb-3 flex-wrap justify-evenly'>
          <label class=" text-center block h-10 mb-2  font-medium text-gray-900 dark:text-white " for="file_input">Image</label>
          <input onChange={handlefile} name='Image' class="block w-[40%] h-10 text-sm text-gray-900  border-white rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-white border-2" placeholder='New' id="file_input" type="file" />
          </div><div className='flex  flex-row pb-3 flex-wrap justify-evenly'>
          <label class=" text-center block h-10 mb-2  font-medium text-gray-900 dark:text-white " for="file_input">Image2</label>
          <input onChange={handlefile} name='Image2' class="block w-[40%] h-10 text-sm text-gray-900  border-white rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-white border-2" placeholder='New' id="file_input" type="file" />
          </div>

          <div className='flex  flex-row pb-3 flex-wrap justify-evenly'>
          <label class=" text-center block h-10 mb-2  font-medium text-gray-900 dark:text-white " for="file_input">Image3</label>
          <input onChange={handlefile} name='Image3' class="block w-[40%] h-10 text-sm text-gray-900  border-white rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-white border-2" placeholder='New' id="file_input" type="file" />
          </div>

          <div className='flex  flex-row pb-3 flex-wrap justify-evenly'>
          <label class=" text-center block h-10 mb-2  font-medium text-gray-900 dark:text-white " for="file_input">Certificate</label>
          <input onChange={handlefile} name='Certificate' class="block w-[40%] h-10 text-sm text-gray-900  border-white rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-white border-2" placeholder='New' id="file_input" type="file" />
          </div>

          
          <div>
          <button type='submit' className='text-white bg-black rounded p-2 ms-32 mt-2 mb-2 '>Submit</button>
         </div>
         </div>
         </form>
    </div>
  )
}
