import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';
import DashboardHeader from '../components/Dashboard/DashboardHeader';

const DashBoard = () => {
  return (
    <div className="flex w-full h-screen bg-[#f8fbff] overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* SIDEBAR: Persistent across all dashboard tabs */}
      <Sidebar />

      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* HEADER: Persistent across all dashboard tabs */}
        <DashboardHeader />

        <main className="p-8 max-w-[1150px] mx-auto w-full">
          {/* This is where Settings, Feed, Profile etc. will render */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;