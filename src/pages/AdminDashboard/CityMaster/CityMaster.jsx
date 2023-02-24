import React from 'react';

export default function CityMaster() {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full ">
                {/* <!-- head --> */}
                <thead className="">
                    <tr className='bg-white'>
                        <th className='bg-teal-700 text-white'></th>
                        <th className='bg-teal-700 text-white'>City Name</th>
                        <th className='bg-teal-700 text-white'>State Name</th>
                        <th className='bg-teal-700 text-white'>Service Status</th>
                    </tr>
                </thead>
                <tbody className="">
                    {/* <!-- row 1 --> */}
                    <tr>
                        <th className='bg-teal-600 text-white'>1</th>
                        <td className='bg-teal-600 text-white'>kolkata</td>
                        <td className='bg-teal-600 text-white'>Kolkata</td>
                        <td className='bg-teal-600 text-white'>not available</td>
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr className="hover">
                        <th className='bg-teal-600 text-white'>2</th>
                        <td className='bg-teal-600 text-white'>kolkata</td>
                        <td className='bg-teal-600 text-white'>Kolkata</td>
                        <td className='bg-teal-600 text-white'>not available</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
