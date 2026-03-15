import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../MainLayout/Root';
import App from '../App';
import Apps from '../Pages/Apps/Apps';
import Installs from '../Pages/Installs/Installs';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: App },
            {
                path: 'apps',
                Component: Apps
            },
            {
                path: 'installs',
                Component: Installs
            }
        ]
    }
])