import React from 'react';

const FeatureCard = ({ title, desc, icon, color, hoverBg }) => {
  // Extracting border color based on the icon bg color for a premium look
  const borderColor = color.split(' ')[1].replace('text-', 'border-');

  return (
    /* Height reduced from 390px to 330px, Padding reduced from p-9 to p-7 */
    <div className={`group relative w-full md:w-[260px] h-[330px] rounded-[40px] p-7 
      /* --- PREMIUM DEFAULT BACKGROUND --- */
      bg-slate-200 border-[2px] ${borderColor}/20
      /* ---------------------------------- */
      shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
      hover:translate-y-[-15px] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] 
      overflow-hidden cursor-pointer active:scale-[0.96] z-10`}>
      
      {/* 1. THE FLOOD FILL BACKGROUND */}
      <div className={`absolute inset-0 ${hoverBg} translate-y-[102%] group-hover:translate-y-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-0`}></div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-0 transition-opacity bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      {/* 2. Floating Icon Container - Size reduced from 80px to 60px, Text size from 38px to 28px */}
      <div className={`relative z-10 w-[60px] h-[60px] ${color} rounded-[20px] flex items-center justify-center text-[28px] mb-6 
        shadow-lg group-hover:bg-white group-hover:scale-110 group-hover:rotate-[12deg] transition-all duration-500 border-[1.5px] border-white/20`}>
        {icon}
      </div>

      {/* 3. Text Content */}
      <div className="relative z-10 transition-all duration-500">
        {/* Font size reduced from 28px to 21px (Style intact) */}
        <h3 className="text-[21px] font-[1000] text-slate-900 group-hover:text-white leading-[1.1] mb-3 tracking-[-1px]">
          {title}
        </h3>
        {/* Font size reduced from 16px to 13.5px (Style intact) */}
        <p className="text-[13.5px] text-slate-500 group-hover:text-white/90 font-[600] leading-relaxed">
          {desc}
        </p>
      </div>

      {/* 4. Interactive Badge at bottom */}
      <div className="absolute bottom-7 left-7 flex items-center gap-2 opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 z-10">
        {/* Font size reduced from 11px to 9px */}
        <div className="px-5 py-2 bg-white/20 backdrop-blur-2xl rounded-full border border-white/40 text-[9px] font-[900] text-white uppercase tracking-[2.5px] shadow-xl">
          Get Started
        </div>
      </div>

    </div>
  );
};

export default FeatureCard;