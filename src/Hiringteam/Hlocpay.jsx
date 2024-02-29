import React from 'react'

export const Hlocpay = () => {

    
  return (
    <div className='hvloc '>
         <p className='text-center font-bold pt-32 text-[25px] text-black'>LOCATION PAYMENT</p>
        <div className='flex flex-wrap  '>
        <div className='text-white flex flex-wrap flex-col'>
            <div className='pt-8 '>
                <div className='flex flex-wrap gap-56 w-[470px] ms-20 '>
                    <p className='text-black text-lg font-bold'>Amount</p>
                    <p>1200rps</p>
                    
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-5'>
                <label className='text-black text-lg font-bold'>Holder Name</label>
                    <input type="text" className='bg-transparent border-white border-solid border-2 rounded h-9'/>
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                <label className='text-black text-lg font-bold'>Card Number</label>
                <input type="text" className='bg-transparent border-white border-solid border-2 rounded h-9'/>                </div>
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
                    <p>Liscence</p>
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
