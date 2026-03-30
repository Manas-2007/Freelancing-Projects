import React, { useState } from 'react';
import { Bell, Heart, MessageCircle, UserPlus, AtSign, Zap, Inbox } from 'lucide-react';

const NotificationsView = () => {
  // 1. STATE FOR FILTERING
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Mentions', 'Alerts', 'Messages'];

  // 2. DATA WITH TYPES
  const allNotifications = [
    { id: 1, type: 'Mentions', user: 'Traveler_Ben', action: 'liked your recent photo.', time: '2m ago', img: 'https://i.pravatar.cc/150?u=ben', unread: true },
    { id: 2, type: 'Mentions', user: '@Aman_Photog', action: 'mentioned you in a comment: "Great shot!"', time: '5m ago', img: 'https://i.pravatar.cc/150?u=aman', unread: true },
    { id: 3, type: 'Alerts', user: 'SocialSphere Team', action: 'Welcome to the premium experience.', time: '10m ago', img: 'https://i.pravatar.cc/150?u=team' },
    { id: 4, type: 'Messages', user: 'Maria', action: 'replied to your message in Direct.', time: '15m ago', img: 'https://i.pravatar.cc/150?u=maria' },
  ];

  // 3. FILTER LOGIC
  const filteredData = activeFilter === 'All' 
    ? allNotifications 
    : allNotifications.filter(n => n.type === activeFilter);

  const getIcon = (type) => {
    switch(type) {
      case 'Mentions': return <AtSign size={14} className="text-blue-500" />;
      case 'Messages': return <MessageCircle size={14} className="text-indigo-500" />;
      case 'Alerts': return <Zap size={14} className="text-amber-500" />;
      default: return <Bell size={14} className="text-slate-400" />;
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-700 h-[calc(100vh-140px)] font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* FILTER TABS */}
      <div className="flex items-center gap-4 px-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-7 py-2.5 rounded-full text-[15px] font-[900] transition-all duration-300 border-2 ${
              activeFilter === filter 
                ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-slate-200' 
                : 'bg-white text-slate-400 border-transparent hover:bg-slate-50 hover:text-slate-600'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* NOTIFICATIONS LIST */}
      <div className="flex-1 overflow-y-auto pr-4 flex flex-col gap-4 no-scrollbar pb-10">
        {filteredData.length > 0 ? (
          filteredData.map((notif) => (
            <div 
              key={notif.id}
              // FIX: Defined shadow-none as base to prevent the "Always On" shadow bug
              className={`group relative flex items-center justify-between p-5 rounded-[30px] border border-transparent transition-all duration-300 cursor-pointer shadow-none hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:bg-blue-100 hover:border-blue-400 ${
                notif.unread ? 'bg-white/80' : 'bg-transparent'
              }`}
            >
              {notif.unread && (
                <div className="absolute left-3 w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
              )}

              <div className="flex items-center gap-5">
                <div className="relative">
                  <img src={notif.img} alt="" className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-lg shadow-md flex items-center justify-center border border-slate-50">
                    {getIcon(notif.type)}
                  </div>
                </div>

                <div className="flex flex-col">
                  <h4 className="text-[16px] font-[1000] text-slate-900 leading-tight tracking-tight">
                    {notif.user}
                  </h4>
                  <p className="text-slate-500 font-[600] text-[14px] mt-0.5">
                    {notif.action}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-slate-300 font-[800] text-[11px] uppercase tracking-widest">
                  {notif.time}
                </span>
              </div>
            </div>
          ))
        ) : (
          // EMPTY STATE STYLE
          <div className="flex flex-col items-center justify-center h-full opacity-40">
            <Inbox size={48} className="text-slate-300 mb-4" />
            <p className="font-[800] text-slate-400">No new {activeFilter.toLowerCase()} yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsView;