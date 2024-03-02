import React from 'react'
import img from '../Images/Athirappilly.jpg'
import { Link } from 'react-router-dom' 

export const Locreqdetail = () => {
  return (
    <div className='fcvloc pt-32'>
      <div className='bg-slate-950/50 w-[800px] h-[470px] m-auto flex gap-2 '>
            <img src={ img } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Place:</p>
            <p>Athirappilli</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Details:</p>
            <p className='text-left'>Athirapilly Falls is situated in Athirapilly Panchayat  
                <br />in Chalakudy Taluk of Thrissur District in Kerala,
                <br /> India on the Chalakudy River, which originates  
                <br />from the upper reaches of the Western Ghats at 
                 <br />the entrance to the Sholayar ranges. It is the  
             <br />largest waterfall in Kerala, which stands tall at <br /> 81.5 feet.</p>
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-14'>
              <p className='font-bold'>Date:</p>
              <p>24-02-2024</p>
              
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-3'>
                <p className='font-bold'>No of days:</p>
                <p>4</p>
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-16'>
                <p className='font-bold'>Price:</p>
                <p>40000</p>
            </div>
            <div className='flex flex-wrap text-white pt-2 text-center gap-8 justify-center'>
            <Link to='/filmcompany/fclocreq'><button className='   text-green-500'>Accept</button></Link>
            <Link to='/filmcompany/fclocreq'><button className='  text-red-500'>Reject</button></Link>
            </div></div>
        </div>  
    </div>
  )
}
