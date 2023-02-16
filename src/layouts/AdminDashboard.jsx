import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../pages/AdminDashboard/DashboardNav'

export default function AdminDashboard() {
    return (
        <section>
            <DashboardNav />
            <div className="w-4/5">
                <Outlet />
            </div>
        </section >
    )
}
