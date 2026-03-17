import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../MainLayout/Root';
import App from '../App';
import Apps from '../Pages/Apps/Apps';
import Installs from '../Pages/Installs/Installs';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const promiseApps = fetch('/apps.json').then(res => res.json());

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Suspense>
                    <App promiseApps={promiseApps}></App>
                </Suspense>
            },
            {
                path: 'apps',
                element: <Suspense>
                    <Apps promiseApps={promiseApps}></Apps>
                </Suspense>
            },
            {
                path: 'installs',
                Component: Installs
            }
        ]
    }
])