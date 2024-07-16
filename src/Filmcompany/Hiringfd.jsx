import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export const Hiringfd = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')
  const [data1,setData1]=useState([''])
 


  // let id=localStorage.getItem('id')
let {id}=useParams()
console.log(id)

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit= async (event)=>{
    event.preventDefault()
    setData(data)
    console.log(data);
    navigate('/filmcompany/fcviewhcreq')
    let response=await axios.put(`https://filmatrix.onrender.com/filmcompany/hiringfeedbackput/${id}`,data)
       console.log(response);
  }


console.log(id)
useEffect(()=>{
  let fetchdata=async ()=>{
    let response=await axios.get(`https://filmatrix.onrender.com/filmcompany/viewhiringreq/${id}`)

   let result = response.data.find((item)=> item?.req?._id===id )
   console.log(result,'result');
    setData1(result)
  }
  fetchdata()
},[])
console.log(data1,'ddd')

  return (
    <div className='addanc flex flex-wrap flex-col'>
         <div className='text-center pt-36 font-bold text-3xl text-white/70'>
          Hiring Feedback
         </div>
         <form onSubmit={handleSubmit} className='pt-3'>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap text-white'>
            
          {/* <select onChange={handleChange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-2 mt-3'  name="ancId" >
              <option value="">select</option>
              
         {data1.map((item)=>(
          <option  value={item._id}>
            {item.Filmname}
          </option>
          
         ))}
           </select>      */}
           {/* <p>FILM NAME:</p>
           <p>{data1?.anc?.Filmname}</p> */}


               </div>
          
          <div className='flex flex-row flex-wrap'>
   
            <textarea onChange={handleChange}  name="Feedback" id="" cols="30" rows="10" placeholder='Feedback' className='bg-transparent text-white placeholder:text-white/70 border-2 rounded placeholder:text-center'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
         </div>
         </form>
    </div>
  )
}
