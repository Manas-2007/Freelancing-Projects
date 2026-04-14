import { FiGift } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

// Categories array
const categories = ["Indian", "Italian", "Chinese", "Mexican", "Japanese"];

export function MobileSearchBar({ onSearch }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleMobileSearch = () => {
    if (value.trim() && onSearch) onSearch(value);
  };

  return (
    <>
      <style>{`
        @keyframes rgbSlide { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
        @keyframes borderGlow { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
      `}</style>

      {/* Mobile Search: Fixed under Navbar on Mobile */}
      <div className="md:hidden w-full mt-3 mb-1 px-1">
        <div className="p-[1.5px] rounded-2xl transition-all duration-500"
          style={{
            background: "linear-gradient(90deg, #ff0080, #7b2ff7, #40e0d0, #ff8c00, #ff0080)",
            backgroundSize: "200% 100%",
            animation: "borderGlow 3s linear infinite",
            boxShadow: "0 0 20px rgba(123,47,247,0.35)",
          }}>
          <div className="flex items-center w-full rounded-[14px] overflow-hidden bg-[#0f0d22] backdrop-blur-xl">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[12px] z-10 transition-colors duration-300"
                style={{ color: focused || value ? "#a78bfa" : "rgba(255,255,255,0.25)" }} />
              <input
                type="text"
                placeholder="Ask AI for a recipe..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={(e) => e.key === "Enter" && handleMobileSearch()}
                className="w-full h-12 pl-10 pr-3 bg-transparent text-[13px] outline-none text-white placeholder-white/25"
              />
            </div>
            <button onClick={handleMobileSearch} className="h-12 px-6 text-white text-[13px] font-medium"
              style={{ background: "linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #7b2ff7, #ff0080)", backgroundSize: "300% 100%", animation: "rgbSlide 3s linear infinite" }}>
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function Dashnav({ onSurpriseMe, onSearch, onCategoryClick, onLibraryClick, onProfileClick, userData, activeCategory }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleSearchTrigger = () => {
    if (value.trim() && onSearch) onSearch(value);
  };

  return (
    <>
      {/* 📱 MOBILE NAVBAR: Always Sticky on Mobile */}
      <nav className="flex md:hidden w-full items-center justify-between py-4 px-4 sticky top-0 z-[100] bg-[#0c0c1a]/90 backdrop-blur-2xl border-b border-white/10 shadow-lg">
        {/* Left: Logo & Name */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl border border-white/20 overflow-hidden shadow-lg shadow-blue-500/20">
            <img src="/logo.jpg" alt="logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-bold tracking-tighter uppercase leading-none italic">
              AI <span className="text-blue-500">Chef</span>
            </h1>
            <span className="text-[7px] text-white/30 tracking-[0.2em] font-bold">SYSTEM_v1.0</span>
          </div>
        </div>

        {/* Right: The 3 Icons */}
        <div className="flex items-center gap-5">
          <button onClick={onSurpriseMe} className="text-white/50 hover:text-orange-400 active:scale-90 transition-all">
            <FiGift size={20} />
          </button>
          <button onClick={onLibraryClick} className="text-white/50 hover:text-blue-400 active:scale-90 transition-all">
            <FaRegFolderClosed size={20} />
          </button>
          <button onClick={onProfileClick} className="w-8 h-8 rounded-full border border-white/20 overflow-hidden shadow-lg active:scale-90 transition-all">
            <img src={userData?.avatar || "/logo.jpg"} alt="profile" className="h-full w-full object-cover" />
          </button>
        </div>
      </nav>

      {/* 💻 DESKTOP NAVBAR: No changes made here */}
      <nav className="hidden md:flex w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] px-8 py-4 -mx-4 md:-mx-6 bg-[#0c0c1a]/90 backdrop-blur-2xl border-b border-white/15 items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-11 h-11 rounded-full border border-white/25 overflow-hidden transition-all group-hover:border-white/45">
            <img src="/logo.jpg" alt="logo" className="h-full w-full object-cover transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-xl font-medium tracking-tight leading-none">AI <span className="text-white/70">Recipe</span></h1>
            <span className="text-[9px] text-white/35 uppercase tracking-[0.22em] mt-1">Generator</span>
          </div>
        </div>

        <div className="flex items-stretch w-[35%] h-10">
          <div className="flex items-stretch flex-1 p-[1.5px] rounded-l-2xl transition-all duration-500"
            style={focused || value ? { background: "linear-gradient(90deg, #ff0080, #7b2ff7, #40e0d0, #ff8c00, #ff0080)", backgroundSize: "200% 100%", animation: "borderGlow 3s linear infinite" } : { background: "rgba(255,255,255,0.18)" }}>
            <div className="relative flex flex-1 items-center rounded-l-[14px] bg-[#0f0d22] overflow-hidden">
              <FaSearch className="absolute left-4 text-[12px] z-10 transition-colors duration-300" style={{ color: focused || value ? "#a78bfa" : "rgba(255,255,255,0.25)" }} />
              <input
                type="text"
                placeholder="Search recipes..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={(e) => e.key === "Enter" && handleSearchTrigger()}
                className="w-full h-full pl-11 pr-4 bg-transparent text-sm outline-none text-white placeholder-white/25"
              />
            </div>
          </div>
          <button onClick={handleSearchTrigger} className="px-6 h-full text-white font-bold text-[13px] rounded-r-2xl active:scale-95 transition-all"
            style={{ background: "linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #7b2ff7, #ff0080)", backgroundSize: "300% 100%", animation: "rgbSlide 3s linear infinite" }}>
            GENERATE
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8 h-full">
          {categories.map((item) => {
            const isActive = activeCategory === item;
            return (
              <button 
                key={item} 
                onClick={() => onCategoryClick && onCategoryClick(item)}
                className={`relative h-full py-4 text-[12px] font-normal uppercase tracking-widest transition-all duration-300 group ${isActive ? "text-orange-400" : "text-white hover:text-orange-400"}`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-orange-400 transition-all duration-500 ${isActive ? "w-full shadow-[0_0_12px_#fb923c]" : "w-0 group-hover:w-full"}`}></span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-8">
          <button onClick={onSurpriseMe} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-all group">
            <FiGift size={22} className="group-hover:scale-110 group-hover:text-orange-400 transition-all" />
            <span className="text-[9px] uppercase tracking-wide">Surprise</span>
          </button>
          <button onClick={onLibraryClick} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-all group">
            <FaRegFolderClosed size={22} className="group-hover:scale-110 group-hover:text-orange-400 transition-all" />
            <span className="text-[9px] uppercase tracking-wide">Library</span>
          </button>
          <button onClick={onProfileClick} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-all group">
            <CgProfile size={24} className="group-hover:scale-110 group-hover:text-orange-400 transition-all" />
            <span className="text-[9px] uppercase tracking-wide">Profile</span>
          </button>
        </div>
      </nav>
    </>
  );
}

// Status component (Same as before)
export function Status({ total, favCuisine, saved, onFilterClick }) {
  return (
    <div className="w-full mt-6 mb-8 px-1">
      <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 sm:gap-6">
        <div className="p-[1.5px] rounded-2xl flex-1 bg-gradient-to-r from-green-500 via-purple-500 to-green-500 animate-[borderGlow_3s_linear_infinite] bg-[length:200%_100%]">
          <div className="flex items-center gap-3 px-4 py-3.5 bg-[#0f1f12]/95 backdrop-blur-xl rounded-[14px]">
            <div className="w-1.5 h-6 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]" />
            <div className="flex flex-col">
              <span className="text-[9px] text-green-400 uppercase tracking-widest">Generated</span>
              <span className="text-white text-xl font-medium">{total}</span>
            </div>
          </div>
        </div>

        <div className="p-[1.5px] rounded-2xl flex-1 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 animate-[borderGlow_3s_linear_infinite] bg-[length:200%_100%]">
          <div className="flex items-center gap-3 px-4 py-3.5 bg-[#1f0e0e]/95 backdrop-blur-xl rounded-[14px]">
            <div className="w-1.5 h-6 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444]" />
            <div className="flex flex-col">
              <span className="text-[9px] text-red-400 uppercase tracking-widest">Favorite</span>
              <span className="text-white text-xl font-medium truncate">{favCuisine}</span>
            </div>
          </div>
        </div>

        <div className="p-[1.5px] rounded-2xl flex-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-[borderGlow_3s_linear_infinite] bg-[length:200%_100%]">
          <div className="flex items-center gap-3 px-4 py-3.5 bg-[#150f20]/95 backdrop-blur-xl rounded-[14px]">
            <div className="w-1.5 h-6 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />
            <div className="flex flex-col">
              <span className="text-[9px] text-purple-400 uppercase tracking-widest">Saved</span>
              <span className="text-white text-xl font-medium">{saved}</span>
            </div>
          </div>
        </div>

        <button onClick={onFilterClick} className="p-[1.5px] rounded-2xl flex-1 bg-gradient-to-r from-blue-500 to-pink-500 animate-[borderGlow_3s_linear_infinite] bg-[length:200%_100%]">
          <div className="flex items-center justify-start gap-2 px-4 py-3.5 bg-[#0a0f1f]/95 hover:bg-white/10 transition-all rounded-[14px] h-full">
            <span className="text-blue-400 text-base">⚡</span>
            <span className="text-white text-[11px] uppercase tracking-widest">Filters</span>
          </div>
        </button>
      </div>
    </div>
  );
}