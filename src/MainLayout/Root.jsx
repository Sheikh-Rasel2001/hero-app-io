import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Header/Navbar';
import Footer from '../Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='roboto-condensed bg-gray-100'>
            <Navbar></Navbar>
            <div className='pt-20 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;