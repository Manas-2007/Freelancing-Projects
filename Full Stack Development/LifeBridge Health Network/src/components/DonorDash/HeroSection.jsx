import React from 'react';

const HeroSection = ({ 
  donor, 
  onToggle 
}) => {
  
  // Updated style for dynamic values (Red name as requested)
  const dynamicStyle = "text-red-700 underline decoration-dotted";
  const infoStyle = "text-amber-600 font-bold"; // Keeping other info distinct

  return (
    <div className="w-full bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8 mt-4">
      
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full lg:w-auto">
        
        {/* 1. DYNAMIC BLOOD GROUP SPHERE */}
        <div className="relative group shrink-0">
          <div className="absolute inset-0 bg-[#880808] rounded-full blur-[20px] opacity-10 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-gradient-to-br from-[#cc0000] to-[#880808] rounded-full flex items-center justify-center shadow-[inset_-8px_-8px_15px_rgba(0,0,0,0.3),8px_8px_15px_rgba(136,8,8,0.3)]">
            <span className="text-white text-[32px] md:text-[40px] font-black">
              {donor.bloodGroup}
            </span>
          </div>
        </div>

        {/* 2. DYNAMIC DONOR DETAILS */}
        <div className="text-center md:text-left flex-1">
          <p className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-[2px] mb-1">Donor Profile</p>
          <h2 className="text-[28px] md:text-[36px] font-black text-[#1a1a1a] leading-tight mb-2">
            {/* Name changed to Red */}
            <span className={dynamicStyle}>{donor.name}</span>
          </h2>
          
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-4 text-[12px] md:text-[13px] text-gray-500 font-medium">
            <span className="flex items-center gap-1">📍 <span className={infoStyle}>{donor.location}</span></span>
            <span>• Age <span className={infoStyle}>{donor.age}</span></span>
            <span>• <span className={infoStyle}>{donor.donations}</span> donations</span>
          </div>

          {/* 3. DYNAMIC PROGRESS */}
          <div className="mt-6 w-full max-w-[350px] mx-auto md:mx-0">
            <div className="flex justify-between items-end mb-2">
              <p className="text-[11px] md:text-[12px] font-bold text-gray-700">Eligibility for next donation</p>
              <p className="text-[10px] md:text-[11px] font-bold text-[#880808]">
                <span className={infoStyle}>{donor.daysLeft}</span>/{donor.totalDays} days
              </p>
            </div>
            <div className="w-full h-[6px] md:h-[7px] bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#880808] rounded-full transition-all duration-700" 
                style={{ width: `${(donor.daysLeft / donor.totalDays) * 100}%` }}
              ></div>
            </div>
            <p className="mt-2 text-[10px] md:text-[11px] text-gray-500 font-medium italic">
              Eligible to donate again on <span className={`font-bold ${infoStyle}`}>{donor.nextDate}</span>
            </p>
          </div>
        </div>
      </div>

      {/* 4. AVAILABILITY CARD WITH TOGGLE */}
      {/* Changed hidden lg:block to w-full lg:w-[220px] for responsiveness */}
      <div className="w-full lg:w-[220px] bg-[#f8f9fa] p-5 rounded-[24px] border border-gray-200 shadow-inner">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[11px] font-bold text-black uppercase tracking-wider">Availability</p>
          
          {/* Dynamic Toggle Switch */}
          <button 
            onClick={onToggle}
            className={`w-[42px] h-[22px] rounded-full relative cursor-pointer transition-all duration-300 p-1 border-none outline-none ${
                donor.isAvailable ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <div className={`w-[14px] h-[14px] bg-white rounded-full transition-all duration-300 shadow-sm ${
                donor.isAvailable ? 'translate-x-[20px]' : 'translate-x-0'
            }`}></div>
          </button>
        </div>

        <p className="text-[14px] font-black text-gray-800 mb-3 text-center lg:text-left">
            {donor.isAvailable ? "Available to donate" : "Currently on break"}
        </p>
        
        {/* Status Badge */}
        <div className={`flex items-center justify-center lg:justify-start gap-2 text-[10px] font-bold p-2.5 rounded-xl border transition-all duration-300 ${
            donor.isAvailable 
            ? 'text-green-700 bg-green-100/50 border-green-200' 
            : 'text-red-700 bg-red-50 border-red-100'
        }`}>
            <span className={`w-2 h-2 rounded-full shrink-0 ${
            donor.isAvailable ? 'bg-green-500 animate-pulse' : 'bg-red-500'
            }`}></span>
            <span className="text-center">
              {donor.isAvailable ? "Visible to nearby doctors" : "Hidden from search results"}
            </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;