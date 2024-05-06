import React, { useEffect, useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Filmnav = () => {
    const [data,setData] = useState('');
    const [locdrop,setLocdrop]=useState(false)
    const [odrop,setOdrop]=useState(false)
    const [ancdrop,setancDrop]=useState(false)

    let locdropdown=()=>{
        setLocdrop(!locdrop)
        setOdrop(false)
        setancDrop(false)
    }

    let otherdropdown=()=>{
        setOdrop(!odrop)
        setLocdrop(false)
        setancDrop(false)
    }
    let announcementdropdown=()=>{
        setancDrop(!ancdrop)
        setOdrop(false)
        setLocdrop(false)
    }
    let close=()=>{
        setLocdrop(false)
        setOdrop(false)
        setancDrop(false)
    }

    const navigate=useNavigate()

    let logout=()=>{
        localStorage.removeItem('id')
        localStorage.removeItem('email')
        navigate('/login')
    }
        useEffect(()=>{
            let id=localStorage.getItem('id')
            let email=localStorage.getItem('email')
            let auth=async ()=>{
              let response=await axios.post('http://localhost:4000/seekers/api/auth/authenticate',{_id:id,Email:email})
              console.log(response);
              setData(response.data);
              if(response==null){
                navigate('/login')
              }
              else if(response?.data?.userType !=='filmcompany'){
                navigate('/login')
              }
         
            }
            if(id){

                auth()
            }
            else{
                navigate('/login')
                window.location.reload()
    
            }
          },[])

  return (
    <div>
        <div className='flex flex-wrap fixed w-[100%] justify-between bg-black text-white p-3 text-[25px]'>
        <div className='fonts me-48 ps-3'>
        <div className='flex gap-4'>
           <div> Filmatrix</div>
            <div className='text-blue-400/80 text-[15px] text-center pt-[10px]'>{data?.userType} </div>
            <div className='text-gray-500 text-[15px] text-center pt-[10px]'>{data?.companyName}</div>
            </div>
        </div>
        <div className='hidden flex-wrap justify-evenly gap-2  sm:flex flex-1 text-[20px]'>
            <Link to='/filmcompany'><div onClick={close}>
                Home
            </div></Link>
            <Link to='/filmcompany/filmprof'><div onClick={close}>
                Profile
            </div></Link>
           
                <div className='hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
                    <button onClick={announcementdropdown}>Announcement</button>
{ancdrop &&
            <div className='list-none absolute mt-3 -ml-1  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1'>
            <Link to='/filmcompany/addanc' className=''><li>Add announcement</li></Link>
            <Link to='/filmcompany/vanc' className=''> <li>View Announcement</li></Link>
            </div>
}
                </div>
               
            <Link to='/filmcompany/fcviewhcreq'>
                <div onClick={close}>Hiring</div>
                </Link>

            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
                <button onClick={locdropdown}>Location</button>
{locdrop &&
            <div className='list-none absolute mt-3 -ml-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 '>
            <Link to='/filmcompany/fcvloc' className=''><li>View Location</li></Link>
            <Link to='/filmcompany/fclocreq' className=''> <li>Booking request</li></Link>
        </div>
}
        </div>
            <Link to='/filmcompany/vprogress'>
            <div onClick={close}>Progress</div>
            </Link>
               <Link to='/filmcompany/jobseekers' className=''><div>Crew</div></Link>
               <button className='-mt-2' onClick={logout}>Logout</button>
            
        </div>
    </div>
    <div onClick={close}>

    <Outlet/>
    </div>
    </div>
  )
}
export default Filmnav