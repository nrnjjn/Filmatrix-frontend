import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Fcviewhpwk = () => {
    const [data,setdata]=useState([''])
    const [refresh,setrefresh]=useState(false)
    let {id}=useParams()
   
    useEffect(()=>{
      let fetchdata=async()=>{
         let response=await axios.get(`http://localhost:4000/filmcompany/viewpwk/${id}`)
         console.log(response.data);
         setdata(response.data)
      }
      fetchdata()
   },[refresh])
  
  return (
    <div className='hpw'>
        <div className='flex flex-wrap justify-evenly pt-56 gap-5'>
          {data.map((item)=>(      
              <Link to={`/filmcompany/viewpwkd/${item._id}`}><div className='w-60 h-60 bg-slate-950/50 rounded'>
            <img src={`http://localhost:4000/uploads/${item.Image}` } alt=""  className='w-[208px] h-[142px] m-auto pt-3'/>
            <p className='text-white text-center pt-5 text-[20px]'>{item.Filmname}</p>
        </div></Link>
        ))}
        </div>
    </div>
  )
}

export default Fcviewhpwk