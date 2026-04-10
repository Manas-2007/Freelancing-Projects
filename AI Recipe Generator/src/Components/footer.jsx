export function Footer() {
  return (
    <footer className="mt-2 border-t border-white/10 bg-white/5 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* 🔹 Left - Branding */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src="logo.jpg"
              alt="logo"
              className="h-10 w-10 object-contain brightness-110 contrast-125"
            />
            <span className="text-white text-[20px] font-semibold">
              AI Recipe
            </span>
          </div>

          <p className="text-white/60 text-[15px] leading-relaxed max-w-sm">
            Generate delicious recipes using AI. Search, explore, and download your favorite meals instantly.
          </p>
        </div>

        {/* 🔹 Middle - Navigation (Same as Navbar) */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-[16px] font-semibold">
            Navigation
          </h3>

          <a href="#" className="relative w-fit text-white/70 hover:text-white transition duration-300
          after:content-[''] after:absolute after:left-0 after:-bottom-1 
          after:w-0 after:h-[2px] after:bg-white 
          after:transition-all after:duration-300 
          hover:after:w-full">
            Home
          </a>

          <a href="#" className="relative w-fit text-white/70 hover:text-white transition duration-300
          after:content-[''] after:absolute after:left-0 after:-bottom-1 
          after:w-0 after:h-[2px] after:bg-white 
          after:transition-all after:duration-300 
          hover:after:w-full">
            Features
          </a>

          <a href="#" className="relative w-fit text-white/70 hover:text-white transition duration-300
          after:content-[''] after:absolute after:left-0 after:-bottom-1 
          after:w-0 after:h-[2px] after:bg-white 
          after:transition-all after:duration-300 
          hover:after:w-full">
            About
          </a>
        </div>

        {/* 🔹 Right - Extra Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-[16px] font-semibold">
            Features
          </h3>

          <p className="text-white/60 text-[15px]">
            ✔ AI Recipe Search  
          </p>
          <p className="text-white/60 text-[15px]">
            ✔ Download Recipes  
          </p>
          <p className="text-white/60 text-[15px]">
            ✔ Fast & Easy UI  
          </p>
        </div>

      </div>

      {/* 🔻 Bottom Line */}
      <div className="border-t border-white/10 text-center py-4 text-white/50 text-[14px]">
        © 2026 AI Recipe Generator. All rights reserved.
      </div>

    </footer>
  );
}