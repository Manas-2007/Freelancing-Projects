import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PatientSidebar from './Sidebar';
import Navbar from './Navbar'; // Changed back to local folder based on your structure
import Hero from './Hero'; // Changed back to local folder based on your structure

// Add these back so the Routes don't break
import BloodReq from './BloodReq';
import DonorPool from './DonorPool';
import History from './History';
import Notifications from './Notifications';
import Profile from './Profile';

const PatientDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      {/* This is the sidebar code I just gave you */}
      <PatientSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 md:ml-[280px] flex flex-col h-screen overflow-y-auto no-scrollbar">
        <Navbar setIsOpen={setIsOpen} />
        
        <div className="px-[20px] md:px-[35px] pb-[35px]">
          <Routes>
            {/* Fixes the white screen issue by defaulting to the hero section */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route path="/dashboard" element={<Hero />} />
            <Route path="/requests" element={<BloodReq />} />
            <Route path="/donors" element={<DonorPool />} />
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