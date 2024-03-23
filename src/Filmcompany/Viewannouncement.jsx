import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Viewannouncement = () => {
    let id=localStorage.getItem('id')
    const [data,setdata]=useState([''])

    useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/filmcompany/viewanc/${id}`)
          console.log(response.data);
          if(response.data){
              setdata(response.data)
            }
        }
        fetchdata()
      },[])

  return (
    <div className='vanc'>
        <div className='text-white pt-36 text-center mb-3 text-[25px]'> ANNOUNCEMENTS</div>
    
    <form class="max-w-lg mx-auto h-5">
        <div class="flex">
            <div class="relative ps-32">
                <input type="search" id="search-dropdown" class="block p-2.5 w-64 rounded-s-lg z-20 text-sm text-white bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950/50 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:border-blue-500" placeholder="Search Here..." required />
                <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-950/50 rounded-e-lg border border-blue-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-950/50 dark:hover:bg-gray-700 dark:focus:ring-blue-800/50">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </div>
    </form>
    
    <div class=" mt-5 overflow-x-auto shadow-md sm:rounded-lg  ">
        <table class="w-full text-sm text-center rtl:text-right  text-white">
            <thead class="text-xs uppercase  dark:bg-gray-950/90 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        SLNO
                    </th>
                    <th >
                        FILM NAME
                    </th>
                    <th >
                        DIRECTOR
                    </th>
                    <th >
                        DESCRIPTION
                    </th>
                    <th >
                        IMAGE
                    </th>
                    <th >
                        DATE
                    </th>
                    <th></th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
            {data.map((item,index)=>(

                <tr class=" dark:border-gray-700 bg-gray-950/40 hover:bg-slate-800/50">
                    <td scope="row" class="px-6 py-4">
                        {index}
                    </td>
                    <td >
                        {item.Filmname}
                    </td>
                    <td>
                        {item.Director}
                    </td>
                    <td >
                        {item.description}
                    </td>
                    <td className='flex flex-wrap justify-center pt-3'>
                        <img  alt="" className='w-10 h-10 ' src={`http://localhost:4000/uploads/${item.Image}`} />
                    </td>
                    <td class="px-6 py-4">
                    {item.Date}
                    </td>
                    <td>
                       <Link to='/filmcompany/editanc'> <button className='text-green-500'>Edit</button></Link>
                    </td>
                    <td>
                        <button className='text-red-500'>Delete</button>
                    </td>
                </tr>
                 ))}  
            </tbody>
        </table>
    </div>
    </div>
  )
}
