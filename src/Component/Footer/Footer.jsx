import React from 'react';
import { Link } from 'react-router';
import image from '../../assets/logo.png'
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-[#001931]'>
            <div className='max-w-6xl mx-auto p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-b-gray-400'>
                {/* logo and description */}
                <div>
                    <Link to='/'>
                        <div className='flex gap-1 items-center'>
                            <img src={image} alt="Hero App" className='w-10 h-10 object-cover' />
                            <h3 className='text-xl font-bold text-bg'>Hero.AppStore</h3>
                        </div>
                    </Link>
                    <p className='text-gray-300 mt-4'>Discover powerful apps that make your daily life easier. Hero App Store helps you explore trending applications, check ratings, and find the best tools for productivity, learning, and entertainment — all in one place.</p>
                </div>
                {/* links */}
                <div className='grid grid-cols-2'>
                    <div className='text-gray-300 space-y-4 grid grid-cols-1'>
                        <h3 className='font-semibold text-gray-100'>Hero Play</h3>
                        <Link className='text-sm' to='/'>Play Pass</Link>
                        <Link className='text-sm' to='/'>Play Point</Link>
                        <Link className='text-sm' to='/'>Gift Card</Link>
                        <Link className='text-sm' to='/'>Redeem</Link>
                        <Link className='text-sm' to='/'>Refund Policy</Link>
                    </div>
                    {/* kids and family */}
                    <div className='text-gray-300 gap-3 grid grid-cols-1'>
                        <h3 className='font-semibold text-gray-100'>Kid's & Family</h3>
                        <Link className='text-sm' to='/'>Parent Guide</Link>
                        <Link className='text-sm' to='/'>Family Sharing</Link>
                        <Link className='text-sm' to='/'>Kid's Play</Link>

                    </div>
                </div>
            </div>
            {/* terms and conditions */}
            <div className='max-w-6xl mx-auto py-8 px-10 flex justify-between items-center flex-col lg:flex-row gap-3'>
                <div className='text-gray-200 flex justify-center gap-3 flex-col lg:flex-row'>
                    <Link className='text-sm' to='/'>Terms of Service</Link>
                    <Link className='text-sm' to='/'>Privacy</Link>
                    <Link className='text-sm' to='/'>About Hero Play</Link>
                    <Link className='text-sm' to='/'>Developer</Link>
                    <Link className='text-sm' to='/'>Hero Store</Link>
                </div>
                {/* copyright */}
                <div className='text-gray-400'>
                    <p className='flex items-center gap-1'><FaRegCopyright />{new Date().getFullYear()} Hero App Store. All rights reserved.</p>
                </div>

            </div>

        </div>
    );
};

export default Footer;