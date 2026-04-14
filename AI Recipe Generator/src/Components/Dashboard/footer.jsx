import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaBolt, FaEnvelope } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVite } from "react-icons/si";

const links = ["Home", "Recipes", "Favorites", "Dashboard"];
const cuisines = ["Indian", "Italian", "Chinese", "Mexican", "Japanese"];

const socials = [
  { icon: <FaGithub />, link: "https://github.com/Manas-2007" },
  { icon: <FaLinkedin />, link: "http://www.linkedin.com/in/manas-kumar-patidar-73954a374" },
  { icon: <FaInstagram />, link: "#" }
];

export function Footer() {

  return (
    <footer className="w-full mt-20 relative text-white">
  {/* 🌌 Top Neon Line */}
  <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

  <div className="w-full px-4 md:px-12 py-10 bg-[#0c0c1a]/90 backdrop-blur-3xl border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      
      {/* 📱 Grid Fix: Mobile par 2 col, PC par 4 col */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        
        {/* 🚀 Section 1: Architect (Full width on very small screens if needed, else 1 col) */}
        <div className="col-span-2 lg:col-span-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 font-black text-2xl italic">
              A
            </div>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">
              AI <span className="text-blue-500">Chef</span>
            </h1>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl group hover:border-blue-500/50 transition-all duration-500">
            <p className="text-[10px] md:text-[11px] text-blue-400 font-bold uppercase tracking-[0.3em] mb-2">About Developer</p>
            <h3 className="text-base md:text-lg font-bold text-white mb-1">Manas Patidar</h3>
            <div className="space-y-1 text-[12px] md:text-[13px] text-white/60 font-medium">
              <p>Frontend Web Developer</p>
              <p>MITS Gwalior</p>
            </div>
          </div>

          <div className="flex gap-4">
            {socials.map((social, i) => (
              <a key={i} href={social.link} target="_blank" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 text-lg shadow-xl">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 📂 Section 2: Navigation */}
        <div className="space-y-6 lg:pl-10">
          <h2 className="text-[11px] md:text-[12px] font-[500] uppercase tracking-[0.3em] text-white/40">Navigation</h2>
          <div className="flex flex-col gap-3 md:gap-4">
            {links.map((item) => (
              <button key={item} className="text-white text-[14px] md:text-[15px] font-medium hover:text-blue-400 transition-all hover:translate-x-2 flex items-center gap-2 md:gap-3 group w-fit">
                <span className="h-[2px] w-0 bg-blue-500 group-hover:w-4 md:group-hover:w-5 transition-all"></span>
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* 🍜 Section 3: Global Tastes */}
        <div className="space-y-6">
          <h2 className="text-[11px] md:text-[12px] font-[500] uppercase tracking-[0.3em] text-white/40">Global Tastes</h2>
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            {cuisines.map((item) => (
              <span key={item} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-xl text-[11px] md:text-[12px] text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-default font-[400] uppercase tracking-widest">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 🛠️ Section 4: Tech & Status */}
        <div className="col-span-2 lg:col-span-1 space-y-6">
          <h2 className="text-[11px] md:text-[12px] font-[500] uppercase tracking-[0.3em] text-white/40">Project Stack</h2>
          <div className="grid grid-cols-2 gap-y-4 gap-x-2">
             <div className="flex items-center gap-2 md:gap-3 text-white group">
                <FaReact className="text-blue-400 text-base md:text-lg group-hover:rotate-180 transition-transform duration-1000" />
                <span className="text-xs md:text-sm font-medium">React 18</span>
             </div>
             <div className="flex items-center gap-2 md:gap-3 text-white">
                <SiTailwindcss className="text-cyan-400 text-base md:text-lg" />
                <span className="text-xs md:text-sm font-medium">Tailwind</span>
             </div>
             <div className="flex items-center gap-2 md:gap-3 text-white">
                <SiFramer className="text-pink-500 text-base md:text-lg" />
                <span className="text-xs md:text-sm font-medium">Framer</span>
             </div>
             <div className="flex items-center gap-2 md:gap-3 text-white">
                <SiVite className="text-yellow-400 text-base md:text-lg" />
                <span className="text-xs md:text-sm font-medium">Vite Core</span>
             </div>
          </div>
          
          <div className="pt-6 border-t border-white/10 space-y-3">
             <div className="flex items-center gap-3 text-white/30 hover:text-white transition-colors cursor-pointer">
                <FaEnvelope className="text-blue-500" />
                <span className="text-[11px] font-mono">contact@manas.dev</span>
             </div>
             <div className="flex items-center gap-3 text-[9px] text-white/20 font-mono tracking-widest uppercase">
                <FaBolt className="text-yellow-500 animate-pulse" /> Latency: 42ms
             </div>
          </div>
        </div>

      </div>

      {/* 📜 Bottom Credit (Optional but recommended) */}
      <div className="mt-10 pt-6 border-t border-white/5 text-center">
         <p className="text-[10px] text-white/20 font-black tracking-[0.4em] uppercase">
           Created by Manas Patidar
         </p>
      </div>

    </div>
  </div>
</footer>
  );
}