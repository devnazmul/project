import React from 'react';

const Order = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Mobile Number</th>
                        <th>Service</th>
                        <th>Slot</th>
                        <th>Pickup require on not</th>
                        <th>Service Status</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>CC</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Map Location</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>Purple</td>
                        <td>Purple</td>
                        <td>Purple</td>
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>Red</td>
                        <td>Red</td>
                        <td>Red</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Order;
