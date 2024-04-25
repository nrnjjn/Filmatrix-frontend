import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Fcviewhcreq = () => {
    let id = localStorage.getItem('id');

    const [data, setdata] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:4000/filmcompany/viewhiringreq/${id}`);
            setdata(response.data);
        };
        fetchdata();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleStatusChange = (event) => {
        setFilterStatus(event.target.value);
    };

    const filteredData = data.filter((item) => {
        const lowerSearchQuery = searchQuery.toLowerCase();
        const lowerFilmName = item?.anc?.Filmname.toLowerCase();
        const lowerCompanyName = item?.hiring?.companyName.toLowerCase();
        const lowerStatus = item?.req?.Status.toLowerCase();

        return (
            (lowerFilmName.includes(lowerSearchQuery) || lowerCompanyName.includes(lowerSearchQuery)) &&
            (filterStatus === 'All' || lowerStatus === filterStatus.toLowerCase())
        );
    });

    return (
        <div className='fcviewhcreq text-white'>
            <div className='text-white pt-40 text-center mb-5 text-[30px]'>HIRING TEAM REQUEST</div>
            <div className='flex flex-wrap w-80 m-auto'>
            <div className='w-24  pb-10'>
                <select
                    value={filterStatus}
                    onChange={handleStatusChange}
                    className='block w-full h-8 px-4 border border-gray-300 rounded-s bg-white/60 text-black   text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                >
                    <option value='All'>All</option>
                    <option value='Accepted'>Accepted</option>
                    <option value='Rejected'>Rejected</option>
                </select>
            </div>
            {/* Search bar */}
            <div className='w-56 mx-auto pb-5 '>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='block w-full h-8 px-4 border border-gray-300 rounded-e bg-transparent text-sm leading-tight  focus:outline-none focus:bg-white focus:border-gray-500'
                    placeholder='Search Film Name or Hiring Team Name...'
                />
            </div>
            </div>
            {/* Filter by status dropdown */}
           

            <div className='overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 dark:bg-gray-950/50'>
                    <thead className='text-xs text-white uppercase dark:bg-gray-950/50 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className='px-3 py-3'>
                                SLNO
                            </th>
                            <th>FILM NAME</th>
                            <th>HIRING TEAM NAME</th>
                            <th>DETAILS</th>
                            <th>STATUS</th>
                            <th>FEEDBACK</th>
                            <th scope='col' className='px-1 py-3'>
                                DATE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} className='dark:border-gray-700 text-white hover:bg-slate-800/50'>
                                <td scope='row' className='px-1 py-4'>
                                    {index + 1}
                                </td>
                                <td>{item?.anc?.Filmname}</td>
                                <td>{item?.hiring?.companyName}</td>
                                <td>
                                    <Link to={`/filmcompany/hiringreqdetail/${item?.req?._id}`}>
                                        <button className='text-yellow-200  rounded w-14 h-6 text-center'>More</button>
                                    </Link>
                                </td>
                                <td>{item?.req?.Status}</td>
                                <td>
                                    {item?.req?.Status === 'Accepted' && (
                                        <Link to={`/filmcompany/hiringfd/${item.req?._id}`}>
                                            <button className='text-yellow-200'>Add</button>
                                        </Link>
                                    )}
                                </td>
                                <td>{new Date(item?.req?.Date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
