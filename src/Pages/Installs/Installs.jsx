import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Uninstall from './Uninstall';
import SearchError from '../Apps/AppCard/SearchError';
import { toast } from 'react-toastify';

const Installs = () => {
    const allApps = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const storedAppsId = JSON.parse(localStorage.getItem('installedApps')) || [];
        const filteredApps = allApps.filter(app => storedAppsId.includes(app.id));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInstalledApps(filteredApps)
    }, [allApps]);

    // handle uninstall 
    const handleUninstall = (id) => {
        const storedId = JSON.parse(localStorage.getItem('installedApps')) || [];
        const updateId = storedId.filter(appId => appId !== id);
        const remainingApp = JSON.stringify(updateId);
        localStorage.setItem('installedApps', remainingApp);

        setInstalledApps((prev => prev.filter(app => app.id !== id)));
        toast('Apps Uninstall Successfully');
    }

    // handle sort 
    const [sort, setSort] = useState('');
    const handleSort = (e) => {
        const sortValue = e.target.value;
        setSort(sortValue);

        if (!sortValue) return;

        const sorted = [...installedApps];

        if (sort === 'low') {
            sorted.sort((a, b) => b.size - a.size)
        }
        else if (sort === 'high') {
            sorted.sort((a, b) => a.size - b.size)
        }
        setInstalledApps(sorted);
    }

    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='text-center mb-6'>
                <h1 className='text-4xl text-[#001931] font-bold mb-2 px-4 lg:px-0'>Your Installed Apps</h1>
                <p className='text-gray-500 px-2 text-sm lg:text-lg'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* sort */}
            <div className='flex justify-between items-center mb-4 px-4'>
                <p className='text-[#001931] text-lg'>{installedApps.length} Apps Found</p>
                <div>
                    <select onChange={handleSort} className='px-3 py-1 rounded-lg text-lg text-gray-500 bg-white shadow-2xl'>
                        <option value="">Sort By</option>
                        <option value="low">Low-High</option>
                        <option value="high">High-Low</option>
                    </select>
                </div>
            </div>
            {/* installed apps */}
            <div className='space-y-4 px-2'>
                {
                    installedApps.length === 0 ?
                        <SearchError></SearchError> :
                        installedApps.map(apps => <Uninstall handleUninstall={handleUninstall} key={apps.id} apps={apps}></Uninstall>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/apps'>
                <button className='btn btn-bg text-white text-lg font-semibold rounded-lg'>All Apps</button>
                </Link>
            </div>
        </div>
    );
};

export default Installs;