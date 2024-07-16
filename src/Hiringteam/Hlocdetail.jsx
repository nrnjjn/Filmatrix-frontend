import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Hlocdetail = () => {
const [data,setData]=useState([''])
let id2=localStorage.getItem('id')
const [data1,setData1]=useState('')
const [data3,setData3]=useState([''])

let handleChange=(event)=>{
  setData1({...data1,[event.target.name]:event.target.value})
  console.log(data);
    console.log(data1.Noofdays);
    // let totalamt=data1.Noofdays*data.Priceperday
    // console.log(totalamt);
    // setData4(totalamt)
    // if (event.target.name === 'Noofdays' || event.target.name === 'Priceperday') {
    //   let totalamt = parseInt(data1.Noofdays) * parseInt(data[0].Priceperday);
    //   setData4(totalamt);
    // }
}


const navigate=useNavigate()
let handleSubmit=async (event)=>{
  event.preventDefault()
  setData1(data1)
  console.log(data1);
  navigate('/hiring/hfclocst')
  let response=await axios.post('https://filmatrix.onrender.com/hiringteam/locreq',{...data1,hiringId:id2,locationId:id,total:data1.Noofdays * data.Priceperday})
       console.log(response);
  // navigate('/hiring/hfclocst')
} 

const currentDate = new Date().toISOString().split('T')[0];

let {id}=useParams()
console.log(id);
useEffect(()=>{
  let fetchdata=async ()=>{
    let response=await axios.get(`https://filmatrix.onrender.com/filmcompany/viewlocd/${id}`)
    let responss=await axios.get(`https://filmatrix.onrender.com/filmcompany/viewlocfname/${id2}`)
    setData(response.data)
    setData3(responss.data)   
  }
  fetchdata()
},[])
console.log(data3);

  return (
    <div className='fcvloc pt-32'>
      <div className='bg-slate-950/50 w-[60%] h-[470px] m-auto  gap-2 '>
        <div className='flex'>
            <img src={ `https://filmatrix.onrender.com/uploads/${data?.Image}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <img src={ `https://filmatrix.onrender.com/uploads/${data?.Image2}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            </div>
            <div className='flex gap-5 pb-3'>  
            <img src={ `https://filmatrix.onrender.com/uploads/${data?.Image3}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>

            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-12 pt-2 text-center'>
           <p className='font-bold'>Place:</p>
            <p>{data.locationName}</p>
            </div>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
           <p className='font-bold'>Details:</p>
            <p className='text-left'> {data.Description}</p>
            </div>
                               
             <form onSubmit={handleSubmit}>
            
              <div className='flex flex-wrap text-white pt-3 text-center gap-16'>
              <p className='font-bold'>Date:</p>
              <input name='Date' min={currentDate} onChange={handleChange} type="date"  className='bg-transparent border-2 rounded w-48' />
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-4'>
                <p className='font-bold'>No of days:</p>
                <input type="number" onChange={handleChange} value={data1.Noofdays} name='Noofdays' className='bg-transparent border-2 rounded' />
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-4'>
                <p className='font-bold'>Price per day:</p>
                <p>{  data.Priceperday}</p>
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-4'>
                <p className='font-bold'>Total amount:</p>
                <p>{ data1.Noofdays * data.Priceperday}</p>
            </div>
            <select onChange={handleChange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-2 mt-3'  name="Filmname" >
              <option value="">select</option>
        
         {data3.map((item)=>(
          <option  value={item.anc?._id}>
            {item.anc?.Filmname}
          </option>
         ))}

           </select>
            <div className='flex flex-wrap text-white pt-2 text-center gap-8 justify-center'>
                <button type='submit' className=' ps-1 pe-1 h-8 text-yellow-200'>Send Request</button>
              
            </div>
            </form>
                                 <div>
                      </div>
        
            
            </div>
        </div>  </div> 
    </div>
  )
}
