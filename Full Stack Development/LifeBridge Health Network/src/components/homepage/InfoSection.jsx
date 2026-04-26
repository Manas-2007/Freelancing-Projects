import React from 'react';
import { Droplets, Users, ShieldCheck, HeartPulse, Hospital } from 'lucide-react';

/* ── Reusable Circle Wrapper ── */
const IconCircle = ({ children }) => {
  return (
    <div
      className="w-[68px] h-[68px] rounded-full flex items-center justify-center shrink-0"
      style={{
        background: 'linear-gradient(145deg, #f1ebeb, #fff)',
        border: '1.5px solid red',
        boxShadow: '0 4px 14px 0 rgba(192,0,26,0.13), 0 1px 3px rgba(192,0,26,0.08)',
      }}
    >
      <div className="flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

/* ── UI Components ── */
const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center">
    <IconCircle>
      <Icon className="text-red-600" size={32} strokeWidth={2} />
    </IconCircle>
    <h3 className="mt-4 mb-1.5 text-[16px] font-bold text-gray-900">{title}</h3>
    <p className="text-[13px] leading-[1.6] text-gray-500 max-w-[130px]">{desc}</p>
  </div>
);

const StatCard = ({ icon: Icon, count, label }) => (
  <div className="flex flex-col items-center text-center">
    <IconCircle>
      <Icon className="text-red-600" size={32} strokeWidth={2} />
    </IconCircle>
    <span className="mt-4 text-[26px] font-[600] text-gray-900 leading-none tracking-tight">
      {count}
    </span>
    <span className="mt-1.5 text-[13px] font-[500] text-gray-500 uppercase tracking-widest">
      {label}
    </span>
  </div>
);

/* ── Main Component ── */
const InfoSection = () => {
  const features = [
    { icon: Droplets, title: 'Quick Request', desc: 'Request blood in emergencies instantly.' },
    { icon: Users, title: 'Nearby Donors', desc: 'Connect with nearby donors in your location.' },
    { icon: ShieldCheck, title: 'Secure & Safe', desc: 'Your data is safe with us. We care for your privacy.' },
    { icon: HeartPulse, title: 'Save Lives', desc: "Your small step can be someone's second chance." },
  ];

  const stats = [
    { icon: Droplets, count: '3,500+', label: 'Donors' },
    { icon: Users, count: '2,000+', label: 'Lives Saved' },
    { icon: Hospital, count: '320+', label: 'Requests Fulfilled' },
  ];
 
  return (
    <section className="py-10 px-4 bg-[#fafafa]">
      {/* 90% width container */}
      <div className="w-[90%] max-w-[1200px] mx-auto bg-white rounded-[24px] p-6 sm:p-8 md:p-10 shadow-[0_6px_32px_0_rgba(0,0,0,0.07)] border border-[red]">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 w-full">
          
          {/* Features Grid */}
          <div className="flex-[2] w-full grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>

          {/* Divider */}
          <div className="hidden lg:block self-stretch w-[1px] bg-gray-200" />
          <div className="block lg:hidden w-full h-[1px] bg-gray-200" />

          {/* Stats Row */}
          <div className="flex-[1] w-full grid grid-cols-3 gap-2">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;