import React, {useEffect} from 'react'
import Banner from '../Banner/Banner'
import Carousel from '../Carousel/Carousel'
import Selects from '../Selects/Selects'
import './Home.css'
function Home() {
     //Scroll to the top on load
        useEffect(()=>{
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        },[]);
    //End of Scroll to the top on load
  return (
    <div className='home-container'>
        <Banner />
        <Selects />
        <Carousel />
    </div>
  )
}

export default Home