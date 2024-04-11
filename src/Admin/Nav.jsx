import React, {useState} from 'react'
import { Outlet, Link } from 'react-router-dom';

const Adminnav = () => {

    const [odrop,setOdrop]=useState(false)

    let otherdropdown=()=>{
        setOdrop(!odrop)
    }

    let close=()=>{
        setOdrop(false)
    }

  return (
    <div>
    <div className='flex flex-wrap fixed w-[100%] justify-between bg-black text-white p-3 text-[25px]'>
        <div className='fonts flex-1'>
            Filmatrix
        </div>
        <div className=" block sm:hidden">
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
                <span onClick={otherdropdown}>Other</span>
                {odrop &&
                         <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1'>
                         <Link to='/admin/aprvdsk' className=''><li>Crew</li></Link>
                         <Link to='/admin/addlocreq' className=''><li>Location request</li></Link>
                         <Link to='/' className=''> <li>Logout</li></Link>
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
