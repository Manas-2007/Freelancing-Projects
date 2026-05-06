import React from 'react';
import { MdOutlineSearch, MdNotificationsNone } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = ({ setIsOpen, userName = "Aanya" }) => {
  return (
    <>
      <nav className="h-[70px] md:h-[80px] bg-white/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 transition-all border-b border-gray-100 shadow-lg">
        
        {/* LEFT: Greeting (Desktop) / Logo (Mobile) */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden text-2xl text-gray-600 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <HiOutlineMenuAlt2 />
          </button>

          {/* MOBILE LOGO */}
          <div className="flex items-center gap-1.5 md:hidden">
            <img src="/navlogo.jpg" className="w-[32px] h-[32px] object-contain" alt="Logo" />
            <h1 className="text-[20px] font-bold text-[#1a1a1a] tracking-tight">
              Life<span className="text-[#880808]">Drop</span>
            </h1>
          </div>

          {/* DESKTOP GREETING */}
          <div className="hidden md:block">
            <h2 className="text-2xl font-[700] text-gray-900 flex items-center gap-2">
              Welcome <span className="text-[#880808]">{userName}</span>
            </h2>
            <p className="text-[11px] font-[700] text-gray-400 uppercase tracking-widest mt-0.5">
              Your impact dashboard — <span className="text-[#880808]/60">every drop counts.</span>
            </p>
          </div>
        </div>

        {/* RIGHT: Desktop Search & Profile */}
        <div className="flex items-center gap-3 md:gap-6">
          
          {/* DESKTOP SEARCH */}
          <div className="relative hidden lg:block">
            <MdOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="Search requests near you..." 
              className="pl-12 pr-6 py-2 bg-gray-50/50 border border-gray-600 rounded-2xl text-sm focus:outline-none focus:ring-2 ring-red-600 focus:bg-white w-[280px] transition-all"
            />
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Notification Icon */}
            <button className="p-2 text-gray-700 hover:text-[#880808] hover:bg-red-50 rounded-xl transition-all relative">
              <MdNotificationsNone size={24} className="md:size-[26px]" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#880808] rounded-full border-2 border-white"></span>
            </button>

            {/* Profile Section */}
            <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-6 border-l border-gray-100">
              <div className="flex flex-col text-right">
                <p className="text-[11px] md:text-sm font-black text-gray-800 leading-none">
                  {userName}
                </p>
                <p className="hidden md:block text-[10px] font-bold text-[#880808] uppercase tracking-tighter mt-1">
                  Verified User
                </p>
              </div>

              <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-gray-50 to-gray-200 border border-gray-700 flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 transition-all overflow-hidden ring-2 ring-transparent hover:ring-red-100">
                <span className="text-[#880808] font-black text-sm md:text-lg">
                  {userName ? userName.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SEARCH BAR (Separate Row) */}
      <div className="w-full bg-white px-4 py-3 md:hidden border-b border-gray-100">
        <div className="relative w-[95%] mx-auto">
          <MdOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
          <input 
            type="text" 
            placeholder="Search requests near you..." 
            className="w-full pl-11 pr-4 py-2.5 bg-gray-100 border border-red-400 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:bg-white transition-all shadow-sm"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;