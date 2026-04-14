import { useState, useEffect } from "react";
import { Dashnav, Status } from "./navbar"; 
import { RecipeCard } from "./hero";
import { DishFilter } from "./filters";
import { Footer } from "./footer";
import { MobileSearchBar } from "./navbar";
import { ProfileModal } from "./ProfileModal";
import { LibraryModal } from "./LibraryModal";
import { RecipeModal } from "./RecipeModal"; 

export function DashBoard() {
  // --- 👤 1. USER PROFILE ---
  const [userData, setUserData] = useState(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        return {
          name: parsed.username || "Manas Patidar",
          id: parsed.id || "AI-ROB-2026",
          isVerified: true,
          avatar: `https://ui-avatars.com/api/?name=${parsed.username || "Manas"}&background=7b2ff7&color=fff`
        };
      } catch (e) { console.error(e); }
    }
    return { name: "Guest User", id: "000", isVerified: false };
  });

  // --- 📚 2. LIBRARY ---
  const [savedRecipes, setSavedRecipes] = useState(() => {
    const localSaved = localStorage.getItem("myLibrary");
    return localSaved ? JSON.parse(localSaved) : [];
  });

  // --- 🖥️ 3. UI STATES ---
  const [showFilter, setShowFilter] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedCount, setSavedCount] = useState(savedRecipes.length);
  const [currentCuisine, setCurrentCuisine] = useState("Indian");

  // --- 🔥 4. MODAL STATES (Now at Top Level) ---
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("myLibrary", JSON.stringify(savedRecipes));
    setSavedCount(savedRecipes.length);
  }, [savedRecipes]);

  const isRecipeSaved = (id) => savedRecipes.some(r => r.idMeal === id);

  // --- 🌍 5. ADVANCED FETCH LOGIC ---
  const fetchAdvancedRecipes = async (cuisine = "Indian", mealType = "", preference = "") => {
    setLoading(true);
    setCurrentCuisine(cuisine);
    try {
      const areaUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`;
      const [areaRes, catRes] = await Promise.all([
        fetch(areaUrl),
        preference === "Veg" 
          ? fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
          : mealType 
            ? fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealType}`)
            : Promise.resolve(null)
      ]);

      const areaData = await areaRes.json();
      let areaMeals = areaData.meals || [];
      let filteredResults = areaMeals;

      if (catRes) {
        const catData = await catRes.json();
        const catMeals = catData.meals || [];
        if (catMeals.length > 0) {
          const intersection = areaMeals.filter(am => 
            catMeals.some(cm => cm.idMeal === am.idMeal)
          );
          if (intersection.length > 0) {
            filteredResults = intersection;
          } else {
            filteredResults = catMeals; 
            setCurrentCuisine(`${cuisine} Style ${preference || mealType}`);
          }
        }
      }
      const shuffled = [...filteredResults].sort(() => Math.random() - 0.5);
      setRecipes(shuffled.slice(0, 18));
    } catch (error) {
      console.error("Filter Error:", error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  // --- 🍲 6. MODAL FETCH LOGIC ---
  const handleOpenModal = async (mealId) => {
    setLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await res.json();
      setSelectedRecipe(data.meals[0]);
      setIsModalOpen(true);
    } catch (e) {
      console.error("Modal Fetch Error", e);
    } finally {
      setLoading(false);
    }
  };

  // --- 🔍 7. SEARCH LOGIC ---
  const handleSearch = async (query) => {
    if (!query) return;
    setLoading(true);
    setCurrentCuisine(`Search: ${query}`);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) { fetchAdvancedRecipes(); }
    finally { setLoading(false); }
  };

  const handleSaveToggle = (recipe, isSaved) => {
    if (isSaved) setSavedRecipes(prev => [...prev, recipe]);
    else setSavedRecipes(prev => prev.filter(r => r.idMeal !== recipe.idMeal));
  };

  const handleLogout = () => {
    localStorage.removeItem("myLibrary");
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "/";
  };

  useEffect(() => { fetchAdvancedRecipes("Indian"); }, []);

  return (
    <div className="min-h-screen px-4 md:px-6 relative pb-10" 
         style={{ backgroundImage: "url('/banner.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      
      <Dashnav 
        userData={userData} 
        activeCategory={currentCuisine}
        onSurpriseMe={() => fetchAdvancedRecipes()} 
        onSearch={handleSearch} 
        onLibraryClick={() => setIsLibraryOpen(true)} 
        onProfileClick={() => setIsProfileOpen(true)} 
        onCategoryClick={(cat) => fetchAdvancedRecipes(cat)} 
      />
      
      <MobileSearchBar onSearch={handleSearch} />
      <hr className="my-4 border-white/20" />
      
      <Status 
        total={recipes.length} 
        favCuisine={currentCuisine} 
        saved={savedCount} 
        onFilterClick={() => setShowFilter(!showFilter)} 
      />

      {/* 🛠️ FILTER PANEL */}
      {showFilter && (
        <div className="absolute right-4 md:right-10 top-40 z-[100] animate-in slide-in-from-right duration-300">
          <DishFilter 
            onApplyFilters={(cuisine, meal, pref) => fetchAdvancedRecipes(cuisine, meal, pref)} 
            onClose={() => setShowFilter(false)} 
          />
        </div>
      )}

      {/* 🔃 GRID & CARDS */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-40">
           <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
           <p className="text-white mt-4 font-bold animate-pulse text-xs uppercase tracking-widest">AI Syncing Core...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center items-start mb-20 min-h-[400px]">
          {recipes.map((recipe, index) => (
            <RecipeCard 
              key={`${recipe.idMeal}-${index}`} 
              recipe={recipe} 
              saved={isRecipeSaved(recipe.idMeal)} 
              onSave={(isSaved) => handleSaveToggle(recipe, isSaved)} 
              onCookClick={() => handleOpenModal(recipe.idMeal)} // 🔥 Button click linked!
            />
          ))}
        </div>
      )}

      {/* 💎 MODALS & OVERLAYS */}
      <RecipeModal 
        recipe={selectedRecipe} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {isLibraryOpen && (
        <LibraryModal 
          recipes={savedRecipes} 
          onClose={() => setIsLibraryOpen(false)} 
          onRemove={(id) => handleSaveToggle({idMeal: id}, false)} 
          onCookClick={(id) => handleOpenModal(id)}
        />
      )}
      
      {isProfileOpen && (
        <ProfileModal user={userData} onClose={() => setIsProfileOpen(false)} onLogout={handleLogout} />
      )}
      
      <Footer />
    </div>
  );
}