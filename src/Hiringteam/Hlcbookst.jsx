import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Hlcbookst = () => {
    let id = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:4000/hiringteam/viewlocationbooking/${id}`);
            console.log(response.data);
            setData(response.data);
        };
        fetchdata();
    }, [id]);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const handleStatusFilter = event => {
        setFilterStatus(event.target.value);
    };

    const filteredData = data.filter(item =>
        item.film.Filmname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.loc.locationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.req.bookingStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.req.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase())
    ).filter(item =>
        filterStatus === '' || item.req.bookingStatus === filterStatus
    );

    return (
        <div className='hlcbst'>
            <div className='text-white pt-36 text-center mb-5 text-[30px]'>LOCATION BOOKING STATUS</div>
            <div className='flex justify-center  mb-4'>
                
                <select
                    value={filterStatus}
                    onChange={handleStatusFilter}
                    className='px-3 py-2 border border-gray-300 bg-white/70 rounded-s-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
                >
                    <option value=''>All</option>
                    <option value='Accepted'>Accepted</option>
                    <option value='Rejected'>Rejected</option>
                    {/* Add more status options if needed */}
                </select>
                <input
                    type='search'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={handleSearch}
                    className='px-3 bg-transparent text-white py-2 border border-gray-300 rounded-e-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
                />
            </div>
            <div className='overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-center rtl:text-right text-white dark:text-white'>
                    <thead className='text-xs text-white uppercase dark:bg-gray-950/90 dark:text-white'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                SLNO
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                FILM NAME
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                LOCATION
                            </th>
                            <th>STATUS</th>
                            <th>PAYMENT STATUS</th>
                            <th></th>
                            <th>FEEDBACK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={item.req._id} className='dark:border-gray-700 text-white bg-slate-950/40 hover:bg-slate-800/50'>
                                <td scope='row' className='px-6 py-4'>
                                    {index + 1}
                                </td>
                                <td>{item.film.Filmname}</td>
                                <td>{item.loc.locationName}</td>
                                <td>{item.req.bookingStatus}</td>
                                <td>{item.req.paymentStatus}</td>
                                <td>
                                    {item.req.bookingStatus === 'Accepted' && item.req.paymentStatus !== 'Paid' && (
                                        <Link state={item} to={`/hiring/hlocpay/${item.req.hiringId}/${item.req.locationId}/${item.req._id}`}>
                                            <button className='text-yellow-200'>PAY</button>
                                        </Link>
                                    )}
                                </td>
                                <td>
                                    {item.req.bookingStatus === 'Accepted' && (
                                        <Link to={`/hiring/hlcfeed/${item.req._id}`}>
                                            <button className='text-yellow-200'>Add</button>
                                        </Link>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
