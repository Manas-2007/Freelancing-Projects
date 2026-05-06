import React, { useState } from 'react';
import { FiSearch, FiFilter, FiMapPin, FiChevronRight } from "react-icons/fi";

const ReqTab = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const requests = [
    { id: 1, hospital: "Apollo Hospital", location: "Arera Colony, Bhopal", bloodType: "B+", units: 2, urgency: "Critical", distance: "0.8 km", time: "12 mins ago" },
    { id: 2, hospital: "AIIMS Bhopal", location: "Saket Nagar, Bhopal", bloodType: "O-", units: 1, urgency: "High", distance: "2.4 km", time: "45 mins ago" },
    { id: 3, hospital: "Bansal Hospital", location: "Shahpura, Bhopal", bloodType: "A+", units: 3, urgency: "Normal", distance: "4.1 km", time: "2 hrs ago" },
    { id: 4, hospital: "Hamidia Hospital", location: "Sultania Rd, Bhopal", bloodType: "AB-", units: 1, urgency: "Critical", distance: "5.5 km", time: "3 hrs ago" },
    { id: 5, hospital: "Chirayu Hospital", location: "Bairagarh, Bhopal", bloodType: "B-", units: 2, urgency: "High", distance: "8.2 km", time: "5 hrs ago" },
  ];

  return (
    <div className="space-y-6 md:space-y-8 mt-5">

      {/* HEADER */}
      <div className="flex flex-col gap-5">

        <div>
          <h1 className="text-2xl md:text-3xl font-[700] text-gray-900 tracking-tight">
            Nearby Requests
          </h1>
          <p className="text-gray-500 font-medium text-sm mt-1">
            Find urgent blood requirements in your vicinity.
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-3">

          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search hospital or area..."
              className="w-full bg-white border border-gray-500 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-medium outline-none focus:border-red-500 focus:ring-4 focus:ring-red-50 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button className="flex items-center justify-center gap-2 bg-white border border-gray-500 px-5 py-3.5 rounded-2xl font-bold text-sm hover:bg-gray-50 transition">
            <FiFilter /> Filters
          </button>

        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

        {requests.map((req) => (
          <div
            key={req.id}
            className="
              bg-white rounded-[26px]
              p-4 md:p-6
              border border-gray-100
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
              relative overflow-hidden
            "
          >

            {/* URGENCY BAR */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1.5
                ${req.urgency === 'Critical'
                  ? 'bg-red-600'
                  : req.urgency === 'High'
                    ? 'bg-orange-500'
                    : 'bg-blue-500'
                }`}
            />

            {/* TOP */}
            <div className="flex justify-between items-start mb-4">

              <div className="flex gap-3 md:gap-4">

                <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 rounded-xl flex flex-col items-center justify-center text-red-600 border border-red-100">
                  <span className="text-sm md:text-lg font-black">{req.bloodType}</span>
                  <span className="text-[8px] font-bold uppercase">Req</span>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 text-base md:text-lg">
                    {req.hospital}
                  </h3>

                  <p className="flex items-center gap-1 text-gray-400 text-[11px] md:text-xs font-medium mt-1">
                    <FiMapPin size={12} /> {req.location}
                  </p>
                </div>

              </div>

              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
                {req.urgency}
              </span>

            </div>

            {/* INFO */}
            <div className="grid grid-cols-3 gap-2 border-y border-gray-50 py-4 mb-4 text-center">

              <div className="border-r border-gray-100">
                <p className="text-[9px] text-gray-400 font-bold uppercase">Units</p>
                <p className="text-sm font-bold text-gray-800">{req.units}</p>
              </div>

              <div className="border-r border-gray-100">
                <p className="text-[9px] text-gray-400 font-bold uppercase">Distance</p>
                <p className="text-sm font-bold text-gray-800">{req.distance}</p>
              </div>

              <div>
                <p className="text-[9px] text-gray-400 font-bold uppercase">Time</p>
                <p className="text-sm font-bold text-gray-800">{req.time}</p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">

              <button className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-black transition">
                View
              </button>

              <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold text-xs hover:bg-red-700 transition flex items-center justify-center gap-1">
                Accept <FiChevronRight />
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* MAP CTA */}
      <div className="bg-gray-900 rounded-[28px] p-6 md:p-8 text-white flex flex-col md:flex-row justify-between items-center gap-5 relative overflow-hidden">

        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center md:text-left">
          <h4 className="text-lg md:text-xl font-black">Live Map View</h4>
          <p className="text-gray-400 text-sm mt-1">
            Visualize all nearby hospitals on map
          </p>
        </div>

        <button className="relative z-10 bg-white text-gray-900 px-6 py-3 rounded-xl font-black text-sm hover:scale-105 transition">
          Open Map
        </button>

      </div>

    </div>
  );
};

export default ReqTab;