import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const Hancstatus = () => {
  let id2 = localStorage.getItem('id');
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  let { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/hiringteam/viewhreq/${id2}`);
        console.log(response.data);
        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchdata();
  }, [id2]);

  const filteredData = data.filter(item =>
    item.film.Filmname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='hancstatus'>
      <div className='text-white pt-36 text-center mb-5 text-[30px]'>REQUEST STATUS</div>

      <div className=" shadow-md sm:rounded-lg">
        <div className="flex items-center justify-center pb-4">
          <input
            type="text"
            placeholder="Search Film Name or Company Name"
            className="p-2.5  text-sm w-64 text-white bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 dark:bg-gray-950/50">
          <thead className="text-xs text-white uppercase dark:bg-gray-950/90 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">SLNO</th>
              <th>FILM NAME</th>
              <th>FILM COMPANY NAME</th>
              <th>STATUS</th>
              <th>PROGRESS</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="dark:border-gray-700 text-white bg-gray-950-950/40 hover:bg-slate-800/50">
                <td scope="row" className="px-1 py-4">{index + 1}</td>
                <td>{item.film?.Filmname}</td>
                <td>{item.companyName}</td>
                <td>{item.req?.Status}</td>
                <td>{item.req?.Status === 'Accepted' && (
                  <Link to={`/hiring/haddp/${item.req?._id}`}>
                    <button className='text-yellow-200'>Add</button>
                  </Link>
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
