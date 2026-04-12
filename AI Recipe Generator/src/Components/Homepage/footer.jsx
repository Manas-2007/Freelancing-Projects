import { InfoModal } from "./InfoModal";

export function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-white bg-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-16">
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          
          {/* 🔹 Branding */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 md:gap-5">
            <div className="flex items-center gap-3">
              <img
                src="logo.jpg"
                alt="logo"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain brightness-110 rounded-full border border-white"
              />
              <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">
                AI <span className="font-semibold text-white/80">Recipe</span>
              </span>
            </div>

            <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed max-w-sm font-normal lg:font-medium">
              Generate delicious recipes using AI. Search, explore, and download favorite meals instantly.
            </p>
          </div>

          {/* 🔹 Navigation */}
          <div className="flex flex-col gap-5 md:gap-6">
            <h3 className="text-white text-[10px] sm:text-xs lg:text-sm font-bold lg:font-extrabold uppercase tracking-[0.2em] md:tracking-[0.25em] border-b border-white pb-2 w-fit">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 md:gap-4">
              {["Home", "Features", "About"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-white/80 hover:text-white transition duration-300 text-xs sm:text-sm lg:text-base font-medium lg:font-semibold hover:translate-x-1 inline-block"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* 🔹 Capabilities */}
          <div className="flex flex-col gap-5 md:gap-6">
            <h3 className="text-white text-[10px] sm:text-xs lg:text-sm font-bold lg:font-extrabold uppercase tracking-[0.2em] md:tracking-[0.25em] border-b border-white pb-2 w-fit">
              Capabilities
            </h3>

            <div className="space-y-3 md:space-y-4">
              {[
                { label: "AI Search", color: "text-blue-400" },
                { label: "Download", color: "text-green-400" },
                { label: "Easy UI", color: "text-purple-400" }
              ].map((cap) => (
                <p 
                  key={cap.label} 
                  className="flex items-center gap-3 text-white/90 text-xs sm:text-sm lg:text-base font-medium lg:font-semibold"
                >
                  <span className={`${cap.color} text-sm sm:text-base animate-pulse`}>✦</span> 
                  {cap.label}
                </p>
              ))}
            </div>
          </div>

        </div>

        {/* 🔻 Bottom Bar */}
        <div className="mt-14 md:mt-16 pt-6 md:pt-8 border-t-2 border-white flex flex-col items-center gap-4 md:gap-6 text-white text-[9px] sm:text-[10px] lg:text-xs font-semibold lg:font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-center">
          
          <p className="hover:tracking-[0.25em] md:hover:tracking-[0.4em] transition-all duration-500 cursor-default">
            © 2026 AI RECIPE GENERATOR
          </p>

          <p className="bg-white text-black px-3 py-1 sm:px-4 sm:py-1.5 text-[9px] sm:text-[10px] lg:text-xs font-bold tracking-wide rounded-sm">
            CREATED BY MANAS PATIDAR
          </p>

        </div>
      </div>
    </footer>
  );
}