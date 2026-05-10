import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PatientSidebar from './Sidebar'; // Ensure this is your Sidebar with the Logout button
import Navbar from './Navbar'; 
import Hero from './Hero'; 
import BloodReq from './BloodReq';
import DonorPool from './DonorPool';
import History from './History';
import Notifications from './Notifications';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
// Added onLogout and user as props to keep it dynamic
const PatientDashboard = ({ onLogout, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Use the name from props, or default to Manas if not available
  const userName = user?.name || "Manas";

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      {/* 1. Pass onLogout to the Sidebar so the button works */}
      <PatientSidebar 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        onLogout={onLogout} 
      />

      <main className="flex-1 md:ml-[280px] flex flex-col h-screen overflow-y-auto no-scrollbar">
        {/* 2. Pass userName to the Navbar for the "Welcome" greeting and Profile Initial */}
        <Navbar setIsOpen={setIsOpen} userName={userName} />
        
        {/* 3. Main Content Wrapper */}
        <div className="w-full px-[10px] md:px-[2.5%] md:py-[20px]">
          <Routes>
            {/* Automatic redirect to dashboard tab */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* dashboard renders the Hero (Banner + Counters) */}
            <Route path="/dashboard" element={<Hero />} />
            
            <Route path="/requests" element={<BloodReq />} />
            <Route path="/pool" element={<DonorPool />} />
            <Route path="/pool/:donorId" element={<DonorPool />} />
            <Route path="/history" element={<History />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;