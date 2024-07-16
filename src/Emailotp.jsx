import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Emailotp = () => {
    const [Email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const[verifyotp,setVerifyotp]=useState('')
  let navigate=useNavigate()
    const sendOTP = async () => {
      try {
        const response = await axios.post('https://filmatrix.onrender.com/admin/sendOTP', { Email });
        setMessage(response.data.message);
        console.log(response.data.otp,'--------------------');
        setVerifyotp(response.data.otp)
      } catch (error) {
        setMessage('Error sending OTP. Please try again.');
      }
    };
  
    const verifyOTP = async () => {
      try {
        console.log(verifyotp,otp);
        if(verifyotp==otp){
          // alert('success')
          navigate(`/changepwd/${Email}`)
        }
      } catch (error) {
        setMessage('Error verifying OTP. Please try again.');
      }
    };
  return (
    <div className='logimg pt-5'>
        <div className=' '>
           
            
           <form > <div className='box pt-5 w-[60%] h-[85%] m-auto flex flex-wrap justify-center gap-44 '>
         
          <div className='mt-5 bg-black  w-[350px] h-[430px] shadow-xl shadow-black/30'>
            <div className='text-center my-7  text-2xl font-semibold text-white'>Login Page</div>
            <div className='ms-9 text-lg mb-2 text-white'>Email</div>
            <div className='ms-9 mb-7'><input  value={Email}
        onChange={(e) => setEmail(e.target.value)} className=' py-2 px-3 pe-20' type="email" name="Email" id="" placeholder='Enter your email'/></div>
        <button  onClick={sendOTP} type='button' className='bg-gray-900 px-7 py-2 text-lg mx-28 font-semibold text-white '>SEND</button>
            <div className='ms-9 text-lg mb-2 text-white'>OTP</div>
            <div className='ms-9 mb-7'><input value={otp}
        onChange={(e) => setOtp(e.target.value)} className=' py-2 px-3 pe-20' type="otp" name="Password" id="" placeholder='Enter your password'/></div>
            <button onClick={verifyOTP} type='button' className='bg-gray-900 px-7 py-2 text-lg mx-28 font-semibold text-white '>SUBMIT</button>
            <p className='text-white'>{message}</p>
          </div>
        </div></form>

        </div>

    
    </div>
  )
}

export default Emailotp