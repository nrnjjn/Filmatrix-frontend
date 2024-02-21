import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Filmnav = () => {
  return (
    <div>
        <div className='flex flex-wrap fixed w-[100%] justify-between bg-black text-white p-3 text-[25px]'>
        <div className='fonts flex-1'>
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
            <Link to='/filmcompany/fclocreq'>
            <div>Location</div>
            </Link>
            <Link to='/admin/loreq'>
            <div>Progress</div>
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
export default Filmnav