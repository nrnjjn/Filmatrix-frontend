import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Fcviewloc = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/filmcompany/viewloc');
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

    const filteredData = data.filter((item) => {
        return item.locationName.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className='fcvloc'>
          <p className='mt-32 text-center text-2xl mb-4 text-white'>LOCATION</p>
            <div className='flex justify-center '>
              
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='block w-80 h-10 px-4 text-sm border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:bg-white focus:border-gray-500'
                    placeholder='Search Location Name'
                />
            </div>
            <div className='flex flex-wrap justify-evenly pt-8 gap-5'>
                {filteredData.map((item) => (
                    <Link key={item._id} to={`/filmcompany/locdt/${item._id}`}>
                        <div className='w-60 h-60 bg-slate-950/30 rounded'>
                            <img src={`http://localhost:4000/uploads/${item.Image}`} alt='' className='w-52 m-auto pt-3' />
                            <p className='text-white text-center pt-3 text-[20px]'>{item.locationName}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
