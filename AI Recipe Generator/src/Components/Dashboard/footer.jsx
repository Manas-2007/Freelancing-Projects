import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// 🔹 Move static data OUTSIDE component (prevents recreation on every render)
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

      {/* Top Glow Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="px-10 py-12 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-2xl border-t border-white/10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="space-y-5">
            <h1 className="text-3xl font-bold tracking-tight">
              AI Recipe Generator
            </h1>

            <p className="text-white/60 text-[15px] leading-relaxed max-w-sm">
              Discover, generate and cook delicious recipes using AI.
              Built for modern kitchens with smart filtering and personalized taste.
            </p>

            <span className="inline-block px-5 py-1.5 text-xs font-bold bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] uppercase tracking-wider">
              Powered by AI
            </span>
          </div>

          {/* CENTER */}
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col gap-4 w-fit">
              <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-2 border-b border-white/10 pb-2">
                Explore
              </h2>

              {links.map((item) => (
                <button
                  key={item}
                  className="text-white/50 text-[15px] font-medium hover:text-white transition-all hover:translate-x-2 flex items-center gap-3 group text-left"
                >
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all text-lg">
                    →
                  </span>
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6 md:items-end">
            <div className="w-fit">
              <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-4 md:text-right">
                Connect
              </h2>

              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-xl shadow-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <p className="text-white/40 text-[13px] mt-6 md:text-right font-medium">
                Crafted with ❤️ by <span className="text-white/70">Manas</span>
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className=" border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[13px] text-white/30 font-medium tracking-wide">
          <p>© {year} AI Recipe Generator. All rights reserved.</p>

          <div className="flex gap-8 mt-4 md:mt-0 uppercase text-[11px] font-bold tracking-widest">
            <button className="hover:text-white">Privacy</button>
            <button className="hover:text-white">Terms</button>
            <button className="hover:text-white">Support</button>
          </div>
        </div>

      </div>
    </footer>
  );
}