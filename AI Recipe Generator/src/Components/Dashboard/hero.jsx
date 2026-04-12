export function RecipeCard() {
  return (
    <div className="w-full md:w-[340px] 
      bg-gradient-to-br from-[#1a1630]/34 via-[#150f2a]/30 to-[#0f0c1e]/90
      backdrop-blur-2xl 
      border border-white
      rounded-2xl overflow-hidden 
      shadow-[0_4px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]
      hover:border-white/50
      hover:shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)]
      transition-all duration-300 group">

      {/* TOP */}
      <div className="flex p-4 gap-4">
        
        {/* Image */}
        <div className="w-[110px] sm:w-[115px] h-[90px] sm:h-[95px] rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800"
            alt="Tomato Cherry Pasta"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div>
            <h3 className="text-white text-sm sm:text-[15px] font-medium leading-snug">
              Tomato Cherry Pasta
            </h3>

            <p className="text-white/55 text-[11px] mt-1.5 leading-snug">
              <span className="text-white/75 font-normal">Ingredients:</span>{" "}
              Pasta, Cherry Tomatoes, Basil, Olive Oil
            </p>
          </div>

          <button className="mt-3 w-fit px-4 py-1.5 
            bg-white/8 hover:bg-white hover:text-black
            border border-white/25 hover:border-transparent
            rounded-full text-white text-[11px] font-normal
            shadow-[0_0_10px_rgba(255,255,255,0.05)]
            hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
            transition-all duration-200 active:scale-95">
            How to Cook
          </button>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-4" />

      {/* BOTTOM STATS */}
      <div className="grid grid-cols-4">
        {[
          { label: "Time", value: "1h" },
          { label: "Servings", value: "4" },
          { label: "Calories", value: "650" },
          { label: "Cost", value: "$$" },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center py-3
            ${i !== 3 ? "border-r border-white/10" : ""} 
            hover:bg-white/5 transition-all`}
          >
            <span className="text-[9px] text-white/40 uppercase tracking-wider font-normal">
              {item.label}
            </span>
            <span className="text-white/90 text-xs font-normal mt-1">
              {item.value}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}