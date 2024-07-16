import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Lviewlc = () => {
    const id = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`https://filmatrix.onrender.com/locationowner/deletelocation/${id}`);
            console.log(response);
            // Refresh data after deletion
            fetchData();
        } catch (error) {
            console.error('Error deleting location:', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://filmatrix.onrender.com/locationowner/viewloc/${id}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = data.filter(item => {
        const locationName = item.locationName.toLowerCase();
        const status = item.Status.toLowerCase();
        const searchLowerCase = searchQuery.toLowerCase();
        const statusLowerCase = statusFilter.toLowerCase();
        
        // Filter based on search query and status filter
        return locationName.includes(searchLowerCase) && (statusLowerCase === '' || status.includes(statusLowerCase));
    });

    return (
        <div className='lprof'>
            <div className='text-white pt-36 text-center mb-5 text-[30px] '> VIEW LOCATION</div>
    
            <form className="max-w-lg mx-auto pb-10">
                <div className="flex items-center ">
                    
                    <select
                    id="status-dropdown"
                    className="block p-2.5 w-36 text-sm text-white bg-slate-950/50 rounded-s-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    required
                    >
                        <option value="">All Status</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-white bg-slate-950/50 rounded-e-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                        placeholder="Search Location Name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        required
                    />
                </div>
            </form>

            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 dark:bg-gray-950/50">
                    <thead className="text-xs text-white uppercase dark:bg-gray-950/50 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-3">SLNO</th>
                            <th scope="col" className="px-1 py-3">LOCATION NAME</th>
                            <th>PRICE PER DAY</th>
                            <th scope="col" className="px-1 py-3">DESCRIPTION</th>
                            <th scope="col" className="px-1 py-3">STATUS</th>
                            <th>IMAGE</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr className="dark:border-gray-700 text-white hover:bg-slate-800/50" key={index}>
                                <td scope="row" className="px-1 py-4">{index + 1}</td>
                                <td>{item.locationName}</td>
                                <td>{item.Priceperday}</td>
                                <td>{item.Description}</td>
                                <td>{item.Status}</td>
                                <td className='flex flex-wrap justify-center'>
                                    <img src={`https://filmatrix.onrender.com/uploads/${item.Image}`} alt="" className='h-10 w-10'/>
                                </td>
                                <td>
                                    <Link to={`/location/editloc/${item._id}`}>
                                        <button className='text-green-500 rounded w-14 h-6 text-center'>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className='text-red-600 rounded w-14 h-6 text-center'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
