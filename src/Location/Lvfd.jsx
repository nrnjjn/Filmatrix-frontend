import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Lvfd = () => {
    let id2 = localStorage.getItem('id');
    const [data, setData] = useState(['']);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:4000/locationowner/viewlocreq/${id2}`);
            console.log(response.data);
            if (response.data) {
                setData(response.data);
            }
        };
        fetchdata();
    }, []);

    const filteredData = data.filter((item) => {
        const searchString = searchQuery.toLowerCase();
        const filmName = item?.anc?.Filmname.toLowerCase();
        const locationName = item?.loc?.locationName.toLowerCase();
        return filmName?.includes(searchString) || locationName?.includes(searchString);
    });

    return (
        <div className='lbkst'>
            <div className='text-white pt-36 text-center mb-3 text-[40px]'>VIEW FEEDBACK</div>

            <div class='pt-3 overflow-x-auto shadow-md sm:rounded-lg flex flex-wrap justify-center '>
                <div class='w-72 flex mb-3 '>
                    <input
                        type='search'
                        id='search-bar'
                        class='block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950/50 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:border-blue-500'
                        placeholder='Search Filmname or Location'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        required
                    />
                  
                </div>
                <table class='w-full text-sm text-center rtl:text-right text-white dark:text-white'>
                    <thead class='text-xs text-white uppercase dark:bg-gray-950/50 dark:text-white'>
                        <tr>
                            <th scope='col' class='px-6 py-3'>
                                SLNO
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                FILM NAME
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                LOCATION NAME
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                FEEDBACK
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr class='dark:border-gray-700 text-white hover:bg-slate-800/50'>
                                <td scope='row' class='px-6 py-4'>
                                    {index + 1}
                                </td>
                                <td>{item?.anc?.Filmname}</td>
                                <td>{item?.loc?.locationName}</td>
                                <td>{item?.req?.Feedback}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
