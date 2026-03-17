import React from 'react';
import appError from '../../../assets/App-Error.png';
import { Link } from 'react-router';


const SearchError = () => {
    return (
        <div>
            <div className='w-2/3 mx-auto'>
                <div className='w-48 mx-auto p-5'>
                    <img src={appError} alt="App Error" className='w-full' />
                </div>
                <div className='mt-3 text-center'>
                    <h1 className='font-bold text-3xl text-[#001931] mb-1'>Oops! Apps Not Found</h1>
                    <p className='text-xs text-gray-400 mb-3'>The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to='/'>
                        <button className='btn-bg px-5 py-2 text-white font-semibold rounded-lg cursor-pointer'>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchError;