import React, { useState } from "react";
import Navbar from "./components/homepage/Navbar";
import Hero from "./components/homepage/Hero";
import InfoSection from "./components/homepage/InfoSection";
import HowItWorks from "./components/homepage/HowItWorks";
import Testimonials from "./components/homepage/Testimonials";
import Footer from "./components/homepage/Footer";
import DRegister from "./components/auth/DRegister";
import PRegister from "./components/auth/PRegister";

function App() {
  const [donorMode, setDonorMode] = useState(null);
  const [patientMode, setPatientMode] = useState(null);

  return (
    <div className="relative min-h-screen bg-gray-50">

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
      {/* 🔴 DONOR (LOGIN + REGISTER TOGGLE) */}
{donorMode && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
    <DRegister
      mode={donorMode}
      setMode={setDonorMode}
      onClose={() => setDonorMode(null)}
    />
  </div>
)}

      {/* 🟣 PATIENT (LOGIN + REGISTER TOGGLE IN ONE MODAL) */}
      {patientMode && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <PRegister
            mode={patientMode}
            setMode={setPatientMode}
            onClose={() => setPatientMode(null)}
          />
        </div>
      )}

    </div>
  );
}

export default App;