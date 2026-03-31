import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = ({ onJoin, onStart }) => { 
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen md:min-h-[850px] flex items-center overflow-visible bg-[#000814] z-[1] select-none">
      
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="/bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-[0.35]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000814]/90 to-white z-[1]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-[60px] grid md:grid-cols-2 gap-8 md:gap-[80px] items-center relative z-10 overflow-visible mt-0 md:mt-[-110px] pt-[100px] pb-16 md:py-0">
        
        {/* LEFT SIDE Content */}
        <div className="flex flex-col gap-5 md:gap-[35px] text-center md:text-left" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          <div className="inline-block w-fit mx-auto md:mx-0 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-[13px] font-[700] uppercase tracking-[4px]">✨ Join the Future</span>
          </div>

          <h1 className="text-[34px] sm:text-[44px] md:text-[55px] font-[800] leading-[1.1] text-white tracking-[-2px]">
            Connect with Friends <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#a855f7] to-[#d946ef]">
              & Share Moments.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-[22px] text-slate-400 leading-[1.8] max-w-[600px] mx-auto md:mx-0 font-[500]">
            Experience the next generation of social networking. Build your sphere, 
            explore global trends, and grow your perspective in a space built for you. 
            Connect, share, and evolve in the SocialSphere.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-[25px]" style={{ fontFamily: 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif' }}>
            <button 
              type="button"
              onClick={onStart} 
              className="bg-[#3b82f6] text-white px-7 py-2 md:px-[40px] md:py-[10px] rounded-[24px] text-base md:text-[20px] font-[800] hover:-translate-y-2 hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.96]"
            >
              Get Started
            </button>

            <button 
              type="button"
              onClick={onJoin} 
              className="bg-white/5 backdrop-blur-md text-white px-7 py-2 md:px-[40px] md:py-[10px] rounded-[24px] text-base md:text-[20px] font-[800] border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* RIGHT SIDE Image */}
        <div className="relative flex justify-center items-center group overflow-visible">
          <div className="w-full max-w-[600px] rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-[15px] shadow-2xl transition-all duration-700 ease-out cursor-pointer">
            <img 
                src="/rightpic.png" 
                alt="SocialSphere UI" 
                className="w-full h-auto min-h-[250px] sm:min-h-[350px] md:min-h-[450px] object-cover rounded-[45px] border border-white/5" 
            />
          </div>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[#3b82f6]/20 rounded-full blur-[150px] z-[-1]"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;