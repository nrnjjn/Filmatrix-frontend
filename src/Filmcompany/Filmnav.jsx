import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

const Filmnav = () => {
    const [locdrop,setLocdrop]=useState(false)
    const [odrop,setOdrop]=useState(false)

    let locdropdown=()=>{
        setLocdrop(!locdrop)
    }

    let otherdropdown=()=>{
        setOdrop(!odrop)
    }

  return (
    <div>
        <div className='flex flex-wrap fixed w-[100%] justify-between bg-black text-white p-3 text-[25px]'>
        <div className='fonts flex-1 ps-3'>
            Filmatrix
        </div>
        <div className='hidden flex-wrap justify-evenly sm:flex flex-1 text-[20px]'>
            <Link to='/filmcompany'><div>
                Home
            </div></Link>
            <Link to='/filmcompany/addanc'>
                <div>Announcement</div>
                </Link>
            <Link to='/filmcompany/fcviewhcreq'>
                <div>Hiring</div>
                </Link>
           
           
            <div>
                <span onClick={locdropdown}>Location</span>
{locdrop &&
            <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1'>
            <Link to='/filmcompany/fcvloc' className=''><li>View Location</li></Link>
            <Link to='/filmcompany/fclocreq' className=''> <li>Booking request</li></Link>
        </div>
}


                </div>
            

            <Link to='/filmcompany/vprogress'>
            <div>Progress</div>
            </Link>
            <div>
               <span onClick={otherdropdown}> Other</span>
{odrop &&
        <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1'>
            <Link to='/filmcompany/jobseekers' className=''><li>Crew</li></Link>
            <Link to='/filmcompany/hiringfd' className=''> <li>Hiring Feedback</li></Link>
            <Link to='/' className=''> <li>Logout</li></Link>
        </div>
}
            </div>
        </div>
    </div>
    <Outlet/>
    </div>
  )
}
export default Filmnav