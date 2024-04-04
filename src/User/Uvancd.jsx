import React, { useEffect, useState } from 'react'
import img from '../Images/thug.jpg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Uvancd = () => {

  const [data,setdata]=useState('')
  const [data1,setdata1]=useState('')
let id2=localStorage.getItem('id')
  // let id=localStorage.getItem('id')
let {id}=useParams()
console.log(id);

  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/hiringteam/viewancd/${id}`)
      console.log(response.data);
      if(response.data){
          setdata(response.data)
        }
    }
    fetchdata()
  },[])

  return (
    <div className='pt-40 hpw'>
         <div className='bg-slate-950/50 w-[800px] h-[350px] m-auto flex gap-2 '>
            <img src={ `http://localhost:4000/uploads/${data.Image}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Film Name:</p>
            <p>{data.Filmname}</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Details:</p>
            <p className='text-left'>{data.description}</p>
            </div>
           
            <div className='pt-2 flex flex-wrap justify-center'>
                <Link to={`/user/ujob/${data._id}`}><button className='text-green-400 '>Apply</button></Link>
            </div>
            </div>
        </div>  
    </div>
  )
}
