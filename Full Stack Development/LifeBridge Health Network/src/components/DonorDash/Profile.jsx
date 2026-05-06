import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2, FiShield, FiCheckCircle, FiDroplet } from "react-icons/fi";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6 md:space-y-8 mt-5">

      {/* ================= PROFILE HEADER ================= */}
      <div className="relative bg-white rounded-[28px] md:rounded-[36px] border border-gray-100 shadow-lg overflow-hidden p-5 sm:p-6 md:p-10 ">

        {/* decorative glow */}
        <div className="absolute top-0 right-0 w-28 md:w-40 h-28 md:h-40 bg-red-50 rounded-bl-[120px] opacity-60" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8">

          {/* avatar */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-900 rounded-[28px] md:rounded-[40px] flex items-center justify-center text-white text-2xl md:text-4xl font-black shadow-lg">
              MP
            </div>

            <div className="absolute -bottom-2 -right-2 bg-red-600 text-white w-8 h-8 md:w-11 md:h-11 rounded-xl md:rounded-2xl border-4 border-white flex items-center justify-center font-black text-[10px] md:text-sm shadow-md">
              B+
            </div>
          </div>

          {/* info */}
          <div className="text-center sm:text-left flex-1 w-full ">

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 justify-center sm:justify-start">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                Manas Patidar
              </h1>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black border border-green-100 uppercase tracking-wide w-fit mx-auto sm:mx-0">
                <FiCheckCircle size={12} /> Verified
              </span>
            </div>

            <p className="text-gray-500 font-medium mt-2 flex items-center justify-center sm:justify-start gap-2 text-sm">
              <FiMapPin className="text-red-500" /> Bhopal, Madhya Pradesh
            </p>

            {/* buttons */}
            <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-3">

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm hover:bg-black transition shadow-md"
              >
                <FiEdit2 size={15} /> Edit Profile
              </button>

              <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm hover:bg-gray-50 transition">
                <FiShield size={15} /> Privacy
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* PERSONAL */}
          <div className="bg-white rounded-[24px] md:rounded-[28px] p-5 md:p-8 border border-gray-100 shadow-sm">

            <h3 className="text-lg md:text-xl font-black text-gray-900 mb-5">
              Personal Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {[
                { icon: FiUser, label: "Full Name", value: "Manas Patidar" },
                { icon: FiMail, label: "Email", value: "manas@example.com" },
                { icon: FiPhone, label: "Phone", value: "+91 98765 43210" },
                { icon: FiDroplet, label: "Blood Group", value: "B+ (Positive)" }
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <item.icon className="text-red-500" />
                    {item.label}
                  </label>

                  <p className="text-sm font-bold text-gray-800 p-3 bg-gray-50 rounded-xl border border-gray-100 break-words">
                    {item.value}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* MEDICAL */}
          <div className="bg-white rounded-[24px] md:rounded-[28px] p-5 md:p-8 border border-gray-100 shadow-sm">

            <h3 className="text-lg md:text-xl font-black text-gray-900 mb-5">
              Medical Summary
            </h3>

            <div className="grid grid-cols-3 gap-3 md:gap-4">

              {[
                { label: "Weight", value: "72 kg" },
                { label: "Height", value: "178 cm" },
                { label: "Age", value: "18 yrs" }
              ].map((m, i) => (
                <div key={i} className="text-center p-3 md:p-4 bg-red-50/40 rounded-2xl border border-red-100">
                  <p className="text-[9px] md:text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">
                    {m.label}
                  </p>
                  <p className="text-base md:text-lg font-black text-gray-800">
                    {m.value}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* IMPACT */}
          <div className="bg-gray-900 rounded-[28px] md:rounded-[32px] p-6 md:p-8 text-white relative overflow-hidden">

            <div className="absolute -right-6 -bottom-6 opacity-10">
              <FiDroplet size={140} />
            </div>

            <h3 className="text-lg md:text-xl font-black mb-6 relative z-10">
              Donor Impact
            </h3>

            <div className="space-y-5 relative z-10 text-sm">

              {[
                { k: "Donor Since", v: "2023" },
                { k: "Total Impact", v: "36 Lives" },
                { k: "Next Eligibility", v: "June 2026", green: true }
              ].map((d, i) => (
                <div key={i} className="flex justify-between border-t border-white/10 pt-4 first:border-0 first:pt-0">
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    {d.k}
                  </span>
                  <span className={`font-black ${d.green ? "text-green-400" : "text-red-500"}`}>
                    {d.v}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* TIP */}
          <div className="p-5 md:p-6 bg-red-50 rounded-[24px] border border-red-100">
            <h4 className="font-black text-red-600 text-sm mb-2">
              Did you know?
            </h4>

            <p className="text-[11px] text-red-800 font-medium leading-relaxed">
              Regular donation improves circulation and helps maintain healthy iron levels.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Profile;