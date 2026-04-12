import { useState } from "react";
import { Dashnav, Status } from "./navbar";
import { RecipeCard } from "./hero";
import { DishFilter } from "./filters";
import { Footer } from "./footer";
import { MobileSearchBar } from "./navbar";

export function DashBoard() {

  const [showFilter, setShowFilter] = useState(false);
  const dishes = Array.from({ length: 25 });

  return (
    <div
      className="min-h-screen px-4 md:px-6 relative"
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Dashnav />
      <MobileSearchBar></MobileSearchBar>

      <hr className="my-4 border-white/20" />

      <Status onFilterClick={() => setShowFilter(!showFilter)} />

      {/* FLOATING FILTER PANEL */}
      {showFilter && (
        <div className="absolute right-4 md:right-6 top-32 z-50 w-[calc(100%-2rem)] sm:w-auto">
          <div className="relative">
            <button
              onClick={() => setShowFilter(false)}
              className="absolute -top-3 -right-3 bg-white/20 text-white rounded-full w-6 h-6 z-10"
            >
              ✕
            </button>
            <DishFilter />
          </div>
        </div>
      )}

      {/* RECIPE GRID — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center">
        {dishes.map((_, i) => (
          <RecipeCard key={i} />
        ))}
      </div>

      <Footer />

    </div>
  );
}