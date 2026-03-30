import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = ({ onJoin }) => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[850px] flex items-center overflow-visible bg-[#000814] z-[1] select-none">
      
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="/bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-[0.4]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000814]/80 to-white z-[1]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-[40px] grid md:grid-cols-2 gap-[60px] items-center relative z-10 overflow-visible">
        
        {/* LEFT SIDE: Typography with Specific Fonts */}
        <div className="flex flex-col gap-[25px] text-left" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          <div className="inline-block w-fit px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-[12px] font-[800] uppercase tracking-[3px]">✨ Join the Future</span>
          </div>

          <h1 className="text-[60px] font-[1000] leading-[1.1] text-white tracking-[-1px]">
            Connect with Friends <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#a855f7] to-[#d946ef]">
              & Share Moments.
            </span>
          </h1>

          <p className="text-[20px] text-slate-400 leading-[1.7] max-w-[480px] font-[500]">
            Experience the next generation of social networking. Build your sphere, 
            explore global trends, and grow your perspective in a space built for you.
          </p>

          {/* Buttons with Calibri font */}
          <div className="flex items-center gap-[20px] pt-[15px]" style={{ fontFamily: 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif' }}>
            <button 
              onClick={() => navigate('/dashboard')} 
              className="bg-[#3b82f6] text-white px-[40px] py-[18px] rounded-[22px] text-[18px] font-[800] hover:-translate-y-1 hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/25 active:scale-[0.98]"
            >
              Get Started
            </button>
            <button 
              onClick={onJoin} 
              className="bg-white/5 backdrop-blur-md text-white px-[40px] py-[18px] rounded-[22px] text-[18px] font-[800] border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Balanced Upward Float */}
        <div className="relative flex justify-center items-center group overflow-visible">
          {/* translate-y-8 provides a subtle, equal upward movement */}
          <div className="w-full max-w-[600px] p-[10px] rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] 
            transition-all duration-500 ease-out cursor-pointer 
            group-hover:-translate-y-5 group-hover:scale-[1.02] group-hover:shadow-[0_100px_150px_-30px_rgba(59,130,246,0.3)]">
            <img 
                src="/rightpic.png" 
                alt="SocialSphere UI" 
                className="w-full h-auto object-contain rounded-[35px] border border-white/5" 
            />
          </div>
          
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#3b82f6]/20 rounded-full blur-[100px] z-[-1] animate-pulse"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;