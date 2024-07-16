import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  { toast } from 'react-toastify';


export const Filmprofile = () => {

    let id=localStorage.getItem('id')
    const [userData,setUserData]=useState('')
    const [refresh,setrefresh]=useState(false)
    
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`https://filmatrix.onrender.com/seekers/viewprofile/${id}`)
            console.log(response.data);
            setUserData(response.data)
          }
          fetchdata()
        },[refresh])

        const [data,setData]=useState('')
    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      let handlefile=(event)=>{
        console.log(event.target.files);
        setData({...data,[event.target.name]:event.target.files[0]})
        console.log(data);
      }
    
    
      let handleSubmit = async (event) => {
        event.preventDefault();
        if (data.Password !== data.confirmPassword) {
            toast.error("Password and confirm password do not match.");
            return; // Stop further execution
        }
        setrefresh(!refresh);
    
        const formData = new FormData();
        for (const key in data) {
            if (data[key]) {
                formData.append(key, data[key]);
            }
        }
    
        console.log(data);
        console.log(formData);
        let response = axios.put(`https://filmatrix.onrender.com/seekers/editprofile/${id}`, formData, {
            headers: {
                'content-Type': 'multiport/form-data'
            }
    
        });
        console.log(response);
        toast.success('Profile updated');
        setData('');
    }
    

  return (
    <div className='reg'>
        <p className='text-center font-bold pt-32 text-[25px] text-white'>PROFILE</p>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-wrap '>
        <div className='text-white flex flex-wrap flex-col'>
            <div className='pt-8 '>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 '>
                    <p >Company Name</p>
                    <input onChange={handleChange} placeholder={userData.companyName} name='companyName' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-5'>
                    <p>E-mail</p>
                    <input onChange={handleChange} placeholder={userData.Email} name='Email' type="email" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Phone</p>
                    <input onChange={handleChange} placeholder={userData.Phone} pattern="[0-9]{10}" title="Please enter a valid phone number"  maxLength={10} name='Phone' type="tel" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
             </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Address</p>
                    <textarea onChange={handleChange} placeholder={userData.Address} name="Address" id="" cols="30" rows="10" className='h-36 w-[195px] bg-transparent border-white border-solid border-2 rounded'></textarea>
                </div>
            </div>
        
    </div>
    <div className='text-white flex flex-wrap flex-col'>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 '>
                    
            <label class="block h-10 mb-2  font-medium text-gray-900 dark:text-white" for="file_input">Liscence</label>
            <a href={`https://filmatrix.onrender.com/uploads/${userData.Liscence}`} download>
                                        <img src={`https://filmatrix.onrender.com/uploads/${userData.Liscence}`} alt=""  className='w-10'/>
                                    </a>
            <input onChange={handlefile} name='Liscence' class="block w-[40%] text-sm text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>
                </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Liscence no</p>
                    <input onChange={handleChange} placeholder={userData.liscenceNo} name='liscenceNo' type="text" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Password</p>
                    <input onChange={handleChange}  name='Password' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' type="password" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Confirm Password</p>
                    <input onChange={handleChange}  name='confirmPassword' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' type="password" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <button type='submit' className='ms-20 py-3 text-green-500'>Submit</button>
        
    </div>
    </div>
    </form>
    </div>
  )
}
