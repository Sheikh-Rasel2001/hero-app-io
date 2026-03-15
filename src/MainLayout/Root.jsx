import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Header/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-20'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;