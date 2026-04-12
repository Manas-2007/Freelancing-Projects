import { useNavigate } from "react-router-dom";

export function Hero() {

  const navigate = useNavigate();
  return (
    <>
      {/* ── MOBILE layout ── */}
      <section className="sm:hidden px-5 py-10 flex flex-col items-center gap-6 text-center">

        {/* Title */}
        <h1 className="text-[36px] font-bold text-white leading-[1.15]">
          AI Recipe Generator
        </h1>

        {/* Image */}
        <img
          src="/right.jpg"
          alt="AI Chef Robot"
          className="w-full max-h-[280px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        />

        {/* Description */}
        <p className="text-base text-white/75 leading-relaxed max-w-sm">
          Discover thousands of AI-crafted dishes tailored to your taste. From quick weeknight dinners to gourmet feasts — just tell us your ingredients and let the magic happen.
        </p>

        {/* Button */}
        <button
          onClickCapture={() => navigate("/Dashboard")}
          className="w-fit px-9 py-3.5
          text-white text-[16px] font-[500] tracking-wide
          rounded-xl
          bg-gradient-to-r from-blue-500/90 to-blue-600/90
          shadow-[0_0_15px_rgba(59,130,246,0.5)]
          hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
          hover:scale-105 active:scale-95
          transition-all duration-300 ease-out
          border border-white/10"
        >
          Get Started
        </button>

      </section>

      {/* ── DESKTOP layout ── */}
      <section className="hidden sm:flex max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 
      items-center justify-between gap-6">

        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-[50%]">
          <h1 className="text-5xl md:text-[60px] font-[600] text-white leading-[1.1]">
            AI Recipe Generator
          </h1>

          <p className="text-lg md:text-[18px] text-white/70 font-normal max-w-[90%] leading-relaxed">
            Discover thousands of AI-crafted dishes tailored to your taste. From quick weeknight dinners to gourmet feasts — just tell us your ingredients and let the magic happen.
          </p>

          <button
            onClickCapture={() => navigate("/Dashboard")}
            className="mt-8 w-fit px-10 py-4
            text-white text-lg md:text-[20px] font-[500] tracking-wide
            rounded-xl
            bg-gradient-to-r from-blue-500/90 to-blue-600/90
            backdrop-blur-md
            shadow-[0_0_15px_rgba(59,130,246,0.5)]
            hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
            hover:scale-105 active:scale-95
            transition-all duration-300 ease-out
            border border-white/10"
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center w-[50%]">
          <img
            src="/right.jpg"
            alt="AI Chef Robot"
            className="w-[90%] max-h-[80vh] object-contain 
            drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </div>

      </section>
    </>
  );
}
 

export function Bottom() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">

      <style>{`
        @keyframes borderGlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      {/* Title with Lines */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-14">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/40"></div>
        <h1 className="text-white text-2xl sm:text-3xl md:text-[34px] font-medium tracking-wide whitespace-nowrap">
          How It Works
        </h1>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/40"></div>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-5 md:gap-8">

        {/* Card 1 - Blue */}
        <div
          className="w-full sm:w-[32%] p-[3px] rounded-2xl hover:scale-105 transition-transform duration-300"
          style={{
            background: "linear-gradient(90deg, #3b82f6, #a78bfa, #40e0d0, #3b82f6)",
            backgroundSize: "200% 100%",
            animation: "borderGlow 3s linear infinite",
            boxShadow: "0 0 20px rgba(59,130,246,0.25), 0 0 40px rgba(59,130,246,0.1)",
          }}
        >
          <div className="flex flex-col rounded-[14px] overflow-hidden h-full
            bg-gradient-to-b from-[#0a0f1f]/95 to-[#0e0e1f]/95 backdrop-blur-md">
            <div className="w-full h-[260px] sm:h-[200px] md:h-[240px]">
              <img src="/htu1.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 p-6 sm:p-5 md:p-6 flex-1">
              <p className="text-white text-xl sm:text-base md:text-[18px] font-medium">
                1. Enter Your Ingredients
              </p>
              <hr className="border-blue-400/30" />
              <p className="text-white/65 text-base sm:text-sm md:text-[15px] font-normal">
                Tell us what's in your kitchen
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - Purple */}
        <div
          className="w-full sm:w-[32%] p-[2px] rounded-2xl hover:scale-105 transition-transform duration-300"
          style={{
            background: "linear-gradient(90deg, #a855f7, #ff0080, #7b2ff7, #a855f7)",
            backgroundSize: "200% 100%",
            animation: "borderGlow 3s linear infinite",
            boxShadow: "0 0 20px rgba(168,85,247,0.25), 0 0 40px rgba(168,85,247,0.1)",
          }}
        >
          <div className="flex flex-col rounded-[14px] overflow-hidden h-full
            bg-gradient-to-b from-[#150f20]/95 to-[#0e0e1f]/95 backdrop-blur-md">
            <div className="w-full h-[260px] sm:h-[200px] md:h-[240px]">
              <img src="/htu3.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 p-6 sm:p-5 md:p-6 flex-1">
              <p className="text-white text-xl sm:text-base md:text-[18px] font-medium">
                2. Get AI Recipe Ideas
              </p>
              <hr className="border-purple-400/30" />
              <p className="text-white/65 text-base sm:text-sm md:text-[15px] font-normal">
                Instant recipes just for you
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 - Orange */}
        <div
          className="w-full sm:w-[32%] p-[2px] rounded-2xl hover:scale-105 transition-transform duration-300"
          style={{
            background: "linear-gradient(90deg, #f97316, #ff0080, #ff8c00, #f97316)",
            backgroundSize: "200% 100%",
            animation: "borderGlow 3s linear infinite",
            boxShadow: "0 0 20px rgba(249,115,22,0.25), 0 0 40px rgba(249,115,22,0.1)",
          }}
        >
          <div className="flex flex-col rounded-[14px] overflow-hidden h-full
            bg-gradient-to-b from-[#1f0e00]/95 to-[#0e0e1f]/95 backdrop-blur-md">
            <div className="w-full h-[260px] sm:h-[200px] md:h-[240px]">
              <img src="/htu2.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 p-6 sm:p-5 md:p-6 flex-1">
              <p className="text-white text-xl sm:text-base md:text-[18px] font-medium">
                3. Cook & Enjoy
              </p>
              <hr className="border-orange-400/30" />
              <p className="text-white/65 text-base sm:text-sm md:text-[15px] font-normal">
                Follow the steps & savor!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}