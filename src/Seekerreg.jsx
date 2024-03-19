import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Seekerreg = () => {

  const navigate=useNavigate()
  const [data,setData]=useState('')
  
  
  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  
  let handleSubmit=async (event)=>{
    event.preventDefault()

    console.log(data);
    navigate('/')
    let response=await axios.post('http://localhost:4000/seekers/register',{...data,userType:'seekers'})
       console.log(response);
    
  }
  return (
    <div className='reg'>
     <p className='text-center font-bold pt-32 text-[25px] text-white'>SEEKERS REGESTRATION</p>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-wrap '>
        <div className='text-white flex flex-wrap flex-col'>
            <div className='pt-8 '>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 '>
                    <p >Name</p>
                    <input onChange={handleChange} name='Name' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-5'>
                    <p>E-mail</p>
                    <input onChange={handleChange} name='Email' type="email" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Phone</p>
                    <input onChange={handleChange} name='Phone' type="number" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
             </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Address</p>
                    <textarea onChange={handleChange} name="Address" id="" cols="30" rows="10" className='h-36 w-[195px] bg-transparent border-white border-solid border-2 rounded'></textarea>
                </div>
            </div>
        
    </div>
    <div className='text-white flex flex-wrap flex-col'>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 '>
                    
            <label class="block h-10 mb-2   text-gray-900 dark:text-white" for="file_input">Idproof</label>
            <input onChange={handleChange} name='Idproof' class="block w-[40%] text-sm text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>

                </div>
        </div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
            <span className=' w-56  rounded-l-lg '>
              Gender:

            </span>
            <select onChange={handleChange} className=' h-9 w-[40%] bg-black border-white border-solid border-2 rounded ' name='Gender'>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='others'>Other</option>
              </select></div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Password</p>
                    <input onChange={handleChange} name='Password' type="password" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Confirm Password</p>
                    <input onChange={handleChange} name='confirmPassword' type="password" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <button type='submit' className='ms-20 py-3 text-green-400'>Submit</button>
        
    </div>
    </div>
    </form>
    </div>
  )
}
