import React from 'react'
import img from '../Images/anc.jpg'
import { Link } from 'react-router-dom'
export const Viewannouncement = () => {
  return (
    <div className='vanc'>
        <div className='text-white pt-36 text-center mb-3 text-[25px]'> ANNOUNCEMENTS</div>
    
    <form class="max-w-lg mx-auto h-5">
        <div class="flex">
            {/* <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
            <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-950/50 dark:hover:bg-gray-700 dark:focus:ring-gray-700/50 dark:text-white " type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg></button>
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-950/50">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                </li>
                </ul>
            </div> */}
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
                <tr class=" dark:border-gray-700 bg-gray-950/40 hover:bg-slate-800/50">
                    <td scope="row" class="px-6 py-4">
                        1
                    </td>
                    <td >
                        Thug Life
                    </td>
                    <td >
                        qwertyuiop
                    </td>
                    <td className='flex flex-wrap justify-center pt-3'>
                        <img src={ img } alt="" className='w-10 h-10 '/>
                    </td>
                    <td class="px-6 py-4">
                    23-01-2024
                    </td>
                    <td>
                       <Link to='/filmcompany/editanc'> <button className='text-yellow-200'>Edit</button></Link>
                    </td>
                    <td>
                        <button className='text-black'>Delete</button>
                    </td>
                </tr>
    
    
    
                <tr class=" dark:border-gray-700 bg-slate-950/40  hover:bg-slate-800/50">
                    <td scope="row" class="px-6 py-4">
                        2
                    </td>
                    <td class="px-6 py-4">
                        KH270
                    </td>
                    <td class="px-6 py-4">
                        asdfghjkl
                    </td>
                    <td className='flex flex-wrap justify-center pt-3'>
                        <img src={ img } alt="" className='w-10 h-10 '/>
                    </td>
                    <td class="px-6 py-4">
                    23-01-2024
                    </td>
                    <td>
                       <Link to='/filmcompany/editanc'> <button className='text-yellow-200'>Edit</button></Link>
                    </td>
                    <td>
                        <button className='text-black'>Delete</button>
                    </td>
                    
                </tr>
                
            </tbody>
        </table>
    </div>
    </div>
  )
}
