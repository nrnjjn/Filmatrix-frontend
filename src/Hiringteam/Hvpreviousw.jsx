import React, { useEffect, useState } from 'react'
import img from '../Images/cameraman.jpg'
import img2 from '../Images/editor.jpg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
export const Hvpreviousw = () => {
  const [data,setdata]=useState([''])
  const [refresh,setrefresh]=useState(false)
  let {id}=useParams()

  useEffect(()=>{
    let fetchdata=async()=>{
       let response=await axios.get(`http://localhost:4000/hiringteam/viewpwk/${id}`)
       console.log(response.data);
       setdata(response.data)
    }
    fetchdata()
 },[refresh])

  return (
    <div className='hpw'>
        <div className='flex flex-wrap justify-evenly pt-56'>
          {data.map((item)=>(      
              <Link to={`/hiring/hvpwd/${item._id}`}><div className='w-60 h-60 bg-slate-950/50 rounded'>
            <img src={`http://localhost:4000/uploads/${item.Image}` } alt=""  className='w-52 m-auto pt-3'/>
            <p className='text-white text-center pt-5 text-[20px]'>Camera man</p>
        </div></Link>
        ))}
        </div>
    </div>
  )
}
