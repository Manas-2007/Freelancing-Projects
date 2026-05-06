import React from 'react';
import { LuUser, LuMail, LuPhone, LuMapPin, LuDroplets } from "react-icons/lu";

const Profile = () => {
  // Sample Patient Data
  const user = {
    name: "Manas Patidar",
    id: "P-9921",
    email: "manas@example.com",
    phone: "+91 98765 43210",
    location: "Bhopal, MP",
    bloodGroup: "B+",
    emergencyContact: "Father - 98765 00000"
  };

  return (
    <div className="animate-[fadeIn_0.3s_ease-out]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-[#880808] p-2 rounded-lg text-white">
          <LuUser size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Card: Avatar & Basic Info */}
        <div className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-sm text-center">
          <div className="w-24 h-24 bg-[#880808] rounded-full mx-auto flex items-center justify-center text-white text-3xl font-black border-4 border-red-50 mb-4">
            M
          </div>
          <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mt-1">{user.id}</p>
          
          <div className="mt-6 inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full text-[#880808] font-bold text-sm">
            <LuDroplets size={16} />
            Blood Group: {user.bloodGroup}
          </div>
        </div>

        {/* Right Card: Detailed Information */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[28px] border border-gray-100 shadow-sm">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Contact Details</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-50 rounded-xl text-gray-400"><LuMail size={20} /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Email Address</p>
                <p className="text-sm font-semibold text-gray-700">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-50 rounded-xl text-gray-400"><LuPhone size={20} /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Phone Number</p>
                <p className="text-sm font-semibold text-gray-700">{user.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-50 rounded-xl text-gray-400"><LuMapPin size={20} /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Location</p>
                <p className="text-sm font-semibold text-gray-700">{user.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-50 rounded-xl text-gray-400"><LuUser size={20} /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Emergency Contact</p>
                <p className="text-sm font-semibold text-gray-700">{user.emergencyContact}</p>
              </div>
            </div>
          </div>

          <button className="mt-10 w-full md:w-auto px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all active:scale-95">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

// 🔴 THE MISSING LINE:
export default Profile;