import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  MdSearch, MdOutlineFilterList, MdOutlineLocationOn, 
  MdCall, MdOutlinePersonOutline, MdOutlineArrowForward, MdSend
} from "react-icons/md";
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const DonorPool = () => {
  const { donorId } = useParams(); 
  const [searchQuery, setSearchQuery] = useState("");
  const [donors, setDonors] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const requestId = params.get('requestId');

  useEffect(() => {
    const searchFromUrl = params.get('search');
    if (searchFromUrl) setSearchQuery(searchFromUrl);

    const fetchDonors = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/api/donors/all-donors');
        setDonors(res.data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Donors load nahi ho pa rahe.");
      } finally {
        setLoading(false);
      }
    };
    fetchDonors();
  }, [location.search]);

  // ✅ 1. NEW: Direct Request Handler
  const sendDirectRequest = async (donor) => {
    // 1. Data retrieve karo
    const savedUser = localStorage.getItem('user');
    if (!savedUser) return alert("Bhai, pehle Patient login karo!");
    
    const patient = JSON.parse(savedUser);

    // 2. ID Extraction (Sabse important part)
    // Hum wahi ID nikalenge jo login ke waqt use hui thi (Custom ID like '1')
    const finalPatientId = patient.patientId || patient.user?.patientId || "1";

    const confirmReq = window.confirm(`Kya aap ${donor.name} ko emergency request bhejna chahte hain?`);
    
    if (confirmReq) {
      try {
        const payload = {
          // ✅ FIX: Forcefully sending the custom string ID (e.g., "1")
          patientId: String(finalPatientId), 
          
          donorId: donor._id,
          donorName: donor.name,
          name: patient.name || "Patient",
          bloodGroup: donor.bloodGroup, 
          units: 1,
          hospital: patient.hospital || "Manas Hospital", // Fallback name
          phone: patient.phone || "1234567890",
          status: 'Pending', 
          urgency: 'Critical',
          message: `Direct Emergency Request to ${donor.name} from ${patient.name}`
        };

        console.log("🚀 Sending Final Payload to Backend:", payload);

        const res = await axios.post('http://localhost:5000/api/requests/create', payload);
        
        if(res.status === 201 || res.status === 200) {
          alert(`Success! Request ID "${finalPatientId}" ke naam se Atlas mein save ho gayi hai.`);
          
          // Optional: Request bhejne ke baad Notifications page par bhej do
          // navigate('/notifications'); 
        }
      } catch (err) {
        console.error("❌ API Error:", err.response?.data || err.message);
        alert("Request fail ho gayi! Backend terminal check karo.");
      }
    }
  };

  // ✅ 2. Donation Success Handler
  const handleDonationSuccess = async (donorName) => {
    if (!requestId) {
      alert("Request ID missing hai!");
      return;
    }
    if (window.confirm(`Kya ${donorName} ne blood de diya hai?`)) {
      try {
        await axios.put(`http://localhost:5000/api/requests/status/${requestId}`, { status: 'Completed' });
        alert("Mubarak ho! Moving to History...");
        navigate('/history');
      } catch (err) {
        alert("Status update fail.");
      }
    }
  };

  const filteredDonors = donors.filter((donor) => {
    if (donorId) return donor._id.toString() === donorId.toString();
    const searchLower = searchQuery.toLowerCase().trim();
    return (
      donor.name.toLowerCase().includes(searchLower) ||
      donor.bloodGroup.toLowerCase().includes(searchLower) ||
      donor.location.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-transparent pb-10 w-full animate-[fadeIn_0.5s_ease-out]">
      
      {/* 1. HEADER (Design Same) */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 md:px-8 md:py-6 rounded-[20px] border border-gray-300 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-red-50 rounded-lg text-[#880808] border border-red-200">
            <MdOutlinePersonOutline size={20} />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-lg md:text-[23px] font-bold text-gray-900 tracking-tight leading-none">
              Donor <span className="text-[#880808]">Pool</span>
            </h1>
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mt-1">
              Verified Clinical Directory ({filteredDonors.length} Donors)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-80 group">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search group, name, or city..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 2. GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1400px] mx-auto px-2">
        {filteredDonors.map((donor) => (
          <div key={donor._id} className="bg-white rounded-[22px] border border-gray-600 p-5 shadow-sm relative border-l-[4px] border-l-[#880808] flex flex-col justify-between">
            
            {/* TOP INFO */}
            <div className="flex items-center gap-4 mb-4 text-left">
              <div className="flex flex-col items-center justify-center min-w-[55px] h-[55px] rounded-xl border border-red-400 bg-red-800 text-white shadow-sm">
                <span className="text-lg font-bold">{donor.bloodGroup}</span>
                <span className="text-[8px] font-bold uppercase tracking-tighter opacity-70">Type</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-800 truncate max-w-[160px]">{donor.name}</h3>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-tight">
                  ID: <span className="text-gray-700">{donor._id.slice(-5).toUpperCase()}</span>
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              <div className="text-left bg-gray-50 p-2 rounded-lg">
                <p className="text-[8px] font-black text-gray-500 uppercase mb-0.5">Total Donations</p>
                <span className="text-sm font-bold text-gray-800">{donor.donations || 0} Units</span>
              </div>
              <div className="text-left bg-gray-50 p-2 rounded-lg border-l border-gray-200">
                <p className="text-[8px] font-black text-gray-500 uppercase mb-0.5">Location</p>
                <span className="text-[10px] font-bold truncate block">{donor.location}</span>
              </div>
            </div>

            {/* ✅ SYSTEMATIC ACTION BUTTONS */}
            <div className="flex flex-col gap-2 w-full mt-auto">
              {(donorId || requestId) ? (
                // Coordination Mode (After Notification click)
                <div className="space-y-2 w-full">
                  <a href={`tel:${donor.phone}`} className="flex items-center justify-center gap-3 py-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 font-black text-sm transition-all hover:bg-emerald-100">
                    <MdCall size={18} className="animate-bounce" /> {donor.phone || "Call Donor"}
                  </a>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleDonationSuccess(donor.name)}
                      className="flex-[2] py-3 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-md hover:bg-emerald-700"
                    >
                      Donation Success ✓
                    </button>
                    <button 
                      onClick={() => navigate('/notifications')} 
                      className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl text-[10px] font-black uppercase border border-gray-200"
                    >
                      Back
                    </button>
                  </div>
                </div>
              ) : (
                // General Mode: Direct Request
                <button 
                  onClick={() => sendDirectRequest(donor)}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#880808] transition-all shadow-md"
                >
                  <MdSend size={16} />
                  Send Emergency Request
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorPool;