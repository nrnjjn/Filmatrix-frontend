import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Approvedseekers = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filmName, setFilmName] = useState('');
  const [category, setCategory] = useState('');
  const [filmNamesList, setFilmNamesList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [searchName, setSearchName] = useState(''); // New state for name search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/admin/viewseekers');
        setData(response?.data);

        // Extract unique film names from the data
        const uniqueFilmNames = [...new Set(response.data.map(item => item?.anc?.Filmname))];
        setFilmNamesList(uniqueFilmNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Filter categories based on selected filmName
    if (filmName !== '') {
      const categoriesForFilm = data
        .filter(item => item?.anc?.Filmname.toLowerCase() === filmName.toLowerCase())
        .map(item => item?.cat?.name);
      const uniqueCategories = [...new Set(categoriesForFilm)];
      setCategoriesList(uniqueCategories);
    } else {
      // If no film name is selected, show all categories
      const allCategories = data.map(item => item?.cat?.name);
      const uniqueCategories = [...new Set(allCategories)];
      setCategoriesList(uniqueCategories);
    }
  }, [data, filmName]);

  useEffect(() => {
    // Filter data based on filmName, category, and name
    let filtered = data.filter((item) => {
      let matchFilmName = true;
      let matchCategory = true;
      let matchName = true;

      if (filmName !== '') {
        matchFilmName = item?.anc?.Filmname.toLowerCase() === filmName.toLowerCase();
      }

      if (category !== '') {
        matchCategory = item?.cat?.name.toLowerCase() === category.toLowerCase();
      }

      if (searchName !== '') { // Check if the name search is not empty
        matchName = item?.user?.Name.toLowerCase().includes(searchName.toLowerCase());
      }

      return matchFilmName && matchCategory && matchName; // Include name search in filtering
    });

    setFilteredData(filtered);
  }, [data, filmName, category, searchName]); // Include searchName in dependency array

  return (
    <div className='aprvdsk'>
      <div className='text-white pt-40 text-center mb-3 text-2xl font-bold'> JOB SEEKERS</div>

      <div className='flex flex-wrap flex-row'>
        <form className="mx-auto flex items-start">
          {/* Dropdown for film names */}
          <div>
            <select
              value={filmName}
              onChange={(e) => setFilmName(e.target.value)}
              className='block p-2.5 w-[100%] z-20 text-sm text-white bg-slate-950/50 rounded-s border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white'
            >
              <option value="">All Film Names</option>
              {filmNamesList.map((film, index) => (
                <option key={index} value={film}>{film}</option>
              ))}
            </select>
          </div>
          {/* Dropdown for categories */}
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='block  p-2.5 w-[100%] z-20 text-sm text-white bg-slate-950/50  border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white'
            >
              <option value="">All Categories</option>
              {categoriesList.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          {/* Input for name search */}
          <div>
            <input
              type="text"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className='block  p-2.5 w-[100%] z-20 text-sm text-white bg-slate-950/50 rounded-e border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white'
              placeholder="Search by Name"
            />
          </div>
          {/* Submit button */}
          <div>
     
          </div>
        </form>
      </div>

      {/* Table displaying filtered data */}
      <div className="pt-10 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead>
            <tr className="text-xs text-white uppercase dark:bg-gray-950/90 dark:text-gray-400">
              <th scope="col" className="px-3 py-3">SLNO</th>
              <th>NAME</th>
              <th>FILM NAME</th>
              <th>FILM COMPANY</th>
              <th>HIRING TEAM</th>
              <th>CATEGORY</th>
            </tr>
          </thead>
          <tbody>
            {/* Display filteredData instead of data */}
            {filteredData.map((item, index) => (
              <tr className="dark:border-gray-700 text-white bg-slate-950/40 hover:bg-slate-800/50" key={index}>
                <td scope="row" className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item?.user?.Name}</td>
                <td className="px-6 py-4">{item?.anc?.Filmname}</td>
                <td>{item?.fc?.companyName}</td>
                <td>{item?.hiring?.companyName}</td>
                <td>{item?.cat?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Approvedseekers;
