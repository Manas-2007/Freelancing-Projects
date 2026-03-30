import React from 'react';
import SettingsCard from '../components/Dashboard/SettingCard';
import { ShieldCheck, Palette, LifeBuoy,ChevronDown, LogOut, ChevronRight, BellRing } from 'lucide-react';

const SettingsView = () => {
  // Enhanced Row Hover with better contrast
  const rowHover = "flex items-center justify-between p-5 rounded-[22px] transition-all duration-300 hover:bg-blue-600/5 cursor-pointer group border border-transparent hover:border-blue-100";

  return (
    /* Main Background: Light Greyish (Slate-50) for depth */
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[-30px] p-6 bg-slate-50/50 rounded-[40px] font-sans">
      
     {/* 1. APP THEME SECTION */}
<SettingsCard title="App Appearance">
  <div className="space-y-6 font-sans">
    
    {/* Theme Toggle: Updated for Light Mode Visuals */}
    <div className="flex items-center justify-between p-6  bg-slate-100 text-slate-900 rounded-[26px] border-2 border-blue-100 shadow-sm hover:bg-white transition-all cursor-pointer group">
      <div className="flex items-center gap-4">
        {/* The Switch - Adjusted for 'Off/Light' position */}
        <div className="w-12 h-6 bg-slate-200 rounded-full relative flex items-center px-1 shadow-inner group-hover:bg-slate-300 transition-colors">
          <div className="absolute left-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
        </div>
        <div className="flex flex-col">
          <span className="font-[600] text-[18px] tracking-tight">Dark Mode</span>
          <span className="text-[12px] text-slate-400 font-bold uppercase tracking-wider">Currently Disabled</span>
        </div>
      </div>
      
      {/* Badge updated to show 'Inactive' or 'Light' */}
      <span className="text-black font-black text-[10px] uppercase tracking-[2px] bg-slate-100 px-4 py-1.5 rounded-xl border border-black">
        Inactive
      </span>
    </div>

    {/* DROPDOWN GRID: Properly Balanced */}
    <div className="flex flex-row justify-between items-center gap-6 w-full">
      
      {/* Font Size Dropdown */}
      <div className="flex flex-col gap-2.5 flex-1">
        <label className="text-[13px] font-[1000] text-slate-900 uppercase tracking-[2px] ml-1">
          Font Size
        </label>
        <div className="relative group/select">
          <select className="w-full p-4 bg-white border-2 border-slate-100 rounded-[22px] font-[800] text-slate-700 text-[15px] outline-none shadow-sm hover:border-blue-400 hover:ring-4 hover:ring-blue-50 transition-all cursor-pointer appearance-none pr-12">
            <option>Medium (Default)</option>
            <option>Large (Reading)</option>
            <option>Extra Large</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover/select:text-blue-500 transition-colors">
            <ChevronDown size={18} strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* Interface Dropdown */}
      <div className="flex flex-col gap-2.5 flex-1">
        <label className="text-[13px] font-[1000] text-slate-900 uppercase tracking-[2px] ml-1">
          Interface
        </label>
        <div className="relative group/select">
          <select className="w-full p-4 bg-white border-2 border-slate-100 rounded-[22px] font-[800] text-slate-700 text-[15px] outline-none shadow-sm hover:border-blue-400 hover:ring-4 hover:ring-blue-50 transition-all cursor-pointer appearance-none pr-12">
            <option>Spacious</option>
            <option>Compact</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover/select:text-blue-500 transition-colors">
            <ChevronDown size={18} strokeWidth={3} />
          </div>
        </div>
      </div>

    </div>
  </div>
</SettingsCard>


      {/* 2. SECURITY SECTION */}
      <SettingsCard title="Security & Privacy">
        <div className="space-y-2">
          <div className={rowHover}>
            <div className="flex flex-col">
              <span className="text-[17px] font-[600] text-slate-800 group-hover:text-blue-600 transition-colors">Change Password</span>
              <span className="text-[13px] text-slate-400">Last changed 3 months ago</span>
            </div>
            <button className="px-6 py-2 bg-slate-100 rounded-xl text-[12px] font-black text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">MANAGE</button>
          </div>
          <div className={rowHover}>
            <div className="flex flex-col">
              <span className="text-[17px] font-[600] text-slate-800 group-hover:text-blue-600 transition-colors">Two-Factor Authentication</span>
              <span className="text-[13px] text-emerald-500 font-bold tracking-tight">Highly Secured</span>
            </div>
            <div className="w-10 h-6 bg-emerald-500 rounded-full relative shadow-lg border-2 border-emerald-400">
              <div className="absolute right-1 top-0.5 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </SettingsCard>



      {/* 3. SUPPORT SECTION */}
      <SettingsCard title="Social Sphere Support">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="How can we help?" 
              className="w-full p-5 bg-slate-200 rounded-[22px] font-[600] text-[18px] outline-none border-2 border-transparent focus:border-[blue] focus:bg-white transition-all placeholder:text-slate-400" 
            />
          </div>
          <button className="group w-full bg-blue-600 text-white py-5 rounded-[24px] font-[600] text-[19px] shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 tracking-tight">
            Open Support Ticket <LifeBuoy size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </SettingsCard>



      {/* 4. NOTIFICATION SETTINGS */}
      <SettingsCard title="Alerts & Notifications">
        <div className="space-y-4">
           <div className="flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm"><BellRing size={20}/></div>
                <span className="font-[600] text-slate-700 text-[16px]">Push Notifications</span>
              </div>
              <div className="w-10 h-6 bg-slate-200 rounded-full relative px-1 flex items-center">
                <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
              </div>
           </div>
           <p className="text-[13px] text-slate-400 font-bold px-2 leading-relaxed text-center italic">
              "Your privacy is our priority. We only send essential updates."
           </p>
        </div>
      </SettingsCard>


      {/* AGGRESSIVE LOGOUT BUTTON */}
      <div className="flex justify-center lg:col-span-2">
        <button className="group relative flex items-center gap-6 bg-[#0f172a] px-19 py-6 rounded-[30px] shadow-2xl shadow-red-900/20 border border-white/5 hover:bg-red-600 transition-all duration-500 overflow-hidden active:scale-95">
          {/* Inner Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
          
          <LogOut className="text-red-500 group-hover:text-white group-hover:-translate-x-2 transition-all" size={22} />
          <span className="text-white font-[700] text-[18px] uppercase tracking-[4px] transition-colors">
             Secure System Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default SettingsView;