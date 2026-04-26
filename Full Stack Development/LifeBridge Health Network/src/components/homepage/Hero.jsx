import React from 'react';
import { MapPin, Droplets, Heart,Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-[120px] pb-15 bg-white overflow-hidden">
      {/* Custom Animation Style */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(35px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
<div className="md:w-1/2 space-y-6">
  <div className="text-red-600 font-[700] tracking-widest text-xs uppercase">
    Every Drop Counts
  </div>
  
  <h1 className="text-4xl md:text-6xl font-[700] text-gray-900 tracking-tight leading-[1.1]">
    Donate Blood, <br/>
    <span className="text-red-600">Save Lives</span>
  </h1>
  
  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
    A single blood donation can save up to three lives. Be a hero. Be a donor.
  </p>

  {/* Buttons Container */}
  <div className="flex flex-col sm:flex-row gap-4 pt-4">
    
    {/* I Need Blood Button */}
    <button className="flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200">
      <Droplets className="w-8 h-8 flex-shrink-0" />
      <div className="text-left">
        <div className="text-base">I Need Blood</div>
        <div className="text-xs font-normal opacity-90">Request for blood</div>
      </div>
    </button>

    {/* I Want to Donate Button */}
    <button className="flex items-center gap-3 border-2 border-red-200 bg-white text-red-600 px-6 py-4 rounded-xl font-bold hover:border-red-600 transition-all">
      <Users className="w-8 h-8 flex-shrink-0" /> {/* Changed icon to Users for 'I Want to Donate' */}
      <div className="text-left">
        <div className="text-base">I Want to Donate</div>
        <div className="text-xs font-normal opacity-90">Become a donor</div>
      </div>
    </button>
  </div>

  <div className="flex items-center gap-2 text-gray-500 pt-6">
    <MapPin size={18} className="text-red-600" />
    <span className="text-sm font-medium">Find donors near you. Save time. Save lives.</span>
  </div>
</div>

        {/* Right Illustration */}
        <div className="md:w-1/2 flex justify-center items-center shadow-2xl">
          <img 
            src="/herohome.jpg" 
            alt="Blood Donation" 
            className="w-full max-w-sm md:max-w-lg object-contain  animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;