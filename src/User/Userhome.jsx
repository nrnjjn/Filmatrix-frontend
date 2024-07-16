import React, { useEffect, useState } from 'react'
import img from '../Images/q8.jpg'
import img2 from '../Images/editor.jpg'
import { Link } from 'react-router-dom'
import  axios  from 'axios'
export const Userhome = () => {
  const [view,setView]=useState([])


  useEffect(()=>{

    let fetchdata=async ()=>{
      let response=await axios.get(`https://filmatrix.onrender.com/admin/viewcategory/`)
      setView(response.data)
    }
    fetchdata()
  },[])

  
  return (
    <div className='userhome'>
        <div className='flex flex-wrap justify-evenly pt-56'>
        {/* <Link to='/user/ujob'><div className='w-60 h-60 bg-slate-950/80 rounded'>
            <img src={ img } alt=""  className='w-52 m-auto pt-3'/>
            <p className='text-white text-center pt-5 text-[20px]'>Cameraman</p>
        </div></Link> */}
       { view && view.map((item)=>{
return(
  <>

  <Link to={`/user/viewjobs/category/${item?._id}`}><div className='w-60 h-60 bg-slate-950/80 rounded'>
            <img src={ `https://filmatrix.onrender.com/uploads/${item.Image}` } alt="" className='w-52 h-44 m-auto pt-3'/>
            <p className='text-white text-center pt-3 text-[20px]'>{item.name}</p>
        </div></Link>
  </>
)
       }) }
        </div>

        {

        }
    </div>
  )
}
