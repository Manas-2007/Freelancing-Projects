import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  MdSearch, MdOutlineFilterList, MdOutlineLocationOn, 
  MdCall, MdOutlinePersonOutline, MdOutlineArrowForward
} from "react-icons/md";
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const DonorPool = () => {
  const { donorId } = useParams(); // URL path se donorId nikalega
  const [searchQuery, setSearchQuery] = useState("");
  const [donors, setDonors] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔄 Query String se requestId nikalo
  const params = new URLSearchParams(location.search);
  const requestId = params.get('requestId');

  useEffect(() => {
    // URL se search query sync
    const searchFromUrl = params.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }

    const fetchDonors = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/api/donors/all-donors');
        setDonors(res.data);
        setError(null);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Donors load nahi ho pa rahe.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, [location.search]);

  // ✅ HANDLER: Donation Success (Closing the Loop)
  const handleDonationSuccess = async (donorName) => {
    if (!requestId) {
        alert("Bhai, Request ID missing hai! Notification se aao.");
        return;
    }

    const confirmSuccess = window.confirm(`Hero! Kya aapne ${donorName} se blood receive kar liya hai? Isse request history mein move ho jayegi.`);
    
    if (confirmSuccess) {
      try {
        // Backend update call (Status: Completed)
        await axios.put(`http://localhost:5000/api/requests/status/${requestId}`, {
            status: 'Completed'
        });
        alert("Mubarak ho! Life Successfully Saved. Checking History...");
        navigate('/history');
      } catch (err) {
        console.error("Finalize Error:", err);
        alert("Error: Request complete nahi ho pa rahi.");
      }
    }
  };

  // DonorPool.jsx ke andar
const filteredDonors = donors.filter((donor) => {
  if (donorId) {
    // 1. Dono IDs ko String mein convert karo aur extra space hatao (Trim)
    const dbId = donor._id.toString().trim();
    const urlId = donorId.toString().trim();

    // Debugging ke liye console log (Ise check karna console mein)
    // console.log(`Comparing: DB(${dbId}) === URL(${urlId})`);

    return dbId === urlId;
  }

  // Normal search logic
  const searchLower = searchQuery.toLowerCase().trim();
  return (
    donor.name.toLowerCase().includes(searchLower) ||
    donor.bloodGroup.toLowerCase().includes(searchLower) ||
    donor.location.toLowerCase().includes(searchLower)
  );
});

  return (
    <div className="min-h-screen bg-transparent pb-10 w-full animate-[fadeIn_0.5s_ease-out]">
      
      {/* 1. HEADER (Design Unchanged) */}
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
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#880808] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by blood group, name, or city..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:bg-white focus:border-[#880808] text-[13px] font-semibold transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="p-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-red-50 hover:text-[#880808] hover:border-red-200 transition-all shadow-sm">
            <MdOutlineFilterList size={20} />
          </button>
        </div>
      </section>

      {/* 2. GRID */}
      {filteredDonors.length === 0 ? (
        <div className="text-center p-20 bg-white rounded-3xl border border-dashed border-gray-300">
          <p className="text-gray-400 font-bold">Bhai, is criteria ka koi donor nahi mila!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1400px] mx-auto px-2">
          {filteredDonors.map((donor) => (
            <div key={donor._id} className="bg-white rounded-[22px] border border-gray-600 p-5 shadow-sm hover:shadow-md transition-all duration-300 relative border-l-[4px] border-l-[#880808] flex flex-col justify-between">
              
              {/* TOP SECTION */}
              <div className="flex items-center gap-4 mb-4 text-left">
                <div className="flex flex-col items-center justify-center min-w-[55px] h-[55px] rounded-xl border border-red-400 bg-red-800 text-white shadow-sm">
                  <span className="text-lg font-bold leading-none">{donor.bloodGroup}</span>
                  <span className="text-[8px] font-bold uppercase mt-0.5 tracking-tighter opacity-70">Type</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[15px] font-bold text-gray-800 leading-tight truncate max-w-[160px]">
                    {donor.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-tight">
                      Donor ID: <span className="text-gray-700">{donor._id.slice(-5).toUpperCase()}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex mb-4">
                <span className="px-2.5 py-0.5 bg-red-50 text-[#880808] text-[9px] font-bold rounded-md border border-red-400 uppercase">
                   Verified Blood Donor
                </span>
              </div>

              <hr className="border-gray-50 mb-4" />

              {/* INFO GRID */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                <div className="text-left">
                  <p className="text-[8px] font-black text-gray-700 uppercase mb-0.5">Total Donations</p>
                  <div className="flex items-baseline gap-1">
                     <span className="text-sm font-bold text-gray-800">{donor.donations || 0}</span>
                     <span className="text-[9px] font-bold text-gray-700">Units</span>
                  </div>
                </div>
                <div className="text-left border-l border-gray-100 pl-3">
                  <p className="text-[8px] font-black text-gray-700 uppercase mb-0.5">Location</p>
                  <div className="flex items-center gap-1 text-gray-600">
                     <MdOutlineLocationOn className="text-[#880808]" size={12} />
                     <span className="text-[10px] font-bold truncate">{donor.location}</span>
                  </div>
                </div>
              </div>

              {/* DonorPool.jsx ke andar */}
<div className="flex flex-col gap-2 w-full">
  {/* ✅ Toggle Condition: Agar path mein donorId hai YA query mein requestId hai */}
  {(donorId || requestId) ? (
    <div className="space-y-3 w-full animate-[fadeIn_0.4s_ease-out]">
        <div className="flex items-center justify-center gap-3 py-3 bg-emerald-50 border border-emerald-100 rounded-2xl">
            <MdCall className="text-emerald-600 animate-bounce" size={18} />
            <span className="text-[13px] font-black text-emerald-800">
                {donor.phone || "+91 98765-43210"}
            </span>
        </div>

        <div className="flex gap-2">
            <button 
                onClick={() => handleDonationSuccess(donor.name)}
                className="flex-[2.5] py-3.5 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg"
            >
                Donation Success ✓
            </button>
            <button onClick={() => navigate('/notifications')} className="...">Back</button>
        </div>
    </div>
  ) : (
    /* Standard Request Button */
    <button className="...">Request Donation ›</button>
  )}
</div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonorPool;