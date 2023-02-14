import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../pages/AdminDashboard/DashboardNav'

export default function AdminDashboard() {
    return (
        <section className="bg-gradient-to-l from-[#83e9fb] to-[#f591d2] px-5 py-5 md:px-10 md:py-10 h-screen"
        >
            <div className="profileLayoutGlass flex justify-center items-start overflow-hidden gap-5">
                <aside className="w-1/5 h-[90vh] profileDashboardAsideGlass px-5 py-5 relative">
                    <DashboardNav />
                </aside>
                <div className="w-4/5">
                    <div className="text-black pl-10 py-5 border-l border-t border-white z-50 rounded-3xl profileDashboardContainerGlass h-[90vh]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section >
    )
}
