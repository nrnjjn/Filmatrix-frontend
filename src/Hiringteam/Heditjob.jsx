import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Heditjob = () => {
let id=localStorage.getItem('id')
const navigate=useNavigate()
const [data,setData]=useState('')
const [data2,setData2]=useState([''])


let handleChange=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
  console.log(data);
}

let handleSubmit=async (event)=>{
  event.preventDefault()
  setData(data)
  console.log(data);
  navigate('/hiring/hviewjob')
  let response=await axios.put(`http://localhost:4000/hiringteam/editjob/${id}`,data)
  console.log(response);
}

useEffect(()=>{
  let fetchdata=async()=>{
    let response=await axios.get(`http://localhost:4000/filmcompany/viewlocfname/${id}`)
    setData2(response.data)
  }
  fetchdata()
},[])
  return (
    <div className='addanc flex flex-wrap flex-col'>
        <div className='text-center pt-24 font-bold text-3xl text-white '>
          Edit Job
         </div>
         <form className='pt-4' onSubmit={handleSubmit}>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input onChange={handleChange} name='Job' type="text" placeholder={data.req?.Job} className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>
          
          <select onChange={handleChange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-2 mt-3 mb-3'  name="ancId" >
              <option value="">select</option>
         {data2.map((item)=>(
          <option  value={item.anc?._id}>
            {item.anc?.Filmname}
          </option>
         ))}
           </select>

          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input onChange={handleChange} name='Vacancy' type="number" placeholder='Vacancy' className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>

          <div className='flex flex-row flex-wrap'>
   
            <textarea onChange={handleChange} name="Description" id="" cols="30" rows="10" placeholder='Description' className='placeholder:text-center placeholder:text-white border-2 rounded bg-transparent text-white'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Update</button>
         </div>
         </form>
    </div>
  )
}
