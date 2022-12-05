import React, {useEffect} from 'react'
import Destination from '../Destinations/Destination'
import Search from '../Search/Search'
import './MoreDetails.css'
import MoreImage from '../images/Screenshot 2022-07-22 002438.png'
function MoreDetails() {

     //Scroll to the top on load
        useEffect(()=>{
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        },[]);
    //End of Scroll to the top on load
  return (
    <div className='w-full'>
        <div className='w-full h-[300px] m-0 p-0 bg-gray-600 relative'>
            <img className='w-full h-full object-cover' src={MoreImage} alt='more' />
            <div className='absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-center'>
                <p className=''>Makuti villa</p>
            </div>
        </div>
        <Destination />
        <Search />
    </div>
  )
}

export default MoreDetails