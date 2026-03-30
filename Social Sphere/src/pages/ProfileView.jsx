import React from 'react';
import { MapPin, Link as LinkIcon, Edit3, Heart, Eye, Bookmark, Sparkles, Languages, Hash } from 'lucide-react';

const ProfileView = () => {
  // Ultra-Premium Glass Card with tighter borders
  const glassCard = "bg-white/90 backdrop-blur-xl border border-slate-100 rounded-[35px] p-7 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_25px_60px_-20px_rgba(59,130,246,0.12)] hover:-translate-y-1";

  return (
    /* Font set to Sans and Micro-Scaled for PC */
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6 animate-in fade-in duration-700 overflow-hidden pb-6 font-sans select-none mt-[-20px]">
      
      <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
        
        {/* LEFT COLUMN: Identity Card */}
        <div className="col-span-4 flex flex-col h-full">
          <div className={`${glassCard} flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
             {/* Subtle Glow Background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full -z-10"></div>
             
             <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full blur-[2px] opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
                  alt="Profile" 
                  className="relative w-28 h-28 rounded-full border-[6px] border-white shadow-2xl object-cover" 
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-[3px] border-white rounded-full shadow-lg"></div>
             </div>

             <h2 className="text-[22px] font-bold text-slate-900 tracking-tight leading-none mb-1">Sarah Williams</h2>
             <p className="text-blue-500 font-bold text-[13px] uppercase tracking-wider">@sarah_williams</p>

             <p className="mt-5 text-slate-500 font-medium text-[14px] leading-relaxed max-w-[240px]">
                Photographer | Traveler | Food Lover <br/> 
                Exploring the world, one adventure at a time. 🌍
             </p>

             <button className="mt-8 w-full max-w-[180px] bg-blue-600 text-white py-3.5 rounded-[20px] font-bold text-[13px] flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all active:scale-95">
                <Edit3 size={15} /> Edit Profile
             </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Stats & Details */}
        <div className="col-span-8 flex flex-col gap-6 h-full">
          
          {/* Top Stats Bar */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Followers', val: '12.5k', color: 'text-blue-600' },
              { label: 'Following', val: '680', color: 'text-slate-800' },
              { label: 'Posts', val: '850', color: 'text-slate-800' },
              { label: 'Impressions', val: '1.4M', color: 'text-indigo-600' }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-slate-100 p-4 rounded-[26px] shadow-sm text-center hover:bg-blue-50/30 transition-colors">
                <p className={`text-[18px] font-bold ${stat.color} leading-none tracking-tight`}>{stat.val}</p>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[2px] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Interests & Languages Section: Scaled UP visibility */}
          <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
             <div className={glassCard}>
                <h4 className="text-[11px] font-bold uppercase tracking-[2.5px] text-slate-400 mb-5 flex items-center gap-2">
                    <Hash size={12}/> Interests
                </h4>
                <div className="flex flex-wrap gap-3">
                   {['Travel', 'Photography', 'Hiking', 'Food Blogging'].map(tag => (
                     <span key={tag} className="px-4 py-2 bg-blue-50/50 text-blue-600 rounded-xl font-bold text-[13px] border border-blue-100/50 hover:bg-blue-600 hover:text-white transition-all cursor-default">
                        {tag}
                     </span>
                   ))}
                </div>
             </div>
             
             <div className={glassCard}>
                <h4 className="text-[11px] font-bold uppercase tracking-[2.5px] text-slate-400 mb-5 flex items-center gap-2">
                    <Languages size={12}/> Languages
                </h4>
                <div className="flex flex-wrap gap-3">
                   {['English', 'Spanish', 'French'].map(lang => (
                     <span key={lang} className="px-4 py-2 bg-indigo-50/50 text-indigo-600 rounded-xl font-bold text-[13px] border border-indigo-100/50 hover:bg-indigo-600 hover:text-white transition-all cursor-default">
                        {lang}
                     </span>
                   ))}
                </div>
             </div>
          </div>

          {/* ANALYTICS BAR: Fixed rounding and color balance */}
          <div className="bg-[#0f172a] p-5 rounded-[35px] shadow-xl flex items-center justify-around border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"></div>
             
             {[
               { icon: <Eye size={18}/>, label: 'Views', val: '9.2k', color: 'text-blue-400', bg: 'bg-blue-400/10' },
               { icon: <Heart size={18}/>, label: 'Likes', val: '4255', color: 'text-rose-400', bg: 'bg-rose-400/10' },
               { icon: <Bookmark size={18}/>, label: 'Saved', val: '560', color: 'text-amber-400', bg: 'bg-amber-400/10' }
             ].map((item, i) => (
               <React.Fragment key={i}>
                 <div className="flex items-center gap-4 group cursor-default">
                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color} shadow-inner group-hover:scale-110 transition-transform`}>
                       {item.icon}
                    </div>
                    <div>
                       <p className="text-white text-[18px] font-bold leading-none">{item.val}</p>
                       <p className="text-slate-500 font-bold text-[10px] uppercase mt-1.5 tracking-wider">{item.label}</p>
                    </div>
                 </div>
                 {i < 2 && <div className="w-[1px] h-8 bg-white/10"></div>}
               </React.Fragment>
             ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileView;