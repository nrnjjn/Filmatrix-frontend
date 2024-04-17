import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Locreq = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const id = localStorage.getItem('id');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/filmcompany/viewlocreq/${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='fcvloc'>
            <div className='text-white pt-36 text-center mb-3 text-[25px]'>LOCATION BOOKING</div>
            {/* Your search form */}
            <div className="pt-5 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 dark:bg-gray-950/50">
                    <thead className="text-xs text-white uppercase dark:bg-gray-950/50 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-3">SLNO</th>
                            <th>FILM NAME</th>
                            <th>HIRING TEAM</th>
                            <th>PLACE</th>
                            <th>DETAILS</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((items, index) => (
                            items.map((item, idx) => (
                                <tr key={`${index}-${idx}`} className="dark:border-gray-700 text-white hover:bg-slate-800/50">
                                    <td className="px-1 py-4">{idx + 1}</td>
                                    <td>{item.anc?.Filmname}</td>
                                    <td>{item.hiring?.companyName}</td>
                                    <td>{item.loc?.locationName}</td>
                                    <td>
                                        <Link to={`/filmcompany/locreqdetail/${item.req?._id}`}>
                                            <button className='text-yellow-200 rounded w-14 h-6 text-center'>More</button>
                                        </Link>
                                    </td>
                                    <td>{item.req?.Status}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Locreq;
