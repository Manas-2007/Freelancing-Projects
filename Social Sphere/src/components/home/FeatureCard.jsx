import React from 'react';

const FeatureCard = ({ title, desc, icon, color, hoverBg }) => {
  return (
    <div className={`group relative w-full md:w-[280px] h-[380px] bg-white rounded-[45px] p-9 
      /* --- FIXED BORDER: Visible by default --- */
      border-[2.5px] border-slate-200 group-hover:border-white/40
      /* ---------------------------------------- */
      shadow-[0_15px_35px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
      hover:translate-y-[-15px] overflow-hidden cursor-pointer active:scale-[0.95] z-10`}>
      
      {/* 1. THE HIDDEN BACKGROUND */}
      <div className={`absolute inset-0 ${hoverBg} translate-y-full group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-0`}></div>

      {/* 2. Floating Icon Container */}
      <div className={`relative z-10 w-[75px] h-[75px] ${color} rounded-[24px] flex items-center justify-center text-[36px] mb-9 
        shadow-xl group-hover:bg-white group-hover:scale-110 group-hover:rotate-[8deg] transition-all duration-500 border-[1.5px] border-black/5`}>
        {icon}
      </div>

      {/* 3. Text Content - Bolder & Larger */}
      <div className="relative z-10 transition-all duration-500">
        <h3 className="text-[28px] font-[1000] text-slate-900 group-hover:text-white leading-[1.1] mb-4 tracking-[-1.5px]">
          {title}
        </h3>
        <p className="text-[16px] text-slate-600 group-hover:text-white/95 font-[600] leading-relaxed">
          {desc}
        </p>
      </div>

      {/* 4. Glassmorphism Button at bottom */}
      <div className="absolute bottom-9 left-9 flex items-center gap-2 opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 z-10">
        <div className="px-6 py-2.5 bg-white/20 backdrop-blur-xl rounded-full border-[2px] border-white/50 text-[13px] font-[800] text-white uppercase tracking-widest shadow-lg">
          Explore
        </div>
      </div>

    </div>
  );
};

export default FeatureCard;