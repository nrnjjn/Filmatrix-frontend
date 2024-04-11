import axios from 'axios'
import React, { useEffect, useState,} from 'react'
import {Link, useParams } from 'react-router-dom'

function ViewCatJobs() {
    

    const [data,setdata]=useState([''])
    let {id}=useParams()
      useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/seekers/viewjobbycatid/${id}`)
          if(response.data){
              setdata(response.data)
            }
        }
        
        fetchdata()
      },[])

  return (
    <div  className='hreqdesc'>

        {
            data && data.map((item)=>{
                return(
                    <div className='w-60 h-60 bg-slate-950/50 text-white rounded mt-28'>
                    <div className='flex flex-wrap justify-between'>
                    <p className='pl-5'>Job:</p>
                    <p className='pe-5'>{item?.Description}</p>
                    </div>
                    <div className='flex flex-wrap justify-between'>
                    <p className='pl-5'>Film Name:</p>
                    <p className='pe-5'>{item?.Vacancy}</p>
                    </div>
                    <div className='flex flex-wrap justify-between'>
                    <p className='pl-5'>Vacancy:</p>
                    <p className='pe-28'>{item?.Vacancy}</p>
                    </div>
                    <div className='flex flex-wrap justify-between'>
                    <p className='pl-5'>Details:</p>
                    <p className='w-36'>{item?.Description}</p>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                    <Link to={`/user/ujobdesc/${item?._id}`}><button className='text-green-400'>Apply</button></Link> 
                    </div>
                </div>
                )
            })
        }
    </div>
  )
}

export default ViewCatJobs