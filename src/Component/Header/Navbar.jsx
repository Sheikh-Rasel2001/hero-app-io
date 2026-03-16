import React, { useState } from 'react';
import image from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { FaBars, FaGithub } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import './Navbar.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className='w-full fixed top-0 left-0 z-50 bg-gray-100 shadow-lg py-3'>
            <nav className='flex justify-between items-center max-w-11/12 mx-auto'>
                {/* logo and app name */}
                <Link to='/'>
                <div className='flex gap-1 items-center'>
                    <img src={image} alt="Hero App" className='w-10 h-10 object-cover' />
                        <h3 className='text-xl font-bold text-bg'>Hero.AppStore</h3>
                </div>
                 </Link>

                {/* menu item */}
                <div className='hidden lg:flex gap-4 text-lg font-semibold'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/apps'>Apps</NavLink>
                    <NavLink to='/installs'>Installation</NavLink>
                </div>

                {/* github link button */}
                <div>
                    <a href="https://github.com/Sheikh-Rasel2001" target="_blank" rel="noopener noreferrer" className=''>
                        <button className='hidden lg:flex lg:items-center lg:gap-1 px-4 pt-2 pb-2 text-white text-lg btn-bg rounded-lg font-semibold cursor-pointer'><FaGithub />Contribute</button>
                    </a>
                </div>

                {/* mobile toggle */}
                <div className='lg:hidden'>
                    {
                        showMenu ? <ImCross onClick={() => setShowMenu(false)} className='text-xl font-semibold' /> : <FaBars onClick={() => setShowMenu(true)} className='text-xl' />
                    }
                </div>
            </nav>
            {/* mobile view menu */}
            <div className={`${showMenu ? 'translate-x-0' : '-translate-x-full'} fixed top-16 left-0 w-2/3 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden bg-gray-100 `}>
                <div className='flex flex-col p-6 gap-4 text-xl font-semibold'>
                    <NavLink onClick={() => setShowMenu(false)} to='/'>Home</NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/apps'>Apps</NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/installs'>Installation</NavLink>
                    <a href="https://github.com/Sheikh-Rasel2001" target="_blank" rel="noopener noreferrer">
                        <button className='flex items-center gap-1 px-4 pt-2 pb-2 text-white text-lg btn-bg rounded-lg font-semibold'><FaGithub />Contribute</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;