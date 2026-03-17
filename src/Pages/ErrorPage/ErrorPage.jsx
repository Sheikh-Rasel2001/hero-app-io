import React from 'react';
import errorImage from '../../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='py-10 w-2/3 mx-auto'>
                <div className='w-96 mx-auto'>
                    <img src={errorImage} alt="Error Page" className='w-full'/>
                </div>
                <div className='mt-10 text-center space-y-2'>
                    <h1 className='text-4xl text-[#001931] font-bold'>Oops, page not found!</h1>
                    <p className='text-gray-400'>The page you are looking for is not available.</p>
                    <Link to='/'>
                        <button className='btn-bg px-5 py-2 text-white font-semibold rounded-lg cursor-pointer'>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;