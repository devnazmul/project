import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../pages/AdminDashboard/DashboardNav'

export default function AdminDashboard() {
    return (
        <section className='flex flex-row gap-6'>
            <DashboardNav />
            <div className="w-full py-8 pr-6">
                <Outlet />
            </div>
        </section >
    )
}
