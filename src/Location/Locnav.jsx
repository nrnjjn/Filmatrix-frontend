import React, {useEffect, useState} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Locnav = () => {

    const [locdrop,setLocdrop]=useState(false)
    const [odrop,setOdrop]=useState(false)



    let locdropdown=()=>{
        setLocdrop(!locdrop)
        setOdrop(false)
       
       
    }

    let otherdropdown=()=>{
        setOdrop(!odrop)
        setLocdrop(false)
 
    }
  

    
    let close=()=>{
        setLocdrop(false)
        setOdrop(false)
       
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
          if(response==null){
            navigate('/login')
          }
          else if(response?.data?.userType !=='locationowner'){
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
               
                <Link to='/location/lvanc'> <div>
                    Announcement
                </div></Link>
            

            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
               <span onClick={locdropdown}> Location</span>
{locdrop &&
        <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 w-40 -ml-10'>
            <Link to='/location/addloc' className=''><li>Add location</li></Link>
            <Link to='/location/lviewlc' className=''> <li>View location</li></Link>
           
        </div>
}
            </div>

            
            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
               <span onClick={otherdropdown}> Other</span>
{odrop &&
        <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 w-40 -ml-10'>
            <Link to='/location/lbkreq' ><li>Booking req</li></Link>
            <Link to='/location/lvfd' > <li>View Feedback</li></Link>
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
