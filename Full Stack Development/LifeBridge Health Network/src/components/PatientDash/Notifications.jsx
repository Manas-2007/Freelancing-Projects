import React from 'react';
import { MdOutlineNotificationsActive, MdOutlineCheckCircle } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

const Notifications = () => {
  // Sample notification data for the Patient Portal
  const alerts = [
    { id: 1, title: "Donor Found", message: "A matching O+ donor has been found for your request.", time: "2 mins ago", urgent: true },
    { id: 2, title: "Request Verified", message: "Your blood request for City Hospital has been verified.", time: "1 hour ago", urgent: false },
    { id: 3, title: "Profile Update", message: "Your contact information was successfully updated.", time: "Yesterday", urgent: false },
  ];

  return (
    <div className="animate-[fadeIn_0.3s_ease-out]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#880808] p-2 rounded-lg text-white">
          <MdOutlineNotificationsActive size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className={`p-5 rounded-[22px] border bg-white flex justify-between items-center transition-all hover:shadow-md ${
              alert.urgent ? 'border-red-100 bg-red-50/30' : 'border-gray-100'
            }`}
          >
            <div className="flex gap-4 items-start">
              <div className={`mt-1 p-2 rounded-full ${alert.urgent ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                {alert.urgent ? <BiTimeFive size={18} /> : <MdOutlineCheckCircle size={18} />}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">{alert.title}</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-md">
                  {alert.message}
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase whitespace-nowrap ml-4">
              {alert.time}
            </span>
          </div>
        ))}
      </div>

      {alerts.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[28px] border border-dashed border-gray-200">
          <p className="text-gray-400 font-medium">No new notifications</p>
        </div>
      )}
    </div>
  );
};

// 🔴 THE MISSING LINE:
export default Notifications;