import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

const Navlanding = () => {
    const [drop,setDrop]=useState(false)
 

    let dropdown=()=>{
        console.log('running');
        setDrop(!drop) 
        
        
    }
    let close=()=>{
        setDrop(false)
    }
  

  return (
    <div>
    <div className='flex flex-wrap fixed w-[100%] justify-between bg-black text-white p-3 text-[25px]'>
        <div className='fonts flex-1 ps-3'>
           <button> Filmatrix</button>
        </div>
        <div className='flex flex-wrap  text-[20px] flex-1 justify-evenly'>
            <Link to='/'><div>
                Home
            </div></Link>
            <div  className=' text-white'>
               <button onClick={dropdown}> Register</button>
{drop &&

        <div className='list-none absolute mt-3 p-1 bg-black text-white'>
            <Link to='/fcreg' className=''><li>Film Company</li></Link>
            <Link to='/hrreg' className=''> <li>Hiring Team</li></Link>
            <Link to='/loreg' className=''><li>Location Owner</li></Link>
            <Link to='/skreg' className=''><li>Job Seekers</li></Link>
        </div>
}
</div>

            <Link to='/login'><div>
                Login

            </div></Link>
            
        </div>
    </div>
    <div onClick={close}>
    <Outlet/>
    </div>
    </div>
  )
}
export default Navlanding
