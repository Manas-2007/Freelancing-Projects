import React, { useState, useEffect } from 'react';
import API from '../../api/axios'; 
import { FiSearch, FiFilter, FiChevronRight, FiClock } from "react-icons/fi";
import { formatDistanceToNow } from 'date-fns';

const ReqTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState("All");

  // 1. Fetch Real Requests from Database
  const fetchRequests = async () => {
  try {
    const res = await API.get('/requests/list'); 
    console.log("🔥 Raw Data from Server:", res.data); // 👈 Iska output dekho Console mein
    setRequests(res.data);
    setLoading(false);
  } catch (err) {
    console.error("❌ API Error:", err);
    setLoading(false);
  }
};

  // 2. Accept Request Logic
const handleAcceptRequest = async (requestId) => {
    // 1. Logged in Donor ki info nikaalo (Agar localStorage mein save ki hai toh)
    const loggedInUser = JSON.parse(localStorage.getItem('user')); 
    
    // Agar user nahi mil raha toh default fallback (Sirf testing ke liye)
    const currentDonorName = loggedInUser?.name || "Verified Donor";
    const currentDonorId = loggedInUser?._id || "663a7d4e3f1a2c001f8e4b5a";

    // UI Update
    setRequests(prev => prev.map(r => 
      r._id === requestId ? { ...r, status: 'Accepted', donorName: currentDonorName } : r
    ));

    try {
      // 2. BACKEND UPDATE: Ab asali naam jayega Atlas mein
      await API.put(`/requests/accept/${requestId}`, {
        donorId: currentDonorId,
        donorName: currentDonorName // 👈 Ab yahan "Pari" ya "Manas" dynamic jayega
      });

      console.log(`✅ Accepted by: ${currentDonorName}`);
    } catch (error) {
      console.error("❌ Acceptance Failed:", error);
      fetchRequests(); 
    }
};

  useEffect(() => {
    fetchRequests();
  }, []);

  // 3. Search & Filter Logic (Synced with Schema)
  const filteredRequests = requests.filter(req => {
    // Check for both 'hospital' (Model) and 'location' (Frontend logic)
    const hospitalStr = (req.hospital || req.location || "").toLowerCase();
    const nameStr = (req.name || "Patient").toLowerCase();
    const searchStr = searchTerm.toLowerCase();

    const matchesSearch = hospitalStr.includes(searchStr) || nameStr.includes(searchStr);
    
    // Check for both 'bloodGroup' and 'bloodGroupNeeded'
    const bgValue = req.bloodGroup || req.bloodGroupNeeded || "";
    const matchesGroup = selectedGroup === "All" || bgValue === selectedGroup;
    
    return matchesSearch && matchesGroup;
  });

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-pulse text-red-600 font-black text-xl uppercase tracking-widest">
        Scanning Nearby Emergencies...
      </div>
    </div>
  );

  return (
    <div className="space-y-6 md:space-y-8 mt-5 animate-[fadeIn_0.5s_ease-out]">

      {/* HEADER & SEARCH */}
      <div className="flex flex-col gap-5 text-left">
        <div>
          <h1 className="text-2xl md:text-3xl font-[700] text-gray-900 tracking-tight">
            Nearby Requests
          </h1>
          <p className="text-gray-500 font-medium text-sm mt-1">
            Find urgent blood requirements in your vicinity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Patient or Hospital..."
              className="w-full bg-white border-[1.5px] border-gray-400 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold outline-none focus:border-red-500 transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative min-w-[180px]">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600 pointer-events-none">
              <FiFilter size={16} />
            </div>
            <select 
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full bg-white border-[1.5px] border-gray-400 rounded-2xl py-3.5 pl-11 pr-10 text-sm font-black outline-none focus:border-red-500 appearance-none cursor-pointer shadow-sm hover:border-red-200 transition-all"
            >
              <option value="All">All Blood Groups</option>
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <FiChevronRight className="rotate-90 size-4" />
            </div>
          </div>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((req) => (
            <div key={req._id} className="group relative bg-white rounded-[24px] p-4 border-[1.5px] border-gray-400 shadow-sm hover:shadow-2xl hover:border-red-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between text-left">
              
              <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl opacity-10 -mr-10 -mt-10 transition-colors duration-500 ${
                req.urgency === 'Critical' ? 'bg-red-600' : req.urgency === 'Urgent' ? 'bg-amber-500' : 'bg-emerald-500'
              }`} />

              <div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex gap-3 w-full">
                    <div className="w-11 h-11 md:w-14 md:h-14 bg-red-50 rounded-2xl flex flex-col items-center justify-center text-[#880808] border border-red-300 shadow-sm group-hover:bg-[#880808] group-hover:text-white transition-all duration-500 shrink-0">
                      <span className="font-black text-lg md:text-xl leading-none">
                        {req.bloodGroup || req.bloodGroupNeeded}
                      </span>
                      <span className="text-[7px] md:text-[8px] font-bold uppercase mt-0.5 opacity-60">Type</span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-gray-900 text-[13px] md:text-[14px] leading-[1.2] line-clamp-2 h-[32px] md:h-[36px]">
                        {req.hospital || req.location}
                      </h3>
                      <p className="flex items-center gap-1.5 text-gray-500 text-[10px] font-black mt-2 uppercase tracking-tighter">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                        Patient: <span className="text-gray-900 truncate">{req.name || "N/A"}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-sm ${
                    req.urgency === 'Critical' ? 'bg-red-50 border-red-200 text-red-600' : 
                    req.urgency === 'Urgent' ? 'bg-amber-50 border-amber-200 text-amber-600' : 
                    'bg-emerald-50 border-emerald-200 text-emerald-600'
                  }`}>
                    {req.urgency || 'Normal'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-gray-100 pt-4 mb-5">
                  <div className="relative">
                    <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter mb-1">Units Needed</p>
                    <p className="text-sm font-black text-gray-800">{req.units || 1} <span className="text-[10px] text-gray-400 font-bold">U</span></p>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-100"></div>
                  </div>
                  <div className="pl-2">
                    <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter mb-1">Broadcasted</p>
                    <p className="text-[10px] font-black text-gray-700 flex items-center gap-1">
                      <FiClock size={11} className="text-red-500" />
                      {req.createdAt ? formatDistanceToNow(new Date(req.createdAt)) + ' ago' : 'Live'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 relative z-10 mt-auto">
  
               <button 
  onClick={() => handleAcceptRequest(req._id)}
  disabled={req.status === 'Accepted'}
  className={`flex-[1.8] py-2.5 rounded-xl font-black text-[9px] uppercase transition-all flex items-center justify-center gap-1 active:scale-95 shadow-lg ${
    req.status === 'Accepted' 
      ? 'bg-emerald-600 text-white shadow-none cursor-default' // Instant Green
      : 'bg-[#880808] text-white hover:bg-black' // Default Red
  }`}
>
  {req.status === 'Accepted' ? 'Accepted ✓' : 'Accept Req'}
</button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-24 text-center text-gray-400 font-bold uppercase tracking-widest text-sm">
            No Nearby Requests Found
          </div>
        )}
      </div>

      {/* MAP CTA */}
      <div className="bg-gray-900 rounded-[28px] p-6 md:p-8 text-white flex flex-col md:flex-row justify-between items-center gap-5 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl" />
        <div className="relative z-10 text-center md:text-left">
          <h4 className="text-lg md:text-xl font-black italic uppercase tracking-tighter">Live Emergency Map</h4>
          <p className="text-gray-400 text-sm mt-1 font-medium">Visualize all nearby requirements on an interactive map</p>
        </div>
        <button className="relative z-10 bg-white text-gray-900 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all active:scale-95 shadow-xl">
          Open Map View
        </button>
      </div>
    </div>
  );
};

export default ReqTab;