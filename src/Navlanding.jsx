import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

const Navlanding = () => {
    const [drop,setDrop]=useState(false)
 

    let dropdown=()=>{
        console.log('running');
        setDrop(!drop) 
        
        
    }
  

  return (
    <div>
    <div className='flex flex-wrap fixed w-[100%] justify-between bg-black text-white p-3 text-[25px]'>
        <div className='fonts flex-1'>
            Filmatrix
        </div>
        <div className='flex flex-wrap  text-[20px] flex-1 justify-evenly'>
            <Link to='/'><div>
                Home
            </div></Link>
            <div  className=' text-white'>
               <span onClick={dropdown}> Register</span>
{drop &&

        <div className='list-none absolute mt-6  bg-gray-400/50 text-black'>
            <Link to='/fcreg' className='text-black'><li>Film Company</li></Link>
            <Link to='/hrreg' className='text-black'> <li>Hiring Team</li></Link>
            <Link to='/loreg' className='text-black'><li>Location Owner</li></Link>
            <Link to='/skreg' className='text-black'><li>Job Seekers</li></Link>
        </div>
}
</div>

            <Link to='/login'><div>
                Login

            </div></Link>
            
        </div>
    </div>
    <Outlet/>
    </div>
  )
}
export default Navlanding
