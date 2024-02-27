import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Locnav = () => {

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

    
    let close=()=>{
        setLocdrop(false)
        setOdrop(false)
        setancDrop(false)
        setJobdrop(false)
    }

  return (
    <div>
        <div className='flex flex-wrap fixed w-[100%] justify-between bg-black text-white p-3 text-[25px]'>
        <div className='fonts flex-1 ps-3'>
            Filmatrix
        </div>
        <div className='hidden flex-wrap justify-evenly sm:flex flex-1 text-[20px]'>
            <Link to='/location'><div onClick={close}>
                Home
            </div></Link>
           
               <Link to='/location/lprofile'> <div>
                    Profile
                </div></Link>
               
            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
                <span onClick={announcementdropdown}>Announcement</span>
{ancdrop &&
            <div className='list-none absolute mt-3 -ml-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 '>
            <Link to='/location/lvanc' className=''><li>View Announcement</li></Link>
            <Link to='/user/' className=''> <li>Booking request</li></Link>
        </div>
}
 </div>


            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
               <span onClick={locdropdown}> Location</span>
{locdrop &&
        <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 w-40 -ml-10'>
            <Link to='/location/addloc' className=''><li>Add location</li></Link>
            <Link to='/location/lviewlc' className=''> <li>View location</li></Link>
            <Link to='/hiring/hskreq' className=''> <li>Seekers</li></Link>
        </div>
}
            </div>

            
            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
               <span onClick={otherdropdown}> Other</span>
{odrop &&
        <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 w-40 -ml-10'>
            <Link to='/location/lbkreq' ><li>Booking req</li></Link>
            <Link to='/location/lbkst' ><li>Booking status</li></Link>
            <Link to='/location/lvfd' > <li>View Feedback</li></Link>
            <Link to='/location/lvpay' > <li>View Payment</li></Link>
            <Link to='/'> <li>Logout</li></Link>
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
