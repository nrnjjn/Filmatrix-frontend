import React from 'react'


export const Login = () => {
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
            
            <div className='box w-[60%] h-[85%] m-auto flex flex-wrap justify-center gap-44 shadow-2xl shadow-black/45'>
         
          <div className='mt-5 bg-black  w-[350px] h-[430px] shadow-xl shadow-black/30'>
            <div className='text-center my-7  text-2xl font-semibold text-white'>Login Page</div>
            <div className='ms-9 text-lg mb-2 text-white'>Email</div>
            <div className='ms-9 mb-7'><input className=' py-2 px-3 pe-20' type="text" name="" id="" placeholder='Enter your email'/></div>
            <div className='ms-9 text-lg mb-2 text-white'>Passwrord</div>
            <div className='ms-9 mb-7'><input className=' py-2 px-3 pe-20' type="password" name="" id="" placeholder='Enter your password'/></div>
            <div className='ms-9 text-sm mb-7 text-white'>Forgot password?</div>
            <button className='bg-gray-900 px-7 py-2 text-lg mx-28 font-semibold text-white '>LOGIN</button>
          </div>
                    
        
        </div>

        </div>

    
    </div>
  )
}