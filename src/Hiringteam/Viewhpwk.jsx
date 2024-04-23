import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Viewhpwk = () => {

    let id=localStorage.getItem('id')
    const [data,setdata]=useState([''])
  
    useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/hiringteam/viewpreviouswork/${id}`)
          console.log(response.data);
          if(response.data){
              setdata(response.data)
            }
        }
        fetchdata()
      },[])
  
  return (
    <div className='hpw'>
    <div className='flex flex-wrap justify-evenly pt-56'>
    {data.map((item)=>(
      <Link to={`/hiring/viewhpwkd/${item._id}`}>
    <div className='w-60 h-56 bg-slate-950/50 rounded'>
        <img src={ `http://localhost:4000/uploads/${item.Image}` } alt=""  className='w-52 m-auto pt-3'/>
        <p className='text-white text-center pt-4 text-[20px]'>{item.Filmname}</p>
    </div></Link>
    ))}
  
    </div>
</div>
  )
}
