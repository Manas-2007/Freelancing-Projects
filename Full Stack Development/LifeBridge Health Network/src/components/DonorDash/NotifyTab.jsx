import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiBell, FiCheckCircle, FiTrash2, FiInfo, FiHeart, FiAlertCircle } from "react-icons/fi";

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔄 Fetch Real Notifications (Completed Donations)
  const fetchDonorNotifications = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const donorId = user?._id || "663a7d4e3f1a2c001f8e4b5a"; 

      const res = await axios.get(`http://localhost:5000/api/requests/donor/${donorId}`);
      
      // ✅ Filter logic: Hum sirf 'Completed' requests ko as a notification card dikhayenge
      const completedUpdates = res.data
        .filter(req => req.status === 'Completed')
        .map(req => ({
          id: req._id,
          type: "impact",
          title: "Life Saved Successfully!",
          msg: `Mubarak ho! Your donation for ${req.name} was confirmed. Thank you for your contribution.`,
          time: new Date(req.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          unread: true // Hamesha highlight rahega jab tak history na dekhi jaye
        }));

      setNotifications(completedUpdates);
    } catch (err) {
      console.error("Notification load error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonorNotifications();
    const interval = setInterval(fetchDonorNotifications, 5000); // Polling every 5 sec
    return () => clearInterval(interval);
  }, []);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-[fadeIn_0.5s_ease-out] mt-5 md:mt-10">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
            <FiBell className="text-red-600" size={28} /> Notifications
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-medium mt-1 text-left">
            Stay updated on your blood donation impact.
          </p>
        </div>
        
        <button 
          onClick={markAllRead}
          className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white text-gray-600 px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all shadow-sm w-full sm:w-auto"
        >
          <FiCheckCircle size={18} /> Mark all as read
        </button>
      </div>

      {/* 2. NOTIFICATION FEED */}
      <div className="bg-white rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-sm overflow-hidden min-h-[300px]">
        <div className="divide-y divide-gray-50">
          {loading ? (
            <p className="p-20 text-gray-400 font-bold italic text-center">Syncing with archives...</p>
          ) : notifications.length > 0 ? (
            notifications.map((note) => (
              <div 
                key={note.id} 
                onClick={() => navigate('/history')}
                className={`group flex flex-col sm:flex-row items-start gap-4 p-4 md:p-6 transition-all duration-300 hover:bg-emerald-50/30 cursor-pointer ${note.unread ? 'bg-emerald-50/10' : 'bg-white'}`}
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm bg-emerald-100 text-emerald-600`}>
                     <FiHeart size={20} />
                  </div>
                  
                  <div className="sm:hidden flex-1 text-left">
                     <h3 className="text-sm font-black text-gray-900">{note.title}</h3>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">{note.time}</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0 w-full text-left">
                  <div className="hidden sm:flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-[15px] font-black text-gray-900">
                      {note.title}
                      {note.unread && <span className="ml-2 inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />}
                    </h3>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{note.time}</span>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-700 font-medium">
                    {note.msg}
                  </p>
                </div>

                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={(e) => { e.stopPropagation(); deleteNotification(note.id); }}
                    className="p-2 text-gray-300 hover:text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 md:p-20 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-200">
                <FiBell size={30} />
              </div>
              <p className="text-gray-400 font-bold text-sm">No new updates. Help save lives!</p>
            </div>
          )}
        </div>
      </div>

      {/* 3. CTA CARD */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[24px] md:rounded-[32px] p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-100">
        <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-bold mb-1 italic uppercase tracking-tighter">Impact History</h4>
            <p className="text-white/80 text-xs md:text-sm font-medium tracking-tight">Your contributions are building a safer community.</p>
        </div>
        <button 
          onClick={() => navigate('/history')}
          className="w-full md:w-auto whitespace-nowrap bg-white text-emerald-700 px-8 py-3 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
        >
            Explore Records
        </button>
      </div>

    </div>
  );
};

export default Notifications;