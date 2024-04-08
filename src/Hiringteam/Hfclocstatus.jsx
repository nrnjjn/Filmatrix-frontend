import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

export const Hfclocstatus = () => {
    let id=localStorage.getItem('id')
    const [data,setData]=useState([''])
    const [data1,setData1]=useState([''])
    const navigate=useNavigate()

    let handleSubmit=async (event)=>{
        event.preventDefault()
        setData1(data)
        console.log(data);
        navigate('/hiring/hlcbookst')
        let response=await axios.post(`http://localhost:4000/hiringteam/locationbooking`,data)
        console.log(response);
      }

    // let {id}=useParams()
    console.log(id)
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/hiringteam/locreqst/${id}`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    },[])
  return (
    <div className='hvloc'>
        <div className='text-white pt-36 text-center mb-3 text-[25px]'>REQUEST STATUS</div>
    
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
        <table class="w-full text-sm text-center rtl:text-right  text-white dark:text-white">
            <thead class="text-xs text-white uppercase  dark:bg-gray-950/90 dark:text-white">
                <tr >
                    <th scope="col" class="px-6 py-3">
                        SLNO
                    </th>
                    <th scope="col" class="px-6 py-3">
                        FILM NAME
                    </th>
                    <th scope="col" class="px-6 py-3">
                        PLACE
                    </th>
                    <th scope="col" class="px-6 py-3">
                        STATUS
                    </th>
                    <th scope="col" class="px-6 py-3">
                        DATE
                    </th>
                    <th>

                    </th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>(
                <tr class=" dark:border-gray-700 bg-slate-950/40 text-white hover:bg-slate-800/50">
                    <td scope="row" class="px-6 py-4">
                        {index+1}
                    </td>
                    <td >
                        {item.film?.Filmname}
                    </td>
                    <td >
                        {item.loc?.locationName}
                    </td>
                    <td>
                        {item.req?.Status}
                    </td>

                    <td>
                    { new Date(item.req?.Date).toLocaleDateString()}
                    </td>

                    <td>{item.req?.Status === 'Accepted' && (
                    <Link to={`/hiring/hlcbookst`}>
                    <button className='text-yellow-200 rounded w-14 h-6 text-center'>Book</button>
                    </Link>
                    )}
                    </td>
                    
                </tr>
                  ))} 
            </tbody>
        </table>
    </div>
    </div>
  )
}
