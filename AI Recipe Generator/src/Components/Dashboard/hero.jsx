export function RecipeCard() {
  return (
    <div className="w-full 
      sm:w-full md:w-[340px] 
      bg-white/10 backdrop-blur-xl 
      border border-white/20 
      rounded-2xl overflow-hidden 
      shadow-xl hover:shadow-2xl 
      transition-all duration-300">

      {/* TOP */}
      <div className="flex p-3 gap-3">
        
        <div className="w-[110px] sm:w-[120px] h-[90px] sm:h-[100px] rounded-xl overflow-hidden flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800"
            alt="Tomato Cherry Pasta"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-white text-sm sm:text-base font-semibold">
              Tomato Cherry Pasta
            </h3>

            <p className="text-white/60 text-[11px] sm:text-xs mt-1 leading-snug">
              <span className="text-white/80 font-medium">Ingredients:</span>{" "}
              Pasta, Cherry Tomatoes, Basil, Olive Oil
            </p>
          </div>

          <button className="mt-2 w-fit px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-xs font-medium transition-all active:scale-95">
            How to Cook
          </button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="grid grid-cols-4 bg-white/5 backdrop-blur-md border-t border-white/10">
        
        {[
          { label: "Time", value: "1h" },
          { label: "Servings", value: "4" },
          { label: "Calories", value: "650" },
          { label: "Cost", value: "$$" },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center py-2 
            ${i !== 3 ? "border-r border-white/10" : ""} 
            hover:bg-white/10 transition-all`}
          >
            <span className="text-[10px] text-white/50 uppercase">
              {item.label}
            </span>
            <span className="text-white text-xs font-semibold mt-1">
              {item.value}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}