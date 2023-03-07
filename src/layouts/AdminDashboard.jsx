import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider";
import DashboardNav from "../pages/AdminDashboard/DashboardNav";
import Nav from "../pages/AdminDashboard/Nav/Nav";

export default function AdminDashboard() {
  const navigate = useNavigate();
  // const { isLogin } = useAuth();
  // useEffect(() => {
  //   // REDIRECT TO THE ADMIN DASHBOARD
  //   if (window.location.pathname === "/admin/dashboard") {
  //     navigate("/admin/dashboard/user");
  //   } else {
  //     if (!isLogin) {
  //       localStorage.removeItem("data");
  //       navigate("/login");
  //     }
  //   }
  // }, []);

  return (
    <>
      (
      <section className="flex flex-row h-screen">
        <DashboardNav />
        <section className="w-full bg-base-100 h-screen overflow-y-scroll">
          <Nav className={`fixed`} />
          <div className="w-full px-5 py-3">
            <Outlet />
          </div>
        </section>
      </section>
      )
    </>
  );
}
