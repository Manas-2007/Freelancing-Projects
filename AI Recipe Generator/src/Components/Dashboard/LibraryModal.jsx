import { FaTimes, FaTrashAlt, FaClock, FaStar, FaPlay, FaArchive } from "react-icons/fa";
import { motion } from "framer-motion";

export function LibraryModal({ recipes, onClose, onRemove, onCookClick }) {
  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-2 md:p-6 overflow-hidden">
      
      {/* 🌌 Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* 💎 Premium Compact Container */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-5xl h-[80vh] bg-cover bg-center rounded-[30px] border border-white shadow-2xl overflow-hidden flex flex-col"
        style={{ backgroundImage: "url('/banner.jpg')" }} 
      >
        <div className="absolute inset-0 bg-[#060610]/90 backdrop-blur-[30px]" />

        {/* Header - Compact */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white bg-white/5">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
                <FaArchive className="text-blue-500 text-sm" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-lg font-black tracking-tighter uppercase italic leading-none">
                Recipe <span className="text-blue-500">Vault</span>
              </h2>
              <span className="text-white/30 text-[9px] tracking-[0.3em] font-bold uppercase mt-1">
                {recipes.length} SECURED ASSETS
              </span>
            </div>
          </div>
          
          <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:bg-red-500/80 hover:text-white transition-all active:scale-90">
            <FaTimes size={16} />
          </button>
        </div>

        {/* 📋 Compact List */}
        <div className="relative z-10 flex-1 overflow-y-auto p-4 md:p-6 custom-scroll-premium">
          <div className="space-y-3">
            {recipes.length > 0 ? (
              recipes.map((recipe, index) => (
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.03 }}
                  key={recipe.idMeal} 
                  className="group flex flex-row items-center gap-4 p-3 bg-white/[0.03] border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300"
                >
                  {/* 1. Thumbnail - Smaller */}
                  <div className="relative w-24 h-18 md:w-28 md:h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                    <img src={recipe.strMealThumb} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                  </div>

                  {/* 2. Content - Tight Font */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-[15px] font-bold tracking-tight truncate">
                      {recipe.strMeal}
                    </h3>
                    
                    <div className="flex items-center gap-4 mt-1.5">
                      <div className="flex items-center gap-1.5 text-white/30 text-[9px] font-black uppercase">
                        <FaClock className="text-blue-500/50" /> 30M
                      </div>
                      <div className="flex items-center gap-1.5 text-yellow-500/50 text-[9px] font-black uppercase">
                        <FaStar /> 4.9
                      </div>
                      <span className="hidden md:block text-[9px] text-blue-400/60 font-black uppercase tracking-widest border-l border-white/10 pl-4">
                        {recipe.strCategory || "Main"}
                      </span>
                    </div>
                  </div>

                  {/* 3. Actions - Colors Adjusted */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => { onCookClick(recipe.idMeal); onClose(); }}
                      className="h-9 px-4 bg-green-600 hover:bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-green-900/20 active:scale-95"
                    >
                      <FaPlay size={7} /> <span className="hidden sm:inline">Initiate</span>
                    </button>
                    
                    <button 
                      onClick={() => onRemove(recipe.idMeal)}
                      className="w-9 h-9 md:w-auto md:px-4 bg-red-600/90 hover:bg-red-500 text-white text-[10px] font-black uppercase rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <FaTrashAlt size={11} /> <span className="hidden md:inline">Delete</span>
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="h-[40vh] flex items-center justify-center text-white/10 tracking-[0.5em] text-[9px] font-black uppercase">
                Vault Empty
              </div>
            )}
          </div>
        </div>

        {/* Status Line - Very Small */}
        <div className="relative z-10 px-8 py-3 bg-black/40 border-t border-white/5 flex justify-between text-[8px] text-white/20 font-mono tracking-widest">
           <span>SYSTEM_READY</span>
           <span>SECURE_DATA_NODE</span>
        </div>

      </motion.div>

      <style>{`
        .custom-scroll-premium::-webkit-scrollbar { width: 3px; }
        .custom-scroll-premium::-webkit-scrollbar-thumb { 
          background: #3b82f6; 
          border-radius: 10px; 
        }
      `}</style>
    </div>
  );
}