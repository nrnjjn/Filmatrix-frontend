import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Hreqdescription = () => {
    let id=localStorage.getItem('id')
  const navigate=useNavigate()
  const [data,setData]=useState('')
let {id2}=useParams()
  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    setData(data)
    console.log(data);
    // event.preventDefault()
    // navigate('/filmcompany/vanc')
    let response=await axios.post('https://filmatrix.onrender.com/hiringteam/posthiringreq',{...data,userId:id,ancId:id2})
    console.log(response);    
  }
  return (
    <div className='hreqdesc'><div className='pt-32  pl-[40%]'>
      <form onSubmit={handleSubmit}>
        <p className='text-white pl-16 text-xl' >Description</p>
        <textarea onChange={handleChange} name="Description" id="" cols="30" rows="10" className='bg-transparent border-2 rounded text-white'></textarea><br />
        <button type='submit' className=' pl-24 text-yellow-200'>Submit</button>
    
    </form>
        </div>
        </div>
  )
}
