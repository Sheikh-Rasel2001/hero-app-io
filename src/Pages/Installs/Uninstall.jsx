import React from 'react';
import download from '../../assets/icon-downloads.png';
import ratting from '../../assets/icon-ratings.png';

const Uninstall = ({ apps }) => {
    const { image, title, downloads, ratingAvg, size } = apps;

    return (
        <div className='w-full h-24 rounded-lg px-6 py-2 shadow-2xl bg-white flex justify-between items-center'>
            <div className='flex gap-6'>
                <div>
                    <img src={image} alt={title} className='w-20 h-20 rounded-lg' />
                </div>
                <div className='py-2'>
                    <h3 className='mb-2 text-xl font-semibold text-[#001931]'>{title}</h3>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-1'>
                            <img src={download} alt="Download" className='w-4 h-4' />
                            <p className='text-lg text-green-600'>{downloads}M</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={ratting} alt="" className='w-4 h-4' />
                            <p className='text-lg text-[#FF8811]'>{ratingAvg}</p>
                        </div>
                        <div>
                            <p className='text-gray-500 text-lg'>{size}MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div><button className='btn btn-primary'>uninstall</button></div>
        </div>
    );
};

export default Uninstall;