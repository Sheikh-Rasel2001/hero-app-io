import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = ({ ratings }) => {
    return (
        <div className='w-full h-64'>
            <ResponsiveContainer>
                <BarChart
                    layout='vertical'
                    data={ratings}
                    margin={{ top: 10, left: 20, right: 20, bottom: 10 }}
                >
                    <XAxis type='number'></XAxis>
                    <YAxis dataKey='name' type='category'></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey='count' fill='#8884d8'></Bar>
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Rechart;