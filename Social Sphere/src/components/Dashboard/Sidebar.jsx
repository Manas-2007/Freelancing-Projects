import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, User, Layout, MessageSquare, Search, Settings, Bell, FileText, LogOut 
} from 'lucide-react';

const Sidebar = () => {
  
  const menuItems = [
    { name: 'Home', icon: <Home size={22} />, path: '/dashboard/home' },
    { name: 'Profile', icon: <User size={22} />, path: '/dashboard/profile' },
    { name: 'Feed', icon: <Layout size={22} />, path: '/dashboard/feed' },
    { name: 'Explore', icon: <Search size={22} />, path: '/dashboard/explore' },
    { name: 'Settings', icon: <Settings size={22} />, path: '/dashboard/settings' },
    { name: 'Notifications', icon: <Bell size={22} />, path: '/dashboard/notifications' },
  ];

  return (
    /* Force font-sans and remove any global italic styling */
    <aside className="w-[300px] h-screen bg-[#0f172a] flex flex-col py-8 border-r border-slate-800 sticky top-0 left-0 z-[100] font-sans overflow-hidden">
      
      {/* 1. BRAND LOGO */}
      <div className="w-full px-6 mb-14 flex justify-center items-center">
        <div className="h-[65px] w-full flex items-center justify-center group cursor-pointer transition-all duration-500 hover:scale-[1.05]">
          <img 
            src="/logonav.png" 
            alt="SocialSphere Logo" 
            className="h-full w-auto object-contain filter 
              drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] 
              transition-all duration-500 
              group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]" 
          />
        </div>
      </div>

      {/* 2. NAVIGATION LINKS */}
      <nav className="flex-1 flex flex-col px-4 gap-2 overflow-y-auto 
        [&::-webkit-scrollbar]:w-[3px] 
        [&::-webkit-scrollbar-track]:bg-transparent 
        [&::-webkit-scrollbar-thumb]:bg-slate-700 
        [&::-webkit-scrollbar-thumb]:rounded-full">
        
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `group relative flex items-center gap-5 px-7 py-[14px] w-full rounded-[22px] overflow-hidden transition-all duration-500
              ${isActive 
                ? 'bg-blue-600 text-white font-black shadow-2xl shadow-blue-900/40' 
                : 'text-slate-400 font-bold bg-white/0 hover:bg-white/5 hover:text-white'
              }`
            }
            /* Style to ensure no italics */
            style={{ fontStyle: 'normal' }}
          >
            {({ isActive }) => (
              <>
                {/* ACTIVE INDICATOR */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[30px] bg-white rounded-r-full shadow-[2px_0_15px_rgba(255,255,255,0.5)]" />
                )}
                
                {/* ICON */}
                <div className={`transition-all duration-500 ${isActive ? 'scale-110 text-white' : 'group-hover:scale-110 group-hover:text-white'}`}>
                  {item.icon}
                </div>
                
                {/* LABEL: Increased weight for premium feel */}
                <span className={`text-[18px] tracking-tight transition-colors ${isActive ? 'font-black' : 'font-bold'}`}>
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* 3. LOGOUT SECTION */}
      <div className="px-6 mt-6 border-t border-slate-800/50 pt-6">
        <button className="group flex items-center justify-between w-full bg-red-500/5 text-red-500 p-5 rounded-[26px] border border-red-500/10 hover:bg-red-500 hover:text-white transition-all duration-500 shadow-lg hover:shadow-red-900/40">
          <div className="flex items-center gap-4">
            <LogOut size={22} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[19px] font-black tracking-tight" style={{ fontStyle: 'normal' }}>Logout</span>
          </div>
          <span className="text-[11px] font-black uppercase tracking-[2px] bg-red-500/10 group-hover:bg-white/20 px-3 py-1.5 rounded-xl transition-colors">
              Exit
          </span>
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;