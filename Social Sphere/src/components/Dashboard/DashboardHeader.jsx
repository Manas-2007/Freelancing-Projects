import React from 'react';
import { Bell, Settings, LogOut } from 'lucide-react';

const DashboardHeader = ({ userName = "Sarah", userImg = "https://i.pravatar.cc/150?u=sarah" }) => {
  return (
    <header className="w-full h-[90px] flex items-center justify-between px-10 bg-white border-b border-slate-100 sticky top-0 z-[50]">
      
      {/* Page Context (Static Title) */}
      <div className="flex flex-col">
        <h2 className="text-[26px] font-[800] text-slate-800 tracking-tight">
          Settings
        </h2>
      </div>

      {/* Right Side: Profile & Notifications UI */}
      <div className="flex items-center gap-6">
        
        {/* Notification Icon UI */}
        <div className="relative p-3 rounded-xl bg-slate-50 text-slate-500">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </div>

        {/* Action Icons from your image */}
        <div className="flex gap-4 text-slate-400">
          <Settings size={20} />
          <LogOut size={20} />
        </div>

        <div className="h-[30px] w-[1px] bg-slate-200"></div>

        {/* User Profile UI */}
        <div className="flex items-center gap-4 py-1.5 px-2">
          <div className="text-right flex flex-col justify-center">
            <span className="text-[13px] font-[600] text-slate-400 leading-none mb-1">Welcome back,</span>
            <span className="text-[16px] font-[800] text-slate-800 leading-none">{userName}</span>
          </div>
          
          <div className="relative">
             <img 
               src={userImg} 
               alt="User Profile" 
               className="w-[48px] h-[48px] rounded-[18px] object-cover border-2 border-white shadow-sm" 
             />
             {/* Online Status Indicator */}
             <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm"></div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default DashboardHeader;