import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Approvedseekers = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filmName, setFilmName] = useState('');
  const [category, setCategory] = useState('');
  const [filmNamesList, setFilmNamesList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/admin/viewseekers');
        setData(response?.data);

        // Extract unique film names from the data
        const uniqueFilmNames = [...new Set(response.data.map(item => item?.anc?.Filmname))];
        setFilmNamesList(uniqueFilmNames);

        // Extract unique categories from the data
        // Update this logic according to your data structure
        const uniqueCategories = [...new Set(response.data.map(item => item?.anc?.Category))];
        setCategoriesList(uniqueCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on filmName and category
    let filtered = data.filter((item) => {
      let matchFilmName = true;
      let matchCategory = true;

      if (filmName !== '') {
        matchFilmName = item?.anc?.Filmname.toLowerCase() === filmName.toLowerCase();
      }

      if (category !== '') {
        // Update this logic according to your data structure
        matchCategory = item?.anc?.Category.toLowerCase() === category.toLowerCase();
      }

      return matchFilmName && matchCategory;
    });

    setFilteredData(filtered);
  }, [data, filmName, category]);

  return (
    <div className='aprvdsk'>
      <div className='text-white pt-40 text-center mb-3 text-2xl font-bold'> JOB SEEKERS</div>

      <form class="max-w-lg mx-auto">
        {/* Dropdown for film names */}
        <select
          value={filmName}
          onChange={(e) => setFilmName(e.target.value)}
          className='block p-2.5 w-full z-20 text-sm text-white bg-slate-950/50 rounded-e-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white'
        >
          <option value="">All Film Names</option>
          {filmNamesList.map((film, index) => (
            <option key={index} value={film}>{film}</option>
          ))}
        </select>

        {/* Dropdown for categories */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='block mt-2 p-2.5 w-full z-20 text-sm text-white bg-slate-950/50 rounded-e-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white'
        >
          <option value="">All Categories</option>
          {categoriesList.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Submit button */}
        <button
          type="submit"
          class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-300 rounded-e-lg border border-gray-700 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-slate-500 dark:focus:ring-gray-700"
        >
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>

      {/* Table displaying filtered data */}
      <div class="pt-10 overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          {/* Display filteredData instead of data */}
          {filteredData.map((item, index) => (
            <tr class="dark:border-gray-700 text-white bg-slate-950/40 hover:bg-slate-800/50" key={index}>
              <td scope="row" class="px-6 py-4">{index + 1}</td>
              <td class="px-6 py-4">{item?.user?.Name}</td>
              <td class="px-6 py-4">{item?.anc?.Filmname}</td>
              <td>{item?.fc?.companyName}</td>
              <td>{item?.hiring?.companyName}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
