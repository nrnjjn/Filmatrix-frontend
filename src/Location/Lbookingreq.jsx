import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Lbookingreq = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [statusFilter, setStatusFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    let id = localStorage.getItem('id');

    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    let handleSubmit = async (status, rid) => {
        setRefresh(!refresh);
        let response = await axios.put(`https://filmatrix.onrender.com/locationowner/managebookings/${rid}`, { bookingStatus: status });
        console.log(response);
        setData('');
    };

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`https://filmatrix.onrender.com/locationowner/viewlocreq/${id}`);
            console.log(response.data);
            setData2(response.data);
        };
        fetchdata();
    }, [refresh]);

    const filteredData = data2.filter((item) => {
        const searchString = searchQuery.toLowerCase();
        const locationName = item.loc?.locationName.toLowerCase();
        const companyName = item.hiring?.companyName.toLowerCase();
        const email = item.hiring?.Email.toLowerCase();
        return locationName.includes(searchString) || companyName.includes(searchString) || email.includes(searchString);
    });

    const filteredAndStatusData = filteredData.filter((item) => {
        if (statusFilter === '') return true;
        return item.req?.bookingStatus === statusFilter;
    });

    return (
        <div className="lprof">
            <div className="text-white pt-36 text-center mb-5 text-[30px]">LOCATION BOOKING</div>

            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-center mb-5">
                    <div className="flex items-center">
                        <select
                            id="status-dropdown"
                            className="block p-2.5 w-36 text-sm text-white bg-slate-950/50 rounded-s-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            required
                        >
                            <option value="">All Status</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                        </select>

                        <input
                            type="search"
                            id="search-bar"
                            className="block p-2.5  w-60 z-20 text-sm text-white bg-slate-950/50 placeholder:text-center rounded-e-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                            placeholder="Search "
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 dark:bg-gray-950/50">
                    <thead class="text-xs text-white uppercase dark:bg-gray-950/50 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-3 py-3">
                                SLNO
                            </th>
                            <th>Location</th>
                            <th scope="col" class="px-1 py-3">
                                HIRING TEAM NAME
                            </th>
                            <th scope="col" class="px-1 py-3">
                                EMAIL
                            </th>
                            <th>PHONE NO</th>
                            <th scope="col" class="px-1 py-3">
                                From DATE
                            </th>
                            <th>No of days</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAndStatusData.map((item, index) => (
                            <tr class="dark:border-gray-700 text-white hover:bg-slate-800/50">
                                <td scope="row" class="px-1 py-4">
                                    {index + 1}
                                </td>

                                <td>{item.loc?.locationName}</td>
                                <td>{item.hiring?.companyName}</td>
                                <td>{item.hiring?.Email}</td>
                                <td>{item.hiring?.Phone}</td>
                                <td>{new Date(item.fcreq?.Date).toLocaleDateString()}</td>
                                <td>{item.fcreq?.Noofdays}</td>
                                <td>{item.req?.bookingStatus}</td>
                                <td>
                                    <Link to={`/location/lvpay/${item.req?._id}`}>
                                        <button className="text-yellow-200">More</button>
                                    </Link>
                                </td>
                                <td>
                                    {item.req?.bookingStatus !== 'Accepted' && (
                                        <button onClick={() => handleSubmit('Accepted', item.req?._id)} className="text-green-500 rounded w-14 h-6 text-center">
                                            Accept
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {item.req?.bookingStatus !== 'Accepted' && (
                                        <button onClick={() => handleSubmit('Rejected', item.req?._id)} className="text-red-600 rounded w-14 h-6 text-center">
                                            Reject
                                        </button>
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
