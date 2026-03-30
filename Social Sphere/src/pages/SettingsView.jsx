import React from 'react';
import SettingsCard from '../components/Dashboard/SettingCard';

const SettingsView = () => {
  const rowHover = "flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 hover:bg-blue-50/80 cursor-pointer group";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
      <SettingsCard title="App Theme">
        <div className="flex items-center justify-between p-5 bg-[#0f172a] text-white rounded-2xl shadow-lg hover:bg-slate-800 transition-all cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-5.5 bg-blue-600 rounded-full relative flex items-center px-1">
              <div className="absolute right-1 w-3.5 h-3.5 bg-white rounded-full"></div>
            </div>
            <span className="font-[700] text-[15px]">Dark Mode</span>
          </div>
          <span className="text-blue-400 font-black text-[9px] uppercase tracking-widest bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">Active</span>
        </div>
      </SettingsCard>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-[800] text-slate-400 uppercase tracking-widest">Font Size</label>
          <select className="p-3.5 bg-white border border-slate-100 rounded-2xl font-[700] text-slate-700 text-[14px] outline-none shadow-sm hover:border-blue-200 transition-all cursor-pointer">
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-[800] text-slate-400 uppercase tracking-widest">Density</label>
          <select className="p-3.5 bg-white border border-slate-100 rounded-2xl font-[700] text-slate-700 text-[14px] outline-none shadow-sm hover:border-blue-200 transition-all cursor-pointer">
            <option>Spacious</option>
            <option>Compact</option>
          </select>
        </div>
      </div>

      <SettingsCard title="Account Security">
        <div className="space-y-1">
          <div className={rowHover}>
            <span className="text-[15px] font-[700] text-slate-700 group-hover:text-blue-600">Change Password</span>
            <button className="px-4 py-1.5 bg-slate-100 rounded-lg text-[11px] font-black text-slate-500 hover:bg-blue-600 hover:text-white transition-all">EDIT</button>
          </div>
          <div className={rowHover}>
            <span className="text-[15px] font-[700] text-slate-700 group-hover:text-blue-600">Two-Factor Auth</span>
            <div className="w-9 h-5 bg-emerald-500 rounded-full relative shadow-inner"><div className="absolute right-1 top-0.5 w-4 h-4 bg-white rounded-full"></div></div>
          </div>
        </div>
      </SettingsCard>

      <SettingsCard title="Contact Support">
        <div className="flex flex-col gap-3">
          <input type="text" placeholder="Subject" className="p-3.5 bg-slate-50 rounded-xl font-[600] text-[14px] outline-none hover:bg-blue-50/50 transition-all border border-transparent hover:border-blue-100" />
          <button className="w-full bg-blue-600 text-white py-3.5 rounded-2xl font-[800] text-[15px] shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Submit Ticket
          </button>
        </div>
      </SettingsCard>

      <div className="flex justify-center lg:col-span-2 mt-12 pb-10">
        <button className="group flex items-center gap-3 bg-white px-12 py-4 rounded-full shadow-[0_10px_30px_rgba(239,68,68,0.1)] border border-red-50 hover:bg-red-500 transition-all duration-500">
          <span className="text-red-500 font-[800] text-[15px] uppercase tracking-widest group-hover:text-white transition-colors">➔ Secure Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SettingsView;