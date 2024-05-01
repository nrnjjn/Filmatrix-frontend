import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import  { toast } from 'react-toastify';

export const Admincategory = () => {
  const [data,setData]=useState('')
  const [data1,setData1]=useState([''])
  const [view,setView]=useState([])
  const [refresh,setRefresh]=useState(true)
 
  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }

  let handleSubmit= async (event)=>{
    event.preventDefault()
    let formData = new FormData();
    formData.append('name', data.category);
    formData.append('Image',data.Image);
    setData(data)
    console.log(data);
    console.log(formData);
    let response=await axios.post(`http://localhost:4000/admin/createcategory/`,formData,{
      headers: {
        'Content-Type': 'multipart/form-data'  // Set the content type for FormData
      }
    })
       console.log(response.data);
       toast.success('Category added')
       setRefresh(!refresh)
       setData('')
  }

  
  let handledelete= async (id)=>{
    let response=await axios.delete(`http://localhost:4000/admin/viewcategory/${id}`)
       console.log(response);
       toast.success('Category deleted')
       setRefresh(!refresh)
  }


useEffect(()=>{
  let fetchdata=async ()=>{
    let response=await axios.get(`http://localhost:4000/admin/viewcategory/`)
    setView(response.data)
  }
  fetchdata()
},[refresh])

  return (
    <div className='addanc'>
         <div className='text-center pt-36 font-bold text-3xl text-white/70'>
          category
         </div>
         <form onSubmit={handleSubmit} className='pt-3'>
         <div className='m-auto w-fit '>
     
          <div className='flex flex-row flex-wrap justify-center'>
   
            <input value={data.category ? data.category: ''} type='text' onChange={handleChange}  name="category" placeholder='Category' className='bg-transparent text-white placeholder:text-white/70 border-2 rounded placeholder:text-center w-56 h-8'></input>
          </div>
          <div className='flex flex-wrap justify-between w-[300px] text-center mt-4 py-3 '>      
            <label class="block h-10 mb-2  text-gray-900 dark:text-white" for="file_input">Work photo:</label>
            <input onChange={handlefile}  name='Image' class="block w-[40%] h-10 text-sm text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2" id="file_input" type="file"/>
                </div>
          <button type='submit' className='text-white bg-black rounded p-2 ms-32 mt-3'>Submit</button>
         </div>
         </form>

{/* <div className="max-w-[500px] overflow-y-scroll m-auto"> */}


<div class="  overflow-x-auto shadow-md sm:rounded-lg  mt-3">
    <table class="w-full text-sm text-center rtl:text-right  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase  dark:bg-gray-950/90 dark:text-gray-400 ">
            <tr>
                <th >
                    SLNO
                </th>
                <th scope="col" class=" py-3">
                    CATEGORY
                </th>
                <th>
                  IMAGE
                </th>
                <th >
                    
                </th>
                <th >
                    
                </th>
             
            </tr>
        </thead>
        <tbody>
       { view && view.map((i,index)=>{
            return(
            <tr class=" dark:border-gray-700 text-white bg-gray-950/40 hover:bg-slate-800/50">
                <td >
                    {index+1}
                </td>
                <td class="px-6 py-4">
                {i.name}                </td>
                <td>
                 <a href={`http://localhost:4000/uploads/${i.Image}`}> <img className='w-14 m-auto' src={`http://localhost:4000/uploads/${i.Image}`} alt="" /></a>
                </td>
                <td >
                   <Link to={`/admin/editcategory/${i._id}`}>
                    <button   className='text-green-500  rounded w-14 h-6 text-center'>Edit</button>
                    </Link>
                </td>
                <td>
                    <button onClick={()=>handledelete(i._id)} className='text-red-600  rounded w-14 h-6 text-center'>Delete</button>
                </td>
            </tr>
            )
})}


            
            
        </tbody>
    </table>
</div>
         {/* {
           view && view.map((i)=>{
                return(
                    <>
                    
                     <p className='px-4 py-3 bg-slate-50'>{i.name}</p>
                     <span className='hover:underline text-red-400' onClick={()=>handledelete(i._id)}>delete</span>
                    </>
                )
            })
         } */}
</div>

    // </div>
  )
}

export default Admincategory