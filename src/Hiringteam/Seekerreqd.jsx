import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Seekerreqd = () => {
  let id2=localStorage.getItem('id')
    const [data,setData]=useState('')
    let {id}=useParams()
    console.log(id);

    const navigate=useNavigate()

  
  
    let handlesubmit=async (status)=>{
        let response=await axios.put(`http://localhost:4000/hiringteam/managejobreq/${id}`,{Status:status})
        console.log(response)
      
      }
      useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/hiringteam/seekerreqd/${id}`)
          console.log(response.data);
            setData(response.data)
            
        }
        fetchdata()
      },[])

  return (

    <div className='fcvloc pt-32'>
      <div className='bg-slate-950/50 w-[800px] h-[470px] m-auto flex gap-2 '>
            <img src={ `http://localhost:4000/uploads/${data.seeker?.Idproof}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Name:</p>
            <p>{data.seeker?.Name}</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Email:</p>
            <p className='text-left'>{data.seeker?.Email}</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Phone:</p>
            <p className='text-left'>{data.seeker?.Phone}</p>
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-3'>
                <p className='font-bold'>Description:</p>
                <p>{data.response?.Description}</p>
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-10'>
                <p className='font-bold'>
                  <Link to={`/hiring/hvpw/${data.seeker?._id}`}> <button className='text-yellow-200  rounded w-14 h-6 text-center'> Previous work</button>
                  </Link></p>
                <p className='text-red-500'>
                  <a  href={`http://localhost:4000/uploads/${data.response?.Cv}`} download >Cv</a>
                </p>
            </div>
            <form onSubmit={handlesubmit}>
            {data.response?.Status === 'Accepted' ?
            <div className='flex flex-wrap text-white pt-2 text-center gap-8 justify-center'>
            </div>
            :
            <div className='flex flex-wrap text-white pt-2 text-center gap-8 justify-center'>
            <button  onClick={()=>{handlesubmit('Accepted',data._id)}} className='   text-green-500'>Accept</button>
            <button onClick={()=>{handlesubmit('Rejected',data._id)}} className='  text-red-500'>Reject</button>
            </div>
            }
            </form>
            </div>
        </div>  
    </div>
      )
}
