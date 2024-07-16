import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const Locreqdetail = () => {
    let { id } = useParams();
    console.log(id);

    const [data, setData] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleSubmit = async (status) => {
        setRefresh(!refresh);
        let response = await axios.put(`https://filmatrix.onrender.com/filmcompany/managelocreq/${id}`, { ...data, Status: status });
        console.log(response);
        setData('');
    }

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(`https://filmatrix.onrender.com/filmcompany/viewlocreqd/${id}`);
            console.log(response.data);
            if (response.data) {
                setData(response.data);
            }
        }
        fetchData();
    }, [refresh]);

    return (
        <div className='fcvloc pt-32'>
            <div className='bg-slate-950/50 w-[800px] h-[470px] m-auto flex gap-2 '>
                <img src={`https://filmatrix.onrender.com/uploads/${data?.loc?.Image}`} alt="" className='w-80 h-80  ps-3 pt-3 ' />
                <div className='flex flex-wrap flex-col'>
                    <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
                        <p className='font-bold'>Place:</p>
                        <p>{data?.loc?.locationName}</p>
                    </div>
                    <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
                        <p className='font-bold'>Details:</p>
                        <p className='text-left'>{data?.loc?.Description}</p>
                    </div>
                    <div className='flex flex-wrap text-white pt-3 text-center gap-14'>
                        <p className='font-bold'>Date:</p>
                        <p>{new Date(data?.response?.Date).toLocaleDateString()}</p>
                    </div>
                    <div className='flex flex-wrap text-white pt-3 text-center gap-3'>
                        <p className='font-bold'>No of days:</p>
                        <p>{data?.response?.Noofdays}</p>
                    </div>
                    <div className='flex flex-wrap text-white pt-3 text-center gap-10'>
                        <p className='font-bold'>Total price:</p>
                        <p>{data?.response?.total}</p>
                    </div>
                    {data?.response?.Status !== 'Accepted' && (
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-wrap text-white pt-2 text-center gap-8 justify-center'>
                                <button type="button" onClick={() => handleSubmit('Accepted')} className='text-green-500'>Accept</button>
                                <button type="button" onClick={() => handleSubmit('Rejected')} className='text-red-500'>Reject</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
