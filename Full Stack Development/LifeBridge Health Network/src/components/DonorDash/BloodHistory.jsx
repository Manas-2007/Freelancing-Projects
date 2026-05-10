import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LuDownload, LuHistory, LuHeart } from "react-icons/lu";

const DonationHistory = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, group: "--", lives: 0 });

  useEffect(() => {
    const fetchDonorHistory = async () => {
      try {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem('user'));
        const donorId = user?._id || "663a7d4e3f1a2c001f8e4b5a"; 

        const res = await axios.get(`http://localhost:5000/api/requests/donor/${donorId}`);
        
        // 1. Sirf 'Completed' requests ko filter karo
        const completed = res.data.filter(req => req.status === 'Completed');
        setHistoryData(completed);

        // 2. Stats Calculate karo
        setStats({
          total: completed.length,
          group: user?.bloodGroup || "B+",
          lives: completed.length * 3 // Standard calculation: 1 donation saves 3 lives
        });
      } catch (err) {
        console.error("History fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDonorHistory();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 mt-[20px]">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-left">
          <h1 className="text-3xl font-[700] text-gray-900 tracking-tight flex items-center gap-3">
            <LuHistory className="text-red-600" /> Donation History
          </h1>
          <p className="text-gray-500 font-medium mt-1">Review your past contributions and lifetime impact.</p>
        </div>
        <button 
          onClick={() => window.print()}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-red-200 w-full md:w-auto"
        >
          <LuDownload size={20} /> Download All Records
        </button>
      </div>

      {/* 2. STATS OVERVIEW */}
      <div className="grid grid-cols-3 gap-3 md:gap-6">
        {[
          { label: "Total Donations", val: stats.total, color: "text-gray-900" },
          { label: "Blood Type", val: stats.group, color: "text-red-600" },
          { label: "Lives Impacted", val: `≈${stats.lives}`, color: "text-gray-900" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-[22px] md:rounded-[28px] border border-gray-100 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:border-red-200 cursor-default group relative overflow-hidden">
            <p className="text-gray-400 font-bold text-[8px] md:text-[11px] uppercase tracking-widest group-hover:text-red-400 text-left">
              {stat.label}
            </p>
            <p className={`text-xl md:text-3xl font-black mt-1 md:mt-2 text-left ${stat.color}`}>
              {stat.val}
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-red-600 rounded-full transition-all duration-300 group-hover:w-1/3" />
          </div>
        ))}
      </div>

      {/* 3. HISTORY TABLE */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px] md:min-w-full">
            <thead>
              <tr className="bg-[#f8f9fa] border-b border-gray-100">
                <th className="pl-8 pr-4 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">Hospital & Location</th>
                <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">Donation Date</th>
                <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">Units & Type</th>
                <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">Patient Name</th>
                <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr><td colSpan="6" className="py-20 text-center font-bold text-gray-400 italic">Accessing Clinical Records...</td></tr>
              ) : historyData.length === 0 ? (
                <tr><td colSpan="6" className="py-20 text-center font-bold text-gray-300 italic">No history found. Start your journey today!</td></tr>
              ) : (
                historyData.map((item) => (
                  <tr key={item._id} className="hover:bg-red-50/40 transition-all duration-300 group">
                    <td className="pl-8 pr-4 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-black text-xs group-hover:bg-red-600 group-hover:text-white transition-colors shadow-sm uppercase">
                          {item.hospital.charAt(0)}
                        </div>
                        <div className="text-left">
                          <p className="font-[700] text-gray-800 text-sm tracking-tight">{item.hospital}</p>
                          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Verified Facility</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <p className="text-sm font-bold text-gray-700">
                        {new Date(item.updatedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </p>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-left">
                      <p className="text-sm font-[600] text-gray-800">{item.units} Units</p>
                      <p className="text-[11px] text-red-500 font-[700] uppercase tracking-tighter">Whole Blood</p>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-left">
                      <p className="text-sm font-medium text-gray-500 italic">"{item.name}"</p>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black border border-green-100 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* 4. FOOTER NOTE */}
      <div className="flex items-center gap-4 p-6 bg-red-50 rounded-[24px] border border-red-100 text-left">
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