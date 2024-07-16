import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Ujobreqst = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    useEffect(() => {
        const fetchdata = async () => {
            const id = localStorage.getItem('id');
            const response = await axios.get(`https://filmatrix.onrender.com/seekers/jobreqst/${id}`);
            setData(response.data);
        };
        fetchdata();
    }, []);

    const filteredData = data.filter(item => {
        const filmName = String(item?.film?.Filmname).toLowerCase();
        const job = String(item?.job?.Job).toLowerCase();
        const status = String(item?.req?.Status).toLowerCase();
        return (
            (statusFilter === 'All' || status.includes(statusFilter.toLowerCase())) &&
            (filmName.includes(search.toLowerCase()) || 
            job.includes(search.toLowerCase()) || 
            status.includes(search.toLowerCase()))
        );
    });

    const handleStatusChange = e => {
        setStatusFilter(e.target.value);
    };

    return (
        <div className='ujob'>
            <div className='text-white pt-36 text-center mb-3 text-[25px]'>JOB REQUEST STATUS</div>

            <form className="max-w-lg mx-auto pb-10">
                <div className="flex items-center">
                    <div className=''>
                        <select
                            value={statusFilter}
                            onChange={handleStatusChange}
                            className='h-[41px] inline-flex items-center py-2.5 text-[100%] px-4  text-sm font-medium text-center text-gray-900 bg-gray-700 border border-gray-300 rounded-s-lg  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700'
                        >
                            <option value="All">All</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <div className="relative w-full">
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-white bg-slate-950/50 rounded-e-lg  border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500  dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                            placeholder="Search Film company"
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-300 rounded-e-lg border border-gray-700 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-slate-500 dark:focus:ring-gray-700"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right  text-gray-500 dark:text-gray-400 dark:bg-gray-950/50">
                    <thead className="text-xs text-white uppercase  dark:bg-gray-950/50 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-3">
                                SLNO
                            </th>
                            <th scope="col" className="px-1 py-3">
                                FILM NAME
                            </th>
                            <th scope="col" className="px-1 py-3">
                                JOB
                            </th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr
                                key={index}
                                className=" dark:border-gray-700 text-white hover:bg-slate-800/50"
                            >
                                <td scope="row" className="px-1 py-4">
                                    {index + 1}
                                </td>
                                <td>{item.film?.Filmname}</td>
                                <td>{item.job?.Job}</td>
                                <td>{item.req?.Status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
