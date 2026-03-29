import React from 'react';

const FeatureCard = ({ title, desc, icon, color }) => {
  return (
    <div className="bg-[#ffffff] p-[32px] rounded-[24px] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.05)] border-[1px] border-[#f1f5f9] hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.1)] hover:translate-y-[-8px] transition-all duration-[400ms] flex flex-col items-center text-center group cursor-pointer w-full max-w-[280px]">
      
      {/* Icon Wrapper with Custom Color from Props */}
      <div className={`w-[72px] h-[72px] ${color} rounded-[20px] flex items-center justify-center text-[28px] mb-[20px] group-hover:scale-[1.1] transition-transform duration-[300ms]`}>
        {icon}
      </div>
      
      <h3 className="text-[18px] font-[800] text-[#1e293b] mb-[12px] leading-[1.2]">
        {title}
      </h3>
      
      <p className="text-[14px] text-[#64748b] leading-[1.6] font-[500]">
        {desc}
      </p>

    </div>
  );
};

export default FeatureCard;