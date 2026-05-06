import React, { useState } from 'react';
import { FiBell, FiCheckCircle, FiTrash2, FiInfo, FiHeart, FiAlertCircle } from "react-icons/fi";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "critical", title: "Urgent B+ Needed", msg: "A patient at Apollo Hospital needs 2 units of B+ blood immediately.", time: "20 min ago", unread: true },
    { id: 2, type: "impact", title: "Lives Saved!", msg: "Your donation on 12 Nov was used today. You just saved 3 lives!", time: "2 days ago", unread: true },
    { id: 3, type: "system", title: "Eligibility Update", msg: "Great news! You are now eligible to donate again.", time: "5 days ago", unread: false },
    { id: 4, type: "system", title: "Profile Verified", msg: "Your medical documents have been verified by our team.", time: "1 week ago", unread: false },
    { id: 5, type: "critical", title: "Emergency Near You", msg: "New request at Yashoda Hospital (1.2 km away).", time: "2 weeks ago", unread: false },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 mt-5 md:mt-10">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
            <FiBell className="text-red-600" size={28} /> Notifications
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-medium mt-1">
            Stay updated on urgent requests and impact.
          </p>
        </div>
        
        <button 
          onClick={markAllRead}
          className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-green-600 hover:bg-green-600 hover:text-white text-gray-600 px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all shadow-sm w-full sm:w-auto"
        >
          <FiCheckCircle size={18} /> Mark all as read
        </button>
      </div>

      {/* 2. NOTIFICATION FEED */}
      <div className="bg-white rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-50">
          {notifications.length > 0 ? (
            notifications.map((note) => (
              <div 
                key={note.id} 
                className={`group flex flex-col sm:flex-row items-start gap-4 p-4 md:p-6 transition-all duration-300 hover:bg-red-50/30 ${note.unread ? 'bg-red-50/10' : 'bg-white'}`}
              >
                {/* ICON & TITLE ROW (For Mobile) */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm
                    ${note.type === 'critical' ? 'bg-red-100 text-red-600' : 
                      note.type === 'impact' ? 'bg-green-100 text-green-600' : 
                      'bg-blue-100 text-blue-600'}`}
                  >
                    {note.type === 'critical' ? <FiAlertCircle size={20} /> : 
                     note.type === 'impact' ? <FiHeart size={20} /> : 
                     <FiInfo size={20} />}
                  </div>
                  
                  {/* Mobile-only Title display */}
                  <div className="sm:hidden flex-1">
                     <h3 className={`text-sm leading-tight ${note.unread ? 'font-black text-gray-900' : 'font-bold text-gray-700'}`}>
                      {note.title}
                    </h3>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {note.time}
                    </span>
                  </div>

                  {/* Mobile-only Trash */}
                  <button 
                    onClick={() => deleteNotification(note.id)}
                    className="sm:hidden p-2 text-gray-400 hover:text-red-600"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>

                {/* CONTENT BLOCK */}
                <div className="flex-1 min-w-0 w-full">
                  <div className="hidden sm:flex items-center justify-between gap-2 mb-1">
                    <h3 className={`text-[15px] truncate ${note.unread ? 'font-black text-gray-900' : 'font-bold text-gray-700'}`}>
                      {note.title}
                      {note.unread && <span className="ml-2 inline-block w-2 h-2 bg-red-600 rounded-full animate-pulse" />}
                    </h3>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                      {note.time}
                    </span>
                  </div>
                  <p className={`text-xs md:text-sm leading-relaxed ${note.unread ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                    {note.msg}
                  </p>
                </div>

                {/* DESKTOP ACTION BLOCK */}
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => deleteNotification(note.id)}
                    className="p-2 text-gray-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
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
              <p className="text-gray-400 font-bold text-sm">All caught up!</p>
            </div>
          )}
        </div>
      </div>

      {/* 3. PROMO CARD (Mobile Responsive) */}
      <div className="bg-gradient-to-br from-[#880808] to-[#cc0000] rounded-[24px] md:rounded-[32px] p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-red-100">
        <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-bold mb-1">Push Notifications</h4>
            <p className="text-white/80 text-xs md:text-sm font-medium">Get instant alerts when someone needs your help.</p>
        </div>
        <button className="w-full md:w-auto whitespace-nowrap bg-white text-red-600 px-8 py-3 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm hover:scale-105 transition-transform">
            Allow Access
        </button>
      </div>

    </div>
  );
};

export default Notifications;