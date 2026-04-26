import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { num: '1', title: 'Register / Login', desc: 'Create your account in just a few clicks.', img: '/how1.jpg' },
    { num: '2', title: 'Search / Request', desc: 'Search blood or request for blood in your area.', img: '/how2.jpg' },
    { num: '3', title: 'Get Matched', desc: 'We notify nearby donors and match instantly.', img: '/how3.jpg' },
    { num: '4', title: 'Save Lives', desc: 'Donation happens and lives are saved.', img: '/how4.jpg' },
  ];

  return (
    <section className="py-6 bg-white">
      {/* ── PART 1: EASY STEPS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <h4 className="text-red-600 font-bold tracking-widest text-sm uppercase mb-2">Easy Steps</h4>
        <h2 className="text-4xl font-bold text-gray-900 mb-16">How <span className='text-[red]'>LifeDrop</span> Works</h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col shadow-2xl items-center  relative w-full md:w-64 p-6 bg-red-50/30 rounded-3xl hover:bg-red-50 transition-colors duration-300">
                <span className="absolute top-4 left-4 text-2xl font-bold text-red-600/20">{step.num}</span>
                <div className="h-40 w-40 flex items-center justify-center mb-6 overflow-hidden">
                  <img src={step.img} alt={step.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden md:block text-red-700">
                  <ArrowRight size={32} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── PART 2: CTA BANNER (Be the Reason) ── */}
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="relative bg-red-600 rounded-[32px] overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch">
          
          {/* Text Content */}
          <div className="relative z-10 w-full md:w-3/5 p-8 md:p-11 text-white flex flex-col justify-center">
            <h4 className="font-medium tracking-[0.2em] text-xs uppercase mb-4 opacity-80">
              Be the Reason
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Someone Smiles Today
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-lg leading-relaxed">
              Your one donation can bring back smiles, hope and happiness in someone's life.
            </p>
            <button className="w-fit flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-md">
              Join as a Donor <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-2/5 min-h-[300px] md:h-auto">
            <img 
              src="/homelow.jpg" 
              alt="Hands holding heart" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;