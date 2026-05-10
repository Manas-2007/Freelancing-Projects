import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  MdSearch, MdOutlineFilterList, MdOutlineLocationOn, 
  MdOutlineVerified, MdCall, MdChatBubbleOutline, 
  MdOutlineHistory, MdStar, MdOutlinePersonOutline
} from "react-icons/md";
import { useParams, useNavigate,useLocation } from 'react-router-dom';

const DonorPool = () => {
  const { donorId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [donors, setDonors] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔄 FETCH DONORS + URL SEARCH SYNC
  useEffect(() => {
    // 1. URL se search query nikalo
    const params = new URLSearchParams(location.search);
    const searchFromUrl = params.get('search');

    // 2. Agar URL mein search hai, toh use state mein set karo
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
  }, [location.search]); // 👈 Location track karna zaroori hai

  // 🔍 UPDATED FILTER LOGIC
  const filteredDonors = donors.filter((donor) => {
    if (donorId) {
      const dId = donor._id?.toString().trim();
      const uId = donorId?.toString().trim();

      // console.log(`Comparing ${donor.name}: DB_ID(${dId}) === URL_ID(${uId})`);

      return dId === uId;
    }

    // 2. Normal Search Logic (Jab ID nahi hai)
    const searchLower = searchQuery.toLowerCase().trim();
    return (
      donor.name.toLowerCase().includes(searchLower) ||
      donor.bloodGroup.toLowerCase().includes(searchLower) ||
      donor.location.toLowerCase().includes(searchLower)
    );
    return true;
  });

  return (
    <div className="min-h-screen bg-transparent pb-10 w-full animate-[fadeIn_0.5s_ease-out]">
      
      {/* 1. COMPACT HEADER */}
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

      {/* 2. COMPACT GRID */}
      {filteredDonors.length === 0 ? (
        <div className="text-center p-20 bg-white rounded-3xl border border-dashed border-gray-300">
          <p className="text-gray-400 font-bold">Bhai, is criteria ka koi donor nahi mila!</p>
        </div>
      ) : (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1400px] mx-auto px-2">
  {filteredDonors.map((donor) => (
    <div key={donor._id} className="bg-white rounded-[22px] border border-gray-600 p-5 shadow-sm hover:shadow-md transition-all duration-300 relative border-l-[4px] border-l-[#880808] flex flex-col justify-between">
      

      {/* 1. TOP SECTION: COMPACT BLOOD GROUP & NAME */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex flex-col items-center justify-center min-w-[55px] h-[55px] rounded-xl border border-red-400 bg-red-800 text-white shadow-sm">
          <span className="text-lg font-bold  text-[white] leading-none">{donor.bloodGroup}</span>
          <span className="text-[8px] font-bold text-gray-400 uppercase mt-0.5 tracking-tighter">Type</span>
        </div>

        {/* Donor Name & ID */}
        <div className="flex flex-col text-left">
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

      {/* 2. TAG LINE */}
      <div className="flex mb-4">
        <span className="px-2.5 py-0.5 bg-red-50 text-[#880808] text-[9px] font-bold rounded-md border border-red-400 uppercase">
           Verified Blood Donor
        </span>
      </div>

      <hr className="border-gray-50 mb-4" />

      {/* 3. INFO GRID (Donations & Location) */}
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

      {/* 4. DYNAMIC ACTION BUTTONS */}
      <div className="flex gap-2"> 
        {donorId ? (
          <>
            <button 
        onClick={() => alert(`Coordination started with ${donor.name}!`)}
        className="flex-1 py-2.5 bg-emerald-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg hover:bg-emerald-700 transition-all active:scale-95 flex items-center justify-center gap-1"
      >
        Final Accept ✓
      </button>
           <button 
        onClick={() => navigate('/notifications')}
        className="flex-1 py-2.5 bg-gray-50 text-gray-400 border border-gray-200 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-red-50 hover:text-red-600 transition-all"
      >
        Go Back
      </button>
    </>
  ) : (
    <button className="flex-1 py-2.5 px-3 bg-[#880808] text-white rounded-xl text-[9px] font-bold uppercase tracking-[1.5px] shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-1">
      Request Donation <span className="text-xs">›</span>
    </button>
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