import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Changepwd = () => {
    const navigate=useNavigate()
    const [data,setData]=useState('')
  
    let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
    }
    let {Email}=useParams()

    let handleSubmit = (event) => {
      if(data.Password!=data.confirmPassword){
        toast.error('Password mismatch')
      }
      else{
      toast.success('Password updated')
      event.preventDefault()
      setData(data)
      let response = axios.put(`http://localhost:4000/admin/changepass/${Email}`,data);
      console.log(response);
      setData('');
      navigate('/login')
      }
  };

  return (
    <div className='logimg pt-5'>
        <div className=' '>
 
           <form onSubmit={handleSubmit}> <div className='box pt-5 w-[60%] h-[85%] m-auto flex flex-wrap justify-center gap-44 '>
           
          <div className='mt-5 bg-black  w-[350px] h-[430px] shadow-xl shadow-black/30'>
            <div className='text-center my-7  text-2xl font-semibold text-white'>Change password</div>
            <div className='ms-9 text-lg mb-2 text-white'>Email</div>
            <div className='ms-9 mb-7'><div  className=' py-2 px-3 pe-20' >{`${Email}`}</div></div>
            <div className='ms-9 text-lg mb-2 text-white'>Password</div>
            <div className='ms-9 mb-7'><input onChange={handleChange} className=' py-2 px-3 pe-20' type="password" name="Password" id="" placeholder='Enter your password'/></div>
            <div className='ms-9 text-lg mb-2 text-white'>Confirm Password</div>
            <div className='ms-9 mb-7'><input onChange={handleChange} className=' py-2 px-3 pe-20' type="password" name="confirmPassword" id="" placeholder='Confirm password'/></div>
            <button  className='bg-gray-900 px-7 py-2 text-lg mx-28 font-semibold text-white '>SUBMIT</button>
          </div>
                    
        
        </div></form>

        </div>

    
    </div>
  )
}

export default Changepwd