import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const links = ["Home", "Recipes", "Favorites", "Dashboard"];

const socials = [
  { icon: <FaGithub />, link: "#" },
  { icon: <FaLinkedin />, link: "#" },
  { icon: <FaInstagram />, link: "#" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 relative text-white">

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="px-0 sm:px-8 md:px-10 py-10 sm:py-12 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-2xl border-t border-white/10">
        <div className="max-w-7xl mx-auto">

          {/* MOBILE */}
          <div className="flex flex-col gap-10 sm:hidden px-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold tracking-tight">AI Recipe Generator</h1>
              <p className="text-white/60 text-sm leading-relaxed">
                Discover, generate and cook delicious recipes using AI.
                Built for modern kitchens with smart filtering and personalized taste.
              </p>
              <span className="w-fit px-4 py-1.5 text-[11px] font-bold bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-300 uppercase tracking-wider">
                Powered by AI
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] border-b border-white/10 pb-2">Explore</h2>
                {links.map((item) => (
                  <button key={item} className="text-white/50 text-sm font-medium hover:text-white transition-all hover:translate-x-2 flex items-center gap-2 group text-left">
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all">→</span>
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] border-b border-white/10 pb-2">Connect</h2>
                <div className="flex flex-col gap-3 mt-1">
                  {socials.map((social, i) => (
                    <a key={i} href={social.link} className="w-fit p-2.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-lg shadow-lg">
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-white/40 text-xs mt-1 font-medium">Crafted with ❤️ by <span className="text-white/70">Manas</span></p>
              </div>
            </div>

            <div className="pt-5 border-t border-white/10 flex flex-col items-center gap-4 text-[11px] text-white/30 font-medium tracking-wide text-center">
              <p>© {year} AI Recipe Generator. All rights reserved.</p>
              <div className="flex gap-5 uppercase text-[10px] font-bold tracking-widest">
                <button className="hover:text-white transition-colors">Privacy</button>
                <button className="hover:text-white transition-colors">Terms</button>
                <button className="hover:text-white transition-colors">Support</button>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-3 gap-12">
              <div className="space-y-5">
                <h1 className="text-3xl font-bold tracking-tight">AI Recipe Generator</h1>
                <p className="text-white/60 text-[15px] leading-relaxed max-w-sm">
                  Discover, generate and cook delicious recipes using AI.
                  Built for modern kitchens with smart filtering and personalized taste.
                </p>
                <span className="inline-block px-5 py-1.5 text-xs font-bold bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] uppercase tracking-wider">
                  Powered by AI
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex flex-col gap-4 w-fit">
                  <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-2 border-b border-white/10 pb-2">Explore</h2>
                  {links.map((item) => (
                    <button key={item} className="text-white/50 text-[15px] font-medium hover:text-white transition-all hover:translate-x-2 flex items-center gap-3 group text-left">
                      <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all text-lg">→</span>
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 items-end">
                <div className="w-fit">
                  <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-4 text-right">Connect</h2>
                  <div className="flex gap-4">
                    {socials.map((social, i) => (
                      <a key={i} href={social.link} className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-xl shadow-lg">
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <p className="text-white/40 text-[13px] mt-6 text-right font-medium">Crafted with ❤️ by <span className="text-white/70">Manas</span></p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/5 flex flex-row justify-between items-center text-[13px] text-white/30 font-medium tracking-wide">
              <p>© {year} AI Recipe Generator. All rights reserved.</p>
              <div className="flex gap-8 uppercase text-[11px] font-bold tracking-widest">
                <button className="hover:text-white transition-colors">Privacy</button>
                <button className="hover:text-white transition-colors">Terms</button>
                <button className="hover:text-white transition-colors">Support</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}