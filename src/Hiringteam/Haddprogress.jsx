import React from 'react'

export const Haddprogress = () => {
  return (
    <div className='hviewjob'>
        <div className='text-center pt-36 font-bold text-3xl pb-10'>
          Add Progress
         </div>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input type="text" placeholder='Hiring Name' className='w-[237px]' />
          </div>
          
          <div className='flex flex-row flex-wrap'>
   
            <textarea name="description" id="" cols="30" rows="10" placeholder='Feedback' className=''></textarea>
          </div>
          <button className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
         </div>
    </div>
  )
}
