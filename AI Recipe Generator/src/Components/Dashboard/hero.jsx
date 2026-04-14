import { useState, useEffect } from "react";
import { FaPlus, FaCheck } from "react-icons/fa";

// 🔥 1. Props mein 'onCookClick' add kiya
export function RecipeCard({ recipe, onSave, saved, onCookClick }) { 
  const [ingredients, setIngredients] = useState("");
  const [isSaved, setIsSaved] = useState(saved);

  useEffect(() => {
    setIsSaved(saved);
  }, [saved]);

  const generateRating = (id) => {
    if (!id) return "4.2";
    const factor = (parseInt(id.slice(-2)) % 13) / 10;
    const finalRating = 3.8 + factor;
    return Math.min(finalRating, 5.0).toFixed(1);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
        const data = await res.json();
        const meal = data.meals[0];
        
        let items = [];
        for (let i = 1; i <= 5; i++) {
          if (meal[`strIngredient${i}`]) {
            items.push(meal[`strIngredient${i}`]);
          }
        }
        setIngredients(items.join(", "));
      } catch (err) {
        setIngredients("Spices, Herbs, Veggies");
      }
    };
    if (recipe?.idMeal) fetchDetails();
  }, [recipe?.idMeal]);

  const handleSaveToggle = () => {
    const nextState = !isSaved;
    setIsSaved(nextState);
    if (onSave) onSave(nextState); 
  };

  if (!recipe) return null;
  const rating = generateRating(recipe.idMeal);

  return (
    <div
      className="w-full md:w-[390px] h-fit p-[2.5px] rounded-2xl animate-in fade-in duration-500"
      style={{
        background: "linear-gradient(90deg, #ff0080, #7b2ff7, #40e0d0, #ff8c00, #ff0080)",
        backgroundSize: "200% 100%",
        animation: "borderGlow 3s linear infinite",
        boxShadow: "0 0 20px rgba(123,47,247,0.3), 0 0 40px rgba(255,0,128,0.12)",
      }}
    >
      <div className="w-full bg-gradient-to-br from-[#1a1630]/95 via-[#150f2a]/95 to-[#0f0c1e]/95 backdrop-blur-2xl rounded-[14px] overflow-hidden group">
        <div className="flex p-4 gap-4">
          
          <div className="w-[110px] sm:w-[115px] h-[105px] sm:h-[110px] rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div>
              <h3 className="text-white text-sm sm:text-[15px] font-bold leading-tight truncate">
                {recipe.strMeal}
              </h3>
              <p className="text-white/55 text-[10px] sm:text-[11px] mt-1.5 line-clamp-2">
                <span className="text-white/75 font-semibold">Ingredients:</span> {ingredients || "Analyzing..."}
              </p>
            </div>

            <div className="flex gap-2 mt-3">
              {/* 🔥 2. OnClick event add kiya */}
              <button 
                onClick={onCookClick} 
                className="flex-1 px-3 py-1.5 bg-white/10 hover:bg-white hover:text-black border border-white/20 rounded-full text-white text-[10px] font-bold transition-all duration-300"
              >
                How to Cook
              </button>
              
              <button 
                onClick={handleSaveToggle}
                className={`px-3 py-1.5 rounded-full border flex items-center gap-1.5 text-[10px] font-bold transition-all duration-300 ${
                  isSaved 
                  ? "bg-green-500/20 border-green-500 text-green-400" 
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {isSaved ? <FaCheck className="animate-bounce" /> : <FaPlus />}
                {isSaved ? "Added" : "Library"}
              </button>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-4" />

        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center py-3 border-r border-white/10">
            <span className="text-[9px] text-white/40 uppercase tracking-widest">Time</span>
            <span className="text-white/90 text-xs font-bold mt-1">~30m</span>
          </div>
          <div className="flex flex-col items-center py-3 border-r border-white/10">
            <span className="text-[9px] text-white/40 uppercase tracking-widest">Type</span>
            <span className="text-white/90 text-xs font-bold mt-1 truncate px-1">{recipe.strCategory || "Main"}</span>
          </div>
          <div className="flex flex-col items-center py-3">
            <span className="text-[9px] text-white/40 uppercase tracking-widest">Rating</span>
            <span className="text-white/90 text-xs font-bold mt-1">⭐ {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}