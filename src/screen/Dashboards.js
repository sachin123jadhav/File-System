import React from "react";
import Sidebar from "../components/shared/Sidebar";
import { Outlet } from "react-router-dom";


import './dashboard.css'

const Dashboards = () => {
  let user_role = localStorage.getItem('user_role')
  return (
    <div className="flex h-screen bg-gray-100 header-mb">
      <Sidebar className="h-15 w-15 flex-shrink-0" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">

          <div className="mx-3 py-8">
            {/* Outlet for nested routes */}
            <Outlet />
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboards;
