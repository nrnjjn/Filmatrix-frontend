import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Lvpay = () => {
    // let id=localStorage.getItem('id')
    let {id}=useParams()
    const [data,setData]=useState([''])
    console.log(id)
    
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/locationowner/viewpayment/${id}`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    },[])

  return (
    <div className='lbkst'>
        <div className='text-white pt-36 text-center mb-3 text-[40px]'>VIEW PAYMENT</div>
    
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
        <table class="w-full text-sm text-center rtl:text-right  text-white dark:text-white">
            <thead class="text-xs text-white uppercase  dark:bg-gray-950/50 dark:text-white">
                <tr >
                    <th scope="col" class="px-6 py-3">
                        SLNO
                    </th>
                    <th scope="col" class="px-6 py-3">
                        FILM NAME
                    </th>
                    <th scope="col" class="px-6 py-3">
                        HIRING NAME
                    </th>
                    <th scope="col" class="px-6 py-3">
                        AMOUNT
                    </th>
                    {/* <th scope="col" class="px-6 py-3">
                        DATE
                    </th> */}
                    <th scope="col" class="px-6 py-3">STATUS</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>(
                <tr class=" dark:border-gray-700 text-white hover:bg-slate-800/50">
                    <td scope="row" class="px-6 py-4">
                        {index+1}
                    </td>
                    <td >
                        {item?.anc?.Filmname}
                    </td>
                    <td >
                        {item?.hiring?.companyName}
                    </td>
                    <td>
                        {item?.req?.Amount}
                    </td>
                    {/* <td >
                    { new Date(item.req?.Date).toLocaleDateString()}
                    </td> */}
                    <td>
                        {item?.booking?.paymentStatus}
                    </td>
                    
                </tr>
    
))}
    
                
                
            </tbody>
        </table>
    </div>
    </div>
  )
}
