import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';
import DashboardHeader from '../components/Dashboard/DashboardHeader';

const DashBoard = () => {
  return (
    <div className="flex w-full h-screen bg-[#f8fbff] overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* SIDEBAR: hidden off-canvas on mobile, visible on md+ */}
      <div className="hidden md:block flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar still mounts (for off-canvas), just not in flow */}
      <div className="md:hidden">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-screen overflow-y-auto min-w-0">
        {/* HEADER */}
        <DashboardHeader />

        <main className="p-4 sm:p-6 lg:p-8 max-w-[1150px] mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;