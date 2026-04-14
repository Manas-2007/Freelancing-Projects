import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Green tick ke liye

export function Security({ onSuccess, onClose }) {
  const [mode, setMode] = useState("login");
  const [loginData, setLoginData] = useState({ id: "", password: "" });
  const [registerData, setRegisterData] = useState({ id: "", username: "", password: "" });
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // Success screen ke liye

  // --- REGISTER LOGIC ---
  const handleRegister = () => {
    const id = Number(registerData.id);
    if (id < 1 || id > 999) { setError("⚠️ ID must be between 1 and 999"); return; }
    if (!registerData.username || !registerData.password) { setError("⚠️ All fields are required"); return; }
    
    // Save to local storage
    localStorage.setItem("user", JSON.stringify(registerData));
    setError("");
    
    // 🔥 Show Green Tick Screen
    setIsRegistered(true);
    
    // 2 second baad automatic login mode par le jayega
    setTimeout(() => {
      setIsRegistered(false);
      setMode("login");
    }, 2000);
  };

  // --- LOGIN LOGIC ---
  const handleLogin = () => {
    const savedUserRaw = localStorage.getItem("user");
    
    // ⚠️ Check if user exists
    if (!savedUserRaw) { 
      setError("⚠️ Account not found. Please register first."); 
      setTimeout(() => setMode("register"), 1500); // Thodi der baad register par bhej do
      return; 
    }

    const savedUser = JSON.parse(savedUserRaw);
    
    // String vs Number issue na ho isliye String() use kiya hai
    if (String(loginData.id) === String(savedUser.id) && loginData.password === savedUser.password) {
      setError("");
      onSuccess();
    } else { 
      setError("❌ Invalid ID or Password"); 
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full max-w-md bg-gradient-to-br from-blue-900/40 to-black/70 border border-blue-400/30 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.3)] backdrop-blur-xl p-6 sm:p-7 text-white min-h-[400px] flex flex-col justify-center">
        
        {/* Success Screen (Big Green Tick) */}
        {isRegistered ? (
          <div className="flex flex-col items-center animate-in zoom-in duration-300">
            <FaCheckCircle className="text-green-400 text-8xl mb-4 animate-bounce" />
            <h2 className="text-2xl font-bold tracking-widest uppercase">Identity Created</h2>
            <p className="text-white/40 text-[10px] mt-2 uppercase tracking-[0.2em]">Redirecting to Portal...</p>
          </div>
        ) : (
          <>
            <button onClick={onClose} className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-blue-500/40 transition-all">
              ✕
            </button>

            <div className="flex flex-col items-center mb-6">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-400/30 mb-3">
                    <span className="text-2xl">🆔</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {mode === "login" ? "Access Identity" : "Create Identity"}
                </h2>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">
                    SECURE AUTHENTICATION PORTAL
                </p>
            </div>

            {error && <p className="text-red-400 text-xs font-bold text-center mb-4 bg-red-400/10 py-2 rounded-lg border border-red-400/20 animate-pulse">{error}</p>}

            {/* REGISTER MODE */}
            {mode === "register" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-1">Identity ID</label>
                  <input placeholder="1 to 999" className="p-3 rounded-lg bg-black/30 border border-white/20 outline-none focus:border-blue-400 transition-all" value={registerData.id} onChange={(e) => setRegisterData({ ...registerData, id: e.target.value })} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-1">Username</label>
                  <input placeholder="Name" className="p-3 rounded-lg bg-black/30 border border-white/20 outline-none focus:border-blue-400 transition-all" value={registerData.username} onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-1">Password</label>
                  <input type="password" placeholder="••••••••" className="p-3 rounded-lg bg-black/30 border border-white/20 outline-none focus:border-blue-400 transition-all" value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
                </div>
                <button onClick={handleRegister} className="mt-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-bold uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95">
                  Register Identity
                </button>
                <p className="text-sm text-center text-white/70">
                  Have account? <span onClick={() => setMode("login")} className="text-blue-400 cursor-pointer hover:underline">Log In</span>
                </p>
              </div>
            )}

            {/* LOGIN MODE */}
            {mode === "login" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-1">Identity ID</label>
                  <input placeholder="Enter ID" className="p-3 rounded-lg bg-black/30 border border-white/20 outline-none focus:border-blue-400 transition-all" value={loginData.id} onChange={(e) => setLoginData({ ...loginData, id: e.target.value })} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-1">Password</label>
                  <input type="password" placeholder="••••••••" className="p-3 rounded-lg bg-black/30 border border-white/20 outline-none focus:border-blue-400 transition-all" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                </div>
                <button onClick={handleLogin} className="mt-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-bold uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95">
                  Access Portal
                </button>
                <p className="text-sm text-center text-white/70">
                  New user? <span onClick={() => setMode("register")} className="text-blue-400 cursor-pointer hover:underline">Register</span>
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}