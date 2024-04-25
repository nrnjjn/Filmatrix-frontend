import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Hfclocstatus = () => {
    const id = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/hiringteam/locreqst/${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const filteredData = data.filter(item =>
        (item.film?.Filmname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.loc?.locationName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (statusFilter ? item.req?.Status === statusFilter : true)
    );

    const handleSubmit = async (loc, film, fcreq) => {
        navigate('/hiring/hlcbookst');
        await axios.post('http://localhost:4000/hiringteam/locationbooking', {
            ...data,
            hiringId: id,
            locationId: loc,
            ancId: film,
            Fcreq: fcreq
        });
    };

    return (
        <div className='hvloc'>
            <div className='text-white pt-36 text-center mb-5 text-[30px]'>REQUEST STATUS</div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg flex flex-wrap justify-center">
                <div className="flex  items-center mb-4 w-[400px]">
                <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className='border w-24 border-gray-300 bg-white rounded-s px-4 h-10 focus:outline-none focus:ring-2 focus:ring-gray-400'
                    >
                        <option value=''>All</option>
                        <option value='Accepted'>Accepted</option>
                        <option value='Rejected'>Rejected</option>
                    </select>
                    <input
                        type='text'
                        placeholder='Search by Film or Location Name'
                        className='border border-gray-300 bg-transparent text-white rounded-e px-4 h-10 focus:outline-none focus:ring-2 focus:ring-gray-400 flex-grow mr-2'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                
                </div>
                <table className="w-full text-sm text-center rtl:text-right text-white dark:text-white">
                    <thead className="text-xs text-white uppercase dark:bg-gray-950/90 dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">SLNO</th>
                            <th scope="col" className="px-6 py-3">FILM NAME</th>
                            <th scope="col" className="px-6 py-3">PLACE</th>
                            <th scope="col" className="px-6 py-3">STATUS</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} className="dark:border-gray-700 bg-slate-950/40 text-white hover:bg-slate-800/50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td>{item.film?.Filmname}</td>
                                <td>{item.loc?.locationName}</td>
                                <td>{item.req?.Status}</td>
                                <td>
                                    {item.req?.Status === 'Accepted' && (
                                        <button onClick={() => handleSubmit(item.loc?._id, item.film?._id, item.req?._id)} className='text-yellow-200 rounded w-14 h-6 text-center'>Book</button>
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
