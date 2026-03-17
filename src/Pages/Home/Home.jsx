import React from 'react';
import Banner from './Banner';
import TrendingApps from './TrendingApps/TrendingApps';

const Home = ({promiseApps}) => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <TrendingApps promiseApps={promiseApps}></TrendingApps>
        </div>
    );
};

export default Home;