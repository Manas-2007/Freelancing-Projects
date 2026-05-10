import { 
  MdOutlineBloodtype, MdOutlineHistoryEdu, MdAdd, MdVerified, 
  MdOutlineGpsFixed, MdOutlineNotificationsActive, MdOutlineDescription,
  MdCheckCircleOutline, MdOutlinePeople, MdOutlineWarningAmber ,MdStar
} from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BiCalendarHeart, BiMessageDetail } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const StatCard = ({ title, value, unit, description, icon }) => (
  <div className="group relative bg-red-50/40 backdrop-blur-md rounded-[28px] p-5 md:p-6 border border-red-500 shadow-[0_8px_30px_-10px_rgba(136,8,8,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(136,8,8,0.15)] hover:border-red-200 cursor-default overflow-hidden text-left">
    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/30 via-transparent to-transparent rotate-45 pointer-events-none"></div>
    <div className="flex justify-between items-start mb-4 relative z-10">
      <div className="p-3 rounded-2xl bg-white border border-red-100 text-[#880808] transition-all duration-300 shadow-sm group-hover:bg-[#880808] group-hover:text-white group-hover:scale-110">
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <div className="bg-red-100/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-red-200">
        <p className="text-[11px] font-black text-[#880808] uppercase tracking-tighter">Live</p>
      </div>
    </div>
    <div className="space-y-1 relative z-10">
      <p className="text-[13px] font-[500] text-black uppercase tracking-wider">{title}</p>
      <div className="flex items-baseline gap-1">
        <h3 className="text-2xl md:text-3xl font-[700] text-gray-900 tracking-tight">{value}</h3>
        <span className="text-xs md:text-sm font-bold text-gray-700">{unit}</span>
      </div>
      <p className="text-[11px] font-bold text-gray-600 mt-2 flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-[#880808]/40"></span>
        {description}
      </p>
    </div>
  </div>
);

const Hero = () => {
  const [myRequests, setMyRequests] = useState([]);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [activeRequestName, setActiveRequestName] = useState("");
  const navigate = useNavigate();

  const donorStats = [
    { title: "Total Donations", value: "09", unit: "Liters", description: "Lifetime Record", icon: <MdOutlineBloodtype /> },
    { title: "Lives Saved", value: "27", unit: "People", description: "Community Impact", icon: <BiCalendarHeart /> },
    { title: "Donation Streak", value: "04", unit: "Years", description: "Consistent Hero", icon: <GiProgression /> },
    { title: "Next Eligible", value: "12", unit: "Feb", description: "Ready in 18 days", icon: <MdOutlineHistoryEdu /> },
  ];

  // ✅ FIX: Data fetching with correct port and endpoint
  const fetchMyRequests = async () => {
  try {
    console.log("Fetching data from server...");
    
    // 1. LocalStorage se logged-in user ki ID nikaalo
    const user = JSON.parse(localStorage.getItem('user'));
    const patientId = user?._id || "663a7d4e3f1a2c001f8e4b5b"; // Backup ID testing ke liye

    // 2. URL ko update karo (Endpoint + Patient ID)
    const res = await axios.get(`http://localhost:5000/api/requests/patient/${patientId}`); 
    
    console.log("Requests received for this patient:", res.data);
    setMyRequests(res.data);
  } catch (err) {
    // Agar abhi bhi error aaye, toh check karo ki server chal raha hai ya nahi
    console.error("Dashboard table error:", err.response?.data || err.message);
  }
};

  // ✅ FIX: View Donor Logic (Auth-Bypass)
  const handleViewDonor = async (donorId, patientName) => {
    setActiveRequestName(patientName);
    
    // Agar donorId object hai, toh uska _id nikalo
    const dId = donorId?._id || donorId;

    if (!dId) {
      setSelectedDonor(null);
      alert("Searching: Donor response pending.");
      return;
    }

    try {
      // Direct saari requests mein se donorId match karo
      const res = await axios.get("http://localhost:5000/api/requests");
      const match = res.data.find(r => (r.donorId?._id === dId || r.donorId === dId));
      
      if (match && match.donorId) {
        setSelectedDonor(match.donorId);
      } else {
        alert("Donor details load nahi ho pa rahi!");
      }
    } catch (err) {
      console.error("Sidebar Error:", err);
      alert("Network Error: Backend connection failed!");
    }
  };

  useEffect(() => {
    fetchMyRequests();
  }, []);


  
  return (
    <div className="animate-[fadeIn_0.6s_ease-out] space-y-10 pb-10">
      
      {/* 1. IMPACT BANNER */}
      <section className="relative overflow-hidden bg-white rounded-[20px] p-4 md:px-8 md:py-6 border border-gray-300 shadow-lg mb-6 text-left">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-50/40 rounded-full blur-3xl z-0"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-50 rounded-lg border border-red-200 mb-1">
              <MdStar className="text-[#880808] text-[12px]" />
              <span className="text-[9px] font-bold text-[#880808] uppercase tracking-wider">Donor Impact Score</span>
            </div>
            <h2 className="text-xl md:text-[23px] font-bold text-gray-900 tracking-tight leading-none">
              Your Impact <span className="text-[#880808]">Dashboard</span>
            </h2>
            <p className="text-gray-600 font-semibold max-w-xl leading-snug text-[11px] md:text-[12px]">
              Welcome back! Your contributions save lives. Monitor your stats in real-time.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-2 pr-4 rounded-2xl border border-gray-200 w-fit">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/150?u=${i + 20}`} className="w-9 h-9 rounded-xl border-2 border-white shadow-sm object-cover" alt="donor" />
              ))}
              <div className="w-9 h-9 rounded-xl border-2 border-white bg-black flex items-center justify-center text-[10px] font-bold text-white shadow-md">+12</div>
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] font-bold text-gray-800 leading-none">Top Donors</p>
              <p className="text-[8px] font-bold text-gray-400 uppercase mt-0.5">Active matches</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {donorStats.map((stat, index) => <StatCard key={index} {...stat} />)}
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="flex flex-col xl:flex-row gap-8 mt-10 w-full">
        




        {/* LEFT: TABLE */}
        <div className="w-full xl:flex-[2] bg-white rounded-[32px] p-5 md:p-8 border border-gray-300 shadow-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">My Blood Requests</h2>
              <p className="text-[10px] md:text-xs font-bold text-gray-400 mt-1 uppercase">Click a row to see matched donors</p>
            </div>
            <button onClick={() => navigate('/requests')} className="flex items-center gap-2 bg-[#880808] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg hover:bg-black transition-all">
              <MdAdd size={22} /> New Request
            </button>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="text-[11px] font-black text-gray-400 uppercase border-b border-gray-100">
                  <th className="pb-4 px-4 text-center">S.No</th>
                  <th className="pb-4 px-4">Patient Name</th>
                  <th className="pb-4 px-4 text-center">Group</th>
                  <th className="pb-4 px-4 text-center">Units</th>
                  <th className="pb-4 px-4">Hospital</th>
                  <th className="pb-4 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold text-gray-700">
                {myRequests.map((req, index) => (
                  <tr key={req._id} onClick={() => handleViewDonor(req.donorId, req.name)} className="group hover:bg-red-50/40 cursor-pointer border-b border-gray-50 last:border-0 transition-colors">
                    <td className="py-5 px-4 text-center text-gray-400">{index + 1}</td>
                    <td className="py-5 px-4 text-left">
                      <p className="text-gray-900">{req.name}</p>
                      <p className="text-[9px] text-gray-400 uppercase">ID: {req._id?.slice(-6)}</p>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <span className="inline-block w-8 h-8 rounded-full bg-red-800 text-white leading-8 border-2 border-white shadow-sm text-[10px] text-center">
                        {req.bloodGroupNeeded}
                      </span>
                    </td>
                    <td className="py-5 px-4 text-center">{req.units || 1} U</td>
                    <td className="py-5 px-4 text-left truncate max-w-[150px]">{req.location}</td>
                    <td className="py-5 px-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-[9px] border font-black ${
                        req.status === 'Accepted' ? 'bg-emerald-50 border-emerald-600 text-emerald-600 animate-pulse' : 'bg-red-50 border-red-600 text-red-600'
                      }`}>
                        • {req.status === 'Accepted' ? 'MATCHED' : req.urgency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>








        {/* RIGHT: SIDEBAR */}
        <div className="w-full xl:flex-1 bg-white rounded-[32px] p-6 md:p-8 border border-gray-300 shadow-xl self-start">
          <h3 className="font-bold text-xl text-gray-900 mb-1 text-left">Matched Donor</h3>
          <p className="text-[10px] font-black text-gray-400 uppercase mb-8 text-left">
            Results For: <span className="text-gray-600">{activeRequestName || "Select a request"}</span>
          </p>

          {selectedDonor ? (
            <div className="p-5 rounded-[28px] bg-white border border-red-400 shadow-sm transition-all text-left animate-[fadeIn_0.3s_ease]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#880808] flex items-center justify-center font-black text-white text-xl shadow-md">
                  {selectedDonor.name?.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-base">{selectedDonor.name}</h4>
                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border bg-emerald-50 text-emerald-600 border-emerald-300">Verified ✓</span>
                </div>
              </div>
              <div className="mb-5 bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p className="text-[8px] text-gray-400 font-black uppercase mb-1 tracking-tighter">Direct Contact</p>
                <p className="text-sm font-black text-gray-800 tracking-widest">{selectedDonor.phone}</p>
              </div>
              <div className="flex gap-2">
                <a href={`tel:${selectedDonor.phone}`} className="flex-1 py-3 bg-white border border-gray-400 rounded-xl text-[10px] font-black text-gray-700 flex items-center justify-center gap-1">
                  <IoCallOutline size={14} /> Call
                </a>
                <button className="flex-[1.5] py-3 bg-[#880808] text-white rounded-xl text-[10px] font-black flex items-center justify-center gap-1">
                  <BiMessageDetail size={14} /> Message
                </button>
              </div>
            </div>
          ) : (
            <div className="py-12 px-6 text-center border-2 border-dashed border-gray-100 rounded-[32px] bg-gray-50/30">
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[2px]">Select a matched request to view donor</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;