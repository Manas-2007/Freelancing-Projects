import React from 'react';
import { Droplets, Heart, X } from 'lucide-react';

const DRegister = ({ onClose,mode,setMode,onLoginSuccess }) => {
  const handleLoginSubmit=(e)=>{
    e.preventDefault();
    onLoginSuccess();
  }
  return (
    <div className="w-full flex items-center justify-center font-sans"> 
      {/* MODAL CARD */}
      <div className="w-full max-w-[900px] h-[85vh] bg-white rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col md:flex-row relative">

        {/* CLOSE BUTTON (ALL SCREENS) */}
       <button
  onClick={onClose}
  className="absolute top-2 right-3 md:top-3 md:right-4 z-50 
             text-white md:text-black 
             text-[18px] md:text-[16px] 
             leading-none">✕</button>

        {/* Left Side: Premium Branding (Desktop Only) */}
<div className="hidden md:flex md:w-[38%] bg-[#880808] p-12 flex-col justify-between text-white relative overflow-hidden">

  <div className="absolute top-[-10%] right-[-10%] opacity-10 pointer-events-none">
    <Droplets size={300} strokeWidth={1} />
  </div>

  <div className="relative z-10">
    
    {/* LOGO */}
    <div className="flex items-center gap-3 mb-7">
      <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
        <Droplets className="text-white w-6 h-6" />
      </div>
      <span className="font-[700] text-2xl tracking-tighter">LifeDrop</span>
    </div>

    {/* MAIN HEADING */}
    <h2 className="text-[35px] font-[600] leading-[1.1] mb-6 tracking-tighter">
      Be the <br/> 
      <span className="text-red-300 font-serif italic capitalize">Reason</span> <br/>
      for a Life.
    </h2>

    <div className="space-y-4">
      <div className="h-1 w-12 bg-red-400 rounded-full"></div>
      <p className="text-red-100 text-lg font-medium leading-relaxed max-w-[260px]">
        Your single donation can save up to{" "}
        <span className="text-white font-bold underline decoration-red-400 underline-offset-4">
          three lives
        </span>.
      </p>
    </div>
  </div>

  {/* BOTTOM CARD */}
  <div className="relative z-10 bg-white/10 backdrop-blur-xl p-5 rounded-[24px] border border-white shadow-2xl">
    
    <div className="flex items-center gap-3 mb-3">
      <div className="p-1.5 bg-red-500/30 rounded-lg">
        <Heart className="w-4 h-4 text-red-200 fill-red-200" />
      </div>
      <p className="text-[13px] font-[700] uppercase tracking-[2px] text-red-200">
        Donor Excellence
      </p>
    </div>

    <p className="text-[13px] font-medium leading-snug text-white/90 italic">
      Join donor's community of life savers.
    </p>
  </div>

</div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[62%] flex flex-col bg-[#fafafa] h-full">

          {/* HEADER */}
      <div className="p-5 md:p-6 bg-[#880808] md:bg-transparent text-white md:text-[#1a1a1a]">

        {/* 🔥 TOGGLE */}
        <div className="mb-3">
          <div className="flex bg-gray-100 rounded-full p-1 shadow-inner">

            <button
              onClick={() => setMode("register")}
              className={`w-1/2 py-2 text-sm font-semibold rounded-full transition
              ${mode === "register" ? "bg-[#880808] text-white" : "text-gray-600"}`}
            >
              Register
            </button>

            <button
              onClick={() => setMode("login")}
              className={`w-1/2 py-2 text-sm font-semibold rounded-full transition
              ${mode === "login" ? "bg-[#880808] text-white" : "text-gray-600"}`}
            >
              Login
            </button>

          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-xl md:text-3xl text-red-700 text-white md:text-red-700  font-semibold tracking-tight">
          {mode === "login" ? "Donor Login" : "Donor Registration"}
        </h1>

        <p className="text-red-100 md:text-gray-600 text-[11px] md:text-sm mt-1">
          {mode === "login"
            ? "Welcome back, please sign in"
            : "Medical & Contact Details"}
        </p>

      </div>

        {/* FORM */}
<div className="flex-1 flex flex-col overflow-hidden">
  <form className="flex flex-col h-full md:overflow-hidden">

    {/* 🔴 SCROLLABLE INPUT AREA */}
    <div className="flex-1 min-h-0 overflow-y-auto custom-red-scrollbar px-4 md:px-6 pt-2 md:pt-1 pb-4 space-y-3 md:space-y-2">

      {mode === "register" ? (
        <>
          {/* NAME + EMAIL (UNCHANGED) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="block text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                Full Name
              </label>
              <input type="text" placeholder="Vinay Joshi"
                className="w-full px-4 py-2.5 md:py-2 rounded-[12px] border-2 border-[#880808]/20 focus:border-[#880808] outline-none font-semibold text-sm"
              />
            </div>

            <div>
              <label className="block text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                Email Address
              </label>
              <input type="email" placeholder="john@example.com"
                className="w-full px-4 py-3 md:py-2.5 rounded-[12px] border-2 border-[#880808]/20 focus:border-[#880808] outline-none font-semibold text-sm"
              />
            </div>
          </div>

          {/* PASSWORD (UNCHANGED) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label className="block text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                Password
              </label>
              <input type="password" placeholder="••••••••"
                className="w-full px-4 py-2.5 md:py-2 rounded-[12px] border-2 border-[#880808]/20 focus:border-[#880808] outline-none font-semibold text-sm"
              />
            </div>

            <div>
              <label className="block text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                Confirm Password
              </label>
              <input type="password" placeholder="••••••••"
                className="w-full px-4 py-2.5 md:py-2 rounded-[12px] border-2 border-[#880808]/20 focus:border-[#880808] outline-none font-semibold text-sm"
              />
            </div>
          </div>

          {/* BLOOD + PHONE (UPDATED ✅ mobile = 2 cols) */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label className="block text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                Blood Group
              </label>
              <select className="w-full px-4 py-3 md:py-2.5 rounded-[12px] border-2 border-[#880808]/20 bg-white focus:border-[#880808] outline-none text-sm">
                <option>Select Type</option>
                {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                Contact Number
              </label>
              <input type="tel" placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 md:py-2 rounded-[12px] border-2 border-[#880808]/20 focus:border-[#880808] outline-none font-semibold text-sm"
              />
            </div>
          </div>

          {/* DATE + CITY (UPDATED ✅ mobile = 2 cols) */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label className="block text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                Last Donation
              </label>
              <input type="date"
                className="w-full px-4 py-2.5 md:py-2 rounded-[12px] border-2 border-[#880808]/20 focus:border-[#880808] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                City
              </label>
              <input type="text" placeholder="Gwalior, India"
                className="w-full px-4 py-2.5 md:py-2 rounded-[12px] border-2 border-[#880808]/20 focus:border-[#880808] outline-none font-semibold text-sm"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* LOGIN MODE (UNCHANGED) */}
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                Email Address
              </label>
              <input type="email" placeholder="john@example.com"
                className="w-full px-4 py-2.5 md:py-2 rounded-[12px] border-2 border-[#880808]/20 focus:border-[#880808] outline-none font-semibold text-sm"
              />
            </div>

            <div>
              <label className="block text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                Password
              </label>
              <input type="password" placeholder="••••••••"
                className="w-full px-4 py-2.5 md:py-2 rounded-[12px] border-2 border-[#880808]/20 focus:border-[#880808] outline-none font-semibold text-sm"
              />
            </div>
          </div>
        </>
      )}

    </div>

    {/* 🔵 FOOTER */}
    <div className="p-4 md:p-4 bg-white border-t border-gray-100 space-y-2">

      <button
      onClick={onLoginSuccess}
        className="w-full bg-[#880808] hover:bg-[#6d0606] active:scale-[0.98] text-white font-bold py-3 md:py-3.5 rounded-[14px] transition-all duration-200"
      >
        {mode === "login" ? "LOGIN" : "REGISTER AS DONOR"}
      </button>

      <p className="text-center text-[11px] md:text-xs font-semibold text-gray-700">
        {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          className="text-[#880808] font-bold cursor-pointer hover:underline transition"
          onClick={() => setMode(mode === "login" ? "register" : "login")}
        >
          {mode === "login" ? "Register" : "Login"}
        </span>
      </p>

    </div>

  </form>
</div>

<style>{`
  .custom-red-scrollbar::-webkit-scrollbar {
    width: 5px;
  }
  .custom-red-scrollbar::-webkit-scrollbar-thumb {
    background-color: #880808;
    border-radius: 10px;
  }
  .custom-red-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #880808 transparent;
  }
`}</style>

        </div>
      </div>
    </div>
  );
};
export default DRegister;

