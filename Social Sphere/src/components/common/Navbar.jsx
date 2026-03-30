import React, { useState } from 'react';
import InfoModal from './InfoModal';

const Navbar = ({ onLogin, onSignUp }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [infoType, setInfoType] = useState('Home');

  const openInfo = (type) => {
    setInfoType(type);
    setIsInfoOpen(true);
  };

  return (
    <>
      {/* Reduced py-[15px] to py-[10px] to pull content upwards */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-[40px] py-[20px] z-[100] bg-[#000814]/40 backdrop-blur-[12px] border-b border-white/10 font-sans transition-all duration-300">
        
       {/* 1. LEFT SIDE: Logo - Scaled up for visibility */}
<div className="flex items-center cursor-pointer group -mt-1"> {/* Added negative margin to pull up */}
  <div className="relative flex items-center justify-start transition-all duration-300">
    
    {/* Enhanced Glow behind the logo */}
    <div className="absolute inset-0 bg-[#3b82f6]/20 blur-[25px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <img 
      src="/logonav.png" 
      alt="SocialSphere Logo" 
      className="h-[55px] w-auto object-contain z-10 transition-transform duration-500 group-hover:scale-[1.05] drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" 
    />
  </div>
</div>

        {/* 2. RIGHT SIDE: Links + Buttons */}
        <div className="flex items-center gap-[40px] pt-1">
          
          {/* Menu Links */}
          <div className="hidden lg:flex items-center gap-[30px] text-[16px] font-semibold text-white">
            {['Home', 'Features', 'About'].map((link) => (
              <button 
                key={link}
                onClick={() => openInfo(link)}
                className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-white transition-colors outline-none"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-[10px]">
            <button 
              onClick={onLogin}
              className="px-[18px] py-[8px] text-white font-bold border border-white/20 bg-white/5 rounded-xl text-[16px] hover:bg-white hover:text-[#3b82f6] transition-all duration-300 active:scale-95"
            >
              Login
            </button>
            
            <button 
              onClick={onSignUp}
              className="px-[18px] py-[8px] bg-[#3b82f6] text-white font-bold text-[16px] rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 hover:shadow-blue-500/40 transition-all duration-300 active:scale-95"
            >
              Sign Up
            </button>
          </div>
        </div>
        {/* --- White Horizontal Line --- */}
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>
      </nav>

      {/* RENDER MODAL */}
      <InfoModal 
        isOpen={isInfoOpen} 
        onClose={() => setIsInfoOpen(false)} 
        tabType={infoType} 
      />
    </>
  );
};

export default Navbar;