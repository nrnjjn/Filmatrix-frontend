import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Viewhpwk = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
let id=localStorage.getItem("id");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/hiringteam/viewpreviouswork/${id}`);
                console.log(response.data);
                if (response.data) {
                    setData(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter((item) =>
        item.Filmname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='hpw'>
          <p className='pt-32 text-3xl text-white text-center'>PREVIOUS WORK</p>
            <div className='flex justify-center pt-3'>
                <input
                    type='text'
                    placeholder='Search by Filmname'
                    className='px-4 py-2 border bg-transparent text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className='flex flex-wrap justify-evenly pt-8 gap-5'>
                {filteredData.map((item) => (
                    <Link to={`/hiring/viewhpwkd/${item._id}`} key={item._id}>
                        <div className='w-60 h-56 bg-slate-950/50 rounded'>
                            <img src={`http://localhost:4000/uploads/${item?.Image}`} alt="" className='w-[208px] h-[142px] m-auto pt-3' />
                            <p className='text-white text-center pt-4 text-[20px]'>{item?.Filmname}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
