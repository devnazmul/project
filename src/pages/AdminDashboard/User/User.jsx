import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

export default function User() {
    // const { data } = useQuery('allUser', () =>
    //     axios.get('https://bikefixup-backend.vercel.app//api/v1/dashboard/user/read')
    //         .then(result => {
    //             const data = result.data;
    //             console.log(data);
    //         })
    // )
    // console.log(data);

    useEffect(() => {
        fetch('https://bikefixup-backend.vercel.app//api/v1/dashboard/user/read')
            .then(res => res.json())
            .then(result => {
                // const data = result.data;
                console.log(result);
            })
    }, []);



    return (
        <div className="">

        </div>
    );
};
