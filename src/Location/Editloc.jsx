import React from 'react'

export const Editloc = () => {
  return (
    <div className='lprof'>
        <p className='text-center font-bold pt-32 text-[25px] text-black'>UPDATE LOCATION</p>
        <div className='flex flex-wrap '>
        <div className='text-white flex flex-wrap flex-col'>
            <div className='pt-8 '>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 '>
                    <p >Company Name</p>
                    <input type="text" className='bg-transparent border-white border-solid border-2 rounded' />
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-5'>
                    <p>E-mail</p>
                    <input type="email" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Phone</p>
                    <input type="number" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
             </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Address</p>
                    <textarea name="address" id="" cols="30" rows="10" className='h-36 w-[195px] bg-transparent border-white border-solid border-2 rounded'></textarea>
                </div>
            </div>
        
    </div>
    <div className='text-white flex flex-wrap flex-col'>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 '>
                    <p className='text-black'>Liscence</p>
                    <input type="file" />
                </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Password</p>
                    <input type="password" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Confirm Password</p>
                    <input type="password" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <button className='ms-20 py-3'>Submit</button>
        
    </div>
    </div>
    </div>
  )
}
