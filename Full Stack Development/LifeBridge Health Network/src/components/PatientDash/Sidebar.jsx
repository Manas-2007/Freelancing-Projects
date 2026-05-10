import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Ek hi line mein import
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineNotificationsActive, MdOutlineGpsOff } from "react-icons/md";
import { LuHistory, LuLayoutDashboard } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ isOpen, setIsOpen, onLogout }) => {
  const navigate = useNavigate(); // Component ke andar initialize kiya

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LuLayoutDashboard /> },
    { name: 'Donation Pool', path: '/pool', icon: <RiCalendarScheduleLine /> },
    { name: 'Nearby Requests', path: '/requests', icon: <MdOutlineGpsOff /> },
    { name: 'History', path: '/history', icon: <LuHistory /> },
    { name: 'Notifications', path: '/notifications', icon: <MdOutlineNotificationsActive /> },
  ];

  // Ye handleLogout function agar tum use karna chaho toh
  const handleLogoutClick = () => {
    onLogout(); // App.jsx wala onLogout call karega
    navigate('/login'); // Phir login page par bhej dega
  };

  return (
    <aside
      className={`
        h-screen w-[280px] bg-[#f8f9fa]/95 backdrop-blur-md shadow-2xl border-r border-gray-200
        flex flex-col p-[20px] fixed left-0 top-0 z-40
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      {/* ================= LOGO SECTION ================= */}
      <div className="mb-[0px] relative group px-2"> 
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[24px] border border-white/60 shadow-sm transition-all duration-500 group-hover:bg-white/60 group-hover:shadow-md"></div>

        <div className="relative p-1.5"> 
          {/* DESKTOP LOGO */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center mb-2">
              <div className="flex items-center gap-1">
                <div className="p-1 bg-white rounded-xl shadow-sm border border-gray-100">
                  <img src="/navlogo.jpg" className="w-[60px] h-[60px] object-contain" alt="logo" />
                </div>
                <div>
                  <h1 className="text-[29px] font-[700] text-gray-900">
                    Life<span className="text-[#880808]">Drop</span>
                  </h1>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[2px]">
                    Portal v2.0
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold text-gray-500/80 uppercase tracking-[1.5px] italic text-center">
                Donate Blood • Save Lives
              </p>
              <div className="inline-flex items-center self-center bg-gradient-to-r from-red-50 to-amber-50 px-3 py-1.5 rounded-full border border-red-400 shadow-inner">
                <span className="text-[#880808] text-[9px] font-black uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#880808] rounded-full animate-pulse"></span>
                  Doctor Portal
                </span>
              </div>
            </div>
          </div>

          {/* MOBILE LOGO SECTION */}
          <div className="md:hidden flex flex-col items-center text-center">
            <button onClick={() => setIsOpen(false)} className="absolute right-0 top-0 text-gray-400 hover:text-red-700 p-2">
              <IoClose size={24} />
            </button>
            <img src="/navlogo.jpg" className="w-[50px] h-[50px] object-contain mb-2" alt="logo" />
            <h1 className="text-[22px] font-black tracking-tight">Life<span className="text-red-700">Drop</span></h1>
          </div>
        </div>
        <div className="w-[90%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent mt-4" />
      </div>

      {/* ================= NAVIGATION ================= */}
      <nav className="flex-1 flex flex-col gap-1 overflow-y-auto no-scrollbar mt-4 pr-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `
              w-full flex items-center justify-between
              px-4 py-2 rounded-xl transition-colors duration-200
              ${isActive ? 'bg-[#880808] text-white shadow-md' : 'text-black hover:text-[#880808] hover:bg-white/60'}
            `}
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3">
                  <span className={`text-[20px] ${isActive ? 'text-white' : 'text-black'}`}>
                    {item.icon}
                  </span>
                  <span className="font-[600] text-[14px]">{item.name}</span>
                </div>
                {isActive && <span className="text-xs opacity-80">›</span>}
              </>
            )}
          </NavLink>
        ))}

        {/* LOGOUT BUTTON */}
        <button 
          onClick={handleLogoutClick}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-black font-semibold mt-auto hover:text-[#880808] hover:bg-white/60 transition-colors"
        >
          <BiLogOut className="text-[18px]" />
          <span className="text-[14px] font-[600]">Logout</span>
        </button>
      </nav>

      {/* ================= HELPLINE ================= */}
      <div className="mt-4 bg-[#880808] p-3 rounded-2xl text-center shadow-md shrink-0">
        <p className="text-white/80 text-[9px] font-bold uppercase mb-0.5">Emergency Helpline</p>
        <h3 className="text-white text-[14px] font-bold">1800 123 4567</h3>
        <p className="text-white/60 text-[8px]">24x7 support</p>
      </div>

    </aside>
  );
};

export default Sidebar;