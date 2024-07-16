import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Viewhpwkd = () => {
    const [data,setdata]=useState([''])
  // let id=localStorage.getItem('id')
let {id}=useParams()
console.log(id);

let handledelete=async (id)=>{
  let response=await axios.delete(`https://filmatrix.onrender.com/hiringteam/deletepreviouswork/${id}`)
  console.log(response)
}

  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`https://filmatrix.onrender.com/hiringteam/viewpreviousworkd/${id}`)
      console.log(response.data);
      if(response.data){
          setdata(response.data)
        }
    }
    fetchdata()
  },[])
  return (
<div className='pt-36 hpw'>
        <div className='bg-slate-950/50 w-[800px] h-[490px] m-auto flex gap-2 '>
            <img src={`https://filmatrix.onrender.com/uploads/${data.Image}`} alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Film:</p>
            <p>{data.Filmname}</p>
            </div>
            
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Director:</p>
            <p>{data.Director}</p>
            </div>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Genre:</p>
            <p>{data.Genre}</p>
            </div> 
             <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Producer:</p>
            <p>{data.Producer}</p>
            </div>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Production Company:</p>
            <p>{data.Productionhouse}</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Description:</p>
            <p className='text-left'>{data.Description}</p>
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-8'>
              <p className='font-bold'>From Date:</p>
              <p>
              { new Date(data.Fromdate).toLocaleDateString()}
              </p>
              
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-14'>
                <p className='font-bold'>To Date:</p>
                <p>
                { new Date(data.Todate).toLocaleDateString()}

                </p>
            </div>
            <div className='flex flex-wrap text-white pt-2 text-center gap-8 ms-5'>
            <Link to={`/hiring/edithpwk/${data._id}`}><button className='  h-8 text-green-400'>Edit</button></Link>
            <Link to='/hiring/viewhpwk'><button onClick={()=>handledelete(data._id)} className='  h-8 text-red-600'>Delete</button></Link>
            </div></div>
        </div>  
    </div>  )
}
