import React from 'react';
import { MdOutlineBloodtype, MdOutlineSearch } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="space-y-8 mt-2 animate-[fadeIn_0.3s_ease-out]">
      
      {/* GREETING CARD */}
      <div className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Welcome back, <span className="text-[#880808]">Manas</span>! 👋
          </h1>
          <p className="text-gray-500 mt-2 font-medium">
            Need assistance? Create a blood request or search for donors nearby.
          </p>
          
          <div className="flex gap-3 mt-6">
            <button className="bg-[#880808] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-red-700 transition-all active:scale-95">
              <BiPlusMedical /> Create Request
            </button>
          </div>
        </div>

        {/* Status Badge */}
        <div className="bg-[#fff5f5] p-6 rounded-2xl border border-red-50 w-full md:w-auto">
          <p className="text-[10px] font-bold text-red-400 uppercase tracking-[2px] mb-1">Account Status</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-xl font-bold text-gray-800">Verified Patient</span>
          </div>
        </div>
      </div>

      {/* QUICK STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: "Active Requests", val: "0", type: "red" },
          { label: "Nearby Donors", val: "142", type: "rose" },
          { label: "Matches Found", val: "12", type: "orange" },
          { label: "Total History", val: "5", type: "red" }
        ].map((stat, idx) => (
          <div key={idx} className="p-6 rounded-[28px] bg-white border border-gray-100 shadow-sm hover:-translate-y-1 transition-all">
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[1.5px] mb-3">{stat.label}</p>
            <h3 className={`text-3xl font-black ${stat.type === "red" ? "text-red-600" : "text-rose-500"}`}>{stat.val}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

// CRITICAL: This line must be here to fix the error!
export default Hero;