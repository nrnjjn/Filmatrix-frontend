import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import  { toast } from 'react-toastify';

export const Editanc = () => {

  let id=localStorage.getItem('id')
  let {companyId} = useParams()
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)

  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`https://filmatrix.onrender.com/hiringteam/viewancd/${companyId}`)
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

    toast.success('Announcement updated')
    
    let response= axios.put(`https://filmatrix.onrender.com/filmcompany/editanc/${companyId}`,formData,{
      headers:{
        'content-Type':'multiport/form-data'
      }
    })
    
    console.log(response);
    setData('')
     
    
  }
  return (
    <div className='addanc flex flex-wrap flex-col'>
    <div className='text-center pt-20 font-bold text-3xl pb-8 text-white '>
     Edit Announcement
    </div>
    <form onSubmit={handleSubmit}>
    <div className='m-auto w-fit '>
     <div className='flex  flex-row pb-3 flex-wrap justify-center'>
       
       <input onChange={handleChange} name='Filmname' type="text" placeholder={userData.Filmname} className='w-[80%] bg-transparent  placeholder:text-white border-2 rounded placeholder:text-[20px] border-white text-white h-9 placeholder:text-center' />
     </div>
     <div className='flex  flex-row  flex-wrap pb-3 justify-center'>
       
       <input onChange={handleChange} name='Director' type="text" placeholder={userData.Director} className='w-[80%] bg-transparent  placeholder:text-white border-2 rounded placeholder:text-[20px] border-white text-white h-9 placeholder:text-center' />
     </div>
     
     <div className='flex flex-row flex-wrap justify-center pb-3'>

       <textarea onChange={handleChange} name="description" id="" cols="30" rows="10" placeholder={userData.description} className='w-[80%] bg-transparent placeholder:text-white placeholder:text-[25px]  border-2 rounded border-white text-white placeholder:text-center'></textarea>
     </div>
     <div className='flex flex-row pb-3 flex-wrap w-[300px] gap-3 justify-center'>
     <label htmlFor="" className='text-white text-lg'>Image: </label>
     <a href={`https://filmatrix.onrender.com/uploads/${userData.Image}`} download>
                                        <img src={`https://filmatrix.onrender.com/uploads/${userData.Image}`} alt=""  className='w-10'/>
                                    </a>
     <input onChange={handlefile} name='Image'  class="block w-[40%]  text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>
     
     </div>
     <button type='submit' className=' bg-black rounded p-2 ml-32 mt-1 text-green-600'>Submit</button>
    </div>
    </form>
</div>
  )
}
