import React from 'react';
import download from '../../assets/icon-downloads.png';
import ratting from '../../assets/icon-ratings.png';

const Uninstall = ({ apps, handleUninstall }) => {
    const { image, title, downloads, ratingAvg, size } = apps;

    return (
        <div className='w-full rounded-lg px-6 py-4 shadow-2xl bg-white flex justify-between items-center gap-2'>
            <div className='flex gap-4 lg:gap-6'>
                <div>
                    <img src={image} alt={title} className='w-16 h-16 lg:w-20 lg:h-20 rounded-lg' />
                </div>
                <div className='py-2'>
                    <h3 className='mb-1 lg:mb-2 text-sm lg:text-xl font-semibold text-[#001931]'>{title}</h3>
                    <div className='flex items-center gap-2 lg:gap-4'>
                        <div className='flex items-center gap-1'>
                            <img src={download} alt="Download" className='lg:w-4 lg:h-4 w-3 h-3' />
                            <p className='text-sm lg:text-lg text-green-600'>{downloads}M</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={ratting} alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                            <p className='text-sm lg:text-lg text-[#FF8811]'>{ratingAvg}</p>
                        </div>
                        <div>
                            <p className='text-gray-500 text-sm lg:text-lg'>{size}MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleUninstall(apps.id)} className='btn btn-primary'>Uninstall</button>
            </div>
        </div>
    );
};

export default Uninstall;