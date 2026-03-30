import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/home/hero';
import FeatureCard from '../components/home/FeatureCard';
import AuthModal from '../components/auth/LoginForm';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login'); 

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const featureData = [
    { title: "Vibe Profile", desc: "Express yourself with a customized profile grid.", icon: "📸", color: "bg-rose-50 text-rose-500", hoverBg: "bg-gradient-to-br from-rose-500 to-pink-600" },
    { title: "Sphere Feed", desc: "Discover endless content tailored for you.", icon: "✨", color: "bg-blue-50 text-blue-600", hoverBg: "bg-gradient-to-br from-blue-600 to-indigo-700" },
    { title: "Global Squad", desc: "Find your community and follow creators.", icon: "🌍", color: "bg-violet-50 text-violet-600", hoverBg: "bg-gradient-to-br from-violet-600 to-purple-800" },
    { title: "Real-time Ops", desc: "Get notified the second someone reacts.", icon: "⚡", color: "bg-amber-50 text-amber-600", hoverBg: "bg-gradient-to-br from-amber-500 to-orange-600" },
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden font-['Plus_Jakarta_Sans']">
      <Navbar onLogin={() => openModal('login')} onSignUp={() => openModal('signup')} />

      <main>
        <Hero onJoin={() => openModal('signup')} />

        {/* 3. FEATURE SECTION WITH VIBRANT COLORS & SHADOWS */}
        <section className="relative z-[30] mt-[-60px] bg-[#f8fafc] rounded-t-[80px] pt-[80px] pb-[120px] px-[20px] shadow-[0_-40px_80px_-15px_rgba(0,0,0,0.08)]">
          {/* Subtle Color Glows for the Section */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100/50 blur-[100px] -z-10 rounded-full"></div>
          <div className="absolute bottom-20 right-0 w-64 h-64 bg-purple-100/50 blur-[100px] -z-10 rounded-full"></div>

          <div className="max-w-[1240px] mx-auto">
            <div className="text-center mb-[80px]">
              <span className="bg-white text-[#3b82f6] px-5 py-2 rounded-full font-bold uppercase tracking-[2px] text-[11px] border border-blue-100 shadow-sm">
                  ✨ Platform Experience
              </span>
              <h2 className="text-[64px] font-[1000] text-slate-900 mt-10 leading-[0.95] tracking-[-4px]">
                  Designed for the <br/>
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#d946ef]">
                    Next Generation.
                  </span>
              </h2>
              <p className="text-slate-500 mt-8 text-[20px] font-medium max-w-[550px] mx-auto leading-relaxed">
                  Stop scrolling, start connecting. Experience a feed that actually <span className="text-slate-900 font-bold underline decoration-blue-200 decoration-4 underline-offset-8">understands you.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
              {featureData.map((data, index) => (
                <FeatureCard key={index} {...data} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER AREA (Compact & High-Contrast) */}
<footer className="relative bg-[#000814] pt-16 pb-10 overflow-hidden border-t border-white/5 font-sans">
  
  {/* Smaller, refined glow accents */}
  <div className="absolute top-0 left-[15%] w-[300px] h-[300px] bg-[#3b82f6]/10 rounded-full blur-[100px] -z-10"></div>
  <div className="absolute bottom-0 right-[15%] w-[300px] h-[300px] bg-[#8b5cf6]/10 rounded-full blur-[100px] -z-10"></div>

  <div className="max-w-[1280px] mx-auto px-10 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
      
      {/* Column 1: Identity */}
      <div className="lg:col-span-4 space-y-6">
        <div className="text-[32px] font-[600] tracking-[-2px] text-white italic">
          Social<span className="text-[#3b82f6]">Sphere</span>
        </div>
        <p className="text-[16px] font-medium text-slate-400 leading-relaxed max-w-[320px]">
          Digital infrastructure for creators. <span className="text-white font-black">Join the movement.</span>
        </p>
        <div className="flex gap-4">
          {['𝕏', 'IG', 'LI', 'YT'].map((icon) => (  
            <div key={icon} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-white hover:bg-[#3b82f6] hover:border-transparent hover:-translate-y-1 transition-all cursor-pointer shadow-xl">
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Column 2: Nav Tabs (Increased font size to 17px) */}
      <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 font-black text-[17px]">
          <h4 className="text-[11px] uppercase tracking-[3px] text-[#3b82f6] mb-2">Explore</h4>
          {['Trending', 'Spheres', 'Creators'].map(t => <a key={t} href="#" className="text-slate-400 hover:text-white transition-colors">{t}</a>)}
        </div>
        <div className="flex flex-col gap-4 font-black text-[17px]">
          <h4 className="text-[11px] uppercase tracking-[3px] text-[#3b82f6] mb-2">Support</h4>
          {['Help', 'Safety', 'Global'].map(t => <a key={t} href="#" className="text-slate-400 hover:text-white transition-colors">{t}</a>)}
        </div>
        <div className="flex flex-col gap-4 font-black text-[17px]">
          <h4 className="text-[11px] uppercase tracking-[3px] text-[#3b82f6] mb-2">Legal</h4>
          {['Privacy', 'Terms', 'License'].map(t => <a key={t} href="#" className="text-slate-400 hover:text-white transition-colors">{t}</a>)}
        </div>
      </div>

      {/* Column 3: Newsletter (More compact) */}
      <div className="lg:col-span-3">
        <div className="p-8 rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-2xl">
           <h4 className="text-[18px] font-black text-white mb-4">Stay Tuned</h4>
           <input type="email" placeholder="Your email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white mb-4 focus:border-[#3b82f6] outline-none transition-all text-sm" />
           <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-black py-3.5 rounded-xl transition-all shadow-lg active:scale-95 text-xs uppercase tracking-widest">Subscribe</button>
        </div>
      </div>
    </div>

    {/* Final Bottom Bar */}
    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-bold">
      <p className="text-[14px]">© 2026 SocialSphere Inc. | <span className="text-slate-300">Designed by Manas</span></p>
      <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-[11px] uppercase tracking-widest text-slate-400">All Systems Operational</span>
      </div>
    </div>
  </div>
</footer>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type={modalType} />
    </div>
  );
};

export default HomePage;