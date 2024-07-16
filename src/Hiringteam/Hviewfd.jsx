import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Hviewfd = () => {
    const id = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [filmNames, setFilmNames] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://filmatrix.onrender.com/hiringteam/viewhreq/${id}`);
                setData(response.data);

                // Extract unique film names
                const uniqueFilmNames = [...new Set(response.data.map(item => item.film?.Filmname))];
                setFilmNames(uniqueFilmNames);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const filteredData = selectedFilm ? data.filter(item => item.film?.Filmname === selectedFilm) : data;

    return (
        <div className='lcfeed text-white'>
            <div className='text-white pt-36 text-center mb-3 text-[30px]'>FEEDBACK</div>

            <div className="max-w-lg mx-auto flex flex-wrap justify-center pb-10">
                <select
                    id="filmname-dropdown"
                    className="block p-2.5 mt-3 w-44  z-20 text-sm text-white bg-slate-950/50 rounded-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                    value={selectedFilm}
                    onChange={(e) => setSelectedFilm(e.target.value)}
                    required
                >
                    <option value="">Select Film Name</option>
                    {filmNames.map((filmName, index) => (
                        <option key={index} value={filmName}>{filmName}</option>
                    ))}
                </select>
            </div>

            <div className="pt-2 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right">
                    <thead className="text-xs uppercase dark:bg-gray-950/90">
                        <tr>
                            <th scope="col" className="px-6 py-3">SLNO</th>
                            <th scope="col" className="px-6 py-3">FILM NAME</th>
                            <th scope="col" className="px-6 py-3">FILM COMPANY</th>
                            <th scope="col" className="px-6 py-3">FEEDBACK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr className="dark:border-gray-700  bg-slate-950/40 hover:bg-slate-800/50" key={index}>
                                <td scope="row" className="px-6 py-4">{index + 1}</td>
                                <td>{item.film?.Filmname}</td>
                                <td>{item.companyName}</td>
                                <td>{item.req?.Feedback}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
