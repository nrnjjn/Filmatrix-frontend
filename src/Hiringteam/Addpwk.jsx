import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import  { toast } from 'react-toastify';

export const Addpwk = () => {

let id=localStorage.getItem('id')
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
    let formData = new FormData();
    formData.append('Filmname', data.Filmname);
    formData.append('Image', data.Image);
    formData.append('Description', data.Description);
    formData.append('Fromdate', data.Fromdate);
    formData.append('Todate', data.Todate);
    formData.append('Genre', data.Genre);
    formData.append('Director', data.Director);
    formData.append('Producer', data.Producer);
    formData.append('Productionhouse', data.Productionhouse);
    formData.append('userId', id);
    setData(data)
    console.log(data);
    console.log(formData);
    toast.success('Previous work added')

    // navigate('/hiring/viewhpwk')
    let response=await axios.post(`http://localhost:4000/hiringteam/addpwk`,formData,{
       userId:id,
        headers: {
            'Content-Type': 'multipart/form-data'  // Set the content type for FormData
          }
    })
    setData('')
       console.log(response.data);
  }

  const today = new Date().toISOString().split('T')[0];

  return (
  <>
    
    <div className='upw'>
        <p className='text-center font-bold pt-32 text-[25px] text-white'>PREVIOUS WORK</p>
       <form onSubmit={handleSubmit}> 
       <div className='flex flex-wrap '>
        <div className='text-white flex flex-wrap flex-col '>
            <div className='pt-8 '>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 '>
                    <p >Film:</p>
                    <input onChange={handleChange} required value={data.Filmname ? data.Filmname: ''} name='Filmname' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
                </div>
                <div className='flex flex-wrap justify-between w-[470px]  ms-20 py-3'>
                    <p >Genre:</p>
                    <input onChange={handleChange} pattern="^[a-zA-Z ]*$" required value={data.Genre ? data.Genre: ''} name='Genre' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
                </div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-'>
                    <p >Director:</p>
                    <input onChange={handleChange} pattern="^[a-zA-Z ]*$" required value={data.Director ? data.Director: ''} name='Director' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>Description:</p>
                    <textarea onChange={handleChange} value={data.Description ? data.Description: ''} required name="Description" id="" cols="30" rows="10" className='h-36 w-[195px] bg-transparent border-white border-solid border-2 rounded'></textarea>
                </div>
            </div>
        
    </div>
    <div className='flex flex-wrap flex-col text-white'>
    <div className='pt-2'>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 '>      
            <label class="block h-10 mb-2  text-gray-900 dark:text-white" for="file_input">Work photo:</label>
            <input onChange={handlefile} required name='Image' class="block w-[40%] text-sm text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>
                </div>
      </div>
      <div className='flex flex-wrap justify-between w-[470px] ms-20 py-'>
                    <p >Producer:</p>
                    <input onChange={handleChange} pattern="^[a-zA-Z ]*$" required value={data.Producer ? data.Producer : ''} name='Producer' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
                </div>

        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
            <p >Productionhouse:</p>
                    <input onChange={handleChange} value={data.Productionhouse ? data.Productionhouse: ''} required name='Productionhouse' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
                </div>

        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 text-white'>
                    <p>From date:</p>
                    <input onChange={handleChange}  max={today} required name='Fromdate' type="date" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
       
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 text-white'>
                    <p>To date:</p>
                    <input onChange={handleChange} max={today} required  name='Todate' type="date" className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <button type='submit' className='py-5 text-yellow-200'>Submit</button></div>
    </div>
    </form>
    </div>
    </>
  )
}
