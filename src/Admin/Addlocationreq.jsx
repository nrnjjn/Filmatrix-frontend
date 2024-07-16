import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Addlocationnreq = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://filmatrix.onrender.com/admin/viewlocationreq');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const filteredData = data.filter((item) => {
        const ownerName = item.ownername ? item.ownername.toLowerCase() : '';
        const locationName = item.req && item.req.locationName ? item.req.locationName.toLowerCase() : '';
        const status = item.req && item.req.Status ? item.req.Status.toLowerCase() : '';
        return (
            (statusFilter === 'All' || status.includes(statusFilter.toLowerCase())) &&
            (ownerName.includes(search.toLowerCase()) || locationName.includes(search.toLowerCase()))
        );
    });

    return (
        <div className='fcreq'>
            <div className='text-white pt-40 text-center mb-5 font-bold text-2xl'>LOCATION</div>

            <form className="max-w-lg mx-auto pb-10">
                <div className="flex items-center">
                    <div className=''>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className='h-[41px] inline-flex items-center py-2.5 text-[100%] px-4 text-sm font-medium text-center text-gray-900 bg-gray-700 border border-gray-300 rounded-s-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700'
                        >
                            <option value="All">All</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <div className="relative w-full">
                        <input
                            type="search"
                            id="search-dropdown"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="block p-2.5 w-full z-20 text-sm text-white bg-slate-950/50 rounded-e-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                            placeholder="Search Film company"
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-300 rounded-e-lg border border-gray-700 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-slate-500 dark:focus:ring-gray-700"
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>

            <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase dark:bg-gray-950/90 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">SLNO</th>
                            <th>LOCATION OWNER</th>
                            <th>LOCATION</th>
                            <th>DETAILS</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} className="dark:border-gray-700 text-white bg-gray-950/40 hover:bg-slate-800/50">
                                <td scope="row" className="py-4">{index + 1}</td>
                                <td className='px-2'>{item.ownername}</td>
                                <td>{item.req?.locationName}</td>
                                <td><Link to={`/admin/locd/${item.req?._id}`}><button className='text-yellow-400'>More</button></Link></td>
                                <td>{item.req?.Status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
