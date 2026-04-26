import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Ravi Sharma', location: 'Hyderabad', text: 'LifeDrop helped me find blood for my father during a critical time. Forever grateful for this platform.' },
    { name: 'Anjali Verma', location: 'Bangalore', text: 'A very seamless experience! I got notified and was able to donate near my home.' },
    { name: 'Mohit Jain', location: 'Pune', text: 'Finally, a platform that connects help seekers and donors so efficiently. Great initiative!' },
  ];

  return (
    <>
      {/* Add custom floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

      {/* ── SECTION 1: TESTIMONIALS ── */}
      <section className="py-7 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-red-600 font-semibold tracking-widest text-xs uppercase mb-3 block">Testimonials</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-16 tracking-tight">What People Say</h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 shadow-2xl">
            {reviews.map((r, i) => (
              <div 
                key={i} 
                className="animate-float"
                style={{ animationDelay: `${i * 0.7}s` }} // Staggered animation
              >
                <div 
                  className="bg-white p-8 rounded-[2rem] border border-red-600 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-900/5 hover:bg-red-50 hover:ring-red-200 transition-all duration-500 text-left group h-full"
                >
                  <Quote className="text-red-100 mb-6 group-hover:text-red-400 transition-colors duration-500" size={40} />
                  <p className="text-gray-600 mb-8 leading-relaxed italic text-[15px]">{r.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600">
                      {r.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{r.name}</h4>
                      <p className="text-xs text-red-500 font-medium">{r.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;