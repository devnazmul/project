import React from 'react';

export default function CityMasterModal() {
    return (
        <div>
            <input type="checkbox" id="addCity" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-teal-800 text-white">
                    {/* The button to close modal */}
                    <label htmlFor="addCity" className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-500 text-white border-red-500">✕</label>

                    {/* modal body  */}
                    <h3 className="font-bold text-2xl text-center uppercase">ADD NEW City</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                    <div className="modal-action">
                        <label htmlFor="addCity" className="text-white btn uppercase bg-teal-700 border-teal-700">cancel</label>
                        <label htmlFor="addCity " className="text-white btn uppercase bg-teal-700 border-teal-700 ">add city</label>
                    </div>
                </div>
            </div>
        </div>
    );
};