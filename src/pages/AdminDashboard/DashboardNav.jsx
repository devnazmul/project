import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DashboardNav() {
    const sidebarList = [
        {
            _id: 1,
            path: '#',
            navName: 'user'
        },
        {
            _id: 2,
            path: '#',
            navName: 'brand'
        },
        {
            _id: 3,
            path: '#',
            navName: 'order'
        },
        {
            _id: 4,
            path: '#',
            navName: 'service master'
        },
        {
            _id: 5,
            path: '#',
            navName: 'state master'
        },
    ]

    return (
        <>
            <div className="my-4">hey admin i am here</div>
            <ul
                className="flex flex-col gap-2"
            >
                {
                    sidebarList.map(sidebar =>
                        <li>
                            <NavLink to={"#"}
                                className={(navData) => `${navData.isActive ? 'bg-pink-500' : 'bg-white'} w-full rounded-lg transition-all duration-200 hover:text-white hover:bg-[#83e9fb] hover:bg-opacity-50 hover:translate-x-2 shadow-md border-l border-t border-white py-2 px-3  bg-opacity-40 inline-block`}
                            >
                                {sidebar.navName}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </>
    )
}
