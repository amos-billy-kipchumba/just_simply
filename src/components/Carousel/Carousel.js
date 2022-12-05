import React, {useState} from 'react'
import './Carousel.css'
import DestinationData from '../Destinations/DestinationData'
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
function Carousel() {
    const [slide, setSlide] = useState(0);

    const length = DestinationData.length;

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    }

    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    }

  return (
    <div className='max-w-[1240px] md:w-[60%] mx-auto px-4 pb-16 relative justify-center items-center transCara'>
        <ArrowLeft onClick={prevSlide} className='absolute top-[50%] left-20 border rounded-full cursor-pointer text-white text-3xl bg-black/30' />
        <ArrowRight onClick={nextSlide} className='absolute top-[50%] right-20 border rounded-full cursor-pointer text-white text-3xl bg-black/30' />
        {DestinationData && DestinationData.map((object,index)=>{
            return(
                <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                    {index === slide && (<img className='w-full rounded-md h-[280px] md:h-[400px]' src={object.Image} alt={object.Name} />)}
                </div>
            );
        })}
    </div>
  )
}

export default Carousel