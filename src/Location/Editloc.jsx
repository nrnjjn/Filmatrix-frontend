import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Editloc = () => {
  let id=localStorage.getItem('id')
  let {userId} = useParams()
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)

  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/locationowner/viewlocd/${userId}`)
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
  
  let handleSubmit=async (event)=>{
    event.preventDefault()
    setrefresh(!refresh)
    let response=await axios.put(`http://localhost:4000/locationowner/editloc/${id}`,data)
    console.log(response);
    setData('')
    // navigate('/location/lviewlc')
    
  }

  return (
    <div className='lprof'>
        <div className='text-center pt-32 font-bold text-3xl text-white'>
          Edit Location
         </div>
         <form className='pt-5' onSubmit={handleSubmit}>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap justify-center'>
            
            <input onChange={handleChange} name='locationName' type="text" placeholder={userData.locationName} className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>
          
          <div className='flex  flex-row pb-3 flex-wrap justify-evenly'>
          <label class=" text-center block h-10 mb-2  font-medium text-gray-900 dark:text-white " for="file_input">Image</label>
          <input onChange={handleChange} name='Image' class="block w-[40%] h-10 text-sm text-gray-900  border-white rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-white border-2" placeholder='New' id="file_input" type="file" />
          </div>
          <div className='flex flex-row flex-wrap justify-center'>
   
            <textarea onChange={handleChange} name="Description" id="" cols="30" rows="10" placeholder={userData.Description} className='placeholder:text-center placeholder:text-white border-2 rounded bg-transparent text-white'></textarea>
          </div>
          <div>
          <button type='submit' className='text-white bg-black rounded p-2 ms-32 mt-3 '>Submit</button>
         </div>
         </div>
         </form>
    </div>
  )
}
