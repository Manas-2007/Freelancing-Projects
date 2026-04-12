export function Homenav() {
  return (
    <div className="pt-4">
      <nav
        className="max-w-7xl mx-auto 
        flex items-center justify-between 
        px-4 sm:px-6 md:px-10 py-3 md:py-4 
        bg-white/5 backdrop-blur-md 
        border-y border-white
        rounded-xl
        shadow-[0_0_20px_rgba(255,255,255,0.05)]
        sticky top-4 z-50"
      >

        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-2">
          <img
            src="logo.jpg"
            alt="logo"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain brightness-110 contrast-125"
          />
          <span className="text-white text-sm sm:text-lg md:text-[24px] font-semibold tracking-wide">
            AI Recipe
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-4 sm:gap-7 md:gap-12 pr-1 sm:pr-2">

          <a href="#" className="relative text-white/80 text-xs sm:text-base md:text-[20px] font-medium 
          transition duration-300 hover:text-white hover:scale-105
          after:content-[''] after:absolute after:left-0 after:-bottom-1 
          after:w-0 after:h-[2px] after:bg-white 
          after:transition-all after:duration-300 
          hover:after:w-full">
            Home
          </a>

          <a href="#" className="relative text-white/80 text-xs sm:text-base md:text-[20px] font-medium 
          transition duration-300 hover:text-white hover:scale-105
          after:content-[''] after:absolute after:left-0 after:-bottom-1 
          after:w-0 after:h-[2px] after:bg-white 
          after:transition-all after:duration-300 
          hover:after:w-full">
            Features
          </a>

          <a href="#" className="relative text-white/80 text-xs sm:text-base md:text-[20px] font-medium 
          transition duration-300 hover:text-white hover:scale-105
          after:content-[''] after:absolute after:left-0 after:-bottom-1 
          after:w-0 after:h-[2px] after:bg-white 
          after:transition-all after:duration-300 
          hover:after:w-full">
            About
          </a>

        </div>

      </nav>
    </div>
  );
}