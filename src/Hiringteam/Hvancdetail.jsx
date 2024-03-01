import React from 'react'
import img from '../Images/171.avif'
import { Link } from 'react-router-dom'
export const Hvancdetail = () => {
  return (
    <div className='pt-36 hviewanc'>
        <div className='bg-slate-950/50 w-[850px] h-[450px] m-auto flex gap-2 '>
            <img src={ img } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Film Name:</p>
            <p>Thalaivar 171</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Description:</p>
            <p className='text-left w-[60%]'>Thalaivar, also known as Rajnikanth,
             is a popular Indian actor and producer
              who has starred in numerous Tamil language films.
               His real name is Rajendra Kumar Sakthivelu,
                but he is better known by his stage name.
                 Thalaivar began his career as a child actor 
                 and has since become one of the most successful actors
                  in Tamil cinema. He is known for his powerful performances,
                   charisma, and action-packed roles.
                    Thalaivar's filmography includes over 200 films, 
            and he has won numerous awards and accolades throughout his career.</p>
            </div>
            
            <div className='flex flex-wrap justify-center '>
                <Link to='/hiring/hancst'><button className='text-yellow-400'>Apply</button></Link>
            </div>
            </div>
        </div>  
    </div>
  )
}
