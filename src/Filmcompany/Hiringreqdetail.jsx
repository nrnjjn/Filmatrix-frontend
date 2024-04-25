import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Hiringreqdetail = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    let handlesubmit = async (status) => {
        setRefresh(!refresh);
        let response = await axios.put(`http://localhost:4000/filmcompany/manageHiring/${id}`, { ...data, Status: status });
        console.log(response);
        setData('');
    };

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:4000/filmcompany/viewhiringdetail/${id}`);
            console.log(response.data);
            setData(response.data);
        };
        fetchdata();
    }, [refresh]);

    return (
        <div className='fcvloc pt-32'>
            <div className='bg-slate-950/50 w-[800px] h-[470px] m-auto flex gap-2 '>
                <img src={`http://localhost:4000/uploads/${data.hiring?.Liscence}`} alt="" className='w-80 h-80  ps-3 pt-3' />
                <div className='flex flex-wrap flex-col'>
                    <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
                        <p className='font-bold'>Email:</p>
                        <p>{data.hiring?.Email}</p>
                    </div>
                    <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
                        <p className='font-bold'>Phone no:</p>
                        <p className='text-left'>{data.hiring?.Phone}</p>
                    </div>
                    <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
                        <p className='font-bold'>Liscence no:</p>
                        <p className='text-left'>{data.hiring?.liscenceNo}</p>
                    </div>

                    <div className='flex flex-wrap text-white pt-3 text-center gap-16'>
                        <p className='font-bold'>Description:</p>
                        <p>{data.response?.Description}</p>
                    </div>

                    {data.response?.Status !== 'Accepted' && (
                        <div className='flex flex-wrap text-white pt-2 text-center gap-8 justify-center'>
                            <button onClick={() => { handlesubmit('Accepted', data._id) }} className='text-green-500'>Accept</button>
                            <button onClick={() => { handlesubmit('Rejected', data._id) }} className='text-red-500'>Reject</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
