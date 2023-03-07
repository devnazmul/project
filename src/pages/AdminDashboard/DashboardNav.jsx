import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { RiCoupon5Line } from "react-icons/ri";
import { CiCoffeeBean } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaCity, FaProjectDiagram, FaUsers } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { TbReportAnalytics } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  const [open, setOpen] = useState(true);
  const initialPath = "/admin/dashboard";

  const menus = [
    {
      id: 1,
      name: "user",
      link: "/admin/dashboard/user",
      icon: <AiOutlineUser />,
    },
    {
      id: 2,
      name: "Brand",
      link: "/admin/dashboard/brand",
      icon: <SiBrandfolder />,
    },
    {
      id: 3,
      name: "Order",
      link: "/admin/dashboard/order",
      icon: <FiShoppingCart />,
    },
    {
      id: 4,
      name: "Service Master",
      link: "/admin/dashboard/serviceMaster",
      icon: <TbReportAnalytics />,
    },
    {
      id: 5,
      name: "City Master",
      link: "/admin/dashboard/cityMaster",
      icon: <FaCity />,
    },
    {
      id: 6,
      name: "Coupon",
      link: "/admin/dashboard/coupon",
      icon: <RiCoupon5Line />,
    },
    {
      id: 7,
      name: "Offer",
      link: "/admin/dashboard/offer",
      icon: <CiCoffeeBean />,
    },
    {
      id: 8,
      name: "Membership Data",
      link: "/admin/dashboard/membershipData",
      icon: <FaUsers />,
    },
    {
      id: 9,
      name: "Policies Master",
      link: "/admin/dashboard/policiesMaster",
      icon: <FaProjectDiagram />,
    },
  ];

  return (
    <aside
      className={`bg-primary overflow-hidden h-full ${open ? "w-72" : "w-16"
        } duration-500 px-3 text-primary-content`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu) => (
          <NavLink
            key={menu.id}
            to={menu?.link}
            className={({ isActive }) =>
              `group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-primary-content hover:text-primary ${isActive && window.location.pathname !== initialPath
                ? "bg-secondary"
                : undefined
              } rounded-box`
            }
          >
            <div className="text-xl">{menu?.icon}</div>
            <h2
              className={`whitespace-pre duration-500  ${!open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
            >
              {menu?.name}
            </h2>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default DashboardNav;
