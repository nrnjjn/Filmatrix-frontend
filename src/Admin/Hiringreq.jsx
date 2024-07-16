import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Hiringreq = () => {
    
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
    };

    let handleSubmit = async (statuss, id) => {
        try {
            let response = await axios.put(`https://filmatrix.onrender.com/admin/acceptusers/${id}`, {...data, Status: statuss});
            window.location.reload();
            console.log(response);
        } catch (error) {
            console.error('Error submitting:', error);
        }
    }

    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await axios.get('https://filmatrix.onrender.com/admin/viewhiringteam');
                setData(response.data);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const filteredData = data.filter((item) => {
        const companyName = String(item.companyName).toLowerCase();
        const email = String(item.Email).toLowerCase();
        const phone = String(item.Phone)
        const address = String(item.Address).toLowerCase();
        const liscenceno = String(item.liscenceNo)
        const status = String(item.Status).toLowerCase();
        return (
            (statusFilter === 'All' || status === statusFilter.toLowerCase()) &&
            (companyName.includes(search.toLowerCase()) || address.includes(search.toLowerCase()) || liscenceno.includes(String(search)) || email.includes(search.toLowerCase()) || status.includes(search.toLowerCase()) || phone.includes(String(search)))
        );
    });

    return (
        <div className='hcreq'>
            <div className='text-white pt-40 text-center mb-3 text-2xl font-bold'> HIRING TEAM</div>

            <form className="max-w-lg mx-auto pb-10">
                <div className="flex items-center">
                    <div className="">
                        <select
                            value={statusFilter}
                            onChange={handleStatusChange}
                            className="h-[41px] inline-flex items-center py-2.5 text-[100%] px-4 text-sm font-medium text-center text-gray-900 bg-gray-700 border border-gray-300 rounded-s-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700"
                        >
                            <option value="All">All</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <div className="relative w-full">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-white bg-slate-950/50 rounded-e-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                            placeholder="Search Hiring team"
                            required
                        />
                    </div>
                </div>
            </form>

            <div className="pt-3 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase dark:bg-gray-950/90 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                SLNO
                            </th>
                            <th scope="col" className="px-6 py-3">
                                HIRING NAME
                            </th>
                            <th >
                                EMAIL
                            </th>
                            <th>
                                PHONE NO
                            </th>
                            <th scope="col" className="w-8 pt-1 pb-1">
                                ADDRESS
                            </th>
                            <th>LISCENCE NO</th>
                            <th>LISCENCE</th>
                            <th>STATUS</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} className="dark:border-gray-700 text-white bg-gray-950/40 hover:bg-slate-800/50">
                                <td scope="row" className="px-6 py-4">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4">
                                    {item.companyName}
                                </td>
                                <td className="px-6 py-4">
                                    {item.Email}
                                </td>
                                <td className="px-6 py-4">{item.Phone}</td>
                                <td className='w-8 pt-1 pb-1'>{item.Address}</td>
                                <td className="px-6 py-4">{item.liscenceNo}</td>
                                <td><a href={`https://filmatrix.onrender.com/uploads/${item.Liscence}`} download>
                                    <img src={`https://filmatrix.onrender.com/uploads/${item.Liscence}`}className='w-10 m-auto' alt="" />
                                    </a></td>
                                <td className="px-6 py-4">{item.Status}</td>
                                {item.Status !== 'Accepted' && (
                                    <>
                                        <td className="px-6 py-4 text-right">
                                            <button onClick={() => { handleSubmit('Accepted', item._id) }} className='text-green-500 rounded w-14 h-6 text-center'>Accept</button>
                                        </td>
                                        <td>
                                            <button onClick={() => { handleSubmit('Rejected', item._id) }} className='text-red-500 rounded w-14 h-6 text-center'>Reject</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
