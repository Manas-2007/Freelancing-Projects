import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import html2pdf from "html2pdf.js";

export function RecipeModal({ recipe, isOpen, onClose }) {
  // 🛡️ Safety Check
  if (!isOpen || !recipe) return null;

  const [mobileTab, setMobileTab] = useState("ingredients");

  const getIngredients = () => {
    let ingredients = [];
    try {
      for (let i = 1; i <= 20; i++) {
        const ing = recipe[`strIngredient${i}`];
        const meas = recipe[`strMeasure${i}`];
        if (ing && ing.trim() !== "") {
          ingredients.push(`${meas ? meas.trim() : ""} ${ing.trim()}`);
        }
      }
    } catch (err) {
      console.error("Ingredients parsing error:", err);
    }
    return ingredients;
  };

  const getCleanInstructions = () => {
    if (!recipe.strInstructions) return ["No instructions available."];
    return recipe.strInstructions
      .split(/\r?\n/)
      .filter(step => step && step.trim() !== "" && !/^\d+\.?\s*$/.test(step))
      .map(step => step.replace(/^\d+\.\s*/, "").trim());
  };

  //Download Logic
 const handleDownloadPDF = async () => {
  const element = document.getElementById("pdf-content");

  if (!element) {
    console.error("PDF element not found");
    return;
  }

  // 👇 Force visible (CRITICAL FIX)
  element.style.display = "block";

  // 👇 Wait for DOM + images to render properly
  await new Promise(resolve => setTimeout(resolve, 500));

  const opt = {
    margin: 10,
    filename: `${recipe.strMeal}_Recipe.pdf`,
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: true,
      backgroundColor: "#ffffff"
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  };

  await html2pdf().set(opt).from(element).save();

  // 👇 Hide again after download
  element.style.display = "none";
};

  const ingredients = getIngredients();
  const steps = getCleanInstructions();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[250] flex items-center justify-center p-3 md:p-6 overflow-hidden">
        
        {/* 🌌 Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/95 backdrop-blur-sm no-print"
        />

        {/* 💎 Premium Floating Container */}
        <motion.div 
          id="printable-area"
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          className="relative w-full max-w-5xl h-[90vh] md:h-[88vh] bg-[#0c0c1e] rounded-[32px] md:rounded-[45px] overflow-hidden border border-white shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
          style={{ backgroundImage: "url('/banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} 
        >
          {/* Enhanced Glass Overlay */}
          <div className="absolute inset-0 bg-[#0c0c1e]/90 md:bg-[#0c0c1e]/85 backdrop-blur-[35px] no-print" />

          {/* ❌ Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-3 right-3 md:top-6 md:right-6 z-[80] w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/5 hover:bg-red-500/80 flex items-center justify-center text-white border border-white/80 transition-all active:scale-90"
          >✕</button>

        
          {/* 🖼️ Left: Visual Content — desktop only */}
          <div className="hidden md:flex relative w-full md:w-[35%] flex-col items-center p-10 z-10 border-r border-white/5 shrink-0">
            <div className="mb-8 text-center px-4">
              <h2 className="text-white text-3xl font-[600] tracking-tight leading-tight line-clamp-2">
                {recipe.strMeal}
              </h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto mt-3 rounded-full shadow-[0_0_15px_#3b82f6]" />
            </div>

            <div className="w-full aspect-square rounded-[48px] overflow-hidden border border-white shadow-2xl">
              <img 
                src={recipe.strMealThumb} 
                crossOrigin="anonymous"
                alt={recipe.strMeal} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=No+Image"; }}
              />
            </div>
            <button 
              onClick={handleDownloadPDF}
              className="mt-10 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-[500] text-[13px] tracking-[0.2em] rounded-xl transition-all shadow-lg active:scale-95 no-print"
            >
              Download Recipe
            </button>
          </div>

          {/* 📝 Right: Detailed Content — desktop only */}
          {/* 📝 Right: Ingredients + Steps — desktop */}
<div className="hidden md:flex relative w-full md:w-[65%] p-6 gap-6 z-10 flex-1 min-h-0">

  {/* 🧂 Ingredients Panel */}
  <div className="w-[40%] flex flex-col min-h-0">
    <h3 className="text-[12px] font-black text-green-500 tracking-[0.3em] mb-4 uppercase flex items-center gap-3 shrink-0">
      <span className="w-8 h-px bg-green-500/40"></span> Ingredients
    </h3>

    <div className="flex-1 overflow-y-auto custom-scroll bg-black/40 rounded-[24px] p-5 border border-white/10 space-y-3">
      {ingredients.length === 0 ? (
        <p className="text-white/40 text-sm text-center py-8">No ingredients found.</p>
      ) : (
        ingredients.map((ing, i) => (
          <div key={i} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
            <span className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 text-[10px] font-black shrink-0 mt-0.5">
              {i + 1}
            </span>
            <p className="text-[13px] text-white/80 leading-relaxed">{ing}</p>
          </div>
        ))
      )}
    </div>
  </div>

  {/* 📋 Steps Panel */}
  <div className="w-[60%] flex flex-col min-h-0">
    <h3 className="text-[12px] font-black text-blue-500 tracking-[0.3em] mb-4 uppercase flex items-center gap-3 shrink-0">
      <span className="w-8 h-px bg-blue-500/40"></span> Steps
    </h3>

    <div className="flex-1 overflow-y-auto custom-scroll bg-black/40 rounded-[24px] p-5 border border-white/10 space-y-4">
      {steps.map((step, i) => (
        <div 
          key={i} 
          className="flex gap-4 py-3 border-b border-white/5 last:border-0 items-start group"
        >
          <span className="text-lg font-black text-blue-500/40 group-hover:text-blue-500 transition-colors shrink-0 mt-1">
            {String(i + 1).padStart(2, '0')}
          </span>
          <p className="text-[13px] text-white/70 leading-relaxed group-hover:text-white transition-colors">
            {step}
          </p>
        </div>
      ))}
    </div>
  </div>

</div>

          {/* ============================================================ */}
          {/* 📱 MOBILE LAYOUT — full redesign with tabs                   */}
          {/* ============================================================ */}
          <div className="flex md:hidden relative z-10 flex-col w-full h-full">

            {/* Header: image + title */}
            <div className="flex items-center gap-4 px-5 pt-5 pb-4 shrink-0 border-b border-white/10">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/30 shrink-0 shadow-lg">
                <img 
                  src={recipe.strMealThumb} 
                  alt={recipe.strMeal}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=No+Image"; }}
                />
              </div>
              <div className="flex-1 min-w-0 pr-8">
                <h2 className="text-white text-[17px] font-semibold leading-snug line-clamp-2 tracking-tight">
                  {recipe.strMeal}
                </h2>
                <div className="h-[3px] w-14 bg-blue-500 mt-2 rounded-full shadow-[0_0_10px_#3b82f6]" />
              </div>
            </div>

            {/* Tab Bar */}
            <div className="flex shrink-0 px-5 pt-4 gap-3">
              <button
                onClick={() => setMobileTab("ingredients")}
                className={`flex-1 py-2.5 rounded-xl text-[12px] font-bold tracking-[0.15em] uppercase transition-all border ${
                  mobileTab === "ingredients"
                    ? "bg-green-600/80 border-green-500 text-white shadow-[0_0_12px_rgba(34,197,94,0.3)]"
                    : "bg-white/5 border-white/10 text-white/40 hover:text-white/70"
                }`}
              >
                🧂 Ingredients
              </button>
              <button
                onClick={() => setMobileTab("steps")}
                className={`flex-1 py-2.5 rounded-xl text-[12px] font-bold tracking-[0.15em] uppercase transition-all border ${
                  mobileTab === "steps"
                    ? "bg-blue-600/80 border-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 border-white/10 text-white/40 hover:text-white/70"
                }`}
              >
                📋 Steps
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 min-h-0 px-5 py-4">

              {/* Ingredients Tab */}
              {mobileTab === "ingredients" && (
                <div className="h-full overflow-y-auto custom-scroll bg-black/40 rounded-2xl border border-white/10 p-4 space-y-2">
                  {ingredients.length === 0 ? (
                    <p className="text-white/40 text-sm text-center py-8">No ingredients found.</p>
                  ) : (
                    ingredients.map((ing, i) => (
                      <div key={i} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 text-[10px] font-black shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-[14px] text-white/85 leading-relaxed font-medium">{ing}</p>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Steps Tab */}
              {mobileTab === "steps" && (
                <div className="h-full overflow-y-auto custom-scroll bg-black/40 rounded-2xl border border-white/10 p-4 space-y-3">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 py-3 border-b border-white/30 last:border-0 items-start">
                      <span className="text-[15px] font-black text-blue-500/50 shrink-0 mt-0.5 min-w-[28px]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[14px] text-white/85 leading-relaxed font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom: Download button */}
            <div className="shrink-0 px-5 pb-5 no-print">
              <button
                onClick={handleDownloadPDF}
                className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold text-[13px] tracking-[0.15em] rounded-xl transition-all shadow-lg active:scale-95"
              >
                Download Recipe
              </button>
            </div>
          </div>

        </motion.div>

        {/* CSS */}
        <style>{`
          .custom-scroll::-webkit-scrollbar { width: 3px; }
          .custom-scroll::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.5); border-radius: 10px; }
          @media (max-width: 768px) {
            .custom-scroll::-webkit-scrollbar { width: 2px; }
          }
          @media print {
            .no-print { display: none !important; }
            body { background: white !important; }
            #printable-area { border: none !important; box-shadow: none !important; height: auto !important; }
          }
        `}</style>
      </div>

      {/* 📄 Hidden PDF Layout */}

<div id="pdf-content" style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>

  {/* 🖼️ Hero Section */}
  <div style={{ position: "relative", marginBottom: "20px" }}>
    <img 
      src={recipe.strMealThumb}
      crossOrigin="anonymous"
      alt={recipe.strMeal}
      style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "12px" }}
    />
    <h1 style={{
      position: "absolute",
      bottom: "10px",
      left: "15px",
      color: "white",
      background: "rgba(0,0,0,0.6)",
      padding: "6px 12px",
      borderRadius: "8px",
      fontSize: "20px"
    }}>
      {recipe.strMeal}
    </h1>
  </div>

  {/* 🧂 Ingredients Card */}
  <div style={{
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px"
  }}>
    <h2 style={{ marginBottom: "10px", color: "#16a34a" }}>Ingredients</h2>
    <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
      {ingredients.map((ing, i) => (
        <li key={i} style={{ marginBottom: "6px" }}>{ing}</li>
      ))}
    </ul>
  </div>

  {/* 📋 Steps Card */}
  <div style={{
    background: "#eef2ff",
    padding: "15px",
    borderRadius: "12px"
  }}>
    <h2 style={{ marginBottom: "10px", color: "#2563eb" }}>Steps</h2>
    <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }}>
      {steps.map((step, i) => (
        <li key={i} style={{ marginBottom: "10px", lineHeight: "1.6" }}>
          {step}
        </li>
      ))}
    </ol>
  </div>

</div>

    </AnimatePresence>
  );
}
