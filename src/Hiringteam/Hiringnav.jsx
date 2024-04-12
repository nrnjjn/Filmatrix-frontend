import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Hiringnav = () => {

    const [locdrop,setLocdrop]=useState(false)
    const [odrop,setOdrop]=useState(false)
    const [ancdrop,setancDrop]=useState(false)
    const [jobdrop,setJobdrop]=useState(false)


    

    let locdropdown=()=>{
        setLocdrop(!locdrop)
        setOdrop(false)
        setancDrop(false)
        setJobdrop(false)
    }

    let otherdropdown=()=>{
        setOdrop(!odrop)
        setLocdrop(false)
        setancDrop(false)
        setJobdrop(false)
    }
    let announcementdropdown=()=>{
        setancDrop(!ancdrop)
        setOdrop(false)
        setLocdrop(false)
        setJobdrop(false)
    }

    let jobdropdown=()=>{
        setJobdrop(!jobdrop)
        setOdrop(false)
        setLocdrop(false)
        setancDrop(false)
    }
    let close=()=>{
        setLocdrop(false)
        setOdrop(false)
        setancDrop(false)
        setJobdrop(false)
    }


    const navigate=useNavigate()

    let logout=()=>{
        localStorage.removeItem('id')
        localStorage.removeItem('email')
        navigate('/login')
    }
        useEffect(()=>{
            let auth=async ()=>{
              let id=localStorage.getItem('id')
              let email=localStorage.getItem('email')
              let response=await axios.post('http://localhost:4000/seekers/api/auth/authenticate',{_id:id,Email:email})
              console.log(response);
              if(response==null){
                navigate('/login')
              }
              else if(response?.data?.userType !=='hiringteam'){
                navigate('/login')
              }
         
            }
            auth()
          },[])




  return (
    <div>
        <div className='flex flex-wrap fixed w-[100%] justify-between bg-black text-white p-3 text-[25px]'>
        <div className='fonts flex-1 ps-3'>
            Filmatrix
        </div>
        <div className='hidden flex-wrap justify-evenly sm:flex flex-1 text-[20px]'>
            <Link to='/hiring'><div onClick={close}>
                Home
            </div></Link>
           
               <Link to='/hiring/hviewprofile'> <div>
                    Profile
                </div></Link>
               
            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
                <span onClick={announcementdropdown}>Announcement</span>
{ancdrop &&
            <div className='list-none absolute mt-3 -ml-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 '>
            <Link to='/hiring/hviewanc' className=''><li>View Announcement</li></Link>
            <Link to='/hiring/hancst' className=''> <li>Request Status</li></Link>
        </div>
}
 </div>


            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
                <span onClick={locdropdown}>Location</span>
{locdrop &&
            <div className='list-none absolute mt-3 -ml-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 '>
            <Link to='/hiring/hvloc' className=''><li>View Location</li></Link>
            <Link to='/hiring/hfclocst' className=''> <li>Booking request</li></Link>
            <Link to='/hiring/hlcbookst' className=''> <li>Booking status</li></Link>
        </div>
}
 </div>


            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
               <span onClick={jobdropdown}> Job</span>
{jobdrop &&
        <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 w-40 -ml-10'>
            <Link to='/hiring/addjob' className=''><li>Add job</li></Link>
            <Link to='/hiring/hviewjob' className=''> <li>View Job</li></Link>
            <Link to='/hiring/hskreq' className=''> <li>Seekers</li></Link>
        </div>
}
            </div>

            
            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
               <span onClick={otherdropdown}> Other</span>
{odrop &&
        <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 w-40 -ml-10'>
            <Link to='/hiring/hviewp' ><li>Progress</li></Link>
            <Link to='/hiring/hviewfd' > <li>View Feedback</li></Link>
             <li onClick={logout}>Logout</li>
        </div>
}
            </div>
        </div>
    </div>
    <div onClick={close}>

    <Outlet/>
    </div>
    </div>
  )
}
