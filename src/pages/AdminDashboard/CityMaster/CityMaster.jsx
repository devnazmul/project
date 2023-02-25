import React from 'react';
import CityMasterModal from './CityMasterModal';

export default function CityMaster() {
    return (
        <div className="">
            {/* The button to open modal */}
            <label htmlFor="addCity" className="btn mb-4 bg-teal-800 border-teal-700 text-white">Add a new City</label>

            {/* Put this part before </body> tag */}
            <CityMasterModal />
        </div>
    );
};
