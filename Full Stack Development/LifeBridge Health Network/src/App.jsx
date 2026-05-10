import React, { useState, useEffect } from "react";
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
  const [user, setUser] = useState(null); // User ka saara data yahan rahega
  const [userType, setUserType] = useState(null); 
  const [donorMode, setDonorMode] = useState(null);    
  const [patientMode, setPatientMode] = useState(null); 

  // --- 🔄 REFRESH HANDLER (Master Fix) ---
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    // Maan lete hain storage mein userType bhi save hai, ya user object ke andar hai
    if (savedUser && token) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
      // Agar aapne registration ke waqt userType save kiya hai toh wo yahan se uthao
      setUserType(parsedUser.role || 'donor'); 
    }
  }, []);

  // --- LOGIN HANDLERS ---

  const handleDonorLogin = () => {
    setDonorMode(null);
    setUserType('donor');
    setIsLoggedIn(true);
    // User data useEffect se ya login response se set ho jayega
  };

  const handlePatientLogin = () => {
    setPatientMode(null);
    setUserType('patient');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setUserType(null);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 font-sans">
      
      {!isLoggedIn ? (
        <>
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
                onLoginSuccess={handlePatientLogin}
              />
            </div>
          )}
        </>
      ) : (
        /* --- DASHBOARD SELECTION (Updated Props) --- */
        userType === 'donor' ? (
          <DonorDashboard 
            setIsLoggedIn={setIsLoggedIn} 
            setUser={setUser} 
            onLogout={handleLogout} 
          />
        ) : (
          <PatientDashboard 
            setIsLoggedIn={setIsLoggedIn} 
            setUser={setUser} 
            onLogout={handleLogout} 
          />
        )
      )}

    </div>
  );
}

export default App;