import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Login = () => {

  const navigate=useNavigate()
  const [data,setData]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    setData(data)
    let response=await axios.post('http://localhost:4000/seekers/login',data)
    console.log(response);
    if(response.data){
      localStorage.setItem('id',response.data._id)
      localStorage.setItem('email',response.data.Email)
      if(response.data.userType=='seekers'){

          navigate('/user')
        
        
      }
      else if(response.data.userType=='filmcompany'){
        if(response.data.Status=='Accepted'){

          navigate('/filmcompany')
        }
        else{
          alert('Invalid')
        }
      }
      else if(response.data.userType=='hiringteam'){
        if(response.data.Status=='Accepted'){

          navigate('/hiring')
        }
        else{
          alert('Invalid')
        }
      }
      else if(response.data.userType=='locationowner'){
        if(response.data.Status=='Accepted'){

          navigate('/location')
        }
        else{
          alert('Invalid')
        }
      }
      else if(response.data.userType=='admin'){
        navigate('/admin')
      }
    }
    else{
      toast.error('Incorrect username or password')
    }
  }

  return (
    <div className='logimg pt-5'>
        <div className=' '>
            {/* <img className='w-[50%] ml-24 pt-14' src= { img } alt="" />
            <div className='text-white ml-36 pt-[-19] flex gap-36 -mt-80'>
              Name 
              <input type="text" className='bg-transparent border-solid border-white border-2' />
            </div>
            <br />
            <br />
            <div className='text-white ml-36 pt-[-19] flex gap-32'>
              Password
              <input type="password" className='bg-transparent border-solid border-white border-2' />
            </div>
            <div><button className='text-white ml-44 mt-32'>Login</button></div> */}
            
           <form onSubmit={handleSubmit}> <div className='box pt-5 w-[60%] h-[85%] m-auto flex flex-wrap justify-center gap-44 '>
         
          <div className='mt-5 bg-black  w-[350px] h-[430px] shadow-xl shadow-black/30'>
            <div className='text-center my-7  text-2xl font-semibold text-white'>Login Page</div>
            <div className='ms-9 text-lg mb-2 text-white'>Email</div>
            <div className='ms-9 mb-7'><input onChange={handleChange} className=' py-2 px-3 pe-20' type="email" name="Email" id="" placeholder='Enter your email'/></div>
            <div className='ms-9 text-lg mb-2 text-white'>Password</div>
            <div className='ms-9 mb-7'><input onChange={handleChange} className=' py-2 px-3 pe-20' type="password" name="Password" id="" placeholder='Enter your password'/></div>
            <Link to={'/emailotp'}> <div className='ms-9 text-sm mb-7 text-white'>Forgot password?</div></Link>
            <button type='submit' className='bg-gray-900 px-7 py-2 text-lg mx-28 font-semibold text-white '>LOGIN</button>
          </div>
                    
        
        </div></form>

        </div>

    
    </div>
  )
}