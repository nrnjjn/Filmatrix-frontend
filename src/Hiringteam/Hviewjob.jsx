import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Hviewjob = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilm, setSelectedFilm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:4000/hiringteam/viewjob/${localStorage.getItem('id')}`);
            setData(response.data);
            setFilteredData(response.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (!searchTerm && !selectedFilm) {
            setFilteredData(data);
            return;
        }

        let filteredResults = data;

        if (searchTerm) {
            filteredResults = filteredResults.filter(
                item =>
                    item.anc.Filmname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.req.Job.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.req.Vacancy.toString().includes(searchTerm.toLowerCase()) ||
                    item.req.Description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedFilm) {
            filteredResults = filteredResults.filter(item => item.anc.Filmname === selectedFilm);
        }

        setFilteredData(filteredResults);
    }, [data, searchTerm, selectedFilm]);

    const handleDelete = async id => {
        try {
            await axios.delete(`http://localhost:4000/hiringteam/deletejob/${id}`);
            setData(prevData => prevData.filter(item => item.req._id !== id));
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const handleFilmFilter = event => {
        setSelectedFilm(event.target.value);
    };

    // Filter out duplicate Filmnames
    const uniqueFilmnames = [...new Set(data.map(item => item.anc.Filmname))];

    return (
        <div className='hviewjob'>
            <div className='text-white pt-36 text-center mb-5 text-[30px]'>VIEW JOB</div>
            <div className='flex justify-center  mb-4'>
                
                <select
                    value={selectedFilm}
                    onChange={handleFilmFilter}
                    className='px-3 py-2  w-28 border bg-white/70 border-gray-300 rounded-s-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
                >
                    <option value=''>All Films</option>
                    {uniqueFilmnames.map(film => (
                        <option key={film} value={film}>
                            {film}
                        </option>
                    ))}
                </select>
                <input
                    type='search'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={handleSearch}
                    className='px-3 py-2 border border-gray-300 rounded-e-md bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
                />
            </div>
            <div className='overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 dark:bg-gray-950/50'>
                    <thead className='text-xs text-white uppercase dark:bg-gray-950/90 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className='px-3 py-3'>
                                SLNO
                            </th>
                            <th scope='col' className='px-1 py-3'>
                                FILM NAME
                            </th>
                            <th scope='col' className='px-1 py-3'>
                                JOB
                            </th>
                            <th scope='col' className='px-1 py-3'>
                                VACANCY
                            </th>
                            <th>DESCRIPTION</th>
                            <th scope='col' className='px-1 py-3'>
                                DATE
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={item.req._id} className='dark:border-gray-700 text-white hover:bg-slate-800/50'>
                                <td scope='row' className='px-1 py-4'>
                                    {index + 1}
                                </td>
                                <td>{item.anc.Filmname}</td>
                                <td>{item.req.Job}</td>
                                <td>{item.req.Vacancy}</td>
                                <td>{item.req.Description}</td>
                                <td>{new Date(item.req.Date).toLocaleDateString()}</td>
                                <td>
                                    <Link to={`/hiring/heditjob/${item.req._id}`}>
                                        <button className='text-green-500 rounded w-14 h-6 text-center'>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item.req._id)} className='text-red-500 rounded w-14 h-6 text-center'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
