import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Viewprogress = () => {
    let id = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [filmNames, setFilmNames] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState('');
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/filmcompany/viewhiringreq/${id}`);
                console.log(response.data);
                setData(response.data);
                // Extract unique film names from data
                const uniqueFilmNames = [...new Set(response.data.map((item) => item.anc?.Filmname))];
                setFilmNames(uniqueFilmNames);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [refresh]);

    const handleFilmSelect = (event) => {
        setSelectedFilm(event.target.value);
    };

    return (
        <div className='vanc'>
            <div className='text-white pt-36 text-center mb-3 text-[30px]'>PROGRESS</div>

            {/* Dropdown to select Film names */}
            <div className='max-w-72 mx-auto mb-3 mt-4'>
                <select
                    value={selectedFilm}
                    onChange={handleFilmSelect}
                    className='block w-full py-2 px-4 border border-gray-300 rounded-md bg-white/70  text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                >
                    <option value=''>Select Film Name</option>
                    {filmNames.map((filmName, index) => (
                        <option key={index} value={filmName}>
                            {filmName}
                        </option>
                    ))}
                </select>
            </div>

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
                                PROGRESS
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                DATE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data
                            .filter((item) => !selectedFilm || item.anc?.Filmname === selectedFilm)
                            .map((item, index) => (
                                <tr key={index} className='dark:border-gray-700 bg-slate-950/40 hover:bg-slate-800/50'>
                                    <td scope='row' className='px-6 py-4'>
                                        {index + 1}
                                    </td>
                                    <td>{item.anc?.Filmname}</td>
                                    <td>{item.req?.Progress}</td>
                                    <td>{new Date(item.req?.Date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
