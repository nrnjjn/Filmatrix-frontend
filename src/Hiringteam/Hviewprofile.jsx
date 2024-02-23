import React from 'react'

export const Hviewprofile = () => {
  return (
    <div className='profile '>
        <p className='text-center font-bold pt-32 text-[25px] text-gray-950'>PROFILE</p>
        <div className='text-white flex flex-wrap flex-col'>
            <div className='pt-8 '>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 '>
                    <p >Company Name</p>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-5'>
                    <p>E-mail</p>
                    <input type="email" />
                </div>
            </div>
        </div>
        
    </div>
  )
}
