export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-16 flex items-center justify-between">

      {/* Left Content */}
      <div className="flex flex-col gap-6 max-w-[50%]">

        <h1 className="text-[60px] font-bold text-white leading-[1.1]">
          AI Recipe Generator
        </h1>

        <p className="text-[18px] text-white/70 font-normal max-w-[80%]">
          Create delicious recipes with the power of AI.
        </p>

       <button
  className="mt-8 w-fit px-10 py-4
  text-white text-[18px] font-semibold tracking-wide
  rounded-xl
  bg-gradient-to-r from-blue-500/90 to-blue-600/90
  backdrop-blur-md

  shadow-[0_0_15px_rgba(59,130,246,0.5)]
  hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]

  hover:scale-105 active:scale-95
  transition-all duration-300 ease-out

  border border-white/10
"
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
  );
}


// How It Works section
export function Bottom() {
  return (
    <>
      <div className="py-16 px-16 mb-[30px]">

        {/* Section Title */}
        <h1 className="text-center text-white text-[36px] font-[700] mb-12 tracking-wide">
          How It Works
        </h1>

        {/* Cards Container */}
        <div className="flex justify-evenly gap-8">

          {/* Card 1 - Blue Theme */}
          <div className="flex flex-col items-center text-center border-[3px] border-blue-700 rounded-2xl w-[30%] bg-blue-900/20 hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="w-full h-[220px] overflow-hidden">
              <img src="/htu1.jpg" alt="Step 1" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 p-6 w-full">
              <p className="text-white text-[18px] font-[700]">
                1. Enter Your Ingredients
              </p>
              <hr className="w-full border-blue-500" />
              <p className="text-gray-300 text-[15px] leading-relaxed">
                Tell us what's in your kitchen
              </p>
            </div>
          </div>

          {/* Card 2 - Purple Theme */}
          <div className="flex flex-col items-center text-center border-[3px] border-purple-600 rounded-2xl w-[30%] bg-purple-900/20 hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="w-full h-[220px] overflow-hidden">
              <img src="/htu3.jpg" alt="Step 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 p-6 w-full">
              <p className="text-white text-[18px] font-[700]">
                2. Get AI Recipe Ideas
              </p>
              <hr className="w-full border-purple-500" />
              <p className="text-gray-300 text-[15px] leading-relaxed">
                Instant recipes just for you
              </p>
            </div>
          </div>

          {/* Card 3 - Orange Theme */}
          <div className="flex flex-col items-center text-center border-[3px] border-orange-600 rounded-2xl w-[30%] bg-orange-900/20 hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="w-full h-[220px] overflow-hidden">
              <img src="/htu2.jpg" alt="Step 3" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 p-6 w-full">
              <p className="text-white text-[18px] font-[700]">
                3. Cook & Enjoy
              </p>
              <hr className="w-full border-orange-500" />
              <p className="text-gray-300 text-[15px] leading-relaxed">
                Follow the steps & savor!
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}