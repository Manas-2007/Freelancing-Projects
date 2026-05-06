import React from 'react';

const DonorPool = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold text-[#880808] mb-4">Available Donors</h2>
      <p className="text-gray-600">Search for donors in your area...</p>
    </div>
  );
};

// 🔴 THIS IS THE MISSING LINE
export default DonorPool;