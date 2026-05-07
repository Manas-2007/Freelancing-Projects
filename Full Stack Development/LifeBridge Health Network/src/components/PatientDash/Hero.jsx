import React from 'react';
import { 
  MdOutlineBloodtype, MdOutlineHistoryEdu, MdAdd, MdVerified, 
  MdOutlineGpsFixed, MdOutlineNotificationsActive, MdOutlineDescription,
  MdCheckCircleOutline, MdOutlinePeople, MdOutlineWarningAmber ,MdStar
} from "react-icons/md";
import { BiCalendarHeart, BiMessageDetail } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";

const StatCard = ({ title, value, unit, description, icon }) => (
  <div className="group relative bg-red-50/40 backdrop-blur-md rounded-[28px] p-5 md:p-6 border border-red-500 shadow-[0_8px_30px_-10px_rgba(136,8,8,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(136,8,8,0.15)] hover:border-red-200 cursor-default overflow-hidden">
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
  const donorStats = [
    { title: "Total Donations", value: "09", unit: "Liters", description: "Lifetime Record", icon: <MdOutlineBloodtype /> },
    { title: "Lives Saved", value: "27", unit: "People", description: "Community Impact", icon: <BiCalendarHeart /> },
    { title: "Donation Streak", value: "04", unit: "Years", description: "Consistent Hero", icon: <GiProgression /> },
    { title: "Next Eligible", value: "12", unit: "Feb", description: "Ready in 18 days", icon: <MdOutlineHistoryEdu /> },
  ];

  const myRequests = [
    { id: 'REQ-2041', patient: "Rohan Kapoor", ward: "ICU - 3B", group: "O-", units: 3, urgency: "Critical", status: "Matched", matches: 4 },
    { id: 'REQ-2040', patient: "Sneha Iyer", ward: "Maternity - 2A", group: "A+", units: 2, urgency: "Urgent", status: "Pending", matches: 1 },
    { id: 'REQ-2039', patient: "Imran Sheikh", ward: "General - 4D", group: "B+", units: 1, urgency: "Scheduled", status: "Fulfilled", matches: 2 },
    { id: 'REQ-2038', patient: "Sneha Iyer", ward: "Maternity - 2A", group: "A+", units: 2, urgency: "Urgent", status: "Pending", matches: 1 },
  ];

  const matchedDonors = [
    { name: "Vikram Suri", distance: "1.2 km", lastDonated: "3 mo ago", status: "accepted", initial: "V" },
    { name: "Meera Joshi", distance: "2.4 km", lastDonated: "5 mo ago", status: "pending", initial: "M" },
    { name: "Suman Joshi", distance: "2.0 km", lastDonated: "1 mo ago", status: "pending", initial: "S" },
  ];

  const activities = [
    { text: "Vikram Suri accepted your request for Rohan Kapoor", time: "12 min ago", icon: <BiCalendarHeart className="text-red-500" />, bg: "bg-red-50" },
    { text: "New request created — Sneha Iyer (A+, 2 units)", time: "5 hrs ago", icon: <MdOutlineDescription className="text-blue-500" />, bg: "bg-blue-50" },
    { text: "Imran Sheikh's request marked as fulfilled", time: "Yesterday", icon: <MdCheckCircleOutline className="text-emerald-500" />, bg: "bg-emerald-50" },
    { text: "3 donors matched for Priya Nair (AB+)", time: "Yesterday", icon: <MdOutlinePeople className="text-purple-500" />, bg: "bg-purple-50" },
    { text: "Critical: O- inventory below threshold", time: "2 days ago", icon: <MdOutlineWarningAmber className="text-amber-500" />, bg: "bg-amber-50" },
  ];

  const steps = [
    { title: "Doctor creates request", desc: "Patient details + blood group + urgency" },
    { title: "System matches donors", desc: "Filters by blood group, location & availability" },
    { title: "Donors notified", desc: "Nearby eligible donors get instant alerts" },
    { title: "Donor accepts", desc: "Donor confirms; doctor sees match in real-time" },
    { title: "Donation completed", desc: "Status fulfilled; history updated for both sides" },
  ];

  return (
    <div className="animate-[fadeIn_0.6s_ease-out] space-y-10 pb-10">
      
      {/* 1. IMPACT BANNER */}
      <section className="relative overflow-hidden bg-white rounded-[20px] p-4 md:px-8 md:py-6 border border-gray-300 shadow-lg mb-6">
  {/* Premium Background Decor */}
  <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-50/40 rounded-full blur-3xl z-0"></div>
  
  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
    <div className="space-y-1.5 text-left w-full md:w-auto">
      
      {/* Brand Badge */}
      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-50 rounded-lg border border-red-200 mb-1">
        <MdStar className="text-[#880808] text-[12px]" />
        <span className="text-[9px] font-bold text-[#880808] uppercase tracking-wider">Donor Impact Score</span>
      </div>

      {/* Synchronized Heading */}
      <h2 className="text-xl md:text-[23px] font-bold text-gray-900 tracking-tight leading-none">
        Your Impact <span className="text-[#880808]">Dashboard</span>
      </h2>
      
      {/* High-Visibility Subtext */}
      <p className="text-gray-600 font-semibold max-w-xl leading-snug text-[11px] md:text-[12px]">
        Welcome back! Your consistent contributions are the backbone of our community. 
        <span className="hidden md:inline"> Monitor your life-saving stats in real-time.</span>
      </p>
    </div>

    {/* Verified Donors Avatar Stack */}
    <div className="flex items-center gap-3 bg-gray-50 p-2 pr-4 rounded-2xl border border-gray-200 w-fit">
      <div className="flex -space-x-3">
        {[1, 2, 3].map((i) => (
          <img 
            key={i}
            src={`https://i.pravatar.cc/150?u=${i + 20}`} 
            className="w-9 h-9 rounded-xl border-2 border-white shadow-sm object-cover"
            alt="donor"
          />
        ))}
        <div className="w-9 h-9 rounded-xl border-2 border-white bg-black flex items-center justify-center text-[10px] font-bold text-white shadow-md">
          +12
        </div>
      </div>
      <div className="flex flex-col text-left">
        <p className="text-[10px] font-bold text-gray-800 leading-none">Top Donors</p>
        <p className="text-[8px] font-bold text-gray-400 uppercase mt-0.5">Active matches</p>
      </div>
    </div>
  </div>
</section>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {donorStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* 3. BLOOD REQUESTS & MATCHED DONORS */}
<div className="flex flex-col xl:flex-row gap-8 mt-10 w-full overflow-hidden">
  
  {/* LEFT: TABLE AREA (70% Desktop | 100% Mobile) */}
  <div className="w-full xl:flex-[2] bg-white rounded-[32px] p-5 md:p-8 border border-gray-400 shadow-xl overflow-hidden order-1">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 px-2">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">My Blood Requests</h2>
        <p className="text-[10px] md:text-xs font-bold text-gray-400 mt-1 uppercase tracking-tight">Click a row to see matched donors</p>
      </div>
      <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#880808] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-red-100 hover:bg-[darkgreen] hover:scale-105 transition-all">
        <MdAdd size={22} /> New Request
      </button>
    </div>

    {/* CUSTOM RED SCROLLER - Visible ONLY on Mobile/Overflow */}
    <div className="w-full overflow-x-auto pb-6 
      [&::-webkit-scrollbar]:h-[5px] 
      [&::-webkit-scrollbar-track]:bg-red-50
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-[#880808]
      [&::-webkit-scrollbar-thumb]:rounded-full
      scrollbar-thin scrollbar-thumb-[#880808] scrollbar-track-red-50">
      
      <table className="w-full text-left border-collapse min-w-[650px] md:min-w-full">
        <thead>
          <tr className="text-[11px] font-black text-gray-600 uppercase tracking-widest border-b border-gray-50">
            <th className="pb-4 px-4">Patient</th>
            <th className="pb-4 px-4">Group</th>
            <th className="pb-4 px-4 text-center">Units</th>
            <th className="pb-4 px-4">Urgency</th>
            <th className="pb-4 px-4">Status</th>
            <th className="pb-4 px-4">Matches</th>
          </tr>
        </thead>
        <tbody className="text-sm font-bold text-gray-700">
          {myRequests.map((req) => (
            <tr key={req.id} className="group hover:bg-red-50/40 transition-all cursor-pointer border-b border-gray-50 last:border-0">
              <td className="py-5 px-4 whitespace-nowrap">
                <p className="text-gray-900 font-bold">{req.patient}</p>
                <p className="text-[10px] text-gray-400 uppercase font-black">{req.id} • {req.ward}</p>
              </td>
              <td className="py-5 px-4">
                <span className="w-10 h-10 rounded-full bg-red-800 text-white flex items-center justify-center border-2 border-white shadow-sm font-black">{req.group}</span>
              </td>
              <td className="py-5 px-4 text-center font-black">{req.units}</td>
              <td className="py-5 px-4 whitespace-nowrap">
                <span className={`px-3 py-1 rounded-full text-[10px] border font-black ${req.urgency === 'Critical' ? 'bg-red-50 border-red-100 text-red-600' : 'bg-amber-50 border-amber-100 text-amber-600'}`}>
                   • {req.urgency}
                </span>
              </td>
              <td className="py-5 px-4 whitespace-nowrap">
                 <span className="text-blue-500 bg-blue-50 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter">{req.status}</span>
              </td>
              <td className="py-5 px-4 text-gray-400 font-bold whitespace-nowrap">{req.matches} donors</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* RIGHT: MATCHED DONORS SIDEBAR (Wider on Mobile | Sidebar on PC) */}
  <div className="w-full xl:flex-1 bg-white rounded-[32px] p-6 md:p-8 border border-gray-300 shadow-xl self-start transition-all duration-300 order-2">
    <div className="flex justify-between items-center mb-1 px-1">
      <h3 className="font-bold text-xl text-gray-900 tracking-tight">Matched Donors</h3>
      <div className="flex items-center justify-center w-7 h-7 bg-red-50 rounded-full border border-red-100">
        <span className="text-[#880808] text-[14px] font-black">{matchedDonors.length}</span>
      </div>
    </div>
    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[1.5px] mb-8 px-1">
      Results For: <span className="text-gray-600">Rohan Kapoor</span>
    </p>

    <div className="grid grid-cols-2 xl:grid-cols-1 gap-4 md:gap-5">
      {matchedDonors.map((donor, i) => (
        <div key={i} className="group relative p-4 md:p-5 rounded-[28px] bg-white border border-red-400 shadow-sm transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-400 shadow-sm flex items-center justify-center font-black text-[#880808] text-lg group-hover:scale-105 transition-transform duration-300 mx-auto md:mx-0 shrink-0">{donor.initial}</div>
              <div className="flex-1 min-w-0 text-center md:text-left">
                <h4 className="font-bold text-gray-900 text-[13px] md:text-sm truncate">{donor.name}</h4>
                <div className="mt-1">
                  <span className={`text-[8px] md:text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border tracking-tighter ${donor.status === 'accepted' ? 'bg-emerald-50 text-emerald-600 border-emerald-300' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>{donor.status}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="flex-1 py-2 bg-white border border-gray-500 rounded-xl text-[10px] font-black text-gray-700 hover:bg-gray-50 active:scale-95 transition-all"><IoCallOutline className="inline mr-1" /> Call</button>
              <button className="flex-[1.5] py-2 bg-[#880808] text-white rounded-xl text-[10px] font-black shadow-md active:scale-95 transition-all"><BiMessageDetail className="inline mr-1" /> Msg</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* ================= 4. RECENT ACTIVITY & FLOW (Newly Integrated) ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* RECENT ACTIVITY */}
        <div className="xl:col-span-2 bg-white rounded-[32px] p-6 md:p-8 border border-gray-300 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-red-50 rounded-lg">
              <MdOutlineNotificationsActive className="text-[#880808] text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
          </div>
          <div className="space-y-6">
            {activities.map((act, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className={`mt-1 p-2.5 rounded-xl ${act.bg} shadow-sm group-hover:scale-110 transition-transform`}>
                  {act.icon}
                </div>
                <div className="flex-1 border-b border-gray-50 pb-4 last:border-0">
                  <p className="text-sm font-bold text-gray-800 leading-snug">{act.text}</p>
                  <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW A REQUEST FLOWS */}
        <div className="bg-[#fcfdfd] rounded-[32px] p-6 md:p-8 border border-gray-300 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-2">How a request flows</h3>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[1px] mb-8">Process Overview</p>
          <div className="space-y-8 relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#880808] text-white flex items-center justify-center text-xs font-black shrink-0 shadow-lg shadow-red-100">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-none mb-1.5">{step.title}</h4>
                  <p className="text-[11px] font-bold text-gray-400 leading-tight">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;