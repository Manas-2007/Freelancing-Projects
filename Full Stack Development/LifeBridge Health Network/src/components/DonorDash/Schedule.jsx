import React, { useState } from 'react';
import { FiCalendar, FiClock, FiMapPin, FiCheckCircle, FiInfo } from "react-icons/fi";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const timeSlots = [
    { id: 1, time: "09:00 AM", status: "Available" },
    { id: 2, time: "10:30 AM", status: "Available" },
    { id: 3, time: "12:00 PM", status: "Full", disabled: true },
    { id: 4, time: "02:30 PM", status: "Available" },
    { id: 5, time: "04:00 PM", status: "Available" },
    { id: 6, time: "05:30 PM", status: "Full", disabled: true },
  ];

  return (
    <div className="space-y-6 md:space-y-8 mt-5">

      {/* HEADER */}
      <div className="px-1">
        <h1 className="text-2xl md:text-3xl font-[700] text-gray-900 tracking-tight">
          Schedule Appointment
        </h1>
        <p className="text-gray-500 font-medium text-sm mt-1">
          Book your next donation slot at a nearby center.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* DATE */}
          <div className="bg-white rounded-[24px] p-5 md:p-6 border border-gray-400 shadow-xl">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                <FiCalendar size={18} />
              </div>
              <h2 className="font-[500] text-gray-900 text-base md:text-lg">
                Select Date
              </h2>
            </div>

            <input
              type="date"
              className="w-full bg-gray-50 border border-gray-300 rounded-2xl p-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-50 transition font-semibold text-gray-700"
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />

          </div>

          {/* SLOTS */}
          <div className="bg-white rounded-[24px] p-5 md:p-6 border border-gray-400 shadow-xl">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                <FiClock size={18} />
              </div>
              <h2 className="font-[600] text-gray-900 text-base md:text-lg">
                Available Slots
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">

              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  disabled={slot.disabled}
                  onClick={() => setSelectedSlot(slot.time)}
                  className={`
                    rounded-2xl border p-3 md:p-4
                    flex flex-col items-center gap-1
                    text-sm font-bold transition-all
                    ${
                      slot.disabled
                        ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                        : selectedSlot === slot.time
                        ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-200"
                        : "bg-white text-gray-700 border-gray-300 hover:border-red-200 hover:bg-red-50"
                    }
                  `}
                >
                  {slot.time}

                  <span className={`
                    text-[10px] uppercase tracking-wider font-bold
                    ${selectedSlot === slot.time ? "text-red-100" : "text-gray-400"}
                  `}>
                    {slot.status}
                  </span>

                </button>
              ))}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* SUMMARY */}
          <div className="bg-gray-900 rounded-[28px] p-6 md:p-8 text-white relative overflow-hidden shadow-xl">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl" />

            <h3 className="text-lg md:text-xl font-[600] mb-6">
              Booking Summary
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FiMapPin className="text-red-500 mt-1" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Location</p>
                  <p className="text-sm font-semibold">Apollo Hospital, Bhopal</p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-white/10 pt-5">
                <FiCalendar className="text-red-500 mt-1" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Date</p>
                  <p className="text-sm font-semibold">
                    {selectedDate || "Not selected"}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-white/10 pt-5">
                <FiClock className="text-red-500 mt-1" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Time</p>
                  <p className="text-sm font-semibold">
                    {selectedSlot || "Not selected"}
                  </p>
                </div>
              </div>

            </div>

            <button
              disabled={!selectedDate || !selectedSlot}
              className={`
                w-full mt-6 py-3.5 rounded-2xl font-black text-sm transition
                ${
                  !selectedDate || !selectedSlot
                    ? "bg-white/10 text-white/30 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 text-white shadow-lg"
                }
              `}
            >
              Confirm Appointment
            </button>

          </div>

          {/* INFO */}
          <div className="bg-blue-50 rounded-[24px] p-5 border border-blue-100 flex gap-3">

            <FiInfo className="text-blue-600 mt-1" />

            <p className="text-[11px] text-blue-800 font-medium leading-relaxed">
              Eat well and stay hydrated at least 3 hours before donation.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Schedule;