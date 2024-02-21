import React from 'react'

export const Fcregister = () => {
  return (
    <div className='bg-slate-400'>
      <p className='text-[30px] text-center text-black pt-24'>Film Company Regestration</p>
   <form className='pt-5  w-[30%] text-center m-auto '>

      <input type="text" className='text-black mb-3 p-2 w-[100%]  border-2 bg-transparent rounded placeholder-gray-950 border-slate-700' placeholder='Company Name' />
      <input type="email" className='text-black mb-3 p-2 w-[100%]  border-2 placeholder-gray-950 bg-transparent rounded border-slate-700' placeholder='Email' />
      <input type="number" className='text-black mb-3 p-2 w-[100%]  border-2 placeholder-gray-950 bg-transparent rounded border-slate-700' placeholder='Phone number' />
      <textarea name="address" id="" cols="48" rows="5" className='border-2 text-black mb-3 placeholder-gray-950 bg-transparent rounded border-slate-700' placeholder='Address'></textarea>
      <p className='text-start'>Liscence</p>
      <input type="file" />
      <textarea name="address" id="" cols="48" rows="4" className='border-2 text-black mb-3 mt-3 placeholder-gray-950 bg-transparent rounded border-slate-700' placeholder='Description'></textarea>
      <input type="password" className='text-black mb-3 p-2 w-[100%]  border-2 placeholder-gray-950 bg-transparent rounded border-slate-700' placeholder='Password' />
      <input type="password" className='text-black mb-3 p-2 w-[100%]  border-2 placeholder-gray-950 bg-transparent rounded border-slate-700' placeholder='Confirm Password' />
      <button className='bg-black text-white m-auto p-2 rounded mb-2'>Submit</button>
      
   </form>
      

    </div>
  )
}
