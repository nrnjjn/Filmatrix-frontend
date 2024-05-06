import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Uvanc = () => {
    const [data, setData] = useState(['']);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get('http://localhost:4000/hiringteam/viewanc');
            console.log(response.data);
            if (response.data) {
                setData(response.data);
            }
        };

        fetchdata();
    }, []);

    const filteredData = data?.filter((item) => {
        const searchString = searchQuery.toLowerCase();
        return item?.Filmname?.toLowerCase().includes(searchString);
    });

    return (
        <div className='hpw'>
          <p className='text-white mt-28 text-center text-3xl'>FILM ANNOUNCEMENTS</p>
            <div className='mt-5 flex flex-wrap justify-center'>
                <input
                    type='search'
                    id='search-bar'
                    className='p-2.5 w-56 text-white bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950/50 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:border-blue-500'
                    placeholder='Search Filmname...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                />
            </div>
            <div className='flex flex-wrap justify-evenly pt-5'>
                {filteredData.map((item) => (
                    <Link to={`/user/uvancd/${item._id}`}>
                        <div className='w-60 h-60 bg-slate-950/50 rounded'>
                            <img src={`http://localhost:4000/uploads/${item.Image}`} alt='' className='w-[208px] h-[142px] m-auto pt-3' />
                            <p className='text-white text-center pt-4 text-[20px]'>{item.Filmname}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
