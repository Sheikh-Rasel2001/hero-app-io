import React from 'react';
import './Banner.css';
import imagePlay from '../../assets/fi_16076057.png';
import imageApp from '../../assets/fi_5977575.png';
import heroImage from '../../assets/hero.png';
import BuiltApps from './BuiltApps';

const Banner = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className='text-4xl lg:text-6xl font-bold text-[#001931]'>We Build</h1>
                <h1 className='text-4xl lg:text-6xl font-bold text-[#001931] mb-5'><span className='text-bg bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='max-w-4xl mx-auto text-gray-400 mb-8 px-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                {/* button */}
                <div className='flex flex-col justify-center items-center lg:flex-row gap-5 mb-10'>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button className='flex items-center gap-2 px-4 py-2 border rounded-lg border-gray-400 font-semibold cursor-pointer'>
                            <img src={imagePlay} alt="Google Play" className='w-8 h-8'/>
                            <span className='text-lg text-[#001931]'>Google Play</span>
                        </button>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button className='flex items-center gap-2 px-4 py-2 border rounded-lg border-gray-400 font-semibold cursor-pointer'>
                            <img src={imageApp} alt="App Store" className='w-8 h-8'/>
                            <span className='text-lg text-[#001931]'>App Store</span>
                        </button>
                    </a>
                </div>
                {/* banner image */}
                <div className='max-w-2xl mx-auto px-4'>
                    <img src={heroImage} alt="Hero image" className='w-full'/>
                </div>
                <BuiltApps></BuiltApps>
            </div>
        </div>
    );
};

export default Banner;