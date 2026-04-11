import { useState } from "react";

export function DishFilter() {

  const [time, setTime] = useState(60);

  return (
    <div className="w-[260px] bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl text-white space-y-4">

      {/* Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-semibold">Dish Filters</h2>
        <span className="text-white/60 text-xs cursor-pointer">⌄</span>
      </div>

      {/* Cuisine Type */}
      <div>
        <p className="text-[11px] text-white/60 mb-2">Cuisine Type</p>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 text-xs transition">Indian</button>
          <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 text-xs transition">Chinese</button>
          <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 text-xs transition">Mexican</button>
        </div>
      </div>

      {/* Meal Type */}
      <div>
        <p className="text-[11px] text-white/60 mb-2">Meal Type</p>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 text-xs transition">Breakfast</button>
          <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 text-xs transition">Lunch</button>
          <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 text-xs transition">Dinner</button>
        </div>
      </div>

      {/* Veg / Non-Veg */}
      <div>
        <p className="text-[11px] text-white/60 mb-2">Preference</p>
        <div className="flex gap-2">
          <button className="px-4 py-1 rounded-full bg-green-500/20 text-green-300 text-xs hover:bg-green-500/30 transition">Veg</button>
          <button className="px-4 py-1 rounded-full bg-red-500/20 text-red-300 text-xs hover:bg-red-500/30 transition">Non-Veg</button>
        </div>
      </div>

      {/* 🔥 Cooking Time (UPDATED) */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-[11px] text-white/60">Cooking Time</p>
          <span className="text-[11px] text-white/80 font-medium">
            {time} min
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="120"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="w-full accent-white/70 cursor-pointer"
        />
      </div>

      {/* APPLY BUTTON */}
      <div className="pt-2">
        <button className="w-full py-2 bg-white/20 hover:bg-white/30 border border-white/10 rounded-full text-white text-sm font-medium transition-all active:scale-95">
          Apply Filters
        </button>
      </div>

    </div>
  );
}