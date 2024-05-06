import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Locationdetail = () => {
    let {id}=useParams()
    const [data,setdata]=useState([''])
    const[refresh,setrefresh]=useState(false)


    let handlesubmit=async (status)=>{
        setrefresh(!refresh)
        let response=await axios.put(`http://localhost:4000/admin/managelocreq/${id}`,{...data,Status:status})
        console.log(response)
        setdata('')
      }


    useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/admin/locationreqd/${id}`)
          console.log(response.data);
          if(response.data){
              setdata(response.data)
            }
        }
        fetchdata()
      },[refresh])
  return (
    <div className='fcvloc pt-32'>
      <div className='bg-slate-950/50 w-[60%] h-[470px] m-auto  gap-2 '>
        <div className='flex'>
            <img src={ `http://localhost:4000/uploads/${data.response?.Image}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <img src={ `http://localhost:4000/uploads/${data.response?.Image2}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            </div>
            <div className='flex gap-5 pb-3'>  
            <img src={ `http://localhost:4000/uploads/${data.response?.Image3}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>

            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-12 pt-2 text-center'>
            <p className='font-bold'>Name:</p>
            <p>{data.loc?.Name}</p>
            </div>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Email:</p>
            <p>{data.loc?.Email}</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Phone no:</p>
            <p className='text-left'>{data.loc?.Phone}</p>
            </div>
            {/* <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Liscence no:</p>
            <p className='text-left'>{data.loc?.liscenceNo}</p>
            </div> */}
           
            
            <div className='flex flex-wrap text-white pt-3 text-center gap-16'>
                <p className='font-bold'>Description:</p>
                <p>{data.response?.Description}</p>
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-10'>
                <p className='font-bold'>Price per day:</p>
                <p>{data.response?.Priceperday}</p>
            </div>
           <div>
           <a  href={`http://localhost:4000/uploads/${data.response?.Certificate}`} download >Certificate</a>
           </div>
            <div className='flex flex-wrap text-white pt-2 text-center gap-8 justify-center'>
            <button onClick={()=>{handlesubmit('Accepted',data._id)}} className='   text-green-500'>Accept</button>
            <button onClick={()=>{handlesubmit('Rejected',data._id)}} className='  text-red-500'>Reject</button>
            </div>
            
            </div>
        </div>  </div> 
    </div>
  )
}
