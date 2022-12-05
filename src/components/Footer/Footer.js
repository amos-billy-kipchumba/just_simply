import React from 'react'
import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material'
import './Footer.css'
function Footer() {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] max-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1 className='text-black'>Simply.</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                    <Facebook className='text-blue-500 hover:text-black ease-in-out cursor-pointer' />
                    <WhatsApp className='text-blue-500 hover:text-black ease-in-out cursor-pointer' />
                    <Twitter className='text-blue-500 hover:text-black ease-in-out cursor-pointer' />
                    <LinkedIn className='text-blue-500 hover:text-black ease-in-out cursor-pointer' />
                    <Instagram className='text-blue-500 hover:text-black ease-in-out cursor-pointer'/>
                </div>
            </div>

            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Partnership</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                    <li>Careers</li>
                </ul>

                <ul className='text-right lg:flex'>
                    <li className='text-black'>Home</li>
                    <li className='text-black'>Destination</li>
                    <li className='text-black'>Travel</li>
                    <li className='text-black'>View</li>
                    <li className='text-black'>Book</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer