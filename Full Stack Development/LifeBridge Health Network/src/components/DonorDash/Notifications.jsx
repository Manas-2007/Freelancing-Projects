import React from 'react';

const RequestsAndActivity = () => {

  const requests = [
    { id: 1, name: "Rohan K.", blood: "B+", status: "Critical", hospital: "Apollo Hospital", units: 2, dist: "1.8 km", time: "20 min ago", note: "ICU patient — urgent transfusion needed" },
    { id: 2, name: "Neha S.", blood: "B+", status: "Urgent", hospital: "Yashoda Hospital", units: 1, dist: "3.2 km", time: "2 hrs ago", note: "Anemia patient, scheduled surgery tomorrow" },
    { id: 3, name: "Amit V.", blood: "B+", status: "Emergency", hospital: "AIIMS Bhopal", units: 3, dist: "0.5 km", time: "5 min ago", note: "Accident victim — multiple surgeries required immediately" }
  ];

  const notifications = [
    { id: 1, type: "critical", msg: "New B+ critical request near you (1.8 km away)", time: "20 min ago", unread: true },
    { id: 2, type: "thanks", msg: "Thank you! Your last donation saved 3 lives", time: "2 days ago", unread: true },
    { id: 3, type: "info", msg: "You're eligible to donate again on 12 Feb", time: "1 week ago", unread: false }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-8 lg:mt-10 shadow-xl">

      {/* ================= REQUESTS ================= */}
      <div className="flex-[2] bg-white rounded-[24px] lg:rounded-[32px] p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-100 shadow-sm">

        <div className="flex justify-between items-center mb-5 lg:mb-6">
          <div className="flex items-center gap-2">
            <span className="text-red-600 text-lg lg:text-xl">📍</span>
            <h3 className="text-[15px] sm:text-[16px] lg:text-[18px] font-[600] text-gray-800 tracking-tight">
              Requests Near You
            </h3>
          </div>

          <span className="bg-red-50 text-red-600 text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full border border-red-100">
            {requests.length} active
          </span>
        </div>

        <div className="space-y-3 sm:space-y-4">

          {requests.map((req) => (
            <div
              key={req.id}
              className="
                p-4 sm:p-5 rounded-[20px] lg:rounded-[24px]
                bg-[#f8f9fa] border border-gray-50
                hover:border-red-200 transition-all group
              "
            >

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">

                {/* LEFT */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">

                  <div className="w-[42px] h-[42px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] bg-red-600 rounded-full flex items-center justify-center text-white font-black text-sm sm:text-base shadow-md">
                    {req.blood}
                  </div>

                  <div>

                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">

                      <h4 className="font-bold text-gray-800 text-[13px] sm:text-[14px]">
                        {req.name}
                      </h4>

                      <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[9px] sm:text-[10px] font-bold rounded-md">
                        ● {req.status}
                      </span>

                      <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] sm:text-[10px] font-bold rounded-md">
                        ✓ Group match
                      </span>

                    </div>

                    <p className="text-[12px] sm:text-[13px] font-bold text-gray-700">
                      Needs {req.units} units <span className="text-gray-400 font-medium">at</span> {req.hospital}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-gray-600 mt-1 font-medium">
                      <span>📍 {req.dist}</span>
                      <span>👨‍⚕️ Dr. Mehta</span>
                      <span>🕒 {req.time}</span>
                    </div>

                  </div>

                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-2 mt-2 md:mt-0">

                  <button className="p-2 sm:p-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl text-gray-600">
                    📞
                  </button>

                  <button className="px-4 sm:px-5 py-2 sm:py-3 bg-red-600 text-white text-[11px] sm:text-[13px] font-bold rounded-lg sm:rounded-xl hover:bg-red-700 transition-all">
                    Accept
                  </button>

                </div>

              </div>

              {/* NOTE */}
              <div className="mt-3 py-2 px-3 sm:px-4 bg-white/50 rounded-lg border border-dashed border-gray-200">

                <p className="text-[10px] sm:text-[11px] italic text-gray-500 font-medium">
                  "{req.note}"
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ================= NOTIFICATIONS ================= */}
      <div className="flex-1 bg-white rounded-[24px] lg:rounded-[32px] p-4 sm:p-5 md:p-6 border border-gray-100 shadow-sm mt-4 lg:mt-0">

        <div className="flex justify-between items-center mb-5 lg:mb-6">
          <h3 className="text-[15px] sm:text-[15px] lg:text-[16px] font-[600] text-gray-800">
            🔔 Notifications
          </h3>

          <button className="text-[10px] sm:text-[11px] font-bold text-red-600 hover:underline">
            Mark all read
          </button>
        </div>

        <div className="space-y-5 sm:space-y-6">

          {notifications.map((note) => (
            <div key={note.id} className="relative pl-6 sm:pl-8 flex flex-col gap-1">

              <div className="absolute left-[9px] sm:left-[11px] top-5 bottom-[-24px] w-[1px] bg-gray-100" />

              <div className={`absolute left-0 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center
                ${note.type === 'critical' ? 'bg-red-500' : note.type === 'thanks' ? 'bg-green-500' : 'bg-blue-500'}
              `} />

              <p className={`text-[12px] sm:text-[13px] ${
                note.unread ? 'font-bold text-gray-800' : 'font-medium text-gray-500'
              }`}>
                {note.msg}
              </p>

              <span className="text-[10px] sm:text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                {note.time}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default RequestsAndActivity;