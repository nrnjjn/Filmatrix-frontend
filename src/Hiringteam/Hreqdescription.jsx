import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Hreqdescription = () => {
    let id=localStorage.getItem('id')
  const navigate=useNavigate()
  const [data,setData]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    // setData(data)
    // console.log(data);
    navigate('/filmcompany/vanc')
    let response=await axios.post('http://localhost:4000/orphanage/addevent',{...data,orphanageId:id})
    console.log(response);    
  }
  return (
    <div className='hreqdesc'><div className='pt-32  pl-[40%]'>
        <p className='text-white pl-16 text-xl' >Description</p>
        <textarea name="Description" id="" cols="30" rows="10" className='bg-transparent border-2 rounded text-white'></textarea><br />
        <button className=' pl-24 text-yellow-200'>Submit</button>
    
        </div>
        </div>
  )
}
