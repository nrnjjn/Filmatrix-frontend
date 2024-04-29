import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const Hvancdetail = () => {
  const [data, setData] = useState(null);
  const [hasRequest, setHasRequest] = useState(false);
  const { id } = useParams();
  const id1 = localStorage.getItem('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch announcement details
        const response = await axios.get(`http://localhost:4000/hiringteam/viewancd/${id}`);
        console.log(response.data);
        if (response.data) {
          setData(response.data);
        }

        // Check if there exists a hiring request for the user and announcement
        const requestResponse = await axios.get(`http://localhost:4000/hiringteam/viewhreq/${id1}`);
        console.log(requestResponse.data);
        if (requestResponse.data && requestResponse.data.length > 0) {
          const hasMatchingRequest = requestResponse.data.some(item => item.req.ancId === id);
          setHasRequest(hasMatchingRequest);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id, id1]);

  return (
    <div className='pt-36 hviewanc'>
      {data && (
        <div className='bg-slate-950/50 w-[700px] h-[450px] m-auto flex gap-2'>
          <img src={`http://localhost:4000/uploads/${data.Image}`} alt="" className='w-80 h-80 ps-3 pt-3' />
          <div className='flex flex-wrap flex-col w-[700px]'>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
              <p className='font-bold'>Film Name:</p>
              <p>{data.Filmname}</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
              <p className='font-bold'>Description:</p>
              <p className='text-left '>{data.description}</p>
            </div>
            {/* Render the "Apply" button only if there is no matching request */}
            {!hasRequest && (
              <div className='flex flex-wrap justify-center'>
                <Link to={`/hiring/hreqdescription/${data._id}`}>
                  <button className='text-yellow-400'>Apply</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
