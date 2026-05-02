import React from 'react';

const FooterSection = () => {
  const history = [
    { hospital: "Apollo Hospital", reason: "Anonymous patient • 1 unit", date: "12 Nov 2025", status: "Fulfilled" },
    { hospital: "Yashoda Hospital", reason: "Trauma case • 1 unit", date: "08 Aug 2025", status: "Fulfilled" },
    { hospital: "Care Hospital", reason: "Surgery support • 1 unit", date: "21 Apr 2025", status: "Fulfilled" },
    { hospital: "Apollo Hospital", reason: "Maternity • 1 unit", date: "02 Jan 2025", status: "Fulfilled" },
    { hospital: "KIMS Hospital", reason: "Anemia patient • 1 unit", date: "15 Sep 2024", status: "Fulfilled" },
  ];

  const steps = [
    { num: 1, title: "Doctor creates request", desc: "Patient details + blood group + urgency" },
    { num: 2, title: "System matches donors", desc: "Filters by blood group, location & availability" },
    { num: 3, title: "Donors notified", desc: "Nearby eligible donors get instant alerts" },
    { num: 4, title: "Donor accepts", desc: "Donor confirms; doctor sees match in real-time" },
    { num: 5, title: "Donation completed", desc: "Status fulfilled; history updated for both sides" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-10 pb-10">
      
      {/* 🏥 LEFT: YOUR DONATION HISTORY */}
      <div className="flex-[2] bg-white rounded-[32px] p-8 border border-gray-100 shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-[18px] font-[700] text-black tracking-tight">Your Donation History</h3>
          <button className="text-[12px] font-bold text-red-600 flex items-center gap-1 hover:underline">
            View all <span>→</span>
          </button>
        </div>

        <div className="relative space-y-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-100"></div>

          {/* Fixed line below: Removed the "requests.length" check that caused the error */}
          {history.map((item, idx) => (
            <div key={idx} className="relative pl-10 flex items-center justify-between group">
              <div className="absolute left-0 w-[16px] h-[16px] bg-white border-4 border-red-600 rounded-full z-10 transition-transform group-hover:scale-125"></div>
              
              <div>
                <h4 className="font-bold text-gray-800 text-[15px]">{item.hospital}</h4>
                <p className="text-[12px] text-gray-500 font-[400]">{item.reason}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1">
                  <span className="w-1 h-1 bg-blue-600 rounded-full"></span> {item.status}
                </span>
                <span className="text-[12px] font-bold text-gray-400 w-[80px] text-right">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 RIGHT: PROCESS GUIDE */}
      <div className="flex-1 bg-white rounded-[32px] p-8 border border-gray-100 shadow-lg flex flex-col">
        <h3 className="text-[17px] font-[700] text-black mb-2">From Request to Donation</h3>
        <p className="text-[11px] text-gray-600 font-bold uppercase tracking-wider mb-8">How LifeDrop matches you</p>

        <div className="space-y-6 flex-1">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4">
              <div className="w-6 h-6 shrink-0 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-[11px] font-black border border-red-100">
                {step.num}
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-gray-800 mb-0.5">{step.title}</h4>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FooterSection;