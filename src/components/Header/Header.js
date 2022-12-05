import { Close, Facebook, Instagram, LinkedIn, Menu, Person, Search, Twitter, WhatsApp } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom'
function Header() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    useEffect(() => {
        const allLi = document.querySelector('.close-li').querySelectorAll("li");
        function changeMenuActive() {
            allLi.forEach(n => n.classList.remove('mimo'));
            this.classList.add("mimo")
        }
        allLi.forEach( n => n.addEventListener('click', changeMenuActive))
    }, []);
    

    const Navigate = useNavigate();
  return (
    <div className={`flex w-full justify-between md:justify-evenly items-center h-20 px-4 absolute z-10 text-white ${show && "nav__black"}`}>
        <div className='cursor-pointer' onClick={()=>{
            Navigate('/')
        }}>
            <h1 className={nav ? 'hidden' : 'block'}>Simply.</h1>
        </div>

        <ul className='hidden md:flex close-li'>
            <li onClick={()=>{
                Navigate('/')
            }}>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>

        <div className='hidden md:flex'>
            <Search className='mr-2 cursor-pointer hover:text-gray-900' />
            <Person className='cursor-pointer hover:text-gray-900' />
        </div>

        {/* Mobile menu drop down */}

        <div className='md:hidden z-10' onClick={handleNav}>
            {nav ? <Close /> : <Menu /> }
        </div>

        <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-900 px-4 py-7 flex flex-col transMe' : 'absolute left-[-100%] top-0 w-full bg-gray-900 px-4 py-7 flex flex-col transMe'}>
            <ul className='text-black'>
                <h1>Simply.</h1>
                <li className='border-b text-white' onClick={()=>{
                    Navigate('/')
                }}>Home</li>
                <li className='border-b text-white'>Destination</li>
                <li className='border-b text-white'>Travel</li>
                <li className='border-b text-white'>View</li>
                <li className='border-b text-white'>Book</li>

                <div className='flex flex-col'>
                    <Button variant='outlined' style={{ textTransform: 'inherit', color: 'white',border: '1px solid white', marginTop: '10px' }} className='header_button'>Search</Button>
                    <Button variant='outlined' style={{ textTransform: 'inherit', color: 'white', border: '1px solid white', marginTop: '10px' }} className='header_button'>Account</Button>
                </div>

                <div className='flex justify-between my-6'>
                    <Facebook className='text-blue-500 hover:text-white' />
                    <WhatsApp className='text-blue-500 hover:text-white' />
                    <Twitter className='text-blue-500 hover:text-white' />
                    <LinkedIn className='text-blue-500 hover:text-white' />
                    <Instagram className='text-blue-500 hover:text-white'/>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Header