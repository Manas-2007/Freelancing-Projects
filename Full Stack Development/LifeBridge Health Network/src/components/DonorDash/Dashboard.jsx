import React, { useState } from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import StatusNavbar from './StatusNavbar'; 
import HeroSection from './HeroSection';
import RequestsAndActivity from './Notifications'; 
import FooterSection from './Footer'; 
import DonationHistory from './BloodHistory'; 
import Notifications from './NotifyTab';
import ReqTab from './ReqTab'; 
import Schedule from './Schedule';
import Profile from './profile';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleAvailability = () => {
    setDonorData(prev => ({ ...prev, isAvailable: !prev.isAvailable }));
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 md:ml-[280px] flex flex-col h-screen overflow-y-auto no-scrollbar">
        <StatusNavbar setIsOpen={setIsOpen} />
        
        <div className="px-[20px] md:px-[35px] pb-[35px]">
          <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route path="/dashboard" element={
              <div className="space-y-8 mt-2">
                <HeroSection donor={donorData} onToggle={toggleAvailability} />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { label: "Total Donations", val: donorData.donations, unit: "Lifetime", type: "red" },
                    { label: "Lives Saved", val: donorData.livesSaved, unit: "≈3 per donation", type: "rose" },
                    { label: "Donation Streak", val: donorData.streak, unit: "Consistent hero", type: "orange" },
                    { label: "Next Eligible", val: donorData.daysLeft, unit: "Days left", type: "red" }
                  ].map((stat, idx) => (
                    <div key={idx} className="relative overflow-hidden group p-4 sm:p-5 md:p-6 rounded-[22px] md:rounded-[28px] bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1">
                      <p className="text-gray-400 font-bold text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[1.5px] mb-3">
                        {stat.label}
                      </p>
                      <h3 className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight ${stat.type === "red" ? "text-red-600" : stat.type === "rose" ? "text-rose-500" : "text-orange-500"}`}>
                        {stat.val}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-gray-400 mt-1 uppercase tracking-wider">
                        {stat.unit}
                      </p>
                      <div className={`absolute left-0 top-0 h-full w-[4px] opacity-0 group-hover:opacity-100 transition-opacity ${stat.type === "red" ? "bg-red-600" : stat.type === "rose" ? "bg-rose-500" : "bg-orange-500"}`} />
                    </div>
                  ))}
                </div>

                <RequestsAndActivity />
                <FooterSection />
              </div>
            } />
            
            <Route path="/history" element={<DonationHistory />} />
            <Route path="/notifications" element={<Notifications />} />
           <Route path="/requests" element={<ReqTab />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;