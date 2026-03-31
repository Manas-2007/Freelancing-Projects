import React from 'react';

const FeatureCard = ({ title, desc, icon, color, hoverBg }) => {
  const borderColor = color.split(' ')[1].replace('text-', 'border-');

  return (
    <div className={`group relative w-full md:w-[260px] h-[280px] md:h-[330px] rounded-[28px] md:rounded-[40px] p-5 md:p-7 
      bg-slate-200 border-[2px] ${borderColor}/20
      shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
      hover:translate-y-[-15px] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] 
      overflow-hidden cursor-pointer active:scale-[0.96] z-10`}>
      
      {/* Flood Fill Background — always visible on mobile */}
      <div className={`absolute inset-0 ${hoverBg} max-md:translate-y-0 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-0`}></div>

      {/* Pattern Overlay — always hidden on mobile */}
      <div className="absolute inset-0 opacity-[0.03] max-md:opacity-0 pointer-events-none group-hover:opacity-0 transition-opacity bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      {/* Icon — always in hover state on mobile */}
      <div className={`relative z-10 w-[50px] h-[50px] md:w-[60px] md:h-[60px] ${color} rounded-[16px] md:rounded-[20px] flex items-center justify-center text-[22px] md:text-[28px] mb-4 md:mb-6 
        shadow-lg max-md:bg-white max-md:scale-110 max-md:rotate-[12deg]
        group-hover:bg-white group-hover:scale-110 group-hover:rotate-[12deg] transition-all duration-500 border-[1.5px] border-white/20`}>
        {icon}
      </div>

      {/* Text — always white on mobile */}
      <div className="relative z-10 transition-all duration-500">
        <h3 className="text-[18px] md:text-[21px] font-[1000] max-md:text-white text-slate-900 group-hover:text-white leading-[1.1] mb-2 md:mb-3 tracking-[-1px]">
          {title}
        </h3>
        <p className="text-[12px] md:text-[13.5px] max-md:text-white/90 text-slate-500 group-hover:text-white/90 font-[600] leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Badge — always visible on mobile */}
      <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 flex items-center gap-2 max-md:opacity-100 max-md:translate-y-0 opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 z-10">
        <div className="px-4 py-2 md:px-5 bg-white/20 backdrop-blur-2xl rounded-full border border-white/40 text-[9px] font-[900] text-white uppercase tracking-[2.5px] shadow-xl">
          Get Started
        </div>
      </div>

    </div>
  );
};

export default FeatureCard;