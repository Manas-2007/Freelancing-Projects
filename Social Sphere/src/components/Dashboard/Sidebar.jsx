import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, User, Layout, Search, Settings, Bell, LogOut 
} from 'lucide-react';

const Sidebar = () => {
  
  const menuItems = [
    { name: 'Home', icon: <Home size={18} />, path: '/dashboard/home' },
    { name: 'Profile', icon: <User size={18} />, path: '/dashboard/profile' },
    { name: 'Feed', icon: <Layout size={18} />, path: '/dashboard/feed' },
    { name: 'Explore', icon: <Search size={18} />, path: '/dashboard/explore' },
    { name: 'Settings', icon: <Settings size={18} />, path: '/dashboard/settings' },
    { name: 'Notifications', icon: <Bell size={18} />, path: '/dashboard/notifications' },
  ];

  return (
    /* Width reduced to 260px for a more balanced desktop look */
    <aside className="w-[260px] h-screen bg-[#0f172a] flex flex-col py-6 border-r border-slate-800 sticky top-0 left-0 z-[100] font-sans overflow-hidden select-none">
      
      {/* 1. BRAND LOGO - Scaled down for elegance */}
      <div className="w-full px-6 mb-10 flex justify-center items-center">
        <div className="h-[50px] w-full flex items-center justify-center group cursor-pointer transition-all duration-500 hover:scale-[1.02]">
          <img 
            src="/logonav.png" 
            alt="SocialSphere Logo" 
            className="h-full w-auto object-contain filter 
              drop-shadow-[0_0_10px_rgba(59,130,246,0.2)] 
              transition-all duration-500 
              group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]" 
          />
        </div>
      </div>

      {/* 2. NAVIGATION LINKS - Adjusted Padding and Font */}
      <nav className="flex-1 flex flex-col px-4 gap-1.5 overflow-y-auto no-scrollbar">
        
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `group relative flex items-center gap-4 px-6 py-[12px] w-full rounded-[18px] transition-all duration-300
              ${isActive 
                ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-900/20' 
                : 'text-slate-400 font-semibold bg-transparent hover:bg-white/5 hover:text-white'
              }`
            }
            style={{ fontStyle: 'normal' }}
          >
            {({ isActive }) => (
              <>
                {/* ACTIVE INDICATOR - Slimmer */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-white rounded-r-full shadow-[2px_0_10px_rgba(255,255,255,0.4)]" />
                )}
                
                {/* ICON - Scaled to 18px */}
                <div className={`transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {item.icon}
                </div>
                
                {/* LABEL: Reduced from 18px to 14px (Standard SaaS Size) */}
                <span className={`text-[14px] tracking-tight ${isActive ? 'font-bold' : 'font-semibold'}`}>
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* 3. LOGOUT SECTION - Compact and Clean */}
      <div className="px-4 mt-4 border-t border-slate-800/50 pt-6">
        <button className="group flex items-center justify-between w-full bg-red-500/5 text-red-500 p-3.5 rounded-[20px] border border-red-500/10 hover:bg-red-500 hover:text-white transition-all duration-500 shadow-sm">
          <div className="flex items-center gap-3">
            <LogOut size={18} />
            <span className="text-[14px] font-bold tracking-tight">Logout</span>
          </div>
          <span className="text-[9px] font-black uppercase tracking-[1px] bg-red-500/10 group-hover:bg-white/20 px-2 py-1 rounded-lg transition-colors">
              Exit
          </span>
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;