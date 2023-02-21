import React from 'react';

export default function Brand() {
    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>signup date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
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

            <form action="">
                <h1>Add a brand</h1>
                {/* brand name  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text capitalize">Brand name</span>
                    </label>
                    <input type="text" placeholder="Brand Name" className="input input-bordered w-full max-w-xs" />
                </div>

                {/* model name  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text capitalize">model name</span>
                    </label>
                    <input type="text" placeholder="Model Name" className="input input-bordered w-full max-w-xs" />
                </div>
            </form>
        </section>
    );
};
