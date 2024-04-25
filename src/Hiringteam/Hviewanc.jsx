import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Hviewanc = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/hiringteam/viewanc');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((item) =>
        item.Filmname.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='hviewanc'>
          <p className='text-white mt-32 text-center text-3xl mb-4'>ANNOUNCEMENT</p>
            <div className='flex justify-center mt-5'>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder='Search Film Name...'
                    className='p-2 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:border-blue-500'
                />
            </div>
            <div className='flex flex-wrap justify-evenly pt-5'>
                {filteredData.map((item) => (
                    <Link to={`/hiring/hvancd/${item._id}`} key={item._id}>
                        <div className='w-60 h-60 bg-slate-950/50 rounded'>
                            <img src={`http://localhost:4000/uploads/${item.Image}`} alt="" className='w-52 m-auto pt-3' />
                            <p className='text-white text-center pt-5 text-[20px]'>{item.Filmname}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
