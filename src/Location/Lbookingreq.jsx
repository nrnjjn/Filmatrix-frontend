import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export const Lbookingreq = () => {

const [data,setdata]=useState([''])
const [data2,setdata2]=useState([''])


const [refresh,setrefresh]=useState(false)
let id=localStorage.getItem('id')


let handleChange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }

let handleSubmit=async(status,rid)=>{
    setrefresh(!refresh)
    let response=await axios.put(`http://localhost:4000/locationowner/managebookings/${rid}`,{bookingStatus:status})
    console.log(response)
    setdata('')
}

useEffect(()=>{
    let fetchdata=async()=>{
       let response=await axios.get(`http://localhost:4000/locationowner/viewlocreq/${id}`)
       console.log(response.data);
       setdata2(response.data)
    }
    fetchdata()
 },[refresh])


  return (
    <div className='lprof'>
        <div className='text-white pt-36 text-center mb-3 text-[25px]'>LOCATION BOOKING</div>
    
        <form class="max-w-lg mx-auto pb-10">
    <div class="flex items-center">
       <div className=''>
  <select name="" id="" className='h-[41px] inline-flex items-center py-2.5 text-[100%] px-4  text-sm font-medium text-center text-gray-900 bg-gray-700 border border-gray-300 rounded-s-lg  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700'>
    <option value="" >All</option>
    <option value="">Accepted</option>
    <option value="">Rejected</option>
  </select> 
  </div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-white bg-slate-950/50 rounded-e-lg  border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500  dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white" placeholder="Search Film company"  required />
            <button  type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-300 rounded-e-lg border border-gray-700 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-slate-500 dark:focus:ring-gray-700">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
    
    <div class=" overflow-x-auto shadow-md sm:rounded-lg  ">
        <table class="w-full text-sm text-center rtl:text-right  text-gray-500 dark:text-gray-400 dark:bg-gray-950/50">
            <thead class="text-xs text-white uppercase  dark:bg-gray-950/50 dark:text-gray-400">
                <tr >
                    <th scope="col" class="px-3 py-3">
                        SLNO
                    </th>
                    
                    <th>
                        Location
                    </th>
                    <th scope="col" class="px-1 py-3">
                        HIRING TEAM NAME
                    </th>
                    <th scope="col" class="px-1 py-3">
                        EMAIL
                    </th>
                    <th>PHONE NO</th>
                    <th scope="col" class="px-1 py-3">
                        From DATE
                    </th>
                    <th >No of days</th>
                    <th>
                        Status
                    </th>
                    <th>Payment</th>
                    <th>
                    </th>
                    <th>
    
                    </th>
                </tr>
            </thead>
            <tbody>
                {data2.map((item,index)=>(
                <tr class=" dark:border-gray-700 text-white hover:bg-slate-800/50 ">
                    <td scope="row" class="px-1 py-4">
                        {index+1}
                    </td >
                    
                    <td>{item.loc?.locationName}</td>
                    <td >
                        {item.hiring?.companyName}
                    </td>
                    <td >
                        {item.hiring?.Email}
                    </td>
                    <td>
                        {item.hiring?.Phone}
                    </td>
                    <td >
                    { new Date(item.fcreq?.Date).toLocaleDateString()}
                    </td>
                    <td >
                        {item.fcreq?.Noofdays}
                    </td>
                    <td>
                        {item.req?.bookingStatus}
                    </td>
                    <td>
                        <Link to='/location/lvpay'>
                        <button className='text-yellow-200'>More</button>
                        </Link>
                    </td>
                    <td >
                        <button onClick={()=>{handleSubmit('Accepted',item.req?._id)}} className='text-green-500  rounded w-14 h-6 text-center'>Accept</button>
                    </td>
                    <td>
                        <button  onClick={()=>{handleSubmit('Rejected',item.req?._id)}} className='text-red-600  rounded w-14 h-6 text-center'>Reject</button>
                    </td>
                </tr> 
            ))}        
            </tbody>
        </table>
    </div>
    </div>
  )
}
