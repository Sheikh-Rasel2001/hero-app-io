import React from 'react';
import downloadIcon from '../../../assets/icon-downloads.png';
import rattingIcon from '../../../assets/icon-ratings.png'

const AppCard = ({app}) => {
    const {image, title, ratingAvg, downloads} = app;
    return (
        <div className='bg-white border-gray-200 hover:shadow-xl p-4 rounded-lg space-y-4'>
                    <div className='w-full rounded-lg'>
                        <img src={image} alt={title} className='w-full object-cover rounded-xl'/>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-[#001931] font-semibold'>{title}</h3>
                        <div className='flex justify-between items-center'>
                            <span className='flex items-center gap-1 px-2 py-1 text-sm bg-gray-200 text-green-600 rounded-lg'><img src={downloadIcon} alt="DownLoad Icon" className='w-3 h-3'/>{downloads}M</span>
                            <span className='flex items-center gap-1 text-sm px-2 py-1 bg-[#fff0e1] rounded-lg text-orange-400'><img src={rattingIcon} alt="Ratting Icon" className='w-3 h-3'/>{ratingAvg}</span>
                        </div>
                    </div>
                    
                </div>
    );
};

export default AppCard;