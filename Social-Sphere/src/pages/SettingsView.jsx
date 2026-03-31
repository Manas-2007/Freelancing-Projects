import React, { useState } from 'react';
import SettingsCard from '../components/Dashboard/SettingCard';
import { ShieldCheck, Palette, LifeBuoy, ChevronDown, LogOut, ChevronRight, BellRing, Check } from 'lucide-react';
import { useSocial } from '../context/SocialContext';
import { useNavigate } from 'react-router-dom';

const SettingsView = () => {
  // Global state context se nikaali
  const { logout, darkMode, setDarkMode } = useSocial();
  const navigate = useNavigate();

  // Baki local states ko touch nahi kiya
  const [twoFactor, setTwoFactor] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleLogout = () => {
    if(window.confirm("Are you sure you want to terminate the session?")) {
      logout();
      navigate('/');
    }
  };

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const rowHover = "flex items-center justify-between p-4 rounded-[18px] transition-all duration-300 hover:bg-blue-600/5 cursor-pointer group border border-transparent hover:border-blue-100";

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-[-15px] sm:mt-[-20px] p-3 sm:p-6 rounded-[20px] sm:rounded-[35px] font-sans transition-all duration-500 ${darkMode ? 'bg-slate-900/40' : 'bg-slate-50/50'}`}>
      
      {/* 1. APP THEME SECTION - UPDATED FOR GLOBAL DARK MODE */}
      <SettingsCard title="App Appearance">
        <div className="space-y-4 sm:space-y-5">
          <div 
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center justify-between p-3 sm:p-4 rounded-[18px] sm:rounded-[22px] border-2 transition-all cursor-pointer group ${darkMode ? 'bg-slate-900 border-blue-500 shadow-xl' : 'bg-white border-blue-100 shadow-sm'}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-5 rounded-full relative flex items-center px-1 transition-all ${darkMode ? 'bg-blue-600' : 'bg-slate-200'}`}>
                <div className={`w-3 h-3 bg-white rounded-full shadow-md transition-all duration-300 ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}></div>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-[14px] sm:text-[15px] tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Dark Mode</span>
                <span className={`text-[11px] font-bold uppercase tracking-wider ${darkMode ? 'text-blue-400' : 'text-slate-400'}`}>
                  {darkMode ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
            <span className={`text-[9px] font-black uppercase tracking-[1.5px] px-3 py-1 rounded-lg border transition-all ${darkMode ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-slate-100 text-slate-400 border-slate-200'}`}>
              {darkMode ? 'Active' : 'Inactive'}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 w-full">
            <div className="flex flex-col gap-2 flex-1">
              <label className={`text-[11px] font-bold uppercase tracking-[1.5px] ml-1 ${darkMode ? 'text-slate-300' : 'text-slate-900'}`}>Font Size</label>
              <div className="relative group/select">
                <select className={`w-full p-3 border-2 rounded-[18px] font-bold text-[13px] outline-none shadow-sm transition-all cursor-pointer appearance-none pr-10 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-100 text-slate-700'}`}>
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
              <label className={`text-[11px] font-bold uppercase tracking-[1.5px] ml-1 ${darkMode ? 'text-slate-300' : 'text-slate-900'}`}>Interface</label>
              <div className="relative group/select">
                <select className={`w-full p-3 border-2 rounded-[18px] font-bold text-[13px] outline-none shadow-sm transition-all cursor-pointer appearance-none pr-10 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-100 text-slate-700'}`}>
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

      {/* 2. SECURITY SECTION - NO CHANGES TO CONTENT */}
      <SettingsCard title="Security & Privacy">
        <div className="space-y-1">
          <div className={rowHover}>
            <div className="flex flex-col">
              <span className={`text-[14px] sm:text-[15px] font-bold transition-colors ${darkMode ? 'text-slate-200 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-600'}`}>Change Password</span>
              <span className="text-[12px] text-slate-400">Security: Strong</span>
            </div>
            <button className="px-3 sm:px-4 py-1.5 bg-slate-100 rounded-lg text-[11px] font-black text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">MANAGE</button>
          </div>
          
          <div onClick={() => setTwoFactor(!twoFactor)} className={rowHover}>
            <div className="flex flex-col">
              <span className={`text-[14px] sm:text-[15px] font-bold transition-colors ${darkMode ? 'text-slate-200 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-600'}`}>Two-Factor Auth</span>
              <span className={`text-[12px] font-bold tracking-tight transition-colors ${twoFactor ? 'text-emerald-500' : 'text-rose-500'}`}>
                {twoFactor ? 'Active' : 'Disabled'}
              </span>
            </div>
            <div className={`w-9 h-5 rounded-full relative shadow-md border-2 transition-all ${twoFactor ? 'bg-emerald-500 border-emerald-400' : 'bg-slate-200 border-slate-300'}`}>
              <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all duration-300 ${twoFactor ? 'right-1' : 'right-4'}`}></div>
            </div>
          </div>
        </div>
      </SettingsCard>

      {/* 3. SUPPORT SECTION - NO CHANGES TO CONTENT */}
      <SettingsCard title="Social Sphere Support">
        <form onSubmit={handleSubmitTicket} className="flex flex-col gap-3">
          <input 
            required
            type="text" 
            placeholder="How can we help?" 
            className={`w-full p-3 sm:p-4 rounded-[18px] font-semibold text-[14px] outline-none border-2 transition-all placeholder:text-slate-400 ${darkMode ? 'bg-slate-800 border-transparent focus:border-blue-500 text-white' : 'bg-slate-200/60 border-transparent focus:border-blue-500 focus:bg-white'}`} 
          />
          <button 
            type="submit"
            className={`group w-full py-3 sm:py-4 rounded-[20px] font-bold text-[14px] sm:text-[15px] shadow-lg transition-all flex items-center justify-center gap-2 ${submitted ? 'bg-emerald-500 text-white shadow-emerald-200' : 'bg-blue-600 text-white shadow-blue-500/20 hover:bg-blue-700'}`}
          >
            {submitted ? 'Ticket Submitted' : 'Submit Ticket'} 
            {submitted ? <Check size={18} /> : <LifeBuoy size={18} className="group-hover:rotate-12 transition-transform" />}
          </button>
        </form>
      </SettingsCard>

      {/* 4. NOTIFICATION SETTINGS - NO CHANGES TO CONTENT */}
      <SettingsCard title="Alerts & Notifications">
        <div className="space-y-3">
           <div 
            onClick={() => setPushNotifs(!pushNotifs)}
            className={`flex items-center justify-between p-3 sm:p-3.5 rounded-xl border cursor-pointer transition-all ${pushNotifs ? (darkMode ? 'bg-blue-900/20 border-blue-500/30' : 'bg-blue-50 border-blue-200') : (darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100')}`}
           >
             <div className="flex items-center gap-3">
               <div className={`p-2 rounded-lg shadow-sm transition-colors ${pushNotifs ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'}`}>
                 <BellRing size={18}/>
               </div>
               <span className={`font-bold text-[13px] sm:text-[14px] transition-colors ${pushNotifs ? (darkMode ? 'text-blue-400' : 'text-blue-700') : 'text-slate-500'}`}>Push Notifications</span>
             </div>
             <div className={`w-9 h-5 rounded-full relative px-1 flex items-center transition-all ${pushNotifs ? 'bg-blue-600' : 'bg-slate-200'}`}>
               <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-all duration-300 ${pushNotifs ? 'translate-x-4' : 'translate-x-0'}`}></div>
             </div>
           </div>
           <p className="text-[12px] text-slate-400 font-medium px-2 leading-relaxed text-center italic">
             "We only send essential updates."
           </p>
        </div>
      </SettingsCard>

      {/* LOGOUT BUTTON */}
      <div className="flex justify-center lg:col-span-2 pt-2 sm:pt-4">
        <button 
          onClick={handleLogout}
          className="group relative flex items-center gap-3 sm:gap-4 bg-[#0f172a] px-7 sm:px-12 py-3 sm:py-4 rounded-[20px] sm:rounded-[25px] shadow-xl border border-white/5 hover:bg-red-600 transition-all duration-500 active:scale-95"
        >
          <LogOut className="text-red-500 group-hover:text-white transition-all" size={18} />
          <span className="text-white font-bold text-[12px] sm:text-[14px] uppercase tracking-[2px] sm:tracking-[3px] transition-colors">
              Secure Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default SettingsView;