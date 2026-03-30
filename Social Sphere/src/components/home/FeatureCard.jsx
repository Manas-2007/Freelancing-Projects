import React from 'react';

const FeatureCard = ({ title, desc, icon, color, hoverBg }) => {
  // Extracting border color based on the icon bg color for a premium look
  const borderColor = color.split(' ')[1].replace('text-', 'border-');

  return (
    <div className={`group relative w-full md:w-[280px] h-[390px] rounded-[45px] p-9 
      /* --- PREMIUM DEFAULT BACKGROUND (Not plain white) --- */
      bg-slate-300 border-[2px] ${borderColor}/20
      /* ---------------------------------------------------- */
      shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
      hover:translate-y-[-20px] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] 
      overflow-hidden cursor-pointer active:scale-[0.95] z-10`}>
      
      {/* 1. THE FLOOD FILL BACKGROUND (Always ready to slide up) */}
      <div className={`absolute inset-0 ${hoverBg} translate-y-[102%] group-hover:translate-y-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-0`}></div>

      {/* Subtle Pattern Overlay for Default State */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-0 transition-opacity bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      {/* 2. Floating Icon Container */}
      <div className={`relative z-10 w-[80px] h-[80px] ${color} rounded-[26px] flex items-center justify-center text-[38px] mb-10 
        shadow-lg group-hover:bg-white group-hover:scale-110 group-hover:rotate-[12deg] transition-all duration-500 border-[1.5px] border-white/20`}>
        {icon}
      </div>

      {/* 3. Text Content */}
      <div className="relative z-10 transition-all duration-500">
        <h3 className="text-[28px] font-[1000] text-slate-900 group-hover:text-white leading-[1.1] mb-5 tracking-[-1.5px]">
          {title}
        </h3>
        <p className="text-[16px] text-slate-500 group-hover:text-white/90 font-[600] leading-relaxed">
          {desc}
        </p>
      </div>

      {/* 4. Interactive Badge at bottom */}
      <div className="absolute bottom-9 left-9 flex items-center gap-2 opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 z-10">
        <div className="px-6 py-2.5 bg-white/20 backdrop-blur-2xl rounded-full border border-white/40 text-[11px] font-[900] text-white uppercase tracking-[3px] shadow-xl">
          Get Started
        </div>
      </div>

    </div>
  );
};

export default FeatureCard;