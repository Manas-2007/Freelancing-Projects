import { useState } from "react";
import { Dashnav, Status } from "./navbar";
import { RecipeCard } from "./hero";
import { DishFilter } from "./filters";
import { Footer } from "./footer";

export function DashBoard() {

  const [showFilter, setShowFilter] = useState(false);
  const dishes = Array.from({ length: 25 });

  return (
    <div
      className="min-h-screen px-6 relative"
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Dashnav />

      <hr className="my-4 border-white/20" />

      {/* ✅ STATUS WITH WORKING FILTER */}
      <Status onFilterClick={() => setShowFilter(!showFilter)} />

      {/* ✅ FLOATING FILTER PANEL */}
      {showFilter && (
        <div className="absolute right-6 top-32 z-50">
          <div className="relative">
            <button
              onClick={() => setShowFilter(false)}
              className="absolute -top-3 -right-3 bg-white/20 text-white rounded-full w-6 h-6"
            >
              ✕
            </button>

            <DishFilter />
          </div>
        </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-3 gap-8 justify-items-center">
        {dishes.map((_, i) => (
          <RecipeCard key={i} />
        ))}
      </div>

      <Footer></Footer>

    </div>
  );
}