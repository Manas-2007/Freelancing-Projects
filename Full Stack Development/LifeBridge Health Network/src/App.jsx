import React from "react";
import Navbar from "./components/homepage/Navbar";
import Hero from "./components/homepage/Hero";
import InfoSection from "./components/homepage/InfoSection";
import HowItWorks from "./components/homepage/HowItWorks";
import Testimonials from "./components/homepage/Testimonials";
import Footer from "./components/homepage/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar /> 
      <main>
        <Hero />
        <InfoSection />
        <HowItWorks />
        <Testimonials/>
      </main>
   <Footer />
    </div>
  );
}

export default App;