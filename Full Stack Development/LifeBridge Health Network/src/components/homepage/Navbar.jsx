import React, { useState } from 'react';
import { Menu, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', active: true },
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Eligibility', href: '/eligibility' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white z-50 shadow-lg h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img src="/navlogo.jpg" alt="LifeDrop Logo" className="h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-none">
                Life<span className='text-[red]'>Drop</span>
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wide">
                Donate Blood, Save Lives
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-medium text-gray-700 hover:text-red-600 py-1 transition-colors duration-300 group ${link.active ? 'text-red-600' : ''}`}
              >
                {link.name}
                <span className={`absolute bottom-[-10px] left-0 h-0.5 bg-red-600 transition-all duration-300 ease-in-out ${link.active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex">
            <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all shadow-md hover:shadow-lg">
              <User size={18} />
              Login / Register
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-gray-600 p-2">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-Canvas Menu */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer */}
        <div className={`fixed top-0 left-0 w-[85%] max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

          {/* FIXED CLOSE BUTTON (Now using SVG for reliability) */}
          <div className="absolute top-6 right-6 z-[110]">
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 active:scale-95 transition shadow-sm"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* PREMIUM CENTERED LOGO SECTION */}
          <div className="relative p-8 border-b border-gray-100 flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="absolute top-6 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-40"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-md border border-gray-100 mb-4">
              <img src="/navlogo.jpg" alt="LifeDrop" className="h-14 w-14 object-contain" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">Life<span className="text-red-600">Drop</span></span>
            <p className="text-xs text-gray-500 mt-1 tracking-wide text-center">Donate Blood • Save Lives • Create Impact</p>
          </div>

          {/* PREMIUM GLASS NAV LINKS */}
          <div className="flex-1 overflow-y-auto py-5 px-4 space-y-2">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center px-5 py-4 rounded-2xl bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-xl text-gray-800 font-medium text-base shadow-sm border border-white/40 active:scale-[0.97] transition-all duration-300 ease-out overflow-hidden"
                >
                  <span className="absolute inset-0 opacity-0 group-active:opacity-100 group-hover:opacity-100 bg-gradient-to-r from-red-50 via-red-100 to-transparent transition-all duration-300"></span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1 rounded-full bg-red-500 shadow-md shadow-red-200"></span>
                  <span className="relative z-10 group-active:text-red-600 group-active:translate-x-1 transition-all duration-300">
                    {link.name}
                  </span>
                </a>
                {index !== navLinks.length - 1 && <hr className="my-2 border-t border-gray-100/80" />}
              </div>
            ))}
          </div>

          {/* BOTTOM ACTION */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <button className="w-full flex justify-center items-center gap-2 bg-red-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-700 active:scale-95 transition-all shadow-lg">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;