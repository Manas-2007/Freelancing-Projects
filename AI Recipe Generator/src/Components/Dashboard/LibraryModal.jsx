import { FaTimes, FaTrashAlt, FaClock, FaStar, FaUtensils, FaPlay } from "react-icons/fa";

export function LibraryModal({ recipes, onClose, onRemove,onCookClick }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      {/* 🌌 Solid Backdrop for Focus */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      {/* 💎 Crystal Blue Glass Container */}
      <div className="relative w-full max-w-5xl h-[80vh] bg-blue-950/40 backdrop-blur-3xl border border-white/20 rounded-[35px] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Header Section */}
        <div className="flex items-center justify-between px-10 py-7 border-b border-white/10 bg-white/5">
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-medium tracking-tight">MY COLLECTION</h2>
            <span className="text-blue-400 text-[10px] tracking-[0.3em] mt-1 font-bold">
              {recipes.length} SAVED RECIPES
            </span>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-red-500 hover:text-white transition-all border border-white/10"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* 📋 Dishes List with Custom Scrollbar */}
        <div className="flex-1 overflow-y-auto p-6 sm:px-10 space-y-4 scrollbar-thin scrollbar-thumb-blue-500/40 scrollbar-track-transparent">
          {/* Inline CSS for Custom Scrollbar (Theme Based) */}
          <style>{`
            .custom-scroll::-webkit-scrollbar { width: 6px; }
            .custom-scroll::-webkit-scrollbar-track { background: transparent; }
            .custom-scroll::-webkit-scrollbar-thumb { 
              background: rgba(59, 130, 246, 0.3); 
              border-radius: 20px; 
            }
            .custom-scroll::-webkit-scrollbar-thumb:hover { background: rgba(59, 130, 246, 0.6); }
          `}</style>

          <div className="custom-scroll overflow-y-auto h-full pr-2 space-y-4">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <div 
                  key={recipe.idMeal} 
                  className="flex flex-col sm:flex-row items-center gap-5 p-4 bg-white/[0.05] border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all group"
                >
                  {/* 1. Image */}
                  <div className="w-full sm:w-36 h-28 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
                    <img src={recipe.strMealThumb} className="w-full h-full object-cover" alt="" />
                  </div>

                  {/* 2. Middle Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-[17px] font-semibold tracking-wide truncate">
                      {recipe.strMeal}
                    </h3>
                    <p className="text-white/60 text-[11px] mt-1 line-clamp-1 font-medium">
                      Ingredients: Fresh produce, AI selected spices, Herbs...
                    </p>

                    <div className="flex items-center gap-5 mt-3">
                      <div className="flex items-center gap-1.5 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                        <FaClock /> ~30M
                      </div>
                      <div className="flex items-center gap-1.5 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                        <FaUtensils /> {recipe.strCategory || "DISH"}
                      </div>
                      <div className="flex items-center gap-1.5 text-yellow-400 text-[10px] font-bold uppercase tracking-wider">
                        <FaStar /> 4.8
                      </div>
                    </div>
                  </div>

                    {/* 3. Right Side Buttons (Stacked) */}
              <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto">
                <button 
                  onClick={() => {
                    onCookClick(recipe.idMeal); // 🔥 RecipeModal open karne ke liye
                    onClose(); // Library band karne ke liye (Optional, clean UI ke liye)
                  }}
                  className="flex-1 sm:w-32 py-2 bg-white/10 hover:bg-white hover:text-black border border-white/20 rounded-xl text-white text-[10px] font-bold uppercase transition-all flex items-center justify-center gap-2"
                >
                  <FaPlay size={8} /> Cook
                </button>
                
                <button 
                  onClick={() => onRemove(recipe.idMeal)}
                  className="flex-1 sm:w-32 py-2 bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20"
                >
                  <FaTrashAlt size={10} /> Remove
                </button>
              </div>
                </div>
              ))
            ) : (
              <div className="h-full flex items-center justify-center opacity-30 text-white tracking-widest uppercase text-xs">
                Your library is empty
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}