import React, { useState } from 'react';
import { 
  MdOutlineBloodtype, MdAdd, MdOutlineLocationOn, 
  MdClose, MdOutlinePerson, MdOutlineLocalHospital, 
  MdOutlineCalendarToday, MdOutlineScale 
} from "react-icons/md";
import { IoHeartSharp } from "react-icons/io5";

const BloodReq = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Updated Data Pool with Status and Matches
  const nearbyRequests = [
    { id: 1, patient: "Aarav Sharma", group: "O+", units: 2, hospital: "City Hospital", distance: "0.8 km", urgency: "Critical", status: "Matched", matches: 4 },
    { id: 2, patient: "Ishani Verma", group: "B-", units: 1, hospital: "Metro Clinic", distance: "1.2 km", urgency: "Normal", status: "Pending", matches: 1 },
    { id: 3, patient: "Kabir Singh", group: "A+", units: 3, hospital: "Red Cross", distance: "2.5 km", urgency: "Urgent", status: "Matched", matches: 3 },
    { id: 4, patient: "Meera Nair", group: "O-", units: 2, hospital: "LifeLine", distance: "3.1 km", urgency: "Critical", status: "Fulfilled", matches: 2 },
    { id: 5, patient: "Raj Malhotra", group: "AB+", units: 1, hospital: "St. Marys", distance: "4.0 km", urgency: "Normal", status: "Pending", matches: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 animate-[fadeIn_0.5s_ease-out]">
      
      {/* 1. HERO SECTION */}
     <section className="relative overflow-hidden bg-white rounded-[20px] p-4 md:px-8 md:py-6 border border-gray-300 shadow-lg mb-6">
  {/* Refined Glassmorphism Background Decor */}
  <div className="absolute top-0 right-0 w-48 h-48 bg-red-50/40 rounded-full blur-2xl -mr-16 -mt-16"></div>
  
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="space-y-1.5 text-left w-full md:w-auto">
      {/* Compact Badge */}
      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-50 rounded-lg border border-red-200">
        <IoHeartSharp className="text-[#880808] text-[12px]" />
        <span className="text-[9px] font-bold text-[#880808] uppercase tracking-wider">Altruism in Action</span>
      </div>
      
      {/* Balanced Heading */}
      <h1 className="text-xl md:text-[23px] font-bold text-gray-900 tracking-tight leading-none">
        Nearby <span className="text-[#880808]">Requests</span>
      </h1>
      
      {/* High-Visibility Paragraph */}
      <p className="text-gray-600 font-semibold max-w-xl leading-snug text-[11px] md:text-[12px]">
        Monitor active blood requirements in your vicinity. Your response 
        coordinates life-saving efforts across the clinical network.
      </p>
    </div>

    {/* Compact Action Button */}
    <button 
      onClick={() => setIsModalOpen(true)}
      className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#880808] transition-all active:scale-95 shadow-md w-full md:w-auto justify-center"
    >
      <MdAdd className="text-lg" />
      New Blood Request
    </button>
  </div>
</section>

      {/* 2. TABLE SECTION */}
<div className="rounded-[32px] border border-gray-600 shadow-xl overflow-hidden">
  {/* Custom Scrollbar Logic:
      - [&::-webkit-scrollbar]:h-[5px] -> Sets height of horizontal scrollbar
      - [&::-webkit-scrollbar-thumb]:bg-red-600 -> Sets the scroll handle color
      - [&::-webkit-scrollbar-track]:bg-gray-100 -> Sets the background track
  */}
  <div className="overflow-x-auto 
    [&::-webkit-scrollbar]:h-[5px] 
    md:[&::-webkit-scrollbar]:h-0 
    [&::-webkit-scrollbar-track]:bg-gray-100 
    [&::-webkit-scrollbar-thumb]:bg-red-600 
    [&::-webkit-scrollbar-thumb]:rounded-full">
    
    {/* min-w-[800px] ensures the table is wider than the screen on mobile to trigger scroll */}
    <table className="w-full text-left border-collapse table-auto min-w-[800px] md:min-w-full">
      <thead>
        <tr className="bg-gray-50/80 border-b-2 border-gray-500">
          <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest border-r border-gray-100 last:border-r-0">S.No</th>
          <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest border-r border-gray-100 last:border-r-0">Patient Details</th>
          <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest text-center border-r border-gray-100 last:border-r-0">Group</th>
          <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest text-center border-r border-gray-100 last:border-r-0">Units</th>
          <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest border-r border-gray-100 last:border-r-0">Hospital</th>
          <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest border-r border-gray-100 last:border-r-0 text-center">Urgency</th>
          <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest border-r border-gray-100 last:border-r-0 text-center">Status</th>
          <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest text-right">Matches</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {nearbyRequests.map((req, index) => (
          <tr key={req.id} className="group hover:bg-red-50/20 transition-colors cursor-default">
            <td className="p-5 text-sm font-bold text-gray-400 border-r border-gray-50 last:border-r-0 text-center">{index + 1}</td>
            
            <td className="p-5 border-r border-gray-50 last:border-r-0 min-w-[180px]">
              <p className="font-bold text-gray-800 text-sm leading-none">{req.patient}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-1.5">ID: REQ-00{req.id}</p>
            </td>
            
            <td className="p-5 text-center border-r border-gray-50 last:border-r-0">
              <span className="inline-block w-10 h-10 rounded-xl bg-red-700 text-white font-black text-sm leading-10 shadow-md group-hover:rotate-6 transition-transform">
                {req.group}
              </span>
            </td>
            
            <td className="p-5 text-center font-bold text-gray-600 text-sm border-r border-gray-50 last:border-r-0">
              {req.units} <span className="text-[10px] text-gray-400 uppercase font-black">Units</span>
            </td>
            
            <td className="p-5 border-r border-gray-50 last:border-r-0">
              <p className="font-bold text-gray-600 text-sm">{req.hospital}</p>
              <p className="text-[9px] text-gray-400 font-bold flex items-center gap-0.5 mt-0.5 whitespace-nowrap">
                <MdOutlineLocationOn className="text-red-700" /> {req.distance}
              </p>
            </td>
            
            <td className="p-5 border-r border-gray-50 last:border-r-0 text-center">
              <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border inline-block whitespace-nowrap ${
                req.urgency === 'Critical' ? 'bg-red-50 text-red-600 border-red-300' : 
                req.urgency === 'Urgent' ? 'bg-amber-50 text-amber-600 border-amber-300' : 'bg-emerald-50 text-emerald-600 border-emerald-300'
              }`}>
                • {req.urgency}
              </span>
            </td>

            <td className="p-4 border-r border-gray-50 last:border-r-0 text-center">
              <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter whitespace-nowrap ${
                req.status === 'Matched' ? 'bg-blue-50 text-blue-600' : 
                req.status === 'Fulfilled' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'
              }`}>
                {req.status}
              </span>
            </td>
            
            <td className="p-5 text-right font-bold text-gray-400 text-xs whitespace-nowrap">
              <p className="text-gray-900 font-black text-sm">{req.matches} Donors</p>
              <p className="text-[9px] uppercase tracking-tighter font-black">Verified Matches</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

     {/* 3. NEW REQUEST MODAL - Optimized Zero-Scroll UI */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-[3px] animate-[fadeIn_0.2s_ease-out]" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Container: Optimized for Zero Scroll */}
          <div className="relative w-full max-w-[580px] bg-white rounded-[32px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] animate-[zoomIn_0.3s_ease-out] overflow-hidden">
            
            {/* A. HEADER */}
            <div className="p-6 md:px-10 md:pt-8 md:pb-4 bg-white relative">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute right-6 top-7 text-gray-300 hover:text-[#880808] transition-colors p-2 hover:bg-red-50 rounded-full"
              >
                <MdClose size={22} />
              </button>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">New Blood Request</h2>
              <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-[1.5px]">Clinical Emergency Broadcast</p>
            </div>

            {/* B. FORM BODY: Structured for high density (No Scroll) */}
            <form className="px-6 md:px-10 pb-8 space-y-5">
              
              {/* Row 1: Patient Name & Age */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-black uppercase tracking-wide ml-1">
                    <MdOutlinePerson className="text-[#880808]" size={14} /> Patient Name
                  </label>
                  <input type="text" placeholder="e.g. Rohan Kapoor" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:bg-white focus:border-[#880808] focus:ring-4 focus:ring-red-50 outline-none text-sm font-medium text-gray-700 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-black uppercase tracking-wide ml-1">
                    <MdOutlineCalendarToday className="text-[#880808]" size={14} /> Age
                  </label>
                  <input type="number" placeholder="Enter Age" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:bg-white focus:border-[#880808] focus:ring-4 focus:ring-red-50 outline-none text-sm font-medium text-gray-700 transition-all" />
                </div>
              </div>

              {/* Row 2: Blood Group & Units */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-black uppercase tracking-wide ml-1">
                    <MdOutlineBloodtype className="text-[#880808]" size={14} /> Blood Group
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none font-bold text-sm cursor-pointer focus:border-[#880808] focus:bg-white transition-all appearance-none">
                    {['Select Group', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map(g => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-black uppercase tracking-wide ml-1">
                    <MdOutlineScale className="text-[#880808]" size={14} /> Units Required
                  </label>
                  <input type="number" placeholder="e.g. 02" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:bg-white focus:border-[#880808] focus:ring-4 focus:ring-red-50 outline-none text-sm font-medium text-gray-700 transition-all" />
                </div>
              </div>

              {/* Row 3: Medical Facility & Urgency */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-black uppercase tracking-wide ml-1">
                    <MdOutlineLocalHospital className="text-[#880808]" size={14} /> Medical Facility
                  </label>
                  <input type="text" placeholder="Hospital / Ward" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:bg-white focus:border-[#880808] focus:ring-4 focus:ring-red-50 outline-none text-sm font-medium text-gray-700 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-black uppercase tracking-wide ml-1">
                    <IoHeartSharp className="text-[#880808]" size={14} /> Urgency Level
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none font-bold text-sm cursor-pointer focus:border-[#880808] focus:bg-white transition-all appearance-none">
                    {['Normal', 'Urgent', 'Critical'].map(u => <option key={u}>{u}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 4: Clinical Note (Single Line or Small Height) */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-black uppercase tracking-wide ml-1">Clinical Note / Context</label>
                <input type="text" placeholder="Brief requirement details..." className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:bg-white focus:border-[#880808] outline-none text-sm font-medium text-gray-700 transition-all" />
              </div>

              {/* C. FOOTER ACTION */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#880808] text-white rounded-[18px] font-bold text-sm uppercase tracking-widest shadow-[0_15px_30px_-10px_rgba(136,8,8,0.4)] hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Broadcast Request <span className="text-xl">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BloodReq;