import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSocial } from '../context/SocialContext'; // Importing the Brain
import Navbar from '../components/common/Navbar';
import Hero from '../components/home/hero';
import FeatureCard from '../components/home/FeatureCard';
import AuthModal from '../components/auth/LoginForm';

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSocial(); // Accessing global auth state
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login'); 

  // --- MODAL CONTROL LOGIC ---
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  // --- GET STARTED GATEKEEPER LOGIC ---
  const handleGetStarted = () => {
    if (isAuthenticated) {
      // If user is already logged in, bypass landing and go to Dashboard
      navigate('/dashboard/home');
    } else {
      // If new user, show alert and force registration
      alert("🔒 Security Protocol: Please Register an Identity to access the SocialSphere Dashboard.");
      openModal('signup');
    }
  };

  const featureData = [
    { title: "Vibe Profile", desc: "Express yourself with a customized profile grid.", icon: "📸", color: "bg-rose-50 text-rose-500", hoverBg: "bg-gradient-to-br from-rose-500 to-pink-600" },
    { title: "Sphere Feed", desc: "Discover endless content tailored for you.", icon: "✨", color: "bg-blue-50 text-blue-600", hoverBg: "bg-gradient-to-br from-blue-600 to-indigo-700" },
    { title: "Global Squad", desc: "Find your community and follow creators.", icon: "🌍", color: "bg-violet-50 text-violet-600", hoverBg: "bg-gradient-to-br from-violet-600 to-purple-800" },
    { title: "Real-time Ops", desc: "Get notified the second someone reacts.", icon: "⚡", color: "bg-amber-50 text-amber-600", hoverBg: "bg-gradient-to-br from-amber-500 to-orange-600" },
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden font-sans select-none">
      {/* Navbar linked to individual Login/Signup states */}
      <Navbar onLogin={() => openModal('login')} onSignUp={() => openModal('signup')} />

      <main>
        {/* Hero now receives the handleGetStarted logic for the big blue button */}
        <Hero 
          onJoin={() => openModal('signup')} 
          onStart={handleGetStarted} 
        />

        {/* 3. FEATURE SECTION - Scaled Down for PC */}
        <section className="relative z-[30] mt-[-80px] bg-[#f8fafc] rounded-t-[60px] pt-[60px] pb-[100px] px-[20px] shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.05)]">
          <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100/40 blur-[100px] -z-10 rounded-full"></div>
          
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-[60px]">
              <span className="bg-white text-[#3b82f6] px-4 py-1.5 rounded-full font-bold uppercase tracking-[2px] text-[12px] border border-blue-100 shadow-sm">
                  ✨ Platform Experience
              </span>
              <h2 className="text-[42px] font-[1000] text-slate-900 mt-8 leading-[1.1] tracking-[-2px]">
                  Designed for the <br/>
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#d946ef]">
                    Next Generation.
                  </span>
              </h2>
              <p className="text-slate-500 mt-6 text-[16px] font-medium max-w-[500px] mx-auto leading-relaxed">
                  Stop scrolling, start connecting. Experience a feed that actually <span className="text-slate-900 font-bold underline decoration-blue-200 decoration-2 underline-offset-4">understands you.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
              {featureData.map((data, index) => (
                <FeatureCard key={index} {...data} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER AREA */}
      <footer className="relative bg-[#000814] pt-14 pb-8 overflow-hidden border-t border-white/5 font-sans">
        <div className="max-w-[1100px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            
            {/* Identity Column */}
            <div className="lg:col-span-4 space-y-5">
              <div className="text-[26px] font-bold tracking-tight text-white italic">
                Social<span className="text-[#3b82f6]">Sphere</span>
              </div>
              <p className="text-[14px] font-medium text-slate-400 leading-relaxed max-w-[280px]">
                Digital infrastructure for creators. <span className="text-white font-bold">Join the movement.</span>
              </p>
              <div className="flex gap-3">
                {['𝕏', 'IG', 'LI', 'YT'].map((icon) => (  
                  <div key={icon} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white hover:bg-[#3b82f6] transition-all cursor-pointer text-xs">
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Nav Tabs Column */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-3 font-bold text-[14px]">
                <h4 className="text-[9px] uppercase tracking-[2px] text-[#3b82f6] mb-1">Explore</h4>
                {['Trending', 'Spheres', 'Creators'].map(t => <a key={t} href="#" className="text-slate-500 hover:text-white transition-colors">{t}</a>)}
              </div>
              <div className="flex flex-col gap-3 font-bold text-[14px]">
                <h4 className="text-[9px] uppercase tracking-[2px] text-[#3b82f6] mb-1">Support</h4>
                {['Help', 'Safety', 'Global'].map(t => <a key={t} href="#" className="text-slate-500 hover:text-white transition-colors">{t}</a>)}
              </div>
              <div className="flex flex-col gap-3 font-bold text-[14px]">
                <h4 className="text-[9px] uppercase tracking-[2px] text-[#3b82f6] mb-1">Legal</h4>
                {['Privacy', 'Terms', 'License'].map(t => <a key={t} href="#" className="text-slate-500 hover:text-white transition-colors">{t}</a>)}
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-3">
              <div className="p-6 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl">
                 <h4 className="text-[14px] font-bold text-white mb-3">Stay Tuned</h4>
                 <input type="email" placeholder="Your email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white mb-3 focus:border-[#3b82f6] outline-none text-xs" />
                 <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-2.5 rounded-lg transition-all text-[10px] uppercase tracking-widest">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-bold">
            <p className="text-[12px]">© 2026 SocialSphere Inc. | <span className="text-slate-400">Manas</span></p>
            <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[9px] uppercase tracking-widest text-slate-400">Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>

      {/* The Global Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type={modalType} />
    </div>
  );
};

export default HomePage;