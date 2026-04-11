import { FiGift } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export function Dashnav() {
  return (
    // Replaced harsh hr with border-white/5 for a much cleaner look
    <nav className="w-full px-8 py-3 bg-white/[0.02] backdrop-blur-2xl border-b border-white/5 flex items-center justify-between sticky top-0 z-50">
      
      {/* LEFT: Logo Section */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:border-white/40 transition-all overflow-hidden">
          <img 
            src="/logo.jpg" 
            alt="logo" 
            className="h-full w-full object-cover rounded-full transition-transform group-hover:scale-110" 
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-white text-xl font-bold tracking-tight leading-none">
            AI <span className="text-white/80">Recipe</span>
          </h1>
          <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mt-1">
            Generator
          </span>
        </div>
      </div>

      {/* CENTER: Search Bar - LEFT UNTOUCHED */}
      <div className="flex items-stretch w-[30%] h-9 group">
        <div className="relative flex-1 flex items-center">
          <FaSearch className="absolute left-4 text-white/20 group-focus-within:text-white/60 group-focus-within:scale-110 transition-all duration-300 z-10" />
          <input
            type="text"
            placeholder="Search ingredients..."
            className="w-full h-full pl-11 pr-4 rounded-l-2xl bg-white/[0.04] border border-white border-r-0 text-white text-sm placeholder-white/20 outline-none group-hover:bg-white/[0.08] focus:bg-white/[0.12] focus:border-white transition-all duration-300"
          />
          <div className="absolute inset-0 pointer-events-none rounded-l-2xl shadow-[inner_0_1px_1px_rgba(255,255,255,0.05)]"></div>
        </div>
        <button className="px-5 h-full bg-white text-black font-[500] text-[14px] tracking-[0.15em] rounded-r-2xl hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-95 transition-all duration-300 ">
          Generate
        </button>
      </div>

      {/* CATEGORIES - Improved Font Weight for SaaS look */}
      <div className="hidden lg:flex items-center gap-8 h-full">
        {["Fast Food", "Street Food", "Healthy", "Home Style", "Desserts"].map((item) => (
          <button 
            key={item} 
            className="relative h-full py-4 text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-all group"
          >
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
          <CgProfile size={26} className="group-hover:scale-110 transition-transform text-white/80 group-hover:text-white" />
          <span className="text-[9px] font-black uppercase tracking-tighter">Profile</span>
        </button>
      </div>
    </nav>
  );
}

export function Status({ total = 240, favCuisine = "Italian", saved = 30, onFilterClick }) {
  return (
    <div className="w-full flex items-center gap-6 mt-6 mb-8">
      
      {/* Total Generated - Optimized Padding */}
      <div className="flex items-center gap-4 px-6 py-3.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:border-green-500/30 transition-all group">
        <div className="w-1.5 h-6 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
        <div className="flex flex-col">
          <span className="text-[9px] text-white/40 uppercase font-black tracking-[0.15em]">Generated</span>
          <span className="text-white text-xl font-bold leading-tight">{total}</span>
        </div>
      </div>

      {/* Favorite Cuisine */}
      <div className="flex items-center gap-4 px-6 py-3.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:border-red-500/30 transition-all group">
        <div className="w-1.5 h-6 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>
        <div className="flex flex-col">
          <span className="text-[9px] text-white/40 uppercase font-black tracking-[0.15em]">Favorite</span>
          <span className="text-white text-xl font-bold leading-tight">{favCuisine}</span>
        </div>
      </div>

      {/* Saved Recipes */}
      <div className="flex items-center gap-4 px-6 py-3.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:border-purple-500/30 transition-all group">
        <div className="w-1.5 h-6 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
        <div className="flex flex-col">
          <span className="text-[9px] text-white/40 uppercase font-black tracking-[0.15em]">Saved</span>
          <span className="text-white text-xl font-bold leading-tight">{saved}</span>
        </div>
      </div>

      {/* PREMIUM FILTER BUTTON - Floating Glass Style */}
      <button
        onClick={onFilterClick}
        className="ml-auto px-6 py-3.5 flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:scale-95 group"
      >
        <span className="text-white group-hover:text-black transition-colors opacity-60 group-hover:opacity-100">⚡</span>
        Filters
      </button>

    </div>
  );
}