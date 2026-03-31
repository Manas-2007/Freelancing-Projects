import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSocial } from '../../context/SocialContext';
import { Home, User, Layout, Search, Settings, Bell, LogOut, X } from 'lucide-react';

const Sidebar = () => {
  const { logout } = useSocial();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-sidebar', handler);
    return () => window.removeEventListener('toggle-sidebar', handler);
  }, []);

  const handleLogout = () => {
    if (window.confirm("Protocol: Are you sure you want to terminate the session?")) {
      logout();
      navigate('/');
    }
  };

  const menuItems = [
    { name: 'Home', icon: <Home size={18} />, path: '/dashboard/home' },
    { name: 'Profile', icon: <User size={18} />, path: '/dashboard/profile' },
    { name: 'Feed', icon: <Layout size={18} />, path: '/dashboard/feed' },
    { name: 'Explore', icon: <Search size={18} />, path: '/dashboard/explore' },
    { name: 'Settings', icon: <Settings size={18} />, path: '/dashboard/settings' },
    { name: 'Notifications', icon: <Bell size={18} />, path: '/dashboard/notifications' },
  ];

  return (
    <>
      {/* BACKDROP — mobile only */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR - Fixed Height and Flex Layout */}
      <aside className={`
        fixed md:sticky top-0 left-0 z-[160] md:z-[100]
        w-[260px] h-screen bg-[#0f172a] flex flex-col
        border-r border-slate-800 font-sans select-none
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>

        {/* CLOSE BUTTON — mobile only */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* 1. BRAND LOGO - Fixed at Top */}
        <div className="w-full px-6 py-8 flex justify-center items-center flex-shrink-0">
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

        {/* 2. NAVIGATION LINKS - Only this part will scroll if needed */}
        <nav className="flex-1 flex flex-col px-4 gap-1.5 overflow-y-auto no-scrollbar pb-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `group relative flex items-center gap-4 px-6 py-[12px] w-full rounded-[18px] transition-all duration-300
                ${isActive
                  ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-900/20'
                  : 'text-slate-400 font-semibold bg-transparent hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-white rounded-r-full shadow-[2px_0_10px_rgba(255,255,255,0.4)]" />
                  )}
                  <div className={`transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[14px] tracking-tight ${isActive ? 'font-bold' : 'font-semibold'}`}>
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* 3. LOGOUT SECTION - Fixed at Bottom */}
        <div className="px-4 py-6 border-t border-slate-800/50 bg-[#0f172a] flex-shrink-0">
          <button
            onClick={handleLogout}
            className="group flex items-center justify-between w-full bg-red-500/5 text-red-500 p-3.5 rounded-[20px] border border-red-500/10 hover:bg-red-500 hover:text-white transition-all duration-500 shadow-sm active:scale-95"
          >
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
    </>
  );
};

export default Sidebar;