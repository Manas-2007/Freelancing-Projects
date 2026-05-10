import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineNotificationsActive, MdOutlineGpsOff } from "react-icons/md";
import { LuHistory, LuLayoutDashboard } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";
import { IoClose } from "react-icons/io5";



const Sidebar = ({ isOpen, setIsOpen, setIsLoggedIn, setUser }) => {

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LuLayoutDashboard /> },
    { name: 'Nearby Requests', path: '/requests', icon: <MdOutlineGpsOff /> },
    { name: 'Donation History', path: '/history', icon: <LuHistory /> },
    { name: 'Schedule', path: '/schedule', icon: <RiCalendarScheduleLine /> },
    { name: 'Notifications', path: '/notifications', icon: <MdOutlineNotificationsActive /> },
  ];
// ✅ Logout Function
  const handleLogout = () => {
    // 1. Storage saaf karo
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // 2. Global State reset karo
    if (setIsLoggedIn) setIsLoggedIn(false);
    if (setUser) setUser(null);

    // 3. User ko Home page par bhej do
    navigate('/');
    
    // Sidebar band kar do (Mobile ke liye)
    setIsOpen(false);
  };

  return (
    <aside
      className={`
        h-screen w-[280px] bg-[#f8f9fa]/95 backdrop-blur-md shadow-2xl border-r border-gray-200
        flex flex-col p-[20px] overflow-hidden fixed left-0 top-0 z-40
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >

      {/* ================= LOGO SECTION ================= */}
      <div className="mb-[30px]">

        {/* DESKTOP */}
        <div className="hidden md:block">

          <div className="flex items-center justify-between mb-2">

            <div className="flex items-center gap-2">
              <img
                src="/navlogo.jpg"
                className="w-[50px] h-[50px] object-contain"
                alt="logo"
              />

              <h1 className="text-[30px] font-bold text-[#1a1a1a]">
                Life<span className="text-red-700">Drop</span>
              </h1>
            </div>

            {/* FIXED CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden text-[28px]"
            >
              <IoClose />
            </button>

          </div>

          <p className="text-[10px] font-medium text-gray-700 uppercase tracking-[1px] mb-4">
            Donate Blood • Save Lives
          </p>

          <div className="inline-block bg-[#ffe4e4] px-4 py-1.5 rounded-full">
            <span className="text-red-700 text-[10px] font-bold uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#880808] rounded-full"></span>
              Donor Portal
            </span>
          </div>

        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col items-center text-center">

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-[28px] mb-2"
          >
            <IoClose />
          </button>

          <img
            src="/navlogo.jpg"
            className="w-[70px] h-[70px] object-contain mb-2"
            alt="logo"
          />

          <h1 className="text-[22px] font-bold">
            Life<span className="text-red-700">Drop</span>
          </h1>

          <p className="text-[11px] text-gray-500 mt-1">
            Donate blood • Save lives ❤️
          </p>

          <div className="mt-3 inline-block bg-[#ffe4e4] px-4 py-1.5 rounded-full">
            <span className="text-red-700 text-[10px] font-bold uppercase flex items-center gap-2 justify-center">
              <span className="w-1.5 h-1.5 bg-[#880808] rounded-full"></span>
              Donor Portal
            </span>
          </div>

        </div>

        <div className="w-full border-t border-black/30 mt-[15px]" />
      </div>

      {/* ================= NAVIGATION ================= */}
      <nav className="flex-1 flex flex-col gap-2 overflow-hidden pr-1">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `
              w-full flex items-center justify-between
              px-4 py-3 rounded-xl
              transition-colors duration-200

              ${
                isActive
                  ? 'bg-[#880808] text-white'
                  : 'text-black hover:text-[#880808] hover:bg-white/60'
              }
            `}
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3">

                  <span className={`text-[20px] ${
                    isActive ? 'text-white' : 'text-black'
                  }`}>
                    {item.icon}
                  </span>

                  <span className="font-semibold text-[14px]">
                    {item.name}
                  </span>

                </div>

                {isActive && (
                  <span className="text-xs opacity-80">›</span>
                )}
              </>
            )}
          </NavLink>
        ))}

        {/* LOGOUT */}
        <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black font-semibold mt-auto transition-colors duration-200 hover:text-[#880808] hover:bg-white/60">
          <BiLogOut className="text-[18px]" />
          
          <span>Logout</span>
        </button>

      </nav>

      {/* ================= HELPLINE ================= */}
      <div className="mt-4 bg-[#880808] p-3 rounded-2xl text-center shadow-md">
        <p className="text-white/80 text-[10px] font-bold uppercase mb-1">
          Emergency Helpline
        </p>
        <h3 className="text-white text-[15px] font-bold">
          1800 123 4567
        </h3>
        <p className="text-white/60 text-[9px]">
          24x7 support
        </p>
      </div>

    </aside>
  );
};

export default Sidebar;