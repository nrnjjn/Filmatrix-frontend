import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export const Editpw = () => {

let id=localStorage.getItem('id')
let {userId} = useParams()
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)

  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/seekers/viewpreviousworkd/${userId}`)
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
    let response= axios.put(`http://localhost:4000/seekers/editpreviouswork/${userId}`,formData,{
      headers:{
        'content-Type':'multiport/form-data'
      }
    })
    console.log(response);
    setData('')
    // navigate('/location/lviewlc')
    
  }
  return (
    <div className='upw'>
        <p className='text-center font-bold pt-32 text-[25px] text-white'>EDIT PREVIOUS WORK</p>
       <form onSubmit={handleSubmit}> 
       <div className='flex flex-wrap '>
        <div className='text-white flex flex-wrap flex-col'>
            <div className='pt-8 '>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 '>
                    <p >Job:</p>
                    <input onChange={handleChange} placeholder={userData.Job} name='Job' type="text" className='bg-transparent border-white border-solid border-2 rounded placeholder:text-white' />
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-5'>
                    <p>Description:</p>
                    <textarea onChange={handleChange} placeholder={userData.Description} name="Description" id="" cols="30" rows="10" className='h-36 w-[195px] bg-transparent border-white border-solid border-2 rounded'></textarea>
                </div>
            </div>
        
    </div>
    <div className='flex flex-wrap flex-col'>
    <div className='pt-2'>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 '>      
            <label class="block h-10 mb-2  text-gray-900 dark:text-white" for="file_input">Image</label>
            <input onChange={handlefile} name='Image' class="block w-[40%] text-sm text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>
                </div>
      </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 text-white'>
                    <p>From date:</p>
                    <input onChange={handleChange} placeholder={userData.FromDate} name='Fromdate' type="date" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 text-white'>
                    <p>To date:</p>
                    <input onChange={handleChange} placeholder={userData.Todate} name='Todate' type="date" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <button type='submit' className='ms-20 py-5 text-yellow-200'>Submit</button></div>
    </div></form>
    </div>
  )
}
