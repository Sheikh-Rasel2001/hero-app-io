import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../MainLayout/Root';
import App from '../App';
import Apps from '../Pages/Apps/Apps';
import Installs from '../Pages/Installs/Installs';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import logoIcon from '../assets/logo.png';

const promiseApps = fetch('/apps.json').then(res => res.json());

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            // root component
            {
                index: true,
                element: <Suspense fallback={
                    <div className='max-w-5xl mx-auto p-10 min-h-screen'>
                        <div className='w-2/3 mx-auto text-center'>
                            <h1 className='flex items-center text-3xl lg:text-4xl text-center font-bold text-gray-400 gap-2'>L <img src={logoIcon} alt="Logo" className='lg:w-9 lg:h-9 w-6 h-6 animate-spin [animation-duration-5s]' />o a d i n g</h1>
                        </div>
                    </div>
                }>
                    <App promiseApps={promiseApps}></App>
                </Suspense>
            },
            // apps pages
            {
                path: 'apps',
                element: <Suspense fallback={
                    <div className='max-w-5xl mx-auto p-10 min-h-screen'>
                        <div className='w-2/3 mx-auto text-center'>
                            <h1 className='flex items-center text-3xl lg:text-4xl text-center font-bold text-gray-400 gap-2'>L <img src={logoIcon} alt="Logo" className='lg:w-9 lg:h-9 w-6 h-6 animate-spin [animation-duration-5s]' />o a d i n g</h1>
                        </div>
                    </div>
                }>
                    <Apps promiseApps={promiseApps}></Apps>
                </Suspense>
            },
            {
                path: 'installs',
                element: <Installs></Installs>
            }
        ]
    }
])