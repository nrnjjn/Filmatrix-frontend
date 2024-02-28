import React from 'react'
import img from '../Images/Athirappilly.jpg'

export const Locdetail = () => {
  return (
    <div className='fcvloc pt-40'>
        <div className='bg-slate-950/50 w-[800px] h-[370px] m-auto flex gap-2 rounded'>
            <img src={ img } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
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
            </div>
        </div>
    </div>
  )
}
