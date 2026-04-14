import { useState } from "react";

export function DishFilter({ onApplyFilters, onClose }) { // 🔥 Changed prop name
  const [time, setTime] = useState(60);
  const [selectedCuisine, setSelectedCuisine] = useState("Indian"); // Default Indian rakho
  const [selectedMeal, setSelectedMeal] = useState("");
  const [preference, setPreference] = useState("");

  const handleApply = () => {
    // 🔥 Ab hum teeno cheezein Dashboard ko bhej rahe hain
    onApplyFilters(selectedCuisine, selectedMeal, preference);
    onClose(); 
  };

  
  return (
    <div className="w-full sm:w-[280px] bg-[#0e0e1f]/90 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl p-5 text-white space-y-5 animate-in slide-in-from-right duration-300">

      {/* Title */}
      <div className="flex justify-between items-center border-b border-white/10 pb-3">
        <h2 className="text-base font-bold tracking-wide text-white font-mono uppercase tracking-[0.2em]">Core Filters</h2>
        <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">✕</button>
      </div>

      {/* Cuisine Type */}
      <div>
        <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.18em] mb-3 font-mono">Cuisine Domain</p>
        <div className="flex flex-wrap gap-2">
          {["Indian", "Chinese", "Mexican", "Italian", "Japanese"].map((c) => (
            <button key={c}
              onClick={() => setSelectedCuisine(c)}
              className={`px-3 py-1.5 rounded-full border text-[11px] font-semibold transition-all duration-200 active:scale-95
                ${selectedCuisine === c 
                  ? "bg-white text-black border-transparent shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
                  : "bg-white/[0.06] border-white/15 text-white/80 hover:bg-white/10"}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Meal Type */}
      <div>
        <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.18em] mb-3 font-mono">Meal Timing</p>
        <div className="flex flex-wrap gap-2">
          {["Breakfast", "Lunch", "Dinner", "Dessert"].map((m) => (
            <button key={m}
              onClick={() => setSelectedMeal(prev => prev === m ? "" : m)} // Toggle logic
              className={`px-3 py-1.5 rounded-full border text-[11px] font-semibold transition-all duration-200
                ${selectedMeal === m 
                  ? "bg-blue-500 text-white border-transparent shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
                  : "bg-white/[0.06] border-white/15 text-white/80 hover:bg-white/10"}`}>
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Preference */}
      <div>
        <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.18em] mb-3 font-mono">Dietary Logic</p>
        <div className="flex gap-2">
          <button 
            onClick={() => setPreference(prev => prev === "Veg" ? "" : "Veg")}
            className={`flex-1 py-2 rounded-full text-[11px] font-bold transition-all border
            ${preference === "Veg" ? "bg-green-500 text-white border-transparent shadow-[0_0_15px_rgba(34,197,94,0.4)]" : "bg-green-500/15 border-green-500/40 text-green-400"}`}>
            🥦 Veg
          </button>
          <button 
            onClick={() => setPreference(prev => prev === "Non-Veg" ? "" : "Non-Veg")}
            className={`flex-1 py-2 rounded-full text-[11px] font-bold transition-all border
            ${preference === "Non-Veg" ? "bg-red-500 text-white border-transparent shadow-[0_0_15px_rgba(239,68,68,0.4)]" : "bg-red-500/15 border-red-500/40 text-red-400"}`}>
            🍖 Non-Veg
          </button>
        </div>
      </div>

      {/* Apply Button */}
      <div className="pt-2">
        <button 
          onClick={handleApply}
          className="w-full py-3 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300">
          Apply Logic
        </button>
      </div>
    </div>
  );
}