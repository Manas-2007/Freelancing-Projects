import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import StatusNavbar from './StatusNavbar'; 
import HeroSection from './HeroSection';
import RequestsAndActivity from './Notifications';
import FooterSection from './Footer';


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Move the donor data into State so it becomes truly dynamic
  const [donorData, setDonorData] = useState({
    name: "Manas Patidar",
    bloodGroup: "B+",
    location: "Bhopal",
    age: 18,
    donations: 12,
    daysLeft: 10,
    totalDays: 90,
    nextDate: "18 June 2026",
    isAvailable: true,
    livesSaved: 36, 
    streak: "5 yrs"
  });

  // 2. Updated function to flip the availability status
  const toggleAvailability = () => {
    setDonorData(prev => ({ 
      ...prev, 
      isAvailable: !prev.isAvailable 
    }));
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-[280px] flex flex-col h-screen overflow-y-auto no-scrollbar">
        <StatusNavbar setIsOpen={setIsOpen} />
        
        <div className="px-[20px] md:px-[35px] pb-[35px]">
          <Routes>
            <Route path="/dashboard" element={
              <div className="space-y-8 mt-2">
                
                {/* HERO PROFILE SECTION */}
                <HeroSection donor={donorData} onToggle={toggleAvailability} />


                {/* STATS GRID - 2 columns on mobile, 4 on desktop */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

  {[
    { label: "Total Donations", val: donorData.donations, unit: "Lifetime", icon: "🩸", type: "red" },
    { label: "Lives Saved", val: donorData.livesSaved, unit: "≈3 per donation", icon: "❤️", type: "rose" },
    { label: "Donation Streak", val: donorData.streak, unit: "Consistent hero", icon: "🔥", type: "orange" },
    { label: "Next Eligible", val: donorData.daysLeft, unit: "Days left", icon: "⌛", type: "red", urgent: true }
  ].map((stat, idx) => (

    <div
      key={idx}
      className={`
        relative overflow-hidden group
        p-4 sm:p-5 md:p-6
        rounded-[22px] md:rounded-[28px]

        bg-white/80 backdrop-blur-md
        border border-gray-200/60

        shadow-2xl hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      `}
    >

      {/* soft glow */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        bg-gradient-to-br from-red-50 via-transparent to-transparent
      " />

      {/* TOP ROW */}
      <div className="flex justify-between items-center mb-3 relative z-10">

        <p className="text-black font-[700] text-[px] sm:text-[10px] md:text-[11px] uppercase tracking-[1.5px]">
          {stat.label}
        </p>

        <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
          {stat.icon}
        </span>

      </div>

      {/* VALUE */}
      <div className="flex flex-col relative z-10">

        <h3 className={`
          text-2xl sm:text-3xl md:text-4xl font-[700] tracking-tight

          ${stat.type === "red" ? "text-red-600" : ""}
          ${stat.type === "rose" ? "text-rose-500" : ""}
          ${stat.type === "orange" ? "text-orange-500" : ""}
        `}>
          {stat.val}
        </h3>

        <p className="text-[10px] sm:text-[11px] md:text-[12px] font-medium text-black mt-1">
          {stat.unit}
        </p>

      </div>

      {/* subtle bottom line */}
      <div className="
        absolute bottom-0 left-0 w-full h-[2px]
        bg-gradient-to-r from-transparent via-red-400/30 to-transparent
        opacity-0 group-hover:opacity-100 transition
      "/>

    </div>

  ))}

</div>

      <RequestsAndActivity />
      <FooterSection />
             </div>
            } />
            
            <Route path="/requests" element={<div className="p-10 text-xl font-bold">Nearby Requests Page</div>} />
            <Route path="/history" element={<div className="p-10 text-xl font-bold">Donation History Page</div>} />
            <Route path="/schedule" element={<div className="p-10 text-xl font-bold">Schedule Appointment</div>} />
            <Route path="/notifications" element={<div className="p-10 text-xl font-bold">Notifications Center</div>} />
            <Route path="/settings" element={<div className="p-10 text-xl font-bold">Account Settings</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;