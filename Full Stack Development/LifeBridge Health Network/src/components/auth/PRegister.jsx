import React, { useState } from "react";
import axios from "axios";

const PRegister = ({ onClose,mode,setMode,onLoginSuccess }) => {

  const [formData, setFormData] = useState({
    patientId: "",
    name: "",
    sex: "",
    age: "",
    bloodGroup: "",
    hospital: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (mode === "register") {
        if (formData.password !== formData.confirmPassword) {
          return alert("Passwords do not match!");
        }
        await axios.post("http://localhost:5000/api/auth/patient/register", formData);
        alert("Registration Successful! Please Login.");
        setMode("login");
      } else {
        const res = await axios.post("http://localhost:5000/api/auth/patient/login", {
          patientId: formData.patientId,
          password: formData.password
        });
        
        // Save to local storage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        
        onLoginSuccess(); // Dashboard par bhej dega
      }
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="w-full max-w-3xl h-[90vh] md:h-[600px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row relative animate-[fadeIn_.2s_ease]">
         {/* CLOSE BUTTON */}
           <button onClick={onClose} className="absolute top-2 right-4 md:top-1 md:right-1 z-50 text-white md:text-black p-2"> ✕ </button>

      {/* 🔴 PREMIUM LEFT PANEL */}
        <div className="hidden md:flex md:w-[40%] bg-[#880808] p-8 flex-col justify-between text-white relative overflow-hidden">

        {/* Background Icon Glow */}
        <div className="absolute top-[-10%] right-[-10%] opacity-10 pointer-events-none">
            <svg width="260" height="260" fill="none" stroke="white" strokeWidth="1">
            <circle cx="130" cy="130" r="120" />
            </svg>
        </div>

        {/* Top Content */}
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
                🏥
            </div>
            <span className="font-[700] text-xl tracking-tight">
                PatientCare
            </span>
            </div>

            <h2 className="text-[30px] font-[600] leading-[1.1] mb-5 tracking-tight">
            Smart <br />
            <span className="text-red-300 italic font-serif">
                Patient
            </span> <br />
            Management
            </h2>

            <div className="space-y-3">
            <div className="h-1 w-12 bg-red-400 rounded-full"></div>

            <p className="text-red-100 text-sm leading-relaxed max-w-[240px]">
                Register and manage patient data quickly for faster emergency response and better care coordination.
            </p>
            </div>
        </div>

       {/* Bottom Section (Better Filled) */}
<div className="relative z-10 space-y-4">

  {/* Highlight Line */}
  <div className="h-[1px] w-full bg-white/20"></div>

  {/* Card */}
  <div className="bg-white/10 backdrop-blur-xl p-5 rounded-[20px] border border-white/20 shadow-2xl">

    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-red-500/30 rounded-lg">
        ❤️
      </div>

      <div>
        <p className="text-[11px] font-[700] uppercase tracking-[2px] text-red-200">
          Hospital Efficiency
        </p>
        <p className="text-[10px] text-white/60">
          Real-time patient flow
        </p>
      </div>
    </div>

    <p className="text-[13px] leading-relaxed text-white/90 italic">
      Faster patient entry ensures quicker diagnosis, optimized resource usage, and better emergency handling.
    </p>

    {/* Mini Stats */}
    <div className="flex justify-between mt-4 text-center">
      <div>
        <p className="text-lg font-bold text-white">24/7</p>
        <p className="text-[10px] text-white/60">Access</p>
      </div>
      <div>
        <p className="text-lg font-bold text-white">Fast</p>
        <p className="text-[10px] text-white/60">Processing</p>
      </div>
      <div>
        <p className="text-lg font-bold text-white">Secure</p>
        <p className="text-[10px] text-white/60">Data</p>
      </div>
    </div>

  </div>
</div></div>

      {/* 🔵 RIGHT SIDE */}
<div className="w-full md:w-[60%] flex flex-col bg-[#fafafa] h-full min-h-0">
  {/* HEADER (FIXED + PREMIUM) */}
  <div className="pt-12 pb-4 px-4 md:p-6 bg-[#880808] md:bg-transparent text-white md:text-black">

    {/* 🔥 TOGGLE (PILL STYLE) */}
    <div className="mb-4">
      <div className="flex bg-gray-100 rounded-full p-1 shadow-inner">
        <button
          onClick={() => setMode("register")}
          className={`w-1/2 py-2 text-sm font-semibold rounded-full transition-all duration-200
          ${mode === "register"
              ? "bg-[#880808] text-white shadow-md"
              : "text-gray-600 hover:text-black"
            }`}
        > Register</button>

        <button onClick={() => setMode("login")}
          className={`w-1/2 py-2 text-sm font-semibold rounded-full transition-all duration-200
          ${mode === "login"
              ? "bg-[#880808] text-white shadow-md"
              : "text-gray-600 hover:text-black"
            }`}
        > Login </button>
      </div>
    </div>

    {/* TITLE */}
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white md:text-red-800">
      {mode === "login" ? "Patient Login" : "Patient Registration"}
    </h2>

    {/* SUBTEXT */}
    <p className="text-xs md:text-sm mt-1 text-red-100 md:text-gray-500">
      {mode === "login"
        ? "Access patient records securely"
        : "Hospital Patient Entry System"}
    </p>
  </div>

  {/* FORM CONTAINER */}
  <div className="flex-1 min-h-0 overflow-y-auto custom-red-scrollbar pt-2 md:pt-3 pb-5 px-5 md:px-6">

    {mode === "register" ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

        {/* Patient ID */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Patient ID
          </label>
          <input
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            placeholder="Enter ID"
            className="w-full px-4 py-2.5 rounded-[12px] border border-red-200 focus:border-[#880808] focus:ring-2 focus:ring-[#880808]/20 outline-none text-sm font-semibold transition"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Patient Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-2.5 rounded-[12px] border border-red-200 focus:border-[#880808] focus:ring-2 focus:ring-[#880808]/20 outline-none text-sm font-semibold transition"
          />
        </div>

        {/* 🔥 SEX + AGE (2 column on mobile) */}
        <div className="grid grid-cols-2 gap-3 md:contents">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Sex
            </label>
            <select 
              name="sex" 
              value={formData.sex}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-[12px] border border-red-200 bg-white focus:border-[#880808] focus:ring-2 focus:ring-[#880808]/20 outline-none text-sm font-semibold"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Age
            </label>
            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="25"
              className="w-full px-3 py-2.5 rounded-[12px] border border-red-200 focus:border-[#880808] focus:ring-2 focus:ring-[#880808]/20 outline-none text-sm font-semibold"
            />
          </div>
        </div>

        {/* 🔥 BLOOD + HOSPITAL (2 column mobile) */}
        <div className="grid grid-cols-2 gap-3 md:contents">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Blood Group
            </label>
            <select 
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-[12px] border border-red-200 bg-white focus:border-[#880808] focus:ring-2 focus:ring-[#880808]/20 outline-none text-sm font-semibold"
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Hospital
            </label>
            <input
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              placeholder="City Hospital"
              className="w-full px-3 py-2.5 rounded-[12px] border border-red-200 focus:border-[#880808] focus:ring-2 focus:ring-[#880808]/20 outline-none text-sm font-semibold"
            />
          </div>
        </div>

        {/* Password */}
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Password
          </label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-2.5 rounded-[12px] border border-red-200 focus:border-[#880808] focus:ring-2 focus:ring-[#880808]/20 outline-none text-sm font-semibold"
          />
        </div>

        {/* Confirm Password */}
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            className="w-full px-4 py-2.5 rounded-[12px] border border-red-200 focus:border-[#880808] focus:ring-2 focus:ring-[#880808]/20 outline-none text-sm font-semibold"
          />
        </div>
      </div>
    ) : (
      <div className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Patient ID 
          </label>
          <input
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            placeholder="Enter ID"
            className="w-full px-4 py-2.5 rounded-[12px] border border-red-200 focus:border-[#880808] focus:ring-2 focus:ring-[#880808]/20 outline-none text-sm font-semibold"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Password
          </label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-2.5 rounded-[12px] border border-red-200 focus:border-[#880808] focus:ring-2 focus:ring-[#880808]/20 outline-none text-sm font-semibold"
          />
        </div>
      </div>
    )}
  </div>

  {/* FOOTER (FIXED BUTTON) */}
  <div className="p-4 md:p-5 bg-white border-t border-gray-100">
    <button 
      onClick={handleSubmit} // <--- handleSubmit ko call kiya
      className="w-full bg-[#880808] hover:bg-red-700 text-white font-bold py-3 rounded-[14px] transition active:scale-[0.98] shadow-md"
    >
      {mode === "login" ? "LOGIN" : "REGISTER PATIENT"}
    </button>
  </div>
</div>

      {/* SCROLLBAR STYLE */}
      <style>{`
        .custom-red-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-red-scrollbar::-webkit-scrollbar-thumb {
          background-color: #880808;
          border-radius: 10px;
        }
        .custom-red-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-red-scrollbar {
          scrollbar-color: #880808 transparent;
          scrollbar-width: thin;
        }
      `}</style>

    </div>
  );
};

export default PRegister;