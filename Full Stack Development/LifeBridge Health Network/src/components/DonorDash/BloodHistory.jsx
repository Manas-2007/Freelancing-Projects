import React from 'react';
import { LuDownload, LuChevronRight, LuHistory, LuHeart } from "react-icons/lu";
const DonationHistory = () => {
  // Mock Data for the full history
  const historyData = [
    { id: 1, hospital: "Apollo Hospital", city: "Bhopal", date: "12 Nov 2025", units: "1 Unit", type: "Whole Blood", status: "Completed", patient: "Rohan Sharma" },
    { id: 2, hospital: "Yashoda Hospital", city: "Hyderabad", date: "08 Aug 2025", units: "1 Unit", type: "Platelets", status: "Completed", patient: "Anonymous" },
    { id: 3, hospital: "Care Hospital", city: "Hyderabad", date: "21 Apr 2025", units: "1 Unit", type: "Whole Blood", status: "Completed", patient: "Sanya Verma" },
    { id: 4, hospital: "KIMS Hospital", city: "Bhopal", date: "02 Jan 2025", units: "1 Unit", type: "Plasma", status: "Completed", patient: "Trauma Case" },
    { id: 5, hospital: "City Care Clinic", city: "Bhopal", date: "15 Sep 2024", units: "1 Unit", type: "Whole Blood", status: "Completed", patient: "Neha Gupta" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 mt-[20px]">
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-[700] text-gray-900 tracking-tight flex items-center gap-3">
            <LuHistory className="text-red-600" /> Donation History
          </h1>
          <p className="text-gray-500 font-medium mt-1">Review your past contributions and lifetime impact.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-red-200 w-full md:w-auto">
          <LuDownload size={20} /> Download All Records
        </button>
      </div>

      {/* 2. STATS OVERVIEW (Glassmorphism) */}
<div className="grid grid-cols-3 gap-3 md:gap-6">
  {[
    { label: "Total Donations", val: "12", color: "text-gray-900" },
    { label: "Blood Type", val: "B+", color: "text-red-600" },
    { label: "Lives Impacted", val: "≈36", color: "text-gray-900" }
  ].map((stat, idx) => (
    <div 
      key={idx}
      className="
        bg-white/80 backdrop-blur-sm 
        p-4 md:p-6 
        rounded-[22px] md:rounded-[28px] 
        border border-gray-100 
        shadow-sm 
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl hover:border-red-200 
        cursor-default group
      "
    >
      <p className="text-gray-400 font-bold text-[8px] md:text-[11px] uppercase tracking-widest transition-colors group-hover:text-red-400">
        {stat.label}
      </p>
      <p className={`text-xl md:text-3xl font-black mt-1 md:mt-2 transition-transform duration-300 group-hover:scale-105 ${stat.color}`}>
        {stat.val}
      </p>
      
      {/* Hidden bottom glow line that appears on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-red-600 rounded-full transition-all duration-300 group-hover:w-1/3" />
    </div>
  ))}
</div>

      {/* 3. HISTORY TABLE / LIST */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
  
  {/* Horizontal Scroll Wrapper */}
  <div className="overflow-x-auto no-scrollbar">
    <table className="w-full text-left border-collapse min-w-[800px] md:min-w-full">
      <thead>
        <tr className="bg-[#f8f9fa] border-b border-gray-100">
          {/* 1. Aligned with Avatar + Name */}
          <th className="pl-8 pr-4 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">
            Hospital & Location
          </th>
          
          {/* 2. Aligned with Date Text */}
          <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">
            Donation Date
          </th>
          
          {/* 3. Aligned with Units/Type Stack */}
          <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">
            Units & Type
          </th>
          
          {/* 4. Aligned with Italic Patient Name */}
          <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">
            Patient / Reason
          </th>
          
          {/* 5. Aligned with Status Badge */}
          <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">
            Status
          </th>
          
          {/* 6. Aligned with Download Button */}
          <th className="pr-8 pl-4 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px] text-right">
            Action
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-50">
        {historyData.map((item) => (
          <tr key={item.id} className="hover:bg-red-50/40 transition-all duration-300 group">
            
            {/* MATCHED PADDING: pl-8 pr-4 */}
            <td className="pl-8 pr-4 py-6 whitespace-nowrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-black text-xs group-hover:bg-red-600 group-hover:text-white transition-colors shadow-sm">
                  {item.hospital.charAt(0)}
                </div>
                <div>
                  <p className="font-[700] text-gray-800 text-sm tracking-tight">{item.hospital}</p>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">{item.city}</p>
                </div>
              </div>
            </td>

            {/* MATCHED PADDING: px-6 */}
            <td className="px-6 py-6 whitespace-nowrap">
              <p className="text-sm font-bold text-gray-700">{item.date}</p>
            </td>

            {/* MATCHED PADDING: px-6 */}
            <td className="px-6 py-6 whitespace-nowrap">
              <p className="text-sm font-[600] text-gray-800">{item.units}</p>
              <p className="text-[11px] text-red-500 font-[700] uppercase tracking-tighter">{item.type}</p>
            </td>

            {/* MATCHED PADDING: px-6 */}
            <td className="px-6 py-6 whitespace-nowrap">
              <p className="text-sm font-medium text-gray-500 italic">"{item.patient}"</p>
            </td>

            {/* MATCHED PADDING: px-6 */}
            <td className="px-6 py-6 whitespace-nowrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black border border-green-100 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                {item.status}
              </span>
            </td>

            {/* MATCHED PADDING: pr-8 pl-4 */}
            <td className="pr-8 pl-4 py-6 whitespace-nowrap text-right">
              <button className="p-2.5 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-red-600 hover:border-red-200 hover:shadow-md transition-all">
                <LuDownload size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      
      {/* 4. FOOTER NOTE */}
      <div className="flex items-center gap-4 p-6 bg-red-50 rounded-[24px] border border-red-100">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-600 shadow-sm shrink-0">
          <LuHeart size={24} />
        </div>
        <p className="text-[13px] text-red-700 font-medium leading-relaxed">
          <span className="font-black uppercase mr-1">You are a hero!</span> 
          Every donation recorded here represents a person who got a second chance at life thanks to your kindness.
        </p>
      </div>
    </div>
  );
};

export default DonationHistory;