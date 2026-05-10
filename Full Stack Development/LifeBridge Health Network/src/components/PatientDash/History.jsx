import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  MdOutlineHistory, MdOutlineFileDownload, MdSearch, 
  MdOutlineCheckCircle, MdOutlineCancel, MdOutlineTimer,
  MdOutlineLocationOn, MdOutlineAccessTime, MdFilterList
} from "react-icons/md";

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔄 Fetch Completed Requests from Atlas
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        // Hum vahi patientId use karenge jo logged in hai
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        const patientId = loggedInUser?._id || "663a7d4e3f1a2c001f8e4b5b"; // Fallback for testing

        const res = await axios.get(`http://localhost:5000/api/requests/patient/${patientId}`);
        
        // Sirf 'Completed' requests ko filter karke store karenge
        const completedRequests = res.data.filter(req => req.status === 'Completed');
        setHistoryData(completedRequests);
      } catch (err) {
        console.error("History Load Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  // 🔍 Filter logic for search bar
  const filteredHistory = historyData.filter((item) => {
    const searchLower = searchQuery.toLowerCase().trim();
    return (
      item.name.toLowerCase().includes(searchLower) ||
      item.hospital.toLowerCase().includes(searchLower) ||
      item.donorName?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-transparent pb-10 w-full animate-[fadeIn_0.5s_ease-out]">
      
      {/* 1. HEADER SECTION (Design Unchanged) */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 md:px-8 md:py-6 rounded-[20px] border border-gray-300 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-red-50 rounded-lg text-[#880808] border border-red-200">
            <MdOutlineHistory size={20} />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-lg md:text-[23px] font-bold text-gray-900 tracking-tight leading-none">Request History</h1>
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mt-1">Clinical Archives</p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-80 group">
            <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#880808]" size={18} />
            <input 
              type="text" 
              placeholder="Search records..."
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:bg-white focus:border-[#880808] text-[13px] font-semibold transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <button className="p-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
            <MdFilterList size={20} />
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-[#880808] transition-all shadow-md">
            <MdOutlineFileDownload size={18} /> Export
          </button>
        </div>
      </section>

      {/* 2. LIST VIEW */}
      <div className="w-full space-y-4">
        {loading ? (
          <p className="text-center py-10 font-bold text-gray-400 italic">Accessing Archives...</p>
        ) : filteredHistory.length === 0 ? (
          <div className="bg-white p-16 rounded-[32px] border-2 border-dashed border-gray-100 text-center">
            <p className="text-gray-300 font-bold italic text-lg tracking-tight">No completed records found.</p>
          </div>
        ) : (
          filteredHistory.map((item) => (
            <div key={item._id} className="group bg-white p-4 md:px-8 md:py-5 rounded-[22px] border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#880808]/40 transition-all shadow-sm hover:shadow-md">
              
              {/* Left: Identity */}
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-[13px] border bg-emerald-50 text-emerald-700 border-emerald-200 transition-transform group-hover:scale-105">
                  {item.bloodGroup}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-800 text-[15px] tracking-tight">{item.name} (Patient)</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                      <MdOutlineAccessTime size={13} className="text-red-700" /> 
                      {/* Formatting Atlas updatedAt date */}
                      {new Date(item.updatedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </p>
                    <span className="text-gray-300">|</span>
                    <p className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                      <MdOutlineCheckCircle size={13} className="text-emerald-600" /> Success
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle: Data points */}
              <div className="grid grid-cols-2 md:flex items-center gap-10 md:gap-16 text-left">
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Medical Facility</p>
                  <p className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                    <MdOutlineLocationOn className="text-[#880808]" size={14} /> {item.hospital}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Assigned Donor</p>
                  <p className="text-xs font-bold text-gray-800">{item.donorName || "Verified Donor"}</p>
                </div>
              </div>

              {/* Right: Action and Badge */}
              <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-none pt-4 md:pt-0">
                <span className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border bg-emerald-50 text-emerald-700 border-emerald-100">
                  <MdOutlineCheckCircle size={14} /> 
                  COMPLETED
                </span>
                <button 
                  onClick={() => window.print()} // Placeholder for export
                  className="p-2.5 text-gray-700 bg-white border border-gray-200 hover:border-[#880808] hover:text-[#880808] hover:bg-red-50 rounded-xl transition-all shadow-sm"
                >
                  <MdOutlineFileDownload size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;