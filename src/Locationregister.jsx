import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Locationregister = () => {

  const navigate=useNavigate()
  const [data,setData]=useState('')
  
  
  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  
  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()

    const requiredFields = ['companyName','Email','Phone','Address','Liscence','liscenceNo','Password','confirmPassword'];

    for (const field of requiredFields) {
     if (!data[field]) {
         return toast.error(`${field} is required`);
     }
 }


if(data.confirmPassword!=data.Password){
 toast.error('password doesnt match')

}
else{

    let formData = new FormData();
    formData.append('Name', data.Name);
    formData.append('Email', data.Email);
    formData.append('Phone', data.Phone);
    formData.append('Address', data.Address);
    formData.append('Idproof', data.Idproof);
    formData.append('Password', data.Password);
    formData.append('confirmPassword', data.confirmPassword);
    formData.append('userType','locationowner')
    console.log(data);
    // navigate('/')
    let response=await axios.post('https://filmatrix.onrender.com/seekers/register',formData,{userType:'locationowner',
    headers: {
        'Content-Type': 'multipart/form-data'  // Set the content type for FormData
      }
}).then((res)=>{
  setData(data)
    toast.success("successfully registered")
    console.log(data);
    navigate('/')

}).catch((err)=>{
  toast.error(err.response.data.message || err.message ||'password doesnt match')

})

}
  }
  return (
    <div className='reg'>
      <p className='text-center font-bold pt-32 text-[25px] text-white'>LOCATION OWNER REGISTRATION</p>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-wrap '>
        <div className='text-white flex flex-wrap flex-col'>
            <div className='pt-8 '>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 '>
                    <p >Name</p>
                    <input onChange={handleChange} required pattern="^[a-zA-Z ]*$" name='Name' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-5'>
                    <p>E-mail</p>
                    <input onChange={handleChange} required name='Email' type="email" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Phone</p>
                    <input onChange={handleChange} required pattern="[0-9]{10}" title="Please enter a valid phone number"  maxLength={10} name='Phone' type="number" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
             </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Address</p>
                    <textarea onChange={handleChange} required name="Address" id="" cols="30" rows="10" className='h-36 w-[195px] bg-transparent border-white border-solid border-2 rounded'></textarea>
                </div>
            </div>
        
    </div>
    <div className='text-white flex flex-wrap flex-col'>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 '>
                    
            <label class="block h-10 mb-2   text-gray-900 dark:text-white" for="file_input">Idproof</label>
            <input onChange={handlefile} required name='Idproof' class="block w-[40%] text-sm text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>

                </div>
        </div>
      
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Password</p>
                    <input required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' onChange={handleChange} name='Password' type="password" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Confirm Password</p>
                    <input required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' onChange={handleChange} name='confirmPassword' type="password" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <button type='submit' className='ms-20 py-3 text-green-400'>Submit</button>
        
    </div>
    </div>
    </form>

    </div>
  )
}
