import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../pages/AdminDashboard/DashboardNav";
import Nav from "../pages/AdminDashboard/Nav/Nav";

export default function AdminDashboard() {
  const [theme, setTheme] = useState("dark");

 
  return (
    <section className="flex flex-row h-screen">
      <DashboardNav />
      <section className="w-full bg-base-100">
        <Nav theme={theme} setTheme={setTheme}  />
        <Outlet />
      </section>
    </section>
  );
}
