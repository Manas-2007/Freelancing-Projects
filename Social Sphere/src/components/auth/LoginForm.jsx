import React from 'react';

const AuthModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-[20px]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-[4px]" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-[450px] rounded-[32px] p-[40px] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-[24px] right-[24px] text-[#94a3b8] hover:text-[#1e293b] text-[20px]"
        >
          ✕
        </button>

        <div className="text-center mb-[32px]">
          <h2 className="text-[28px] font-[800] text-[#1e293b]">
            {type === 'login' ? 'Welcome Back' : 'Join SocialSphere'}
          </h2>
          <p className="text-[14px] text-[#64748b] mt-[8px]">
            {type === 'login' ? 'Enter your details to continue' : 'Create an account to start sharing'}
          </p>
        </div>

        <form className="flex flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[14px] font-[700] text-[#475569] ml-[4px]">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full px-[20px] py-[14px] bg-[#f8fafc] border-[1.5px] border-[#e2e8f0] rounded-[14px] focus:outline-none focus:border-[#3b82f6] transition-all text-[15px]"
            />
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="text-[14px] font-[700] text-[#475569] ml-[4px]">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-[20px] py-[14px] bg-[#f8fafc] border-[1.5px] border-[#e2e8f0] rounded-[14px] focus:outline-none focus:border-[#3b82f6] transition-all text-[15px]"
            />
          </div>

          <button className="w-full bg-[#3b82f6] text-white py-[16px] rounded-[14px] font-[700] text-[16px] shadow-[0_10px_20px_-5px_rgba(59,130,246,0.3)] hover:bg-[#2563eb] transition-all mt-[10px]">
            {type === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-[24px] text-center">
          <p className="text-[14px] text-[#64748b]">
            {type === 'login' ? "Don't have an account?" : "Already have an account?"}
            <button className="text-[#3b82f6] font-[700] ml-[6px] hover:underline">
              {type === 'login' ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;