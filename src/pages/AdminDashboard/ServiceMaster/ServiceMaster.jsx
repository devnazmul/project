import React from 'react';
import ServiceMasterModal from './ServiceMasterModal';

export default function ServiceMaster() {
    return (
        <section>
            <div className="flex items-center justify-between mb-5 mx-5">
                {/* The button to open modal */}
                <label htmlFor="serviceMasterModal" className="btn uppercase bg-teal-800 border-teal-700 text-white">ADD a new service</label>

                {/* search box  */}
                <div className="flex flex-row gap-2">
                    <input type="text" placeholder="search here" className="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-primary">search</button>
                </div>
            </div>
            <ServiceMasterModal />
        </section>
    );
};
