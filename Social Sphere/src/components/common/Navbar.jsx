import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-[80px] py-[30px] z-[50] bg-transparent">
      
      {/* 1. Logo (Stays on the Left) */}
      <div className="text-[26px] font-[900] tracking-[-1px] text-[#1e293b] cursor-pointer">
        Social<span className="text-[#3b82f6]">Sphere</span>
      </div>

      {/* 2. Right Side Group (Links + Buttons together) */}
      <div className="flex items-center gap-[40px]">
        
        {/* Menu Links shifted to the right */}
        <div className="hidden lg:flex items-center gap-[35px] text-[15px] font-[700] text-[#475569]">
          <a href="#" className="hover:text-[#3b82f6] transition-all duration-[300ms]">Home</a>
          <a href="#" className="hover:text-[#3b82f6] transition-all duration-[300ms]">Features</a>
          <a href="#" className="hover:text-[#3b82f6] transition-all duration-[300ms]">About</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-[12px]">
          <button className="px-[24px] py-[12px] text-[#1e293b] font-[700] text-[15px] rounded-[12px] hover:bg-white/30 transition-all">
            Login
          </button>
          <button className="px-[28px] py-[12px] bg-[#3b82f6] text-white font-[700] text-[15px] rounded-[12px] shadow-[0_10px_20px_-5px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(59,130,246,0.4)] hover:scale-[1.03] transition-all">
            Sign Up
          </button>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;