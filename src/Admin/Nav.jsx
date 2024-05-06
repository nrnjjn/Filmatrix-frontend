import React, {useEffect, useState} from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Adminnav = () => {

    const [data,setData] = useState('');

    const [odrop,setOdrop]=useState(false)

    let otherdropdown=()=>{
        setOdrop(!odrop)
    }

    let close=()=>{
        setOdrop(false)
    }
    const navigate=useNavigate()

    let logout=()=>{
        localStorage.removeItem('id')
        localStorage.removeItem('email')
        navigate('/')
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
              else if(response?.data?.userType !=='admin'){
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
            <div className='flex gap-4'>
           <div> Filmatrix</div>
            <div className='text-red-500 text-[18px] pt-1.5'>{data?.userType} </div>
            </div>
        </div>
        
        <div className=" block sm:hidden ">
        &#9776;
        </div>
        <div className='hidden flex-wrap justify-evenly sm:flex flex-1 text-[20px]'>
            <Link to=''><div onClick={close}>
                Home
            </div></Link>
            <Link to='/admin/film'>
                <div onClick={close}>Film</div>
                </Link>
            <Link to='/admin/hcreq'>
                <div onClick={close}>Hiring</div>
                </Link>
            <Link to='/admin/loreq'>
            <div onClick={close}>Location</div>
            </Link>
            <Link to='/admin/category'>
                <div onClick={close}>Category</div>
                </Link>
            
            <div>
                <button onClick={otherdropdown}>Other</button>
                {odrop &&
                         <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 me-2 pe-1 pb-1'>
                         <Link to='/admin/announcement' className=''><li>Announcement</li></Link>
                         <Link to='/admin/aprvdsk' className=''><li>Crew</li></Link>
                         <Link to='/admin/addlocreq' className=''><li>Location request</li></Link>
                         <button onClick={logout}>Logout</button>
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
export default Adminnav
