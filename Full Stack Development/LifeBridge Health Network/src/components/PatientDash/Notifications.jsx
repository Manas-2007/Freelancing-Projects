import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoHeartSharp } from "react-icons/io5";

// ✅ Proper Material Design Icons (MD)
import { 
  MdOutlineNotificationsActive, 
  MdOutlineVerified, 
  MdOutlineBloodtype, 
  MdOutlineAccessTime, 
  MdCalendarMonth,      
  MdAccessTimeFilled    
} from "react-icons/md"; 

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔄 1. FETCH REAL REQUESTS
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        
        // ✅ Identity Check: Using patientId string (e.g., "1")
        const pId = userData?.patientId; 

        if (!pId) {
          console.warn("Waiting for Patient ID in LocalStorage...");
          return;
        }

        const res = await axios.get(`http://localhost:5000/api/requests/patient/${pId}`);
        
        if (res.data && Array.isArray(res.data)) {
          // ✅ Case-Insensitive Filter: Safely handles 'Accepted', 'accepted', 'Pending', etc.
          const activeNotifications = res.data.filter(notif => {
            const status = (notif.status || "").toLowerCase();
            return status === 'accepted' || status === 'pending';
          });

          setNotifications(activeNotifications);
        }
        
      } catch (err) {
        console.error("Fetch Error:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 5000); 
    return () => clearInterval(interval);
  }, []);

  // ✅ Fix: Case-Insensitive Switch logic for UI Styles
  const getStatusStyles = (status) => {
    const s = (status || "").toLowerCase();
    switch (s) {
      case 'accepted': 
        return { color: "text-emerald-500", bg: "bg-emerald-50/50", icon: <MdOutlineVerified />, label: "Request Accepted" };
      case 'pending': 
        return { color: "text-amber-500", bg: "bg-amber-50/50", icon: <MdOutlineAccessTime />, label: "Broadcast Live" };
      default: 
        return { color: "text-blue-500", bg: "bg-blue-50/50", icon: <MdOutlineBloodtype />, label: "Searching..." };
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
      
      {/* HEADER */}
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
      </section>

      {/* NOTIFICATION LIST */}
      <div className="w-full space-y-4">
        {notifications.length === 0 ? (
          <div className="bg-white p-16 rounded-[32px] border-2 border-dashed border-gray-100 text-center">
            <p className="text-gray-300 font-bold italic text-lg tracking-tight">Your notification vault is currently empty.</p>
          </div>
        ) : (
          notifications.map((notif) => {
            const style = getStatusStyles(notif.status);
            const donorName = notif.donorName || "Verified Donor";
            const currentStatus = (notif.status || "").toLowerCase();
            const isAccepted = currentStatus === 'accepted' && notif.donorId !== null;

            return (
              <div 
                key={notif._id} 
                className={`group relative flex flex-col items-start gap-5 p-6 rounded-[28px] border transition-all duration-300 bg-white shadow-sm hover:shadow-md ${
                  isAccepted ? 'border-emerald-200' : 'border-gray-100'
                }`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-5 w-full">
                  <div className={`absolute left-0 top-1/4 bottom-1/4 w-1.5 rounded-r-full ${isAccepted ? 'bg-emerald-500' : 'bg-amber-400'}`}></div>

                  <div className={`shrink-0 w-14 h-14 rounded-2xl ${style.bg} ${style.color} flex items-center justify-center shadow-inner`}>
                    {style.icon}
                  </div>

                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[9px] font-black uppercase tracking-widest ${style.color}`}>
                        {style.label}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="text-[9px] font-bold text-gray-400 uppercase">{notif.bloodGroup} Requirement</span>
                    </div>
                    
                    <h3 className="font-black text-gray-800 text-base md:text-lg tracking-tight mb-1 leading-tight">
                      {isAccepted ? `Donor Found: ${donorName}` : `Awaiting clinical match...`}
                    </h3>

                    <p className="text-gray-500 font-bold text-[12px] md:text-sm leading-relaxed">
                      {isAccepted 
                        ? `${donorName} has committed to donating at ` 
                        : "Your emergency request is live and broadcasting to donors at "}
                      <span className="text-gray-900 font-black">{notif.hospital}</span>. 
                    </p>

                    {/* ✅ SCHEDULE DETAILS BLOCK */}
                    {notif.appointmentDate && (
                      <div className="mt-4 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl flex flex-wrap gap-4 items-center">
                        <div className="flex items-center gap-2 text-blue-700">
                          <MdCalendarMonth className="text-blue-600" size={18} />
                          <span className="text-[11px] font-black uppercase tracking-wider">Date: {notif.appointmentDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-700">
                          <MdAccessTimeFilled className="text-blue-600" size={18} />
                          <span className="text-[11px] font-black uppercase tracking-wider">Time Slot: {notif.appointmentTime}</span>
                        </div>
                        <div className="ml-auto">
                           <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black rounded-lg uppercase animate-pulse">Confirmed Slot</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                    {isAccepted ? (
                      <button 
                        onClick={() => {
                          const dId = notif.donorId?._id || notif.donorId;
                          const rId = notif._id;
                          if (dId) {
                            navigate(`/pool/${dId}?requestId=${rId}`);
                          } else {
                            navigate(`/pool?search=${encodeURIComponent(donorName)}`);
                          }
                        }}
                        className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-md active:scale-95"
                      >
                        Contact Donor
                      </button>
                    ) : (
                      <button className="px-6 py-3.5 bg-gray-50 text-gray-400 border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-default flex items-center justify-center gap-2">
                          Broadcast Live...
                      </button>
                    )}
                  </div>
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