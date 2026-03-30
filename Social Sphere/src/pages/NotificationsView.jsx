import React, { useState, useEffect } from 'react';
import { Bell, MessageCircle, Zap, AtSign, Inbox, ChevronRight, CheckCheck, Trash2 } from 'lucide-react';

const NotificationsView = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Mentions', 'Alerts', 'Messages'];

  // 1. DATA STATE: Manage notifications in state to allow interactions
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'Mentions', user: 'Traveler_Ben', action: 'liked your recent photo.', time: '2m ago', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ben', unread: true },
    { id: 2, type: 'Mentions', user: '@Aman_Photog', action: 'mentioned you in a comment: "Great shot!"', time: '5m ago', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman', unread: true },
    { id: 3, type: 'Alerts', user: 'SocialSphere Team', action: 'Welcome to the premium experience.', time: '10m ago', img: 'https://api.dicebear.com/7.x/bottts/svg?seed=Sphere' },
    { id: 4, type: 'Messages', user: 'Maria', action: 'replied to your message in Direct.', time: '15m ago', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria', unread: true },
  ]);

  // 2. MARK AS READ FUNCTION
  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, unread: false } : n
    ));
  };

  // 3. DELETE NOTIFICATION
  const deleteNotification = (e, id) => {
    e.stopPropagation(); // Prevents triggering markAsRead
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredData = activeFilter === 'All' 
    ? notifications 
    : notifications.filter(n => n.type === activeFilter);

  const getIcon = (type) => {
    switch(type) {
      case 'Mentions': return <AtSign size={14} className="text-blue-500" />;
      case 'Messages': return <MessageCircle size={14} className="text-indigo-500" />;
      case 'Alerts': return <Zap size={14} className="text-amber-500" />;
      default: return <Bell size={14} className="text-slate-400" />;
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 h-[calc(100vh-140px)] font-sans select-none overflow-hidden pr-2 mt-[-20px]">
      
      {/* HEADER ACTIONS */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-3">
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
        
        {/* Bulk Action Button */}
        {notifications.some(n => n.unread) && (
          <button 
            onClick={() => setNotifications(notifications.map(n => ({...n, unread: false})))}
            className="flex items-center gap-2 text-[11px] font-black text-blue-600 uppercase tracking-widest hover:bg-blue-50 px-4 py-2 rounded-lg transition-all"
          >
            <CheckCheck size={14} /> Mark all read
          </button>
        )}
      </div>

      {/* NOTIFICATIONS LIST */}
      <div className="flex-1 overflow-y-auto pr-3 flex flex-col gap-3 no-scrollbar pb-10">
        {filteredData.length > 0 ? (
          filteredData.map((notif) => (
            <div 
              key={notif.id}
              onClick={() => markAsRead(notif.id)}
              className={`group relative flex items-center justify-between p-4 rounded-[24px] border-2 transition-all duration-300 cursor-pointer ${
                notif.unread 
                  ? 'bg-white border-blue-100 shadow-sm' 
                  : 'bg-slate-50/40 border-transparent hover:bg-white hover:border-slate-200'
              } hover:-translate-y-0.5`}
            >
              {/* Active Indicator */}
              {notif.unread && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
              )}

              <div className="flex items-center gap-4 pl-2">
                <div className="relative">
                  <img 
                    src={notif.img} 
                    alt="" 
                    className={`w-12 h-12 rounded-[16px] object-cover border-2 border-white shadow-sm transition-all ${notif.unread ? 'grayscale-0' : 'grayscale-[0.5]'}`} 
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-lg shadow-sm flex items-center justify-center border border-slate-50">
                    {getIcon(notif.type)}
                  </div>
                </div>

                <div className="flex flex-col">
                  <h4 className={`text-[15px] tracking-tight transition-colors ${notif.unread ? 'font-black text-slate-900' : 'font-bold text-slate-500'}`}>
                    {notif.user}
                  </h4>
                  <p className={`text-[13px] transition-colors ${notif.unread ? 'font-bold text-slate-600' : 'font-medium text-slate-400'}`}>
                    {notif.action}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md transition-all ${notif.unread ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                  {notif.time}
                </span>
                
                {/* Delete on Hover Action */}
                <button 
                  onClick={(e) => deleteNotification(e, notif.id)}
                  className="p-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={16} />
                </button>
                
                <ChevronRight size={16} className={`transition-all ${notif.unread ? 'text-blue-500 translate-x-0' : 'text-slate-300 group-hover:translate-x-1'}`} />
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full opacity-30 mt-10 animate-in zoom-in duration-500">
            <div className="p-10 bg-slate-100 rounded-[50px] mb-6">
               <Inbox size={48} className="text-slate-400" />
            </div>
            <h3 className="font-black text-[20px] text-slate-900 uppercase tracking-tighter">
                Nothing to see here
            </h3>
            <p className="text-[12px] font-bold text-slate-400 mt-2">All caught up! Check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsView;