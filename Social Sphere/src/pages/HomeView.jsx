import React from 'react';
import { 
  TrendingUp, Users, Clock, Layers, Sparkles, Image as ImageIcon, 
  Camera, MapPin, MoreHorizontal, Heart, MessageSquare, Share2, 
  BarChart3, Zap, ArrowUpRight, ArrowRight 
} from 'lucide-react';

const HomeView = () => {
  const stats = [
    { 
      label: 'Total Friends', value: '122', 
      theme: 'from-blue-600 via-blue-500 to-cyan-400',
      shadow: 'group-hover:shadow-blue-500/40',
      icon: <Users size={20} />
    },
    { 
      label: 'Activity Score', value: '4.0', 
      theme: 'from-indigo-600 via-purple-600 to-pink-500',
      shadow: 'group-hover:shadow-purple-500/40',
      icon: <TrendingUp size={20} />
    },
    { 
      label: 'Engagement', value: '12%', 
      theme: 'from-emerald-600 via-teal-500 to-cyan-500',
      shadow: 'group-hover:shadow-emerald-500/40',
      icon: <Layers size={20} />
    },
    { 
      label: 'Active Goals', value: '5', 
      theme: 'from-orange-500 via-amber-500 to-yellow-400',
      shadow: 'group-hover:shadow-amber-500/40',
      icon: <Zap size={20} />
    },
  ];

  return (
    <div className="flex-1 w-full flex flex-col gap-10 animate-in fade-in duration-1000 font-['Plus_Jakarta_Sans'] pb-20 overflow-y-auto no-scrollbar">
      
      {/* 1. LIQUID GRADIENT STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-[15px] shadow-xl">
        {stats.map((stat, i) => (
            <div 
            key={i} 
            className={`group relative h-44 rounded-[40px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] ${stat.shadow} cursor-pointer border border-white/20`}
            >
            {/* GRADIENT IS NOW ALWAYS VISIBLE */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.theme} opacity-100 transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-90`}></div>
            
            {/* INTERNAL GLOW MESH (ALWAYS ON) */}
            <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/30 blur-3xl rounded-full opacity-100"></div>

            {/* CONTENT LAYER */}
            <div className="relative h-full p-7 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                <div className={`p-3 rounded-2xl bg-white/20 backdrop-blur-xl text-white border border-white/30 shadow-lg transition-all duration-500 group-hover:bg-white group-hover:text-slate-900 group-hover:rotate-6`}>
                    {stat.icon}
                </div>
                <div className="text-[10px] font-[1000] text-white/90 border border-white/30 px-2 py-1 rounded-lg uppercase tracking-widest bg-white/10 backdrop-blur-md">
                    Live
                </div>
                </div>

                <div>
                <p className="text-white/80 font-[800] text-[12px] uppercase tracking-[3px] group-hover:text-white transition-colors duration-500">
                    {stat.label}
                </p>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-[34px] font-[1000] text-white tracking-tighter leading-none drop-shadow-md">
                    {stat.value}
                    </h3>
                    <ArrowUpRight size={18} className="text-white opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>

     {/* 2. CREATE FEED (DARK STEALTH TECH UI) */}
<div className="relative group bg-[#0f172a] rounded-[45px] p-8 shadow-xl border border-[black]/5 overflow-hidden transition-all duration-500 hover:border-blue-600">
  
  {/* Subtle Background Glow */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-xl"></div>

  <div className="relative z-10">
    <div className="flex gap-6 items-center">
      {/* Profile Avatar with Neon Ring */}
      <div className="relative p-1 rounded-[22px] bg-gradient-to-tr from-blue-600 to-purple-600 group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-blue-500/20">
        <img 
          src="https://i.pravatar.cc/150?u=manas" 
          className="w-14 h-14 object-cover rounded-[18px] border-2 border-[#0f172a]" 
          alt="Me" 
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#0f172a] rounded-full animate-pulse"></div>
      </div>

      {/* Futuristic Input Field */}
      <div className="flex-1 relative group/input">
        <input 
          type="text" 
          placeholder="Initiating new thought..." 
          className="w-full bg-white/5 border border-white/10 rounded-[24px] px-8 py-5 text-[16px] font-[600] text-blue-100 outline-none transition-all placeholder:text-slate-500 focus:bg-white/10 focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/5 shadow-inner"
        />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-focus-within/input:opacity-100 transition-opacity">
          <Sparkles size={18} className="text-blue-400 animate-pulse" />
        </div>
      </div>
    </div>

    {/* Footer Controls */}
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
      <div className="flex gap-6">
        {/* Premium Gallery Button */}
        <button className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-all font-[800] text-[13px] group/btn">
          <div className="p-3 bg-white/5 rounded-2xl group-hover/btn:bg-blue-600/20 group-hover/btn:scale-110 group-hover/btn:text-blue-400 border border-white/5 transition-all shadow-xl">
            <ImageIcon size={20} />
          </div> 
          Gallery
        </button>

        {/* Premium Camera Button */}
        <button className="flex items-center gap-3 text-slate-400 hover:text-rose-400 transition-all font-[800] text-[13px] group/btn">
          <div className="p-3 bg-white/5 rounded-2xl group-hover/btn:bg-rose-600/20 group-hover/btn:scale-110 group-hover/btn:text-rose-400 border border-white/5 transition-all shadow-xl">
            <Camera size={20} />
          </div> 
          Lens
        </button>
      </div>

      {/* The Power Post Button */}
      <button className="group relative bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-[22px] font-[1000] uppercase tracking-[3px] text-[12px] shadow-2xl shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3 overflow-hidden">
        <span className="relative z-10">Broadcast Post</span>
        <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
        {/* Inner Button Shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
      </button>
    </div>
  </div>
</div>

    {/* 3. POST FEED (PREMIUM MAGAZINE STYLE) */}
<div className="bg-white border border-slate-100 rounded-[50px] p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.05)] group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700">
  
  {/* Header: User Info */}
  <div className="p-8 flex justify-between items-center">
    <div className="flex items-center gap-4">
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg shadow-blue-100">
         <img src="https://i.pravatar.cc/150?u=sarah" className="w-12 h-12 rounded-[14px] border-2 border-white" alt="Sarah" />
      </div>
      <div>
        <h4 className="text-slate-900 font-[1000] text-[18px] tracking-tight leading-none">Sarah Williams</h4>
        <p className="text-slate-400 font-[800] text-[11px] uppercase tracking-[2px] mt-1.5 flex items-center gap-2">
           <Clock size={12} className="text-blue-500" /> 3 mins ago • Travel
        </p>
      </div>
    </div>
    <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 hover:text-slate-900 hover:bg-slate-100 transition-all">
       <MoreHorizontal size={20} />
    </button>
  </div>

  {/* Description Area: Large & Clean */}
  <div className="px-10 pb-8">
     <p className="text-slate-600 font-[600] text-[17px] leading-[1.6] tracking-tight">
        Finally made it to the <span className="text-slate-900 font-[800]">Gwalior Fort</span>. The sheer scale of this architecture is mind-blowing. Captured these frames right during the golden hour. Truly a masterpiece of history! 🏰✨
     </p>
  </div>

  {/* Compact Media Grid (Photos made smaller) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
     <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border-4 border-white shadow-xl group/img">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end p-6">
           <span className="text-white font-[900] text-[12px] uppercase tracking-widest bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">View High-Res</span>
        </div>
     </div>
     <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border-4 border-white shadow-xl group/img">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end p-6">
           <span className="text-white font-[900] text-[12px] uppercase tracking-widest bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">Food Scene</span>
        </div>
     </div>
  </div>

  {/* Interaction Analytics Bar (Premium Style) */}
  <div className="p-8 mt-4 mx-4 flex items-center justify-between border-t border-slate-50">
    <div className="flex gap-8">
      {/* Likes */}
      <button className="flex flex-col items-center gap-1 group/stat">
        <div className="p-3 bg-rose-50 rounded-2xl text-rose-500 group-hover/stat:bg-rose-500 group-hover/stat:text-white transition-all shadow-sm">
           <Heart size={20} fill="currentColor" />
        </div>
        <span className="text-[black] font-[1000] text-[16px]">1.2k</span>
      </button>

      {/* Comments */}
      <button className="flex flex-col items-center gap-1 group/stat">
        <div className="p-3 bg-blue-50 rounded-2xl text-blue-500 group-hover/stat:bg-blue-500 group-hover/stat:text-white transition-all shadow-sm">
           <MessageSquare size={20} />
        </div>
        <span className="text-[black] font-[1000] text-[16px]">342</span>
      </button>

      {/* Impressions / Reach */}
      <button className="flex flex-col items-center gap-1 group/stat">
        <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-500 group-hover/stat:bg-emerald-500 group-hover/stat:text-white transition-all shadow-sm">
           <Zap size={20} />
        </div>
        <span className="text-[black] font-[1000] text-[16px]">8.4k Reach</span>
      </button>
    </div>

    {/* Share Button */}
    <button className="w-14 h-14 bg-slate-900 text-white rounded-[22px] flex items-center justify-center hover:bg-blue-600 hover:-rotate-12 transition-all shadow-xl shadow-slate-250">
       <Share2 size={22} />
    </button>
  </div>
</div>


    {/* 4. SYSTEM STATUS (ULTRA-PREMIUM ANALYTICS) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
  
  {/* LEFT: Research Logs (Glass-Fade Light Mode) */}
  <div className="group relative bg-white p-12 rounded-[55px] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15)]">
    {/* Liquid Background Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/30 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-[28px] font-[1000] text-slate-900 tracking-tighter flex items-center gap-4">
          <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
            <BarChart3 size={24} />
          </div> 
          Research Logs
        </h3>
        <div className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-[1000] uppercase tracking-[2px] border border-emerald-100">
           Live Sync
        </div>
      </div>

      <div className="space-y-8">
        {[
          { title: 'AI Protocol Updated', desc: 'Core e-voting logic refined with biometric auth.', time: '2m ago' },
          { title: 'New Node Active', desc: 'Robotics sensor array connected to Gwalior-DC.', time: '1h ago' }
        ].map((log, i) => (
          <div key={i} className="flex items-start gap-6 p-6 rounded-[32px] bg-slate-50/50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-500 group/item">
            <div className="p-4 bg-white rounded-2xl shadow-sm text-slate-400 group-hover/item:text-blue-600 group-hover/item:scale-110 transition-all">
               <Clock size={24} />
            </div>
            <div>
              <h5 className="text-slate-900 font-[1000] text-[18px] tracking-tight">{log.title}</h5>
              <p className="text-slate-500 text-[14px] font-[600] mt-1.5 opacity-80 leading-relaxed">{log.desc}</p>
              <span className="inline-block mt-3 text-[10px] font-[1000] text-blue-500 uppercase tracking-widest">{log.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* RIGHT: System Goals (Neon Stealth Mode) */}
  <div className="group relative bg-[#0f172a] p-12 rounded-[55px] shadow-2xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(30,58,138,0.5)] border border-white/5">
    {/* Deep Space Glow */}
    <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full group-hover:bg-blue-600/30 transition-all duration-1000"></div>
    <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"></div>

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-[28px] font-[1000] text-white tracking-tighter flex items-center gap-4">
           <Zap className="text-amber-400 animate-pulse" size={28} />
           System Goals
        </h3>
        <Sparkles className="text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="space-y-10">
        {[
          { label: 'Profile Authority', progress: '90%', color: 'from-blue-600 to-indigo-600', glow: 'shadow-blue-500/40' },
          { label: 'Research Visibility', progress: '65%', color: 'from-purple-600 to-pink-500', glow: 'shadow-purple-500/40' }
        ].map((goal, i) => (
          <div key={i} className="space-y-5 group/goal">
            <div className="flex justify-between items-end">
              <span className="text-white/60 font-[900] text-[13px] uppercase tracking-[3px] group-hover/goal:text-white transition-colors">
                {goal.label}
              </span>
              <span className="text-white font-[1000] text-[20px] tracking-tighter">
                {goal.progress}
              </span>
            </div>
            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5">
              <div 
                className={`h-full bg-gradient-to-r ${goal.color} rounded-full transition-all duration-1000 ease-out shadow-[0_0_20px] ${goal.glow}`} 
                style={{ width: goal.progress }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Achievement Card */}
      <div className="mt-12 p-6 bg-white/5 rounded-[30px] border border-white/10 flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer group/achieve">
         <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-amber-500/20 text-amber-500 rounded-2xl flex items-center justify-center group-hover/achieve:scale-110 group-hover/achieve:rotate-12 transition-all">
               <Zap size={28} />
            </div>
            <div>
               <h6 className="text-white font-[1000] text-[16px]">Daily Streak: 12 Days</h6>
               <p className="text-slate-500 font-[700] text-[12px]">You're in the top 5% today!</p>
            </div>
         </div>
         <ArrowRight className="text-slate-600 group-hover/achieve:text-white group-hover/achieve:translate-x-2 transition-all" />
      </div>
    </div>
  </div>
</div>

{/* 5. PREMIUM DASHBOARD FOOTER */}
<footer className="mt-10 mb-6 group relative overflow-hidden rounded-[50px] bg-white/40 backdrop-blur-xl border border-white/40 p-12 transition-all duration-700 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.05)]">
  
  {/* Decorative Ambient Glow */}
  <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/5 blur-[100px] rounded-full group-hover:bg-blue-400/10 transition-colors"></div>
  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-400/5 blur-[100px] rounded-full group-hover:bg-purple-400/10 transition-colors"></div>

  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
    
    {/* Left: Branding & Tagline */}
    <div className="md:col-span-5 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#0f172a] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-200 group-hover:rotate-[360deg] transition-transform duration-1000">
          <Sparkles size={20} />
        </div>
        <h2 className="text-[24px] font-[1000] text-slate-900 tracking-tighter italic">SocialSphere</h2>
      </div>
      <p className="text-slate-500 font-[600] text-[15px] leading-relaxed max-w-sm">
        Empowering creators through AI-driven insights and robotics innovation. Designed & Engineered by <span className="text-blue-600 font-[800]">Manas</span>.
      </p>
    </div>

    {/* Center: Quick Stats / Links */}
    <div className="md:col-span-4 flex gap-12">
      <div className="space-y-3">
        <h4 className="text-[11px] font-[1000] text-slate-400 uppercase tracking-[3px]">Platform</h4>
        <ul className="space-y-2 text-[14px] font-[800] text-slate-700">
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Release Notes</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Documentation</li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="text-[11px] font-[1000] text-slate-400 uppercase tracking-[3px]">Support</h4>
        <ul className="space-y-2 text-[14px] font-[800] text-slate-700">
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Help Center</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</li>
        </ul>
      </div>
    </div>

    {/* Right: Copyright & Status */}
    <div className="md:col-span-3 flex flex-col items-end gap-6 text-right">
      <div className="flex gap-4">
        {['Twitter', 'Github', 'LinkedIn'].map((social) => (
          <button key={social} className="w-11 h-11 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-[#0f172a] hover:text-white hover:-translate-y-2 transition-all shadow-sm">
            <ArrowUpRight size={18} />
          </button>
        ))}
      </div>
      <div>
        <p className="text-[12px] font-[1000] text-slate-400 uppercase tracking-widest">© 2026 SOCIALSPHERE V2.4</p>
        <div className="mt-2 flex items-center justify-end gap-2 text-emerald-500 font-[900] text-[11px]">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
          ALL SYSTEMS OPERATIONAL
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default HomeView;