import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Uninstall from './Uninstall';

const Installs = () => {
    const allApps = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const storedAppsId = JSON.parse(localStorage.getItem('installedApps')) || [];
        const filteredApps = allApps.filter(app => storedAppsId.includes(app.id));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInstalledApps(filteredApps)
    }, [allApps]);

    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='text-center mb-6'>
                <h1 className='text-4xl text-[#001931] font-bold mb-2 px-4 lg:px-0'>Your Installed Apps</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* sort */}
            <div className='flex flex-col-reverse lg:flex-row lg:
            justify-between items-center mb-4'>
                <p className='text-[#001931] text-lg'>{installedApps.length} Apps Found</p>
                <div>sorted</div>
            </div>
            {/* installed apps */}
            <div className='space-y-4'>
                {
                    installedApps.length === 0 ? 
                    <p>Apps not found</p> :
                    installedApps.map(apps => <Uninstall key={apps.id} apps={apps}></Uninstall>)
                }
            </div>

        </div>
    );
};

export default Installs;