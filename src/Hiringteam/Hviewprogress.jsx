import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Hviewprogress = () => {
    let id = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filmNames, setFilmNames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/hiringteam/viewfilmprogress/${id}`);
                setData(response.data);

                // Extract unique film names from the data
                const uniqueFilmNames = [...new Set(response.data.map(item => item.film?.Filmname))];
                setFilmNames(uniqueFilmNames);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const filteredData = data.filter(item => {
        const searchString = searchQuery.toLowerCase();
        const filmName = (item.film && item.film.Filmname) ? item.film.Filmname.toLowerCase() : '';
        const progress = (item.req && item.req.Progress) ? item.req.Progress.toLowerCase() : '';
        return filmName.includes(searchString) || progress.includes(searchString);
    });

    return (
        <div className='hviewjob text-white'>
            <div className='text-white pt-36 text-center mb-3 text-[30px]'>PROGRESS</div>

            <div className="max-w-lg mt-4 mx-auto pb-10 flex">
            <select
                    id="filmname-dropdown"
                    className="block p-2.5 w-32 ml-16  z-20 text-sm text-white bg-slate-950/50 rounded-s-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                >
                    <option value="">Film Name</option>
                    {filmNames.map((filmName, index) => (
                        <option key={index} value={filmName}>{filmName}</option>
                    ))}
                </select>
                <input
                    type="search"
                    id="search-bar"
                    className="block p-2.5 w-1/2 z-20 text-sm text-white bg-slate-950/50 rounded-e-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white placeholder:text-center"
                    placeholder="Search "
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                />
              
            </div>

            <div className="pt-2 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right">
                    <thead className="text-xs uppercase dark:bg-gray-950/90">
                        <tr>
                            <th scope="col" className="px-6 py-3">SLNO</th>
                            <th scope="col" className="px-6 py-3">FILM NAME</th>
                            <th scope="col" className="px-6 py-3">PROGRESS</th>
                            <th scope="col" className="px-6 py-3"></th>
                            <th scope="col" className="px-6 py-3">DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr className="dark:border-gray-700 bg-slate-950/40 hover:bg-slate-800/50" key={index}>
                                <td scope="row" className="px-6 py-4">{index + 1}</td>
                                <td>{item.film?.Filmname}</td>
                                <td>{item.req?.Progress}</td>
                                <td>
                                    <Link to={`/hiring/haddp/${item.req?._id}`}>
                                        <button className='text-yellow-200'>Add</button>
                                    </Link>
                                </td>
                                <td>{new Date(item.req?.Date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
