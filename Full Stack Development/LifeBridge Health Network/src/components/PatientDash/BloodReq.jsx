import React, { useState, useEffect } from 'react';
import API from '../../api/axios'; 
import { useNavigate } from 'react-router-dom';
import { 
  MdOutlineBloodtype, MdAdd, MdOutlineLocationOn, 
  MdClose, MdOutlinePerson, MdOutlineLocalHospital, 
  MdOutlineScale, MdCheckCircle 
} from "react-icons/md";
import { IoHeartSharp } from "react-icons/io5";

const BloodReq = () => {
  const navigate=useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState([]); 
  const [notification, setNotification] = useState(null);
  const [hasNotified, setHasNotified] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '', 
    units: 1,
    phone: '', 
    hospital: '',   
    urgency: 'Normal'
  });

  // 1. Fetch logic with real-time detection
  const fetchRequests = async () => {
    try {
      // ✅ Sahi endpoint: sirf is patient ki requests fetch ho rahi hain
      const res = await API.get('/requests/patient/663a7d4e3f1a2c001f8e4b5b');
      setRequests(res.data);

      // ✅ Check if any request is newly 'Accepted'
      const acceptedReq = res.data.find(req => req.status === 'Accepted');
      if (acceptedReq && !notification) {
        setNotification({
          donorName: acceptedReq.donorId?.name || "A Donor",
          bloodGroup: acceptedReq.bloodGroup,
          donorId: acceptedReq.donorId?._id
        });
        setHasNotified(true);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  // 2. Polling Logic: Har 5 second mein update hoga
  useEffect(() => {
    fetchRequests();
    const interval = setInterval(fetchRequests, 3000); 
    return () => clearInterval(interval);
  }, [hasNotified]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const finalData = {
        patientId: "663a7d4e3f1a2c001f8e4b5b", 
        ...formData
      };

      await API.post('/patients/register', finalData); 
      alert("Emergency Broadcasted! 🚑");
      setIsModalOpen(false);
      setHasNotified(false);
      fetchRequests(); 
    } catch (err) {
      alert("Error: " + (err.response?.data?.error || "Server error"));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 animate-[fadeIn_0.5s_ease-out] relative">
      
      {/* ✅ FIXED: NOTIFICATION POPUP */}
{notification && (
  <div className="fixed top-6 right-6 z-[200] w-full max-w-sm bg-white rounded-3xl shadow-2xl border-l-[6px] border-emerald-500 overflow-hidden animate-[slideIn_0.5s_ease-out]">
    <div className="p-5">
      {/* 1. Header with Close Icon */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2 text-emerald-600">
          <MdCheckCircle size={20} />
          <span className="font-black text-[10px] uppercase tracking-widest text-left">Match Found</span>
        </div>
        {/* Close Button */}
        <button 
          onClick={() => setNotification(null)} 
          className="text-gray-300 hover:text-red-500 transition-colors"
        >
          <MdClose size={22} />
        </button>
      </div>

      {/* 2. Message Content */}
      <h4 className="text-gray-900 font-bold text-sm text-left leading-tight pr-4">
        {notification.donorName} accepted your {notification.bloodGroup} request!
      </h4>
      <p className="text-gray-500 text-[11px] mt-2 font-medium text-left">
        Great news! Click below to see donor profile and coordinate.
      </p>

      {/* 3. Single Action Button - Fixed Navigation */}
      <button 
        onClick={() => {
          setNotification(null); // Close popup
          navigate('/notifications'); // Redirect to Notifications Tab
        }}
        className="mt-5 w-full py-3.5 bg-gray-900 text-white rounded-xl font-black text-[10px] uppercase tracking-[2px] shadow-lg hover:bg-emerald-600 transition-all active:scale-95"
      >
        View Donor Details
      </button>
    </div>
  </div>
)}

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white rounded-[20px] p-4 md:px-8 md:py-6 border border-gray-300 shadow-lg mb-6 mx-4 mt-4">
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-50/40 rounded-full blur-2xl -mr-16 -mt-16"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 text-left w-full md:w-auto">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-50 rounded-lg border border-red-200">
              <IoHeartSharp className="text-[#880808] text-[12px]" />
              <span className="text-[9px] font-bold text-[#880808] uppercase tracking-wider">Altruism in Action</span>
            </div>
            <h1 className="text-xl md:text-[23px] font-bold text-gray-900 tracking-tight leading-none">
              Nearby <span className="text-[#880808]">Requests</span>
            </h1>
            <p className="text-gray-600 font-semibold max-w-xl leading-snug text-[11px] md:text-[12px]">
              Monitor active blood requirements in your vicinity.
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#880808] transition-all active:scale-95 shadow-md w-full md:w-auto justify-center"
          >
            <MdAdd className="text-lg" /> New Blood Request
          </button>
        </div>
      </section>

      {/* TABLE SECTION */}
      <div className="rounded-[32px] border border-gray-600 shadow-xl overflow-hidden bg-white mx-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse table-auto">
            <thead>
              <tr className="bg-gray-50/80 border-b-2 border-gray-500">
                <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest text-center">S.No</th>
                <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest">Patient Details</th>
                <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest text-center">Group</th>
                <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest text-center">Units</th>
                <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest">Hospital</th>
                <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest text-center">Urgency</th>
                <th className="p-5 text-[11px] font-black text-gray-600 uppercase tracking-widest text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.length > 0 ? (
                requests.map((req, index) => (
                  <tr key={req._id} className="group hover:bg-green-50 transition-colors">
                    <td className="p-5 text-sm font-bold text-gray-400 border-r border-gray-50 text-center">{index + 1}</td>
                    <td className="p-5 border-r border-gray-50 min-w-[180px]">
                      <p className="font-bold text-gray-800 text-sm leading-none">{req.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase mt-1.5">ID: {req._id.slice(-6)}</p>
                    </td>
                    <td className="p-5 text-center border-r border-gray-50">
                      <span className="inline-block w-10 h-10 rounded-xl bg-red-700 text-white font-black text-sm leading-10">
                        {req.bloodGroup}
                      </span>
                    </td>
                    <td className="p-5 text-center border-r border-gray-50">
                      <p className="text-gray-900 font-black text-sm">{req.units}</p>
                    </td>
                    <td className="p-5 border-r border-gray-50">
                      <p className="font-bold text-gray-600 text-sm">{req.hospital}</p>
                    </td>
                    <td className="p-5 border-r border-gray-50 text-center">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${req.urgency === 'Critical' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
                        {req.urgency}
                      </span>
                    </td>
                    <td className="p-5 text-right">
                      {/* ✅ Status Pill Dynamic Update */}
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                        req.status === 'Accepted' 
                        ? 'bg-emerald-100 text-emerald-700 border-emerald-200' 
                        : 'bg-blue-50 text-blue-600 border-blue-100 animate-pulse'
                      }`}>
                        {req.status === 'Accepted' ? 'Accepted ✓' : 'Searching...'}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="7" className="p-20 text-center text-gray-400 font-bold uppercase text-xs">No active blood requests found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL (Original Logic Intact) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[3px]" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-[580px] bg-white rounded-[32px] shadow-2xl animate-[zoomIn_0.3s_ease-out] overflow-hidden">
            <div className="p-6 md:px-10 md:pt-8 md:pb-4 bg-white relative">
              <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-7 text-gray-300 hover:text-[#880808] p-2 hover:bg-red-50 rounded-full">
                <MdClose size={22} />
              </button>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight text-left">New Blood Request</h2>
            </div>

            <form onSubmit={handleSubmit} className="px-6 md:px-10 pb-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[11px] font-bold text-black uppercase tracking-wide ml-1">Patient Name</label>
                  <input required type="text" placeholder="e.g. Rohan Kapoor" onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm" />
                </div>
                <div className="space-y-1.5 text-left">
                  <label className="text-[11px] font-bold text-black uppercase tracking-wide ml-1">Phone Number</label>
                  <input required type="text" placeholder="Contact No." onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm" />
                </div>
              </div>
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-bold text-black uppercase tracking-wide ml-1">Units Required</label>
                <input required type="number" min="1" placeholder="e.g. 2" onChange={(e) => setFormData({...formData, units: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[11px] font-bold text-black uppercase tracking-wide ml-1">Blood Group</label>
                  <select required onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm">
                    <option value="">Select Group</option>
                    {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5 text-left">
                  <label className="text-[11px] font-bold text-black uppercase tracking-wide ml-1">Urgency</label>
                  <select onChange={(e) => setFormData({...formData, urgency: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm">
                    {['Normal', 'Urgent', 'Critical'].map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-bold text-black uppercase tracking-wide ml-1">Hospital / Location</label>
                <input required type="text" placeholder="Hospital Name" onChange={(e) => setFormData({...formData, hospital: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm" />
              </div>
              <button type="submit" className="w-full py-4 bg-[#880808] text-white rounded-[18px] font-bold text-sm uppercase tracking-widest hover:bg-black transition-all">
                Broadcast Request →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BloodReq;