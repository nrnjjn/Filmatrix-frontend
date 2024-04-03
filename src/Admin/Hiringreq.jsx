import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Hiringreq = () => {
    
const [data,setdata]=useState([''])
const [refresh,setrefresh]=useState(false)

let handleSubmit=async(statuss,id)=>{
    setrefresh(!refresh)
    let response=await axios.put(`http://localhost:4000/admin/acceptusers/${id}`,{...data,Status:statuss})
    console.log(response)
    setdata('')
}

useEffect(()=>{
    let fetchdata=async()=>{
       let response=await axios.get('http://localhost:4000/admin/viewhiringteam')
       console.log(response.data);
       setdata(response.data)
    }
    fetchdata()
 },[refresh])
 
  return (
    <div className='hcreq'>
    <div className='text-white pt-40 text-center mb-3 text-2xl font-bold'> HIRING TEAM</div>
    
    <form class="max-w-lg mx-auto ">
    <div class="flex items-center">
       <div className=''>

  <select name="" id="" className='h-[41px] inline-flex items-center py-2.5 text-[100%] px-4  text-sm font-medium text-center text-gray-900 bg-gray-700 border border-gray-300 rounded-s-lg  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700'>
    <option value="" >All</option>
    <option value="">Accepted</option>
    <option value="">Rejected</option>
  </select> 
  {/* {drop &&
        <div id="dropdown" class="z-10 absolute   bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-[10.5%] dark:bg-gray-700 ">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" onClick={dropdownClose} class="inline-flex  px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Accepted</button>
            </li>
            <li>
                <button type="button" onClick={dropdownClose} class="inline-flex  px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rejected</button>
            </li>
            <li>
                <button type="button" onClick={dropdownClose} class="inline-flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All</button>
            </li>
            </ul>
        </div>
} */}
</div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-white bg-slate-950/90 rounded-e-lg  border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500  dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white" placeholder="Search Film company"  required />
            <button  type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-300 rounded-e-lg border border-gray-700 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-slate-500 dark:focus:ring-gray-700">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
<div class=" pt-10 overflow-x-auto shadow-md sm:rounded-lg  ">
    <table class="w-full text-sm text-center rtl:text-right  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase  dark:bg-gray-950/90 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SLNO
                </th>
                <th scope="col" class="px-6 py-3">
                    HIRING NAME
                </th>
                <th >
                    EMAIL
                </th>
                <th>
                    PHONE NO
                </th>
                <th scope="col" class="px-6 py-3">
                    ADDRESS
                </th>
                <th>LISCENCE NO</th>
                <th>LISCENCE</th>
                <th scope="col" class="px-6 py-3">
                    DATE
                </th>
                <th>STATUS</th>
                <th>
                </th>
                <th>
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,index)=>(

            
            <tr class=" dark:border-gray-700 bg-gray-950/40 text-white hover:bg-slate-800/50">
                <td scope="row" class="px-6 py-4">
                    {index+1}
                </td>
                <td class="px-6 py-4">
                    {item.companyName}
                </td>
                <td class="px-6 py-4">
                    {item.Email}
                </td>
                <td>{item.Phone}</td>
                <td>{item.Address}</td>
                <td>{item.liscenceNo}</td>
                <td><a href={`http://localhost:4000/uploads/${item.Lisence}`} download>img</a></td>
               
                <td>{item.Status}</td>
                <td class="px-6 py-4 text-right">
                    <button onClick={()=>{handleSubmit('Accepted',item._id)}} className='text-green-500 
                     rounded w-14 h-6 text-center'>Accept</button>
                </td>
                <td>
                    <button  onClick={()=>{handleSubmit('Rejected',item._id)}} className='text-red-500 rounded w-14 h-6 text-center'>Reject</button>
                </td>
            </tr>
))}
    
        </tbody>
    </table>
</div>
</div>

  )
}
