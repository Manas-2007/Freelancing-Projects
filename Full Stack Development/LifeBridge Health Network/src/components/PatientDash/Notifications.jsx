import React from 'react';
import { 
  MdOutlineNotificationsActive, MdOutlineDoneAll, MdOutlineCall, 
  MdOutlineMessage, MdOutlineVerified, MdOutlineBloodtype,
  MdOutlineAccessTime, MdOutlineDeleteOutline, MdChevronRight
} from "react-icons/md";
import { IoHeartSharp } from "react-icons/io5";

const Notifications = () => {
  const notificationFeed = [
    {
      id: 1,
      type: 'Match',
      title: "Potential Match Found",
      desc: "3 verified donors found within 5km for patient Aarav Sharma (O+).",
      time: "2 mins ago",
      icon: <MdOutlineBloodtype />,
      color: "text-blue-500",
      bg: "bg-blue-50/50"
    },
    {
      id: 2,
      type: 'Accepted',
      title: "Request Accepted",
      desc: "Vikram Suri has confirmed the request and is moving toward City Hospital.",
      time: "15 mins ago",
      icon: <MdOutlineVerified />,
      color: "text-emerald-500",
      bg: "bg-emerald-50/50"
    },
    {
      id: 3,
      type: 'Call',
      title: "Missed Coordination Call",
      desc: "Donor Meera Joshi tried to reach the registered clinical contact number.",
      time: "1 hr ago",
      icon: <MdOutlineCall />,
      color: "text-amber-500",
      bg: "bg-amber-50/50"
    },
    {
      id: 4,
      type: 'Success',
      title: "Donation Fulfilled",
      desc: "The emergency blood requirement for Sneha Iyer has been successfully closed.",
      time: "5 hrs ago",
      icon: <IoHeartSharp />,
      color: "text-red-500",
      bg: "bg-red-50/50"
    },
    {
      id: 5,
      type: 'Message',
      title: "Clinical Note Received",
      desc: "New update from donor: 'Arriving at the North Wing entrance in 10 mins.'",
      time: "Yesterday",
      icon: <MdOutlineMessage />,
      color: "text-indigo-500",
      bg: "bg-indigo-50/50"
    }
  ];

  return (
    // Changed to w-[95%] and removed large horizontal padding
    <div className="min-h-screen bg-gray-50/30 pb-14  w-[99%] mx-auto animate-[fadeIn_0.5s_ease-out]">
      
     <section className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 md:px-8 md:py-6 rounded-[20px] border border-gray-300 shadow-lg">
  {/* Left Side: Icon & Titles */}
  <div className="flex items-center gap-3 w-full md:w-auto">
    <div className="p-2.5 bg-red-50 rounded-lg text-[#880808] border border-red-200 shrink-0">
      <MdOutlineNotificationsActive size={20} />
    </div>
    <div className="flex flex-col text-left">
      <h1 className="text-lg md:text-[23px] font-bold text-gray-900 tracking-tight leading-none">
        Notification <span className="text-[#880808]">Center</span>
      </h1>
      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mt-1">
        Real-time clinical alerts
      </p>
    </div>
  </div>

  {/* Right Side: Action Buttons - Responsive & Premium */}
  <div className="flex items-center gap-2 w-full md:w-auto justify-start sm:justify-center">
    <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-[10px] font-bold text-black uppercase tracking-widest hover:bg-white hover:border-[#880808] hover:text-[#880808] transition-all shadow-sm whitespace-nowrap">
      <MdOutlineDoneAll size={16} /> Mark all read
    </button>
    <button className="p-2.5 text-gray-600 bg-white border border-gray-300 hover:border-red-400 hover:text-[#880808] hover:bg-red-50 rounded-xl transition-all shadow-sm">
      <MdOutlineDeleteOutline size={20} />
    </button>
  </div>
</section>

      {/* 2. REFINED NOTIFICATION LIST - Utilizing Full 95% Width */}
      <div className="w-full space-y-3">
        {notificationFeed.map((notif) => (
          <div 
            key={notif.id} 
            className="group relative flex items-center gap-4 md:gap-6 bg-white p-4 md:p-5 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            {/* Status Accent Pillar */}
            <div className={`absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full ${notif.color.replace('text', 'bg')}`}></div>

            {/* Icon Circle */}
            <div className={`shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl ${notif.bg} ${notif.color} flex items-center justify-center transition-transform group-hover:scale-105`}>
              {React.cloneElement(notif.icon, { size: 20 })}
            </div>

            {/* Content Area */}
            <div className="flex-1 min-w-0 pr-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                <h3 className="font-semibold text-gray-800 text-sm md:text-base tracking-tight text-left">{notif.title}</h3>
                <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase">
                  <MdOutlineAccessTime size={12} /> {notif.time}
                </span>
              </div>
              <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed text-left truncate md:whitespace-normal">
                {notif.desc}
              </p>
            </div>

            {/* Interaction Arrow */}
            <div className="shrink-0 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all">
               <MdChevronRight size={22} />
            </div>
          </div>
        ))}
      </div>

      {/* 3. FOOTER */}
      <div className="mt-10 text-center">
        <button className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#880808] transition-colors">
          Load older notifications
        </button>
      </div>
    </div>
  );
};

export default Notifications;