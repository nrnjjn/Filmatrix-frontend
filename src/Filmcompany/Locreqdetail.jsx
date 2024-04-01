import React, { useEffect, useState } from 'react'
import img from '../Images/Athirappilly.jpg'
import { Link, useParams } from 'react-router-dom' 
import axios from 'axios'

export const Locreqdetail = () => {

  // let id=localStorage.getItem('id')
  let {id}=useParams()
  console.log(id);

    const [data,setdata]=useState([''])
    const[refresh,setrefresh]=useState(false)

  let handlesubmit=async (status)=>{
    setrefresh(!refresh)
    let response=await axios.put(`http://localhost:4000/filmcompany/managelocreq/${id}`,{...data,Status:status})
    console.log(response)
    setdata('')
  }

  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/filmcompany/viewlocreqd/${id}`)
      console.log(response.data);
      if(response.data){
          setdata(response.data)
        }
    }
    fetchdata()
  },[refresh])

  return (
    <div className='fcvloc pt-32'>
      <div className='bg-slate-950/50 w-[800px] h-[470px] m-auto flex gap-2 '>
            <img src={ `http://localhost:4000/uploads/${data.loc?.Image}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Place:</p>
            <p>{data.loc?.locationName}</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Details:</p>
            <p className='text-left'>{data.loc?.Description}</p>
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-14'>
              <p className='font-bold'>Date:</p>
              <p>{ new Date(data.response?.Date).toLocaleDateString()}</p>
              
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-3'>
                <p className='font-bold'>No of days:</p>
                <p>{data.response?.Noofdays}</p>
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-16'>
                <p className='font-bold'>Price:</p>
                <p>40000</p>
            </div>
            <form onSubmit={handlesubmit}>
            <div className='flex flex-wrap text-white pt-2 text-center gap-8 justify-center'>
            <Link to='/filmcompany/fclocreq' onClick={()=>{handlesubmit('Accepted',data._id)}}><button className='   text-green-500'>Accept</button></Link>
            <Link to='/filmcompany/fclocreq' onClick={()=>{handlesubmit('Rejected',data._id)}}><button className='  text-red-500'>Reject</button></Link>
            </div>
            </form>
            </div>
        </div>  
    </div>
  )
}
