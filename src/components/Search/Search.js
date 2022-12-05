import { ContactMail, LocationCity } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import './Search.css'
function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>Makuti villa</h2>
                <p className='py-4'>PVM is a type of software tool which is designed for heterogeneous distributed computing. This software was 
                created at the Oak Ridge National Laboratory in 1989 and it was rewritten in 1991 at the university of Tennessee. 
                In this system, it allows a heterogeneous network which can be made from a collection of distributed processors 
                which is viewed as a single parallel virtual machine. It permits a collection of heterogeneous UNIX and/or Windows 
                machines which can be used a single large parallel computer. It uses simple languages like C/C++, FORTRAN to 
                implement parallel computing.</p>
            </div>

            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row'>
                    <Button style={{ textTransform: 'inherit', marginRight: '10px', color: '#111827', backgroundColor: "#75ADB7" }}><LocationCity style={{ marginRight: '10px' }} />Location</Button>
                    <div>
                        <h3 className='py-1'>Nairobi</h3>
                        <h4 className='py-1'>Kenya</h4>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row'>
                    <Button style={{ textTransform: 'inherit', marginRight: '10px', color: '#111827', backgroundColor: "#75ADB7" }}><ContactMail style={{ marginRight: '10px' }} /> Contacts</Button>
                    <div>
                        <h5 className='py-1'>Email: makuti@gmail.com</h5>
                        <h5 className='py-1'>Phone: +254756845613</h5>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='border text-center'>
                <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>

            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label>Destination</label>
                    <select className='border py-2 rounded-md'>
                        <option>Grande Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>

                <div className='flex flex-col my-4'>
                    <label>Check-In</label>
                    <input className='border py-2 rounded-md' type='date'></input>
                </div>

                <div className='flex flex-col my-2'>
                    <label>Check-Out</label>
                    <input className='border py-2 rounded-md' type='date'></input>
                </div>

                <Button variant='outlined' style={{ textTransform: 'inherit', color: '#111827', border: '1px solid #111827' }} className='rates_availability'>Book</Button>
            </form>
        </div>
    </div>
  )
}

export default Search