import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Addjob = () => {
  const id = localStorage.getItem('id')
  const navigate = useNavigate()
  const [data, setData] = useState({
    Job: '',
    ancId: '',
    companyId: '', // Add companyId to state
    Vacancy: '',
    category: '',
    Description: ''
  })
  const [view, setView] = useState([])
  const [data2, setData2] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));

    if (name === 'ancId') {
      const selectedAnc = data2.find(item => item.anc?._id === value);
      setData(prevData => ({
        ...prevData,
        companyId: selectedAnc?.anc?.companyId || '' // Set companyId corresponding to the selected ancId
      }));
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    navigate('/hiring/hviewjob')
    try {
      const response = await axios.post('http://localhost:4000/hiringteam/addjob', { ...data, userId: id })
      console.log(response);
    } catch (error) {
      console.error('Error adding job:', error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get(`http://localhost:4000/filmcompany/viewlocfname/${id}`),
          axios.get(`http://localhost:4000/admin/viewcategory/`)
        ]);
        setData2(response1.data);
        setView(response2.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className='addanc'>
      <div className='text-center pt-24 font-bold text-3xl text-white'>
        New Job
      </div>
      <form className='pt-4' onSubmit={handleSubmit}>
        <div className='m-auto w-fit'>
          <div className='flex flex-row pb-3 flex-wrap'>
            <input onChange={handleChange} name='Job' type="text" placeholder='Job' className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>
          <select onChange={handleChange} className='h-9 w-56 bg-white rounded-lg text-black pl-2 mt-2 mb-3' name="ancId">
            <option value="">Filmname</option>
            {data2.map((item) => (
              <option key={item.anc?._id} value={item.anc?._id}>
                {item.anc?.Filmname}
              </option>
            ))}
          </select>
          <div className='flex flex-row pb-2 flex-wrap'>
            <input onChange={handleChange} name='Vacancy' type="number" placeholder='Vacancy' className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>
          <select onChange={handleChange} className='h-9 w-56 bg-white  rounded-lg text-black pl-2 mt-3 mb-3' name="category">
            <option value="">Category</option>
            {view.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          <div className='flex flex-row flex-wrap'>
            <textarea onChange={handleChange} name="Description" id="" cols="30" rows="10" placeholder='Description' className='placeholder:text-center placeholder:text-white border-2 rounded bg-transparent text-white'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
        </div>
      </form>
    </div>
  )
}
