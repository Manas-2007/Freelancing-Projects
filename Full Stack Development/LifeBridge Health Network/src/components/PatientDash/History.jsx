import React, { useState } from 'react';
import { 
  MdOutlineHistory, MdOutlineFileDownload, MdSearch, 
  MdOutlineCheckCircle, MdOutlineCancel, MdOutlineTimer,
  MdOutlineLocationOn, MdOutlineAccessTime, MdFilterList
} from "react-icons/md";

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const historyData = [
    { id: 1, patient: "Aarav Sharma", group: "O+", units: 2, hospital: "City Hospital", date: "22 Apr 2026", status: "Success", donor: "Vikram Seth", duration: "45m" },
    { id: 2, patient: "Ishani Verma", group: "B-", units: 1, hospital: "Metro Clinic", date: "15 Apr 2026", status: "Cancelled", donor: "N/A", duration: "—" },
    { id: 3, patient: "Kabir Singh", group: "A+", units: 3, hospital: "Red Cross", date: "02 Mar 2026", status: "Success", donor: "Anuj Verma", duration: "1.2h" },
    { id: 4, patient: "Rohan Kapoor", group: "O-", units: 2, hospital: "LifeLine", date: "20 Feb 2026", status: "Expired", donor: "N/A", duration: "6h" },
  ];

  return (
    <div className="min-h-screen bg-transparent pb-10 w-full animate-[fadeIn_0.5s_ease-out]">
      
      {/* 1. SYNCED HEADER SECTION */}
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
          {/* Adjusted Input height and text-size to match header bulk */}
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
          
          {/* Refined Filter Button */}
          <button className="p-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
            <MdFilterList size={20} />
          </button>

          {/* Export Button matching header padding intensity */}
          <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-[#880808] transition-all active:scale-95 shadow-md">
            <MdOutlineFileDownload size={18} /> Export
          </button>
        </div>
      </section>

      {/* 2. SYNCED LIST VIEW */}
      <div className="w-full space-y-4">
        {historyData.map((item) => (
          <div key={item.id} className="group bg-white p-4 md:px-8 md:py-5 rounded-[22px] border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#880808]/40 transition-all cursor-default shadow-sm hover:shadow-md">
            
            {/* Left: Identity */}
            <div className="flex items-center gap-5">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-[13px] border transition-transform group-hover:scale-105 ${
                item.status === 'Success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                item.status === 'Expired' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-gray-50 text-gray-600 border-gray-200'
              }`}>
                {item.group}
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800 text-[15px] tracking-tight">{item.patient}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                    <MdOutlineAccessTime size={13} className="text-red-700" /> {item.date}
                  </p>
                  <span className="text-gray-300">|</span>
                  <p className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                    <MdOutlineTimer size={13} className="text-blue-600" /> {item.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Middle: Data points with higher visibility labels */}
            <div className="grid grid-cols-2 md:flex items-center gap-10 md:gap-16 text-left">
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Medical Facility</p>
                <p className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                  <MdOutlineLocationOn className="text-[#880808]" size={14} /> {item.hospital}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Assigned Donor</p>
                <p className="text-xs font-bold text-gray-800">{item.donor}</p>
              </div>
            </div>

            {/* Right: Action and Badge */}
            <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-none pt-4 md:pt-0">
              <span className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border ${
                item.status === 'Success' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
                item.status === 'Expired' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-gray-100 text-gray-600 border-gray-200'
              }`}>
                {item.status === 'Success' && <MdOutlineCheckCircle size={14} />}
                {item.status === 'Expired' && <MdOutlineTimer size={14} />}
                {item.status === 'Cancelled' && <MdOutlineCancel size={14} />}
                {item.status}
              </span>
              <button className="p-2.5 text-gray-700 bg-white border border-gray-200 hover:border-[#880808] hover:text-[#880808] hover:bg-red-50 rounded-xl transition-all shadow-sm">
                <MdOutlineFileDownload size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;