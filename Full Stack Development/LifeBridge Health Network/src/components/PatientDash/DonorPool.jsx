import React, { useState } from 'react';
import { 
  MdSearch, MdOutlineFilterList, MdOutlineLocationOn, 
  MdOutlineVerified, MdCall, MdChatBubbleOutline, 
  MdOutlineHistory, MdStar,MdOutlinePersonOutline
} from "react-icons/md";

const DonorPool = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const donors = [
    { id: 1, name: "Rohan Kapoor", group: "O+", age: 32, donations: 12, rating: 4.9, distance: "2.4 km", location: "Bhopal", lastDonated: "11 Apr", img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Priya Sharma", group: "B+", age: 28, donations: 5, rating: 4.7, distance: "3.1 km", location: "Arera", lastDonated: "02 Feb", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Anuj Verma", group: "A-", age: 35, donations: 8, rating: 5.0, distance: "1.2 km", location: "Indore", lastDonated: "20 Jan", img: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Meera Nair", group: "O-", age: 30, donations: 15, rating: 4.8, distance: "4.5 km", location: "Bhopal", lastDonated: "15 Mar", img: "https://i.pravatar.cc/150?u=4" },
     { id: 1, name: "Rohan Kapoor", group: "O+", age: 32, donations: 12, rating: 4.9, distance: "2.4 km", location: "Bhopal", lastDonated: "11 Apr", img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Priya Sharma", group: "B+", age: 28, donations: 5, rating: 4.7, distance: "3.1 km", location: "Arera", lastDonated: "02 Feb", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Anuj Verma", group: "A-", age: 35, donations: 8, rating: 5.0, distance: "1.2 km", location: "Indore", lastDonated: "20 Jan", img: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Meera Nair", group: "O-", age: 30, donations: 15, rating: 4.8, distance: "4.5 km", location: "Bhopal", lastDonated: "15 Mar", img: "https://i.pravatar.cc/150?u=4" },
  ];

  return (
    <div className="min-h-screen bg-transparent  pb-10 w-full animate-[fadeIn_0.5s_ease-out]">
      
      {/* 1. COMPACT HEADER */}
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 md:px-8 md:py-6 rounded-[20px] border border-gray-300 shadow-lg">
  {/* Left Side: Icon & Titles */}
  <div className="flex items-center gap-3">
    {/* High-visibility Icon Container */}
    <div className="p-2.5 bg-red-50 rounded-lg text-[#880808] border border-red-200">
      <MdOutlinePersonOutline size={20} />
    </div>
    <div className="flex flex-col text-left">
      <h1 className="text-lg md:text-[23px] font-bold text-gray-900 tracking-tight leading-none">
        Donor <span className="text-[#880808]">Pool</span>
      </h1>
      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mt-1">
        Verified Clinical Directory
      </p>
    </div>
  </div>

  {/* Right Side: Search & Filter */}
  <div className="flex items-center gap-2 w-full md:w-auto">
    <div className="relative flex-1 md:w-80 group">
      <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#880808] transition-colors" size={18} />
      <input 
        type="text" 
        placeholder="Search by group or name..."
        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:bg-white focus:border-[#880808] text-[13px] font-semibold transition-all shadow-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
    
    <button className="p-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-red-50 hover:text-[#880808] hover:border-red-200 transition-all shadow-sm">
      <MdOutlineFilterList size={20} />
    </button>
  </div>
</section>

      {/* 2. COMPACT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {donors.map((donor) => (
          <div key={donor.id} className="group bg-white rounded-[28px] border border-gray-100 p-4 hover:shadow-xl hover:border-[#880808]/20 transition-all duration-300 relative">
            
            {/* Minimal Blood Group Badge */}
            <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-[#880808] text-white flex items-center justify-center font-black text-[10px] shadow-md">
              {donor.group}
            </div>

            {/* Profile Section - Reduced Size */}
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <img src={donor.img} alt={donor.name} className="w-11 h-11 rounded-xl object-cover border border-gray-100" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
                   <MdOutlineVerified className="text-white text-[8px]" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-gray-800 text-sm truncate tracking-tight">{donor.name}</h3>
                <div className="flex items-center text-amber-500 gap-0.5 font-bold text-[9px]">
                    <MdStar size={10} /> {donor.rating} <span className="text-gray-300 ml-1">| {donor.age} Yrs</span>
                </div>
              </div>
            </div>

            {/* Mini Stats Bar */}
            <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2 mb-3 border border-gray-100/50">
               <div className="text-left">
                  <p className="text-[8px] font-bold text-gray-400 uppercase leading-none">Donations</p>
                  <p className="text-xs font-bold text-gray-800 mt-0.5">{donor.donations}</p>
               </div>
               <div className="text-right">
                  <p className="text-[8px] font-bold text-gray-400 uppercase leading-none">Radius</p>
                  <p className="text-xs font-bold text-[#880808] mt-0.5">{donor.distance}</p>
               </div>
            </div>

            {/* Location & Last Donation - Compact */}
            <div className="space-y-1.5 mb-4">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-gray-500">
                <MdOutlineLocationOn className="text-[#880808]" size={14} /> 
                <span className="truncate">{donor.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-gray-400">
                <MdOutlineHistory size={14} /> 
                <span>Last: {donor.lastDonated}</span>
              </div>
            </div>

            {/* Action Buttons - Optimized Height */}
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[10px] font-bold text-black hover:bg-[#880808] hover:text-white transition-all">
                <MdCall size={14} /> Call
              </button>
              <button className="flex items-center justify-center gap-1.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[10px] font-bold text-black hover:bg-[#880808] hover:text-white transition-all">
                <MdChatBubbleOutline size={14} /> Ping
              </button>
              <button className="col-span-2 py-2.5 bg-black text-white rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-[#880808] transition-all shadow-md active:scale-95">
                Request Donation
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="mt-8 text-center">
        <button className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#880808]">
          View More Donors
        </button>
      </div>
    </div>
  );
};

export default DonorPool;