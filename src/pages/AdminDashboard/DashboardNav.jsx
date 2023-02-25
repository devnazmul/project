import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

const DashboardNav = () => {
    const [open, setOpen] = useState(true);

    const menus = [
        { id: 1, name: "user", link: "/admin/dashboard", icon: <AiOutlineUser /> },
        { id: 2, name: "Brand", link: "/admin/dashboard/brand", icon: <FiMessageSquare /> },
        { id: 3, name: "Order", link: "/admin/dashboard/order", icon: <FiShoppingCart /> },
        { id: 4, name: "Service Master", link: "/admin/dashboard/serviceMaster", icon: <TbReportAnalytics /> },
        { id: 5, name: "City Master", link: "/admin/dashboard/cityMaster", icon: <FiFolder /> },
    ];

    return (
        <aside
            className={`bg-teal-600 h-full ${open ? "w-72" : "w-16"
                } duration-500 text-gray-100 px-4`}
        >
            <div className="py-3 flex justify-end">
                <HiMenuAlt3
                    size={26}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {
                    menus?.map((menu) => (
                        <NavLink
                            key={menu.id}
                            to={menu?.link}
                            className={`group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-teal-900 rounded-md`}
                        >
                            <div className="text-xl">
                                {menu?.icon}
                            </div>
                            <h2
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                        </NavLink>
                    ))
                }
            </div>
        </aside>
    );
};

export default DashboardNav;
