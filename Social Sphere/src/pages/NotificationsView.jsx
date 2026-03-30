import React, { useState } from 'react';
import { Bell, MessageCircle, Zap, AtSign, Inbox, ChevronRight } from 'lucide-react';

const NotificationsView = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Mentions', 'Alerts', 'Messages'];

  const allNotifications = [
    { id: 1, type: 'Mentions', user: 'Traveler_Ben', action: 'liked your recent photo.', time: '2m ago', img: 'https://i.pravatar.cc/150?u=ben', unread: true },
    { id: 2, type: 'Mentions', user: '@Aman_Photog', action: 'mentioned you in a comment: "Great shot!"', time: '5m ago', img: 'https://i.pravatar.cc/150?u=aman', unread: true },
    { id: 3, type: 'Alerts', user: 'SocialSphere Team', action: 'Welcome to the premium experience.', time: '10m ago', img: 'https://i.pravatar.cc/150?u=team' },
    { id: 4, type: 'Messages', user: 'Maria', action: 'replied to your message in Direct.', time: '15m ago', img: 'https://i.pravatar.cc/150?u=maria' },
  ];

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
    <div className="flex flex-col gap-6 animate-in fade-in duration-700 h-[calc(100vh-140px)] font-sans select-none overflow-hidden pr-2 mt-[-20px]">
      
      {/* FILTER TABS: Scaled down to 13px for Pro feel */}
      <div className="flex items-center gap-3 px-1">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-xl text-[13px] font-bold transition-all duration-300 border-2 ${
              activeFilter === filter 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-blue-200 hover:text-blue-500'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* NOTIFICATIONS LIST: Optimized spacing */}
      <div className="flex-1 overflow-y-auto pr-3 flex flex-col gap-3 no-scrollbar pb-10">
        {filteredData.length > 0 ? (
          filteredData.map((notif) => (
            <div 
              key={notif.id}
              className={`group relative flex items-center justify-between p-4 rounded-[24px] border-2 transition-all duration-300 cursor-pointer ${
                notif.unread 
                  ? 'bg-white border-blue-50 shadow-sm' 
                  : 'bg-slate-50/50 border-transparent hover:bg-white hover:border-slate-200'
              } hover:-translate-y-0.5`}
            >
              {/* Unread Indicator: More subtle for desktop */}
              {notif.unread && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-full shadow-sm"></div>
              )}

              <div className="flex items-center gap-4 pl-2">
                <div className="relative">
                  {/* Scaled Avatar: 16 -> 12 (w-12 h-12) */}
                  <img 
                    src={notif.img} 
                    alt="" 
                    className="w-12 h-12 rounded-[16px] object-cover border-2 border-white shadow-sm" 
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-lg shadow-sm flex items-center justify-center border border-slate-50">
                    {getIcon(notif.type)}
                  </div>
                </div>

                <div className="flex flex-col">
                  {/* Name: 19px -> 15px */}
                  <h4 className="text-[15px] font-bold text-slate-900 leading-tight">
                    {notif.user}
                  </h4>
                  {/* Action: 16px -> 13px */}
                  <p className="text-slate-500 font-medium text-[13px]">
                    {notif.action}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Timing: 13px -> 11px */}
                <span className="text-slate-600 font-bold text-[11px] uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                  {notif.time}
                </span>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full opacity-20 mt-10">
            <div className="p-8 bg-slate-100 rounded-[40px] mb-4">
               <Inbox size={40} className="text-slate-400" />
            </div>
            <p className="font-bold text-[18px] text-slate-400 uppercase tracking-tighter">
                Empty Inbox
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsView;