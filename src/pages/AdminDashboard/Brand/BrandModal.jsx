import React from 'react';

export default function BrandModal() {
    return (
        <div>
            <input type="checkbox" id="addBrand" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-teal-800">
                    {/* The button to close modal */}
                    <label htmlFor="addBrand" className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-500 text-white border-red-500">✕</label>
                    {/* modal title  */}
                    <h3 className="font-bold text-2xl text-center uppercase">ADD NEW brand</h3>

                    {/* modal body  */}
                    <form className="flex flex-col gap-4 items-center justify-center mt-8">
                        <input type="text" placeholder="brand name"
                            className="input input-bordered w-full max-w-xs placeholder:capitalize bg-transparent" />
                        <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs bg-transparent" />
                    </form>

                    <div className="modal-action">
                        <label htmlFor="addBrand" className="btn uppercase bg-teal-700 border-teal-700">cancel</label>
                        <label htmlFor="addBrand" className="btn uppercase bg-teal-700 border-teal-700 px-8">add Brand</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
