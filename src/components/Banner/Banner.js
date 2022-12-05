import { Search } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import beachVideo from '../videos/vidi.mp4'

function Banner() {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachVideo} autoPlay loop muted />
        <div className='w-full h-full absolute bg-gray-900/30 top-0 left-0'></div>
        <div className='w-full h-full absolute top-0 left-0 text-white py-4 text-center flex flex-col justify-center px-2'>
            <h1>Get to know</h1>
            <h2>the beauty of adventure</h2>

            <form className='flex justify-between items-center max-w-[700px] mx-auto my-4 w-full border p-1 rounded-md text-black bg-gray-100/90'>
                <div className='mx-2'>
                    <input className="bg-transparent w-[150px] md:w-[400px] xl:w-[500px] focus:outline-none" type='text' placeholder='Search destinations ...' />
                </div>
                <div>
                    <Button><Search /></Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Banner