import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Header/Navbar';

const Root = () => {
    return (
        <div className='roboto-condensed'>
            <Navbar></Navbar>
            <div className='pt-20 mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;