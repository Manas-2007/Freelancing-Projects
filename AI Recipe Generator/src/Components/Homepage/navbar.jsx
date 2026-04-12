import { useState } from "react";
import { InfoModal } from "./InfoModal";

export function Homenav() {

  const [modal, setModal] = useState(null);

  return (
    <div className="pt-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 bg-white/5 backdrop-blur-md border-y border-white rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] sticky top-4 z-50">

        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-2">
          <img
            src="logo.jpg"
            alt="logo"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
          />
          <span className="text-white text-sm sm:text-lg md:text-[24px] font-semibold">
            AI Recipe
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-4 sm:gap-7 md:gap-12 pr-1 sm:pr-2">

          {["Home", "Features", "About"].map((item) => (
            <button
              key={item}
              onClick={() => setModal(item)}
              className="relative text-white/80 text-xs sm:text-base md:text-[20px] font-medium 
              transition duration-300 hover:text-white hover:scale-105
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-[2px] after:bg-white 
              after:transition-all after:duration-300 
              hover:after:w-full"
            >
              {item}
            </button>
          ))}

        </div>
      </nav>

      {/* 🔥 MODALS */}

      <InfoModal
  isOpen={modal === "Home"}
  onClose={() => setModal(null)}
  title="Home"
>
  <p>
    Welcome to <span className="text-white font-semibold">AI Recipe Generator</span> — a smart and modern platform designed to simplify your cooking experience. 
    Discover new recipes, explore flavors, and turn your everyday ingredients into something truly special.
  </p>

  <p>
    Our goal is to make cooking easy, fast, and enjoyable for everyone — whether you're just starting out or already love experimenting in the kitchen.
  </p>

  <hr className="border-white/20" />

  <p className="text-white/90 font-medium">
    🚀 How it works:
  </p>

  <ul className="list-disc pl-5 space-y-2">
    <li>
      Click on <span className="text-blue-400 font-medium">Get Started</span> to begin your journey.
    </li>
    <li>
      First, you need to <span className="text-blue-400 font-medium">register</span> and create your account.
    </li>
    <li>
      After registration, simply <span className="text-blue-400 font-medium">login</span> to your account.
    </li>
    <li>
      Once logged in, you’ll be redirected to your <span className="text-blue-400 font-medium">Dashboard</span> where you can explore recipes.
    </li>
  </ul>

  <hr className="border-white/20" />

  <p className="text-white/90 font-medium">
    🍽️ Start now and experience cooking in a smarter way.
  </p>
</InfoModal>
<InfoModal
  isOpen={modal === "Features"}
  onClose={() => setModal(null)}
  title="Features"
>
  <p>
    Explore powerful features designed to make your cooking experience smarter and more personalized.
  </p>

  <ul className="list-disc pl-5 space-y-2">
    <li>Wide variety of dishes across multiple cuisines</li>
    <li>AI-powered filters (Indian, Chinese, Italian, Healthy)</li>
    <li>Veg & Non-Veg recipe selection</li>
  </ul>

  <hr className="border-white/20" />

  <p className="text-white/90 font-medium">⚙️ Smart Functionality:</p>

  <ul className="list-disc pl-5 space-y-2">
    <li>Save your favorite recipes for later</li>
    <li>Instant access to personalized recipe suggestions</li>
    <li>Fast and smooth user experience</li>
  </ul>

  <hr className="border-white/20" />

  <p className="text-white/90 font-medium">📥 Extra Features:</p>

  <ul className="list-disc pl-5 space-y-2">
    <li>Download recipes to your device</li>
    <li>Access saved recipes anytime</li>
    <li>Designed for modern, easy cooking</li>
  </ul>

  <hr className="border-white/20" />
</InfoModal>

      <InfoModal
  isOpen={modal === "About"}
  onClose={() => setModal(null)}
  title="About"
>
  <p>
    This project is developed by <span className="text-white font-semibold">Manas Patidar</span>, a B.Tech student specializing in AI Engineering from MITS Gwalior.
  </p>

  <p>
    Passionate about technology, focuses on building modern and user-friendly digital experiences that combine creativity with real-world problem solving.
  </p>

  <ul className="list-disc pl-5 space-y-2">
    <li>Strong interest in Artificial Intelligence & Full Stack Web Development</li>
    <li>Exploring Financial Intelligence </li>
    <li>Driven towards Entrepreneurship and innovative thinking</li>
  </ul>

  <hr className="border-white/20" />

  <p>
    This platform reflects his vision of creating smart, efficient, and impactful applications that enhance everyday life through technology.
  </p>

  <hr className="border-white/20" />
</InfoModal>

    </div>
  );
}