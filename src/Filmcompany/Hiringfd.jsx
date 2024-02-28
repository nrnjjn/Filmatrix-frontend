import React from 'react'

export const Hiringfd = () => {
  return (
    <div className='addanc flex flex-wrap flex-col'>
         <div className='text-center pt-36 font-bold text-3xl text-white/70'>
          Hiring Feedback
         </div>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input type="text" placeholder='Hiring Name' className='w-[237px] bg-transparent text-black placeholder:text-white/70 border-2 rounded placeholder:text-center' />
          </div>
          
          <div className='flex flex-row flex-wrap'>
   
            <textarea name="description" id="" cols="30" rows="10" placeholder='Feedback' className='bg-transparent text-black placeholder:text-white/70 border-2 rounded placeholder:text-center'></textarea>
          </div>
          <button className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
         </div>
    </div>
  )
}
