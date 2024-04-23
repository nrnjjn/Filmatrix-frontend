import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Edithpwk = () => {
    let id=localStorage.getItem('id')
let {userId} = useParams()
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)

  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/hiringteam/viewpreviousworkd/${userId}`)
        console.log(response.data);
        setUserData(response.data)
      }
      fetchdata()
    },[refresh])

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
    setrefresh(!refresh)

    const formData = new FormData();
        for (const key in data){
            if(data[key]){
                formData.append(key,data[key]);
            }
        }
        console.log(data);
    console.log(formData);
    let response= axios.put(`http://localhost:4000/hiringteam/editpreviouswork/${userId}`,formData,{
      headers:{
        'content-Type':'multiport/form-data'
      }
    })
    console.log(response);
    setData('')
    // navigate('/location/lviewlc')
    
  }
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className='upw'>
    <p className='text-center font-bold pt-32 text-[25px] text-white'>PREVIOUS WORK</p>
   <form onSubmit={handleSubmit}> 
   <div className='flex flex-wrap '>
    <div className='text-white flex flex-wrap flex-col'>
        <div className='pt-8 '>
            <div className='flex flex-wrap justify-between w-[470px] ms-20 '>
                <p >Film:</p>
                <input onChange={handleChange} placeholder={userData.Filmname} name='Filmname' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
            </div>
            <div className='flex flex-wrap justify-between w-[470px]  ms-20 py-3'>
                <p >Genre:</p>
                <input onChange={handleChange} placeholder={userData.Genre} name='Genre' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
            </div>
            <div className='flex flex-wrap justify-between w-[470px] ms-20 py-'>
                <p >Director:</p>
                <input onChange={handleChange} placeholder={userData.Director} name='Director' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
            </div>
        </div>
        <div>
            <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                <p>Description:</p>
                <textarea onChange={handleChange} placeholder={userData.Description} name="Description" id="" cols="30" rows="10" className='h-36 w-[195px] bg-transparent border-white border-solid border-2 rounded'></textarea>
            </div>
        </div>
    
</div>
<div className='flex flex-wrap flex-col text-white'>
<div className='pt-2'>
    <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 '>      
        <label class="block h-10 mb-2  text-gray-900 dark:text-white" for="file_input">Work photo:</label>
        <a href={`http://localhost:4000/uploads/${userData.Image}`} download>
             <img  alt="" className='w-10 h-10 ' src={`http://localhost:4000/uploads/${userData.Image}`} />
             </a>
        <input onChange={handlefile} name='Image' class="block w-[40%] text-sm text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>
            </div>
  </div>
  <div className='flex flex-wrap justify-between w-[470px] ms-20 py-'>
                <p >Producer:</p>
                <input onChange={handleChange} placeholder={userData.Producer} name='Producer' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
            </div>

    <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
        <p >Productionhouse:</p>
                <input onChange={handleChange} placeholder={userData.Productionhouse} name='Productionhouse' type="text" className='bg-transparent border-white border-solid border-2 rounded' />
            </div>

    <div>
    <div className='flex flex-wrap justify-between w-[470px] ms-20 text-white'>
                <p>From date:</p>
                <p className=''>{ new Date(userData.Fromdate).toLocaleDateString()} </p>
                <input onChange={handleChange} max={today} name='Fromdate' type="date" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
    </div>
   
    <div>
    <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3 text-white'>
                <p>To date:</p>
                <p className=''>{ new Date(userData.Todate).toLocaleDateString()} </p>
                <input onChange={handleChange} max={today} name='Todate' type="date" className='bg-transparent border-white border-solid border-2 rounded'/>
                </div>
    </div>
    <button type='submit' className='py-5 text-yellow-200'>Submit</button></div>
</div></form>
</div>
)
}
