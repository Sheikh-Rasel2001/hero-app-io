import React from 'react';
import './Banner.css';

const BuiltApps = () => {
    return (
        <div className=' bg-apps'>
            <div className='max-w-2xl mx-auto py-10 px-4'>
                <h3 className='text-center text-3xl font-bold text-white mb-8'>Trusted by Millions, Built for You</h3>
                <div className='grid grid-cols-3 gap-4'>
                    <div>
                        <h5 className='mb-2 text-xs text-gray-400'>Total Downloads</h5>
                        <h1 className='text-4xl lg:text-5xl font-bold mb-2 text-white'>29.6M</h1>
                        <p className='text-xs text-gray-400'>21% more than last month</p>
                    </div>
                    <div>
                        <h5 className='mb-2 text-xs text-gray-400'>Total Reviews</h5>
                        <h1 className='text-4xl lg:text-5xl font-bold mb-2 text-white'>906K</h1>
                        <p className='text-xs text-gray-400'>46% more than last month</p>
                    </div>
                    <div>
                        <h5 className='mb-2 text-xs text-gray-300'>Active Apps</h5>
                        <h1 className='text-4xl lg:text-5xl font-bold mb-2 text-white'>132+</h1>
                        <p className='text-xs text-gray-300'>31 more will Launch</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BuiltApps;