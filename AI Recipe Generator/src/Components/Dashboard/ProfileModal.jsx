import { FaTimes, FaCheckCircle, FaIdBadge, FaUserAlt, FaSignOutAlt, FaShieldAlt } from "react-icons/fa";

export function ProfileModal({ user, onClose, onLogout }) {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-[#02020a]/45 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-sm bg-white/[0.03] backdrop-blur-3xl border border-white rounded-[40px] shadow-[0_0_80px_rgba(0,0,0,0.4)] overflow-hidden animate-in fade-in zoom-in duration-500">
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
        
        <div className="px-10 pb-12 pt-10 flex flex-col items-center">
          {/* Avatar Section */}
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full border border-white p-1 backdrop-blur-xl overflow-hidden">
              <img src={user.avatar} className="w-full h-full object-cover" alt="Profile" />
            </div>
            {user.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                <FaCheckCircle className="text-white text-[10px]" />
              </div>
            )}
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-white text-lg font-light tracking-[0.3em] uppercase">{user.name}</h2>
            <div className="flex items-center justify-center gap-2 opacity-60">
              <FaShieldAlt className="text-blue-400 text-[8px]" />
              <span className="text-white text-[9px] font-light tracking-[0.2em] uppercase">Verified Identity</span>
            </div>
          </div>

          {/* Details */}
          <div className="w-full mt-10 space-y-2">
            <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white rounded-2xl">
              <span className="text-white/60 text-[9px] uppercase tracking-widest">Identity</span>
              <span className="text-white/80 text-[15px] tracking-wider">{user.name}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white rounded-2xl">
              <span className="text-white/60 text-[9px] uppercase tracking-widest">Core ID</span>
              <span className="text-blue-400/80 text-[15px] font-mono tracking-tighter">{user.id}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full mt-10 space-y-3">
            <button 
              onClick={() => {
                if(window.confirm("Terminate current session?")) {
                  onLogout(); // 🔥 Dashboard ka logout call hoga
                }
              }}
              className="w-full py-3.5 bg-red-600 border border-red-500/20 rounded-2xl text-white text-[12px] font-[500] uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-3 group hover:bg-red-500 shadow-lg shadow-red-900/20"
            >
              <FaSignOutAlt className="group-hover:-translate-x-1 transition-transform" />
              Logout Session
            </button>

            <button onClick={onClose} className="w-full py-3.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-2xl text-white/50 text-[12px] font-[500] uppercase tracking-[0.3em] transition-all">
              Close Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}