import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Settings, LogOut, Sparkles } from 'lucide-react';

const DashboardHeader = ({ userName = "Sarah", userImg = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" }) => {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('home')) return 'Analytics Hub';
    if (path.includes('profile')) return 'My Identity';
    if (path.includes('feed')) return 'Feed Engine';
    if (path.includes('explore')) return 'Global Discovery';
    if (path.includes('settings')) return 'System Settings';
    if (path.includes('notifications')) return 'Alerts & Logs';
    return 'Dashboard';
  };

  // 1. SHARED PREMIUM DARK STYLE FOR ICONS
  const iconBoxStyle = "relative w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 border border-slate-700 text-white transition-all duration-300 hover:border-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 cursor-pointer group";

  return (
    <header className="w-full h-[100px] flex-shrink-0 flex items-center justify-between px-10 bg-white/80 backdrop-blur-2xl border-b border-slate-100/80 sticky top-0 z-[100] font-sans">
      
      {/* LEFT: Dynamic Page Context */}
      <div className="flex items-center gap-4 min-w-[250px]">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 flex-shrink-0">
          <Sparkles size={20} />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-[22px] font-bold text-slate-900 tracking-tight leading-none h-[24px] flex items-center">
            {getPageTitle()}
          </h2>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[2px] mt-1 opacity-70">SocialSphere V2</span>
        </div>
      </div>

      {/* RIGHT: Profile & Premium Dark Icons */}
      <div className="flex items-center gap-8">
        
        {/* PREMIUM DARK ICON GROUP */}
        <div className="flex items-center gap-3 bg-[light] p-1.5 rounded-[20px] border border-slate-200/50 shadow-inner">
          
          {/* Notification Icon */}
          <div className={iconBoxStyle}>
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[red] rounded-full border-2 border-[#0f172a] shadow-[0_0_8px_rgba(244,63,94,0.6)] animate-pulse"></span>
          </div>

          {/* Settings Icon */}
          <button className={iconBoxStyle}>
            <Settings size={18} className="group-hover:rotate-90 transition-transform duration-500" />
          </button>

          {/* Logout Icon (Red Hover Variant) */}
          <button className={`${iconBoxStyle} hover:border-rose-500 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]`}>
            <LogOut size={18} className="group-hover:text-rose-400" />
          </button>
        </div>

        <div className="h-[35px] w-[1px] bg-slate-200/60"></div>

        {/* PROFILE SECTION */}
        <div className="flex items-center gap-4 group cursor-pointer h-full">
          <div className="text-right flex flex-col justify-center">
            <span className="text-[11px] font-bold text-slate-400 leading-none mb-1 uppercase tracking-wider">Active User</span>
            <span className="text-[16px] font-bold text-slate-900 leading-none">
              {userName}
            </span>
          </div>
          
          <div className="relative flex-shrink-0">
             <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[18px] blur-[1px] opacity-20"></div>
             <img 
               src={userImg} 
               alt="User Profile" 
               className="relative w-[50px] h-[50px] rounded-[16px] object-cover border-2 border-white shadow-xl group-hover:scale-105 transition-transform duration-500" 
             />
             <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default DashboardHeader;