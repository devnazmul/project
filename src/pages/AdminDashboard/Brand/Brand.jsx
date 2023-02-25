import React from 'react';
import BrandModal from './BrandModal';

export default function Brand() {



    return (
        <section>
            {/* The button to open modal */}
            <label htmlFor="addBrand" className="btn mb-4 bg-teal-800 border-teal-700 text-white">Add Brand</label>

            {/* Put this part before </body> tag */}
            <BrandModal />


        </section>
    );
};
