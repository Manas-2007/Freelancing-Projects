import React from 'react';
import { 
  TrendingUp, Users, Clock, Layers, Sparkles, Image as ImageIcon, 
  Camera, MoreHorizontal, Heart, MessageSquare, Share2, 
  BarChart3, Zap, ArrowUpRight, ArrowRight 
} from 'lucide-react';

const HomeView = () => {
  const stats = [
    { label: 'Total Friends', value: '122', theme: 'from-blue-600 to-cyan-400', shadow: 'group-hover:shadow-blue-500/30', icon: <Users size={18} /> },
    { label: 'Activity Score', value: '4.0', theme: 'from-indigo-600 to-pink-500', shadow: 'group-hover:shadow-purple-500/30', icon: <TrendingUp size={18} /> },
    { label: 'Engagement', value: '12%', theme: 'from-emerald-600 to-cyan-500', shadow: 'group-hover:shadow-emerald-500/30', icon: <Layers size={18} /> },
    { label: 'Active Goals', value: '5', theme: 'from-orange-500 to-yellow-400', shadow: 'group-hover:shadow-amber-500/30', icon: <Zap size={18} /> },
  ];

  return (
    <div className="flex-1 w-full flex flex-col gap-8 animate-in fade-in duration-1000 font-sans pb-10 overflow-y-auto no-scrollbar select-none mt-[-25px]">
      
      {/* 1. COMPACT STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <div key={i} className={`group relative h-32 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-1 ${stat.shadow} cursor-pointer border border-white/20 shadow-sm`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.theme} opacity-100 group-hover:scale-110 transition-transform duration-700`}></div>
            <div className="relative h-full p-5 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-xl bg-white/20 backdrop-blur-lg text-white border border-white/20">
                  {stat.icon}
                </div>
                <div className="text-[9px] font-bold text-white/90 border border-white/20 px-2 py-0.5 rounded-md uppercase tracking-wider bg-white/10">Live</div>
              </div>
              <div>
                <p className="text-white/70 font-bold text-[10px] uppercase tracking-[2px]">{stat.label}</p>
                <h3 className="text-[26px] font-bold text-white tracking-tight leading-none">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. CREATE FEED (TECH STEALTH UI) */}
      <div className="bg-[#0f172a] rounded-[40px] p-6 border border-white/5 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full group-hover:opacity-100 opacity-50 transition-opacity"></div>
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex gap-5 items-center">
            <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20">
              <img src="https://i.pravatar.cc/150?u=manas" className="w-12 h-12 rounded-[14px] border-2 border-[#0f172a]" alt="Me" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0f172a] rounded-full"></div>
            </div>
            <input 
              type="text" 
              placeholder="What's on your mind, Manas?" 
              className="flex-1 bg-white/5 border border-white/10 rounded-[20px] px-6 py-4 text-[14px] font-medium text-blue-50 outline-none focus:bg-white/10 focus:border-blue-500/40 transition-all placeholder:text-slate-500"
            />
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex gap-5">
              <button className="flex items-center gap-2 text-slate-400 hover:text-blue-400 font-bold text-[12px] transition-all">
                <ImageIcon size={18} className="opacity-70" /> Gallery
              </button>
              <button className="flex items-center gap-2 text-slate-400 hover:text-rose-400 font-bold text-[12px] transition-all">
                <Camera size={18} className="opacity-70" /> Lens
              </button>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-[18px] font-bold uppercase tracking-[2px] text-[11px] transition-all hover:-translate-y-0.5 active:scale-95 flex items-center gap-2">
              Broadcast <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* 3. POST FEED (MAGAZINE STYLE) */}
      <div className="bg-white border border-slate-100 rounded-[40px] p-2 shadow-sm">
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-[2px] rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500">
              <img src="https://i.pravatar.cc/150?u=sarah" className="w-10 h-10 rounded-[10px] border-2 border-white" alt="Sarah" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-[16px] tracking-tight">Sarah Williams</h4>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[1.5px] mt-1 flex items-center gap-1.5">
                <Clock size={11} className="text-blue-500" /> 3 mins ago • Travel
              </p>
            </div>
          </div>
          <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-300 hover:text-slate-900 transition-all flex items-center justify-center">
            <MoreHorizontal size={18} />
          </button>
        </div>
        <div className="px-8 pb-6">
          <p className="text-slate-600 font-medium text-[15px] leading-relaxed">
            Finally made it to the <span className="text-slate-900 font-bold">Gwalior Fort</span>. The sheer scale is mind-blowing! Captured during golden hour. 🏰✨
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4">
          <div className="aspect-[16/10] rounded-[28px] overflow-hidden border-2 border-white shadow-md">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="aspect-[16/10] rounded-[28px] overflow-hidden border-2 border-white shadow-md">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
        <div className="p-6 flex items-center justify-between border-t border-slate-50 mt-4">
          <div className="flex gap-6">
            <button className="flex items-center gap-2 text-slate-800 font-bold text-[14px] hover:text-rose-500 transition-colors">
              <Heart size={18} className="fill-rose-50" /> 1.2k
            </button>
            <button className="flex items-center gap-2 text-slate-800 font-bold text-[14px] hover:text-blue-600 transition-colors">
              <MessageSquare size={18} /> 342
            </button>
          </div>
          <button className="w-11 h-11 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* 4. SYSTEM STATUS (COMPACT ANALYTICS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px]">
        {/* Research Logs */}
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col overflow-hidden group">
          <h3 className="text-[20px] font-bold text-slate-900 tracking-tight flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-600 rounded-xl text-white shadow-md"><BarChart3 size={20} /></div> Logs
          </h3>
          <div className="space-y-4 overflow-y-auto no-scrollbar">
            {[{ title: 'AI Updated', desc: 'Core voting logic refined.', time: '2m ago' }, { title: 'Node Active', desc: 'Sensor array connected.', time: '1h ago' }].map((log, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 transition-all">
                <div className="p-2 bg-white rounded-lg shadow-sm text-slate-400 group-hover:text-blue-600"><Clock size={18} /></div>
                <div>
                  <h5 className="text-slate-900 font-bold text-[14px]">{log.title}</h5>
                  <p className="text-slate-500 text-[12px] font-medium mt-0.5 line-clamp-1">{log.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Goals: Compact Progress */}
        <div className="bg-[#0f172a] p-8 rounded-[40px] border border-white/5 shadow-2xl flex flex-col overflow-hidden">
          <h3 className="text-[20px] font-bold text-white tracking-tight flex items-center gap-3 mb-8">
            <Zap className="text-amber-400" size={22} /> Goals
          </h3>
          <div className="space-y-6">
            {[{ label: 'Authority', val: '90%', color: 'from-blue-600 to-indigo-600' }, { label: 'Visibility', val: '65%', color: 'from-purple-600 to-pink-500' }].map((goal, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-white/60 font-bold text-[11px] uppercase tracking-[2px]">{goal.label}</span>
                  <span className="text-white font-bold text-[16px]">{goal.val}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full p-[1px]"><div className={`h-full bg-gradient-to-r ${goal.color} rounded-full`} style={{ width: goal.val }}></div></div>
              </div>
            ))}
            <div className="mt-6 p-4 bg-white/5 rounded-2xl flex items-center justify-between border border-white/5 hover:bg-white/10 cursor-pointer transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/20 text-amber-500 rounded-xl"><Zap size={18} /></div>
                <div><h6 className="text-white font-bold text-[13px]">12 Day Streak</h6><p className="text-slate-500 text-[11px] font-medium">Top 5% performer</p></div>
              </div>
              <ArrowRight size={16} className="text-slate-600" />
            </div>
          </div>
        </div>
      </div>

      {/* 5. PREMIUM DASHBOARD FOOTER */}
      <footer className="group relative rounded-[40px] bg-white/40 backdrop-blur-xl border border-white/40 p-10 mt-4 overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center text-white"><Sparkles size={16} /></div>
              <h2 className="text-[20px] font-bold text-slate-900 tracking-tight italic">SocialSphere</h2>
            </div>
            <p className="text-slate-500 font-medium text-[13px] max-w-xs">AI-driven insights by <span className="text-blue-600 font-bold">Manas</span>.</p>
          </div>
          <div className="flex gap-12 text-[12px] font-bold text-slate-700">
            <ul className="space-y-2"><li className="hover:text-blue-600 cursor-pointer">Platform</li><li className="hover:text-blue-600 cursor-pointer">Support</li></ul>
            <ul className="space-y-2"><li className="hover:text-blue-600 cursor-pointer">Documentation</li><li className="hover:text-blue-600 cursor-pointer">Privacy</li></ul>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex gap-3">
              {[1, 2, 3].map(i => <div key={i} className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all"><ArrowUpRight size={14}/></div>)}
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© 2026 V2.4 • SYSTEMS OK</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeView;