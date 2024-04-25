import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Viewannouncement = () => {
    let id = localStorage.getItem('id');
    const [data, setdata] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleDelete = async (id) => {
        let response = await axios.delete(`http://localhost:4000/filmcompany/deleteanc/${id}`);
        console.log(response);
        // After deletion, refetch the data
        fetchData();
    };

    const fetchData = async () => {
        let response = await axios.get(`http://localhost:4000/filmcompany/viewanc/${id}`);
        console.log(response.data);
        if (response.data) {
            setdata(response.data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((item) => {
        const lowerSearchQuery = searchQuery.toLowerCase();
        return (
            item.Filmname.toLowerCase().includes(lowerSearchQuery) ||
            item.Director.toLowerCase().includes(lowerSearchQuery)
        );
    });

    return (
        <div className='vanc'>
            <div className='text-white pt-36 text-center mb-3 text-[25px]'> ANNOUNCEMENTS</div>

            {/* Search bar */}
            <div className='max-w-sm mx-auto mb-4 mt-4'>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='block w-full py-2 px-4 border border-gray-300 rounded-md bg-transparent text-white text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    placeholder='Search by Film Name or Director...'
                />
            </div>

            {/* Table */}
            <div className='mt-5 overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-center rtl:text-right text-white'>
                    <thead className='text-xs uppercase dark:bg-gray-950/90'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                SLNO
                            </th>
                            <th>FILM NAME</th>
                            <th>DIRECTOR</th>
                            <th>DESCRIPTION</th>
                            <th>IMAGE</th>
                            <th>DATE</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} className='dark:border-gray-700 bg-gray-950/40 hover:bg-slate-800/50'>
                                <td scope='row' className='px-6 py-4'>
                                    {index + 1}
                                </td>
                                <td>{item.Filmname}</td>
                                <td>{item.Director}</td>
                                <td>{item.description}</td>
                                <td className='flex flex-wrap justify-center pt-3'>
                                    <img alt='' className='w-10 h-10 ' src={`http://localhost:4000/uploads/${item.Image}`} />
                                </td>
                                <td class='px-6 py-4'>{new Date(item.Date).toLocaleDateString()}</td>
                                <td>
                                    <Link to={`/filmcompany/editanc/${item._id}`}>
                                        <button className='text-green-500'>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className='text-red-500'>
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
