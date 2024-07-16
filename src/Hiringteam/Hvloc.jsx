import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Hvloc = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://filmatrix.onrender.com/filmcompany/viewloc');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.locationName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='hvloc'>
      <p className='mt-24 text-white text-3xl text-center'>LOCATIONS</p>
      <div className='flex justify-center items-center mt-4 mb-4'>
        <input
          type='text'
          placeholder='Search by Location Name'
          className='border border-gray-300 bg-transparent text-white rounded-md px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-400'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='flex flex-wrap justify-evenly pt-4 gap-5'>
        {filteredData.map(item => (
          <Link key={item._id} to={`/hiring/hlocdetail/${item._id}`}>
            <div className='w-60 h-52 bg-slate-950/50 rounded'>
              <img src={`https://filmatrix.onrender.com/uploads/${item.Image}`} alt="" className='w-[208px] h-[142px] m-auto pt-3'/>
              <p className='text-white text-center pt-3 text-[20px]'>{item.locationName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
