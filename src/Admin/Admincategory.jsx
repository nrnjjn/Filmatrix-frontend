import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export const Admincategory = () => {
  const [data,setData]=useState('')
  const [data1,setData1]=useState([''])
  const [view,setView]=useState([])
  const [refresh,setRefresh]=useState(true)
 




  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit= async (event)=>{
    event.preventDefault()
    let response=await axios.post(`http://localhost:4000/admin/createcategory/`,data)
       console.log(response);
       setRefresh(!refresh)
       setData('')
  }

  
  let handledelete= async (id)=>{
    let response=await axios.delete(`http://localhost:4000/admin/viewcategory/${id}`)
       console.log(response);
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
    <div className='addanc flex flex-wrap flex-col'>
         <div className='text-center pt-36 font-bold text-3xl text-white/70'>
          category
         </div>
         <form onSubmit={handleSubmit} className='pt-3'>
         <div className='m-auto w-fit '>
     
          <div className='flex flex-row flex-wrap'>
   
            <input value={data.category} type='text' onChange={handleChange}  name="category" placeholder='Category' className='bg-transparent text-white placeholder:text-white/70 border-2 rounded placeholder:text-center w-32'></input>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
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
                <td >
                    <button   className='text-green-500  rounded w-14 h-6 text-center'>Edit</button>
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