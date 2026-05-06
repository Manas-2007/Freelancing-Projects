import React from 'react';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";

const Navbar = ({ setIsOpen }) => {
  return (
    <nav className="h-[70px] bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl text-gray-600 p-1 hover:bg-gray-100 rounded-lg"
        >
          <HiOutlineMenuAlt2 />
        </button>
        <h2 className="text-xl font-bold text-gray-800 hidden md:block">Patient Overview</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <MdOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search donors..." 
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#880808] w-[200px]"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#880808] border-2 border-white shadow-sm flex items-center justify-center text-white font-bold">
          M
        </div>
      </div>
    </nav>
  );
};

// 🔴 THE MISSING LINE THAT CAUSES THE ERROR:
export default Navbar;