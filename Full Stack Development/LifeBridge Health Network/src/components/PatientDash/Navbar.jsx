import React from 'react';
import { MdOutlineSearch, MdNotificationsNone } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi"; 
import { IoCallOutline, IoCheckmarkCircleOutline } from "react-icons/io5";


const Navbar = ({ setIsOpen, userName = "Aanya" }) => {
  return (
    <>
      <nav className="h-[70px] md:h-[80px] bg-white/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 transition-all border-b border-gray-100 shadow-lg">
        
        {/* LEFT: Greeting (Desktop) / Logo (Mobile) */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden text-2xl text-gray-600 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <HiOutlineMenuAlt2 />
          </button>

          {/* MOBILE LOGO */}
          <div className="flex items-center gap-1.5 md:hidden">
            <img src="/navlogo.jpg" className="w-[32px] h-[32px] object-contain" alt="Logo" />
            <h1 className="text-[20px] font-bold text-[#1a1a1a] tracking-tight">
              Life<span className="text-[#880808]">Drop</span>
            </h1>
          </div>

          {/* DESKTOP GREETING */}
          <div className="hidden md:block">
            <h2 className="text-2xl font-[700] text-gray-900 flex items-center gap-2">
              Welcome <span className="text-[#880808]">{userName}</span>
            </h2>
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[1.5px] mb-3">
  Life-Saving Connections • <span className="text-[#880808]/80">Real-time Oversight</span>
</p>
          </div>
        </div>

        {/* RIGHT: Desktop Search & Profile */}
        <div className="flex items-center gap-3 md:gap-6">
          
          {/* DESKTOP SEARCH */}
          <div className="relative hidden lg:block">
            <MdOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="Search requests near you..." 
              className="pl-12 pr-6 py-2 bg-gray-50/50 border border-gray-600 rounded-2xl text-sm focus:outline-none focus:ring-2 ring-red-600 focus:bg-white w-[280px] transition-all"
            />
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Notification Icon */}
            <button className="p-2 text-gray-700 hover:text-[#880808] hover:bg-red-50 rounded-xl transition-all relative">
              <MdNotificationsNone size={24} className="md:size-[26px]" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#880808] rounded-full border-2 border-white"></span>
            </button>

            {/* Profile Section */}
            <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-6 border-l border-gray-100">
              <div className="flex flex-col text-right">
                <p className="text-[13px] md:text-sm font-black text-gray-800 leading-none">
                  {userName}
                </p>
                <p className="hidden md:block text-[10px] font-bold text-[#880808] uppercase tracking-tighter mt-1">
                  Verified User
                </p>
              </div>

              <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-gray-50 to-gray-200 border border-gray-700 flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 transition-all overflow-hidden ring-2 ring-transparent hover:ring-red-100">
                <span className="text-[#880808] font-black text-sm md:text-lg">
                  {userName ? userName.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SEARCH BAR (Separate Row) */}
      <div className="w-full bg-white px-4 py-3 md:hidden border-b border-gray-100">
        <div className="relative w-[95%] mx-auto">
          <MdOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
          <input 
            type="text" 
            placeholder="Search requests near you..." 
            className="w-full pl-11 pr-4 py-2.5 bg-gray-100 border border-red-400 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:bg-white transition-all shadow-sm"
          />
        </div>
      </div>
    </>
  );
};




// My Blood Requets Component

export const BloodRequests = () => {
  const requests = [
    {
      id: 1,
      name: "Rohan K.",
      status: "Critical",
      units: 2,
      hospital: "Apollo Hospital",
      distance: "1.8 km",
      time: "20 min ago",
      bloodGroup: "B+",
      note: "ICU patient — urgent transfusion needed"
    },
    {
      id: 2,
      name: "Neha S.",
      status: "Urgent",
      units: 1,
      hospital: "Yashoda Hospital",
      distance: "3.2 km",
      time: "2 hrs ago",
      bloodGroup: "B+",
      note: "Anemia patient, scheduled surgery tomorrow"
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-12 animate-[fadeIn_0.8s_ease-out]">
      
      {/* ================= LEFT: REQUESTS SECTION (70%) ================= */}
      <div className="flex-[1.8] space-y-6">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-50 rounded-lg">
              <MdOutlineGpsFixed className="text-[#880808] text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 leading-none">Requests Near You</h2>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Matched by Blood Group & City</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[#880808] text-[10px] font-black uppercase">
              {requests.length} active
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {requests.map((req) => (
            <div key={req.id} className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-50 transition-all duration-300 group">
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                
                {/* User Info Group */}
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100 flex items-center justify-center text-[#880808] font-black text-xl shadow-sm group-hover:scale-105 transition-transform">
                    {req.bloodGroup}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h4 className="font-bold text-gray-900 text-lg">{req.name}</h4>
                      <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-md ${req.status === 'Critical' ? 'bg-red-600 text-white shadow-sm' : 'bg-amber-100 text-amber-700'}`}>
                        {req.status}
                      </span>
                      <span className="bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase px-2.5 py-1 rounded-md border border-emerald-100 flex items-center gap-1">
                        <IoCheckmarkCircleOutline /> Match
                      </span>
                    </div>
                    <p className="text-sm font-bold text-gray-600">Needs <span className="text-[#880808]">{req.units} units</span> at {req.hospital}</p>
                    <p className="text-[11px] font-semibold text-gray-400 mt-1 italic opacity-80">
                      "{req.note}"
                    </p>
                  </div>
                </div>

                {/* Action Buttons: Perfectly Balanced */}
                <div className="flex items-center gap-3 w-full xl:w-auto pt-4 xl:pt-0 border-t xl:border-none border-gray-50">
                  <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 hover:border-[#880808] hover:text-[#880808] transition-all active:scale-95">
                    <IoCallOutline className="text-lg" />
                    Call Hospital
                  </button>
                  <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#880808] text-white font-bold text-sm shadow-lg shadow-red-100 hover:bg-black hover:shadow-black/10 transition-all active:scale-95">
                    Accept Request
                  </button>
                </div>
              </div>

              {/* Sub-Footer Card Details */}
              <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400">
                      <span className="p-1 bg-gray-50 rounded-md">📍</span> {req.distance} away
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400">
                      <span className="p-1 bg-gray-50 rounded-md">🕒</span> {req.time}
                    </span>
                  </div>
                  <button className="text-[10px] font-black text-[#880808] uppercase tracking-widest hover:underline">View Location</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT: SIDE PANEL (30%) ================= */}
      <div className="flex-1">
        <div className="sticky top-24 space-y-6">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden group">
            {/* Animated Glow Refraction */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#880808] rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-bold text-xl">Donor Status</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Live Identity</p>
                </div>
                <div className="p-2 bg-emerald-500/20 rounded-xl">
                  <MdVerified className="text-emerald-400 text-3xl" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Current Eligibility</p>
                  <p className="text-md font-bold text-emerald-400">Ready to Donate</p>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Achievement</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold">Top 5% Donor</p>
                    <span className="text-xl">🏆</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 py-4 bg-white text-gray-900 font-black rounded-2xl text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20">
                View Certificates
              </button>
            </div>
          </div>

          {/* Additional Help Tip */}
          <div className="bg-red-50/50 border border-red-100 rounded-3xl p-6">
            <h4 className="text-[11px] font-black text-[#880808] uppercase tracking-widest mb-2">Did you know?</h4>
            <p className="text-xs font-bold text-gray-600 leading-relaxed">
              Donating whole blood can save up to three lives. Your next eligible date is confirmed for Feb 12th.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Navbar;
