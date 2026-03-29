import React from 'react';

const Navbar = ({ onLogin, onSignUp }) => {
  return ( <>
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-[80px] py-[20px] z-[50]  bg-transparent border-b-[1px] border-white/30 backdrop-blur-[5px]">
      
      {/* 1. LEFT SIDE: Logo Only */}
      <div className="flex items-center cursor-pointer group">
        <div className="relative w-[180px] h-[60px] flex items-center justify-start rounded-[15px] transition-all duration-[300ms]">
          {/* Subtle Glow behind the logo */}
          <div className="absolute inset-0 bg-[#3b82f6]/10 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

          {/* Large Logo Image */}
          <img 
            src="/logonav.png" 
            alt="SocialSphere Logo" 
            className="h-[70px] w-auto object-contain z-10 transition-transform duration-[500ms] group-hover:scale-[1.05]" 
          />
        </div>
      </div>

      {/* 2. RIGHT SIDE: Links + Buttons Group */}
      <div className="flex items-center gap-[50px]">
        
        {/* Menu Links */}
        <div className="hidden lg:flex items-center gap-[35px] text-[17px] font-[700] text-white">
          <a href="#" className="pb-[4px] border-b-[2px] border-transparent hover:border-white transition-all duration-[300ms]">
            Home
          </a>
          <a href="#" className="pb-[4px] border-b-[2px] border-transparent hover:border-white transition-all duration-[300ms]">
            Features
          </a>
          <a href="#" className="pb-[4px] border-b-[2px] border-transparent hover:border-white transition-all duration-[300ms]">
            About
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-[15px]">
          <button 
            onClick={onLogin}
            className="px-[28px] py-[12px] text-[#3b82f6] font-[700] border-[2px] border-[#3b82f6] bg-white rounded-[12px] text-[15px] hover:bg-transparent hover:text-white hover:border-white transition-all duration-[300ms] hover:scale-[1.03]"
          >
            Login
          </button>
          
          <button 
            onClick={onSignUp}
            className="px-[28px] py-[12px] bg-[#3b82f6] text-white font-[700] text-[15px] rounded-[12px] shadow-[0_10px_20px_-5px_rgba(59,130,246,0.3)] hover:bg-[#2563eb] hover:shadow-[0_15px_25px_-5px_rgba(59,130,246,0.4)] hover:scale-[1.03] transition-all duration-[300ms]"
          >
            Sign Up
          </button>
        </div>

      </div>
    </nav>
    </>
  );
};

export default Navbar;