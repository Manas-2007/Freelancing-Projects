import React from 'react';
import { MapPin, Link as LinkIcon, Edit3, Heart, Eye, Bookmark } from 'lucide-react';

const ProfileView = () => {
  const glassCard = "bg-white/80 backdrop-blur-xl border border-white rounded-[32px] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.15)]";

  return (
    // Added pb-10 and overflow-hidden to ensure no scrolling and full visibility
    <div className="h-[calc(100vh-140px)] flex flex-col gap-5 animate-in fade-in duration-700 overflow-hidden pb-10 font-['Plus_Jakarta_Sans']">
      
      <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
        
        {/* LEFT COLUMN */}
        <div className="col-span-4 flex flex-col h-full">
          <div className={`${glassCard} flex-1 flex flex-col items-center justify-center text-center relative`}>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full -z-10"></div>
             
             <div className="relative mb-6">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full blur-[1px] opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
                  alt="Profile" 
                  className="relative w-32 h-32 rounded-full border-[5px] border-white shadow-2xl object-cover" 
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-[3px] border-white rounded-full shadow-lg"></div>
             </div>

             <h2 className="text-[28px] font-[1000] text-slate-900 tracking-tighter leading-none mb-2">Sarah Williams</h2>
             <p className="text-blue-500 font-[800] text-[15px]">@sarah_williams</p>

             <p className="mt-4 text-slate-500 font-[600] text-[13px] leading-relaxed max-w-[220px]">
                Photographer | Traveler | Food Lover <br/> 
                Exploring the world, one adventure at a time. 🌍
             </p>

             <button className="mt-8 w-full max-w-[200px] bg-[#0f172a] text-white py-3.5 rounded-2xl font-[900] text-[13px] flex items-center justify-center gap-2 hover:bg-blue-600 transition-all active:scale-95">
                <Edit3 size={16} /> Edit Profile
             </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-8 flex flex-col gap-6 h-full">
          
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Followers', val: '12.5k', color: 'text-blue-600' },
              { label: 'Following', val: '680', color: 'text-slate-800' },
              { label: 'Posts', val: '850', color: 'text-slate-800' },
              { label: 'Impressions', val: '1.4M', color: 'text-indigo-600' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 border border-white p-4 rounded-[24px] shadow-sm text-center">
                <p className={`text-[22px] font-[1000] ${stat.color} leading-none tracking-tighter`}>{stat.val}</p>
                <p className="text-slate-400 font-[800] text-[10px] uppercase tracking-[1.5px] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
             <div className={glassCard}>
                <h4 className="text-[11px] font-[1000] uppercase tracking-[3px] text-slate-400 mb-4">Interests</h4>
                <div className="flex flex-wrap gap-2">
                   {['Travel', 'Photography', 'Hiking', 'Food Blogging'].map(tag => (
                     <span key={tag} className="px-3 py-2 bg-blue-50 text-blue-600 rounded-xl font-[800] text-[11px] border border-blue-100">{tag}</span>
                   ))}
                </div>
             </div>
             <div className={glassCard}>
                <h4 className="text-[11px] font-[1000] uppercase tracking-[3px] text-slate-400 mb-4">Languages</h4>
                <div className="flex flex-wrap gap-2">
                   {['English', 'Spanish', 'French'].map(lang => (
                     <span key={lang} className="px-3 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-[800] text-[11px] border border-indigo-100">{lang}</span>
                   ))}
                </div>
             </div>
          </div>

          {/* FIXED ANALYTICS BAR: Added margin-bottom and full rounding */}
          <div className="bg-[#0f172a] p-6 rounded-full shadow-2xl flex items-center justify-around border border-white/5 relative overflow-hidden mb-2">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"></div>
             
             {[
               { icon: <Eye size={20}/>, label: 'Views', val: '9.2k', color: 'text-blue-400', bg: 'bg-blue-400/10' },
               { icon: <Heart size={20}/>, label: 'Likes', val: '4255', color: 'text-rose-400', bg: 'bg-rose-400/10' },
               { icon: <Bookmark size={20}/>, label: 'Saved', val: '560', color: 'text-amber-400', bg: 'bg-amber-400/10' }
             ].map((item, i) => (
               <React.Fragment key={i}>
                 <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color} shadow-inner`}>
                       {item.icon}
                    </div>
                    <div>
                       <p className="text-white text-[20px] font-[1000] leading-none">{item.val}</p>
                       <p className="text-slate-500 font-[800] text-[10px] uppercase mt-1 tracking-widest">{item.label}</p>
                    </div>
                 </div>
                 {i < 2 && <div className="w-[1px] h-10 bg-white/10"></div>}
               </React.Fragment>
             ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileView;