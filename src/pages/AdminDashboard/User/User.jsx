import React from 'react'

export default function User() {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>mobil number</th>
                        <th>state</th>
                        <th>city</th>
                        <th>role</th>
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
                        <td>name</td>
                        <td>email</td>
                        <td>mobile number</td>
                        <td>state</td>
                        <td>city</td>
                        <td>admin</td>
                        <td>date</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
