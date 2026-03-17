import React, { use } from 'react';
import { CiSearch } from "react-icons/ci";
import AppCard from './AppCard/AppCard';

const Apps = ({promiseApps}) => {
    const allApps = use(promiseApps);
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='text-center my-8'>
                <h1 className='text-4xl font-bold mb-2 text-[#001931]'>Our All Applications</h1>
                <p className='text-sm text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            {/* search button */}
            <div className='flex flex-col-reverse lg:justify-between items-center lg:flex-row mb-6'>
                <div>
                    <p>({allApps.length}) App Found</p>
                </div>
                <div className='relative'>
                    <input type="search" name="search" placeholder='Search Apps' className='border rounded-lg py-1 pl-8' />
                    <CiSearch className='absolute top-2 left-3' />
                </div>
            </div>
            {/* all apps */}
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 px-4 mb-10'>
                {
                    allApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default Apps;