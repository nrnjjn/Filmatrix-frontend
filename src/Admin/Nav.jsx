import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Adminnav = () => {
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
            <div>
                Home
            </div>
            <Link to='/admin/film'>
                <div>Film</div>
                </Link>
            <Link to='/admin/hcreq'>
                <div>Hiring</div>
                </Link>
            <Link to='/admin/loreq'>
            <div>Location</div>
            </Link>
            
            <Link to='/admin/fcreg' ><div>
                Other
            </div></Link>
            
        </div>
     
    </div>
    <Outlet/>
    </div>
  )
}
export default Adminnav
