import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  MdOutlineNotificationsActive, MdOutlineDoneAll, MdOutlineVerified, 
  MdOutlineBloodtype, MdOutlineAccessTime, MdOutlineEventAvailable,
  MdOutlinePersonSearch, MdOutlineArrowForward
} from "react-icons/md";
import { IoHeartSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  

  // 🔄 1. FETCH REAL REQUESTS
  useEffect(() => {
   const fetchNotifications = async () => {
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('user'));
      const patientId = user?._id || "663a7d4e3f1a2c001f8e4b5b"; 
      
      const res = await axios.get(`http://localhost:5000/api/requests/patient/${patientId}`);
      
      // ✅ FILTER: Sirf 'Accepted' status waali notifications dikhao
      // Jaise hi status 'Completed' hoga, ye automatically list se hat jayengi
      const activeNotifications = res.data.filter(notif => notif.status === 'Accepted');
      
      setNotifications(activeNotifications);
    } catch (err) {
      console.error("Notification load error:", err);
    } finally {
      setLoading(false);
    }
  };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Accepted': return { color: "text-emerald-500", bg: "bg-emerald-50/50", icon: <MdOutlineVerified />, label: "Request Accepted" };
      case 'Pending': return { color: "text-amber-500", bg: "bg-amber-50/50", icon: <MdOutlineAccessTime />, label: "Broadcast Live" };
      default: return { color: "text-blue-500", bg: "bg-blue-50/50", icon: <MdOutlineBloodtype />, label: "Searching..." };
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <div className="w-10 h-10 border-4 border-[#880808] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-[#880808] font-bold animate-pulse text-sm">Syncing Clinical Alerts...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-transparent pb-14 w-full max-w-[1200px] mx-auto animate-[fadeIn_0.5s_ease-out] px-2">
      
      {/* 1. HEADER */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-6 rounded-[24px] border border-gray-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-50 rounded-xl text-[#880808] border border-red-100 shadow-sm">
            <MdOutlineNotificationsActive size={24} />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-none">
              Alert <span className="text-[#880808]">Center</span>
            </h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px] mt-2">
              {notifications.length} System Logs Found
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-[10px] font-black text-gray-600 uppercase tracking-widest hover:bg-[#880808] hover:text-white transition-all shadow-sm">
          <MdOutlineDoneAll size={18} /> Clear Dashboard
        </button>
      </section>

      {/* 2. NOTIFICATION LIST */}
      <div className="w-full space-y-4">
  {notifications.length === 0 ? (
    <div className="bg-white p-16 rounded-[32px] border-2 border-dashed border-gray-100 text-center">
      <p className="text-gray-300 font-bold italic text-lg tracking-tight">Your notification vault is currently empty.</p>
    </div>
  ) : (
    notifications.map((notif) => {
      const style = getStatusStyles(notif.status);
      
      // ✅ FIX 1: donorName seedha use karo (Optional chaining ? hatao variable se)
      const donorName = notif.donorName || "Verified Donor";
      
      // ✅ FIX 2: Check logic donorName par rakho kyunki populate null aa raha hai
      const isAccepted = notif.status === 'Accepted' && notif.donorName !== null;
      
      console.log("Checking Notif Donor Name:", notif.donorName);

      return (
        <div 
          key={notif._id} 
          className={`group relative flex flex-col md:flex-row items-start md:items-center gap-5 p-6 rounded-[28px] border transition-all duration-300 ${
            isAccepted ? 'bg-white border-emerald-200 shadow-lg' : 'bg-white border-gray-100 opacity-80'
          }`}
        >
          {/* Status Indicator */}
          <div className={`absolute left-0 top-1/4 bottom-1/4 w-1.5 rounded-r-full ${isAccepted ? 'bg-emerald-500' : 'bg-amber-400'}`}></div>

          {/* Icon Circle */}
          <div className={`shrink-0 w-14 h-14 rounded-2xl ${style.bg} ${style.color} flex items-center justify-center shadow-inner`}>
            {React.cloneElement(style.icon, { size: 26 })}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[9px] font-black uppercase tracking-widest ${style.color}`}>
                {style.label}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="text-[9px] font-bold text-gray-400 uppercase">{notif.bloodGroup} Requirement</span>
            </div>
            
            <h3 className="font-black text-gray-800 text-base md:text-lg tracking-tight mb-1 leading-tight">
              {isAccepted ? `Good News! Your match has been found.` : `Awaiting clinical match...`}
            </h3>

            <p className="text-gray-500 font-bold text-[12px] md:text-sm leading-relaxed">
              {isAccepted 
                ? <><span className="text-[#880808] font-black">{donorName}</span> has accepted the request for <span className="text-gray-800 font-black">{notif.hospital}</span>. You can now coordinate the blood transfer.</>
                : <>Your <span className="font-black">{notif.bloodGroup}</span> request is currently being broadcasted to all nearby donors in <span className="text-gray-800 font-black">{notif.hospital}</span>.</>
              }
            </p>
          </div>

          {/* ✅ ACTION BUTTONS ROW: Fixed Logic */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            {notif.status === 'Accepted' && notif.donorName ? (
              /* 1. SUCCESS: donorName database mein mil gaya */
              <button 
  onClick={() => {
    // 🔍 Sabse pehle ID nikaalne ka sabse safe tarika
    const dId = notif.donorId?._id || notif.donorId;
    const rId = notif._id;

    console.log("Debug - Raw DonorId:", notif.donorId);
    console.log("Debug - Extracted dId:", dId);

    if (dId && dId !== null) {
      // ✅ Agar ID mil gayi toh ID path par bhejo
      navigate(`/pool/${dId}?requestId=${rId}`);
    } else if (notif.donorName) {
      // ⚠️ Agar ID fir bhi nahi mili (null aayi), toh Name Search fallback use karo
      navigate(`/pool?search=${encodeURIComponent(notif.donorName)}&requestId=${rId}`);
    } else {
      alert("Bhai, donor details abhi sync nahi hui hain!");
    }
  }}
   className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-md active:scale-95"
>
  View Donor
</button>
            ) : notif.status === 'Accepted' ? (
              /* 2. SYNCING: Status accepted hai par naam abhi sync ho raha hai */
              <button className="w-full md:w-auto px-6 py-3.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-wait flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                Finalizing Clinical Link...
              </button>
            ) : (
              /* 3. PENDING */
              <button className="w-full md:w-auto px-6 py-3.5 bg-gray-50 text-gray-400 border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-default flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                Awaiting Clinical Match...
              </button>
            )}
          </div>
        </div>
      );
    })
  )}
</div>
    </div>
  );
};

export default Notifications;