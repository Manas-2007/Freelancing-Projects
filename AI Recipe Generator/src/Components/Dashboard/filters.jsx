import { useState } from "react";

export function DishFilter() {
  const [time, setTime] = useState(60);

  return (
    <div className="w-full sm:w-[280px] 
      bg-[#0e0e1f]/90 backdrop-blur-2xl 
      border border-white/15
      shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]
      rounded-2xl p-5 text-white space-y-5">

      {/* Title */}
      <div className="flex justify-between items-center border-b border-white/10 pb-3">
        <h2 className="text-base font-bold tracking-wide text-white">Dish Filters</h2>
        <span className="text-white/40 text-xs cursor-pointer hover:text-white transition-colors px-2 py-0.5 rounded-lg bg-white/5 hover:bg-white/10">⌄</span>
      </div>

      {/* Cuisine Type */}
      <div>
        <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.18em] mb-3">Cuisine Type</p>
        <div className="flex flex-wrap gap-2">
          {["Indian", "Chinese", "Mexican"].map((c) => (
            <button key={c}
              className="px-3 py-1.5 rounded-full 
              bg-white/[0.06] border border-white/15
              hover:bg-white hover:text-black hover:border-transparent
              text-white/80 text-xs font-semibold 
              hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]
              transition-all duration-200 active:scale-95">
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Meal Type */}
      <div>
        <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.18em] mb-3">Meal Type</p>
        <div className="flex flex-wrap gap-2">
          {["Breakfast", "Lunch", "Dinner"].map((m) => (
            <button key={m}
              className="px-3 py-1.5 rounded-full 
              bg-white/[0.06] border border-white/15
              hover:bg-white hover:text-black hover:border-transparent
              text-white/80 text-xs font-semibold 
              hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]
              transition-all duration-200 active:scale-95">
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Veg / Non-Veg */}
      <div>
        <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.18em] mb-3">Preference</p>
        <div className="flex gap-2">
          <button className="flex-1 py-2 rounded-full 
            bg-green-500/15 border border-green-500/40
            text-green-400 text-xs font-bold 
            hover:bg-green-500/30 hover:border-green-400
            shadow-[0_0_12px_rgba(34,197,94,0.12)]
            hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]
            transition-all duration-200 active:scale-95">
            🥦 Veg
          </button>
          <button className="flex-1 py-2 rounded-full 
            bg-red-500/15 border border-red-500/40
            text-red-400 text-xs font-bold 
            hover:bg-red-500/30 hover:border-red-400
            shadow-[0_0_12px_rgba(239,68,68,0.12)]
            hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]
            transition-all duration-200 active:scale-95">
            🍖 Non-Veg
          </button>
        </div>
      </div>

      {/* Cooking Time */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.18em]">Cooking Time</p>
          <span className="text-xs text-white font-bold bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-full">
            {time} min
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="120"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="w-full accent-white cursor-pointer h-1"
        />
        <div className="flex justify-between text-[10px] text-white/25 mt-1.5 font-medium">
          <span>0</span>
          <span>60 min</span>
          <span>2h</span>
        </div>
      </div>

      {/* Apply Button */}
      <div className="pt-1">
        <button className="w-full py-2.5 
          bg-white text-black
          font-bold text-sm tracking-wide
          rounded-full 
          shadow-[0_0_25px_rgba(255,255,255,0.2)]
          hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]
          hover:scale-[1.02]
          active:scale-95
          transition-all duration-300">
          Apply Filters
        </button>
      </div>

    </div>
  );
}