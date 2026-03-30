import React, { useState, useEffect } from 'react';
import { Heart, Eye, Bookmark, Sparkles, Languages, Hash } from 'lucide-react';
import { useSocial } from '../context/SocialContext'; 

const ProfileView = () => {
  const { user, posts } = useSocial(); 
  
  const [dynamicStats, setDynamicStats] = useState({
    followers: '0',
    following: '0',
    impressions: '0',
    views: '0',
    likes: '0',
    saved: '0'
  });

  useEffect(() => {
    setDynamicStats({
      followers: (Math.random() * 12 + 5).toFixed(1) + 'k',
      following: Math.floor(Math.random() * 300) + 150,
      impressions: (Math.random() * 1.8 + 0.4).toFixed(1) + 'M',
      views: (Math.random() * 15 + 2).toFixed(1) + 'k',
      likes: Math.floor(Math.random() * 8000) + 1200,
      saved: Math.floor(Math.random() * 900) + 100
    });
  }, []);

  const glassCard = "bg-white/90 backdrop-blur-xl border border-slate-100 rounded-[35px] p-7 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_25px_60px_-20px_rgba(59,130,246,0.12)] hover:-translate-y-1";

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6 animate-in fade-in duration-700 overflow-hidden pb-6 font-sans select-none mt-[-20px]">
      
      <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
        
        {/* LEFT COLUMN: Identity Card (Cleaned - No Edit Button) */}
        <div className="col-span-4 flex flex-col h-full">
          <div className={`${glassCard} flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
             <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-[60px] rounded-full"></div>
             
             <div className="relative mb-8">
                <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full blur-[2px] opacity-10"></div>
                
                {/* 👔 PROFESSIONAL MALE PORTRAIT */}
                <img 
                  src="https://kenh14cdn.com/203336854389633024/2021/11/4/photo-1-16360000252341588868443.png" 
                  alt="Professional Profile" 
                  className="relative w-32 h-32 rounded-full border-[6px] border-white shadow-2xl object-cover" 
                />
                
                <div className="absolute bottom-3 right-3 w-7 h-7 bg-emerald-500 border-[4px] border-white rounded-full shadow-lg"></div>
             </div>

             <h2 className="text-[26px] font-bold text-slate-900 tracking-tight leading-none mb-2">{user.username}</h2>
             <p className="text-blue-600 font-black text-[12px] uppercase tracking-[2px] opacity-80">
                @{user.username.toLowerCase().replace(/\s+/g, '')}_official
             </p>

             <div className="w-12 h-1 bg-slate-100 rounded-full my-6 mx-auto"></div>

             <p className="text-slate-500 font-medium text-[15px] leading-relaxed max-w-[260px]">
                Global Digital Architect & Content Strategist. <br/> 
                Dedicated to crafting immersive social experiences within the Sphere ecosystem. ✨
             </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Stats & Details */}
        <div className="col-span-8 flex flex-col gap-6 h-full">
          
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Network', val: dynamicStats.followers, color: 'text-blue-600' },
              { label: 'Following', val: dynamicStats.following, color: 'text-slate-800' },
              { label: 'Stories', val: posts.length, color: 'text-blue-600' }, 
              { label: 'Reach', val: dynamicStats.impressions, color: 'text-indigo-600' }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-slate-100 p-5 rounded-[30px] shadow-sm text-center">
                <p className={`text-[20px] font-black ${stat.color} leading-none tracking-tight`}>{stat.val}</p>
                <p className="text-slate-400 font-bold text-[9px] uppercase tracking-[2.5px] mt-2.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
             <div className={glassCard}>
                <h4 className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-6 flex items-center gap-2">
                    <Hash size={14} className="text-blue-500"/> Core Expertise
                </h4>
                <div className="flex flex-wrap gap-3">
                   {['UI/UX Design', 'FullStack', 'Strategy', 'Branding'].map(tag => (
                     <span key={tag} className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-2xl font-bold text-[12px] border border-slate-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default">
                        {tag}
                     </span>
                   ))}
                </div>
             </div>
             
             <div className={glassCard}>
                <h4 className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-6 flex items-center gap-2">
                    <Languages size={14} className="text-indigo-500"/> Global Reach
                </h4>
                <div className="flex flex-wrap gap-3">
                   {['English (US)', 'Hindi (IN)', 'Digital Native'].map(lang => (
                     <span key={lang} className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-2xl font-bold text-[12px] border border-slate-100 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all cursor-default">
                        {lang}
                     </span>
                   ))}
                </div>
             </div>
          </div>

          {/* ANALYTICS BAR: Deep Dark Premium */}
          <div className="bg-[#0f172a] p-6 rounded-[40px] shadow-2xl flex items-center justify-around border border-white/5 relative overflow-hidden">
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 blur-[60px] rounded-full"></div>
             
             {[
               { icon: <Eye size={20}/>, label: 'Profile Views', val: dynamicStats.views, color: 'text-blue-400', bg: 'bg-blue-400/10' },
               { icon: <Heart size={20}/>, label: 'Engagement', val: dynamicStats.likes, color: 'text-rose-400', bg: 'bg-rose-400/10' },
               { icon: <Bookmark size={20}/>, label: 'Saved Items', val: dynamicStats.saved, color: 'text-amber-400', bg: 'bg-amber-400/10' }
             ].map((item, i) => (
               <React.Fragment key={i}>
                 <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} shadow-inner`}>
                       {item.icon}
                    </div>
                    <div>
                       <p className="text-white text-[20px] font-black leading-none">{item.val}</p>
                       <p className="text-slate-500 font-bold text-[9px] uppercase mt-2 tracking-widest">{item.label}</p>
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