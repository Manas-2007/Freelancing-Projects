import React, { useState, useEffect } from 'react';
import { Bell, MessageCircle, Zap, AtSign, Inbox, ChevronRight, CheckCheck, Trash2 } from 'lucide-react';

const NotificationsView = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Mentions', 'Alerts', 'Messages'];

  const [notifications, setNotifications] = useState([
    { id: 1, type: 'Mentions', user: 'Traveler_Ben', action: 'liked your recent photo.', time: '2m ago', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ben', unread: true },
    { id: 2, type: 'Mentions', user: '@Aman_Photog', action: 'mentioned you in a comment: "Great shot!"', time: '5m ago', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman', unread: true },
    { id: 3, type: 'Alerts', user: 'SocialSphere Team', action: 'Welcome to the premium experience.', time: '10m ago', img: 'https://api.dicebear.com/7.x/bottts/svg?seed=Sphere' },
    { id: 4, type: 'Messages', user: 'Maria', action: 'replied to your message in Direct.', time: '15m ago', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria', unread: true },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const deleteNotification = (e, id) => {
    e.stopPropagation();
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredData = activeFilter === 'All'
    ? notifications
    : notifications.filter(n => n.type === activeFilter);

  const getIcon = (type) => {
    switch(type) {
      case 'Mentions': return <AtSign size={13} className="text-blue-500" />;
      case 'Messages': return <MessageCircle size={13} className="text-indigo-500" />;
      case 'Alerts': return <Zap size={13} className="text-amber-500" />;
      default: return <Bell size={13} className="text-slate-400" />;
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 h-[calc(100vh-110px)] md:h-[calc(100vh-140px)] font-sans select-none overflow-hidden pr-1 sm:pr-2 sm:mt-[-20px]">
      
      {/* HEADER ACTIONS */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-[13px] font-bold transition-all duration-300 border-2 ${
                activeFilter === filter 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105' 
                  : 'bg-white text-slate-400 border-slate-100 hover:border-blue-200 hover:text-blue-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {notifications.some(n => n.unread) && (
          <button 
            onClick={() => setNotifications(notifications.map(n => ({...n, unread: false})))}
            className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-black text-blue-600 uppercase tracking-widest hover:bg-blue-50 px-3 sm:px-4 py-2 rounded-lg transition-all"
          >
            <CheckCheck size={13} />
            <span className="hidden sm:inline">Mark all read</span>
            <span className="sm:hidden">Read all</span>
          </button>
        )}
      </div>

      {/* NOTIFICATIONS LIST */}
      <div className="flex-1 overflow-y-auto pr-0 sm:pr-3 flex flex-col gap-2 sm:gap-3 no-scrollbar pb-10">
        {filteredData.length > 0 ? (
          filteredData.map((notif) => (
            <div 
              key={notif.id}
              onClick={() => markAsRead(notif.id)}
              className={`group relative flex items-center justify-between p-3 sm:p-4 rounded-[18px] sm:rounded-[24px] border-2 transition-all duration-300 cursor-pointer ${
                notif.unread 
                  ? 'bg-white border-blue-100 shadow-sm' 
                  : 'bg-slate-50/40 border-transparent hover:bg-white hover:border-slate-200'
              } hover:-translate-y-0.5`}
            >
              {notif.unread && (
                <div className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-1 h-5 sm:h-6 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
              )}

              <div className="flex items-center gap-3 sm:gap-4 pl-2 min-w-0 flex-1">
                <div className="relative flex-shrink-0">
                  <img 
                    src={notif.img} 
                    alt="" 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] sm:rounded-[16px] object-cover border-2 border-white shadow-sm transition-all ${notif.unread ? 'grayscale-0' : 'grayscale-[0.5]'}`} 
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-lg shadow-sm flex items-center justify-center border border-slate-50">
                    {getIcon(notif.type)}
                  </div>
                </div>

                <div className="flex flex-col min-w-0">
                  <h4 className={`text-[13px] sm:text-[15px] tracking-tight transition-colors truncate ${notif.unread ? 'font-black text-slate-900' : 'font-bold text-slate-500'}`}>
                    {notif.user}
                  </h4>
                  <p className={`text-[11px] sm:text-[13px] transition-colors truncate ${notif.unread ? 'font-bold text-slate-600' : 'font-medium text-slate-400'}`}>
                    {notif.action}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0 ml-2">
                <span className={`hidden sm:inline font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md transition-all ${notif.unread ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                  {notif.time}
                </span>
                <span className={`sm:hidden font-bold text-[9px] uppercase ${notif.unread ? 'text-blue-600' : 'text-slate-400'}`}>
                  {notif.time}
                </span>
                
                <button 
                  onClick={(e) => deleteNotification(e, notif.id)}
                  className="p-1.5 sm:p-2 text-slate-300 hover:text-red-500 max-md:opacity-100 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={14} />
                </button>
                
                <ChevronRight size={14} className={`transition-all ${notif.unread ? 'text-blue-500 translate-x-0' : 'text-slate-300 group-hover:translate-x-1'}`} />
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full opacity-30 mt-10 animate-in zoom-in duration-500">
            <div className="p-8 sm:p-10 bg-slate-100 rounded-[50px] mb-5 sm:mb-6">
               <Inbox size={40} className="text-slate-400" />
            </div>
            <h3 className="font-black text-[17px] sm:text-[20px] text-slate-900 uppercase tracking-tighter">
              Nothing to see here
            </h3>
            <p className="text-[11px] sm:text-[12px] font-bold text-slate-400 mt-2">All caught up! Check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsView;