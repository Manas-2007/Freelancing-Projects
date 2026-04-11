import { FiGift } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export function Dashnav() {
  return (
    <nav className="w-full px-8 py-3 bg-white/[0.02] backdrop-blur-2xl border-b border-white/10 flex items-center justify-between sticky top-0 z-50">
      
      {/* LEFT: Logo Section */}
<div className="flex items-center gap-3 group cursor-pointer">
  {/* Circular Logo Container */}
  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:border-white/40 transition-all overflow-hidden">
    <img 
      src="/logo.jpg" 
      alt="logo" 
      className="h-full w-full object-cover rounded-full transition-transform group-hover:scale-110" 
    />
  </div>

  {/* Name Section */}
  <div className="flex flex-col">
    <h1 className="text-white text-xl font-[500] tracking-tight leading-none">
      AI <span className="text-white">Recipe</span>
    </h1>
    <span className="text-[9px] text-white/60 uppercase tracking-[0.2em] font-[500] mt-1">
      Generator
    </span>
  </div>
</div>

     {/* CENTER: Search Bar - Premium Interactive Style */}
<div className="flex items-stretch w-[30%] h-9 group">
  <div className="relative flex-1 flex items-center">
    {/* Animated Icon */}
    <FaSearch className="absolute left-4 text-white/20 group-focus-within:text-white/60 group-focus-within:scale-110 transition-all duration-300 z-10" />
    
    <input
      type="text"
      placeholder="Search ingredients..."
      className="w-full h-full pl-11 pr-4 rounded-l-2xl bg-white/[0.04] border border-white border-r-0 text-white text-sm placeholder-white/20 outline-none group-hover:bg-white/[0.08] focus:bg-white/[0.12] focus:border-white transition-all duration-300"
    />
    
    {/* Inner Shadow/Glow Effect */}
    <div className="absolute inset-0 pointer-events-none rounded-l-2xl shadow-[inner_0_1px_1px_rgba(255,255,255,0.05)]"></div>
  </div>

  <button className="px-5 h-full bg-white text-black font-[500] text-[14px] tracking-[0.15em] rounded-r-2xl hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-95 transition-all duration-300 ">
    Search
  </button>
</div>
      {/* CATEGORIES - With Sliding Bottom Border */}
      <div className="hidden lg:flex items-center gap-8 h-full">
        {["Fast Food", "Street Food", "Healthy", "Home Style", "Desserts"].map((item) => (
          <button 
            key={item} 
            className="relative h-full py-4 text-white text-[12px] font-[500] uppercase tracking-wider hover:text-white transition-all group"
          >
            {item}
            {/* Sliding Bottom Border */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            
          </button>
        ))}
      </div>

      {/* RIGHT: Actions - Stacked Layout (Icon top, Text bottom) */}
      <div className="flex items-center gap-8">
        
        {/* Surprise */}
        <button className="flex flex-col items-center gap-1 text-white hover:text-white transition-all group">
          <FiGift size={28} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Surprise</span>
        </button>

        {/* My Recipes */}
        <button className="flex flex-col items-center gap-1 text-white hover:text-white transition-all group">
          <FaRegFolderClosed size={28} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-[500] uppercase tracking-tighter">Library</span>
        </button>

        {/* Profile */}
        <button className="flex flex-col items-center gap-1 text-white hover:text-white transition-all group">
          <CgProfile size={30} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-[500] uppercase tracking-tighter">Profile</span>
        </button>

      </div>

    </nav>
  );
}