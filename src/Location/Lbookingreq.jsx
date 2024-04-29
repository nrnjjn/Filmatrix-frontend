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
            <div className='text-white pt-36 text-center mb-5 text-[30px]'>LOCATION BOOKING</div>

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
                                    <Link to={`/location/lvpay/${item.req?._id}`}>
                                        <button className='text-yellow-200'>More</button>
                                    </Link>
                                </td>
                                <td >
                                    {item.req?.bookingStatus !== 'Accepted' && (
                                        <button onClick={()=>{handleSubmit('Accepted',item.req?._id)}} className='text-green-500  rounded w-14 h-6 text-center'>Accept</button>
                                    )}
                                </td>
                                <td>
                                    {item.req?.bookingStatus !== 'Accepted' && (
                                        <button  onClick={()=>{handleSubmit('Rejected',item.req?._id)}} className='text-red-600  rounded w-14 h-6 text-center'>Reject</button>
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
