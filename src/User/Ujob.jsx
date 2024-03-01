import React from 'react'
import { Link } from 'react-router-dom'
export const Ujob = () => {
  return (
    <div className='hpw'>
        <div className='flex flex-wrap justify-evenly pt-56'>
         
        <div className='w-60 h-60 bg-slate-950/50 text-white rounded pt-2'>
            <div className='flex flex-wrap justify-between'>
            <p className='pl-5'>Job:</p>
            <p className='pe-5'>Camera man</p>
            </div>
            <div className='flex flex-wrap justify-between'>
            <p className='pl-5'>Vacancy:</p>
            <p className='pe-28'>5</p>
            </div>
            <div className='flex flex-wrap justify-between'>
            <p className='pl-5'>Details:</p>
            <p className='w-36'>3 years experience  in film camera department required</p>
            </div>
            <div className='flex flex-wrap justify-center'>
            <Link to='/user/ujobreqst'><button className='text-green-400'>Apply</button></Link>
            </div>
        </div>
        <div className='w-60 h-60 bg-slate-950/50 rounded text-white'>
            
        <div className='flex flex-wrap justify-between'>
            <p className='pl-5'>Job:</p>
            <p className='pe-5'>Camera man</p>
            </div>
            <div className='flex flex-wrap justify-between'>
            <p className='pl-5'>Vacancy:</p>
            <p className='pe-28'>5</p>
            </div>
            <div className='flex flex-wrap justify-between'>
            <p className='pl-5'>Details:</p>
            <p className='w-36'>3 years experience  in film camera department required</p>
            </div>
            <div className='flex flex-wrap justify-center'>
            <Link to='/user/ujobreqst'><button className='text-green-400'>Apply</button></Link>
            </div>
        </div>
        </div>
    </div>
  )
}
