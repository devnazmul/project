import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiCoffeeBean } from "react-icons/ci";
import { FaCity, FaProjectDiagram, FaUsers } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCoupon5Line } from "react-icons/ri";
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
      className={`relative h-screen ${
        open ? "w-[300px]" : "w-[80px]"
      } rounded-r-[10px] box-content border-l-[5px] border-[#0145FE] transition-all duration-500 bg-[#0145FE] text-white overflow-hidden`}
    >
      <div
        className={`py-3 flex ${open?"justify-between":"justify-center"} pr-3 items-center bg-[#0145FE] z-50 `}
      >
        <h2
          className={`text-2xl font-semibold transition-all inline duration-500  ${
            open ? "block" : "hidden"
          }`}
        >
          Bike Fixup
        </h2>
        <HiMenuAlt3
          size={26}
          className={`cursor-pointer z-50  transition-all duration-500 rotate-180`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul
        className={`top-0 left-0 w-full pl-[5px] overflow-y-auto h-full navUl z-20`}
      >
        {menus?.map((menu) => (
          <li className="relative w-full">
            <NavLink
              key={menu.id}
              to={menu?.link}
              className={({ isActive }) =>
                `mt-3 w-full h-full flex justify-start items-center rounded-l-2xl overflow-hidden ${
                  isActive
                    ? "bg-white text-black navActive"
                    : "bg-[#0145FE] text-white navInactive"
                }`
              }
            >
              <b className="navCarvedShape absolute -top-[20px] h-[20px] w-full bg-white"></b>
              <b className="navCarvedShape absolute -bottom-[20px] h-[20px] w-full bg-white"></b>

              <div className="text-xl relative flex leading-[60px] min-w-[60px] text-center h-[60px] justify-center items-center">
                {menu?.icon}
              </div>
              <h2
                className={`relative block leading-[60px] min-w-[60px] text-center h-[60px] whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DashboardNav;
