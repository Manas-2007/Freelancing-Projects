import React from 'react';

const SettingsCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-[30px] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.15)] transition-all duration-500 flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-1.5 h-5 bg-[#3b82f6] rounded-full"></div>
        <h3 className="text-[20px] font-[700] text-blue-800 tracking-tight">
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
};

export default SettingsCard;