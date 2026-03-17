import React, { use } from 'react';
import TrendApp from './TrendApp';
import './Trend.css';
import { Link } from 'react-router';

const TrendingApps = ({ promiseApps }) => {
    const apps = use(promiseApps);
    // console.log(apps);
    const homeApps = apps.slice(0, 8);
    return (
        <div className='max-w-5xl mx-auto mb-10'>
            <div className='text-center space-y-3'>
                <h1 className='text-4xl font-bold text-[#001931]'>Trending Apps</h1>
                <p className='text-sm text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4 px-4'>
                {
                    homeApps.map(app => <TrendApp app={app} key={app.id}></TrendApp>)
                }
            </div>
            <div className='mt-10 flex justify-center items-center'>
                <Link to='/'>
                    <button className='btn-bg px-5 py-2 text-white font-semibold rounded-lg cursor-pointer'>Show All</button>
                </Link>
            </div>

        </div>
    );
};

export default TrendingApps;