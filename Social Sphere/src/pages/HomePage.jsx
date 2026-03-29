import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/home/hero';
import FeatureCard from '../components/home/FeatureCard';
import AuthModal from '../components/auth/LoginForm';
const HomePage = () => {
  // 1. State for Modal Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login'); 

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  // 2. Feature Data (keeping it inside or outside for mapping)
  const featureData = [
    { title: "Create Your Profile", desc: "Set up your profile and personalize", icon: "👤", color: "bg-[#eff6ff]" },
    { title: "Share Photos & Posts", desc: "Share your moments with the world", icon: "🖼️", color: "bg-[#fdf2f8]" },
    { title: "Follow & Explore", desc: "Follow friends and discover new trends", icon: "🔍", color: "bg-[#f0fdf4]" },
    { title: "Get Notifications", desc: "Stay updated with alerts & messages", icon: "🔔", color: "bg-[#fffbeb]" },
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      
      {/* Navbar: Passing the openModal function as props */}
      <Navbar 
        onLogin={() => openModal('login')} 
        onSignUp={() => openModal('signup')} 
      />

      <main>
        {/* Hero Section */}
        <Hero onJoin={() => openModal('signup')} />

        {/* Feature Section: The 4 Cards */}
        <section className="bg-white py-[100px] px-[20px] relative z-[20] mt-[-60px]">
          <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-[24px]">
            {featureData.map((data, index) => (
              <FeatureCard 
                key={index}
                title={data.title}
                desc={data.desc}
                icon={data.icon}
                color={data.color}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-[60px] border-t border-[#f1f5f9] text-center">
        <p className="text-[14px] font-[600] text-[#94a3b8]">
          © 2026 <span className="text-[#3b82f6]">SocialSphere</span> — Designed for your Portfolio
        </p>
      </footer>

      {/* Auth Modal: Controlled by the state above */}
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
      />

    </div>
  );
};

export default HomePage;