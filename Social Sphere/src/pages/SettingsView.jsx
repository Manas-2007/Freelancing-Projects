import React from 'react';
import SettingsCard from '../components/Dashboard/SettingCard';
import { ShieldCheck, Palette, LifeBuoy, ChevronDown, LogOut, ChevronRight, BellRing } from 'lucide-react';

const SettingsView = () => {
  // Optimized Row Hover: Reduced padding for desktop
  const rowHover = "flex items-center justify-between p-4 rounded-[18px] transition-all duration-300 hover:bg-blue-600/5 cursor-pointer group border border-transparent hover:border-blue-100";

  return (
    /* Reduced gap-8 to gap-6 and mt-[-30px] to mt-[-20px] for better spacing */
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[-20px] p-6 bg-slate-50/50 rounded-[35px] font-sans">
      
      {/* 1. APP THEME SECTION */}
      <SettingsCard title="App Appearance">
        <div className="space-y-5">
          {/* Theme Toggle: Scaled down padding and font */}
          <div className="flex items-center justify-between p-4 bg-slate-100 text-slate-900 rounded-[22px] border-2 border-blue-100 shadow-sm hover:bg-white transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-5 bg-slate-200 rounded-full relative flex items-center px-1 shadow-inner group-hover:bg-slate-300 transition-colors">
                <div className="absolute left-1 w-3 h-3 bg-white rounded-full shadow-md"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[15px] tracking-tight">Dark Mode</span>
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Disabled</span>
              </div>
            </div>
            <span className="text-black font-black text-[9px] uppercase tracking-[1.5px] bg-slate-200/50 px-3 py-1 rounded-lg border border-black/20">
              Inactive
            </span>
          </div>

          {/* DROPDOWN GRID: Compact scale */}
          <div className="flex flex-row justify-between items-center gap-4 w-full">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-[11px] font-bold text-slate-900 uppercase tracking-[1.5px] ml-1">Font Size</label>
              <div className="relative group/select">
                <select className="w-full p-3 bg-white border-2 border-slate-100 rounded-[18px] font-bold text-slate-700 text-[13px] outline-none shadow-sm hover:border-blue-400 transition-all cursor-pointer appearance-none pr-10">
                  <option>Medium (Default)</option>
                  <option>Large</option>
                  <option>Extra Large</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover/select:text-blue-500">
                  <ChevronDown size={16} strokeWidth={3} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="text-[11px] font-bold text-slate-900 uppercase tracking-[1.5px] ml-1">Interface</label>
              <div className="relative group/select">
                <select className="w-full p-3 bg-white border-2 border-slate-100 rounded-[18px] font-bold text-slate-700 text-[13px] outline-none shadow-sm hover:border-blue-400 transition-all cursor-pointer appearance-none pr-10">
                  <option>Spacious</option>
                  <option>Compact</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover/select:text-blue-500">
                  <ChevronDown size={16} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SettingsCard>

      {/* 2. SECURITY SECTION */}
      <SettingsCard title="Security & Privacy">
        <div className="space-y-1">
          <div className={rowHover}>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Change Password</span>
              <span className="text-[12px] text-slate-400">Updated 3 months ago</span>
            </div>
            <button className="px-4 py-1.5 bg-slate-100 rounded-lg text-[11px] font-black text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">MANAGE</button>
          </div>
          <div className={rowHover}>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Two-Factor Auth</span>
              <span className="text-[12px] text-emerald-500 font-bold tracking-tight">Active</span>
            </div>
            <div className="w-9 h-5 bg-emerald-500 rounded-full relative shadow-md border-2 border-emerald-400">
              <div className="absolute right-1 top-0.5 w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </SettingsCard>

      {/* 3. SUPPORT SECTION */}
      <SettingsCard title="Social Sphere Support">
        <div className="flex flex-col gap-3">
          <input 
            type="text" 
            placeholder="How can we help?" 
            className="w-full p-4 bg-slate-200/60 rounded-[18px] font-semibold text-[14px] outline-none border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400" 
          />
          <button className="group w-full bg-blue-600 text-white py-4 rounded-[20px] font-bold text-[15px] shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
            Submit Ticket <LifeBuoy size={18} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </SettingsCard>

      {/* 4. NOTIFICATION SETTINGS */}
      <SettingsCard title="Alerts & Notifications">
        <div className="space-y-3">
           <div className="flex items-center justify-between p-3.5 bg-blue-50/50 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm"><BellRing size={18}/></div>
                <span className="font-bold text-slate-700 text-[14px]">Push Notifications</span>
              </div>
              <div className="w-9 h-5 bg-slate-200 rounded-full relative px-1 flex items-center">
                <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
           </div>
           <p className="text-[12px] text-slate-400 font-medium px-2 leading-relaxed text-center italic">
              "We only send essential updates."
           </p>
        </div>
      </SettingsCard>

      {/* AGGRESSIVE LOGOUT BUTTON: Reduced padding for desktop */}
      <div className="flex justify-center lg:col-span-2 pt-4">
        <button className="group relative flex items-center gap-4 bg-[#0f172a] px-12 py-4 rounded-[25px] shadow-xl border border-white/5 hover:bg-red-600 transition-all duration-500 active:scale-95">
          <LogOut className="text-red-500 group-hover:text-white transition-all" size={18} />
          <span className="text-white font-bold text-[14px] uppercase tracking-[3px] transition-colors">
              Secure Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default SettingsView;