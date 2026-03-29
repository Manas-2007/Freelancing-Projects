import React from 'react';

const Hero = ({ onJoin }) => {
  return (
    // Reduced min-height and padding for better vertical centering
    <section className="relative w-full min-h-[700px] pt-[10px] pb-[20px] flex items-center overflow-hidden bg-[#000814] z-[1]">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="/bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/20 via-transparent to-white z-[1]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-[30px] grid md:grid-cols-2 gap-[40px] items-center relative z-10">
        
        {/* LEFT SIDE: Typography Refined */}
        <div className="flex flex-col gap-[20px] text-left">
          <h1 className="text-[55px] font-[700] leading-[1.5] text-white tracking-[-1.5px]">
            Connect with Friends <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">
              & Share Your Moments
            </span>
          </h1>

          <p className="text-[17px] text-slate-300 leading-[1.6] max-w-[450px] opacity-[0.9]">
            Join our community and explore what's happening around the world! Build your network and grow your perspective in the SocialSphere.
          </p>

          <div className="flex items-center gap-[15px] pt-[10px]">
            <button 
              onClick={onJoin}
              className="bg-[blue] text-[white] px-[32px] py-[14px] rounded-[12px] text-[18px] font-[600] hover:scale-[1.05] transition-all"
            >
              Get Started
            </button>
            <button className="bg-[white] backdrop-blur-md text-[blue] px-[32px] py-[14px] rounded-[12px] text-[18px] font-[600] border border-blue/10 hover:bg-[darkblue]/5 transition-all hover:text-[white]">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Perfectly Aligned Image Container */}
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-[580px] p-[19px] rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-[8px] shadow-2xl overflow-hidden">
            <img 
                src="/rightpic.png" 
                alt="SocialSphere UI" 
                className="w-full h-auto object-contain rounded-[20px]"
            />
          </div>
          
          {/* Subtle Glow behind the box */}
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[300px] bg-[#3b82f6]/20 rounded-full blur-[80px] z-[-1]"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;