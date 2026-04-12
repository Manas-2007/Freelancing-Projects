import { useState } from "react";
import { FiGift } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";

const categories = ["Fast Food", "Street Food", "Healthy", "Home Style", "Desserts"];

export function Dashnav() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  return (
    <>
      {/* ══════════════════════════════════
           DESKTOP NAVBAR
      ══════════════════════════════════ */}
      <nav className="hidden md:flex w-full px-8 py-3 bg-white/[0.02] backdrop-blur-2xl border-b border-white/5 items-center justify-between sticky top-0 z-50">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:border-white/40 transition-all overflow-hidden">
            <img src="/logo.jpg" alt="logo" className="h-full w-full object-cover rounded-full transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-xl font-bold tracking-tight leading-none">
              AI <span className="text-white/80">Recipe</span>
            </h1>
            <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mt-1">Generator</span>
          </div>
        </div>

        {/* CENTER: Search */}
        <div className="flex items-stretch w-[30%] h-9 group">
          <div className="relative flex-1 flex items-center">
            <FaSearch className="absolute left-4 text-white/20 group-focus-within:text-white/60 transition-all duration-300 z-10" />
            <input
              type="text"
              placeholder="Search ingredients..."
              className="w-full h-full pl-11 pr-4 rounded-l-2xl bg-white/[0.04] border border-white border-r-0 text-white text-sm placeholder-white/20 outline-none focus:bg-white/[0.12] focus:border-white transition-all duration-300"
            />
          </div>
          <button className="px-5 h-full bg-white text-black font-[500] text-[14px] tracking-[0.15em] rounded-r-2xl hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-95 transition-all duration-300">
            Generate
          </button>
        </div>

        {/* CATEGORIES */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {categories.map((item) => (
            <button key={item} className="relative h-full py-4 text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-all group">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-8">
          <button className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-all group">
            <FiGift size={24} className="group-hover:scale-110 transition-transform group-hover:text-orange-400" />
            <span className="text-[9px] font-black uppercase tracking-tighter">Surprise</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-all group">
            <FaRegFolderClosed size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-[9px] font-black uppercase tracking-tighter">Library</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-all group">
            <CgProfile size={26} className="group-hover:scale-110 transition-transform text-white/80" />
            <span className="text-[9px] font-black uppercase tracking-tighter">Profile</span>
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════
           MOBILE NAVBAR
      ══════════════════════════════════ */}
      {/* ══════════════════════════════════
     MOBILE NAVBAR
══════════════════════════════════ */}
<nav className="md:hidden w-full sticky top-0 z-50 bg-white/[0.03] backdrop-blur-2xl border-b border-white/10">

  <div className="flex items-center justify-between px-3 h-16">

    {/* EXTREME LEFT: Hamburger + Logo + Brand */}
    <div className="flex items-center gap-2 flex-shrink-0">
      <button
        onClick={() => setOffcanvasOpen(true)}
        className="text-white/70 hover:text-white transition-colors"
      >
        <HiMenu size={24} />
      </button>

      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
        <img src="/logo.jpg" alt="logo" className="h-full w-full object-cover" />
      </div>

      <span className="text-white text-sm font-bold tracking-tight whitespace-nowrap">
        AI <span className="text-white/70">Recipe</span>
      </span>
    </div>

    {/* CENTER: Search Bar + Generate Button */}
    <div className="flex items-center mx-3 flex-1 min-w-0 h-9">
      <div className="relative flex-1 min-w-0">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-[10px] z-10" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-9 pl-8 pr-2 rounded-l-xl bg-white/[0.07] border border-white/20 border-r-0 text-white text-xs placeholder-white/30 outline-none focus:bg-white/[0.12] focus:border-white/50 transition-all"
        />
      </div>
      <button className="h-9 px-3 bg-white text-black text-[11px] font-bold rounded-r-xl flex-shrink-0 whitespace-nowrap active:scale-95 transition-all">
        Generate
      </button>
    </div>

    {/* EXTREME RIGHT: 3 Icons with Labels */}
    <div className="flex items-center gap-3 flex-shrink-0">

      <button className="flex flex-col items-center gap-0.5 text-white/60 hover:text-orange-400 transition-colors">
        <FiGift size={20} />
        <span className="text-[8px] font-black uppercase tracking-tight">Surprise</span>
      </button>

      <button className="flex flex-col items-center gap-0.5 text-white/60 hover:text-white transition-colors">
        <FaRegFolderClosed size={19} />
        <span className="text-[8px] font-black uppercase tracking-tight">Recipes</span>
      </button>

      <button className="flex flex-col items-center gap-0.5 text-white/60 hover:text-white transition-colors">
        <CgProfile size={21} />
        <span className="text-[8px] font-black uppercase tracking-tight">Profile</span>
      </button>

    </div>
  </div>
</nav>

      {/* ══════════════════════════════════
           OFFCANVAS
      ══════════════════════════════════ */}

      {/* Backdrop */}
      <div
        onClick={() => setOffcanvasOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${offcanvasOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-[72%] max-w-[290px] z-[70] bg-[#0c0c1a] border-r border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${offcanvasOpen ? "translate-x-0" : "-translate-x-full"}`}>

        {/* Close */}
        <button
          onClick={() => setOffcanvasOpen(false)}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <HiX size={22} />
        </button>

        {/* Logo + Title */}
        <div className="flex flex-col items-center gap-3 pt-12 pb-8 px-6 border-b border-white/10">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
            <img src="/logo.jpg" alt="logo" className="h-full w-full object-cover" />
          </div>
          <div className="text-center">
            <h2 className="text-white text-lg font-bold tracking-tight">AI Recipe Generator</h2>
            <p className="text-white/35 text-[10px] uppercase tracking-[0.25em] font-black mt-1">Smart Kitchen AI</p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-col px-4 py-6 gap-1 flex-1">
          <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em] px-3 mb-3">Food Variety</p>
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setOffcanvasOpen(false)}
              className="text-left px-4 py-3.5 rounded-xl text-white/60 text-sm font-semibold hover:text-white hover:bg-white/[0.07] transition-all duration-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Library */}
        <div className="px-4 pb-8 border-t border-white/10 pt-4">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 text-sm font-semibold hover:text-white hover:bg-white/[0.07] transition-all w-full">
            <FaRegFolderClosed size={15} />
            Library
          </button>
        </div>
      </div>
    </>
  );
}

export function Status({ total = 240, favCuisine = "Italian", saved = 30, onFilterClick }) {
  return (
    <div className="w-full mt-6 mb-8">

      <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 sm:gap-6">

        {/* Total Generated */}
        <div className="relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-3.5 
          bg-gradient-to-br from-green-500/10 to-white/[0.02]
          backdrop-blur-xl border border-green-500/20 sm:border-white/10 
          rounded-2xl shadow-lg hover:border-green-500/40 
          transition-all group overflow-hidden">
          <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
          <div className="w-1.5 h-8 sm:h-6 bg-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.6)] flex-shrink-0"></div>
          <div className="flex flex-col relative z-10">
            <span className="text-[9px] text-green-400/70 uppercase font-black tracking-[0.15em]">Generated</span>
            <span className="text-white text-2xl sm:text-xl font-black leading-tight">{total}</span>
          </div>
        </div>

        {/* Favorite Cuisine */}
        <div className="relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-3.5 
          bg-gradient-to-br from-red-500/10 to-white/[0.02]
          backdrop-blur-xl border border-red-500/20 sm:border-white/10 
          rounded-2xl shadow-lg hover:border-red-500/40 
          transition-all group overflow-hidden">
          <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
          <div className="w-1.5 h-8 sm:h-6 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.6)] flex-shrink-0"></div>
          <div className="flex flex-col min-w-0 relative z-10">
            <span className="text-[9px] text-red-400/70 uppercase font-black tracking-[0.15em]">Favorite</span>
            <span className="text-white text-xl sm:text-xl font-black leading-tight truncate">{favCuisine}</span>
          </div>
        </div>

        {/* Saved Recipes */}
        <div className="relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-3.5 
          bg-gradient-to-br from-purple-500/10 to-white/[0.02]
          backdrop-blur-xl border border-purple-500/20 sm:border-white/10 
          rounded-2xl shadow-lg hover:border-purple-500/40 
          transition-all group overflow-hidden">
          <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
          <div className="w-1.5 h-8 sm:h-6 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.6)] flex-shrink-0"></div>
          <div className="flex flex-col relative z-10">
            <span className="text-[9px] text-purple-400/70 uppercase font-black tracking-[0.15em]">Saved</span>
            <span className="text-white text-2xl sm:text-xl font-black leading-tight">{saved}</span>
          </div>
        </div>

        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="relative flex items-center justify-center gap-2 sm:gap-3 sm:ml-auto 
          px-4 sm:px-6 py-4 sm:py-3.5 
          bg-gradient-to-br from-blue-500/15 to-white/[0.02]
          backdrop-blur-md border border-blue-400/25 sm:border-white/10 
          rounded-2xl text-white text-[11px] font-black uppercase tracking-[0.2em] 
          hover:bg-white hover:text-black 
          transition-all duration-500 
          shadow-[0_0_20px_rgba(59,130,246,0.15)] sm:shadow-[0_10px_20px_rgba(0,0,0,0.2)]
          active:scale-95 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-0 transition-opacity rounded-2xl" />
          <span className="text-blue-300 group-hover:text-black transition-colors text-base">⚡</span>
          <span className="relative z-10">Filters</span>
        </button>

      </div>
    </div>
  );
}