import React from 'react';
import ServiceMasterModal from './ServiceMasterModal';

export default function ServiceMaster() {
    return (
        <section>
            <div className="flex items-center justify-between mb-5 mx-5">
                <label htmlFor="serviceMasterModal" className="btn uppercase">ADD servioce</label>
                <div className="flex flex-row gap-2">
                    <input type="text" placeholder="search here" className="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-primary">search</button>
                </div>
            </div>
            <ServiceMasterModal />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service Type</th>
                            <th>Service Name</th>
                            <th>Service Provide</th>
                            <th>Price</th>
                            <th>option</th>
                            {/* <th>view</th>
                            <th>edit</th>
                            <th>remove</th> */}
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
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};
