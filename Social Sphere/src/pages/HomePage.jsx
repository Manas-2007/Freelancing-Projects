import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import FeatureCard from '../components/home/FeatureCard';
import AuthModal from '../components/auth/LoginForm';

const HomePage = () => {
  // 1. Modal State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login'); 

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  // 2. Premium Feature Data with Unique Hover Gradients
  const featureData = [
    { 
      title: "Vibe Profile", 
      desc: "Express yourself with a customized profile grid and aesthetic bio.", 
      icon: "📸", 
      color: "bg-rose-50 text-rose-500",
      hoverBg: "bg-gradient-to-br from-rose-500 to-pink-600" 
    },
    { 
      title: "Sphere Feed", 
      desc: "Discover endless content tailored perfectly for your interests.", 
      icon: "✨", 
      color: "bg-blue-50 text-blue-600",
      hoverBg: "bg-gradient-to-br from-blue-600 to-indigo-700" 
    },
    { 
      title: "Global Squad", 
      desc: "Find your community and follow creators you truly love.", 
      icon: "🌍", 
      color: "bg-violet-50 text-violet-600",
      hoverBg: "bg-gradient-to-br from-violet-600 to-purple-800" 
    },
    { 
      title: "Real-time Ops", 
      desc: "Get notified the second someone reacts to your moments.", 
      icon: "⚡", 
      color: "bg-amber-50 text-amber-600",
      hoverBg: "bg-gradient-to-br from-amber-500 to-orange-600" 
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      
      {/* Navigation */}
      <Navbar 
        onLogin={() => openModal('login')} 
        onSignUp={() => openModal('signup')} 
      />

      <main>
        {/* Hero Section: Handles the Starry Background */}
        <Hero onJoin={() => openModal('signup')} />

        {/* Feature Section: The "Flood Fill" Interactive Cards */}
        <section className="relative z-[30] mt-[-40px] bg-white rounded-t-[60px] pt-[40px] pb-[100px] px-[20px] shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] shadow-t-xl">
          <div className="max-w-[1240px] mx-auto">
            
            {/* Premium Section Header - Social Media Style */}
                    <div className="text-center mb-[80px] font-['Plus_Jakarta_Sans'] shadow-lg">
                    
                    {/* The "Tag" - Made it look like a notification badge */}
                    <span className="bg-blue-50 text-[#3b82f6] px-5 py-2 rounded-full font-bold uppercase tracking-[2px] text-[11px] border border-blue-100">
                        ✨ Platform Experience
                    </span>

                    {/* The Main Heading - Compact and Bold */}
                    <h2 className="text-[56px] font-[800] text-slate-900 mt-10 leading-[0.95] tracking-[-3px]">
                        Designed for the <br/>
                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#d946ef]">
                        Next Generation.
                        </span>
                    </h2>

                    {/* Sub-text to bridge the gap to the 4 cards */}
                    <p className="text-slate-500 mt-6 text-[18px] font-medium max-w-[500px] mx-auto leading-relaxed">
                        Stop scrolling, start connecting. Experience a feed that actually <span className="text-slate-900 font-bold">understands you.</span>
                    </p>

                    </div>

            {/* Feature Cards Grid */}
            <div className="flex flex-wrap justify-center gap-[30px] shadow-xl">
              {featureData.map((data, index) => (
                <FeatureCard 
                  key={index}
                  title={data.title}
                  desc={data.desc}
                  icon={data.icon}
                  color={data.color}
                  hoverBg={data.hoverBg}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PRO TIP: This is where we will add the "Trending Gallery" 
            section next to keep the user scrolling! 
        */}
      </main>


    {/* Footer Section */}
   <footer className="relative bg-[#000814] pt-[120px] pb-[60px] overflow-hidden border-t border-white/5">
      
      {/* 1. Theme-Matching Glows: Pulls the blue/purple from your Hero */}
      <div className="absolute top-0 left-[10%] w-[400px] h-[400px] bg-[#3b82f6]/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[80px] mb-[100px]">
          
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <div className="text-[32px] font-[1000] tracking-[-2px] text-white">
              Social<span className="text-[#3b82f6]">Sphere</span>
            </div>
            <p className="text-[17px] font-[500] text-slate-400 leading-[1.8] max-w-[340px]">
              Building the digital infrastructure for the next generation of global creators. 
              <span className="text-white font-bold italic"> Join the movement.</span>
            </p>
            {/* Social Links with "Glass" hover */}
            <div className="flex gap-4">
              {['𝕏', 'IG', 'LI', 'YT'].map((icon) => (
                <div key={icon} className="w-[50px] h-[50px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[15px] font-bold text-white hover:bg-[#3b82f6] hover:border-[#3b82f6] hover:scale-110 transition-all cursor-pointer shadow-xl">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-[900] uppercase tracking-[3px] text-[#3b82f6]">Explore</h4>
              <a href="#" className="text-slate-300 font-[600] hover:text-white transition-all text-[16px]">Trending</a>
              <a href="#" className="text-slate-300 font-[600] hover:text-white transition-all text-[16px]">Spheres</a>
              <a href="#" className="text-slate-300 font-[600] hover:text-white transition-all text-[16px]">Creators</a>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-[900] uppercase tracking-[3px] text-[#3b82f6]">Support</h4>
              <a href="#" className="text-slate-300 font-[600] hover:text-white transition-all text-[16px]">Help Center</a>
              <a href="#" className="text-slate-300 font-[600] hover:text-white transition-all text-[16px]">Safety</a>
              <a href="#" className="text-slate-300 font-[600] hover:text-white transition-all text-[16px]">Community</a>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-[900] uppercase tracking-[3px] text-[#3b82f6]">Legal</h4>
              <a href="#" className="text-slate-300 font-[600] hover:text-white transition-all text-[16px]">Privacy</a>
              <a href="#" className="text-slate-300 font-[600] hover:text-white transition-all text-[16px]">Terms</a>
            </div>
          </div>

          {/* Column 3: The "Glass" Newsletter Box */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
               <h4 className="text-[20px] font-[700] text-white mb-4">Stay Tuned</h4>
               <p className="text-[14px] text-slate-400 mb-6 leading-relaxed">
                 Get early access to new features and creator drops.
               </p>
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-[15px] focus:outline-none focus:border-[#3b82f6] transition-all mb-4 placeholder:text-slate-600"
               />
               <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-[600] py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.97]">
                 Subscribe Now
               </button>
               {/* Animated Gradient Accent */}
               <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          </div>
        </div>

        {/* 2. Final Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[15px] font-[700] text-slate-500">
              © 2026 SocialSphere Inc. <span className="text-white/20 mx-2">|</span> 
              <span className="text-slate-300"> Designed by Manas Kumar</span>
            </p>
          </div>
          
          <div className="flex items-center gap-10">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[13px] font-[800] text-slate-400 uppercase tracking-widest">Systems Operational</span>
             </div>
             <div className="text-[13px] font-[800] text-slate-400 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
                Global (EN)
             </div>
          </div>
        </div>
      </div>
    </footer>

      {/* Login/Signup Popup */}
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
      />

    </div>
  );
};

export default HomePage;