import { motion, AnimatePresence } from "framer-motion";

export function RecipeModal({ recipe, isOpen, onClose }) {
  if (!isOpen || !recipe) return null;

  const getIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      const meas = recipe[`strMeasure${i}`];
      if (ing && ing.trim() !== "") {
        ingredients.push(`${meas ? meas.trim() : ""} ${ing.trim()}`);
      }
    }
    return ingredients;
  };

  const getCleanInstructions = () => {
    return recipe.strInstructions
      .split(/\r?\n/)
      .filter(step => step.trim() !== "" && !/^\d+\.?\s*$/.test(step))
      .map(step => step.replace(/^\d+\.\s*/, "").trim());
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-6 overflow-hidden">
        
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md no-print"
        />

        {/* Modal Container */}
        <motion.div 
          id="printable-area"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-6xl h-[92vh] md:h-[88vh] bg-cover bg-center rounded-[40px] overflow-hidden shadow-2xl border border-white flex flex-col md:flex-row"
          style={{ backgroundImage: "url('/banner.jpg')" }} 
        >
          {/* 🔥 Enhanced Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-[#0b0b15]/85 backdrop-blur-[40px] no-print" />

          {/* Close Button */}
          <button onClick={onClose} className="absolute top-5 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/80 flex items-center justify-center text-white border border-white/10 no-print transition-all duration-300 active:scale-90">
            ✕
          </button>

          {/* LEFT SECTION: Visuals & Branding */}
          <div className="relative md:w-[40%] flex flex-col items-center p-8 md:p-12 z-10 border-b md:border-b-0 md:border-r border-white">
             <div className="mb-10 w-full text-center">
                <h2 className="text-white text-3xl md:text-5xl font-[400] tracking-tighter uppercase leading-none drop-shadow-2xl">
                  {recipe.strMeal}
                </h2>
                <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
             </div>

             <div className="w-full max-w-[340px] md:max-w-full aspect-square rounded-[40px] md:rounded-[55px] overflow-hidden border-2 border-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
             </div>

             <button 
               onClick={handlePrint}
               className="mt-12 w-full max-w-[280px] py-4.5 bg-green-700 text-white font-[500] text-[16px] tracking-[0.2em] rounded-2xl transition-all duration-300 no-print shadow-[0_0_25px_rgba(21,128,61,0.4)] hover:shadow-[0_0_40px_rgba(21,128,61,0.6)] hover:scale-105 active:scale-95 uppercase"
             >
                Download PDF 📄
             </button>
          </div>

          {/* RIGHT SECTION: Content Details */}
         <div className="relative md:w-[60%] p-6 md:p-14 z-10 flex flex-col h-full min-h-0">
            
    {/* Ingredients Section: Compact & Minimized */}
    <section className="mb-4 flex-shrink-0">
      <h3 className="text-[13px] font-[600] text-green-500 tracking-[0.3em] mb-3 uppercase opacity-90 flex items-center gap-3">
        <span className="w-8 h-px bg-green-500/50"></span> Core Ingredients
      </h3>
      <div className="flex flex-wrap gap-2 max-h-[110px] overflow-y-auto pr-2 custom-scrollbar-modal">
        {getIngredients().map((ing, idx) => (
          <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white rounded-xl text-[11px] text-white/90 font-light transition-all hover:bg-white/10">
            {ing}
          </span>
        ))}
      </div>
    </section>

    {/* 🔥 Execution Steps: Max Height Increment */}
    <section className="flex-1 flex flex-col min-h-0 mb-2">
      <h3 className="text-[13px] font-[600] text-green-500 tracking-[0.3em] mb-3 uppercase opacity-90 flex items-center gap-3 flex-shrink-0">
        <span className="w-8 h-px bg-green-500/50"></span> Execution Steps
      </h3>
      <div className="flex-1 overflow-y-auto pr-4 space-y-1 custom-scrollbar-modal bg-white/5 rounded-[32px] p-7 border border-white">
        {getCleanInstructions().map((step, i) => (
          <div key={i} className="flex gap-5 p-4 hover:bg-white/5 rounded-2xl transition-all duration-300 group border-b border-white/5 last:border-0">
            <span className="text-xl font-black text-green-500/20 group-hover:text-green-500 transition-colors duration-300">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-[14px] text-white/80 leading-relaxed font-light">
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
</div>
        </motion.div>

        {/* Global CSS */}
        <style>{`
          .custom-scrollbar-modal::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar-modal::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.custom-scrollbar-modal::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #3b82f6, #60a5fa);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
}

.custom-scrollbar-modal::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #2563eb, #3b82f6);
  box-shadow: 0 0 14px rgba(59, 130, 246, 0.6);
}
        `}</style>
      </div>
    </AnimatePresence>
  );
}