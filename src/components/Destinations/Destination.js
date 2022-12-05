import React from 'react'
import './Destination.css'
import DestinationData from './DestinationData'
function Destination() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1 className='text-black'>All inclusive destinations</h1>
        <p className='text-black my-2'>On the Caribbean's best beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            {DestinationData && DestinationData.map((object,index)=>{
                return(
                    <img className='w-full h-[240px] object-cover first-of-type:h-full first-of-type:col-span-2 first-of-type:md:col-span-3 first-of-type:row-span-2 rounded-md' src={object.Image} alt="great" key={index} />
                );
            })}
        </div>
    </div>
  )
}

export default Destination