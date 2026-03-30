import React from 'react';
import { X, ArrowRight, Zap, Target, Sparkles, UserCheck, Search, FileText } from 'lucide-react';

const InfoModal = ({ isOpen, onClose, tabType }) => {
  if (!isOpen) return null;

  // 1. PROFESSIONAL PRODUCT DESCRIPTION LOGIC
  const getDetailedContent = () => {
    switch (tabType) {
      case 'Home':
        return {
          title: "SocialSphere Manifesto",
          icon: <Sparkles size={24} className="text-blue-600" />,
          accent: "border-blue-600",
          mainText: "Welcome to SocialSphere, a next-generation social ecosystem engineered to bridge high-performance technology with seamless human connection.",
          subText: "This platform is not just about scrolling; it's a curated experience where creators and thinkers unite. We've built a digital infrastructure where speed, aesthetic precision, and user autonomy are paramount.",
          footerNote: "The Future of Connection"
        };
      case 'Features':
        return {
          title: "Platform Capabilities",
          icon: <Zap size={24} className="text-amber-500" />,
          accent: "border-amber-500",
          mainText: "Our integrated dashboard is built on four core pillars that define the SocialSphere experience:",
          details: [
            { icon: <FileText size={18}/>, label: "Dynamic Feed Engine:", text: "Share your moments and view updates from friends in a clean, high-contrast, magazine-style interface." },
            { icon: <Search size={18}/>, label: "Global Discovery:", text: "Explore trending content and find new creators through a professional, optimized 3-column grid." },
            { icon: <Target size={18}/>, label: "Profile Tracking:", text: "Monitor your digital footprint, track post impressions, and maintain daily activity streaks in real-time." },
            { icon: <UserCheck size={18}/>, label: "Secure Gateway:", text: "Robust Registration and Login protocols ensure that your profile and data remain protected and private." }
          ],
          footerNote: "Engineered for Performance"
        };
      case 'About':
        return {
          title: "The Developer's Vision",
          icon: <Target size={24} className="text-emerald-500" />,
          accent: "border-emerald-500",
          mainText: "SocialSphere is designed and engineered by Manas Kumar, a forward-thinking student currently specializing in Artificial Intelligence and Robotics.",
          subText: "This project serves as a flagship demonstration that undergraduate-level engineering can achieve professional, SaaS-grade software standards. The goal is to synthesize intelligent UI/UX principles with optimized coding practices to make the digital experience feel intuitive, fast, and inherently human.",
          footerNote: "Developed by Manas v2.4"
        };
      default:
        return {};
    }
  };

  const content = getDetailedContent();

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 animate-in fade-in duration-300">
      {/* 1. SOFT BACKDROP */}
      <div 
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      {/* 2. WIDE WHITE MODAL (Fixed Height & Internal Scroll) */}
      <div className="relative w-full max-w-[700px] h-[85vh] max-h-[650px] bg-white rounded-[45px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.4)] 
        overflow-hidden border border-slate-100 flex flex-col
        animate-in slide-in-from-right-40 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] font-sans">
        
        {/* --- LOCKED HEADER SECTION --- */}
        <div className={`flex-shrink-0 px-12 pt-10 pb-6 border-b-4 ${content.accent} bg-white z-10`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div className={`p-3.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-transform hover:rotate-6`}>
                {content.icon}
              </div>
              <h3 className="text-[26px] font-bold text-slate-900 tracking-tight leading-none">
                {content.title}
              </h3>
            </div>
            <button 
              onClick={onClose} 
              className="w-11 h-11 flex items-center justify-center hover:bg-slate-100 rounded-full text-slate-400 transition-all active:scale-90"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* --- SCROLLABLE CONTENT AREA with STYLISH SCROLLBAR --- */}
        <div className="flex-1 px-12 py-10 overflow-y-auto 
          scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent scrollbar-thumb-rounded-full
          hover:scrollbar-thumb-blue-100 transition-all duration-300">
          
          <div className="space-y-8 animate-in fade-in duration-1000 delay-150">
            <p className="text-[18px] text-slate-800 leading-[1.6] font-semibold">
              {content.mainText}
            </p>
            
            {/* Conditional Rendering for Features List */}
            {content.details ? (
              <div className="grid grid-cols-1 gap-5 mt-6">
                {content.details.map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                    <div className="mt-1 p-2 bg-white rounded-lg shadow-sm text-blue-600">
                        {item.icon}
                    </div>
                    <div>
                        <span className="text-slate-900 font-bold text-[15px] block mb-1">{item.label}</span>
                        <span className="text-slate-600 text-[13.5px] font-medium leading-relaxed block">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Subtext with decorative bar */
              <div className="relative pl-8 py-2">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${content.accent.replace('border','bg')} rounded-full opacity-60`}></div>
                <p className="text-[16px] text-slate-600 leading-relaxed font-medium italic">
                    {content.subText}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* --- LOCKED FOOTER SECTION --- */}
        <div className="flex-shrink-0 px-12 py-8 bg-white border-t border-slate-100 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
             <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
             <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[2px]">
               {content.footerNote}
             </span>
          </div>
          <button 
            onClick={onClose}
            className="group flex items-center gap-3 bg-slate-900 text-white px-9 py-3.5 rounded-2xl font-bold text-[14px] hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-900/10"
          >
            Acknowledge <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;