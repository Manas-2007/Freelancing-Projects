import React, { useState } from "react";
import Navbar from "./components/homepage/Navbar";
import Hero from "./components/homepage/Hero";
import InfoSection from "./components/homepage/InfoSection";
import HowItWorks from "./components/homepage/HowItWorks";
import Testimonials from "./components/homepage/Testimonials";
import Footer from "./components/homepage/Footer";
import DRegister from "./components/auth/DRegister";
import PRegister from "./components/auth/PRegister";
import DonorDashboard from './components/DonorDash/Dashboard';
import PatientDashboard from './components/PatientDash/Dashboard';

function App() {
  // Logic States
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userType, setUserType] = useState(null); // Tracks 'donor' or 'patient'
  const [donorMode, setDonorMode] = useState(null);    
  const [patientMode, setPatientMode] = useState(null); 

  // --- LOGIN HANDLERS ---

  const handleDonorLogin = () => {
    setDonorMode(null);
    setUserType('donor'); // Set type before logging in
    setIsLoggedIn(true);
  };

  const handlePatientLogin = () => {
    setPatientMode(null);
    setUserType('patient'); // Set type before logging in
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 font-sans">
      
      {!isLoggedIn ? (
        <>
          {/* --- LANDING PAGE SECTION --- */}
          <Navbar onRegisterClick={() => setDonorMode("register")} />

          <main>
            <Hero
              onRegisterClick={() => setDonorMode("register")}
              onPatientAuth={(mode) => setPatientMode(mode)}
            />
            <InfoSection />
            <HowItWorks />
            <Testimonials />
          </main>

          <Footer />

          {/* 🔴 DONOR MODAL */}
          {donorMode && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <DRegister
                mode={donorMode}
                setMode={setDonorMode}
                onClose={() => setDonorMode(null)}
                onLoginSuccess={handleDonorLogin} 
              />
            </div>
          )}

          {/* 🟣 PATIENT MODAL */}
          {patientMode && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <PRegister
                mode={patientMode}
                setMode={setPatientMode}
                onClose={() => setPatientMode(null)}
                onLoginSuccess={handlePatientLogin} // Pass the new patient trigger here
              />
            </div>
          )}
        </>
      ) : (
        /* --- DASHBOARD SELECTION --- */
        userType === 'donor' ? (
          <DonorDashboard onLogout={handleLogout} />
        ) : (
          <PatientDashboard onLogout={handleLogout} />
        )
      )}

    </div>
  );
}

export default App;