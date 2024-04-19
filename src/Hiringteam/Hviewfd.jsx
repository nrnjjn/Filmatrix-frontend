import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Hviewfd = () => {
    let id2=localStorage.getItem('id')
    const [data,setData]=useState([''])
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/hiringteam/viewhreq/${id2}`)
            // let response2=await axios.get(`http://localhost:4000/hiringteam/viewfilmcompany/${id}`)
            console.log(response.data)
            if(response.data){
                setData(response.data)
                // setData2(response2.data)
            }
        }
        fetchdata()
    },[])
  return (
    <div className='lcfeed text-white'>
    <div className='text-white pt-36 text-center mb-3 text-[30px]'>FEEDBACK</div>
    
    {/* <form class="max-w-72 mx-auto h-5">
        <div class="flex">
         
            <div class="relative w-full">
                <input type="search" id="search-dropdown" class="rounded-s-md block p-2.5 w-full z-20 text-sm text-white bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950/50 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:border-blue-500" placeholder="Search Here..." required />
                <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-950/50 rounded-e-lg border border-blue-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-950/50 dark:hover:bg-gray-700 dark:focus:ring-blue-800/50">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </div>
    </form>
     */}
    <div class=" pt-10 overflow-x-auto shadow-md sm:rounded-lg  ">
        <table class="w-full text-sm text-center rtl:text-right   ">
            <thead class="text-xs  uppercase  dark:bg-gray-950/90 ">
                <tr >
                    <th scope="col" class="px-6 py-3">
                        SLNO
                    </th>
                    <th scope="col" class="px-6 py-3">
                        FILM NAME
                    </th>
                    <th scope="col" class="px-6 py-3">
                        FILM COMPANY
                    </th>
                    <th scope="col" class="px-6 py-3">
                    FEEDBACK
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>(
                <tr class=" dark:border-gray-700  bg-slate-950/40 hover:bg-slate-800/50">
                    <td scope="row" class="px-6 py-4">
                        {index+1}
                    </td>
                    <td >
                        {item.film?.Filmname}
                    </td>
                    <td >
                    {item.companyName}                    </td>
                    <td >
                    {item.req?.Feedback}
                    </td>
                    
                </tr>
    
    
                ))}
                
                
            </tbody>
        </table>
    </div>
    </div>
  )
}
