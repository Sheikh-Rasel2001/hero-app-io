import React from 'react';
import Banner from './Banner';
import TrendingApps from './TrendingApps/TrendingApps';

const appsPromise = fetch('/apps.json').then(res => res.json());

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <TrendingApps appsPromise={appsPromise}></TrendingApps>
        </div>
    );
};

export default Home;