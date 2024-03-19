import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export const Userprofile = () => {


let id=localStorage.getItem('id')
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/seekers/viewprofile/${id}`)
        console.log(response.data);
        setUserData(response.data)
      }
      fetchdata()
    },[refresh])
    const [data,setData]=useState('')

let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    let response=await axios.put(`http://localhost:4000/seekers/editprofile/${id}`,data)
    console.log(response);
    setData('')
  }
 
  return (
    <div className='profile'>
        <p className='text-center font-bold pt-32 text-[25px] text-white'>PROFILE</p>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-wrap '>
        <div className='text-white flex flex-wrap flex-col'>
            <div className='pt-8 '>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 '>
                    <p className=''>Name</p>
                    <input onChange={handleChange} placeholder={userData.Name} name='Name' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-5'>
                    <p>E-mail</p>
                    <input onChange={handleChange} placeholder={userData.Email} name='Email' type="email" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-2'>
                    <p>Phone</p>
                    <input onChange={handleChange} placeholder={userData.Phone} name='Phone' type="number" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
             </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 pt-5'>
                    <p>Address</p>
                    <textarea onChange={handleChange} placeholder={userData.Address} name="Address" id="" cols="30" rows="10" className='h-36 w-[195px] bg-transparent border-white border-solid border-2 rounded'></textarea>
                </div>
            </div>
            
        
    </div>
    <div className='text-white  flex flex-wrap flex-col'>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 '>
                    
            <label class="block h-10 mb-2  font-medium text-gray-900 dark:text-white" for="file_input">Id-proof</label>
            <input onChange={handleChange} placeholder={userData.Idproof} name='Idproof' class="block w-[40%] text-sm text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>
                </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Password</p>
                    <input onChange={handleChange} placeholder={userData.Password} name='Password' type="password" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Confirm Password</p>
                    <input onChange={handleChange} placeholder={userData.confirmPassword} name='confirmPassword' type="password" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-center w-[470px] ms-20 py-3'>
            <Link to='/user/uvpw'><button className='text-yellow-200'>Previous Work</button></Link>
        </div>
        </div>
        <button type='submit' className='ms-20 py-3 text-green-500'>Submit</button>
        
    </div>
    </div>
    </form>
    </div>
  )
}
