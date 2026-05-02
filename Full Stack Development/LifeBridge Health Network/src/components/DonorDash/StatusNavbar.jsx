import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsActive } from "react-icons/md";

const StatusNavbar = ({ setIsOpen }) => {
  const userName = "Manas";

  return (
   <header className="w-full bg-[#f8f9fa]/90 backdrop-blur-md px-[10px] sm:px-[20px] md:px-[30px] py-[12px] md:py-[18px] shadow-md border-b border-gray-200 flex items-center justify-between sticky top-0 z-20">

      {/* LEFT */}
      <div className="flex items-center gap-2 min-w-0">

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[28px] text-gray-800 active:scale-95 transition-transform"
        >
          ☰
        </button>

        {/* MOBILE WELCOME */}
       <div className="md:hidden flex items-center gap-2">

  {/* Logo */}
  <img
    src="/navlogo.jpg"
    alt="LifeDrop"
    className="w-[42px] h-[42px] object-contain"
  />
  <span className="text-[18px] font-bold text-[#1a1a1a] tracking-tight">
    Life<span className="text-red-700">Drop</span>
  </span>
</div>

        {/* DESKTOP WELCOME */}
        <div className="hidden md:flex flex-col min-w-0 ml-3">
          <h1 className="text-[26px] font-bold text-[#1a1a1a] truncate">
            Welcome <span className="text-[#880808]">{userName}</span>
          </h1>

          <p className="text-[13px] text-gray-500 font-medium truncate">
            Your impact dashboard — <span className="italic">every drop counts.</span>
          </p>
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-shrink-0">

       {/* SEARCH (FIXED + CLEAN LAYERING) */}
<div className="relative flex items-center">

  {/* ICON */}
  <span className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-600 group-focus-within:text-[#880808] transition-colors pointer-events-none">
    <IoSearchSharp className="text-[18px] text-red-700" />
  </span>
  {/* INPUT */}
  <input
    type="text"
    placeholder="Search..."
    className="
      w-[130px] sm:w-[200px] md:w-[300px]
      bg-white border border-gray-200
      py-[8px] pl-[38px] pr-[10px]
      rounded-[12px]
      text-[14px]
      outline-none
      relative z-0
      border-red-400
      transition-all
    "/></div>

        {/* NOTIFICATION */}
       <button className="relative w-[42px] h-[42px] bg-white/70 backdrop-blur-md border border-red-400 rounded-[14px] flex items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-95">
  <MdOutlineNotificationsActive className="text-[20px] text-gray-700" />
  <span className="absolute top-2 right-2 w-[7px] h-[7px] bg-[#880808] rounded-full border border-white"></span>
</button>

        {/* PROFILE */}
       <button className="w-[42px] h-[42px] bg-white/70 backdrop-blur-md border border-red-400 rounded-[14px] flex items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-95">
  <CgProfile className="text-[22px] text-gray-700 hover:text-[#880808] transition-colors" />
</button>
      </div>
    </header>
  );
};

export default StatusNavbar;