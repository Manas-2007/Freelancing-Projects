import React from 'react';
import { MdOutlineBloodtype, MdOutlineHistoryEdu } from "react-icons/md";
import { BiCalendarHeart } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";

const StatCard = ({ title, value, unit, description, icon }) => (
  <div className="group relative bg-red-50/40 backdrop-blur-md rounded-[28px] p-5 md:p-6 border border-red-500 shadow-[0_8px_30px_-10px_rgba(136,8,8,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(136,8,8,0.15)] hover:border-red-200 cursor-default overflow-hidden">
    
    {/* Glass Reflection */}
    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/30 via-transparent to-transparent rotate-45 pointer-events-none"></div>

    <div className="flex justify-between items-start mb-4 relative z-10">
      {/* Icon with consistent Red Theme */}
      <div className="p-3 rounded-2xl bg-white border border-red-100 text-[#880808] transition-all duration-300 shadow-sm group-hover:bg-[#880808] group-hover:text-white group-hover:scale-110">
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <div className="bg-red-100/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-red-200">
        <p className="text-[9px] font-black text-[#880808] uppercase tracking-tighter">Live</p>
      </div>
    </div>

    <div className="space-y-1 relative z-10">
      {/* Darker, more visible font for Title */}
      <p className="text-[13px] font-[500] text-black uppercase tracking-wider">
        {title}
      </p>
      <div className="flex items-baseline gap-1">
        {/* Stronger Value font */}
        <h3 className="text-2xl md:text-3xl font-[700] text-gray-900 tracking-tight">
          {value}
        </h3>
        <span className="text-xs md:text-sm font-bold text-gray-700">{unit}</span>
      </div>
      {/* Description with improved visibility */}
      <p className="text-[11px] font-bold text-gray-600 mt-2 flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-[#880808]/40"></span>
        {description}
      </p>
    </div>
  </div>
);

const Hero = () => {
  const donorStats = [
    { title: "Total Donations", value: "09", unit: "Liters", description: "Lifetime Record", icon: <MdOutlineBloodtype /> },
    { title: "Lives Saved", value: "27", unit: "People", description: "Community Impact", icon: <BiCalendarHeart /> },
    { title: "Donation Streak", value: "04", unit: "Years", description: "Consistent Hero", icon: <GiProgression /> },
    { title: "Next Eligible", value: "12", unit: "Feb", description: "Ready in 18 days", icon: <MdOutlineHistoryEdu /> },
  ];

  return (
    <div className="animate-[fadeIn_0.6s_ease-out] space-y-6">
      
      {/* ================= IMPACT BANNER ================= */}
      <div className="relative overflow-hidden bg-white rounded-[32px] p-6 md:p-8 border border-red-100 shadow-[0_10px_30px_-15px_rgba(136,8,8,0.1)]">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-60"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Your Impact Dashboard — <span className="text-[#880808]">Every Drop Counts.</span>
            </h2>
            <p className="text-sm font-bold text-gray-600 max-w-xl leading-relaxed">
              Welcome back, hero! Your consistent contributions are the backbone of our community. Check your stats below.
            </p>
          </div>
          
          <div className="flex -space-x-3 justify-center">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white bg-red-50 flex items-center justify-center text-[10px] font-black text-[#880808] shadow-sm">
                 {String.fromCharCode(64 + i)}
               </div>
             ))}
             <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white bg-[#880808] flex items-center justify-center text-[10px] font-black text-white shadow-md">
               +12
             </div>
          </div>
        </div>
      </div>

      {/* ================= 2-COLUMN MOBILE GRID ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {donorStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default Hero;