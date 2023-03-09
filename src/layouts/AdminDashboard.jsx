import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import DashboardNav from "../pages/AdminDashboard/DashboardNav";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { isLogin } = useAuth();
  useEffect(() => {
    // REDIRECT TO THE ADMIN DASHBOARD
    if (window.location.pathname === "/admin/dashboard") {
      navigate("/admin/dashboard/user");
    }
  }, []);
  
  return (
    <>
      {isLogin && (
        <section className="flex flex-row h-screen">
          <DashboardNav />
          <section className="w-full bg-base-100 h-screen">
            <div className="w-full px-5">
              <Outlet />
            </div>
          </section>
        </section>
      )}
    </>
  );
}
