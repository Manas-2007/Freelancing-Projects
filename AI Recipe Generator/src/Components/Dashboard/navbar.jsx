import { FiGift } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export function MobileSearchBar() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <style>{`
        @keyframes rgbSlide {
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes borderGlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      <div className="md:hidden w-full mt-3 mb-1 px-1">

        {/* Gradient border wrapper */}
        <div
          className="p-[1.5px] rounded-2xl transition-all duration-500"
          style={
            true
              ? {
                  background: "linear-gradient(90deg, #ff0080, #7b2ff7, #40e0d0, #ff8c00, #ff0080)",
                  backgroundSize: "200% 100%",
                  animation: "borderGlow 3s linear infinite",
                  boxShadow: "0 0 20px rgba(123,47,247,0.35), 0 0 40px rgba(255,0,128,0.15)",
                }
              : {
                  background: "rgba(255,255,255,0.15)",
                }
          }
        >
          <div className="flex items-center w-full rounded-[14px] overflow-hidden
            bg-[#0f0d22] backdrop-blur-xl">

            {/* Search Icon + Input */}
            <div className="relative flex-1">

              {/* Animated icon color */}
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[12px] z-10 transition-colors duration-300"
                style={{ color: focused || value ? "#a78bfa" : "rgba(255,255,255,0.25)" }}
              />

              <input
                type="text"
                placeholder="Ask AI for a recipe..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full h-12 pl-10 pr-3 bg-transparent
                  text-[13px] font-normal placeholder-white/25
                  outline-none transition-colors duration-300"
                style={{
                  color: value
                    ? "transparent"
                    : "white",
                  backgroundImage: value
                    ? "linear-gradient(90deg, #ff80b5, #a78bfa, #67e8f9, #a78bfa)"
                    : "none",
                  backgroundClip: value ? "text" : "unset",
                  WebkitBackgroundClip: value ? "text" : "unset",
                  backgroundSize: "200% 100%",
                  animation: value ? "borderGlow 3s linear infinite" : "none",
                }}
              />
            </div>

            {/* RGB Generate Button */}
            <button
              className="h-12 px-6 text-white text-[13px] font-medium flex-shrink-0
                whitespace-nowrap active:scale-95 transition-transform
                shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
              style={{
                background: "linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #7b2ff7, #ff0080)",
                backgroundSize: "300% 100%",
                animation: "rgbSlide 3s linear infinite",
              }}
            >
              Generate
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

   
const categories = ["Fast Food", "Street Food", "Healthy", "Home Style", "Desserts"];

export function Dashnav() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <style>{`
        @keyframes rgbSlide {
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes borderGlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
      {/* ══════════════════════════════════
           DESKTOP NAVBAR
      ══════════════════════════════════ */}
      <nav className="hidden md:flex w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] px-8 py-4 -mx-4 md:-mx-6
        bg-[#0c0c1a]/90 backdrop-blur-2xl
        border-b border-white/15
        shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_-1px_0_rgba(255,255,255,0.05)]
        items-center justify-between sticky top-0 z-50">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-11 h-11 rounded-full overflow-hidden
            border border-white/25
            shadow-[0_0_14px_rgba(255,255,255,0.08)]
            group-hover:border-white/45 transition-all">
            <img src="/logo.jpg" alt="logo" className="h-full w-full object-cover rounded-full transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-xl font-medium tracking-tight leading-none">
              AI <span className="text-white/70">Recipe</span>
            </h1>
            <span className="text-[9px] text-white/35 uppercase tracking-[0.22em] font-normal mt-1">Generator</span>
          </div>
        </div>

        {/* CENTER: Search */}
        <div className="flex items-stretch w-[30%] h-9">
          <div
            className="flex items-stretch flex-1 p-[1.5px] rounded-l-2xl transition-all duration-500"
            style={
              true
                ? {
                    background: "linear-gradient(90deg, #ff0080, #7b2ff7, #40e0d0, #ff8c00, #ff0080)",
                    backgroundSize: "200% 100%",
                    animation: "borderGlow 3s linear infinite",
                    boxShadow: "0 0 20px rgba(123,47,247,0.35), 0 0 40px rgba(255,0,128,0.15)",
                  }
                : { background: "rgba(255,255,255,0.18)" }
            }
          >
            <div className="relative flex flex-1 items-center rounded-l-[14px] bg-[#0f0d22] overflow-hidden">
              <FaSearch
                className="absolute left-4 text-[12px] z-10 transition-colors duration-300"
                style={{ color: focused || value ? "#a78bfa" : "rgba(255,255,255,0.25)" }}
              />
              <input
                type="text"
                placeholder="Ask AI for a recipe..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full h-full pl-11 pr-4 bg-transparent
                  text-sm font-normal placeholder-white/25
                  outline-none transition-colors duration-300"
                style={{
                  color: value ? "transparent" : "white",
                  backgroundImage: value
                    ? "linear-gradient(90deg, #ff80b5, #a78bfa, #67e8f9, #a78bfa)"
                    : "none",
                  backgroundClip: value ? "text" : "unset",
                  WebkitBackgroundClip: value ? "text" : "unset",
                  backgroundSize: "200% 100%",
                  animation: value ? "borderGlow 3s linear infinite" : "none",
                }}
              />
            </div>
          </div>
          <button
            className="px-5 h-full text-white font-medium text-[14px] tracking-[0.1em] rounded-r-2xl active:scale-95 transition-transform duration-300"
            style={{
              background: "linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #7b2ff7, #ff0080)",
              backgroundSize: "300% 100%",
              animation: "rgbSlide 3s linear infinite",
            }}
          >
            Generate
          </button>
        </div>
        {/* CATEGORIES */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {categories.map((item) => (
            <button key={item} className="relative h-full py-4 text-white text-[12px] font-normal uppercase tracking-widest hover:text-orange-400 transition-all group">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white/70 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
        {/* RIGHT: Actions */}
        <div className="flex items-center gap-8">
          <button className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-all group">
            <FiGift size={22} className="group-hover:scale-110 transition-transform group-hover:text-orange-400" />
            <span className="text-[9px] font-normal uppercase tracking-wide">Surprise</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-all group">
            <FaRegFolderClosed size={22} className="group-hover:scale-110 transition-transform group-hover:text-orange-400" />
            <span className="text-[9px] font-normal uppercase tracking-wide">Library</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-all group">
            <CgProfile size={24} className="group-hover:scale-110 transition-transform group-hover:text-orange-400" />
            <span className="text-[9px] font-normal uppercase tracking-wide">Profile</span>
          </button>
        </div>
      </nav>
      {/* ══════════════════════════════════
           MOBILE NAVBAR
      ══════════════════════════════════ */}
      <nav className="md:hidden w-[calc(100%+2rem)] sticky top-0 z-50 -mx-4
        bg-[#0c0c1a]/90 backdrop-blur-2xl
        border-b border-white/15
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between px-4 h-14">
          {/* LEFT: Hamburger + Logo + Brand */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button onClick={() => setOffcanvasOpen(true)} className="text-white/60 hover:text-white transition-colors">
              <HiMenu size={22} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/25 flex-shrink-0">
              <img src="/logo.jpg" alt="logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-white text-sm font-medium tracking-tight whitespace-nowrap">
              AI <span className="text-white/55">Recipe</span>
            </span>
          </div>
          {/* RIGHT: 3 Icons */}
          <div className="flex items-center gap-5 flex-shrink-0">
            <button className="flex flex-col items-center gap-0.5 text-white/50 hover:text-orange-400 transition-colors">
              <FiGift size={20} />
              <span className="text-[8px] font-normal uppercase tracking-wide">Surprise</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-white/50 hover:text-orange-400 transition-colors">
              <FaRegFolderClosed size={18} />
              <span className="text-[8px] font-normal uppercase tracking-wide">Recipes</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-white/50 hover:text-orange-400 transition-colors">
              <CgProfile size={20} />
              <span className="text-[8px] font-normal uppercase tracking-wide">Profile</span>
            </button>
          </div>
        </div>
      </nav>
      {/* ══════════════════════════════════
           OFFCANVAS
      ══════════════════════════════════ */}
      <div
        onClick={() => setOffcanvasOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-[60] transition-opacity duration-300 
          ${offcanvasOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <div className={`md:hidden fixed top-0 left-0 h-full w-[72%] max-w-[290px] z-[70]
        bg-gradient-to-b from-[#0e0c1f] via-[#110e22] to-[#0a0815]
        border-r border-white/15
        shadow-[6px_0_40px_rgba(0,0,0,0.8),inset_-1px_0_0_rgba(255,255,255,0.04)]
        flex flex-col transition-transform duration-300 ease-in-out
        ${offcanvasOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button
          onClick={() => setOffcanvasOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
            rounded-full bg-white/[0.06] border border-white/10
            text-white/40 hover:text-white hover:bg-white/10 transition-all"
        >
          <HiX size={16} />
        </button>


        {/* Logo + Title */}
        <div className="flex flex-col items-center gap-3 pt-12 pb-7 px-6
          border-b border-white/10
          bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden
            border-2 border-purple-400/30
            shadow-[0_0_24px_rgba(139,92,246,0.25),0_0_8px_rgba(139,92,246,0.15)]">
            <img src="/logo.jpg" alt="logo" className="h-full w-full object-cover" />
          </div>
          <div className="text-center">
            <h2 className="text-white text-base font-medium tracking-tight">AI Recipe Generator</h2>
            <p className="text-purple-400/50 text-[9px] uppercase tracking-[0.25em] font-normal mt-1">Smart Kitchen AI</p>
          </div>
        </div>


        {/* Categories */}
        <div className="flex flex-col px-3 py-5 gap-0.5 flex-1 overflow-y-auto">
          <p className="text-white/20 text-[9px] font-normal uppercase tracking-[0.3em] px-3 mb-2">Food Variety</p>
          {categories.map((item, i) => {
            const colors = [
              "hover:text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/20",
              "hover:text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/20",
              "hover:text-green-400 hover:bg-green-500/10 hover:border-green-500/20",
              "hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20",
              "hover:text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/20",
            ];
            return (
              <button
                key={item}
                onClick={() => setOffcanvasOpen(false)}
                className={`text-left px-4 py-3 rounded-xl
                  text-white/50 text-sm font-normal
                  border border-transparent
                  transition-all duration-200 ${colors[i % colors.length]}`}
              >
                {item}
              </button>
            );
          })}
        </div>


        {/* Library */}
        <div className="px-3 pb-8 border-t border-white/10 pt-4">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl w-full
            text-white/40 text-sm font-normal
            border border-transparent
            hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20
            transition-all duration-200">
            <FaRegFolderClosed size={14} />
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
      <style>{`
        @keyframes borderGlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 sm:gap-6">

        {/* Total Generated */}
        <div
          className="p-[1.5px] rounded-2xl flex-1"
          style={{
            background: "linear-gradient(90deg, #22c55e, #a78bfa, #22c55e)",
            backgroundSize: "200% 100%",
            animation: "borderGlow 3s linear infinite",
            boxShadow: "0 0 16px rgba(34,197,94,0.2), 0 0 32px rgba(34,197,94,0.08)",
          }}
        >
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-3.5
            bg-gradient-to-br from-[#0f1f12]/95 to-[#0e0e1f]/95
            backdrop-blur-xl rounded-[14px] h-full">
            <div className="w-1.5 h-8 sm:h-6 bg-green-500 rounded-full shadow-[0_0_14px_rgba(34,197,94,0.7)] flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-[9px] text-green-400 uppercase font-normal tracking-[0.18em]">Generated</span>
              <span className="text-white text-2xl sm:text-xl font-medium leading-tight">{total}</span>
            </div>
          </div>
        </div>

        {/* Favorite Cuisine */}
        <div
          className="p-[1.5px] rounded-2xl flex-1"
          style={{
            background: "linear-gradient(90deg, #ef4444, #a78bfa, #ef4444)",
            backgroundSize: "200% 100%",
            animation: "borderGlow 3s linear infinite",
            boxShadow: "0 0 16px rgba(239,68,68,0.2), 0 0 32px rgba(239,68,68,0.08)",
          }}
        >
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-3.5
            bg-gradient-to-br from-[#1f0e0e]/95 to-[#0e0e1f]/95
            backdrop-blur-xl rounded-[14px] h-full min-w-0">
            <div className="w-1.5 h-8 sm:h-6 bg-red-500 rounded-full shadow-[0_0_14px_rgba(239,68,68,0.7)] flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] text-red-400 uppercase font-normal tracking-[0.18em]">Favorite</span>
              <span className="text-white text-xl font-medium leading-tight truncate">{favCuisine}</span>
            </div>
          </div>
        </div>

        {/* Saved Recipes */}
        <div
          className="p-[1.5px] rounded-2xl flex-1"
          style={{
            background: "linear-gradient(90deg, #a855f7, #60a5fa, #a855f7)",
            backgroundSize: "200% 100%",
            animation: "borderGlow 3s linear infinite",
            boxShadow: "0 0 16px rgba(168,85,247,0.2), 0 0 32px rgba(168,85,247,0.08)",
          }}
        >
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-3.5
            bg-gradient-to-br from-[#150f20]/95 to-[#0e0e1f]/95
            backdrop-blur-xl rounded-[14px] h-full">
            <div className="w-1.5 h-8 sm:h-6 bg-purple-500 rounded-full shadow-[0_0_14px_rgba(168,85,247,0.7)] flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-[9px] text-purple-400 uppercase font-normal tracking-[0.18em]">Saved</span>
              <span className="text-white text-2xl sm:text-xl font-medium leading-tight">{saved}</span>
            </div>
          </div>
        </div>

        {/* Filter Button */}
        <div
         className="p-[1.5px] rounded-2xl w-full h-full sm:w-auto sm:h-auto sm:ml-auto"
          style={{
            background: "linear-gradient(90deg, #ff0080, #7b2ff7, #40e0d0, #ff8c00, #ff0080)",
            backgroundSize: "200% 100%",
            animation: "borderGlow 3s linear infinite",
            boxShadow: "0 0 16px rgba(123,47,247,0.25), 0 0 32px rgba(255,0,128,0.1)",
          }}
        >
          <button
            onClick={onFilterClick}
           className="flex items-center justify-center gap-2 sm:gap-3
              px-4 sm:px-6 py-4 sm:py-3.5
              bg-gradient-to-br from-[#0a0f1f]/95 to-[#0e0e1f]/95
              backdrop-blur-xl rounded-[14px]
              text-white text-[11px] font-normal uppercase tracking-[0.2em]
              hover:bg-white/10
              transition-all duration-300 active:scale-95 w-full h-full"
          >
            <span className="text-blue-400 text-base">⚡</span>
            <span>Filters</span>
          </button>
        </div>

      </div>
    </div>
  );
}