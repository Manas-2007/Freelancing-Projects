import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, Settings, LogOut, Sparkles, Menu } from 'lucide-react';
import { useSocial } from '../../context/SocialContext';

const DashboardHeader = () => {
  const { user, logout } = useSocial();
  const location = useLocation();
  const navigate = useNavigate();

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

  const iconBoxStyle = "relative w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 border border-slate-700 text-white transition-all duration-300 hover:border-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 cursor-pointer group";

  const handleSidebarToggle = () => {
    window.dispatchEvent(new CustomEvent('toggle-sidebar'));
  };

  return (
    <header className="w-full h-[70px] md:h-[100px] flex-shrink-0 flex items-center justify-between px-4 md:px-10 bg-white/80 backdrop-blur-2xl border-b border-slate-100/80 sticky top-0 z-[100] font-sans">

      {/* LEFT — Mobile: Logo + Tab Name */}
      <div className="flex md:hidden items-center gap-3">
        <img
          src="/logonav.png"
          alt="SocialSphere Logo"
          className="h-[30px] w-auto object-contain"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-[15px] font-bold text-slate-900 tracking-tight leading-none">
            {getPageTitle()}
          </h2>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[1.5px] opacity-70">SocialSphere V2</span>
        </div>
      </div>

      {/* LEFT — Desktop: unchanged */}
      <div className="hidden md:flex items-center gap-4 min-w-[250px]">
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

      {/* RIGHT — Mobile: Bell + Settings + Hamburger */}
      <div className="flex md:hidden items-center gap-2">
        <div onClick={() => navigate('/dashboard/notifications')} className={iconBoxStyle}>
          <Bell size={16} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white animate-pulse"></span>
        </div>
        <button onClick={() => navigate('/dashboard/settings')} className={iconBoxStyle}>
          <Settings size={16} className="group-hover:rotate-90 transition-transform duration-500" />
        </button>
        <button onClick={handleSidebarToggle} className={iconBoxStyle}>
          <Menu size={16} />
        </button>
      </div>

      {/* RIGHT — Desktop: unchanged */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-3 p-1.5 rounded-[20px] border border-slate-200/50 shadow-inner">
          <div onClick={() => navigate('/dashboard/notifications')} className={iconBoxStyle}>
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0f172a] shadow-[0_0_8px_rgba(244,63,94,0.6)] animate-pulse"></span>
          </div>
          <button onClick={() => navigate('/dashboard/settings')} className={iconBoxStyle}>
            <Settings size={18} className="group-hover:rotate-90 transition-transform duration-500" />
          </button>
          <button
            onClick={() => { if(window.confirm("Do you want to exit the session?")) logout(); }}
            className={`${iconBoxStyle} hover:border-rose-500 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]`}
          >
            <LogOut size={18} className="group-hover:text-rose-400" />
          </button>
        </div>

        <div className="h-[35px] w-[1px] bg-slate-200/60"></div>

        <div onClick={() => navigate('/dashboard/profile')} className="flex items-center gap-4 group cursor-pointer h-full">
          <div className="text-right flex flex-col justify-center">
            <span className="text-[11px] font-bold text-slate-400 leading-none mb-1 uppercase tracking-wider">Active User</span>
            <span className="text-[16px] font-bold text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
              {user.username}
            </span>
          </div>
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[18px] blur-[1px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <img
              src="https://kenh14cdn.com/203336854389633024/2021/11/4/photo-1-16360000252341588868443.png"
              alt="User Profile"
              className="relative w-[50px] h-[50px] rounded-[16px] object-cover border-2 border-white shadow-xl group-hover:scale-105 transition-transform duration-500 bg-slate-100"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;