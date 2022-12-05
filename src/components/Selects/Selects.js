import React from 'react'
import './Selects.css'
import DestinationData from '../Destinations/DestinationData'
import {useNavigate} from 'react-router-dom'
function Selects() {
    const Navigate = useNavigate();
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
    {DestinationData && DestinationData.map((object,index)=>{
        return(
            <div className='relative h-[280px] rounded-md cursor-pointer select_container' key={index} onClick={()=>{
                Navigate(`/more-details/${index}`)
            }}>
                <img className='w-full h-full object-fill rounded-md' src={object.Image} alt="great" />
                <div className='bg-gray-900/30 w-full h-full top-0 left-0 absolute rounded-md'>
                    <p className='left-4 bottom-4 text-xl text-white absolute font-bold'>{object.Name}</p>
                </div>
            </div>
        );
    })}
    </div>
  )
}

export default Selects