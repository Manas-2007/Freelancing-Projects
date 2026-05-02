import React, { useState } from "react";
import Navbar from "./components/homepage/Navbar";
import Hero from "./components/homepage/Hero";
import InfoSection from "./components/homepage/InfoSection";
import HowItWorks from "./components/homepage/HowItWorks";
import Testimonials from "./components/homepage/Testimonials";
import Footer from "./components/homepage/Footer";
import DRegister from "./components/auth/DRegister";
import PRegister from "./components/auth/PRegister";
import Dashboard from './components/DonorDash/Dashboard';

function App() {
  // Logic States
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Controls Home vs Dashboard
  const [donorMode, setDonorMode] = useState(null);    // Controls Donor Modal
  const [patientMode, setPatientMode] = useState(null); // Controls Patient Modal

  // Function to trigger the move to Dashboard
  const handleDonorLogin = () => {
    setDonorMode(null); // Close the modal first
    setIsLoggedIn(true); // Switch view to Dashboard
  };

  // Function to return to Home (for Logout later)
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 font-sans">
      
      {/* 
          CONDITIONAL RENDERING: 
          If NOT logged in, show Homepage. 
          If logged in, show Dashboard.
      */}
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
                onLoginSuccess={handleDonorLogin} // Pass the login trigger here
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
              />
            </div>
          )}
        </>
      ) : (
        /* --- DONOR DASHBOARD SECTION --- */
        <Dashboard onLogout={handleLogout} />
      )}

    </div>
  );
}

export default App;