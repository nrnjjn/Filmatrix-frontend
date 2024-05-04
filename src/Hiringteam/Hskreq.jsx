import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Hskreq = () => {
    let id2 = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filmNames, setFilmNames] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/hiringteam/viewjobreq/${id2}`);
                setData(response.data);
                // Extract unique film names from the data
                const uniqueFilmNames = [...new Set(response.data.map(item => item.anc?.Filmname))];
                setFilmNames(uniqueFilmNames);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id2, refresh]);

    const filteredData = data.filter(item => {
        const searchString = searchQuery.toLowerCase();
        const filmName = item.anc?.Filmname.toLowerCase();
        const name = item.seeker?.Name.toLowerCase();
        const job = item.jobb?.Job.toLowerCase();
        const status = item.status.toLowerCase();

        return (
            filmName.includes(searchString) ||
            name.includes(searchString) ||
            job.includes(searchString) ||
            status.includes(searchString)
        );
    });

    return (
        <div className='hskreq'>
            <div className='text-white pt-36 text-center mb-5 text-[30px]'> JOB SEEKERS</div>

            <div className="max-w-lg mx-auto ms-48 pb-10 flex items-center">
                <select
                    id="filmname-dropdown"
                    className="block p-2.5 ms-14  w-32 text-sm text-white bg-slate-950/50 rounded-s-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                >
                    <option value="">Filmname</option>
                    {filmNames.map((filmName, index) => (
                        <option key={index} value={filmName}>{filmName}</option>
                    ))}
                </select>
                <input
                    type="search"
                    id="search-bar"
                    className="block p-2.5 w-1/2 z-20 text-sm text-white bg-slate-950/50 rounded-e-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                    placeholder="Search "
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                />
            </div>

            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 dark:bg-gray-950/50">
                    <thead className="text-xs text-white uppercase dark:bg-gray-950/90 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-3">SLNO</th>
                            <th scope="col" className="px-1 py-3">FILM NAME</th>
                            <th>JOB</th>
                            <th scope="col" className="px-1 py-3">SEEKER NAME</th>
                            <th>STATUS</th>
                            <th>VACANCY</th>
                            <th>DETAILS</th>
                            <th scope="col" className="px-1 py-3">DATE</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr className="dark:border-gray-700 text-white hover:bg-slate-800/50" key={index}>
                                <td scope="row" className="px-1 py-4">{index + 1}</td>
                                <td>{item.anc?.Filmname}</td>
                                <td>{item.jobb?.Job}</td>
                                <td>{item.seeker?.Name}</td>
                                <td className='text-white'>{item.status}</td>
                                <td>{item.jobb?.Vacancy}</td>
                                <td>
                                    <Link to={`/hiring/seekerreqd/${item.req?._id}`}>
                                        <button className='text-yellow-200 rounded w-14 h-6 text-center'> More</button>
                                    </Link>
                                </td>
                                <td>{new Date(item.date).toLocaleDateString()}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
