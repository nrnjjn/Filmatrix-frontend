import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import  { toast } from 'react-toastify';

export const Editcategory = () => {
  let { id } = useParams();
  const [data, setData] = useState({ category: '', Image: null });
  const [view, setView] = useState('') 
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleFile = (event) => {
    setData({ ...data, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let formData = new FormData();
      formData.append('name', data.category);
      formData.append('Image', data.Image);

      const response = await axios.put(`http://localhost:4000/admin/editcategory/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Category updated')
      console.log(response.data); // Assuming your backend sends back some data upon successful update

      setData({ category: '', Image: null }); // Clear form data after successful submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/admin/categorydetail/${id}`)
      setView(response.data)
    }
    fetchdata()
  },[])
  

  return (
    <div className='addanc'>
      <div className='text-center pt-36 font-bold text-3xl text-white/70'>category</div>
      <form onSubmit={handleSubmit} className='pt-3'>
        <div className='m-auto w-fit'>
          <div className='flex flex-row flex-wrap justify-center'>
            <input
              value={data.category}
              type='text'
              onChange={handleChange}
              name='category'
              placeholder={view?.name}
              className='bg-transparent text-white placeholder:text-white border-2 rounded placeholder:text-center w-56 h-8'
            />
          </div>
          <div className='flex flex-wrap justify-between w-[300px] text-center mt-4 py-3 '>
            <label className='block h-10 mb-2  text-gray-900 dark:text-white' htmlFor='file_input'>
              Work photo:
            </label>
            <a href={`http://localhost:4000/uploads/${view?.Image}`}> <img className='w-14 m-auto' src={`http://localhost:4000/uploads/${view?.Image}`} alt="" /></a>
            <input
              onChange={handleFile}
              name='Image'
              className='block w-[40%] h-10 text-sm text-gray-900  border-white rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 border-2'
              id='file_input'
              type='file'
            />
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ms-32 mt-3'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
