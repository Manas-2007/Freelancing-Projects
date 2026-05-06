import React from 'react';
import { LuHistory, LuCheck, LuClock } from "react-icons/lu";

const History = () => {
    // Sample records for the LifeDrop patient history
    const records = [
        { id: 1, type: "Whole Blood", date: "12 April 2026", hospital: "City Hospital", status: "Completed" },
        { id: 2, type: "Plasma", date: "05 May 2026", hospital: "Apollo BPL", status: "Pending" },
    ];

    return (
        <div className="animate-[fadeIn_0.3s_ease-out]">
            {/* Header Section */}
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#880808] p-2 rounded-lg text-white">
                    <LuHistory size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Request History</h2>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Hospital</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {records.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-bold text-gray-700 text-sm">{item.type}</td>
                                <td className="px-6 py-4 text-gray-500 text-sm">{item.date}</td>
                                <td className="px-6 py-4 text-gray-500 text-sm">{item.hospital}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                                        item.status === 'Completed' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                                    }`}>
                                        {/* FIXED: Changed LuCheckCircle to LuCheck */}
                                        {item.status === 'Completed' ? <LuCheck size={12} /> : <LuClock size={12} />}
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;