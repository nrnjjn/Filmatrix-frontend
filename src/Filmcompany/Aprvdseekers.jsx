import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Aprvdseekers = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filmNames, setFilmNames] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://filmatrix.onrender.com/filmcompany/viewjobseekers/${localStorage.getItem('id')}`);
                console.log(response.data);
                setData(response.data);
                setFilteredData(response.data); // Initialize filteredData with all data

                // Extract unique Filmnames from the data
                const uniqueFilmNames = [...new Set(response.data.map(item => item?.anc?.Filmname))];
                setFilmNames(uniqueFilmNames);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        filterData();
    }, [searchQuery, selectedFilm]);

    const filterData = () => {
        let filtered = data;
        
        // Filter by selectedFilm
        if (selectedFilm) {
            filtered = filtered.filter(item => item?.anc?.Filmname.toLowerCase() === selectedFilm.toLowerCase());
        }

        // Filter by searchQuery
        if (searchQuery) {
            const lowerSearchQuery = searchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.anc?.Filmname.toLowerCase().includes(lowerSearchQuery) ||
                item.seek?.Name.toLowerCase().includes(lowerSearchQuery) ||
                item?.job?.Job.toLowerCase().includes(lowerSearchQuery) ||
                new Date(item?.req?.Date).toLocaleDateString().includes(lowerSearchQuery)
            );
        }

        setFilteredData(filtered);
    };

    const handleFilmChange = (event) => {
        setSelectedFilm(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='vanc'>
            <div className='text-white pt-36 text-center mb-3 text-[30px]'>CREW</div>

            {/* Dropdown to select Filmnames */}
            <div className='flex flex-wrap w-80 justify-center m-auto'>
            <div className='w-36 mx-auto mb-4'>
                <select
                    value={selectedFilm}
                    onChange={handleFilmChange}
                    className='block w-full h-8 px-4 border border-gray-300 rounded-s bg-white/60 placeholder:text-white text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                >
                    <option value=''>Select Film</option>
                    {filmNames.map((film, index) => (
                        <option key={index} value={film}>
                            {film}
                        </option>
                    ))}
                </select>
            </div>

            {/* Search bar */}
            <div className='w-44 mx-auto mb-4'>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='block w-full h-8 px-4 border border-gray-300 rounded-e text-white bg-transparent text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    placeholder='Search...'
                />
            </div>
            </div>
            {/* Table */}
            <div className='pt-10 overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-center rtl:text-right text-white'>
                    <thead className='text-xs uppercase dark:bg-gray-950/90'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                SLNO
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                FILM NAME
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                SEEKER NAME
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                JOB
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                DATE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} className='dark:border-gray-700 bg-gray-950/40 hover:bg-slate-800/50'>
                                <td scope='row' className='px-6 py-4'>
                                    {index + 1}
                                </td>
                                <td>{item.anc?.Filmname}</td>
                                <td>{item.seek?.Name}</td>
                                <td>{item?.job?.Job}</td>
                                <td>{new Date(item?.req?.Date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
