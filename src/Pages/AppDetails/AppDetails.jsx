import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png';
import ratting from '../../assets/icon-ratings.png';
import reviewsImage from '../../assets/icon-review.png';

const AppDetails = () => {
    const { id } = useParams()
    const appDetails = useLoaderData();
    const appData = appDetails.find(app => app.id === parseInt(id));
    const { image, title, companyName, downloads, ratingAvg, reviews, size } = appData;
    // console.log(appData);
    const details = [
        { _id: 1, img: download, name: 'Downloads', overView: downloads, total: 'M' },
        { _id: 2, img: ratting, name: 'Ratting', overView: ratingAvg, total: '' },
        { _id: 1, img: reviewsImage, name: 'Reviews', overView: reviews, total: 'K'},
    ]
    return (
        <div className='max-w-6xl mx-auto my-10'>
            {/* apps details */}
            <div className='flex gap-8 flex-col lg:flex-row items-center lg:items-start'>
                {/* app image */}
                <div className='w-40 h-40 lg:h-64 lg:w-64'>
                    <img src={image} alt={title} className='w-full h-full rounded-lg' />
                </div>
                {/* details */}
                <div className='w-full lg:w-2/3 px-4'>
                    <div className='pb-6 border-b border-b-gray-300'>
                        <h1 className='text-3xl font-bold text-[#001931] mb-2'>{title}</h1>
                        <p className='text-gray-400'>Developed By <span className='text-bg font-semibold'>{companyName}</span></p>
                    </div>
                    {/* review ratting download */}
                    <div className='w-2/3 mt-5 flex gap-10 justify-center lg:justify-start items-center'>
                        {
                            details.map(detail => <div key={detail._id} className='space-y-1'>
                                <img src={detail.img} alt={detail.name} className='w-6 h-6 mx-auto lg:mx-0' />
                                <p className='text-xs lg:text-sm text-gray-400'>{detail.name}</p>
                                <h3 className='text-2xl text-[#001931] font-bold'>{detail.overView}{detail.total}</h3>
                            </div>)
                        }
                   </div>
                   {/* install button */}
                   <div className='mt-5'>
                        <button className='px-4 py-2 rounded-lg bg-[#00d390] text-gray-50'>Install Now ({size}MB)</button>
                   </div>
                </div>
            </div>

        </div>
    );
};

export default AppDetails;